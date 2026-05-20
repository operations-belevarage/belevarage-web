'use client';

import { useState } from 'react';
import type { Metadata } from "next";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', category: 'general', message: '', phone: '' });
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
            <span className="kicker kicker--light">Get In Touch</span>
            <h1 className="hero__title">Contact Us</h1>
            <p className="hero__subtitle">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            {status === 'success' && (
              <div style={{ 
                background: '#e8f5e9', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)', 
                marginBottom: '1.5rem',
                color: '#2e7d32'
              }}>
                Thank you for your message! We&apos;ll get back to you soon.
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
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="support">Support</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  className="form-textarea"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
                style={{ width: '100%' }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem' }}>Other Ways to Reach Us</h3>
              <p style={{ color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                Email: hello@belevarage.com
              </p>
              <p style={{ color: 'var(--charcoal)' }}>
                Follow us on social media for updates
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
