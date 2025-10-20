import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { BattleContext } from "@/Context/RoomContext";

const CreateRoomModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [players, setPlayers] = useState("");
  const [time, setTime] = useState("");
  const { setRooms } = useContext(BattleContext);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setLevel("");
    setPlayers("");
    setTime("");
  };

  const handleSubmit = async () => {
    if (!title || !description || !level || !players || !time) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/rooms`,
        {
          title,
          description,
          level,
          players: Number(players),
          time: Number(time),
        },
        { withCredentials: true }
      );

      toast.success("Room created successfully!");
      setRooms((prev) => [...prev, res.data.room]); // 👈 Append new room
      resetForm();
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to create room");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      <div className="bg-[#141414] border border-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Create Battle Room
        </h2>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Room name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <input
            type="number"
            placeholder="Max Players (2-4)"
            min={2}
            max={4}
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />

          <input
            type="number"
            placeholder="Time in minutes"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md bg-neon-gradient text-white hover:opacity-90 transition"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomModal;
