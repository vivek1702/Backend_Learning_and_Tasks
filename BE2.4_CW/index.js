const MoviesData = require("../BE1.1_CW/models/movies.models");
const { initializeDatabase } = require("../BE1.1_CW/db/db.connect");

initializeDatabase();

async function deleteMovies(movieID) {
  try {
    const deleteMovie = await MoviesData.findByIdAndDelete(movieID);
  } catch (error) {
    throw error;
  }
}
// deleteMovies("69425c02266ffe4015461f96");

async function deleteMovieFromDb(movieTitle) {
  try {
    const deleteMovie = await MoviesData.findOneAndDelete({
      title: movieTitle,
    });
    console.log(deleteMovie);
  } catch (error) {
    throw error;
  }
}
// deleteMovieFromDb("Movie 9");

// delete multiple title with same name
async function deleteMultipleMovieFromDb(movieTitle) {
  try {
    const deleteMovie = await MoviesData.deleteMany({
      title: movieTitle,
    });
    //console.log(deleteMovie);
    console.log(`${deleteMovie.deletedCount}`);
  } catch (error) {
    throw error;
  }
}
deleteMultipleMovieFromDb("Movie 9");
