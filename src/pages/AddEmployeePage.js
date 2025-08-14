import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddEmployeePage.css';

const AddEmployeePage = () => {
  const [activePage, setActivePage] = useState('add-employee');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'User',
    department: 'Engineering',
    status: 'Active'
  });

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New employee data:', formData);
    // Handle form submission here
    // Redirect to employee list after successful submission
    window.location.href = '/employees';
  };

  return (
    <div className="add-employee-page">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="page-title">AddNewEmployee</span>
      </div>

      <div className="add-employee-container">
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
            
            <div 
              className={`nav-item ${activePage === 'tasks' ? 'active' : ''}`}
              onClick={() => handleNavigation('tasks')}
            >
              <div className="nav-icon">📋</div>
              <span>Tasks</span>
            </div>
            
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
              <h1>Add New Employee</h1>
              <p>Add a new team member to your organization</p>
            </div>
            <div className="header-actions">
              <Link to="/employees" className="back-btn">
                <span className="back-icon">←</span>
                Back to Employees
              </Link>
            </div>
          </div>

          {/* Add Employee Form */}
          <div className="form-container">
            <form onSubmit={handleSubmit} className="add-employee-form">
              <div className="form-section">
                <h3>Employee Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="role">Role *</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                      <option value="Intern">Intern</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="department">Department *</label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Design">Design</option>
                      <option value="Sales">Sales</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="status">Status *</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <Link to="/employees" className="cancel-btn">
                  Cancel
                </Link>
                <button type="submit" className="submit-btn">
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeePage;
