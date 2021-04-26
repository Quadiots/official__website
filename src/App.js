import "./App.css";
import logo from "./images/Quadiots__logo.jpeg";
import Tilt from "react-vanilla-tilt";

function App() {
  return (
    <div className="app">
      <Tilt className="product">
        <img src={logo} alt="" />
      </Tilt>
    </div>
  );
}

export default App;
