const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const cars = [
  { id: 1, make: "toyota", model: "canery", year: 2023 },
  { id: 2, make: "honda", model: "civic", year: 2022 },
  { id: 3, make: "ford", model: "mustang", year: 2021 },
  { id: 4, make: "bmw", model: "x5", year: 2020 },
  { id: 5, make: "audi", model: "a4", year: 2019 },
  { id: 6, make: "mercedes", model: "c-class", year: 2021 },
  { id: 7, make: "hyundai", model: "creta", year: 2022 },
  { id: 8, make: "kia", model: "seltos", year: 2023 },
  { id: 9, make: "tesla", model: "model 3", year: 2024 },
  { id: 10, make: "volkswagen", model: "polo", year: 2020 },
];

//get the car data
app.get("/cars", (req, res) => {
  res.send(cars);
});

//post method to add new data
app.post("/cars", (req, res) => {
  const newCar = req.body;
  if (newCar.make && newCar.model && newCar.year) {
    cars.push(newCar);
    res
      .status(201)
      .json({ message: "data added successfully", addedData: newCar });
  } else {
    res.status(400).json({ error: "data has not been added" });
  }
});

//delete method to delete data
app.delete("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const index = cars.findIndex((car) => car.id == carId);
  if (index === -1) {
    res.status(404).json({ error: "car not found" });
  } else {
    cars.splice(index, 1);
    res.status(200).json({ message: "car deleted successfully" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
