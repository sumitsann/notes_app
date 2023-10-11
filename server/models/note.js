const mongoose = require("mongoose");

// Define the Note schema with just 'title' and 'body' fields
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
});

// Create the Note model
const Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;
