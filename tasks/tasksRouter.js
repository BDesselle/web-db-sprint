const express = require("express");
const db = require("./tasksModel");
const app = express.Router();

//! CREATE
//* Create a task
app.post("/", (req, res) => {
  try {
    db.createTask(req.body).then(response => {
      res.status(201).json(response);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//! READ
//* Get all tasks
app.get("/", (req, res) => {
  try {
    db.getTasks().then(response => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//! UPDATE
//! DELETE

module.exports = app;
