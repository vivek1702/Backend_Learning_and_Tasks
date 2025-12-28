const mongoose = require("mongoose")

const Details = new mongoose.Schema({
    title: {type: String, required:true},
    artist: {type: String, required:true},
    genre: {type: String, enum: ['Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Classical', 'Country', 'Electronic', 'R&B', 'Reggae', 'Indie']},
    releaseYear: {type:Number},
    recordLabel: {type:String},
    format:String,
    isExplicit: {type: Boolean, default:false},
    isAvailableOnStreaming: {type: Boolean, default:false},
    isFeatured: {type: Boolean, default:false},

}, {timestamps:true})


const MusicAlbums = mongoose.model("MusicAlbums", Details)

module.exports = MusicAlbums