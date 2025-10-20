const express = require("express");
const Router = express.Router();
const authRoutes = require("./auth.routes");

Router.use("/auth", authRoutes);

module.exports = Router;
