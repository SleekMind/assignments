const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require("cors");

const app = express();
const dataFile = 'todos.json';
app.use(cors());
app.use(bodyParser.json());

let todos = [];

// Load data from file when the server starts
function loadData() {
  try {
    const data = fs.readFile(dataFile, 'utf8');
    todos = JSON.parse(data);
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

// Save data to file
function writeData() {
  fs.writeFile(dataFile, JSON.stringify(todos, null, 2), (err) => {
    if (err) {
      console.error('Error writing the file:', err);
    }
  });
}

// Load data on server start
loadData();

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).send();
  } else {
    res.json(todo);
  }
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description
  };
  todos.push(newTodo);
  writeData(); // Save data to file
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex] = {
      id: todos[todoIndex].id,
      title: req.body.title,
      description: req.body.description
    };
    writeData(); // Save data to file
    res.json(todos[todoIndex]);
  }
});

app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos.splice(todoIndex, 1);
    writeData(); // Save data to file
    res.status(200).send();
  }
});

// For all other routes, return 404
app.use((req, res) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

module.exports = app;
