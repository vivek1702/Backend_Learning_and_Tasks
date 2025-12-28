const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    recipeImg: {type:String},
    dishName: {type: String},
    serving: {type:Number},
    preparingTime: {type: Number},
    cookingTime: {type: Number},
    Ingredients: {type: [String]},
    directionsToCook: {type: String},
    notes: String
})

const Recipe = mongoose.model("Recipe", Details)

module.exports = Recipe