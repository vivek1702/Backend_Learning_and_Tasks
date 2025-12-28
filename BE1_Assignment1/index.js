// for data seed
const fs = require("fs");
const { initializeDatabase } = require("./db/db.connect");
const CarsModel = require("./models/Cars.models");

initializeDatabase();

const jsonData = fs.readFileSync("carsData.json", "utf8");
const carsData = JSON.parse(jsonData);

const SeedData = () => {
  try {
    for (const i of carsData) {
      const Cars = new CarsModel({
        brand: i.brand,
        model: i.model,
        year: i.year,
        bodyStyle: i.bodyStyle,
        fuelType: i.fuelType,
        transmission: i.transmission,
        engine: i.engine,
        mileage: i.mileage,
        color: i.color,
        price: i.price,
        condition: i.condition,
        description: i.description,
        photos: i.photos,
        inMarket: i.inMarket,
      });
      //console.log(Cars.brand);
      Cars.save();
    }
  } catch (error) {
    console.log("error seeding the data", error);
  }
};

SeedData();
