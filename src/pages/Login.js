import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="login-main">
      <div className="login-container">
        <div className="login-image">
          <div className="overlay">
            <h2>Welcome Back!</h2>
            <p>Log in to access your account and manage your bike rentals.</p>
          </div>
        </div>
        <div className="login-form-container">
          <div className="form-header">
            <h1>
              <i className="fas fa-user-circle"></i> Account Login
            </h1>
            <p>Please enter your credentials to continue</p>
          </div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Your password"
                  required
                />
                <i
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="login-btn">
              Login <i className="fas fa-sign-in-alt"></i>
            </button>
            <div className="social-login">
              <p>Or login with:</p>
              <div className="social-buttons">
                <button type="button" className="social-btn google">
                  <i className="fab fa-google"></i> Google
                </button>
                <button type="button" className="social-btn facebook">
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>
            </div>
          </form>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/signup">Sign up now</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;