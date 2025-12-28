const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    username: {type: String, required:true},
    email: {type: String, required:true},
    firstName: {type: String},
    lastName: {type: String},
    birthDate: Date,
    isActive: {type:Boolean, default:true},
    profilePictureUrl: {type: String},

}, {timestamps:true})

const UserProfileDetails = mongoose.model("UserProfileDetails", Details)

module.exports = UserProfileDetails
