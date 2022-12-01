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
    // all the data should exists
    // check if user already existes
    // encrypt the password
    // save the user in DB
    // generate a token for user and send it
    
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
