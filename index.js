const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

const { getEmployees, getEmployeeById, addEmployee } = require('./employees');

app.get('/employees', (req, res) => {
  res.json(getEmployees());
});

app.get('/employees/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.json(getEmployeeById(id));
});

app.post('/employees', (req, res) => {
  let newEmployee = req.body;
  res.json(addEmployee(newEmployee));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
