const { Room, validateRoom } = require("../Model/room.model");

// ✅ Create Room
exports.createRoom = async (req, res) => {
  const { error } = validateRoom(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json({ message: "Room created successfully", room });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 📝 Update Room
exports.updateRoom = async (req, res) => {
  const { id } = req.params;
  const { error } = validateRoom(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const room = await Room.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!room) return res.status(404).json({ error: "Room not found" });

    res.json({ message: "Room updated successfully", room });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 🗑️ Delete Room
exports.deleteRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByIdAndDelete(id);
    if (!room) return res.status(404).json({ error: "Room not found" });

    res.json({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 📜 Get All Rooms
exports.getAllRooms = async (req, res) => {
  try {
    const room = await Room.find().sort({ createdAt: -1 });
    res.json(room);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
