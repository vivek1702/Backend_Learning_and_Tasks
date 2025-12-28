const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    name: {type: String, required:true},
    cardNumber: {type: Number, required: true},
    ValidThru: {type: String, default: () => {
        const now = new Date();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        return `${month}/${year}`
    }}

})

const CardDetails = mongoose.model("CardDetails", Details)

module.exports = CardDetails