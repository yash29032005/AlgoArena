import Lightning from "@/Utils/Lightning";
import React from "react";
import { CiTrophy } from "react-icons/ci";
import { LuSwords } from "react-icons/lu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-black text-white flex items-center justify-center">
        {/* Lightning background */}
        <Lightning
          hue={230}
          xOffset={-0.7}
          speed={1.2}
          intensity={2.5}
          size={3}
        />

        {/* Content */}
        <div
          className="absolute z-10 flex flex-col items-center text-center px-6 md:px-12 lg:px-24 
        max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Let the
            <span className="bg-neon-gradient bg-clip-text text-transparent font-extrabold">
              {" "}
              Battle{" "}
            </span>
            Begin!
          </h1>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            Battle the best developers in real-time DSA challenges. Climb the
            leaderboard and prove your algorithmic prowess.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={"/battle"}
              className="px-6 py-3 bg-neon-gradient text-white text-lg font-semibold rounded-xl 
            hover:opacity-80 flex gap-2 items-center"
            >
              <LuSwords className="text-2xl" />
              Enter Battle Arena
            </Link>

            <button
              className="px-6 py-3 border border-gray-400 text-white text-lg font-semibold rounded-xl 
            hover:bg-white/10 flex gap-2 items-center"
            >
              <CiTrophy className="text-2xl" />
              Leaderboards
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
