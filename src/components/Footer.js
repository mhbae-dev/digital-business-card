import React from "react";
import twitter from "../images/Twitter Icon.png";
import facebook from "../images/Facebook Icon.png";
import instagram from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";

const Footer = ({ lightmode }) => {
  return (
    <div className={`footer ${lightmode}`}>
      <div className="icon-container">
        <img src={twitter} alt="twitter icon"></img>
        <img src={facebook} alt="facebook icon"></img>
        <img src={instagram} alt="instagram icon"></img>
        <img src={github} alt="github icon"></img>
      </div>
    </div>
  );
};

export default Footer;
