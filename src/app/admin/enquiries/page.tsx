'use client';

import { useState, useEffect } from 'react';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  category: string;
  message: string;
  organisation: string | null;
  status: string;
  createdAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/enquiries');
        const result = await response.json();
        if (result.success) {
          setEnquiries(result.data.map((e: { id: string; name: string; email: string; category: string; message: string; organisation: string | null; status: string; createdAt: string }) => ({
            ...e,
            createdAt: new Date(e.createdAt).toLocaleDateString(),
          })));
        }
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = filter === 'all' 
    ? enquiries 
    : enquiries.filter(e => e.status.toLowerCase() === filter || e.category.toLowerCase() === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'RESPONDED': return { background: 'rgba(35,83,71,0.1)', color: 'var(--forest-teal)' };
      case 'READ': return { background: 'rgba(200,134,42,0.1)', color: 'var(--saffron-gold)' };
      case 'UNREAD': return { background: 'rgba(224,122,95,0.1)', color: 'var(--warm-crimson-light)' };
      default: return { background: 'rgba(140,123,121,0.1)', color: 'var(--stone-grey)' };
    }
  };

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading enquiries...</div>;
  }

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Enquiries</h1>
      </div>

      <div className="admin-card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['all', 'UNREAD', 'READ', 'RESPONDED', 'investor', 'press', 'partnership'].map((f) => (
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
              {f === 'all' ? 'All Enquiries' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Organisation</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((enq) => (
                <tr key={enq.id}>
                  <td>
                    <strong>{enq.name}</strong>
                    <br />
                    <span style={{ fontSize: '0.85rem', color: 'var(--stone-grey)' }}>{enq.email}</span>
                  </td>
                  <td>
                    <span className="badge">{enq.category}</span>
                  </td>
                  <td>{enq.organisation || '-'}</td>
                  <td>{enq.createdAt}</td>
                  <td>
                    <span 
                      className="badge" 
                      style={getStatusColor(enq.status)}
                    >
                      {enq.status}
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
            No enquiries found.
          </div>
        )}
      </div>
    </>
  );
}
