//import dependencies
const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  // Find the notes
  const notes = await Note.find();
  // Respond with notes
  res.json({ notes: notes });
};

const fetchNote = async (req, res) => {
  // Find the note by id
  const note = await Note.findById(req.params.id);
  // Respond with the note
  res.json({ note: note });
};

const createNote = async (req, res) => {
  // Get the sent in data off request body
  const title = req.body.title;
  const body = req.body.body;

  // Create a note with it
  const note = await Note.create({
    title: title,
    body: body,
  });

  // Response with the new note
  res.json({ note: note });
};

const updateNote = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Get the data off the req body
  const title = req.body.title;
  const body = req.body.body;

  // Find and update
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  const note = await Note.findById(noteId);

  // Respond the updated note
  res.json({ note: note });
};

const deleteNote = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Delete the note by id
  await Note.deleteOne({ id: noteId });

  // Respond with deleted message
  res.json({ success: "Record Deleted" });
};

module.exports = {
  fetchNotes: fetchNotes,
  fetchNote: fetchNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
