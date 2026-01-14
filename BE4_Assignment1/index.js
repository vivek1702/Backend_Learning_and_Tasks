const Books = require("../BE1.1_HW1/models/books.models");
const { initializeDatabase } = require("../BE1.1_HW1/db/db.connect");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

initializeDatabase();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

//seed new book data to database
async function SeedBookData(newBookData) {
  try {
    const book = new Books(newBookData);
    const saveBook = await book.save();
    return saveBook;
  } catch (error) {
    console.log("unable to seed data to DB", error);
  }
}

app.post("/books", async (req, res) => {
  try {
    const newbook = req.body;
    if (
      !newbook.title ||
      !newbook.author ||
      !newbook.publishedYear ||
      !newbook.genre ||
      !newbook.language
    ) {
      res.status(400).json({ error: "required value og all the field" });
    } else {
      await SeedBookData(newbook);
      res.status(201).json({ message: "new book data added successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "failed to add movies" });
  }
});

//read all books data from DB
const allbooksData = async () => {
  try {
    const books = await Books.find();
    return books;
  } catch (error) {
    console.log("unable to get book data from DB", error);
  }
};

app.get("/books", async (req, res) => {
  try {
    const books = await allbooksData();
    if (books.length != 0) {
      res.json(books);
    } else {
      res.status(400).json({ error: "uanble to get data into api" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//read books by title
const BookByTitle = async (bookTitle) => {
  try {
    const book = await Books.findOne({ title: bookTitle });
    return book;
  } catch (error) {
    console.log("unable to find book in DB");
  }
};

app.get("/books/title/:bookTitle", async (req, res) => {
  try {
    const book = await BookByTitle(req.params.bookTitle);
    if (!book) {
      res.status(400).json({ error: "data not found" });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//read books by author
const BookByAuthor = async (author) => {
  try {
    const book = await Books.find({ author: author });
    return book;
  } catch (error) {
    console.log("unable to find book in DB");
  }
};

app.get("/books/author/:authorName", async (req, res) => {
  try {
    const book = await BookByAuthor(req.params.authorName);
    if (!book) {
      res.status(400).json({ error: "data not found" });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//read books by release year
const BookByYear = async (releaseYear) => {
  try {
    const book = await Books.findOne({ publishedYear: releaseYear });
    return book;
  } catch (error) {
    console.log("unable to find book in DB");
  }
};

app.post("/books/year/:releaseYear", async (req, res) => {
  try {
    const bookId = parseInt(req.params.releaseYear);
    const book = await BookByYear(bookId);
    if (!book) {
      res.status(400).json({ error: "data not found" });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

// 8. Create an API to update a book's rating with the help of its id.
//  Update the rating of the "Lean In" from 4.1 to 4.5.
// Send an error message "Book does not exist", in case that book is not found.
// Make sure to do error handling.
// Updated book rating: { "rating": 4.5 }
async function updateBookRating(bookId, dataToUpdate) {
  try {
    const book = await Books.findByIdAndUpdate(bookId, dataToUpdate, {
      new: true,
    });
    return book;
  } catch (error) {
    console.log("unable to update data from DB", error);
  }
}
app.post("/books/:bookId", async (req, res) => {
  try {
    const book = await updateBookRating(req.params.bookId, req.body);
    if (!book) {
      res.status(400).json({ error: "Book does not exist" });
    } else {
      res.json(book);
      res.status(201).json({ message: "data updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

// 9. Create an API to update a book's rating with the help of its title.
// Update the details of the book "Shoe Dog".
// Use the query .findOneAndUpdate() for this. Send an error message "Book does not exist", in case
// that book is not found. Make sure to do error handling.
// Updated book data: { "publishedYear": 2017, "rating": 4.2 }
async function updateBookByTitle(bookTitle, dataToUpdate) {
  try {
    const book = await Books.findOneAndUpdate(
      { title: bookTitle },
      dataToUpdate,
      { new: true }
    );
    return book;
  } catch (error) {
    console.log("unable to update data from DB", error);
  }
}
app.post("/books/findBook/:titleName", async (req, res) => {
  try {
    const book = await updateBookByTitle(req.params.titleName, req.body);
    if (!book) {
      res.status(400).json({ error: "Book does not exist" });
    } else {
      res.json(book);
      res.status(201).json({ message: "data updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//delete data by id
async function DeleteBookData(bookId) {
  try {
    const book = await Books.findByIdAndDelete(bookId);
    return book;
  } catch (error) {
    console.log("unable to delete data from DB", error);
  }
}
app.delete("/books/:bookId", async (req, res) => {
  try {
    const book = await DeleteBookData(req.params.bookId);
    if (!book) {
      res.status(400).json({ error: "Book does not exist" });
    } else {
      res.json(book);
      res.status(201).json({ message: "data deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("app is running on ", PORT);
});
