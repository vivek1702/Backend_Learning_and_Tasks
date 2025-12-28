const mongoose = require("mongoose");

const Details = new mongoose.Schema(
  {
    title: { type: String },
    author: String,
    publishedYear: Number,
    genre: {
      type: [String],
      enum: [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Thriller",
        "Science Fiction",
        "Fantasy",
        "Romance",
        "Historical",
        "Biography",
        "Self-help",
        "Other",
      ],
    },
    language: String,
    country: String,
    rating: { type: Number, min: 0, max: 10, default: 0 },
    summary: String,
    coverImageUrl: String,
  },
  { timestamps: true }
);

const Books = mongoose.model("Books", Details);

module.exports = Books;
