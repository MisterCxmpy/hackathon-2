const Diary = require("../models/Diary")

async function index(req, res) {
    try {
        const diaries = await Diary.getAll();
        res.json(diaries)
    } catch (e) {
        res.status(500).json({"error": e.message})
    }
}

async function show (req, res) {
    try {
        const id = req.params.id;
        const diary = await Diary.getById(id);
        res.json(diary);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function create (req, res) {
    try {
        const diary = await Diary.createEntry(req.body);
        res.status(201).json(diary);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = { index, show, create  }