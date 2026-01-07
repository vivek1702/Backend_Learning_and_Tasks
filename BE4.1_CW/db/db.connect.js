const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

async function initializeDatabase() {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.log("not connected to DB", error);
    });
}

module.exports = { initializeDatabase };
