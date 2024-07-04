import React, { useState } from 'react';
import '../component_about/shortcard_logo.css';

const ShortcardLogo = () => {
  const [activeButton, setActiveButton] = useState("AMIKOM");

  return (
    <div className="shortcard">
      <div className="flex-container-button">
        <button
          className={`buttonLogo ${activeButton === "AMIKOM" ? "active" : ""}`}
          onClick={() => setActiveButton("AMIKOM")}
        >
          <img
            src={require("../../images/logo-amikom.svg").default}
            alt="AMIKOM"
            draggable="false"
          />
        </button>
        <button
          className={`buttonLogo ${activeButton === "IEEE" ? "active" : ""}`}
          onClick={() => setActiveButton("IEEE")}
        >
          <img
            src={require("../../images/logo-IEEE.svg").default}
            alt="IEEE"
            draggable="false"
          />
        </button>
        <button
          className={`buttonLogo ${activeButton === "P2MW" ? "active" : ""}`}
          onClick={() => setActiveButton("P2MW")}
        >
          <img
            src={require("../../images/logo-P2MW.svg").default}
            alt="P2MW"
            draggable="false"
          />
        </button>
        <button
          className={`buttonLogo ${activeButton === "BITDSUL" ? "active" : ""}`}
          onClick={() => setActiveButton("BITDSUL")}
        >
          <img
            src={require("../../images/logo-BITDSUL.svg").default}
            alt="BITDSUL"
            draggable="false"
          />
        </button>
      </div>
    </div>
  );
};

export default ShortcardLogo;
