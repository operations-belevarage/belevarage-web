import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology — BELEVARAGE",
  description: "AI-powered platform enabling community commerce through events and trust.",
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--navy">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Tech Stack</span>
            <h1 className="hero__title">AI That Enables People</h1>
            <p className="hero__subtitle">
              Our technology amplifies human connection, never replaces it. 
              Smart systems for seamless community commerce.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Three Pillars</span>
            <h2>The Technology Behind BELEVARAGE</h2>
          </div>
          <div className="grid grid-3">
            {[
              { 
                icon: "🎪", 
                title: "Event Engine", 
                desc: "AI-powered event discovery, planning, and management. Match events to community interests and optimize logistics.",
                features: ["Smart recommendations", "Attendance forecasting", "Resource optimization", "Community analytics"]
              },
              { 
                icon: "🌳", 
                title: "Genealogy Engine", 
                desc: "Graph database powering the trust network. Verify relationships, calculate trust scores, prevent fraud.",
                features: ["Relationship verification", "Trust path calculation", "Privacy-preserving queries", "Network analytics"]
              },
              { 
                icon: "🤖", 
                title: "AI Intelligence", 
                desc: "Your AI business manager. Personalization, automation, and insights that enable people, not replace them.",
                features: ["Personalized recommendations", "Business insights", "Automated workflows", "Natural language interface"]
              },
            ].map((pillar, i) => (
              <div key={i} className="card">
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{pillar.icon}</span>
                <h3 className="card__title" style={{ color: 'var(--navy)' }}>{pillar.title}</h3>
                <p className="card__text" style={{ marginBottom: '1rem' }}>{pillar.desc}</p>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
                  {pillar.features.map((feature, j) => (
                    <li key={j} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      color: 'var(--charcoal)',
                    }}>
                      <span style={{ color: 'var(--forest-teal)' }}>→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
            <div>
              <span className="kicker">Our Approach</span>
              <h2 className="mb-3">Human-Centered AI</h2>
              <p style={{ color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: 1.7 }}>
                Most AI aims to replace humans. Our AI amplifies human capability. It handles the 
                tedious tasks — scheduling, matching, logistics — so people can focus on what 
                matters: building relationships and creating value.
              </p>
              <p style={{ color: 'var(--charcoal)', lineHeight: 1.7 }}>
                Every AI feature is designed to create more human interaction, not less. 
                Smart recommendations bring people to events. Automated logistics make 
                gatherings possible. Insights help businesses serve their communities better.
              </p>
            </div>
            <div className="card" style={{ background: 'var(--navy)', color: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--saffron-gold)' }}>AI Principles</h3>
              {[
                { label: "Augment", desc: "AI augments human decision-making" },
                { label: "Transparent", desc: "Users understand how AI makes recommendations" },
                { label: "Opt-in", desc: "Users control their AI experience" },
                { label: "Privacy-first", desc: "AI respects and protects user data" },
              ].map((principle, i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: 'var(--ivory)', marginBottom: '0.25rem' }}>{principle.label}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(250,246,240,0.7)' }}>{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Technical Architecture</span>
            <h2 style={{ color: 'var(--ivory)' }}>Built for Scale</h2>
          </div>
          <div className="grid grid-4">
            {[
              { label: "Frontend", value: "Next.js + React", desc: "Modern, fast, SEO-friendly" },
              { label: "Backend", value: "Node.js + Prisma", desc: "Type-safe, scalable API" },
              { label: "Database", value: "PostgreSQL", desc: "Reliable, proven, scalable" },
              { label: "AI/ML", value: "OpenAI + Custom", desc: "Cutting-edge models, fine-tuned" },
              { label: "Graph DB", value: "Neo4j", desc: "For genealogy relationships" },
              { label: "Hosting", value: "Vercel + AWS", desc: "Global edge, auto-scaling" },
              { label: "Security", value: "Enterprise-grade", desc: "SOC 2, encryption, audit logs" },
              { label: "Mobile", value: "PWA + Native", desc: "Web-first, native apps coming" },
            ].map((tech, i) => (
              <div key={i} style={{ 
                padding: '1.5rem', 
                background: 'rgba(250,246,240,0.05)',
                borderRadius: 'var(--radius-md)',
              }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--saffron-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {tech.label}
                </p>
                <h4 style={{ color: 'var(--ivory)', margin: '0.5rem 0' }}>{tech.value}</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(250,246,240,0.6)' }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
