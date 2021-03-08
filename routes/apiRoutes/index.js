const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes');
const notes = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
  res.json(notes);
});

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('Please ensure proper formatting for the title and text of your note!');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;