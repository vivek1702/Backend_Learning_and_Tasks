const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Movie = require("./models/movies.models");
const { title } = require("process");

initializeDatabase();
const jsonData = fs.readFileSync("movies.json", "utf-8");
const moviesData = JSON.parse(jsonData);

// single new movie data for insert or update
const newMovie = {
  title: "Movie 9",
  releaseYear: 2005,
  genre: ["Romance"],
  director: "Aditya roy kapoor Chopra",
  actors: ["Actor 1", "Actor 2"],
  language: "Tamil",
  country: "India",
  rating: 8.1,
  plot: "A young man and woman fall in love on a Europe trip.",
  awards: "Multiple Filmfare Awards",
  posterUrl: "https://example.com/poster1.jpg",
  trailerUrl: "https://example.com/trailer1.mp4",
};

//to read and save single object or data to db
const createMovies = async (newMovie) => {
  try {
    const movie = new Movie(newMovie);
    // console.log(movie);
    const saveMovie = await movie.save();
    //console.log("New movie data", saveMovie);
  } catch (error) {
    console.log("unable to save data", error);
  }
};
// createMovies(newMovie);

/// to seed the multiple data movie data from movie.json file using loop
function seedData() {
  try {
    for (const md of moviesData) {
      const newMovie = new Movie({
        title: md.title,
        releaseYear: md.releaseYear,
        genre: md.genre,
        director: md.director,
        actors: md.actors,
        language: md.language,
        country: md.country,
        rating: md.rating,
        plot: md.plot,
        awards: md.awards,
        posterUrl: md.posterUrl,
        trailerUrl: md.trailerUrl,
      });

      //console.log(newMovie.title);
      newMovie.save();
    }
  } catch (error) {
    console.log("error seeding the data", error);
  }
}
// seedData();

//find or read the movie with particular title.
async function readMoviesBytitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    console.log(movie);
  } catch (error) {
    throw error;
  }
}
// readMoviesBytitle("Bajrangi Bhaijaan");

// to get all the movies from database
async function readAllMovies() {
  try {
    const allmovie = await Movie.find();
    console.log(allmovie);
  } catch (error) {
    console.log(error);
  }
}
readAllMovies();
