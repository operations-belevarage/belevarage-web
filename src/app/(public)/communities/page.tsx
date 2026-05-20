'use client';

import { useState } from 'react';

const INTERESTS = [
  'Local Shopping',
  'Cultural Events',
  'Health & Wellness',
  'Agriculture',
  'Social Impact',
  'Networking',
];

export default function CommunitiesPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    interests: [] as string[],
    source: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          city: '',
          interests: [],
          source: '',
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
            <span className="kicker kicker--light">Join the Community</span>
            <h1 className="hero__title">Become a Community Member</h1>
            <p className="hero__subtitle">
              Discover events, connect with local businesses, and be part of a trusted commerce network.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>
            <div>
              <h2 className="mb-3">What You Get</h2>
              <div style={{ marginTop: '2rem' }}>
                {[
                  { icon: "🎪", title: "Event Access", desc: "Discover and join community events near you" },
                  { icon: "🤝", title: "Trusted Vendors", desc: "Buy from verified local businesses and farmers" },
                  { icon: "🌳", title: "Genealogy Network", desc: "Build your trust network through connections" },
                  { icon: "🏥", title: "Health Events", desc: "Access healthcare camps and wellness workshops" },
                  { icon: "💰", title: "Fair Prices", desc: "Direct-from-source pricing, no platform markups" },
                  { icon: "📱", title: "AI Assistant", desc: "Personalized event and product recommendations" },
                ].map((benefit, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginBottom: '1.5rem',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{benefit.icon}</span>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>{benefit.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ background: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--crimson)' }}>Join as Community Member</h3>
              
              {status === 'success' && (
                <div style={{ 
                  background: '#e8f5e9', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  marginBottom: '1rem',
                  color: '#2e7d32'
                }}>
                  Welcome to the community! We&apos;ll keep you updated about events near you.
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
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                  <label className="form-label">Interests</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {INTERESTS.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        style={{
                          padding: '0.4rem 0.8rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--stone-grey)',
                          background: formData.interests.includes(interest) ? 'var(--forest-teal)' : 'white',
                          color: formData.interests.includes(interest) ? 'white' : 'var(--deep-ink)',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                        }}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">How did you hear about us?</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    placeholder="Friend, Social Media, Event, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                  style={{ width: '100%' }}
                >
                  {status === 'submitting' ? 'Joining...' : 'Join Community'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
