import React from "react";

const CreateRoomModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      {/* Modal Box */}
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

        {/* Form Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Room name"
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2
             focus:ring-purple-600"
          />
          <select
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2
           focus:ring-purple-600"
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <input
            type="number"
            placeholder="Max Players"
            min={2}
            max={4}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2
             focus:ring-purple-600"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-neon-gradient text-white hover:opacity-90 transition">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomModal;
