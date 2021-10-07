const express = require("express");
const router = express.Router();

const Notes = require("../../models/Notes");
const Event = require("../../models/Event");

router.post("/notes/newnote", (req, res) => {
    const newNote = new Notes({ smmspec: req.body.smmspec, customer: req.body.customer,
                                note_name: req.body.note_name, note_text: req.body.note_text });
        newNote.save(function() {
            return res.json(newNote);
        });
});

router.post("/notes/newevent", (req, res) => {
    const newEvent = new Event({ smmspec: req.body.smmspec, customer: req.body.customer,
                                note_name: req.body.note_name, note_text: req.body.note_text });
        newEvent.save(function() {
            return res.json(newEvent);
        });
});

router.post("/notes", (req, res) => {
    Notes.find({ customer: req.body.customer }).
    sort({ upd_date: 'descending' }).
    then(notes => {
        res.json(notes);
    });
});

router.post("/notes/delnote", (req, res) => {
    Notes.findOneAndDelete({ _id: req.body._id }).
    then(notes => {
        res.json(notes);
    });
});

router.post("/notes/updnote", (req, res) => {
    var time = new Date();
    Notes.findOneAndUpdate({ _id: req.body._id }, 
                           { $set: {note_name: req.body.note_name, note_text: req.body.note_text, upd_date: time}}, {new: true} )
    .then(note => {

        return res.json(note);
    });
});

module.exports = router;
