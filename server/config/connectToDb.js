// Load Env Variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to the DB");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
