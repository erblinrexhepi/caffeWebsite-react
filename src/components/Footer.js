import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <FacebookIcon />  <EmailIcon /> <InstagramIcon/>
      </div>
      <p> &copy; 2024 dailycoffee.com</p>
    </div>
  );
}

export default Footer;