const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://mern-blog:eznZoZSGrtaII87L@cluster0.lfhcbve.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const userDoc = User.create({ username, password });
  res.json(userDoc);
  // console.log("register is functional");
});

app.listen(4000, () => {
  console.log(`App is running on PORT 4000`);
});
//eznZoZSGrtaII87L
//mongodb+srv://mern-blog:eznZoZSGrtaII87L@cluster0.lfhcbve.mongodb.net/?retryWrites=true&w=majority
