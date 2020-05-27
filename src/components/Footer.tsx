import React from "react";
import { GITHUB_LINK, LINKEDIN_LINK, EMAIL_ADDRESS } from "../path";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Footer = () => {
  return (
    <footer
      className="text-gray-700 body-font p-5"
      style={{ borderTop: "1px dotted gray" }}
    >
      <div className="w-32 mx-auto">
        <div className="flex justify-around ">
          <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlineIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
