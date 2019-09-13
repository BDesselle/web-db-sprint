const express = require("express");
const db = require("./resourcesModel");
const app = express.Router();

//! CREATE
//* Create a resource
app.post("/", (req, res) => {
  try {
    db.createResource(req.body).then(response => {
      res.status(201).json(response);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//! READ
//* Get all resources
app.get("/", (req, res) => {
  try {
    db.getResources().then(response => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//! UPDATE
//! DELETE

module.exports = app;
