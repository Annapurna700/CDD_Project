import { Link } from 'react-router-dom'
import './Dashboard.css'

const documents = [
  { name: 'Aadhaar Card', category: 'Identity', date: '09 Nov 2026', icon: '🪪' },
  { name: 'Health Insurance', category: 'Insurance', date: '05 Nov 2026', icon: '🏥' },
  { name: 'Laptop Invoice', category: 'Invoice', date: '02 Nov 2026', icon: '💻' },
]

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2 className="sidebar-logo">LifeLedger.</h2>

        <nav>
          <Link to="/dashboard" className="active">🏠 Dashboard</Link>
          <Link to="/documents">📁 My Documents</Link>
          <Link to="/upload">⬆️ Upload Document</Link>
          <Link to="/reminders">🔔 Reminders</Link>
          <Link to="/profile">👤 My Profile</Link>
        </nav>

        <Link to="/" className="logout-link">↪ Logout</Link>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Manage all your important documents in one place.</p>
          </div>
          <div className="user-avatar">U</div>
        </header>

        <section className="welcome-card">
          <div>
            <h2>Welcome to LifeLedger! 👋</h2>
            <p>Your important documents, safely organized in one place.</p>
          </div>
          <Link to="/upload" className="upload-button">+ Upload Document</Link>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span>📁</span>
            <p>Total Documents</p>
            <h2>24</h2>
          </div>
          <div className="stat-card">
            <span>🔔</span>
            <p>Upcoming Expiries</p>
            <h2>03</h2>
          </div>
          <div className="stat-card">
            <span>🗂️</span>
            <p>Categories</p>
            <h2>06</h2>
          </div>
        </section>

        <section className="dashboard-content">
          <div className="content-card">
            <div className="section-heading">
              <h2>Recent Documents</h2>
              <Link to="/documents">View all</Link>
            </div>

            {documents.map((doc, index) => (
              <div className="document-row" key={index}>
                <span className="document-icon">{doc.icon}</span>
                <div className="document-info">
                  <h3>{doc.name}</h3>
                  <p>{doc.category} · {doc.date}</p>
                </div>
                <span className="document-status">Saved</span>
              </div>
            ))}
          </div>

          <div className="content-card">
            <h2>Upcoming Expiries</h2>
            <div className="expiry-item">
              <span>🛡️</span>
              <div>
                <h3>Health Insurance</h3>
                <p>Expires: 20 Nov 2026</p>
              </div>
            </div>
            <div className="expiry-item">
              <span>🚗</span>
              <div>
                <h3>Vehicle Insurance</h3>
                <p>Expires: 28 Nov 2026</p>
              </div>
            </div>
            <div className="expiry-item">
              <span>💻</span>
              <div>
                <h3>Laptop Warranty</h3>
                <p>Expires: 05 Dec 2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard