'use client';

import { useState, useEffect } from 'react';

interface HealthcareProvider {
  id: string;
  clinicName: string;
  practitionerName: string;
  specialisation: string;
  city: string;
  mobile: string;
  status: string;
  createdAt: string;
}

export default function HealthcareAdminPage() {
  const [providers, setProviders] = useState<HealthcareProvider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/healthcare');
        const result = await response.json();
        if (result.success) {
          setProviders(result.data.map((h: { id: string; clinicName: string; practitionerName: string; specialisation: string; city: string; mobile: string; status: string; createdAt: string }) => ({
            ...h,
            createdAt: new Date(h.createdAt).toLocaleDateString(),
          })));
        }
      } catch (error) {
        console.error('Error fetching healthcare providers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pendingCount = providers.filter(p => p.status === 'PENDING').length;

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading healthcare providers...</div>;
  }

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Healthcare Approvals</h1>
      </div>

      <div className="grid grid-3" style={{ marginBottom: '2rem' }}>
        <div className="admin-card admin-stat">
          <div className="admin-stat__number">{providers.length}</div>
          <div className="admin-stat__label">Total Providers</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat__number" style={{ color: 'var(--warm-crimson-light)' }}>{pendingCount}</div>
          <div className="admin-stat__label">Pending Approval</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat__number" style={{ color: 'var(--forest-teal)' }}>
            {providers.filter(p => p.status === 'APPROVED').length}
          </div>
          <div className="admin-stat__label">Approved</div>
        </div>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: '1rem' }}>Pending Healthcare Provider Approvals</h3>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Clinic/Hospital</th>
                <th>Practitioner</th>
                <th>Specialisation</th>
                <th>City</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {providers.filter(p => p.status === 'PENDING').map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.clinicName}</td>
                  <td>{provider.practitionerName}</td>
                  <td>{provider.specialisation}</td>
                  <td>{provider.city}</td>
                  <td>{provider.mobile}</td>
                  <td>
                    <button style={{ 
                      padding: '0.25rem 0.5rem', 
                      fontSize: '0.8rem',
                      background: 'var(--forest-teal)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      marginRight: '0.5rem',
                    }}>
                      Approve
                    </button>
                    <button style={{ 
                      padding: '0.25rem 0.5rem', 
                      fontSize: '0.8rem',
                      background: 'var(--crimson)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                    }}>
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {providers.filter(p => p.status === 'PENDING').length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--stone-grey)' }}>
            No pending approvals.
          </div>
        )}
      </div>
    </>
  );
}
