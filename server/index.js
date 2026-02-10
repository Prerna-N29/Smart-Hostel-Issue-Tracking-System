const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Smart Hostel System Backend is LIVE 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
