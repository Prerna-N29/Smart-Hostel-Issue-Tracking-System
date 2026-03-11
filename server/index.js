const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Middleware
app.use(express.json());

// Routes
const issueRoutes = require("./routes/issues");
const authRoutes = require("./routes/auth");

app.use("/issues", issueRoutes);
app.use("/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Smart Hostel Issue Tracking API Running 🚀");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});