const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registercontroller(req, res) {
  const { username, password } = req.body;

  const isuserexist = await UserModel.findOne({
    username,
  });

  if (isuserexist) {
    return res.status(401).json({
      message: "user already exists !",
    });
  }

  const user = await UserModel.create({
    username: username,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

  res.cookie("registerToken", token);

  res.status(201).json({
    message: "user created successfully ",
    user,
  });
}

async function logincontroller(req, res) {
  const { username, password } = req.body;

  const isuserexist = await UserModel.findOne({
    username,
  });

  if (!isuserexist) {
    return res.status(401).json({
      message: "Invalid user...",
    });
  }

  const passwordcheck = await bcrypt.compare(password, isuserexist.password);

  if (!passwordcheck) {
    return res.status(400).json({
      message: "Invalid Credential .. ",
    });
  }

  const token = jwt.sign(
    {
      id: isuserexist._id,
    },
    process.env.SECRET_KEY
  );

  res.cookie("loginToken", token);

  res.status(201).json({
    message: "User Logged in successfully",
  });
}

module.exports = {
  registercontroller,
  logincontroller,
};
