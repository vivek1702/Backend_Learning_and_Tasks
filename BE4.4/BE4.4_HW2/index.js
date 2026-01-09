const Hotels = require("../../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../../BE2.1_HW2/db/db.connect");
const express = require("express");
require("dotenv").config();

initializeDatabase();

//update resturant data through api call
async function updateHotel(HotelId, dataToupdate) {
  try {
    const hotel = await Hotels.findByIdAndUpdate(HotelId, dataToupdate, {
      new: true,
    });
    return hotel;
  } catch (error) {
    throw error;
  }
}

//post method
const app = express();
app.use(express.json());
app.post("/hotels/:hotelId", async (req, res) => {
  try {
    const hotel = await updateHotel(req.params.hotelId, req.body);
    if (hotel) {
      res.status(201).json({ message: "data updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("app is running on port ", port);
});
