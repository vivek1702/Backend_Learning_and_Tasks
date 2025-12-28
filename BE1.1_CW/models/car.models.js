const mongoose = require("mongoose");

const carSchema = new mongoose.schema({
  model: String,
  releaseYear: Number,
  make: String,
});

const Car = mongoose.model("Car", carSchema);

module.export = Car;
