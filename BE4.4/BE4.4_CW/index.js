const Movie = require("../../BE1.1_CW/models/movies.models");
const { initializeDatabase } = require("../../BE1.1_CW/db/db.connect");

const express = require("express");
require("dotenv").config();

initializeDatabase();

//update movie data in mongodb using api calls
async function updateMovie(movieId, updateData) {
  try {
    const movie = await Movie.findByIdAndUpdate(movieId, updateData, {
      new: true,
    });
    return movie;
  } catch (error) {
    console.log("Error in updating movie rating", error);
  }
}

const app = express();
app.use(express.json());

app.post("/movies/:movieID", async (req, res) => {
  try {
    const movie = await updateMovie(req.params.movieID, req.body);
    if (movie) {
      res.status(201).json({ message: "data updated successfully" });
    } else {
      res.status(400).json({ message: "movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("app is running on port", port);
});
