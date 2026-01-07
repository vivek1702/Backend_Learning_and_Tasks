const express = require("express");
require("dotenv").config();

//import from BECW1.1
const { initializeDatabase } = require("../BE1.1_CW/db/db.connect");
const Movies = require("../BE1.1_CW/models/movies.models");

const app = express();
app.use(express.json());

initializeDatabase();

//read movie by title from db and
//pass movie title through get method to get data from db
const MovieByTitle = async (movietitle) => {
  try {
    const movie = await Movies.findOne({ title: movietitle });
    return movie;
  } catch (error) {
    console.log("movie not found", error);
  }
};

app.get("/movies/:title", async (req, res) => {
  try {
    const getTitle = req.params.title;
    const movie = await MovieByTitle(getTitle);
    if (!movie) {
      res.status(404).json({ error: "movie not found" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch movie" });
  }
});

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

//read all the movie data by director name, first we will write a function to get data from DB
// then use api get method and call that function into api to get data and
// show it into postman
const MoviesByDirector = async (directorname) => {
  try {
    const movie = await Movies.findOne({ director: directorname });
    return movie;
  } catch (error) {
    console.log("unable to get movie from db", error);
  }
};

app.get("/movies/director/:directorName", async (req, res) => {
  try {
    const movie = await MoviesByDirector(req.params.directorName);
    //console.log(movie);
    if (movie.length != 0) {
      res.json(movie);
    } else {
      res.status(400).json({ error: "unable to get data" });
    }
  } catch {
    res.status(500).json({ error: "unable to fetch movie" });
  }
});

//read all the movie data by genre, first we will write a function to get data from DB
// then use api get method and call that function into api to get data and
// show it into postman
const MoviesByGenre = async (genrername) => {
  try {
    const movies = await Movies.findOne({ genre: genrername });
    return movies;
  } catch (error) {
    console.log("unable to get movie from db", error);
  }
};

app.get("/movies/genre/:genreName", async (req, res) => {
  try {
    const movie = await MoviesByGenre(req.params.genreName);
    //console.log(movie);
    if (movie.length != 0) {
      res.json(movie);
    } else {
      res.status(400).json({ error: "unable to get data" });
    }
  } catch {
    res.status(500).json({ error: "unable to fetch movie" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
