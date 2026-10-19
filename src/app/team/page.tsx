import Link from "next/link";

export const metadata = {
  title: "Our Team — Belevarage",
  description: "Meet the Belevarage team — coming soon.",
};

export default function TeamPage() {
  return (
    <section
      className="section section--crimson"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="container text-center">
        <span className="kicker kicker--light">Our Team</span>
        <h1 className="hero__title" style={{ marginBottom: "1rem" }}>Meet the Team</h1>
        <p className="hero__subtitle" style={{ margin: "0 auto 2rem", maxWidth: 560 }}>
          We&apos;re putting together our team page. Check back soon.
        </p>
        <Link href="/" className="btn btn-gold">← Back to Home</Link>
      </div>
    </section>
  );
}
