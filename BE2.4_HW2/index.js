const HotelData = require("../BE2.1_HW2/models/Hotel.models");
const { initializeDatabase } = require("../BE2.1_HW2/db/db.connect");

initializeDatabase();

async function deleteHotelById(HotelId) {
  try {
    const deletedHotel = await HotelData.findByIdAndDelete(HotelId);
    console.log(deletedHotel);
  } catch (error) {
    console.log(error);
  }
}
// deleteHotelById("69491c94a69bff367b994e39");

async function deleteHotelByPhoneNumber(HotelPhoneNumber) {
  try {
    const deletedHotel = await HotelData.findOneAndDelete({
      phoneNumber: HotelPhoneNumber,
    });
    console.log(deletedHotel);
  } catch (error) {
    console.log(error);
  }
}
deleteHotelByPhoneNumber("+1234555890");
