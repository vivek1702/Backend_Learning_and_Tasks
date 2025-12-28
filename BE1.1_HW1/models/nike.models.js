const mongoose = require("mongoose")


const nikeCard = new mongoose.Schema({
    productName: {type: String, required:true},
    productInfo: {type: Text},
    productImage: {type: String},
    productColors: [{
        type: String, enum: ["red", "blue", "green", "orange", "black"]
    }],
    productSize: [{
        type: Number, enum: [7,8,9,10]
    }],
    price: {type: Decimal128}
})