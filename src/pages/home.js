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
      <div className="profile">
        <div className="bg-2">
          <div className="character"></div>
          <button className="btn-edit-character"><b>Edit Your Character</b></button>
        </div>
          <div className="stats"> 
            <p><b>Your name character</b></p>           
            <p><b>\nYour name</b></p>
            <p><b>\nlevel\n</b></p> 
            <div className="level"> </div> 
            <p><b>\nYour skill</b></p> 
            <div className="skill"></div>
            <div className="experience">
              <b>\nYour experience</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;