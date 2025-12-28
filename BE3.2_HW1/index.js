const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

//books data with already given value
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

//pre-defined todo data
const todos = [{ id: 1, title: "Water the plants", day: "Saturday" }];

//get method for initial server call
app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

//post method for books to add new data
app.post("/books", (req, resp) => {
  newBook = req.body;
  if (!newBook.title || !newBook.author || !newBook.year) {
    resp.status(400).json({ error: "title, author and year required" });
  } else {
    books.push(newBook);
    resp
      .status(201)
      .json({ message: "books added successfully", book: newBook });
  }
});

//get method to show book data in postman
app.get("/books", (req, resp) => {
  resp.send(books);
});

//post method for todo's
app.post("/todos", (req, res) => {
  const newTask = req.body;
  if (newTask.title || newTask.day) {
    todos.push(newTask);
    res.status(201).json({ message: "data added successfully", task: newTask });
  } else {
    res.status(400).json({ error: "title and day is required" });
  }
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

//mention port in which server is running and call it through app
PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app server is running on port", PORT);
});
