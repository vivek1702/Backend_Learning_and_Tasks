const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

async function initializeDB() {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.log("Error connecting to DB", error);
    });
}

module.exports = { initializeDB };
