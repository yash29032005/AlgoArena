import CreateRoomModal from "@/Modals/CreateRoomModal";
import JoinRoomModal from "@/Modals/JoinRoomModal";
import React, { useState } from "react";
import { BiSearch, BiTrophy } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

const battles = [
  {
    title: "Beginner's Arena",
    level: "EASY",
    players: "3/4 players",
    time: "15 min",
  },
  {
    title: "Algorithm Warfare",
    level: "MEDIUM",
    players: "2/4 players",
    time: "30 min",
  },
  {
    title: "Elite Coders Only",
    level: "HARD",
    players: "1/2 players",
    time: "45 min",
  },
  {
    title: "Speed Coding",
    level: "EASY",
    players: "4/4 players",
    time: "10 min",
  },
];

const BattlePage = () => {
  const [openCreateRoomModal, setOpenCreateRoomModal] = useState(false);
  const [openJoinRoomModal, setOpenJoinRoomModal] = useState(false);
  const [selectedBattle, setSelectedBattle] = useState(null);

  const handleJoinClick = (battle) => {
    if (battle.players === "4/4 players") return;
    setSelectedBattle(battle);
    setOpenJoinRoomModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10 pt-[100px]">
      {/* Search Bar */}
      <div className="flex items-center justify-center w-full max-w-2xl gap-3 mb-10">
        <input
          type="text"
          placeholder="Enter the username..."
          className="flex-1 w-auto px-4 py-2 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="flex items-center gap-1 bg-neon-gradient px-2 py-2 rounded-md hover:opacity-90 transition">
          <BiSearch />
          <span className="hidden md:block">Search</span>
        </button>
        <button
          onClick={() => setOpenCreateRoomModal(true)}
          className="flex items-center gap-1 bg-gray-800 px-2 py-2 rounded-md hover:bg-gray-700 transition"
        >
          <FaPlus />
          <span className="hidden md:block">Create Room</span>
        </button>
      </div>

      {/* Battle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        {battles.map((battle, idx) => (
          <div
            key={idx}
            className="bg-[#141414] border border-gray-800 rounded-xl p-6 flex flex-col gap-3 hover:border-purple-600 transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{battle.title}</h2>
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  battle.level === "EASY"
                    ? "bg-green-500/20 text-green-400"
                    : battle.level === "MEDIUM"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {battle.level}
              </span>
            </div>

            <p className="text-gray-400 text-sm">
              Compete against the best coders in real-time
            </p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>👥 {battle.players}</div>
              <div>⏱ {battle.time}</div>
            </div>

            <button
              onClick={() => handleJoinClick(battle)}
              disabled={battle.players === "4/4 players"}
              className={`w-full py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white transition ${
                battle.players === "4/4 players"
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-90"
              }`}
            >
              {battle.players === "4/4 players" ? "Full" : "Join Room"}
            </button>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="w-full max-w-4xl bg-[#141414] border border-gray-800 rounded-xl p-6 mt-8">
        <div className="flex items-center gap-2 font-bold text-2xl">
          <BiTrophy />
          How It Works
        </div>
        <div className="mt-4 text-gray-400">
          <p>• Enter your username and join a battle room</p>
          <p>• Solve the coding problem faster than your opponents</p>
          <p>• Submit your solution before time runs out</p>
          <p>• The first correct solution wins the battle!</p>
        </div>
      </div>

      {/* Modals */}
      {openCreateRoomModal && (
        <CreateRoomModal onClose={() => setOpenCreateRoomModal(false)} />
      )}
      {openJoinRoomModal && selectedBattle && (
        <JoinRoomModal
          battle={selectedBattle}
          onClose={() => setOpenJoinRoomModal(false)}
        />
      )}
    </div>
  );
};

export default BattlePage;
