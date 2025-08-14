import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEmployees } from '../context/EmployeeContext';
import './AddEmployeePage.css';

const AddEmployeePage = () => {
  const [activePage, setActivePage] = useState('add-employee');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'User',
    department: 'Engineering',
    status: 'Active',
    startDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const navigate = useNavigate();
  const { addEmployee, updateEmployee, editingEmployee, clearEditing } = useEmployees();

  const isEditing = !!editingEmployee;

  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        fullName: editingEmployee.name,
        email: editingEmployee.email,
        role: editingEmployee.role,
        department: editingEmployee.department,
        status: editingEmployee.status,
        startDate: editingEmployee.startDate || ''
      });
    }
  }, [editingEmployee]);

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

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      alert('Please enter the employee\'s full name');
      return false;
    }
    if (!formData.email.trim()) {
      alert('Please enter the employee\'s email address');
      return false;
    }
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (isEditing) {
        // Update existing employee
        updateEmployee(editingEmployee.id, {
          name: formData.fullName,
          email: formData.email,
          role: formData.role,
          department: formData.department,
          status: formData.status,
          startDate: formData.startDate
        });
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate('/employees');
        }, 1500);
      } else {
        // Add new employee
        addEmployee({
          name: formData.fullName,
          email: formData.email,
          role: formData.role,
          department: formData.department,
          status: formData.status,
          startDate: formData.startDate
        });
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate('/employees');
        }, 1500);
      }
    } catch (error) {
      console.error('Error saving employee:', error);
      alert('An error occurred while saving the employee. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (isEditing) {
      clearEditing();
    }
    navigate('/employees');
  };

  return (
    <div className="add-employee-page">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="page-title">{isEditing ? 'EditEmployee' : 'AddNewEmployee'}</span>
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
              <h1>{isEditing ? 'Edit Employee' : 'Add New Employee'}</h1>
              <p>{isEditing ? 'Update employee information' : 'Add a new team member to your organization'}</p>
            </div>
            <div className="header-actions">
              <button className="back-btn" onClick={handleCancel}>
                <span className="back-icon">←</span>
                Back to Employees
              </button>
            </div>
          </div>

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="success-message">
              <span className="success-icon">✅</span>
              <span>
                {isEditing ? 'Employee updated successfully!' : 'Employee added successfully!'}
              </span>
            </div>
          )}

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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      value={formData.startDate}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn" 
                  onClick={handleCancel}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-spinner">⏳</span>
                  ) : (
                    isEditing ? 'Update Employee' : 'Add Employee'
                  )}
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

