const Hotels = require("../../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../../BE2.1_HW2/db/db.connect");
const express = require("express");
require("dotenv").config();

initializeDatabase();

//delete resturant by id
async function DeleteHotel(HotelId) {
  try {
    const DeletedHotel = await Hotels.findByIdAndDelete(HotelId);
    return DeletedHotel;
  } catch (error) {
    throw error;
  }
}

const app = express();
app.use(express.json());
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
