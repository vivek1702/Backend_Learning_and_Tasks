const mongoose = require("mongoose");
require("dotenv").config();

mongoUri = process.env.MONGODB;

async function initializeDB() {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.log("unable to connect to DB", error);
    });
}

module.exports = { initializeDB };
