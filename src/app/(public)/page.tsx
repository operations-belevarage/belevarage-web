import Link from "next/link";

const USE_CASES = [
  {
    icon: "🏪",
    title: "Community Commerce",
    problem: "Small businesses are invisible on giant marketplaces",
    solution: "Host community events that bring customers to you organically",
    outcome: "Local economies thrive, relationships deepen, trust grows",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    problem: "30-40% produce wastage, middlemen take 50%+ of value",
    solution: "Book from Home, Pick on the Way — pre-sell before you harvest",
    outcome: "Confirmed demand, direct income, zero waste",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    problem: "Community health access is fragmented and impersonal",
    solution: "Host health camps, wellness workshops through trusted events",
    outcome: "Healthcare providers reach communities through trust, not ads",
  },
  {
    icon: "🎨",
    title: "Cultural Trade",
    problem: "Traditional artisans can't compete with mass production online",
    solution: "Cultural fairs and heritage events showcase authentic craft",
    outcome: "Heritage preserved, artisans empowered, culture celebrated",
  },
];

const PILLARS = [
  { icon: "🎪", title: "Event Engine", desc: "Every interaction starts with an event — a shared moment that brings people together and creates commerce naturally." },
  { icon: "🌳", title: "Genealogy Trust", desc: "Build your digital family tree. Trade with people your community knows. Trust verified by relationships, not ratings." },
  { icon: "🤖", title: "AI Intelligence", desc: "Your AI business manager — personalisation, automation, and agentic AI that enables people, not replaces them." },
];

