import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Intern',
    acceptTerms: false
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
    console.log('Signup data:', formData);
    // Handle signup logic here
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Section - Signup Form */}
        <div className="signup-form-section">
          <div className="logo-container">
            <div className="workflow-logo">
              <div className="logo-icon">w</div>
              <span className="logo-text">workflow</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="signup-form">
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
              <small className="hint-text">Enter your email address</small>
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
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Repeat your password"
                value={formData.confirmPassword}
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
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                />
                <span className="checkbox-custom"></span>
                Accept terms and condition
              </label>
                          <small className="terms-text">
              You agree to our <button type="button" className="link-button">Terms of Service</button> and <button type="button" className="link-button">Privacy Policy</button>.
            </small>
            </div>

            <button type="submit" className="signup-btn">
              <span className="envelope-icon">✉</span>
              Signup with Email
            </button>
          </form>

          {/* Decorative Plant - Left Bottom */}
          <div className="decorative-plant left-plant">
            <div className="plant-pot purple-pot"></div>
            <div className="plant-leaves"></div>
            <div className="wooden-stool"></div>
          </div>
        </div>

        {/* Right Section - Login and Social Options */}
        <div className="login-options-section">
          <div className="login-prompt">
            <p>already have an account?</p>
            <Link to="/login" className="login-btn">Login</Link>
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

          <div className="support-section">
            <p>Having any issues?</p>
            <button className="support-btn">Contact Support</button>
          </div>

          {/* Decorative Plant - Right Bottom */}
          <div className="decorative-plant right-plant">
            <div className="plant-pot red-pot"></div>
            <div className="plant-leaves large-leaves"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
