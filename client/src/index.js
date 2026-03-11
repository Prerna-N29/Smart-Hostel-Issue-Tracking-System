const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors"); // <-- import cors

const app = express();
connectDB();

app.use(express.json());

// Allow requests from React frontend
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

const issueRoutes = require("./routes/issues");
const authRoutes = require("./routes/auth"); // if you have auth routes

app.use("/issues", issueRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});