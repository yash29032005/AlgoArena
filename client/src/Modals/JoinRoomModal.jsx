import React from "react";

const JoinRoomModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      {/* Modal Box */}
      <div className="bg-[#141414] border border-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-lg font-semibold text-white mb-4">
          Let everyone be ready
        </h2>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-neon-gradient text-white hover:opacity-90 transition">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomModal;
