const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const BooksModelData = require("./models/books.models");

initializeDatabase();
const jsonData = fs.readFileSync("BooksData.json", "utf8");
const BooksData = JSON.parse(jsonData);

function seedData() {
  for (let i of BooksData) {
    const NewBooks = new BooksModelData({
      title: i.title,
      author: i.author,
      publishedYear: i.publishedYear,
      genre: i.genre,
      language: i.language,
      country: i.country,
      rating: i.rating,
      summary: i.summary,
      coverImageUrl: i.coverImageUrl,
    });

    // console.log(NewBooks.genre);
    NewBooks.save();
  }
}

seedData();
