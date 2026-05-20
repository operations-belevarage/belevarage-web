'use client';

import { useState } from 'react';

const BUSINESS_TYPES = [
  'Retail Store',
  'Handicraft',
  'Food & Beverage',
  'Textile',
  'Artisan',
  'Service Provider',
  'Other',
];

export default function BusinessesPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    businessTypes: [] as string[],
    city: '',
    mobile: '',
    email: '',
    description: '',
    monthlyRevenue: '',
    digitalPresence: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      businessTypes: prev.businessTypes.includes(type)
        ? prev.businessTypes.filter(t => t !== type)
        : [...prev.businessTypes, type]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/businesses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          businessName: '',
          ownerName: '',
          businessTypes: [],
          city: '',
          mobile: '',
          email: '',
          description: '',
          monthlyRevenue: '',
          digitalPresence: '',
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
      <section className="section section--crimson">
        <div className="container">
          <div className="hero__content">
            <span className="kicker kicker--light">Join the Platform</span>
            <h1 className="hero__title">Register Your Business</h1>
            <p className="hero__subtitle">
              Connect with your community through events. Reach customers who value trust and relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {status === 'success' && (
              <div style={{ 
                background: '#e8f5e9', 
                padding: '1.5rem', 
                borderRadius: 'var(--radius-md)', 
                marginBottom: '1.5rem',
                color: '#2e7d32',
                textAlign: 'center'
              }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Registration Submitted!</h3>
                <p>Thank you for registering. We&apos;ll review your application and contact you soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div style={{ 
                background: '#ffebee', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)', 
                marginBottom: '1.5rem',
                color: '#c62828'
              }}>
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Business Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Owner Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Business Type(s) *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {BUSINESS_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleTypeToggle(type)}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--stone-grey)',
                        background: formData.businessTypes.includes(type) ? 'var(--crimson)' : 'white',
                        color: formData.businessTypes.includes(type) ? 'white' : 'var(--deep-ink)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">City *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
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
                <label className="form-label">Monthly Revenue Range</label>
                <select
                  className="form-select"
                  value={formData.monthlyRevenue}
                  onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                >
                  <option value="">Select range</option>
                  <option value="Under ₹10,000">Under ₹10,000</option>
                  <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                  <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Digital Presence (Website/Social Media)</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.digitalPresence}
                  onChange={(e) => setFormData({ ...formData, digitalPresence: e.target.value })}
                  placeholder="e.g., Instagram: @yourbusiness"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Business Description</label>
                <textarea
                  className="form-textarea"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your business, products, and what makes you unique..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
                style={{ width: '100%' }}
              >
                {status === 'submitting' ? 'Submitting...' : 'Register Business'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Why Join?</span>
            <h2>Benefits for Businesses</h2>
          </div>
          <div className="grid grid-3">
            {[
              { icon: "👥", title: "Community Access", desc: "Connect directly with customers in your area through events" },
              { icon: "🤝", title: "Trust Network", desc: "Build credibility through genealogy-based verification" },
              { icon: "🎪", title: "Event Marketing", desc: "Host and participate in community events to drive sales" },
              { icon: "📱", title: "AI Assistant", desc: "Get AI-powered insights for your business growth" },
              { icon: "💰", title: "Fair Pricing", desc: "No predatory commissions like other platforms" },
              { icon: "🌐", title: "Wider Reach", desc: "Expand beyond your immediate locality" },
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
    </div>
  );
}
