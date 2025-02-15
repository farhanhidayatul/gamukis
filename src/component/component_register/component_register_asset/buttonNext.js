import React from "react";
import "./buttonNext.css"; // Pastikan membuat file CSS untuk styling tombol

const ButtonNext = ({ onClick, text = "Lanjutkan" }) => {
  return (
    <button className="next-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonNext;