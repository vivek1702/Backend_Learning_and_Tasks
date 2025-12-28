const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    profileName: {type:String},
    postTime: {Timestamp:true},
    post: {
        description : {type: String}, postImg: {type: String}
    },
    like: {type:Number},
    comment: {type:Number},
    share: {type:Number}
})

const faceBookPostDetails = mongoose.model("faceBookPostDetails", Details)

module.exports = faceBookPostDetails