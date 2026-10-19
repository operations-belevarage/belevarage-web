'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'BELEVARAGE',
    contactEmail: 'hello@belevarage.com',
    enableRegistrations: true,
    enableEnquiries: true,
    maintenanceMode: false,
  });

  // Change-password form state
  const [pw, setPw] = useState({ current: '', next: '', confirm: '' });
  const [pwState, setPwState] = useState<{ type: 'idle' | 'ok' | 'err'; msg: string; loading: boolean }>({
    type: 'idle',
    msg: '',
    loading: false,
  });

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.next !== pw.confirm) {
      setPwState({ type: 'err', msg: 'New password and confirmation do not match.', loading: false });
      return;
    }
    if (pw.next.length < 8) {
      setPwState({ type: 'err', msg: 'New password must be at least 8 characters.', loading: false });
      return;
    }
    setPwState({ type: 'idle', msg: '', loading: true });
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: pw.current, newPassword: pw.next }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setPwState({ type: 'ok', msg: 'Password updated successfully.', loading: false });
        setPw({ current: '', next: '', confirm: '' });
      } else {
        setPwState({ type: 'err', msg: data.error || 'Could not change password.', loading: false });
      }
    } catch {
      setPwState({ type: 'err', msg: 'Something went wrong. Please try again.', loading: false });
    }
  };

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Settings</h1>
      </div>

      <div className="grid grid-2">
        <div className="admin-card">
          <h3 style={{ marginBottom: '1.5rem' }}>General Settings</h3>

          <div className="form-group">
            <label className="form-label">Site Name</label>
            <input
              type="text"
              className="form-input"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact Email</label>
            <input
              type="email"
              className="form-input"
              value={settings.contactEmail}
              onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={settings.enableRegistrations}
                onChange={(e) => setSettings({ ...settings, enableRegistrations: e.target.checked })}
              />
              Enable New Registrations
            </label>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={settings.enableEnquiries}
                onChange={(e) => setSettings({ ...settings, enableEnquiries: e.target.checked })}
              />
              Enable Enquiries
            </label>
          </div>
        </div>

        <div className="admin-card">
          <h3 style={{ marginBottom: '1.5rem' }}>Change Password</h3>
          <form onSubmit={changePassword}>
            <div className="form-group">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                className="form-input"
                value={pw.current}
                onChange={(e) => setPw({ ...pw, current: e.target.value })}
                autoComplete="current-password"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-input"
                value={pw.next}
                onChange={(e) => setPw({ ...pw, next: e.target.value })}
                autoComplete="new-password"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="form-input"
                value={pw.confirm}
                onChange={(e) => setPw({ ...pw, confirm: e.target.value })}
                autoComplete="new-password"
                required
              />
            </div>

            {pwState.msg && (
              <div
                style={{
                  background: pwState.type === 'ok' ? '#e8f5e9' : '#ffebee',
                  color: pwState.type === 'ok' ? '#2e7d32' : '#c62828',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                }}
              >
                {pwState.msg}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={pwState.loading}>
              {pwState.loading ? 'Updating…' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
