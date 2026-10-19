// Lightweight, dependency-free session tokens (HMAC-SHA256 via Web Crypto).
// Works in both the Edge middleware and Node route handlers. Signed with
// NEXTAUTH_SECRET so a session cookie cannot be forged without the server key.

export const SESSION_COOKIE = "bv_session";
const TTL_SECONDS = 60 * 60 * 8; // 8 hours

export type Session = { sub: string; email: string; role: string; exp: number };

const encoder = new TextEncoder();

function b64urlEncode(input: Uint8Array | string): string {
  const bytes = typeof input === "string" ? encoder.encode(input) : input;
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlToBytes(input: string): Uint8Array<ArrayBuffer> {
  let s = input.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const binary = atob(s);
  const buffer = new ArrayBuffer(binary.length);
  const out = new Uint8Array(buffer);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

async function getKey(): Promise<CryptoKey> {
  const secret = process.env.NEXTAUTH_SECRET || "";
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken(
  payload: Omit<Session, "exp">,
  ttlSeconds: number = TTL_SECONDS
): Promise<string> {
  const body: Session = { ...payload, exp: Math.floor(Date.now() / 1000) + ttlSeconds };
  const data = b64urlEncode(JSON.stringify(body));
  const key = await getKey();
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return `${data}.${b64urlEncode(new Uint8Array(sig))}`;
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<Session | null> {
  if (!token || !token.includes(".")) return null;
  const [data, sig] = token.split(".");
  if (!data || !sig) return null;
  try {
    const key = await getKey();
    const ok = await crypto.subtle.verify(
      "HMAC",
      key,
      b64urlToBytes(sig),
      encoder.encode(data)
    );
    if (!ok) return null;
    const body = JSON.parse(new TextDecoder().decode(b64urlToBytes(data))) as Session;
    if (!body.exp || body.exp < Math.floor(Date.now() / 1000)) return null;
    return body;
  } catch {
    return null;
  }
}
