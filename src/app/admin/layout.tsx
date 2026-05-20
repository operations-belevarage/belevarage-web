'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ADMIN_LINKS = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Registrations", href: "/admin/registrations", icon: "👥" },
  { label: "Blog Posts", href: "/admin/blog", icon: "✍️" },
  { label: "Press Releases", href: "/admin/press", icon: "📰" },
  { label: "Careers", href: "/admin/careers", icon: "💼" },
  { label: "Agriculture", href: "/admin/agriculture", icon: "🌾" },
  { label: "Healthcare", href: "/admin/healthcare", icon: "🏥" },
  { label: "Enquiries", href: "/admin/enquiries", icon: "📩" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Mobile Sidebar Toggle */}
      <div 
        className="admin-mobile-header"
        style={{ display: 'flex' }}
      >
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--saffron-gold)' }}>❋</span>
          BELEVARAGE Admin
        </span>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--ivory)', 
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      </div>

      <aside className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar--open' : ''}`}>
        <div className="admin-sidebar__header">
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <div className="admin-sidebar__logo">बेलवरेज Admin</div>
            <div className="admin-sidebar__tagline">BELEVARAGE Portal</div>
          </Link>
        </div>
        
        <nav className="admin-sidebar__nav">
          <ul style={{ listStyle: 'none' }}>
            {ADMIN_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`admin-sidebar__item ${isActive ? 'admin-sidebar__item--active' : ''}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span style={{ fontSize: '1.1rem', width: '24px', display: 'inline-block', textAlign: 'center' }}>
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div style={{ 
          padding: '1.5rem', 
          marginTop: 'auto', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <Link 
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              color: 'rgba(250,246,240,0.7)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
            }}
          >
            ← View Website
          </Link>
          <Link 
            href="/admin/login"
            style={{
              display: 'block',
              padding: '0.75rem',
              textAlign: 'center',
              border: '1px solid rgba(200,134,42,0.5)',
              borderRadius: '4px',
              color: 'var(--ivory)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'all 0.3s',
            }}
          >
            Log Out
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
