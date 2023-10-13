// Load Env Variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");
const cors = require("cors");

// Create an express app

const app = express();
const port = process.env.PORT || 3000;

// Configure express app
app.use(express.json());
app.use(cors());

// connect to database

connectToDb();

// Routing
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
