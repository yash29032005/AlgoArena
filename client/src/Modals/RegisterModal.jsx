import { UserContext } from "@/Context/UserContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const RegisterModal = ({ onClose, openLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      setName("");
      setEmail("");
      setPassword("");
      setUser(res.data.user);
      toast.success(res.data.message);
      openLogin();
    } catch (error) {
      toast.error(error.response?.data?.error || "Unexpected error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      {/* Modal Box */}
      <div className="bg-[#141414] border border-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-2xl font-semibold text-white mb-4">Register</h2>
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
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="mt-4 text-sm text-gray-400">
          Already a user?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={openLogin}
          >
            Login
          </span>
        </div>

        {/* Action Buttons */}
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
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
