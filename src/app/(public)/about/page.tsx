import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — BELEVARAGE",
  description: "Learn about BELEVARAGE's mission to transform commerce through community-driven events and trust-based relationships.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Hero Section */}
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Our Story</span>
            <h1 className="hero__title">Reimagining Commerce for Communities</h1>
            <p className="hero__subtitle">
              BELEVARAGE was born from a simple belief: commerce should strengthen communities, not fragment them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Our Mission</span>
            <h2>Building Trust, One Event at a Time</h2>
          </div>
          <div className="callout" style={{ maxWidth: 800, margin: '0 auto' }}>
            "To create a world where every transaction begins with trust, every business thrives through community, 
            and every individual finds economic opportunity through meaningful human connections."
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section--cream mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">What We Stand For</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="grid grid-3">
            {[
              { icon: "🤝", title: "Community First", desc: "Every decision we make prioritizes community welfare over profit maximization." },
              { icon: "🙏", title: "Trust & Integrity", desc: "We build systems that reward honesty and create accountability through relationships." },
              { icon: "🌱", title: "Sustainability", desc: "Economic, social, and environmental sustainability guide our platform design." },
              { icon: "🏛️", title: "Heritage Preservation", desc: "We celebrate and preserve cultural traditions while enabling modern commerce." },
              { icon: "⚖️", title: "Fairness", desc: "Small businesses and farmers get equal footing with large corporations." },
              { icon: "🚀", title: "Innovation", desc: "AI and technology that enables people, never replaces human connection." },
            ].map((value, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{value.icon}</span>
                <h3 className="card__title">{value.title}</h3>
                <p className="card__text">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section--ivory">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <span className="kicker">The Journey</span>
            <h2 className="mb-3">From Vision to Reality</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
              BELEVARAGE began when our founder witnessed the struggles of small businesses in India&apos;s traditional markets. 
              Despite having quality products, these businesses were invisible in the digital economy, squeezed by platform fees, 
              and unable to compete with funded giants.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
              Simultaneously, we saw farmers losing 30-40% of their produce to wastage, healthcare remaining inaccessible 
              in rural areas, and cultural artisans abandoning their crafts for urban jobs.
            </p>
            <p style={{ color: 'var(--charcoal)' }}>
              The answer wasn&apos;t another marketplace. It was a fundamentally different approach: event-driven socio-commerce 
              where trust is built through genealogy, community gathering creates natural commerce, and AI empowers rather than replaces.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section section--deep">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Our Ambition</span>
            <h2 style={{ color: 'var(--ivory)' }}>Impact by Numbers</h2>
          </div>
          <div className="grid grid-4">
            {[
              { number: "100+", label: "Launch Communities" },
              { number: "1.9M", label: "Livelihoods by Year 5" },
              { number: "₹25K Cr", label: "GMV Target Year 5" },
              { number: "30%", label: "Farmer Income Increase" },
            ].map((stat, i) => (
              <div key={i} className="stat">
                <div className="stat__number">{stat.number}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