const STATS = [
  { number: "1.9M", label: "Livelihoods by Year 5" },
  { number: "55-106", label: "Person-days per Event" },
  { number: "₹25K Cr", label: "GMV Target Year 5" },
  { number: "100+", label: "Launch Communities" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO - Indian Classical Design */}
      <section className="hero">
        <div className="hero__mandala" />
        <div className="container">
          <div className="hero__content">
            <div style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <span className="kicker kicker--light animate-in">Event-Driven Socio-Commerce Platform</span>
            </div>
            <h1 className="hero__title animate-in delay-1">
              Where Community<br />
              <span style={{ color: 'var(--saffron-gold)' }}>Meets</span> Commerce
            </h1>
            <p className="subtitle-indian animate-in delay-2" style={{ marginBottom: '1.5rem' }}>
              Sanjha bazaar, digital daur
            </p>
            <p className="hero__subtitle animate-in delay-2">
              BELEVARAGE reimagines how commerce happens — placing events, trust,
              and community at the heart of every transaction. Stop scrolling. Start gathering.
            </p>
            <div className="hero__actions animate-in delay-3">
              <Link href="/businesses" className="btn btn-gold">Register Your Business</Link>
              <Link href="/investors" className="btn btn-outline-light">For Investors</Link>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">⌄</div>
      </section>

      {/* LOTUS DIVIDER */}
      <div className="lotus-divider" style={{ background: 'var(--ivory)', padding: '2rem 0', margin: 0 }}>
        <div className="lotus-divider__line" />
        <span className="lotus-divider__icon">❋</span>
        <div className="lotus-divider__line" />
      </div>

      {/* PROBLEM STATEMENT */}
      <section className="section section--cream mandala-bg section-border-top">
        <div className="container">
          <div className="section-header">
            <span className="kicker">The Problem We Solve</span>
            <h2>Commerce Today Is Structurally Broken</h2>
            <p>Digital marketplaces have made trade anonymous, stripped away trust, excluded small businesses, and fragmented local economies.</p>
          </div>
          <div className="grid grid-3" style={{ maxWidth: 900, margin: "0 auto" }}>
            {[
              { icon: "👤", text: "Anonymous Commerce — no trust, no relationships, fake reviews" },
              { icon: "🚫", text: "Excluded Small Businesses — invisible unless they pay for ads" },
              { icon: "🔍", text: "Broken Discovery — exhausting search with no community context" },
              { icon: "🌾", text: "Agricultural Dysfunction — wastage, middlemen, volatile income" },
              { icon: "🤖", text: "AI Job Displacement — technology that replaces instead of enables" },
              { icon: "💔", text: "Fragmented Healthcare — communities disconnected from providers" },
            ].map((item, i) => (
              <div key={i} className="corner-ornament card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", borderLeft: 'none' }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontSize: "0.95rem", color: "var(--charcoal)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Temple Architecture Inspired */}
      <section className="section section--ivory paisley-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">How BELEVARAGE Works</span>
            <h2>Four Steps to Trusted Commerce</h2>
          </div>
          <div className="grid grid-4" style={{ maxWidth: 1100, margin: "0 auto" }}>
            {[
              { step: "०१", title: "Engage", desc: "Discover events in your community — markets, fairs, workshops, health camps" },
              { step: "०२", title: "Experience", desc: "Attend and participate. Meet real people. See real products. Feel real trust." },
              { step: "०३", title: "Trust", desc: "Build your trust network through genealogy and verified community connections." },
              { step: "०४", title: "Transact", desc: "Commerce flows naturally from community. Buy from people your network trusts." },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: "center", borderTop: `4px solid var(--saffron-gold)`, borderLeft: 'none' }}>
                <span style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "2.5rem", 
                  fontWeight: 700, 
                  color: "var(--crimson)", 
                  opacity: 0.25,
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>{item.step}</span>
                <h3 style={{ margin: "0.5rem 0" }}>{item.title}</h3>
                <p className="card__text">{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/how-it-works" className="btn btn-primary">Learn How It Works →</Link>
          </div>
        </div>
      </section>

      {/* THREE PILLARS - Indian Pillar Design */}
      <section className="section section--crimson">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Three Interlocking Pillars</span>
            <h2 style={{ color: "var(--ivory)" }}>The Engine Behind BELEVARAGE</h2>
          </div>
          <div className="grid grid-3">
            {PILLARS.map((p, i) => (
              <div 
                key={i} 
                className="indian-border"
                style={{ 
                  background: "rgba(250,246,240,0.08)", 
                  borderRadius: "8px", 
                  padding: "2.5rem", 
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--crimson)',
                  padding: '0 1rem',
                  fontSize: '2rem',
                }}>
                  {p.icon}
                </div>
                <h3 style={{ color: "var(--saffron-gold)", marginTop: '1rem', marginBottom: "0.75rem" }}>{p.title}</h3>
                <p style={{ color: "rgba(250,246,240,0.85)", fontSize: "0.95rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider-ornate" style={{ background: 'var(--deep-crimson)', padding: '2rem 0' }}>
        <div className="lotus-divider__line" />
        <span className="lotus-divider__icon" style={{ color: 'var(--ivory)' }}>✦</span>
        <div className="lotus-divider__line" />
      </div>

      {/* USE CASES - Indian Card Design */}
      <section className="section section--ivory mandala-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Sectors We Transform</span>
            <h2>One Platform, Every Community Need</h2>
            <p>From local retail to agriculture, healthcare to cultural heritage — BELEVARAGE makes commerce human again.</p>
          </div>
          <div className="grid grid-2">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="corner-ornament card" style={{ borderLeft: '4px solid var(--saffron-gold)' }}>
                <span style={{ fontSize: "2rem", marginBottom: "0.5rem", display: "block" }}>{uc.icon}</span>
                <h3 className="card__title">{uc.title}</h3>
                <div style={{ fontSize: "0.9rem", marginTop: "0.75rem" }}>
                  <p style={{ color: "var(--warm-crimson-light)", fontWeight: 500, marginBottom: "0.3rem" }}>Problem: {uc.problem}</p>
                  <p style={{ color: "var(--forest-teal)", fontWeight: 500, marginBottom: "0.3rem" }}>Solution: {uc.solution}</p>
                  <p style={{ color: "var(--charcoal)" }}>Outcome: {uc.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS - Indian Circle Design */}
      <section className="section section--deep peacock-pattern">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Impact & Employment</span>
            <h2 style={{ color: "var(--ivory)" }}>AI That Enables People, Not Replaces Them</h2>
            <p style={{ color: "rgba(250,246,240,0.8)" }}>BELEVARAGE creates livelihoods. Every event generates employment. Every community strengthens its local economy.</p>
          </div>
          <div className="grid grid-4">
            {STATS.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat__number">{s.number}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/impact" className="btn btn-gold">Explore Our Impact →</Link>
          </div>
        </div>
      </section>

      {/* GENEALOGY TRUST - Indian Quote Style */}
      <section className="section section--cream mandala-bg section-border-top">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center", maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: 'center' }}>
              <div className="lotus-divider" style={{ marginBottom: '2rem' }}>
                <div className="lotus-divider__line" />
                <span className="lotus-divider__icon">🌳</span>
                <div className="lotus-divider__line" />
              </div>
              <span className="kicker">Genealogy Trust Network</span>
              <h2>Trade With People Your Network Trusts</h2>
              <p style={{ color: "var(--charcoal)", marginTop: "1rem", marginBottom: "1.5rem" }}>
                Build your digital family tree. Connect with your community. Every relationship you verify strengthens
                the trust network — making commerce safer, more personal, and more meaningful for everyone.
              </p>
              <div className="callout" style={{ marginBottom: "1.5rem" }}>
                Like Kutumb for community connection — but extended into trusted, relationship-driven commerce.
              </div>
              <Link href="/genealogy-trust" className="btn btn-primary">Discover the Trust Network →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Indian Border Cards */}
      <section className="section section--ivory paisley-bg">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Community Voices</span>
            <h2>What Our Community Says</h2>
          </div>
          <div className="grid grid-3">
            {[
              { quote: "I stopped spending on ads. My community events bring 3x more loyal customers.", name: "Rajan K.", role: "Textile Workshop Owner, Jaipur" },
              { quote: "For the first time, I know my customers before I harvest. Zero wastage this season.", name: "Anand P.", role: "Farmer, Maharashtra" },
              { quote: "Finding trusted local businesses was impossible online. BELEVARAGE changed that.", name: "Priya M.", role: "Community User, Pune" },
            ].map((t, i) => (
              <div key={i} className="card" style={{ borderLeft: `4px solid var(--saffron-gold)`, position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '1.5rem',
                  background: 'var(--saffron-gold)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  borderRadius: '4px',
                  fontWeight: 600,
                }}>
                  ✦ Testimonial
                </div>
                <p style={{ 
                  fontFamily: "var(--font-display)", 
                  fontStyle: "italic", 
                  fontSize: "1.15rem", 
                  lineHeight: 1.6, 
                  marginBottom: "1.5rem",
                  marginTop: '0.5rem',
                  color: 'var(--charcoal)'
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid rgba(140,123,121,0.2)', paddingTop: '1rem' }}>
                  <p style={{ fontWeight: 600, color: 'var(--crimson)' }}>{t.name}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--stone-grey)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Indian Final Section */}
      <section id="download" className="section section--crimson">
        <div className="container text-center">
          <div className="lotus-divider" style={{ marginBottom: '2rem' }}>
            <div className="lotus-divider__line" />
            <span className="lotus-divider__icon" style={{ color: 'var(--ivory)' }}>❋</span>
            <div className="lotus-divider__line" />
          </div>
          <span className="kicker kicker--light">Get Started Today</span>
          <h2 style={{ color: "var(--ivory)", marginBottom: "1rem" }}>
            Join the Community Commerce Revolution
          </h2>
          <p className="subtitle-indian" style={{ color: 'var(--saffron-gold)', marginBottom: '1rem' }}>
            Vasudhaiva Kutumbakam — The world is one family
          </p>
          <p style={{ color: "rgba(250,246,240,0.85)", maxWidth: 600, margin: "0 auto 2rem" }}>
            Join the BELEVARAGE platform to discover events, connect with your community, and experience commerce the way it was meant to be.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/businesses" className="btn btn-gold">Register Your Business</Link>
            <Link href="/investors" className="btn btn-outline-light">For Investors</Link>
          </div>
        </div>
      </section>
    </>
  );
}
