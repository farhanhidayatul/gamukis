import React from "react";
import logo from "./images/Gamukis.png";
import Progressbar from "./component/progressbar";
import './style.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <Progressbar/>
    </div>
  );
}

export default App;
