import { IMAGE_CREDITS } from "@/lib/images";

export const metadata = {
  title: "Image Credits — BELEVARAGE",
  description: "Attribution for photography used across the Belevarage website.",
};

export default function CreditsPage() {
  return (
    <section className="section section--ivory mandala-bg" style={{ paddingTop: 150 }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <span className="kicker">Attribution</span>
        <h1 style={{ marginBottom: "0.75rem" }}>Image Credits</h1>
        <p style={{ color: "var(--charcoal)", marginBottom: "2.5rem" }}>
          We&apos;re grateful to the photographers whose work brings this site to life.
          Images below are used under their respective licences; the Belevarage logo and
          brand marks belong to Belevarage / LCCIA Bandh.
        </p>

        <ul style={{ listStyle: "none", display: "grid", gap: "1rem" }}>
          {IMAGE_CREDITS.map((c, i) => (
            <li key={i} className="card" style={{ borderLeft: "4px solid var(--saffron-gold)", padding: "1.25rem 1.5rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", alignItems: "baseline" }}>
                <strong style={{ color: "var(--crimson)" }}>{c.title}</strong>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem" }}>{c.license}</a>
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--charcoal)", marginTop: "0.35rem" }}>
                by {c.creator} ·{" "}
                <a href={c.source} target="_blank" rel="noopener noreferrer">source</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
