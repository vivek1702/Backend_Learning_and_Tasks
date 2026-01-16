const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { initializeDatabase } = require("../BE1.1_CW/db/db.connect");
const Movies = require("../BE1.1_CW/models/movies.models");

initializeDatabase();

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

//add movies to db using api call
async function SeedNewMovieData(newData) {
  try {
    const movie = new Movies(newData);
    const saveData = await movie.save();
    return saveData;
  } catch (error) {
    console.log("unable to seed data to DB", error);
  }
}

app.post("/movies", async (req, res) => {
  try {
    const newMovie = req.body;
    if (
      !newMovie.title ||
      !newMovie.releaseYear ||
      !newMovie.genre ||
      !newMovie.director ||
      !newMovie.actors ||
      !newMovie.country ||
      !newMovie.rating ||
      !newMovie.plot
    ) {
      console.log(newMovie);
      res.status(400).json({ error: "required value's of all field" });
    } else {
      await SeedNewMovieData(newMovie);
      res.status(201).json({ message: "movie added successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
