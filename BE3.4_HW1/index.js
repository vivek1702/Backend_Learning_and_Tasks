const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

//per-defined book data
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

//per-defined todos data
const todos = [
  { id: 1, title: "Water the plants", day: "Saturday" },
  { id: 2, title: "Go for a walk", day: "Sunday" },
];

// get method to test api
app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

//get method of books data to show in postman/browser
app.get("/books", (req, res) => {
  res.send(books);
});

//post method to update data
//Updated book data: { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1970 }
app.post("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const newBookdata = req.body;

  const dataToupdate = books.find((book) => book.id === bookId);

  if (!dataToupdate) {
    res.status(400).json({ error: "books not found" });
  } else {
    if (!newBookdata.title || !newBookdata.author || !newBookdata.year) {
      res.status(400).json({ error: "all the keys:values is required" });
    } else {
      Object.assign(dataToupdate, newBookdata);
      res
        .status(200)
        .json({ message: "data updated successfully", newData: dataToupdate });
    }
  }
});

//get method of todos data to show in postman or browser
app.get("/todos", (req, res) => {
  res.send(todos);
});

//post method to update data
// data to update { id: 1, title: 'Water the non-cactus plants', day: 'Saturday' }
app.post("/todos/:todoID", (req, res) => {
  const todoId = req.params.todoID;
  const newData = req.body;

  const datatoUpdate = todos.find((task) => task.id == todoId);

  if (!datatoUpdate) {
    res.status(400).json({ error: "task not found" });
  } else {
    if (!newData.title || !newData.day) {
      res.status(400).json({ error: "title and day required" });
    } else {
      Object.assign(datatoUpdate, newData);
      res.status(200).json({
        message: "data added successfully",
        newTodoData: datatoUpdate,
      });
    }
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is connected to server port", PORT);
});
