const express = require("express");
const router = express.Router();
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getAllRooms,
} = require("../Controller/room.controller");
const { protect } = require("../Middleware/protectauth");

// POST - Create Room
router.post("/", protect, createRoom);

// PUT - Update Room
router.put("/:id", protect, updateRoom);

// DELETE - Delete Room
router.delete("/:id", protect, deleteRoom);

// GET - Get All Rooms
router.get("/", protect, getAllRooms);

module.exports = router;
