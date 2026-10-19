import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact — Belevarage",
  description: "Building livelihoods and local economies through event-driven socio-commerce.",
};

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Our Mission</span>
            <h1 className="hero__title">Impact & Employment</h1>
            <p className="hero__subtitle">
              AI that enables people, not replaces them. Every event generates employment. 
              Every community strengthens its local economy.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Employment Model</span>
            <h2>How Events Create Jobs</h2>
          </div>
          <div className="grid grid-3">
            {[
              { icon: "🎪", title: "Event Operations", roles: "Setup crews, venue staff, security, registration desks" },
              { icon: "🚚", title: "Logistics & Transport", roles: "Drivers, delivery, loading/unloading, coordination" },
              { icon: "🍽️", title: "Hospitality & Food", roles: "Catering, serving, cleaning, hospitality staff" },
              { icon: "📢", title: "Marketing & Promotion", roles: "Local promoters, designers, content creators" },
              { icon: "🎨", title: "Creative & Cultural", roles: "Artists, performers, decorators, cultural guides" },
              { icon: "📱", title: "Tech & Support", roles: "Tech support, registration help, information desks" },
            ].map((category, i) => (
              <div key={i} className="card">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{category.icon}</span>
                <h3 className="card__title">{category.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>{category.roles}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Sustainability</span>
            <h2 style={{ color: 'var(--ivory)' }}>Triple Bottom Line</h2>
          </div>
          <div className="grid grid-3">
            {[
              { 
                title: "Economic", 
                points: ["Direct income to producers", "Elimination of wastage", "Fair pricing", "Local wealth retention"]
              },
              { 
                title: "Social", 
                points: ["Community strengthening", "Job creation", "Cultural preservation", "Healthcare access"]
              },
              { 
                title: "Environmental", 
                points: ["Reduced food wastage", "Local sourcing", "Sustainable practices", "Awareness building"]
              },
            ].map((pillar, i) => (
              <div key={i} style={{ 
                padding: '2rem', 
                background: 'rgba(250,246,240,0.05)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <h3 style={{ color: 'var(--saffron-gold)', marginBottom: '1rem' }}>{pillar.title}</h3>
                <ul style={{ listStyle: 'none' }}>
                  {pillar.points.map((point, j) => (
                    <li key={j} style={{ 
                      color: 'rgba(250,246,240,0.8)',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      <span style={{ color: 'var(--forest-teal)' }}>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
