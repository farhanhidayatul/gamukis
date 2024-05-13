import React from "react";
import Navbar from "../component/Navbar"
import "../pages/home.css" 

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-home">
        <div className="bg-1">
          <button className="btn-play"><b>Play Now</b></button>
        </div>
      </div>
    </div>
  );
}

export default Home;