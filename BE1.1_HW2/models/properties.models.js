const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    title: {type: String, required:true},
    description: {type:String},
    location: {type:String},
    pricePerNight: {type:Number},
    capacity: {type: Number},
    isPetFriendly: {type:Boolean, default:false},
    hasWiFi: {type:Boolean, default:false},
    hasParking: {type:Boolean, default:false},
    isActive: {type:Boolean, default:true},

}, {timestamps:true})

const Properties = mongoose.model("Properties", Details)
module.exports = Properties
