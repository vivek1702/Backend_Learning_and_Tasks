const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
];

const items = [
  { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },
  { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },
];

app.get("/", (req, resp) => {
  resp.send("Express server.");
});

// add new movies data and show movies data
app.post("/movies", (req, resp) => {
  const newMovie = req.body;
  if (newMovie.title || newMovie.director || newMovie.year) {
    movies.push(newMovie);
    resp
      .status(201)
      .json({ message: "movie added successfully", addedMovie: newMovie });
  } else {
    resp.status(400).json({
      error: "error while adding new movie required all the key field",
    });
  }
});

app.get("/movies", (req, resp) => {
  resp.send(movies);
});

//add new items and show new items
app.post("/items", (req, resp) => {
  const newItem = req.body;
  if (newItem.itemName || newItem.color || newItem.quantity) {
    items.push(newItem);
    resp
      .status(201)
      .json({ message: "item added successfully", addedItem: newItem });
  } else {
    resp.status(400).json({
      error: "error while adding new movie required all the key field",
    });
  }
});

app.get("/items", (req, resp) => {
  resp.send(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("successfully connected to server");
});
