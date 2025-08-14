import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployees must be used within an EmployeeProvider');
  }
  return context;
};

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Darrell Steward',
      email: 'darrell.steward@company.com',
      role: 'Admin',
      department: 'Engineering',
      status: 'Active',
      startDate: '2023-01-15'
    },
    {
      id: 2,
      name: 'Albert Flores',
      email: 'albert.flores@company.com',
      role: 'User',
      department: 'Marketing',
      status: 'Active',
      startDate: '2023-03-20'
    },
    {
      id: 3,
      name: 'Leslie Alexander',
      email: 'leslie.alexander@company.com',
      role: 'Intern',
      department: 'Design',
      status: 'Inactive',
      startDate: '2023-06-10'
    },
    {
      id: 4,
      name: 'Cameron Williamson',
      email: 'cameron.williamson@company.com',
      role: 'User',
      department: 'Sales',
      status: 'Active',
      startDate: '2023-02-28'
    },
    {
      id: 5,
      name: 'Jenny Wilson',
      email: 'jenny.wilson@company.com',
      role: 'Admin',
      department: 'HR',
      status: 'Active',
      startDate: '2023-01-10'
    }
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  // Add new employee
  const addEmployee = (employeeData) => {
    const newEmployee = {
      ...employeeData,
      id: Date.now(), // Simple ID generation
      startDate: employeeData.startDate || new Date().toISOString().split('T')[0]
    };
    setEmployees(prev => [...prev, newEmployee]);
    return newEmployee;
  };

  // Update existing employee
  const updateEmployee = (id, updatedData) => {
    setEmployees(prev => 
      prev.map(emp => 
        emp.id === id ? { ...emp, ...updatedData } : emp
      )
    );
    setEditingEmployee(null);
  };

  // Delete employee
  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  // Get employee by ID
  const getEmployeeById = (id) => {
    return employees.find(emp => emp.id === id);
  };

  // Set employee for editing
  const setEmployeeForEdit = (employee) => {
    setEditingEmployee(employee);
  };

  // Clear editing state
  const clearEditing = () => {
    setEditingEmployee(null);
  };

  const value = {
    employees,
    editingEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    setEmployeeForEdit,
    clearEditing
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};
