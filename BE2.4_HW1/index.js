const ResturantData = require("../BE2.1_HW1/models/Resturants.models");
const { initializeDatabase } = require("../BE2.1_HW1/db/db.connect");

initializeDatabase();

//delete by resturant id
async function deleteResturants(ResturantId) {
  try {
    const deletedresturants = await ResturantData.findByIdAndDelete(
      ResturantId
    );
    console.log(`${deletedresturants}`);
  } catch (error) {
    console.log(error);
  }
}

// deleteResturants("6946673bc18d361a15142227");

//delete by resturant name

async function deleteRestaurantByName(resturantName) {
  try {
    const deleteResturant = await ResturantData.findOneAndDelete({
      name: resturantName,
    });
    console.log(deleteResturant);
  } catch (error) {
    console.log(error);
  }
}

deleteRestaurantByName("Som Sarovar");
