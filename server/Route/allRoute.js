const express = require("express");
const Router = express.Router();
const roomRoutes = require("./room.routes");
const authRoutes = require("./auth.routes");

// Auth Routes
Router.use("/auth", authRoutes);

// Room Routes
Router.use("/rooms", roomRoutes);

module.exports = Router;
