import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Reminders.css'

const initialReminders = [
  {
    id: 1,
    name: 'Health Insurance',
    category: 'Insurance',
    expiry: '2026-11-20',
    icon: '🏥',
    enabled: true,
  },
  {
    id: 2,
    name: 'Vehicle Insurance',
    category: 'Insurance',
    expiry: '2026-11-28',
    icon: '🚗',
    enabled: true,
  },
  {
    id: 3,
    name: 'Laptop Warranty',
    category: 'Warranty',
    expiry: '2026-12-05',
    icon: '💻',
    enabled: false,
  },
  {
    id: 4,
    name: 'Old Insurance Policy',
    category: 'Insurance',
    expiry: '2026-10-31',
    icon: '📄',
    enabled: false,
  },
]

function getDaysRemaining(date) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const expiryDate = new Date(`${date}T00:00:00`)
  return Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))
}

function Reminders() {
  const [reminders, setReminders] = useState(initialReminders)

  const toggleReminder = (id) => {
    setReminders((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, enabled: !item.enabled }
          : item
      )
    )
  }

  const upcoming = reminders.filter(
    (item) => getDaysRemaining(item.expiry) >= 0
  )

  const expired = reminders.filter(
    (item) => getDaysRemaining(item.expiry) < 0
  )

  const formatDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })

  return (
    <div className="reminders-page">
      <header className="reminders-header">
        <Link to="/dashboard" className="reminders-logo">
          LifeLedger.
        </Link>
        <Link to="/dashboard" className="reminders-back">
          ← Back to Dashboard
        </Link>
      </header>

      <main className="reminders-container">
        <div className="reminders-heading">
          <div>
            <h1>Expiry Reminders 🔔</h1>
            <p>Stay updated and never miss an important renewal.</p>
          </div>
          <span className="reminder-bell">🔔</span>
        </div>

        <section className="reminder-stats">
          <div className="reminder-stat">
            <span>📅</span>
            <p>Upcoming Expiries</p>
            <h2>{upcoming.length}</h2>
          </div>

          <div className="reminder-stat">
            <span>⚠️</span>
            <p>Expired Documents</p>
            <h2>{expired.length}</h2>
          </div>

          <div className="reminder-stat">
            <span>🔔</span>
            <p>Active Reminders</p>
            <h2>{reminders.filter((item) => item.enabled).length}</h2>
          </div>
        </section>

        <section className="reminder-card">
          <h2>Upcoming Expiries</h2>
          <p className="reminder-description">
            Documents that need your attention.
          </p>

          {upcoming.length === 0 && (
            <p className="empty-reminders">No upcoming expiries.</p>
          )}

          {upcoming.map((item) => {
            const days = getDaysRemaining(item.expiry)

            return (
              <div className="reminder-row" key={item.id}>
                <span className="reminder-icon">{item.icon}</span>

                <div className="reminder-info">
                  <h3>{item.name}</h3>
                  <p>{item.category} · {formatDate(item.expiry)}</p>
                </div>

                <span className="days-left">
                  {days === 0 ? 'Expires today' : `${days} days left`}
                </span>

                <button
                  className={item.enabled ? 'reminder-on' : 'reminder-off'}
                  onClick={() => toggleReminder(item.id)}
                >
                  {item.enabled ? 'Reminder On' : 'Enable Reminder'}
                </button>
              </div>
            )
          })}
        </section>

        <section className="reminder-card expired-card">
          <h2>Expired Documents</h2>
          <p className="reminder-description">
            These documents have passed their expiry dates.
          </p>

          {expired.length === 0 && (
            <p className="empty-reminders">No expired documents.</p>
          )}

          {expired.map((item) => (
            <div className="reminder-row" key={item.id}>
              <span className="reminder-icon">{item.icon}</span>

              <div className="reminder-info">
                <h3>{item.name}</h3>
                <p>{item.category} · Expired on {formatDate(item.expiry)}</p>
              </div>

              <span className="expired-label">Expired</span>

              <button
                className={item.enabled ? 'reminder-on' : 'reminder-off'}
                onClick={() => toggleReminder(item.id)}
              >
                {item.enabled ? 'Reminder On' : 'Enable Reminder'}
              </button>
            </div>
          ))}
        </section>

        <div className="reminder-note">
          <strong>Note:</strong> These are demo reminders. Automatic email,
          SMS or phone notifications will require backend integration.
        </div>
      </main>
    </div>
  )
}

export default Reminders