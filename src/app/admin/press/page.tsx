'use client';

import { useState } from 'react';

const PRESS_RELEASES = [
  { id: '1', title: 'BELEVARAGE Announces Series A Funding', date: 'April 20, 2026', published: true },
  { id: '2', title: 'BELEVARAGE Launches in 10 New Communities', date: 'April 5, 2026', published: true },
  { id: '3', title: 'Partnership with Farmer Cooperatives', date: 'March 15, 2026', published: true },
  { id: '4', title: 'Q2 2026 Impact Report', date: 'Draft', published: false },
];

export default function PressAdminPage() {
  const [releases] = useState(PRESS_RELEASES);

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Press Releases</h1>
        <button className="btn btn-primary">+ New Release</button>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {releases.map((release) => (
                <tr key={release.id}>
                  <td>{release.title}</td>
                  <td>{release.date}</td>
                  <td>
                    <span 
                      className="badge" 
                      style={{
                        background: release.published ? 'rgba(35,83,71,0.1)' : 'rgba(140,123,121,0.1)',
                        color: release.published ? 'var(--forest-teal)' : 'var(--stone-grey)',
                      }}
                    >
                      {release.published ? 'Published' : 'Draft'}
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
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
