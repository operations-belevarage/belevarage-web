import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press — BELEVARAGE",
  description: "News, press releases, and media resources for BELEVARAGE.",
};

const PRESS_RELEASES = [
  {
    date: "April 20, 2026",
    title: "BELEVARAGE Announces Series A Funding Round",
    excerpt: "Platform raises significant investment to scale community commerce across India.",
  },
  {
    date: "April 5, 2026",
    title: "BELEVARAGE Launches in 10 New Communities",
    excerpt: "Expansion brings event-driven commerce to over 50,000 new community members.",
  },
  {
    date: "March 15, 2026",
    title: "Partnership with Farmer Cooperatives Announced",
    excerpt: "Strategic alliance to bring 1,000+ farmers onto the platform.",
  },
  {
    date: "February 28, 2026",
    title: "BELEVARAGE Wins Social Impact Innovation Award",
    excerpt: "Recognized for creating livelihoods through community-driven commerce.",
  },
];

const MEDIA_MENTIONS = [
  { outlet: "The Economic Times", quote: "BELEVARAGE is redefining how commerce happens in India." },
  { outlet: "Business Standard", quote: "A fresh take on socio-commerce rooted in Indian values." },
  { outlet: "Inc42", quote: "The startup combining AI with community trust networks." },
  { outlet: "YourStory", quote: "Creating 1.9M livelihoods through event-driven commerce." },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Newsroom</span>
            <h1 className="hero__title">Press & Media</h1>
            <p className="hero__subtitle">
              Latest news, press releases, and media resources about BELEVARAGE.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Latest News</span>
            <h2>Press Releases</h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {PRESS_RELEASES.map((release, i) => (
              <div key={i} style={{ 
                padding: '2rem 0',
                borderBottom: '1px solid rgba(140,123,121,0.2)',
              }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>{release.date}</span>
                <h3 style={{ margin: '0.5rem 0' }}>{release.title}</h3>
                <p style={{ color: 'var(--charcoal)' }}>{release.excerpt}</p>
                <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Media Coverage</span>
            <h2>In the News</h2>
          </div>
          <div className="grid grid-2">
            {MEDIA_MENTIONS.map((mention, i) => (
              <div key={i} className="card">
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--charcoal)' }}>
                  &ldquo;{mention.quote}&rdquo;
                </p>
                <p style={{ fontWeight: 600, color: 'var(--crimson)' }}>— {mention.outlet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
            <div>
              <span className="kicker kicker--light">For Journalists</span>
              <h2 style={{ color: 'var(--ivory)', marginBottom: '1rem' }}>Media Resources</h2>
              <p style={{ color: 'rgba(250,246,240,0.8)', marginBottom: '1.5rem' }}>
                Need information about BELEVARAGE? Our press kit includes logos, 
                executive bios, fact sheets, and high-resolution images.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-gold">Download Press Kit</button>
                <button className="btn btn-outline-light">Contact Press Team</button>
              </div>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'rgba(250,246,240,0.05)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <h3 style={{ color: 'var(--saffron-gold)', marginBottom: '1rem' }}>Quick Facts</h3>
              {[
                { label: "Founded", value: "2024" },
                { label: "Headquarters", value: "Mumbai, India" },
                { label: "Communities", value: "10+ Active" },
                { label: "Team Size", value: "25+" },
              ].map((fact, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '0.75rem 0',
                  borderBottom: i < 3 ? '1px solid rgba(250,246,240,0.1)' : 'none',
                }}>
                  <span style={{ color: 'rgba(250,246,240,0.7)' }}>{fact.label}</span>
                  <span style={{ color: 'var(--ivory)', fontWeight: 500 }}>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
