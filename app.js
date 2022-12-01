require("dotenv").config();
require("./database/database").connect();
const User = require("./model/user");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Server is working</h1>");
});

app.post("/register", async (req, res) => {
  try {
    // get all data from body
    const { firstname, lastname, email, password } = req.body;
    // all the data should exists
    if (!(firstname && lastname && email && password)) {
      res.status(400).send("All fields are compulsory");
    }
    // check if user already exists - email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("User already exists with this email");
    }

    // encrypt the password
    const myEncPassword = await bcrypt.hash(password, 10);

    // save the user in DB
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: myEncPassword,
    });

    // generate a token for user and send it
    const token = jwt.sign(
      { id: user._id, email },
      "shhhh", // process.env.jwtsecret
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    user.password = undefined;

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    // get all data from frontend/body
    // find user in DB
    // match the password
    //
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
