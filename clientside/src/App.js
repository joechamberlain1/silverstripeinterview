import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Submit from "./Pages/Submit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
