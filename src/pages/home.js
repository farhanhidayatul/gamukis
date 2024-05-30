import React from "react";
import Navbar from "../component/Navbar"
import Banner from "../component/banner"
import KategoriMateri from '../component/category_materi';
import "../pages/home.css" 

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-home">
        <Banner />
        <KategoriMateri />
      </div>
      
    </div>
  );
}

export default Home;