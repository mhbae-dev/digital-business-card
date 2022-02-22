import React from "react";

const Heading = ({ lightmode }) => {
  return (
    <div className={`heading ${lightmode}`}>
      <h1 className="heading-name">John Doe</h1>
      <h2 className="heading-title">Software Developer</h2>
      <p className="heading-email">johndoe@website.com</p>
    </div>
  );
};

export default Heading;
