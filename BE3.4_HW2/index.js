const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

//per-defined movies data
const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
];

//per-defined item data
const items = [
  { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },
  { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },
  { id: 3, itemName: "Plate", color: "Off-White", quantity: 6 },
];

// get method to test api
app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

//get method of movie data to show in postman/browser
app.get("/movies", (req, res) => {
  res.send(movies);
});

//post method to update data
app.post("/movies/:id", (req, res) => {
  const movieID = parseInt(req.params.id);
  const newMovieData = req.body;

  const dataToupdate = movies.find((movie) => movie.id === movieID);

  if (!dataToupdate) {
    res.status(400).json({ error: "movies not found" });
  } else {
    if (!newMovieData.title || !newMovieData.director || !newMovieData.year) {
      res.status(400).json({ error: "all the keys:values is required" });
    } else {
      Object.assign(dataToupdate, newMovieData);
      res
        .status(200)
        .json({ message: "data updated successfully", newData: dataToupdate });
    }
  }
});

//get method of todos data to show in postman or browser
app.get("/items", (req, res) => {
  res.send(items);
});

//post method to update data
// data to update { id: 1, title: 'Water the non-cactus plants', day: 'Saturday' }
app.post("/items/:itemID", (req, res) => {
  const itemId = req.params.itemID;
  const newData = req.body;

  const datatoUpdate = items.find((item) => item.id == itemId);

  if (!datatoUpdate) {
    res.status(400).json({ error: "item not found" });
  } else {
    if (!newData.itemName || !newData.color || !newData.quantity) {
      res.status(400).json({ error: "itemname, color and quantity required" });
    } else {
      Object.assign(datatoUpdate, newData);
      res.status(200).json({
        message: "data added successfully",
        newTodoData: datatoUpdate,
      });
    }
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is connected to server port", PORT);
});
