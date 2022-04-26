import React from "react";
import "./Footer.css";
import Wave from "../../Images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>restaurant@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Twitter color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;