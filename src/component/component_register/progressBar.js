import React from "react";
import "./progressBar.css";

const ProgressBar = ({ step }) => {
  const steps = ["Pendaftaran", "Data diri", "Verifikasi"];

  return (
    <div className="progress-container">
      <div className="progress-line">
        <div className={`progress-fill ${step >= 2 ? "half" : ""} ${step >= 3 ? "full" : ""}`}></div>
      </div>
      {steps.map((label, index) => (
        <div key={index} className="progress-step">
          <div className={`circle ${step >= index + 1 ? "active" : ""}`}></div>
          <span className={step === index + 1 ? "active-label" : ""}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;


