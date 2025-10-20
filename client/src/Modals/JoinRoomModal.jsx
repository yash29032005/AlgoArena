import React from "react";

const JoinRoomModal = ({ onClose, battle }) => {
  // Extract current and max players (e.g., "3/4 players" → 3 and 4)
  const [currentPlayers, maxPlayers] = battle.players
    .split(" ")[0]
    .split("/")
    .map((n) => parseInt(n));

  // Create an array to represent player slots
  const players = Array.from(
    { length: maxPlayers },
    (_, i) => i < currentPlayers
  );

  const handleJoin = () => {
    console.log(`Joining room: ${battle.title}`);
    // TODO: connect to backend or socket here
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      {/* Modal Box */}
      <div className="bg-[#141414] border border-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>

        {/* Room Info */}
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Joining: {battle.title}
        </h2>

        <div className="flex justify-between items-center mb-4">
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
          <div className="text-gray-400 text-sm flex items-center gap-3">
            <span>👥 {battle.players}</span>
            <span>⏱ {battle.time}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Waiting for all players to join before the battle starts...
        </p>

        {/* Player Slots */}
        <div className="grid grid-cols-4 justify-items-center gap-3">
          {players.map((isJoined, idx) => (
            <div
              key={idx}
              className={`h-[50px] w-[50px] border rounded-md flex items-center justify-center font-bold text-xl ${
                isJoined
                  ? "border-green-600 text-green-400"
                  : "border-gray-700 text-gray-500"
              }`}
            >
              {isJoined ? "👤" : "?"}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleJoin}
            className="px-4 py-2 rounded-md bg-neon-gradient text-white hover:opacity-90 transition"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomModal;
