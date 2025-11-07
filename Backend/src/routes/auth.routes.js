const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const routes = express.Router();

// post - register
routes.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isuser = await UserModel.findOne({
    username,
  });

  if (isuser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const user = await UserModel.create({
    username: username,
    password: password,
  });

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

  console.log(token);
  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully ",
  });
});
// get  - login
// post - authentication

module.exports = routes;
