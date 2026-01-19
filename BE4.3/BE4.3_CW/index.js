const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { initializeDatabase } = require("../../BE1.1_CW/db/db.connect");
const Movies = require("../../BE1.1_CW/models/movies.models");

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

initializeDatabase();

//read all the movie data, first we will write a function to get data from DB
// then use api get method and call that function into api to get data and
// show it into postman
const allMoviesData = async () => {
  try {
    const movies = await Movies.find();
    return movies;
  } catch (error) {
    console.log("not get movies", error);
  }
};

app.get("/movies", async (req, res) => {
  try {
    const movies = await allMoviesData();
    if (movies.length != 0) {
      res.json(movies);
    } else {
      res.status(400).json({ error: "not get data" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//delete data by id from movies data
async function removeMovies(movieID) {
  try {
    const deleteMovie = await Movies.findByIdAndDelete(movieID);
    return deleteMovie;
  } catch (error) {
    console.log("unable to use this function to delete movie");
  }
}

app.delete("/movies/:movieId", async (req, res) => {
  try {
    const todelete = await removeMovies(req.params.movieId);
    if (todelete) {
      res.status(200).json({ message: "movie delete successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "unale to fetch data to delete" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
