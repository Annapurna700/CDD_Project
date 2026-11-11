import './Login.css'

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-logo">
          <span>L</span>
          <h2>LifeLedger</h2>
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Login to manage your important documents.
        </p>

        <form>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="forgot-password">
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <p className="register-link">
          Don't have an account?
          <a href="/register"> Create Account</a>
        </p>

        <p className="login-footer">
          Your documents. Your control. Your peace of mind.
        </p>

      </div>

    </div>
  )
}

export default Login