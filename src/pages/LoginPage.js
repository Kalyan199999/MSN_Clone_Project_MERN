import React from 'react';
import './LoginPage.css'; // Custom styling
import { Link } from 'react-router-dom'; // ✅ Added Link for routing

function LoginPage() {
  return (
    <div className="login-wrapper d-flex justify-content-center align-items-center vh-100">
      <div className="login-box shadow-lg p-5 rounded bg-white">
        <h2 className="text-center mb-4 text-primary">🔐 Welcome Back</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className="mt-3 text-center text-muted">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
