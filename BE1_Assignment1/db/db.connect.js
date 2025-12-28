const mongoose = require("mongoose");
require("dotenv").config();

const mongouri = process.env.MONGODB;

async function initializeDatabase() {
  await mongoose
    .connect(mongouri)
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => console.log("unable to connect to database", error));
}

module.exports = { initializeDatabase };
