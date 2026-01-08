const Resturants = require("../BE2.1_HW1/models/Resturants.models");
const { initializeDatabase } = require("../BE2.1_HW1/db/db.connect");

const express = require("express");
require("dotenv").config();

initializeDatabase();

//using post method add new data to database
async function AddNewResturants(newData) {
  try {
    const resturant = new Resturants(newData);
    const saveData = await resturant.save();
  } catch (error) {
    console.log("unable to get data from DB");
  }
}

app = express();
app.use(express.json());

//post method
app.post("/resturants", async (req, res) => {
  try {
    const newResturant = req.body;
    if (
      !newResturant.name ||
      !newResturant.cuisine ||
      !newResturant.location ||
      !newResturant.phoneNumber
    ) {
      res.status(400).json({ error: "unable to fetch data" });
    } else {
      await AddNewResturants(newResturant);
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
