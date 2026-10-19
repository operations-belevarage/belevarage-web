import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Belevarage",
  description: "The Belevarage blog — coming soon.",
};

export default function BlogPage() {
  return (
    <section
      className="section section--crimson"
      style={{ minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: 150 }}
    >
      <div className="container text-center">
        <span className="kicker kicker--light">Blog</span>
        <h1 className="hero__title" style={{ marginBottom: "1rem" }}>Our Blog</h1>
        <p className="hero__subtitle" style={{ margin: "0 auto 2rem", maxWidth: 560 }}>
          We&apos;re working on stories and insights from the LCCIA Bandh community. Check back soon.
        </p>
        <Link href="/" className="btn btn-gold">← Back to Home</Link>
      </div>
    </section>
  );
}
