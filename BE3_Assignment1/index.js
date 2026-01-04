const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

// Pre-defined album array:
const albums = [
  { id: 1, title: "Abbey Road", artist: "The Beatles", year: 1969 },
  {
    id: 2,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
  },
  { id: 3, title: "Thriller", artist: "Michael Jackson", year: 1982 },
];

app.get("/", (req, res) => {
  res.send("Hello, This is Express Assignment Server.");
});

//New album to be added:  { id: 4, title: 'Back in Black', artist: 'AC/DC', year: 1980 }
app.post("/albums", (req, res) => {
  const newData = req.body;
  if (!newData.title || !newData.artist || !newData.year) {
    res.status(400).json({ error: "required all the key:value data to feed " });
  } else {
    albums.push(newData);
    res
      .status(200)
      .json({ message: "data added successfully", addedData: newData });
  }
});

//Write a DELETE route which deletes an album with id 2
app.delete("/albums/:id", (req, res) => {
  const toDeleteId = req.params.id;
  const DataIndex = albums.findIndex((item) => item.id == toDeleteId);
  if (DataIndex === -1) {
    res.status(400).json({ error: "album not found" });
  } else {
    albums.splice(DataIndex, 1);
    res.status(200).json({ message: "deleted successfully" });
  }
});

//Updated album data: { id: 1, title: 'Rumours', artist: 'Fleetwood Mac', year: 1977 }
app.post("/albums/:id", (req, res) => {
  const toUpdateId = parseInt(req.params.id);
  const newData = req.body;
  const DataToupdate = albums.find((albumID) => albumID.id === toUpdateId);
  console.log(DataToupdate);
  if (!DataToupdate) {
    res.status(400).json({
      error: "album doesnot exist",
    });
  } else {
    if (!newData.title || !newData.artist || !newData.year) {
      res.status(400).json({
        error: "all the key:value fields are required",
      });
    } else {
      Object.assign(DataToupdate, newData);
      res.status(200).json({ message: "data updated successfully" });
    }
  }
});

app.get("/albums", (req, res) => {
  res.send(albums);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is connected to server");
});
