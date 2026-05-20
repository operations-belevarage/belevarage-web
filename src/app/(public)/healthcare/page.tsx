'use client';

import { useState } from 'react';

const EVENTS_INTERESTED = [
  'Health Camps',
  'Wellness Workshops',
  'Preventive Care Drives',
  'Health Education',
  'Telemedicine',
  'Community Outreach',
];

export default function HealthcarePage() {
  const [formData, setFormData] = useState({
    clinicName: '',
    practitionerName: '',
    specialisation: '',
    city: '',
    mobile: '',
    email: '',
    communitySize: '',
    eventsInterested: [] as string[],
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleEventToggle = (event: string) => {
    setFormData(prev => ({
      ...prev,
      eventsInterested: prev.eventsInterested.includes(event)
        ? prev.eventsInterested.filter(e => e !== event)
        : [...prev.eventsInterested, event]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/healthcare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          clinicName: '',
          practitionerName: '',
          specialisation: '',
          city: '',
          mobile: '',
          email: '',
          communitySize: '',
          eventsInterested: [],
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
            <span className="kicker kicker--light">For Healthcare Providers</span>
            <h1 className="hero__title">Register Your Practice</h1>
            <p className="hero__subtitle">
              Connect with communities through health events. Build trust-based relationships with patients.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>
            <div>
              <h2 className="mb-3">Healthcare Challenges We Address</h2>
              <div className="callout">
                Community health access is fragmented and impersonal. BELEVARAGE helps healthcare 
                providers reach communities through trust, not advertisements.
              </div>
              <div style={{ marginTop: '2rem' }}>
                <h3 className="mb-2">Opportunities</h3>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--charcoal)' }}>
                  <li style={{ marginBottom: '0.75rem' }}>Host health camps in communities</li>
                  <li style={{ marginBottom: '0.75rem' }}>Conduct wellness workshops</li>
                  <li style={{ marginBottom: '0.75rem' }}>Build long-term patient relationships</li>
                  <li style={{ marginBottom: '0.75rem' }}>Participate in preventive care drives</li>
                  <li>Connect with verified community members</li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ background: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--crimson)' }}>Healthcare Provider Registration</h3>
              
              {status === 'success' && (
                <div style={{ 
                  background: '#e8f5e9', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-md)', 
                  marginBottom: '1rem',
                  color: '#2e7d32'
                }}>
                  Registration successful! We&apos;ll contact you soon.
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
                  <label className="form-label">Clinic/Hospital Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Practitioner Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.practitionerName}
                    onChange={(e) => setFormData({ ...formData, practitionerName: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Specialisation *</label>
                  <select
                    className="form-select"
                    value={formData.specialisation}
                    onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}
                    required
                  >
                    <option value="">Select specialisation</option>
                    <option value="General Physician">General Physician</option>
                    <option value="Pediatrician">Pediatrician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Ayurvedic">Ayurvedic</option>
                    <option value="Homeopathy">Homeopathy</option>
                    <option value="Physiotherapist">Physiotherapist</option>
                    <option value="Nutritionist">Nutritionist</option>
                    <option value="Other">Other</option>
                  </select>
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
                  <label className="form-label">Target Community Size</label>
                  <select
                    className="form-select"
                    value={formData.communitySize}
                    onChange={(e) => setFormData({ ...formData, communitySize: e.target.value })}
                  >
                    <option value="">Select size</option>
                    <option value="Under 100">Under 100 people</option>
                    <option value="100-500">100-500 people</option>
                    <option value="500-1000">500-1000 people</option>
                    <option value="Above 1000">Above 1000 people</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Events Interested In</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {EVENTS_INTERESTED.map((event) => (
                      <button
                        key={event}
                        type="button"
                        onClick={() => handleEventToggle(event)}
                        style={{
                          padding: '0.4rem 0.8rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--stone-grey)',
                          background: formData.eventsInterested.includes(event) ? 'var(--crimson)' : 'white',
                          color: formData.eventsInterested.includes(event) ? 'white' : 'var(--deep-ink)',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                        }}
                      >
                        {event}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                  style={{ width: '100%' }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Register Practice'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
