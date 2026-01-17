const Hotels = require("../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../BE2.1_HW2/db/db.connect");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

initializeDatabase();

//using post method add new data to database
async function AddNewHotels(newData) {
  try {
    const hotel = new Hotels(newData);
    const saveData = await hotel.save();
    return saveData;
  } catch (error) {
    console.log("unable to get data from DB");
  }
}

//post method
app.post("/hotels", async (req, res) => {
  try {
    const newHotel = req.body;
    if (
      !newHotel.name ||
      !newHotel.category ||
      !newHotel.location ||
      !newHotel.phoneNumber ||
      !newHotel.rating ||
      !newHotel.amenities
    ) {
      res.status(400).json({ error: "unable to fetch data" });
    } else {
      await AddNewHotels(newHotel);
      res.status(200).json({ message: "data added successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch data" });
  }
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
