import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";
import BattlePage from "./Components/BattlePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </>
  );
};

export default App;
