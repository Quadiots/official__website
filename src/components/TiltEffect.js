import React from "react";
import logo from "../images/Quadiots__logo.jpeg";
import Tilt from "react-parallax-tilt";
import "../css/TiltEffect.css";

function TiltEffect() {
  return (
    <div className="main">
      <Tilt scale={1.15} className="product">
        <img src={logo} alt="" />
      </Tilt>
      <a className="twitter__style" href="https://twitter.com/quadiots">
        {" "}
        Follow Us on Twitter
      </a>
    </div>
  );
}

export default TiltEffect;
