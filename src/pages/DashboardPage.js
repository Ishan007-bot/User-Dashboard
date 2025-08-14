import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <div className="dashboard-page">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="page-title">DashboardHome</span>
      </div>

      <div className="dashboard-container">
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
            <div 
              className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleNavigation('dashboard')}
            >
              <div className="nav-icon">🏠</div>
              <span>Dashboard</span>
            </div>
            
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
            
            <Link to="/settings" className="nav-link">
              <div 
                className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}
                onClick={() => handleNavigation('settings')}
              >
                <div className="nav-icon">⚙️</div>
                <span>Settings</span>
              </div>
            </Link>
          </nav>


        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Top Metrics Cards */}
          <div className="metrics-section">
            <div className="metric-card">
              <div className="metric-icon people-icon">👥</div>
              <div className="metric-content">
                <div className="metric-title">Total Employees</div>
                <div className="metric-value">142</div>
                <div className="metric-trend positive">↑ 12% from last month</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon tasks-icon">📋</div>
              <div className="metric-content">
                <div className="metric-title">Active Tasks</div>
                <div className="metric-value">87</div>
                <div className="metric-trend negative">↓ 3% from last week</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon interns-icon">🎓</div>
              <div className="metric-content">
                <div className="metric-title">Interns</div>
                <div className="metric-value">24</div>
                <div className="metric-trend positive">↑ 5% from last week</div>
              </div>
            </div>
          </div>

          {/* Charts and Calendar Section */}
          <div className="charts-section">
            {/* Employee Activity Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Employee Activity</h3>
                <div className="timeframe-selector">Quarterly</div>
              </div>
              <div className="chart-container">
                <div className="bar-chart">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                    <div key={month} className="chart-bar-container">
                      <div 
                        className={`chart-bar ${month === 'Aug' ? 'highlighted' : ''}`}
                        style={{ height: month === 'Aug' ? '120px' : '60px' }}
                      >
                        {month === 'Aug' && (
                          <div className="highlight-tag">
                            <span className="trend-icon">↗</span>
                            35%
                          </div>
                        )}
                      </div>
                      <div className="month-label">{month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Attendance Calendar */}
            <div className="calendar-card">
              <div className="calendar-header">
                <h3>Attendance Overview</h3>
                <div className="calendar-navigation">
                  <button className="nav-arrow">‹</button>
                  <span className="current-month">June, 2025</span>
                  <button className="nav-arrow">›</button>
                </div>
              </div>
              <div className="calendar-container">
                <div className="calendar-weekdays">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                </div>
                <div className="calendar-days">
                  {/* Previous month days */}
                  {[28, 29, 30, 31].map(day => (
                    <div key={`prev-${day}`} className="calendar-day prev-month">{day}</div>
                  ))}
                  
                  {/* Current month days */}
                  {Array.from({length: 30}, (_, i) => i + 1).map(day => (
                    <div 
                      key={day} 
                      className={`calendar-day ${day === 16 ? 'current-day' : ''}`}
                    >
                      {day}
                    </div>
                  ))}
                  
                  {/* Next month days */}
                  {[1, 2, 3, 4].map(day => (
                    <div key={`next-${day}`} className="calendar-day next-month">{day}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
