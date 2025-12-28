const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    productImage: {type: String},
    brandName: {type: String, required: true},
    rating: {type:Number, min:0, max:5, default:0},
    reviews: {type:Number},
    description: {type: Text, required: true},
    discount: {type: Number, default: 0},
    price: {type: Decimal128, default: 0},
    dicountPrice: {type: Decimal128, default: () => {
        const finalPrice = (Details.discount / Details.price)*100
        return finalPrice
    }},
    variant: {type: [String], default: []},
    wifiConnectivity: {type: String, enum:["yes", "no"], default: "no"}
})

const Product = mongoose.model("Product", Details)

module.exports = Product
