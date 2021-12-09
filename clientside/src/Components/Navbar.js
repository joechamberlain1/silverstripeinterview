import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-around items-center h-24 bg-gray-900 shadow-sm font-bolder text-white z-50">
      <div className="text-3xl pl-10">
        <NavLink
          to="/"
          className="p-4 hover:text-green-900"
          activeclassname="active"
        >
          Home
        </NavLink>
      </div>

      <div className="flex flex-end text-3xl pr-10">
        <NavLink
          to="/Submit"
          className="p-4 hover:text-green-900 "
          activeclassname="active"
        >
          Submit Yourself
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
