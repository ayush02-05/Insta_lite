const express = require("express");
const UserModel = require("../models/user.model");
const {
  registercontroller,
  logincontroller,
} = require("../Controller/user.conttroller");

const routes = express.Router();

// post - register
routes.post("/register", registercontroller);
routes.post("/login", logincontroller);

// get  - login
// post - authentication

module.exports = routes;
