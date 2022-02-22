import React from "react";
import email from "../images/Icon.png";
import linkedin from "../images/Vector.png";

const Buttons = () => {
  return (
    <div className="buttons">
      <button className="btn">
        <img src={email} alt="email icon"></img>Email
      </button>
      <button className="btn blue">
        <img src={linkedin} alt="linkedin icon"></img>LinkedIn
      </button>
    </div>
  );
};

export default Buttons;
