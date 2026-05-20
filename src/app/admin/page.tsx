import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard — BELEVARAGE",
};

export default function AdminDashboardPage() {
  return (
    <>
      <div className="admin-header">
        <h1 className="admin-page-title">Dashboard Overview</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: "2rem" }}>
        {[
          { label: "Total Businesses", value: "142", trend: "+12 this week", icon: "🏪" },
          { label: "Registered Farmers", value: "85", trend: "+5 this week", icon: "🌾" },
          { label: "Community Members", value: "1,240", trend: "+120 this week", icon: "👥" },
          { label: "Pending Approvals", value: "14", trend: "Needs attention", icon: "⏳", highlight: true },
        ].map((stat, i) => (
          <div key={i} className="admin-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>{stat.icon}</span>
              <span style={{ fontSize: "0.8rem", padding: "0.2rem 0.5rem", borderRadius: "10px", background: stat.highlight ? "var(--warm-crimson-light)" : "var(--forest-teal)", color: "white" }}>
                {stat.trend}
              </span>
            </div>
            <h3 style={{ fontSize: "2rem", marginBottom: "0.25rem", color: "var(--deep-ink)" }}>{stat.value}</h3>
            <p style={{ color: "var(--stone-grey)", fontSize: "0.9rem" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        <div className="admin-card">
          <h2 className="admin-card-title">Recent Registrations</h2>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name / Business</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rajesh Handlooms</td>
                  <td>Business</td>
                  <td>Oct 24, 2026</td>
                  <td><span className="badge" style={{ background: "rgba(35,83,71,0.1)", color: "var(--forest-teal)" }}>Approved</span></td>
                </tr>
                <tr>
                  <td>Anil Desai (Farm)</td>
                  <td>Agriculture</td>
                  <td>Oct 23, 2026</td>
                  <td><span className="badge" style={{ background: "rgba(224,122,95,0.1)", color: "var(--warm-crimson-light)" }}>Pending</span></td>
                </tr>
                <tr>
                  <td>City Health Clinic</td>
                  <td>Healthcare</td>
                  <td>Oct 22, 2026</td>
                  <td><span className="badge" style={{ background: "rgba(35,83,71,0.1)", color: "var(--forest-teal)" }}>Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-card">
          <h2 className="admin-card-title">Recent Enquiries</h2>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Sender</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nexus Ventures</td>
                  <td>Investor</td>
                  <td>Oct 24, 2026</td>
                </tr>
                <tr>
                  <td>Times of India</td>
                  <td>Press</td>
                  <td>Oct 23, 2026</td>
                </tr>
                <tr>
                  <td>Vikram S.</td>
                  <td>Partnership</td>
                  <td>Oct 22, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
