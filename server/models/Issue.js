const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  room: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Pending"
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Issue", issueSchema);