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

// Configure express app
app.use(express.json());

// connect to database

connectToDb();

// Routing
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/notes", (req, res) => {
  // Get the sent in data off request body
  const title = req.body.title;
  const body = req.body.body;

  // Create a note with it
  // Response with the new note
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
