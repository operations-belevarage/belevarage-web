import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact — BELEVARAGE",
  description: "Creating 1.9 million livelihoods through event-driven socio-commerce.",
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

      <section className="section section--deep">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">By Year 5</span>
            <h2 style={{ color: 'var(--ivory)' }}>Target Impact Metrics</h2>
          </div>
          <div className="grid grid-4">
            {[
              { number: "1.9M", label: "Livelihoods Created", desc: "Direct and indirect employment" },
              { number: "100+", label: "Active Communities", desc: "Across urban and rural India" },
              { number: "₹25K Cr", label: "GMV Target", desc: "Gross merchandise value" },
              { number: "55-106", label: "Person-Days/Event", desc: "Employment per community event" },
            ].map((stat, i) => (
              <div key={i} className="stat">
                <div className="stat__number">{stat.number}</div>
                <div className="stat__label">{stat.label}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(250,246,240,0.6)', marginTop: '0.5rem' }}>{stat.desc}</p>
              </div>
            ))}
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
              { 
                icon: "🎪", 
                title: "Event Operations", 
                roles: "Setup crews, venue staff, security, registration desks",
                impact: "15-25 person-days per event"
              },
              { 
                icon: "🚚", 
                title: "Logistics & Transport", 
                roles: "Drivers, delivery, loading/unloading, coordination",
                impact: "10-20 person-days per event"
              },
              { 
                icon: "🍽️", 
                title: "Hospitality & Food", 
                roles: "Catering, serving, cleaning, hospitality staff",
                impact: "10-15 person-days per event"
              },
              { 
                icon: "📢", 
                title: "Marketing & Promotion", 
                roles: "Local promoters, designers, content creators",
                impact: "5-10 person-days per event"
              },
              { 
                icon: "🎨", 
                title: "Creative & Cultural", 
                roles: "Artists, performers, decorators, cultural guides",
                impact: "8-15 person-days per event"
              },
              { 
                icon: "📱", 
                title: "Tech & Support", 
                roles: "Tech support, registration help, information desks",
                impact: "5-8 person-days per event"
              },
            ].map((category, i) => (
              <div key={i} className="card">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{category.icon}</span>
                <h3 className="card__title">{category.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>{category.roles}</p>
                <span className="badge">{category.impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream mandala-bg">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1000, margin: '0 auto', alignItems: 'center' }}>
            <div>
              <span className="kicker">Success Stories</span>
              <h2 className="mb-3">Real Impact, Real People</h2>
              <div className="callout">
                &ldquo;BELEVARAGE events have transformed our local economy. Youth who were 
                leaving for cities are now finding meaningful work right here.&rdquo;
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'normal' }}>
                  — Village Council Head, Rural Maharashtra
                </p>
              </div>
            </div>
            <div>
              {[
                { label: "Farmers with increased income", value: "2,400+" },
                { label: "Local businesses supported", value: "850+" },
                { label: "Health camps conducted", value: "120+" },
                { label: "Cultural events hosted", value: "340+" },
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(140,123,121,0.2)',
                }}>
                  <span style={{ color: 'var(--charcoal)' }}>{item.label}</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--forest-teal)' }}>{item.value}</span>
                </div>
              ))}
            </div>
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
