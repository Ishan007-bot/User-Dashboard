import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEmployees } from '../context/EmployeeContext';
import './EmployeeListPage.css';

const EmployeeListPage = () => {
  const [activePage, setActivePage] = useState('employees');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const navigate = useNavigate();
  const { employees, deleteEmployee, setEmployeeForEdit } = useEmployees();

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const handleEdit = (employee) => {
    setEmployeeForEdit(employee);
    navigate('/add-employee');
  };

  const handleDelete = (employee) => {
    setEmployeeToDelete(employee);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (employeeToDelete) {
      deleteEmployee(employeeToDelete.id);
      setShowDeleteModal(false);
      setEmployeeToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setEmployeeToDelete(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
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
              {filteredEmployees.length === 0 ? (
                <div className="no-results">
                  <p>No employees found matching your search.</p>
                </div>
              ) : (
                filteredEmployees.map((employee) => (
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
                        <button 
                          className="action-btn edit-btn"
                          onClick={() => handleEdit(employee)}
                        >
                          <span className="edit-icon">✏️</span>
                          Edit
                        </button>
                        <button 
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(employee)}
                        >
                          <span className="delete-icon">🗑️</span>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <div className="pagination-info">
              Showing 1 to {filteredEmployees.length} of {filteredEmployees.length} results
            </div>
            <div className="pagination-controls">
              <button className="pagination-btn" disabled>Previous</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn" disabled>Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <div className="modal-header">
              <h3>Delete Employee</h3>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete <strong>{employeeToDelete?.name}</strong>?</p>
              <p>This action cannot be undone.</p>
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="delete-btn" onClick={confirmDelete}>
                Delete Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeListPage;
