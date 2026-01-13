const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

const Posts = mongoose.model("Posts", PostSchema);
module.exports = Posts;
