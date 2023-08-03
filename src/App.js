import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './app.scss';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: '' });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: '' });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    let hasErrors = false;
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email';
      hasErrors = true;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
    }, 1500);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container">
      <div className="sidebox-container">
        <div className="inside-box-container">
          <div className="inside-box-word">
            <h1>
              Lorem ipsum dolor si amet <span>consectetur</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="login-container-title">
          <h1>Hello</h1>
          <p>Enter your email and password to login.</p>
        </div>
        <div className="login-container-main">
          <h1>Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="form-group password">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              <span
                className="eye-icon"
                onClick={handleTogglePasswordVisibility}
              >
                {!showPassword ? (
                  <FiEyeOff className="eye-icon-position" />
                ) : (
                  <FiEye className="eye-icon-position" />
                )}
              </span>
              {errors.password && (
                <p style={{ color: 'red' }}>{errors.password}</p>
              )}
            </div>
            <div className="remember-or-forgot">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label>Remember Me</label>
              </div>
              <div>
                <label id="forgot-link">Forgot Password?</label>
              </div>
            </div>
            <div className="login-or-sign">
              <button
                type="button"
                id="login-button"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <button type="button" onClick={handleLogin}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="login-container-subs">
          <p>Or, login with</p>
          <div className="media-social">
            <button type="button" onClick={handleLogin}>
              Facebook
            </button>
            <button type="button" onClick={handleLogin}>
              LinkedIn
            </button>
            <button type="button" onClick={handleLogin}>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
