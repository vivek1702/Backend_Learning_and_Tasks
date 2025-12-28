const resturants = require("../BE2.1_HW1/models/Resturants.models");
const { initializeDatabase } = require("../BE2.1_HW1/db/db.connect");

initializeDatabase();

// async function updateResturantsData(movieID, dataToUpdate) {
//   try {
//     const updateResturant = await resturants.findByIdAndUpdate(
//       movieID,
//       dataToUpdate,
//       { new: true }
//     );
//     console.log("data updated", updateResturant);
//   } catch (error) {
//     console.log("error while updating data", error);
//   }
// }
// updateResturantsData("694a44e2401df1761904d7d1", { rating: 4.1 });

//update name
// async function updateResturantData(movieName, dataToUpdate) {
//   try {
//     const updateResturant = await resturants.findOneAndUpdate(
//       {
//         name: movieName,
//       },
//       dataToUpdate,
//       { new: true }
//     );
//     console.log("data updated", updateResturant);
//   } catch (error) {
//     console.log("error while updating data", error);
//   }
// }
// updateResturantData("Somi", { name: "Som Sarovar" });

async function updateResturantData(PhoneNumber, dataToUpdate) {
  try {
    const updateResturant = await resturants.findOneAndUpdate(
      {
        phoneNumber: PhoneNumber,
      },
      dataToUpdate,
      { new: true }
    );
    console.log("data updated", updateResturant);
  } catch (error) {
    console.log("error while updating data", error);
  }
}
updateResturantData("+1288997392", { isDeliveryAvailable: true });
