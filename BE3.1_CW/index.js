const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express JS");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send("contact us at contact@example.com");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
