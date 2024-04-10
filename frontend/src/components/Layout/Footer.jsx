import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin,FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Pranjal Sharma.</div>
      <div>
        <Link to={"https://github.com/pranjal6011"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/pranjal6011/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/flying__leap"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
