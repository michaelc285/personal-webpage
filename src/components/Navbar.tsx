import React from "react";
import { NavLink } from "react-router-dom";
import { ABOUT_PATH, HOME_PATH, PROFOLIO_PATH, RESUME_PATH } from "../path";

const Navbar = () => {
  return (
    <header
      className="flex justify-center uppercase p-2"
      style={{ borderBottom: "1px dotted gray" }}
    >
      <div className="p-4">
        <NavLink to={HOME_PATH}>Home</NavLink>
      </div>
      <div className="p-4">
        <NavLink to={PROFOLIO_PATH}>Profolio</NavLink>
      </div>
      <div className="p-4">
        <NavLink to={ABOUT_PATH}>About</NavLink>
      </div>
      <div className="p-4">
        <NavLink to={RESUME_PATH}>Resume</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
