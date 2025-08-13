// server.js
const express = require("express");
const app = express();

const serverless = require("serverless-http");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Listening" });
});

// app.get("/api/health", (req, res) => {
//   res.json({ status: "Server is running!" });
// });

// app.post("/api/echo", (req, res) => {
//   res.json({ received: req.body });
// });

// Export as Vercel serverless function
module.exports = serverless(app);

