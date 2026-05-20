'use client';

import { useState, useEffect } from 'react';

interface Registration {
  id: string;
  type: string;
  name: string;
  contact: string;
  city: string;
  status: string;
  createdAt: string;
}

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch all registrations
    const fetchData = async () => {
      try {
        const [businesses, farmers, healthcare, community] = await Promise.all([
          fetch('/api/businesses').then(r => r.json()).catch(() => ({ data: [] })),
          fetch('/api/farmers').then(r => r.json()).catch(() => ({ data: [] })),
          fetch('/api/healthcare').then(r => r.json()).catch(() => ({ data: [] })),
          fetch('/api/community').then(r => r.json()).catch(() => ({ data: [] })),
        ]);

        const all: Registration[] = [
          ...(businesses.data || []).map((b: { id: string; businessName: string; ownerName: string; city: string; mobile: string; status: string; createdAt: string }) => ({
            id: b.id,
            type: 'Business',
            name: `${b.businessName} (${b.ownerName})`,
            contact: b.mobile,
            city: b.city,
            status: b.status,
            createdAt: new Date(b.createdAt).toLocaleDateString(),
          })),
          ...(farmers.data || []).map((f: { id: string; fullName: string; location: string; mobile: string; status: string; createdAt: string }) => ({
            id: f.id,
            type: 'Farmer',
            name: f.fullName,
            contact: f.mobile,
            city: f.location,
            status: f.status,
            createdAt: new Date(f.createdAt).toLocaleDateString(),
          })),
          ...(healthcare.data || []).map((h: { id: string; clinicName: string; practitionerName: string; city: string; mobile: string; status: string; createdAt: string }) => ({
            id: h.id,
            type: 'Healthcare',
            name: `${h.clinicName} (${h.practitionerName})`,
            contact: h.mobile,
            city: h.city,
            status: h.status,
            createdAt: new Date(h.createdAt).toLocaleDateString(),
          })),
          ...(community.data || []).map((c: { id: string; fullName: string; city: string; mobile: string; status: string; createdAt: string }) => ({
            id: c.id,
            type: 'Community Member',
            name: c.fullName,
            contact: c.mobile,
            city: c.city,
            status: c.status,
            createdAt: new Date(c.createdAt).toLocaleDateString(),
          })),
        ];

        setRegistrations(all.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      } catch (error) {
        console.error('Error fetching registrations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = filter === 'all' 
    ? registrations 
    : registrations.filter(r => r.type.toLowerCase() === filter || (filter === 'pending' && r.status === 'PENDING'));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED': return { background: 'rgba(35,83,71,0.1)', color: 'var(--forest-teal)' };
      case 'PENDING': return { background: 'rgba(224,122,95,0.1)', color: 'var(--warm-crimson-light)' };
      case 'REJECTED': return { background: 'rgba(129,30,24,0.1)', color: 'var(--crimson)' };
      default: return { background: 'rgba(140,123,121,0.1)', color: 'var(--stone-grey)' };
    }
  };

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading registrations...</div>;
  }

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">All Registrations</h1>
      </div>

      <div className="admin-card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['all', 'Business', 'Farmer', 'Healthcare', 'Community Member', 'pending'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: filter === f ? 'var(--crimson)' : '#f0f0f0',
                color: filter === f ? 'white' : 'var(--deep-ink)',
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {f === 'all' ? 'All Types' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Contact</th>
                <th>City</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((reg) => (
                <tr key={reg.id}>
                  <td>
                    <span className="badge">{reg.type}</span>
                  </td>
                  <td>{reg.name}</td>
                  <td>{reg.contact}</td>
                  <td>{reg.city}</td>
                  <td>{reg.createdAt}</td>
                  <td>
                    <span 
                      className="badge" 
                      style={getStatusColor(reg.status)}
                    >
                      {reg.status}
                    </span>
                  </td>
                  <td>
                    <button style={{ 
                      padding: '0.25rem 0.5rem', 
                      fontSize: '0.8rem',
                      background: 'var(--crimson)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      marginRight: '0.5rem',
                    }}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--stone-grey)' }}>
            No registrations found.
          </div>
        )}
      </div>
    </>
  );
}
