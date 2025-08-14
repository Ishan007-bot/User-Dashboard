import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmployeeListPage.css';

const EmployeeListPage = () => {
  const [activePage, setActivePage] = useState('employees');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  // Sample employee data
  const employees = [
    {
      id: 1,
      name: 'Darrell Steward',
      email: 'darrell.steward@company.com',
      role: 'Admin',
      department: 'Engineering',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Albert Flores',
      email: 'albert.flores@company.com',
      role: 'User',
      department: 'Marketing',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Leslie Alexander',
      email: 'leslie.alexander@company.com',
      role: 'Intern',
      department: 'Design',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Cameron Williamson',
      email: 'cameron.williamson@company.com',
      role: 'User',
      department: 'Sales',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Jenny Wilson',
      email: 'jenny.wilson@company.com',
      role: 'Admin',
      department: 'HR',
      status: 'Active'
    }
  ];

  return (
    <div className="employee-list-page">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="page-title">EmployeesList</span>
      </div>

      <div className="employee-list-container">
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
            
            <div 
              className={`nav-item ${activePage === 'employees' ? 'active' : ''}`}
              onClick={() => handleNavigation('employees')}
            >
              <div className="nav-icon">👥</div>
              <span>Employees</span>
            </div>
            
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
              <h1>Employees</h1>
              <p>Manage your team members and their account permissions</p>
            </div>
            <div className="header-actions">
              <button className="filter-btn">
                <span className="filter-icon">🔍</span>
                Filter
              </button>
              <Link to="/add-employee" className="add-employee-btn">
                <span className="plus-icon">+</span>
                Add Employee
              </Link>
            </div>
          </div>

          {/* Employee Table */}
          <div className="employee-table-container">
            <div className="table-header">
              <div className="table-row">
                <div className="table-cell header-cell">Name</div>
                <div className="table-cell header-cell">Email</div>
                <div className="table-cell header-cell">Role</div>
                <div className="table-cell header-cell">Department</div>
                <div className="table-cell header-cell">Status</div>
                <div className="table-cell header-cell">Actions</div>
              </div>
            </div>
            
            <div className="table-body">
              {employees.map((employee) => (
                <div key={employee.id} className="table-row">
                  <div className="table-cell">
                    <div className="employee-info">
                      <div className="employee-avatar">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="employee-details">
                        <div className="employee-name">{employee.name}</div>
                      </div>
                    </div>
                  </div>
                  <div className="table-cell">{employee.email}</div>
                  <div className="table-cell">
                    <span className={`role-badge ${employee.role.toLowerCase()}`}>
                      {employee.role}
                    </span>
                  </div>
                  <div className="table-cell">{employee.department}</div>
                  <div className="table-cell">
                    <span className={`status-badge ${employee.status.toLowerCase()}`}>
                      {employee.status}
                    </span>
                  </div>
                  <div className="table-cell">
                    <div className="action-buttons">
                      <button className="action-btn edit-btn">
                        <span className="edit-icon">✏️</span>
                        Edit
                      </button>
                      <button className="action-btn delete-btn">
                        <span className="delete-icon">🗑️</span>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <div className="pagination-info">
              Showing 1 to 5 of 5 results
            </div>
            <div className="pagination-controls">
              <button className="pagination-btn" disabled>Previous</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn" disabled>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListPage;
