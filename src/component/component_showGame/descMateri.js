import React from "react";
import "./descMateri.css";

const descMateri = () => {
    return (
      <div className="container">
            <div className='categoryMateri'>
                <img src={require("../../images/logo_saintek.svg").default} alt="logo" draggable="false"/>
                <h3>SAINTEK</h3>
                <p>(Sains & Teknologi)</p>
            </div>
            <div className="isiContent">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
            </div>
            <div className="checklistContainer">
                <div className="checklist">
                    <img src={require("../../images/Checkbox.svg").default} alt="icon" draggable="false"/>
                    <p>Kritis</p>
                </div>
                <div className="checklist">
                    <img src={require("../../images/Checkbox.svg").default} alt="icon" draggable="false"/>
                    <p>Kolaborasi</p>
                </div>
            </div>
            <div className="checklistContainer">
                <div className="checklist">
                    <img src={require("../../images/Checkbox.svg").default} alt="icon" draggable="false"/>
                    <p>Kreatif</p>
                </div>
                <div className="checklist">
                    <img src={require("../../images/Checkbox.svg").default} alt="icon" draggable="false"/>
                    <p>Teknologi dan informasi</p>
                </div>
            </div>
            <button className="btnShare">
            <img src={require("../../images/icon_share.svg").default} alt="icon" draggable="false"/>
                <p>Share</p>
            </button>
        </div>
    );
  };
  
  export default descMateri;

