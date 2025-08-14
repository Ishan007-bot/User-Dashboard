import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = () => {
  const [activePage, setActivePage] = useState('settings');
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false
    },
    appearance: {
      theme: 'light',
      language: 'English',
      fontSize: 'medium'
    },
    privacy: {
      profileVisibility: 'public',
      dataSharing: false,
      analytics: true
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90
    }
  });

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const updateSetting = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    console.log('Settings saved:', settings);
    // Here you would typically save to backend
    alert('Settings saved successfully!');
  };

  const handleResetSettings = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setSettings({
        notifications: {
          email: true,
          push: false,
          sms: false
        },
        appearance: {
          theme: 'light',
          language: 'English',
          fontSize: 'medium'
        },
        privacy: {
          profileVisibility: 'public',
          dataSharing: false,
          analytics: true
        },
        security: {
          twoFactorAuth: false,
          sessionTimeout: 30,
          passwordExpiry: 90
        }
      });
    }
  };

  return (
    <div className="settings-page">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="page-title">SettingsPage</span>
      </div>

      <div className="settings-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          {/* Logo */}
          <div className="sidebar-logo">
            <div className="logo-icon">w</div>
            <span className="logo-text">workflow</span>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-icon">🔍</div>
            <input type="text" placeholder="Search" className="search-input" />
          </div>

          {/* Navigation Menu */}
          <nav className="navigation-menu">
            <Link to="/dashboard" className="nav-link">
              <div 
                className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleNavigation('dashboard')}
              >
                <div className="nav-icon">🏠</div>
                <span>Dashboard</span>
              </div>
            </Link>
            
            <Link to="/employees" className="nav-link">
              <div 
                className={`nav-item ${activePage === 'employees' ? 'active' : ''}`}
                onClick={() => handleNavigation('employees')}
              >
                <div className="nav-icon">👥</div>
                <span>Employees</span>
              </div>
            </Link>
            
            <div 
              className={`nav-item ${activePage === 'attendance' ? 'active' : ''}`}
              onClick={() => handleNavigation('attendance')}
            >
              <div className="nav-icon">📅</div>
              <span>Attendance</span>
            </div>
            
            <Link to="/tasks" className="nav-link">
              <div 
                className={`nav-item ${activePage === 'tasks' ? 'active' : ''}`}
                onClick={() => handleNavigation('tasks')}
              >
                <div className="nav-icon">📋</div>
                <span>Tasks</span>
              </div>
            </Link>
            
            <div 
              className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}
              onClick={() => handleNavigation('settings')}
            >
              <div className="nav-icon">⚙️</div>
              <span>Settings</span>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Header Section */}
          <div className="page-header">
            <div className="header-left">
              <h1>Settings</h1>
              <p>Manage your account preferences and system settings</p>
            </div>
            <div className="header-actions">
              <button className="reset-btn" onClick={handleResetSettings}>
                Reset to Default
              </button>
              <button className="save-btn" onClick={handleSaveSettings}>
                Save Changes
              </button>
            </div>
          </div>

          {/* Settings Sections */}
          <div className="settings-sections">
            {/* Notifications Settings */}
            <div className="settings-section">
              <h3>🔔 Notifications</h3>
              <div className="settings-grid">
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Email Notifications</label>
                    <p>Receive notifications via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.email}
                      onChange={(e) => updateSetting('notifications', 'email', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>Push Notifications</label>
                    <p>Receive push notifications in browser</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.push}
                      onChange={(e) => updateSetting('notifications', 'push', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>SMS Notifications</label>
                    <p>Receive notifications via SMS</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.sms}
                      onChange={(e) => updateSetting('notifications', 'sms', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="settings-section">
              <h3>🎨 Appearance</h3>
              <div className="settings-grid">
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Theme</label>
                    <p>Choose your preferred color scheme</p>
                  </div>
                  <select
                    value={settings.appearance.theme}
                    onChange={(e) => updateSetting('appearance', 'theme', e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>Language</label>
                    <p>Select your preferred language</p>
                  </div>
                  <select
                    value={settings.appearance.language}
                    onChange={(e) => updateSetting('appearance', 'language', e.target.value)}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>Font Size</label>
                    <p>Adjust the text size for better readability</p>
                  </div>
                  <select
                    value={settings.appearance.fontSize}
                    onChange={(e) => updateSetting('appearance', 'fontSize', e.target.value)}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="settings-section">
              <h3>🔒 Privacy</h3>
              <div className="settings-grid">
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Profile Visibility</label>
                    <p>Control who can see your profile</p>
                  </div>
                  <select
                    value={settings.privacy.profileVisibility}
                    onChange={(e) => updateSetting('privacy', 'profileVisibility', e.target.value)}
                  >
                    <option value="public">Public</option>
                    <option value="team">Team Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>Data Sharing</label>
                    <p>Allow sharing of usage data for improvements</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.privacy.dataSharing}
                      onChange={(e) => updateSetting('privacy', 'dataSharing', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>Analytics</label>
                    <p>Enable analytics to improve your experience</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.privacy.analytics}
                      onChange={(e) => updateSetting('privacy', 'analytics', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="settings-section">
              <h3>🛡️ Security</h3>
              <div className="settings-grid">
                <div className="setting-item">
                  <div className="setting-info">
                    <label>Two-Factor Authentication</label>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.security.twoFactorAuth}
                      onChange={(e) => updateSetting('security', 'twoFactorAuth', e.target.checked)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>Session Timeout (minutes)</label>
                    <p>Automatically log out after inactivity</p>
                  </div>
                  <select
                    value={settings.security.sessionTimeout}
                    onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={120}>2 hours</option>
                  </select>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <label>Password Expiry (days)</label>
                    <p>Force password change after specified days</p>
                  </div>
                  <select
                    value={settings.security.passwordExpiry}
                    onChange={(e) => updateSetting('security', 'passwordExpiry', parseInt(e.target.value))}
                  >
                    <option value={30}>30 days</option>
                    <option value={60}>60 days</option>
                    <option value={90}>90 days</option>
                    <option value={180}>180 days</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
