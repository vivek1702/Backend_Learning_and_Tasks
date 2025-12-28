const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    title : {type: String, required: true},
    content: {type: String},
    category: {type: String, enum: ['Personal', 'Work', 'Study', 'Ideas', 'Journal', 'Other']},
    tags: {type: [String], default: []}
},
    {timestamps: true}
)

const Books = mongoose.model("Books", Details)