import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TasksPage.css';

const TasksPage = () => {
  const [activePage, setActivePage] = useState('tasks');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Dashboard Design',
      description: 'Finish the responsive dashboard layout and implement all charts',
      assignee: 'John Doe',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2025-01-20',
      progress: 75
    },
    {
      id: 2,
      title: 'User Authentication System',
      description: 'Implement secure login and registration with JWT tokens',
      assignee: 'Jane Smith',
      priority: 'High',
      status: 'Completed',
      dueDate: '2025-01-15',
      progress: 100
    },
    {
      id: 3,
      title: 'API Integration',
      description: 'Connect frontend with backend REST APIs',
      assignee: 'Mike Johnson',
      priority: 'Medium',
      status: 'Pending',
      dueDate: '2025-01-25',
      progress: 0
    },
    {
      id: 4,
      title: 'Mobile Responsiveness',
      description: 'Ensure all pages work perfectly on mobile devices',
      assignee: 'Sarah Wilson',
      priority: 'Medium',
      status: 'In Progress',
      dueDate: '2025-01-30',
      progress: 45
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const updateTaskProgress = (taskId, newProgress) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, progress: Math.min(100, Math.max(0, newProgress)) } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    const statusMatch = filterStatus === 'All' || task.status === filterStatus;
    const priorityMatch = filterPriority === 'All' || task.priority === filterPriority;
    return statusMatch && priorityMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#10b981';
      case 'In Progress': return '#f59e0b';
      case 'Pending': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#ef4444';
      case 'Medium': return '#f59e0b';
      case 'Low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className="tasks-page">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="page-title">TasksManagement</span>
      </div>

      <div className="tasks-container">
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
              <h1>Task Management</h1>
              <p>Track and manage your team's tasks and projects</p>
            </div>
            <div className="header-actions">
              <button className="add-task-btn">
                <span className="plus-icon">+</span>
                Add New Task
              </button>
            </div>
          </div>

          {/* Task Statistics */}
          <div className="task-stats">
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <div className="stat-content">
                <div className="stat-value">{tasks.length}</div>
                <div className="stat-label">Total Tasks</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <div className="stat-value">{tasks.filter(t => t.status === 'Completed').length}</div>
                <div className="stat-label">Completed</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔄</div>
              <div className="stat-content">
                <div className="stat-value">{tasks.filter(t => t.status === 'In Progress').length}</div>
                <div className="stat-label">In Progress</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏳</div>
              <div className="stat-content">
                <div className="stat-value">{tasks.filter(t => t.status === 'Pending').length}</div>
                <div className="stat-label">Pending</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="filter-group">
              <label>Status:</label>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Priority:</label>
              <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Tasks List */}
          <div className="tasks-list">
            {filteredTasks.map((task) => (
              <div key={task.id} className="task-card">
                <div className="task-header">
                  <div className="task-title">{task.title}</div>
                  <div className="task-actions">
                    <button 
                      className="status-btn"
                      style={{ backgroundColor: getStatusColor(task.status) }}
                      onClick={() => {
                        const statuses = ['Pending', 'In Progress', 'Completed'];
                        const currentIndex = statuses.indexOf(task.status);
                        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
                        updateTaskStatus(task.id, nextStatus);
                      }}
                    >
                      {task.status}
                    </button>
                  </div>
                </div>
                
                <div className="task-description">{task.description}</div>
                
                <div className="task-details">
                  <div className="task-info">
                    <span className="task-label">Assignee:</span>
                    <span className="task-value">{task.assignee}</span>
                  </div>
                  <div className="task-info">
                    <span className="task-label">Priority:</span>
                    <span 
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(task.priority) }}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <div className="task-info">
                    <span className="task-label">Due Date:</span>
                    <span className="task-value">{task.dueDate}</span>
                  </div>
                </div>

                <div className="task-progress">
                  <div className="progress-header">
                    <span>Progress: {task.progress}%</span>
                    <div className="progress-controls">
                      <button 
                        className="progress-btn"
                        onClick={() => updateTaskProgress(task.id, task.progress - 10)}
                        disabled={task.progress <= 0}
                      >
                        -
                      </button>
                      <button 
                        className="progress-btn"
                        onClick={() => updateTaskProgress(task.id, task.progress + 10)}
                        disabled={task.progress >= 100}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
