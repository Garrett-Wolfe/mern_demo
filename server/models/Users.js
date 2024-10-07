const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("people", UserSchema);

module.exports = UserModel;
