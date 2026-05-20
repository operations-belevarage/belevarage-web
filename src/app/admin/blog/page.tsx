'use client';

import { useState } from 'react';

const BLOG_POSTS = [
  { id: '1', title: 'The Future of Community Commerce in India', category: 'Strategy', published: true, date: 'April 15, 2026' },
  { id: '2', title: 'Building Trust Through Genealogy Networks', category: 'Technology', published: true, date: 'April 10, 2026' },
  { id: '3', title: 'How Pre-selling is Transforming Agriculture', category: 'Agriculture', published: true, date: 'April 5, 2026' },
  { id: '4', title: 'AI That Enables People, Not Replaces Them', category: 'Technology', published: false, date: 'Draft' },
];

export default function BlogAdminPage() {
  const [posts] = useState(BLOG_POSTS);

  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Blog Posts</h1>
        <button className="btn btn-primary">+ New Post</button>
      </div>

      <div className="admin-card">
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <span className="badge">{post.category}</span>
                  </td>
                  <td>
                    <span 
                      className="badge" 
                      style={{
                        background: post.published ? 'rgba(35,83,71,0.1)' : 'rgba(140,123,121,0.1)',
                        color: post.published ? 'var(--forest-teal)' : 'var(--stone-grey)',
                      }}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td>{post.date}</td>
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
                      Edit
                    </button>
                    <button style={{ 
                      padding: '0.25rem 0.5rem', 
                      fontSize: '0.8rem',
                      background: 'transparent',
                      color: 'var(--crimson)',
                      border: '1px solid var(--crimson)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                    }}>
                      Delete
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
