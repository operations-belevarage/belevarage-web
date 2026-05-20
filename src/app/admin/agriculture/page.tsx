'use client';

import { useState, useEffect } from 'react';

interface Farmer {
  id: string;
  fullName: string;
  location: string;
  cropTypes: string[];
  mobile: string;
  status: string;
  createdAt: string;
}

export default function AgricultureAdminPage() {
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/farmers');
        const result = await response.json();
        if (result.success) {
          setFarmers(result.data.map((f: { id: string; fullName: string; location: string; cropTypes: string[]; mobile: string; status: string; createdAt: string }) => ({
            ...f,
            createdAt: new Date(f.createdAt).toLocaleDateString(),
          })));
        }
      } catch (error) {
        console.error('Error fetching farmers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pendingCount = farmers.filter(f => f.status === 'PENDING').length;
  const approvedCount = farmers.filter(f => f.status === 'APPROVED').length;

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading farmers...</div>;
  }

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Agriculture Approvals</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
        <div className="admin-card admin-stat">
          <div className="admin-stat__number">{farmers.length}</div>
          <div className="admin-stat__label">Total Farmers</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat__number" style={{ color: 'var(--warm-crimson-light)' }}>{pendingCount}</div>
          <div className="admin-stat__label">Pending Approval</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat__number" style={{ color: 'var(--forest-teal)' }}>{approvedCount}</div>
          <div className="admin-stat__label">Approved</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat__number">{farmers.length > 0 ? Math.round(farmers.reduce((acc, f) => acc + (f.cropTypes?.length || 0), 0) / farmers.length) : 0}</div>
          <div className="admin-stat__label">Avg Crops/Farmer</div>
        </div>
      </div>

      <div className="admin-card">
        <h3 style={{ marginBottom: '1rem' }}>Pending Approvals</h3>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Farmer Name</th>
                <th>Location</th>
                <th>Crops</th>
                <th>Contact</th>
                <th>Registered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {farmers.filter(f => f.status === 'PENDING').map((farmer) => (
                <tr key={farmer.id}>
                  <td>{farmer.fullName}</td>
                  <td>{farmer.location}</td>
                  <td>{farmer.cropTypes?.join(', ') || '-'}</td>
                  <td>{farmer.mobile}</td>
                  <td>{farmer.createdAt}</td>
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
        {farmers.filter(f => f.status === 'PENDING').length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--stone-grey)' }}>
            No pending approvals.
          </div>
        )}
      </div>
    </>
  );
}
