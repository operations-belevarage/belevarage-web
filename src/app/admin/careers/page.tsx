'use client';

import { useState } from 'react';

const CAREERS = [
  { id: '1', title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Mumbai / Remote', isActive: true, applications: 12 },
  { id: '2', title: 'Product Manager', department: 'Product', location: 'Mumbai', isActive: true, applications: 8 },
  { id: '3', title: 'Community Manager', department: 'Operations', location: 'Pune', isActive: true, applications: 5 },
  { id: '4', title: 'UI/UX Designer', department: 'Design', location: 'Remote', isActive: false, applications: 0 },
];

export default function CareersAdminPage() {
  const [careers] = useState(CAREERS);

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Careers</h1>
        <button className="btn btn-primary">+ New Position</button>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Department</th>
                <th>Location</th>
                <th>Status</th>
                <th>Applications</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((career) => (
                <tr key={career.id}>
                  <td>{career.title}</td>
                  <td>
                    <span className="badge">{career.department}</span>
                  </td>
                  <td>{career.location}</td>
                  <td>
                    <span 
                      className="badge" 
                      style={{
                        background: career.isActive ? 'rgba(35,83,71,0.1)' : 'rgba(140,123,121,0.1)',
                        color: career.isActive ? 'var(--forest-teal)' : 'var(--stone-grey)',
                      }}
                    >
                      {career.isActive ? 'Active' : 'Closed'}
                    </span>
                  </td>
                  <td>
                    <span style={{ 
                      fontWeight: 600, 
                      color: career.applications > 0 ? 'var(--crimson)' : 'var(--stone-grey)' 
                    }}>
                      {career.applications}
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
                      View Apps
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
