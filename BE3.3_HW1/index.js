const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },

  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

const todos = [
  { id: 1, title: "Water the plants", day: "Saturday" },
  { id: 2, title: "Go for a walk", day: "Sunday" },
];

app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const index = books.find((book) => book.id == bookId);
  if (index === -1) {
    res.status(404).json({ error: "Book not Found" });
  } else {
    books.splice(index, 1);
    res.status(200).json({ message: "book deleted successfully" });
  }
});

app.get("/books", (req, res) => {
  res.send(books);
});

//delete todo's data
app.delete("/todos/:id", (req, res) => {
  const tastId = req.params.id;
  const index = todos.find((task) => task.id == tastId);
  if (index === -1) {
    res.status(404).json({ error: "task not Found" });
  } else {
    todos.splice(index, 1);
    res.status(200).json({ message: "task deleted successfully" });
  }
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Successfully connected to server port", PORT);
});
