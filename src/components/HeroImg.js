import React from "react";
import backImg from '../images/person Imgae.png'
import blob from '../images/Center Background.png'

const HeroImg = ({lightmode}) => {
  return (
    <div className={`hero ${lightmode}`}>
      <img className="hero-img" alt="person" src={backImg}></img>
      <img className="blob" alt="blog" src={blob}></img>
    </div>
  );
};

export default HeroImg;
