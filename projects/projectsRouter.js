const express = require("express");
const db = require("./projectsModel");
const app = express.Router();

//! CREATE
//* Create a project
app.post("/", (req, res) => {
  try {
    db.createProject(req.body).then(response => {
      res.status(201).json(response);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//! READ
//* Get all projects
app.get("/", (req, res) => {
  try {
    db.getProjects().then(response => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//* Get project by id
app.get("/:id", (req, res) => {
  try {
    db.getProjectById(req.params.id).then(response => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//! UPDATE
//! DELETE

module.exports = app;
