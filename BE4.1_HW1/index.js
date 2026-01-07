//import from BE2.1
const { initializeDatabase } = require("../BE2.1_HW1/db/db.connect");
const Resturants = require("../BE2.1_HW1/models/Resturants.models");

const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

initializeDatabase();

// read all the resturants
async function allResturants() {
  try {
    const resturants = await Resturants.find();
    //console.log(resturants);
    return resturants;
  } catch (error) {
    console.log("not get data from database", error);
  }
}

app.get("/restaurants", async (req, res) => {
  try {
    const resturantData = await allResturants();
    //console.log(resturants);
    if (resturantData.length === 0) {
      res.status(400).json({ error: "not get data into resturant" });
    } else {
      res.json(resturantData);
    }
  } catch (error) {
    res.status(500).json({ error: "unable to fetch" });
  }
});

//read resturants by name
async function resturnatsByName(resturantName) {
  try {
    const resturant = await Resturants.findOne({ name: resturantName });
    return resturant;
  } catch (error) {
    console.log("unable to get data from DB", error);
  }
}

app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const resturantData = await resturnatsByName(req.params.restaurantName);
    if (resturantData.length === 0) {
      res.status(400).json({ error: "not get data from function" });
    } else {
      res.json(resturantData);
    }
  } catch (error) {
    res.status(500).json({ error: "api response fail" });
  }
});

//read a resturant by phone number
async function resturnatsByPhoneNumber(resturantPH) {
  try {
    const resturant = await Resturants.findOne({ phoneNumber: resturantPH });
    return resturant;
  } catch (error) {
    console.log("unable to get data from DB", error);
  }
}

app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const resturantData = await resturnatsByPhoneNumber(req.params.phoneNumber);
    if (resturantData.length === 0) {
      res.status(400).json({ error: "not get data from function" });
    } else {
      res.json(resturantData);
    }
  } catch (error) {
    res.status(500).json({ error: "api response fail" });
  }
});

//read all resturant by cusine
async function resturnatsByCuisine(cuisine) {
  try {
    const resturant = await Resturants.findOne({ cuisine: cuisine });
    return resturant;
  } catch (error) {
    console.log("unable to get data from DB", error);
  }
}

app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const resturantData = await resturnatsByCuisine(req.params.cuisineName);
    if (resturantData.length === 0) {
      res.status(400).json({ error: "not get data from function" });
    } else {
      res.json(resturantData);
    }
  } catch (error) {
    res.status(500).json({ error: "api response fail" });
  }
});

//read all the resturant by location
async function resturnatsByLocation(location) {
  try {
    const resturant = await Resturants.findOne({ location: location });
    return resturant;
  } catch (error) {
    console.log("unable to get data from DB", error);
  }
}

app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const resturantData = await resturnatsByLocation(
      req.params.restaurantLocation
    );
    if (resturantData.length === 0) {
      res.status(400).json({ error: "not get data from function" });
    } else {
      res.json(resturantData);
    }
  } catch (error) {
    res.status(500).json({ error: "api response fail" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("running on port", PORT);
});
