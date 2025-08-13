// api/index.js
const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API Listening" });
});

module.exports = serverless(app);
