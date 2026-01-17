const Books = require("../../BE1.1_HW1/models/books.models");
const { initializeDatabase } = require("../../BE1.1_HW1/db/db.connect");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

initializeDatabase();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

//function to store data into books database
async function SeedBooksData(newData) {
  try {
    const book = new Books(newData);
    const saveData = await book.save();
    return saveData;
  } catch (error) {
    console.log("data not saved into DB", error);
  }
}

//post method
app.post("/books", async (req, res) => {
  try {
    const book = req.body;
    if (!book.title) {
      res.status(400).json({ error: "all field required" });
    } else {
      await SeedBooksData(book);
      res
        .status(201)
        .json({ message: "book data saved successfully", newBook: book });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, "app is running on port", PORT);
