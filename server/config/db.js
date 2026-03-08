const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://hosteladmin:SmartHostel123@smart-hostel-cluster.eaf6sh0.mongodb.net/smart-hostel?appName=smart-hostel-cluster");

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;