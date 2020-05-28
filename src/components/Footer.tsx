import React from "react";
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  EMAIL_ADDRESS,
  ABOUT_PATH,
  PROFOLIO_PATH,
  RESUME_PATH,
} from "../path";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      className="text-gray-700 body-font p-5 bg-gray-800 font-sans select-none"
      style={{ borderTop: "1px dotted gray" }}
    >
      <nav className=" p-2  font-light text-white text-lg flex flex-col items-center sm:flex-row sm:justify-center uppercase flex-wrap ">
        <div className="py-1 px-4">
          <NavLink exact to={PROFOLIO_PATH}>
            Profolio
          </NavLink>
        </div>
        <div className="py-1 px-4">
          <NavLink exact to={ABOUT_PATH}>
            About
          </NavLink>
        </div>
        <div className="py-1 px-4">
          <NavLink exact to={RESUME_PATH}>
            Résumé
          </NavLink>
        </div>
      </nav>

      <div className="w-32 mx-auto mb-3">
        {/* LinkedIN */}
        <div className="flex justify-around ">
          <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          {/* Github */}
          <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
            <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>
          {/* Email */}
          <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlineIcon />
            </a>
          </div>
        </div>
      </div>

      <span className="flex justify-center text-center">
        © 2020 Michael Cheng. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
