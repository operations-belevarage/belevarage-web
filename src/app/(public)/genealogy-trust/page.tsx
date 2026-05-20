import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genealogy Trust — BELEVARAGE",
  description: "Build your digital family tree and trade with people your community trusts.",
};

export default function GenealogyTrustPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Trust Layer</span>
            <h1 className="hero__title">Genealogy Trust Network</h1>
            <p className="hero__subtitle">
              Trade with people your network trusts. Build your digital family tree. 
              Every verified relationship strengthens the community.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'center' }}>
            <div>
              <span className="kicker">How It Works</span>
              <h2 className="mb-3">Trust Through Relationships</h2>
              <p style={{ color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Traditional e-commerce relies on anonymous reviews that can be faked. BELEVARAGE 
                replaces this with real, verified relationships. When you see a seller is connected 
                to your cousin or neighbor, trust is inherent.
              </p>
              <div className="callout">
                &ldquo;Like Kutumb for community connection — but extended into trusted, relationship-driven commerce.&rdquo;
              </div>
            </div>
            <div className="card" style={{ background: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--crimson)' }}>The Process</h3>
              {[
                { step: "1", title: "Build Your Tree", desc: "Add family members and connections" },
                { step: "2", title: "Verify Relationships", desc: "Both parties confirm the connection" },
                { step: "3", title: "Extend Network", desc: "Your tree connects with others, forming webs of trust" },
                { step: "4", title: "Trusted Commerce", desc: "Trade within your verified network" },
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginBottom: '1.25rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'var(--crimson)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Benefits</span>
            <h2>Why Genealogy Trust Matters</h2>
          </div>
          <div className="grid grid-3">
            {[
              { icon: "🛡️", title: "Fraud Prevention", desc: "Verified identities mean fake profiles and scams are nearly impossible" },
              { icon: "🤝", title: "Natural Trust", desc: "Commerce with friends-of-friends feels safe and familiar" },
              { icon: "📈", title: "Reputation", desc: "Your standing in the community affects your commerce opportunities" },
              { icon: "🌐", title: "Network Effects", desc: "As more people join, the trust network becomes more valuable" },
              { icon: "👥", title: "Accountability", desc: "Bad behavior affects your entire network, encouraging integrity" },
              { icon: "🏛️", title: "Cultural Fit", desc: "Aligns with Indian values of family and community relationships" },
            ].map((benefit, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{benefit.icon}</span>
                <h3 className="card__title">{benefit.title}</h3>
                <p className="card__text">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container text-center">
          <span className="kicker kicker--light">Privacy First</span>
          <h2 style={{ color: 'var(--ivory)', marginBottom: '1rem' }}>Your Data, Your Control</h2>
          <p style={{ color: 'rgba(250,246,240,0.8)', maxWidth: 700, margin: '0 auto 2rem' }}>
            Your genealogy data is encrypted and private. You control who sees what. 
            We never sell your data. Trust is built on privacy.
          </p>
          <a href="/communities" className="btn btn-gold">Join and Build Your Trust Network</a>
        </div>
      </section>
    </div>
  );
}
