import React from "react";
import Navbar from "../component/Navbar"
import Banner from "../component/component_about/banner"
import ShortcardLogo from "../component/component_about/shortcard_logo";

const About = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Banner />
        <ShortcardLogo />
      </div>

    </div>
  );
}

export default About;