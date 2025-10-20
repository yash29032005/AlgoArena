// ✅ LoginModal.jsx
import { UserContext } from "@/Context/UserContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const LoginModal = ({ onClose, openRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      setEmail("");
      setPassword("");
      setUser(res.data.user);
      toast.success(res.data.message || "Login successful");
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.error || "Unexpected error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      <div className="bg-[#141414] border border-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-2xl font-semibold text-white mb-4">Login</h2>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mt-4 text-sm text-gray-400">
          If not an user?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={openRegister}
          >
            Register
          </span>
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
