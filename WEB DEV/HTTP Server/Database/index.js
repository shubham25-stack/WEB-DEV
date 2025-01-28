const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());
// Connect to MongoDB
mongoose.connect("mongodb+srv://shubham:Ankush%402508@ankush.qm41n.mongodb.net/new_app");

// Define the User model
const User = mongoose.model("Users", { name: String, email: String, password: String });

app.post("/signup",async function(req , res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email:username});
  //CRUD -: create update,delete,read
  if(existingUser){
    return res.status(400).send("Username already exists");
  }

  const user = new User({
  name: name,
  email: email,
  password: password
  });

  user.send();
  res.json({
    "msg" : "user created successfully"
  })
})

// user.save();


app.listen(port);