const mongoose = require("mongoose");

const Details = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: [String],
      enum: ["Budget", "Mid-Range", "Luxury", "Boutique", "Resort", "Other"],
    },
    location: { type: String, required: true },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    reviews: { type: [String] },
    website: { type: [String] },
    phoneNumber: { type: [String] },
    checkInTime: { type: String },
    checkOutTime: { type: String },
    amenities: { type: [String] },
    priceRange: {
      type: String,
      enum: ["$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"],
    },
    reservationsNeeded: { type: Boolean, required: false },
    isParkingAvailable: { type: Boolean, required: false },
    isWifiAvailable: { type: Boolean, required: false },
    isPoolAvailable: { type: Boolean, required: false },
    isSpaAvailable: { type: Boolean, required: false },
    isRestaurantAvailable: { type: Boolean, required: false },
    photos: { type: [String] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", Details);
