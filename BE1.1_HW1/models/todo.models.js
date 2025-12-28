const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    title: {type: String, required:true},
    description: String,
    priority: {type: String, enum: ['Low', 'Medium', 'High']},
    dueDate: Date,
    completed: {type: Boolean, default:false},
    tags: {type:[Strings], default:[]},
}, {timestamps:true})