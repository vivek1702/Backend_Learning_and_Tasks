const mongoose = require("mongoose");
require("dotenv").config();

const mongouri = process.env.MONGODB;

const initializeDatabase = async () => {
  // async, await is basically you don't know when the promise will start that's why we use it,
  // so when get called it start to act
  await mongoose
    .connect(mongouri)
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => console.log("error connecting to database", error));
};

module.exports = { initializeDatabase };
