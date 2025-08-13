// api/index.js (for local testing)
const express = require("express");

const app = express();

console.log("1: File loaded"); // runs immediately

app.get("/", (req, res) => {
  console.log("2: / route hit");
  res.json({ message: "API Listening" });
});

// Use this for local testing
if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => console.log("Server listening on http://localhost:3000"));
}

module.exports = app; // still export for serverless if needed