const express = require('express');
const mongoose = require('mongoose');
const Task = require('./task');
const taskRoutes = require('./taskRoutes');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/taskdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});