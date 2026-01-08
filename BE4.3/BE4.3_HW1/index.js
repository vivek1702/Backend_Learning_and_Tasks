const Resturants = require("../../BE2.1_HW1/models/Resturants.models");
const { initializeDatabase } = require("../../BE2.1_HW1/db/db.connect");
const express = require("express");
require("dotenv").config();

initializeDatabase();

//delete resturant by id
async function DeleteResturant(resturantsId) {
  try {
    const deletedResturant = await Resturants.findByIdAndDelete(resturantsId);
    return deletedResturant;
  } catch (error) {
    throw error;
  }
}

const app = express();
app.use(express.json());
app.delete("/restaurants/:restaurantId", async (req, res) => {
  try {
    await DeleteResturant(req.params.restaurantId);
    res.status(201).json("data delete successfully");
  } catch (error) {
    res.status(500).json({ error: "unable to delete data" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
