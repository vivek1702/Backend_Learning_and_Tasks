const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    brand: {type:String, required:true},
    model: {type:String, required:true},
    processor: {type:String},
    ramSizeGB: Number,
    storageSizeGB: Number,
    screenSizeInches: {type:Boolean, default:false},
    isTouchscreen: {type: Boolean, default:false},
    hasSSD: {type: Boolean, default:false},
    isSalesActive: {type: Boolean, default:false},
    isActive: {type: Boolean, default:true},
}, {timestamps:true})

const Laptops = mongoose.model("Laptops", Details)
module.exports = Laptops