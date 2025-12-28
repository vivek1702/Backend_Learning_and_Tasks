const mongoose = require("mongoose")

const fruitDetails = new mongoose.Schema({
    fruitName: {type:String, required:true},
    description: {type: Text, required: true},
    calories: {type: Decimal128}, 
    carbohydrates: {types: Decimal128},
    protien: {types: Decimal128},
    saturatedFats: {types: Decimal128},
    like: {type: Boolean, default: false}
})

const FruitNutrtionsDetails = mongoose.model("FruitNutrtionsDetails", fruitDetails)

module.exports = FruitNutrtionsDetails