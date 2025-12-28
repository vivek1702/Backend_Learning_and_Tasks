const mongoose = require("mongoose")


const EmployeeCard = new mongoose.Schema({
    name : {type: String, required:true},
    position: {type: String, required:true},
    id_NO: {type: String, required:true},
    DOB: {type: Date},
    email: {type: String, required: true},
    phoneNumber: {type: String, required:true},
    address: {type: String},
    profilePic: {type: String}

})

const EmployeePassCard = mongoose.model("EmployeePassCard", EmployeeCard)

module.exports = EmployeePassCard

