import { model, Schema } from "mongoose"

const TwitterSchema = new Schema(
    {
        profilePic: String,
        fullname: String,
        username: String,
        bio: String,
        companyName: String,
        city: String,
        portfolioLink: String,
        handle: String,
        followersCount: Number,
        followingCount: Number,
        isOnline: Boolean,
    }
)

const Twitter = model("Twitter", TwitterSchema)

module.exports = Twitter