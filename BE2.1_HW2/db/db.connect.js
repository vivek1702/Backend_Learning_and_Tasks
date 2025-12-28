const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => console.log("connected to DB"))
    .catch((error) => console.log("unable to connect", error));
};

module.exports = { initializeDatabase };
