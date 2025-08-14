import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EmployeeListPage from './pages/EmployeeListPage';
import AddEmployeePage from './pages/AddEmployeePage';
import TasksPage from './pages/TasksPage';
import SettingsPage from './pages/SettingsPage';
import { EmployeeProvider } from './context/EmployeeContext';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/add-employee" element={<AddEmployeePage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
