import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsroom — Belevarage",
  description: "Belevarage newsroom — press and media.",
};

export default function PressPage() {
  return (
    <section
      className="section section--crimson"
      style={{ minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: 150 }}
    >
      <div className="container text-center">
        <span className="kicker kicker--light">Newsroom</span>
        <h1 className="hero__title" style={{ marginBottom: "1rem" }}>Press &amp; Media</h1>
        <p className="hero__subtitle" style={{ margin: "0 auto 2rem", maxWidth: 560 }}>
          Our newsroom is coming soon. For press enquiries in the meantime, please get in touch.
        </p>
        <Link href="/contact" className="btn btn-gold">Contact Us →</Link>
      </div>
    </section>
  );
}
