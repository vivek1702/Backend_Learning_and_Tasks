const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    name: String,
    cuisine: {type:String, enum: ['Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan','Other']},
    location: String,
    owner: {type:String, required:true},
    phone: Number,
    website: String,
    openingYear: Number,
    rating: {type: Number, min:0, max:10, default:0},
    specialDishes : [],
    photoUrls: {type: [Strings]},


}, {timestamps:true})

const Resturants = mongoose.model("Resturants", Details)
module.exports = Resturants