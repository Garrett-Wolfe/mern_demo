const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const pass = process.env.MONGOPASS;
const db = process.env.DATABASE;
const connect_string = `mongodb+srv://me:${pass}@cluster0.idmwy.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(connect_string);

app.listen(3001, () => {
  console.log("Server started");
});
