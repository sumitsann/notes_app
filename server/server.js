// Load Env Variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

// Create an express app

const app = express();
const port = process.env.PORT || 3000;

// connect to database

connectToDb();

// Routing
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
