const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect to MongoDB
connectDB();

// middleware to read JSON
app.use(express.json());

// import routes
const issueRoutes = require("./routes/issues");

// mount routes
app.use("/issues", issueRoutes);

// optional root route
app.get("/", (req, res) => {
  res.send("Smart Hostel Issue Tracking API Running 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});