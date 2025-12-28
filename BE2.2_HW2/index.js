const HotelData = require("../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../BE2.1_HW2/db/db.connect");

initializeDatabase();

// const newHotel = {
//   name: "Sunset Resort",
//   category: "Resort",
//   location: "12 Main Road, Anytown",
//   rating: 4.0,
//   reviews: [],
//   website: "https://sunset-example.com",
//   phoneNumber: "+1299655890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "11:00 AM",
//   amenities: [
//     "Room Service",
//     "Horse riding",
//     "Boating",
//     "Kids Play Area",
//     "Bar",
//   ],
//   priceRange: "$$$$ (61+)",
//   reservationsNeeded: true,
//   isParkingAvailable: true,
//   isWifiAvailable: true,
//   isPoolAvailable: true,
//   isSpaAvailable: true,
//   isRestaurantAvailable: true,
//   photos: [
//     "https://example.com/hotel2-photo1.jpg",
//     "https://example.com/hotel2-photo2.jpg",
//   ],
// };

// function SeedHotelDB(newHotel) {
//   try {
//     const hotel = HotelData(newHotel);
//     const saveData = hotel.save();
//     console.log("data saved", saveData);
//   } catch (error) {
//     console.log("unable to save", error);
//   }
// }

// SeedHotelDB(newHotel);

//show all the resturants
// async function allResturant() {
//   try {
//     const resturant = await HotelData.find();
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// allResturant();

// async function HotelByName(givenName) {
//   try {
//     const resturant = await HotelData.findOne({ name: givenName });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// HotelByName("Lake View");

// async function HotelByParkingSpace(BoolVal) {
//   try {
//     const resturant = await HotelData.find({ isParkingAvailable: BoolVal });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// HotelByParkingSpace(true);

// async function HotelAvaliablity(BoolVal) {
//   try {
//     const resturant = await HotelData.find({ isRestaurantAvailable: BoolVal });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// HotelAvaliablity(true);

// async function HotelCategory(CategoryValue) {
//   try {
//     const resturant = await HotelData.find({ category: CategoryValue });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// HotelCategory("Mid-Range");

// async function HotelPriceRange(Price) {
//   try {
//     const resturant = await HotelData.find({ priceRange: Price });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// HotelPriceRange("$$$$ (61+)");

async function HotelRating(rating) {
  try {
    const resturant = await HotelData.find({ rating: rating });
    console.log(resturant);
  } catch (error) {
    throw error;
  }
}
HotelRating(4.0);
