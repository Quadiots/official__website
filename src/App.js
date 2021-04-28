import "./App.css";
import React from "react";
import logo from "./images/Quadiots__logo.jpeg";
import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div>
      <div className="app">
        <Tilt scale={1.15} className="product">
          <img src={logo} alt="" />
        </Tilt>
        <a className="twitter__style" href="https://twitter.com/quadiots">
          {" "}
          Follow Us on Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
