const Resturants = require("../../BE2.1_HW1/models/Resturants.models");
const { initializeDatabase } = require("../../BE2.1_HW1/db/db.connect");
const express = require("express");
require("dotenv").config();

initializeDatabase();

//update resturant data through api call
async function updateResturant(resturantId, dataToupdate) {
  try {
    const resturant = await Resturants.findByIdAndUpdate(
      resturantId,
      dataToupdate,
      { new: true }
    );
    return resturant;
  } catch (error) {
    throw error;
  }
}

//post method
const app = express();
app.use(express.json());
app.post("/resturants/:resturantId", async (req, res) => {
  try {
    const resturant = await updateResturant(req.params.resturantId, req.body);
    if (resturant) {
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
