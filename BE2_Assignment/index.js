const { initializeDatabase } = require("../BE1_Assignment1/db/db.connect");
const CarModel = require("../BE1_Assignment1/models/Cars.models");
const fs = require("fs");

initializeDatabase();

const jsonData = fs.readFileSync("carsData.json", "utf-8");
const carsData = JSON.parse(jsonData);

function SeedData() {
  try {
    for (const car of carsData) {
      const newData = new CarModel({
        brand: car.brand,
        model: car.model,
        year: car.year,
        bodyStyle: car.bodyStyle,
        fuelType: car.fuelType,
        transmission: car.transmission,
        engine: car.engine,
        mileage: car.mileage,
        color: car.color,
        price: car.price,
        condition: car.condition,
        description: car.description,
        photos: car.photos,
        inMarket: car.inMarket,
      });

      //   console.log(newData);
      newData.save();
    }
  } catch (error) {
    console.log("data not seeded", error);
  }
}

// SeedData();

// all cars data
async function allCars() {
  try {
    const cars = await CarModel.find();
    console.log(cars);
  } catch (error) {
    console.log("unable to get data", error);
  }
}
// allCars();

//car by name
async function carsByName(carName) {
  try {
    const fordBrand = await CarModel.findOne({ brand: carName });
    console.log(fordBrand);
  } catch (error) {
    console.log("unable to get data", error);
  }
}
// carsByName("Ford");

async function carsByColor(blackColor) {
  try {
    const carColor = await CarModel.find({ color: blackColor });
    console.log(carColor);
  } catch (error) {
    console.log("unable to get data", error);
  }
}
// carsByColor("Black");

//update car data
async function UpdateCarData(brandModel, dataToUpdate) {
  try {
    const updateData = await CarModel.findOneAndUpdate(
      { model: brandModel },
      dataToUpdate,
      {
        new: true,
      }
    );
    console.log(updateData);
  } catch (error) {
    console.log("unable to get data", error);
  }
}
// UpdateCarData("Corolla", { price: 2300000 });

async function UpdateCarDataCondition(brandModel, dataToUpdate) {
  try {
    const updateData = await CarModel.findOneAndUpdate(
      { model: brandModel },
      dataToUpdate,
      {
        new: true,
      }
    );
    console.log(updateData);
  } catch (error) {
    console.log("unable to get data", error);
  }
}
// UpdateCarDataCondition("Model S", { condition: "Used" });

//delete records of car data
async function deleteCarById(carID) {
  try {
    const deleteData = await CarModel.findByIdAndDelete(carID);
    console.log(deleteData);
  } catch (error) {
    console.log("not able to delete data", error);
  }
}
// deleteCarById("6943a6471630911f42d61870");

async function deleteCarByBodyStyle(carBodyStyle) {
  try {
    const deleteCar = await CarModel.deleteMany({
      bodyStyle: carBodyStyle,
    });
    console.log(deleteCar);
  } catch (error) {
    console.log("not able to delete data", error);
  }
}
deleteCarByBodyStyle("Coupe");
