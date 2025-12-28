const HotelData = require("../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../BE2.1_HW2/db/db.connect");

initializeDatabase();

// async function updateHotelData(hotelId, dataToUpdate) {
//   try {
//     const hotel = await HotelData.findByIdAndUpdate(hotelId, dataToUpdate, {
//       new: true,
//     });
//     console.log(hotel);
//   } catch (error) {
//     throw error;
//   }
// }

// updateHotelData("694aa0b2a6bfdd29baaf09c6", { checkOutTime: "11:00 AM" });

// async function updateHotelData(hotelName, dataToUpdate) {
//   try {
//     const hotel = await HotelData.findOneAndUpdate(
//       { name: hotelName },
//       dataToUpdate,
//       {
//         new: true,
//       }
//     );
//     console.log(hotel);
//   } catch (error) {
//     throw error;
//   }
// }

// updateHotelData("Sunset Resort", { rating: 4.2 });

async function updateHotelData(hotelPhoneNumber, dataToUpdate) {
  try {
    const hotel = await HotelData.findOneAndUpdate(
      { phoneNumber: hotelPhoneNumber },
      dataToUpdate,
      {
        new: true,
      }
    );
    console.log(hotel);
  } catch (error) {
    throw error;
  }
}

updateHotelData("+1299655890", { phoneNumber: "+1997687392" });
