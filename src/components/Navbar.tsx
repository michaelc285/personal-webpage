import React from "react";
import { NavLink } from "react-router-dom";
import { ABOUT_PATH, PROFOLIO_PATH, RESUME_PATH } from "../path";

import jp2 from "../images/japan/jp2.jpg";

const Navbar = () => {
  const NavContent = (
    <nav className=" p-2 font-serif font-semibold text-white text-2xl flex flex-col sm:flex-row items-end sm:justify-end  uppercase flex-wrap ">
      <div className="p-4">
        <NavLink exact activeClassName="text-red-300" to={PROFOLIO_PATH}>
          Profolio
        </NavLink>
      </div>
      <div className="p-4">
        <NavLink exact activeClassName="text-red-300" to={ABOUT_PATH}>
          About
        </NavLink>
      </div>
      <div className="p-4">
        <NavLink exact activeClassName="text-red-300" to={RESUME_PATH}>
          Résumé
        </NavLink>
      </div>
    </nav>
  );

  return (
    <header
      className="w-full bg-top h-screen bg-auto bg-no-repeat relative"
      style={{ backgroundImage: `url(${jp2})` }}
    >
      {NavContent}

      <div className=" mt-40 sm:mt-48 ml-1 sm:ml-16 md:ml-36  text-white text-6xl font-extrabold absolute">
        Michael's
      </div>
    </header>
  );
};

export default Navbar;
