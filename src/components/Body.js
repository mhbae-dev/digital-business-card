import React from "react";

const About = ({lightmode}) => {
  return (
    <div className="about">
      <h3 className={`about-title ${lightmode}`}>About</h3>
      <p className={`about-description ${lightmode}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h3 className={`about-title ${lightmode}`}>Interests</h3>
      <p className={`about-description ${lightmode}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default About;
