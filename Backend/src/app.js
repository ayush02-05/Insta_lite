const express = require("express");
const routes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

const app = express(); //server create ho gya hai

app.use(express.json());
app.use(cookieParser());
app.use("/auth", routes);

module.exports = app;
