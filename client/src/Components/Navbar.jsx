import { UserContext } from "@/Context/UserContext";
import LoginModal from "@/Modals/LoginModal";
import RegisterModal from "@/Modals/RegisterModal";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );

      setUser(null); // clear user in context
      toast.success("Logged out successfully");
      navigate("/"); // redirect to home or login page
      setOpenProfile(false);
    } catch (error) {
      toast.error(error.response?.data?.error || "Logout failed");
    }
  };

  function openLogin() {
    setLoginModal(true);
    setRegisterModal(false);
  }

  function openRegister() {
    setLoginModal(false);
    setRegisterModal(true);
  }

  return (
    <nav className="fixed top-5 left-0 w-full z-50 text-white">
      <div
        className="w-full md:w-8/12 mx-auto px-6 py-4 bg-black/40 backdrop-blur-md 
      flex justify-between items-center rounded-4xl"
      >
        {/* Logo */}
        <Link
          to={"/"}
          className="text-2xl font-bold tracking-wide cursor-pointer"
        >
          Algo
          <span className="bg-neon-gradient bg-clip-text text-transparent font-extrabold">
            Arena
          </span>
        </Link>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <div
            className="flex items-center gap-2 hover:bg-neon-gradient hover:bg-clip-text 
          hover:text-transparent"
          >
            Problems
          </div>
          <div
            className="flex items-center gap-2 hover:bg-neon-gradient hover:bg-clip-text 
          hover:text-transparent"
          >
            Rules
          </div>
          <div
            className="flex items-center gap-2 hover:bg-neon-gradient hover:bg-clip-text 
          hover:text-transparent"
          >
            Dashboard
          </div>
          {user ? (
            <div className="relative">
              {/* Dropdown Trigger */}
              <div
                className="bg-neon-gradient text-white px-4 py-2 rounded-4xl hover:opacity-80 cursor-pointer flex items-center gap-2"
                onClick={() => setOpenProfile(!openProfile)}
              >
                <span>{user.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openProfile ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {openProfile && (
                <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] rounded-xl shadow-lg z-50">
                  <button
                    // onClick={onProfile}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded-t-xl"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded-b-xl text-red-400"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div
              onClick={openLogin}
              className="bg-neon-gradient text-white px-4 py-2 rounded-4xl hover:opacity-80 
          cursor-pointer"
            >
              Login
            </div>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <div className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
            <div className="hover:text-blue-500 transition cursor-pointer">
              Home
            </div>
            <div className="hover:text-blue-500 transition cursor-pointer">
              Dashboard
            </div>
            <div
              onClick={openLogin}
              className="hover:text-blue-500 transition cursor-pointer"
            >
              Login
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {loginModal && (
        <LoginModal
          onClose={() => setLoginModal(false)}
          setLoginModal={setLoginModal}
          openRegister={openRegister}
        />
      )}
      {registerModal && (
        <RegisterModal
          onClose={() => setRegisterModal(false)}
          openLogin={openLogin}
        />
      )}
    </nav>
  );
};

export default Navbar;
