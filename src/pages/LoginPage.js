import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Intern',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Handle login logic here
    window.location.href = '/dashboard';
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section - Login Form */}
        <div className="login-form-section">
          <div className="logo-container">
            <div className="workflow-logo">
              <div className="logo-icon">w</div>
              <span className="logo-text">workflow</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <div className="role-options">
                <label className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    checked={formData.role === 'Admin'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-custom"></span>
                  Admin
                </label>
                <label className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value="Intern"
                    checked={formData.role === 'Intern'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-custom"></span>
                  Intern
                </label>
                <label className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value="User"
                    checked={formData.role === 'User'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-custom"></span>
                  User
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <span className="checkbox-custom"></span>
                Remember me
              </label>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <div className="forgot-password">
              <button type="button" className="forgot-password-link">
                forgot password?
              </button>
            </div>
          </form>

          {/* Decorative Plant - Left Bottom */}
          <div className="decorative-plant left-plant">
            <div className="plant-pot blue-patterned-pot"></div>
            <div className="plant-leaves"></div>
            <div className="wooden-stool"></div>
          </div>
        </div>

        {/* Right Section - Sign Up and Social Options */}
        <div className="signup-options-section">
          <div className="signup-prompt">
            <p>don't have an account?</p>
            <Link to="/" className="signup-btn">
              <span className="envelope-icon">✉</span>
              Sign Up with Email
            </Link>
          </div>

          <div className="separator">
            <span>Or,</span>
          </div>

          <div className="social-connect">
            <p>Connect with</p>
            <div className="social-icons">
              <div className="social-icon google">
                <span>G</span>
              </div>
              <div className="social-icon facebook">
                <span>f</span>
              </div>
            </div>
          </div>

          {/* Decorative Plant - Right Bottom */}
          <div className="decorative-plant right-plant">
            <div className="plant-pot orange-textured-pot"></div>
            <div className="plant-leaves large-leaves"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
