const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");
const { addAUser } = require("./utils/userService");
require("dotenv").config();

const app = express();
const pass = process.env.MONGOPASS;
const db = process.env.DATABASE;
const connect_string = `mongodb+srv://me:${pass}@cluster0.idmwy.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;
console.log(connect_string);

app.use(express.json());
app.use(cors());

mongoose.connect(connect_string);

app.listen(3001, () => {
  console.log("Server started");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await addAUser(newUser.name, newUser.age, newUser.username);
    await newUser.save();
    res.status(200).json();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred creating user" });
  }
});
