const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Hotels = require("../../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../../BE2.1_HW2/db/db.connect");

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(express.json());

initializeDatabase();

//read all hotels
async function AllHotels() {
  try {
    const hotel = await Hotels.find();
    return hotel;
  } catch (error) {
    throw error;
  }
}

app.get("/hotels", async (req, res) => {
  try {
    const hotel = await AllHotels();
    if (!hotel) {
      res.status(400).json({ error: "unable to fetch data into variable" });
    } else {
      res.json(hotel);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

//delete hotel by id
async function DeleteHotel(HotelId) {
  try {
    const DeletedHotel = await Hotels.findByIdAndDelete(HotelId);
    return DeletedHotel;
  } catch (error) {
    throw error;
  }
}

app.delete("/hotels/:hotelId", async (req, res) => {
  try {
    await DeleteHotel(req.params.hotelId);
    res.status(201).json("data delete successfully");
  } catch (error) {
    res.status(500).json({ error: "unable to delete data" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
