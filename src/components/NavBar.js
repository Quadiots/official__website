import React from "react";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img className="nav__logoImage" src="https://firebasestorage.googleapis.com/v0/b/clone-5c1a3.appspot.com/o/QuadiotsUpdatedRemovedBg.png?alt=media&token=8ba4bea3-1d95-4816-b84b-5f916f71718c" alt="QuadiotsLogo" />
        <p>QUADIOTS</p>
      </div>
      <div className="nav__contents">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>BLOGS</p>
        <p>CONTACT US</p>
        <img className="nav__avatar" src="https://i.pinimg.com/originals/56/b8/43/56b843db664163b186b726545c8ea55d.jpg" alt="Avatar" />
      </div>
    </div>
  );
};

export default NavBar;
