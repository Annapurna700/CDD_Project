import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">L</span>
          <span>LifeLedger</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
  Login
</Link>
          <button className="signup-btn">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tagline">
            YOUR DOCUMENTS, ONE SECURE PLACE
          </span>

          <h1>
            Manage Your Documents.
            <br />
            <span>Never Miss a Deadline.</span>
          </h1>

          <p>
            Keep your important documents organized, secure
            and accessible. Track expiry dates and get timely
            reminders with LifeLedger.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started →
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>
          </div>

          <div className="trust-text">
            ✓ Simple  &nbsp; ✓ Organized &nbsp; ✓ Secure
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="preview-card">
          <div className="preview-header">
            <div>
              <small>WELCOME BACK!</small>
              <h2>Your Documents</h2>
            </div>
            <span className="profile-icon">A</span>
          </div>

          <div className="stats">
            <div className="stat-box">
              <span>📁</span>
              <h2>24</h2>
              <p>Total Documents</p>
            </div>

            <div className="stat-box">
              <span>⏰</span>
              <h2>03</h2>
              <p>Expiring Soon</p>
            </div>
          </div>

          <div className="document-list">
            <h3>Recent Documents</h3>

            <div className="document-item">
              <span>📄</span>
              <div>
                <strong>Insurance Policy</strong>
                <small>Insurance</small>
              </div>
              <span className="status">Active</span>
            </div>

            <div className="document-item">
              <span>🎓</span>
              <div>
                <strong>Degree Certificate</strong>
                <small>Education</small>
              </div>
              <span className="status">Saved</span>
            </div>

            <div className="document-item">
              <span>🚗</span>
              <div>
                <strong>Vehicle Insurance</strong>
                <small>Vehicle</small>
              </div>
              <span className="warning">Expiring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-heading">
          <span>OUR FEATURES</span>
          <h2>Everything You Need in One Place</h2>
          <p>Manage your important documents without the hassle.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📂</div>
            <h3>Document Storage</h3>
            <p>Store all your important documents in one centralized place.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Easy Search</h3>
            <p>Find your documents quickly using search and categories.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Smart Reminders</h3>
            <p>Get timely reminders before important documents expire.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Management</h3>
            <p>Keep your personal documents protected and organized.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about">
        <h2>LifeLedger</h2>
        <p>Your documents. Your control. Your peace of mind.</p>
        <small>© 2026 LifeLedger. All rights reserved.</small>
      </footer>

    </div>
  )
}

export default App