import React from "react";

const Toggle = ({ onClick }) => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onClick={onClick}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;
