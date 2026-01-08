const Movies = require("../../BE1.1_CW/models/movies.models");
const { initializeDatabase } = require("../../BE1.1_CW/db/db.connect");

const express = require("express");
require("dotenv").config();

initializeDatabase();

const app = express();
app.use(express.json());

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
