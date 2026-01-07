const Hotels = require("../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../BE2.1_HW2/db/db.connect");

const express = require("express");
require("dotenv").config();

initializeDatabase();

const app = express();
app.use(express.json());

//read all the hotels data
async function AllHotels() {
  try {
    const hotel = Hotels.find();
    return hotel;
  } catch (error) {
    console.log("unable to fetch from DB");
  }
}

app.get("/hotels", async (req, res) => {
  try {
    const hotel = await AllHotels();
    if (hotel.length === 0) {
      res.status(400).json({ error: "unable to get data from DB function" });
    } else {
      res.json(hotel);
    }
  } catch {
    res.status(500).json({ error: "data not fetch into api" });
  }
});

//read hotel with name
async function HotelsByName(hotelName) {
  try {
    const hotel = Hotels.findOne({ name: hotelName });
    return hotel;
  } catch (error) {
    console.log("unable to fetch from DB");
  }
}

app.get("/hotels/:hotelName", async (req, res) => {
  try {
    const hotel = await HotelsByName(req.params.hotelName);
    if (hotel.length === 0) {
      res.status(400).json({ error: "unable to get data from DB function" });
    } else {
      res.json(hotel);
    }
  } catch {
    res.status(500).json({ error: "data not fetch into api" });
  }
});

//read hotel with phone number
async function HotelsByPhoneNumber(ph) {
  try {
    const hotel = Hotels.findOne({ phoneNumber: ph });
    return hotel;
  } catch (error) {
    console.log("unable to fetch from DB");
  }
}

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  try {
    const hotel = await HotelsByPhoneNumber(req.params.phoneNumber);
    if (hotel.length === 0) {
      res.status(400).json({ error: "unable to get data from DB function" });
    } else {
      res.json(hotel);
    }
  } catch {
    res.status(500).json({ error: "data not fetch into api" });
  }
});

// read hotel with rating
async function HotelsByRating(rating) {
  try {
    const hotel = Hotels.findOne({ rating: rating });
    return hotel;
  } catch (error) {
    console.log("unable to fetch from DB");
  }
}

app.get("/hotels/rating/:hotelRating", async (req, res) => {
  try {
    const hotel = await HotelsByRating(req.params.hotelRating);
    if (hotel.length === 0) {
      res.status(400).json({ error: "unable to get data from DB function" });
    } else {
      res.json(hotel);
    }
  } catch {
    res.status(500).json({ error: "data not fetch into api" });
  }
});

// read hotel with category
async function HotelsByCategory(category) {
  try {
    const hotel = Hotels.findOne({ category: category });
    return hotel;
  } catch (error) {
    console.log("unable to fetch from DB");
  }
}

app.get("/hotels/category/:hotelCategory", async (req, res) => {
  try {
    const hotel = await HotelsByCategory(req.params.hotelCategory);
    if (hotel.length === 0) {
      res.status(400).json({ error: "unable to get data from DB function" });
    } else {
      res.json(hotel);
    }
  } catch {
    res.status(500).json({ error: "data not fetch into api" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is running on port ", PORT);
});
