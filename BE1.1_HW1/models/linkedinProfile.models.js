const mongoose = require("mongoose");

const Details = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  bio: { type: String },
  profilePicUrl: String,
  followingCount: Number,
  followerCount: Number,
  companyName: { type: String },
  location: { type: String },
  portfolioUrl: { type: String },
});

const ProfileDetails = mongoose.model("ProfileDetails", Details);

module.exports = ProfileDetails;
