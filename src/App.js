import "./App.css";
import React from "react";
import TiltEffect from "./components/TiltEffect";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import Portfolio from "./components/Cards/Portfolio";
// import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Cursor />
      <TiltEffect />
      {/* <ReactPlayer width="80%" height="500px" style={{marginTop:"20px", marginLeft:"175px"}} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
      <Portfolio />
    </div>
  );
}

export default App;
