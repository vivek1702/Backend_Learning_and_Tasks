const { initializeDatabase } = require("./db/db.connect");
const ResturantDetails = require("./models/Resturants.models");

initializeDatabase();

const newRestaurant = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

// const newRestaurant = {
//   name: "Somi",
//   cuisine: ["Greek"],
//   location: "11 Main Road, Gem",
//   rating: 4.3,
//   reviews: [],
//   website: "https://somi-example.com",
//   phoneNumber: "+1234997390",
//   openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: false,
//   isDeliveryAvailable: true,
//   menuUrl: "https://somi-example.com/menu",
//   photos: [
//     "https://example.com/somi-photo1.jpg",
//     "https://example.com/somi-photo2.jpg",
//   ],
// };

// const newRestaurant = {
//   name: "Yo China",
//   cuisine: ["Chinese", "Italian"],
//   location: "MG Road, Bangalore",
//   rating: 3.9,
//   reviews: [],
//   website: "https://yo-example.com",
//   phoneNumber: "+1288997392",
//   openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isDeliveryAvailable: false,
//   menuUrl: "https://yo-example.com/menu",
//   photos: [
//     "https://example.com/yo-photo1.jpg",
//     "https://example.com/yo-photo2.jpg",
//     "https://example.com/yo-photo3.jpg",
//   ],
// };

// async function createResturants(newRestaurant) {
//   try {
//     const resturants = new ResturantDetails(newRestaurant);
//     const saveResturants = await resturants.save();
//     console.log("new movie data saved", saveResturants);
//   } catch (error) {
//     console.log("not able to save data", error);
//   }
// }
// createResturants(newRestaurant);

// read all the resturant
// async function allResturantsData() {
//   try {
//     const allResturant = await ResturantDetails.find();
//     console.log(allResturant);
//   } catch (error) {
//     throw error;
//   }
// }
// allResturantsData();

// read resturant by name
// async function ResturantsByName(resturantName) {
//   try {
//     const resturant = await ResturantDetails.findOne({ name: resturantName });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// ResturantsByName("Yo China");

//Resturants offer reservation
// async function ResturantsOffersReservation(resturantName) {
//   try {
//     const resturant = await ResturantDetails.find({
//       reservationsNeeded: resturantName,
//     });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// ResturantsOffersReservation(true);

// async function ResturantsOffersDelivery(BoolValue) {
//   try {
//     const resturant = await ResturantDetails.find({
//       isDeliveryAvailable: BoolValue,
//     });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// ResturantsOffersDelivery(true);

//search by phone number
// async function ResturantsDataByPhone(PhoneNo) {
//   try {
//     const resturant = await ResturantDetails.find({
//       phoneNumber: PhoneNo,
//     });
//     console.log(resturant);
//   } catch (error) {
//     throw error;
//   }
// }
// ResturantsDataByPhone("+1288997392");

// search by cuisine
async function ItalianResturant(cuisineValue) {
  try {
    const resturant = await ResturantDetails.find({
      cuisine: cuisineValue,
    });
    console.log(resturant);
  } catch (error) {
    throw error;
  }
}
ItalianResturant("Italian");
