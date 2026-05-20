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

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
              />
              Maintenance Mode
            </label>
          </div>

          <button className="btn btn-primary">Save Changes</button>
        </div>

        <div className="admin-card">
          <h3 style={{ marginBottom: '1.5rem' }}>System Information</h3>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>Version</p>
            <p>1.0.0</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>Environment</p>
            <p>Development</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>Database</p>
            <p>PostgreSQL</p>
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>Last Updated</p>
            <p>April 27, 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
