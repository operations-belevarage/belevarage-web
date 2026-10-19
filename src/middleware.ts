import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth";

// Admin data APIs that must never return data to a visitor who is not logged in.
// Public forms POST to these same paths, so only reads (GET) are locked here.
const ADMIN_DATA_API = /^\/api\/(enquiries|registrations|businesses|community|farmers|healthcare)(\/|$)/;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value);

  // Protect every admin page except the login screen itself.
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  // Already logged in and visiting the login page -> go to the dashboard.
  if (pathname === "/admin/login" && session) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin";
    url.search = "";
    return NextResponse.redirect(url);
  }

  // Block reads of customer data unless logged in; public form submissions (POST) pass.
  if (ADMIN_DATA_API.test(pathname) && req.method === "GET" && !session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
