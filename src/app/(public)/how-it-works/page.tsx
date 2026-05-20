import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — BELEVARAGE",
  description: "Learn how BELEVARAGE connects communities through events, trust, and commerce.",
};

const STEPS = [
  {
    step: "01",
    title: "Discover Events",
    desc: "Browse upcoming community events in your area — markets, fairs, workshops, health camps, and cultural gatherings. Every event is an opportunity to connect.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Attend & Experience",
    desc: "Show up and participate. Meet real people, see real products, experience the community vibe. This isn't online shopping — it's human commerce.",
    icon: "🎪",
  },
  {
    step: "03",
    title: "Build Your Trust Network",
    desc: "Connect with people you meet. Add them to your genealogy-based trust network. Every verified relationship strengthens your commerce safety.",
    icon: "🌳",
  },
  {
    step: "04",
    title: "Transact with Confidence",
    desc: "Buy from people your network trusts. Sell to verified community members. Commerce flows naturally from relationships, not algorithms.",
    icon: "🤝",
  },
];

const ACTORS = [
  {
    role: "Community Members",
    actions: ["Discover local events", "Connect with verified sellers", "Build trust networks", "Access quality local products"],
    color: "var(--forest-teal)",
  },
  {
    role: "Business Owners",
    actions: ["Host community events", "Reach local customers", "Build loyal following", "Grow through trust"],
    color: "var(--crimson)",
  },
  {
    role: "Farmers",
    actions: ["Pre-sell harvests", "Eliminate middlemen", "Reduce wastage", "Get fair prices"],
    color: "var(--saffron-gold)",
  },
  {
    role: "Healthcare Providers",
    actions: ["Host health camps", "Reach communities", "Build patient trust", "Provide preventive care"],
    color: "var(--navy)",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">The Process</span>
            <h1 className="hero__title">How BELEVARAGE Works</h1>
            <p className="hero__subtitle">
              Four simple steps to trusted community commerce. Stop scrolling. Start gathering.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {STEPS.map((step, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  gap: '2rem', 
                  marginBottom: '3rem',
                  alignItems: 'flex-start',
                }}
              >
                <div 
                  style={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    background: 'var(--crimson)', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
                </div>
                <div>
                  <span style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '0.9rem', 
                    color: 'var(--stone-grey)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>
                    Step {step.step}
                  </span>
                  <h3 style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--charcoal)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">For Different Participants</span>
            <h2>How Each Role Benefits</h2>
          </div>
          <div className="grid grid-2">
            {ACTORS.map((actor, i) => (
              <div key={i} className="card">
                <h3 style={{ 
                  color: actor.color, 
                  marginBottom: '1rem',
                  borderBottom: `2px solid ${actor.color}`,
                  paddingBottom: '0.5rem',
                }}>
                  {actor.role}
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {actor.actions.map((action, j) => (
                    <li key={j} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: 'var(--charcoal)',
                    }}>
                      <span style={{ color: actor.color }}>✓</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container text-center">
          <span className="kicker kicker--light">Ready to Start?</span>
          <h2 style={{ color: 'var(--ivory)', marginBottom: '1rem' }}>
            Join the Community Commerce Revolution
          </h2>
          <p style={{ color: 'rgba(250,246,240,0.8)', maxWidth: 600, margin: '0 auto 2rem' }}>
            Whether you&apos;re a business, farmer, healthcare provider, or community member — 
            there&apos;s a place for you in BELEVARAGE.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/businesses" className="btn btn-gold">Register Business</a>
            <a href="/agriculture" className="btn btn-outline-light">Register as Farmer</a>
          </div>
        </div>
      </section>
    </div>
  );
}
