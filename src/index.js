import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cursor from "./components/Cursor/Cursor";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cursor />
  </React.StrictMode>,
  document.getElementById("root")
);
