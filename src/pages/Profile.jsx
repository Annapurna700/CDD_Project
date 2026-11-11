import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Profile.css'

function Profile() {
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'LifeLedger User',
    email: 'user@example.com',
    phone: '',
    location: '',
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    setEditing(false)
    setMessage('Profile details updated successfully!')
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="profile-page">
      <header className="profile-header">
        <Link to="/dashboard" className="profile-logo">
          LifeLedger.
        </Link>

        <Link to="/dashboard" className="profile-back">
          ← Back to Dashboard
        </Link>
      </header>

      <main className="profile-container">
        <div className="profile-heading">
          <h1>My Profile</h1>
          <p>Manage your personal information and account settings.</p>
        </div>

        <section className="profile-card">
          <div className="profile-top">
            <div className="profile-avatar">
              {profile.name.charAt(0).toUpperCase() || 'U'}
            </div>

            <div>
              <h2>{profile.name}</h2>
              <p>{profile.email}</p>
              <span className="profile-badge">LifeLedger Member</span>
            </div>
          </div>

          <form onSubmit={handleSave}>
            <div className="profile-section-heading">
              <h3>Personal Information</h3>

              {!editing && (
                <button
                  type="button"
                  className="edit-profile-btn"
                  onClick={() => {
                    setEditing(true)
                    setMessage('')
                  }}
                >
                  ✏️ Edit Profile
                </button>
              )}
            </div>

            <div className="profile-fields">
              <div className="profile-field">
                <label>Full Name</label>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-field">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-field">
                <label>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>

              <div className="profile-field">
                <label>Location</label>
                <input
                  name="location"
                  placeholder="Enter your location"
                  value={profile.location}
                  onChange={handleChange}
                  disabled={!editing}
                />
              </div>
            </div>

            {editing && (
              <div className="profile-actions">
                <button type="submit" className="save-profile-btn">
                  Save Changes
                </button>

                <button
                  type="button"
                  className="cancel-profile-btn"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            )}

            {message && (
              <p className="profile-success">{message}</p>
            )}
          </form>
        </section>

        <section className="profile-card account-card">
          <h3>Account Settings</h3>

          <div className="account-option">
            <div>
              <strong>Document Privacy</strong>
              <p>Keep your important documents protected.</p>
            </div>
            <span>🔒</span>
          </div>

          <div className="account-option">
            <div>
              <strong>Expiry Notifications</strong>
              <p>Manage reminders for important dates.</p>
            </div>
            <Link to="/reminders">Manage</Link>
          </div>

          <div className="account-option">
            <div>
              <strong>My Documents</strong>
              <p>View your saved document list.</p>
            </div>
            <Link to="/documents">View</Link>
          </div>

          <button
            type="button"
            className="logout-btn"
            onClick={handleLogout}
          >
            ↪ Logout
          </button>
        </section>
      </main>
    </div>
  )
}

export default Profile