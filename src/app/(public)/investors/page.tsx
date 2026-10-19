'use client';

import { useState } from 'react';

export default function InvestorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    designation: '',
    fundType: '',
    ticketSize: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, category: 'investor' }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          organisation: '',
          designation: '',
          fundType: '',
          ticketSize: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <section className="section section--navy">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Investment Opportunity</span>
            <h1 className="hero__title">For Investors</h1>
            <p className="hero__subtitle">
              Join the socio-commerce revolution. Invest in a platform that creates livelihoods while generating returns.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Why BELEVARAGE</span>
            <h2>Investment Highlights</h2>
          </div>
          <div className="grid grid-3">
            {[
              { icon: "📈", title: "Large Market", desc: "A vast, underserved opportunity in Indian community commerce" },
              { icon: "🎯", title: "Differentiated", desc: "A distinctive event-driven model built around community trust" },
              { icon: "🤝", title: "Impact + Returns", desc: "Livelihood creation alongside a path to strong unit economics" },
              { icon: "🌐", title: "Scalable Model", desc: "Replicable across Indian communities, then globally" },
              { icon: "🤖", title: "AI Advantage", desc: "In-house AI for community matchmaking and event optimisation" },
              { icon: "📊", title: "Measurable Impact", desc: "Community impact and revenue you can track, event by event" },
            ].map((highlight, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{highlight.icon}</span>
                <h3 className="card__title">{highlight.title}</h3>
                <p className="card__text">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>
            <div>
              <span className="kicker">Our Plan</span>
              <h2 className="mb-3">Building for Scale</h2>
              <p style={{ color: 'var(--charcoal)', marginTop: '1rem', marginBottom: '1.5rem' }}>
                We&apos;re scaling LCCIA Bandh from pilot communities toward a nationwide, event-driven
                socio-commerce network — growing revenue as each new community comes online.
              </p>
              <ul style={{ color: 'var(--charcoal)', paddingLeft: '1.25rem', display: 'grid', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <li>Proven in pilot communities, now expanding region by region</li>
                <li>Revenue that grows with every event and every onboarded supplier</li>
                <li>A capital-efficient model built for sustainable, long-term growth</li>
              </ul>
              <div className="callout">
                We&apos;re seeking Series A funding to scale from pilot to communities across India.
              </div>
            </div>

            <div className="card" style={{ background: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>Investor Inquiry</h3>
              
              {status === 'success' && (
                <div style={{ 
                  background: '#e8f5e9', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  marginBottom: '1rem',
                  color: '#2e7d32'
                }}>
                  Thank you for your interest! Our team will reach out to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div style={{ 
                  background: '#ffebee', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  marginBottom: '1rem',
                  color: '#c62828'
                }}>
                  Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Organisation *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Designation</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Fund Type</label>
                  <select
                    className="form-select"
                    value={formData.fundType}
                    onChange={(e) => setFormData({ ...formData, fundType: e.target.value })}
                  >
                    <option value="">Select type</option>
                    <option value="Angel">Angel Investor</option>
                    <option value="VC">Venture Capital</option>
                    <option value="PE">Private Equity</option>
                    <option value="Impact Fund">Impact Fund</option>
                    <option value="Corporate">Corporate Investor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Typical Ticket Size</label>
                  <select
                    className="form-select"
                    value={formData.ticketSize}
                    onChange={(e) => setFormData({ ...formData, ticketSize: e.target.value })}
                  >
                    <option value="">Select range</option>
                    <option value="Under $100K">Under $100K</option>
                    <option value="$100K - $500K">$100K - $500K</option>
                    <option value="$500K - $1M">$500K - $1M</option>
                    <option value="$1M - $5M">$1M - $5M</option>
                    <option value="Above $5M">Above $5M</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your interest in BELEVARAGE..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                  style={{ width: '100%' }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Connect With Us'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="section-header">
            <span className="kicker kicker--light">Use of Funds</span>
            <h2 style={{ color: 'var(--ivory)' }}>How We&apos;ll Deploy Capital</h2>
          </div>
          <div className="grid grid-4">
            {[
              { use: "Technology & AI", desc: "Platform development and AI capabilities" },
              { use: "Market Expansion", desc: "Launching across new communities" },
              { use: "Team Building", desc: "Hiring key talent across functions" },
              { use: "Operations", desc: "Working capital and operational costs" },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', color: 'var(--saffron-gold)', marginBottom: '0.75rem' }}>◆</div>
                <h3 style={{ color: 'var(--ivory)', marginBottom: '0.5rem' }}>{item.use}</h3>
                <p style={{ color: 'rgba(250,246,240,0.7)', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
