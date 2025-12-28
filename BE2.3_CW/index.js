const Movies = require("../BE1.1_CW/models/movies.models");
const { initializeDatabase } = require("../BE1.1_CW/db/db.connect");

initializeDatabase();

// async function updateMovie(movieID, dateToUpdate) {
//   try {
//     const updatedMovie = await Movies.findByIdAndUpdate(movieID, dateToUpdate, {
//       new: true,
//     });

//     console.log(updatedMovie);
//   } catch (error) {
//     console.log("error in updating error", error);
//   }
// }
// updateMovie("69425c02266ffe4015461f92", { rating: 9.0 });

async function updatedMovie(movieTitle, yearToUpdate) {
  try {
    const updatedMovie = await Movies.findOneAndUpdate(
      { title: movieTitle },
      yearToUpdate,
      { new: true }
    );
    console.log(updatedMovie);
  } catch (error) {
    console.log("error in updating data", error);
  }
}

updatedMovie("Kabhi Khushi Kabhie Gham", { releaseYear: 2005 });
