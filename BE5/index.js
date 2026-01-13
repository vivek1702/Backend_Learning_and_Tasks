const Users = require("./models/Users.model");
const Post = require("./models/Posts.model");
const { initializeDB } = require("./db/connect.db");

initializeDB();

const NewUsers = [
  { name: "Amit Sharma", email: "amit.sharma@example.com" },
  { name: "Priya Verma", email: "priya.verma@example.com" },
  { name: "Rahul Mehta", email: "rahul.mehta@example.com" },
  { name: "Neha Singh", email: "neha.singh@example.com" },
  { name: "Karan Patel", email: "karan.patel@example.com" },
  { name: "Anjali Gupta", email: "anjali.gupta@example.com" },
  { name: "Rohit Kumar", email: "rohit.kumar@example.com" },
  { name: "Sneha Iyer", email: "sneha.iyer@example.com" },
  { name: "Vikram Rao", email: "vikram.rao@example.com" },
  { name: "Pooja Malhotra", email: "pooja.malhotra@example.com" },
];

//function to seed the data of new users into MongoDb.
async function SeedUserData() {
  try {
    for (let i = 0; i <= NewUsers.length - 1; i++) {
      const user = new Users(NewUsers[i]);
      await user.save();
    }
  } catch (error) {
    console.log("unable to seed data");
  }
}
// SeedUserData();

//function to add new post
const newPost = {
  title: "post 1",
  content: "good morning, post 1 content",
  author: "6965e762acda8ca4396301b7",
};

async function addPost() {
  try {
    const post = new Post(newPost);
    await post.save();
  } catch (error) {
    console.log("error in save data to db", error);
  }
}
// addPost();

const AllPosts = async () => {
  try {
    const allposts = await Post.find().populate("author");
    console.log(allposts);
  } catch (error) {
    console.log("unable to fetch data from DB");
  }
};
AllPosts();
