// server.js
const express = require("express");
const serverless = require("serverless-http");

console.log("1: server.js loaded"); // Debug: file is loaded

const app = express();

app.get("/", (req, res) => {
  console.log("2: / route hit"); // Debug: route is invoked
  res.json({ message: "API Listening" });
});

app.use((req, res) => {
  console.log("3: unknown route hit", req.path); // Debug: any unknown path
  res.status(404).json({ error: "Not found" });
});

module.exports = serverless(app);
