const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");
const verifyToken = require("../middleware/authMiddleware");


// CREATE ISSUE
router.post("/", verifyToken, async (req, res) => {
  try {

    const { room, problem } = req.body;

    const newIssue = new Issue({
      room,
      problem
    });

    const savedIssue = await newIssue.save();

    res.status(201).json(savedIssue);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET ALL ISSUES
router.get("/", verifyToken, async (req, res) => {
  try {

    const issues = await Issue.find();

    res.json(issues);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET ISSUE BY ID
router.get("/:id", verifyToken, async (req, res) => {
  try {

    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    res.json(issue);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// UPDATE ISSUE STATUS
router.put("/:id", verifyToken, async (req, res) => {
  try {

    const { status } = req.body;

    const updatedIssue = await Issue.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedIssue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    res.json(updatedIssue);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// DELETE ISSUE
router.delete("/:id", verifyToken, async (req, res) => {
  try {

    const deletedIssue = await Issue.findByIdAndDelete(req.params.id);

    if (!deletedIssue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    res.json({ message: "Issue deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;