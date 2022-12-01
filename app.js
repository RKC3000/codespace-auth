require("dotenv").config();
require("./database/database").connect();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Server is working</h1>");
});

app.post("/register", (req, res) => {
  try {
    // get all data from body
    const {firstname, lastname, email, password} = req.body
    // all the data should exists
    if (!(firstname && lastname && email && password)) {
      res.status(400).send('All fields are compulsory')
    }
    // check if user already existes
    // encrypt the password
    // save the user in DB
    // generate a token for user and send it
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
