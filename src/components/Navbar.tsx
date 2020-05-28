import React from "react";
import { NavLink } from "react-router-dom";
import { ABOUT_PATH, HOME_PATH, PROFOLIO_PATH, RESUME_PATH } from "../path";
import forest from "../images/forest.jpg";

const Navbar = () => {
  const NavContent = (
    <nav className="flex justify-center uppercase p-2">
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
    </nav>
  );

  return (
    <header
      className="w-full bg-top"
      style={{
        backgroundImage: `url(${forest})`,
        height: "30rem",
      }}
    >
      {NavContent}
    </header>
  );
};

export default Navbar;
