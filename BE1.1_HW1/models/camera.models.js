const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    brandName: {type: String, required: true},
    description: {type: Text, required: true},
    discount: {type: Number, default: 0},
    price: {type: Decimal128, default: 0},
    dicountPrice: {type: Decimal128, default: () => {
        const finalPrice = (Details.discount / Details.price)*100
        return finalPrice
    }},
    stock: {type:Number},
    freeDelivery: {type: Boolean}
})

const Camera = mongoose.model("Camera", Details)
module.exports = Camera