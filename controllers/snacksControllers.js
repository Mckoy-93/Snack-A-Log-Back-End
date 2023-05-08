const express = require("express");
const snacks = express.Router();

const { 
    getAllSnacks,
    getSnack, 
    createSnack, 
    updateSnack, 
    deleteSnack } = require('../queries/snacks.js')

// index
snacks.get("/", async (req, res) => {
    const { error, result } = await getAllSnacks();
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });

  // show
snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getSnack(id);
    if (error?.code === 0) {
      res.status(404).json({ error: "bookmark not found" });
    } else if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  // create
snacks.post("/", async (req, res) => {
    const { error, result } = await createSnack(req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(201).json(result);
    }
  });

  // update 
snacks.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await updateSnack(id, req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  //delete
  snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await deleteSnack(id);
    if (error) {
      res.status(404).json("Snack not found");
    } else {
      res.status(201).json(result);
    }
  });
  
  module.exports = snacks