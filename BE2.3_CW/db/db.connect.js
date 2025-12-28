const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

async function initializeDatabase() {
  mongoose
    .connect(mongoUri)
    .then(() => console.log("connected to DB successfully"))
    .catch((error) => console.log("unable to connect to DB", error));
}

module.exports = { initializeDatabase };
