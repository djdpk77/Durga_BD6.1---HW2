let { getEmployees, getEmployeeById, addEmployee } = require('../employees');

describe('Employees API', () => {
  it('should return all employees', () => {
    const employees = getEmployees();
    expect(employees).toHaveLength(4);
    expect(employees).toEqual([
      { id: 1, name: 'John Doe', position: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', position: 'Product Manager' },
      { id: 3, name: 'Sam Johnson', position: 'Designer' },
      { id: 4, name: 'Lisa Brown', position: 'DevOps Engineer' },
    ]);
  });

  it('should return an employee by id', () => {
    const employee = getEmployeeById(1);
    expect(employee).toEqual({
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
    });
  });

  it('should return undefined for a non-existent employee id', () => {
    const employee = getEmployeeById(99);
    expect(employee).toBeUndefined();
  });

  it('should add a new employee', () => {
    const newEmployee = {
      name: 'Alice Johnson',
      position: 'Marketing Manager',
    };
    const addedEmployee = addEmployee(newEmployee);
    expect(addedEmployee).toEqual({ id: 5, ...newEmployee });
    expect(getEmployees()).toHaveLength(5);
  });
});
