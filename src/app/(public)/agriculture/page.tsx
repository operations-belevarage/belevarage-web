'use client';

import { useState } from 'react';

const CROP_TYPES = [
  'Vegetables',
  'Fruits',
  'Grains',
  'Pulses',
  'Dairy',
  'Spices',
  'Flowers',
  'Other',
];

export default function AgriculturePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    cropTypes: [] as string[],
    monthlyVolume: '',
    mobile: '',
    pickupPoint: '',
    cooperative: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleCropToggle = (crop: string) => {
    setFormData(prev => ({
      ...prev,
      cropTypes: prev.cropTypes.includes(crop)
        ? prev.cropTypes.filter(c => c !== crop)
        : [...prev.cropTypes, crop]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/farmers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          location: '',
          cropTypes: [],
          monthlyVolume: '',
          mobile: '',
          pickupPoint: '',
          cooperative: '',
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
            <span className="kicker kicker--light">For Farmers</span>
            <h1 className="hero__title">Register as a Farmer</h1>
            <p className="hero__subtitle">
              Pre-sell your produce before harvest. Eliminate wastage. Get fair prices directly from consumers.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="grid grid-2" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>
            <div>
              <h2 className="mb-3">The Problem We Solve</h2>
              <div className="callout">
                Indian farmers face 30-40% produce wastage and lose 50%+ of value to middlemen. 
                BELEVARAGE changes this with &quot;Book from Home, Pick on the Way&quot; — pre-selling before harvest.
              </div>
              <div style={{ marginTop: '2rem' }}>
                <h3 className="mb-2">How It Works</h3>
                <ol style={{ paddingLeft: '1.5rem', color: 'var(--charcoal)' }}>
                  <li style={{ marginBottom: '0.75rem' }}>Register your farm and crops</li>
                  <li style={{ marginBottom: '0.75rem' }}>List upcoming harvests as events</li>
                  <li style={{ marginBottom: '0.75rem' }}>Community members book in advance</li>
                  <li style={{ marginBottom: '0.75rem' }}>Harvest knowing exact demand</li>
                  <li>Zero wastage, fair income, direct relationships</li>
                </ol>
              </div>
            </div>

            <div className="card" style={{ background: 'white' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--crimson)' }}>Farmer Registration</h3>
              
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
                  <label className="form-label">Farm Location *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Village, District, State"
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
                  <label className="form-label">Crop Types *</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {CROP_TYPES.map((crop) => (
                      <button
                        key={crop}
                        type="button"
                        onClick={() => handleCropToggle(crop)}
                        style={{
                          padding: '0.4rem 0.8rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--stone-grey)',
                          background: formData.cropTypes.includes(crop) ? 'var(--forest-teal)' : 'white',
                          color: formData.cropTypes.includes(crop) ? 'white' : 'var(--deep-ink)',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                        }}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Monthly Volume</label>
                  <select
                    className="form-select"
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                  >
                    <option value="">Select volume</option>
                    <option value="Under 100 kg">Under 100 kg</option>
                    <option value="100-500 kg">100-500 kg</option>
                    <option value="500 kg - 1 ton">500 kg - 1 ton</option>
                    <option value="1-5 tons">1-5 tons</option>
                    <option value="Above 5 tons">Above 5 tons</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Pickup Point</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.pickupPoint}
                    onChange={(e) => setFormData({ ...formData, pickupPoint: e.target.value })}
                    placeholder="Where customers can collect produce"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Cooperative/Group (if any)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.cooperative}
                    onChange={(e) => setFormData({ ...formData, cooperative: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                  style={{ width: '100%' }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Register as Farmer'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Success Stories</span>
            <h2>How Farmers Benefit</h2>
          </div>
          <div className="grid grid-3">
            {[
              { name: "Anand P.", location: "Maharashtra", quote: "For the first time, I know my customers before I harvest. Zero wastage this season." },
              { name: "Lakshmi D.", location: "Tamil Nadu", quote: "Direct income from consumers means 40% more earnings. No middlemen cutting into my profits." },
              { name: "Ramesh K.", location: "Karnataka", quote: "My farm is now a community destination. People come for the experience, not just produce." },
            ].map((story, i) => (
              <div key={i} className="card">
                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--charcoal)' }}>
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p style={{ fontWeight: 600 }}>{story.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>{story.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
