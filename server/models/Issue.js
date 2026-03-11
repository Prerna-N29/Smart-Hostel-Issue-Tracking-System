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
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Issue", issueSchema);