import { UserContext } from "@/Context/UserContext";
import LoginModal from "@/Modals/LoginModal";
import RegisterModal from "@/Modals/RegisterModal";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { user } = useContext(UserContext);

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
            <div
              className="bg-neon-gradient text-white px-4 py-2 rounded-4xl hover:opacity-80 
          cursor-pointer"
            >
              {user.name}
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
