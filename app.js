const express = require("express");
const cors = require("cors");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("Welcome to the Snack-Log App!");
  });


app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
  
  module.exports = app;
  