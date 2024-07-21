import React from 'react';
import './cardSS.css';
import { ReactComponent as YourSvgIcon } from '../../images/Checkbox.svg';

const CardMapel = ({ logo, title, subtitle, description, features = [] }) => {
  return (
    <div className="cardSS">
      <div className="header">
        {logo}
        <div className="title">
          <h1>{title}</h1>
          <p>({subtitle})</p>
        </div>
      </div>
      <p className="description">
        {description}
      </p>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className={`feature feature-${index + 1}`}>
            <YourSvgIcon className="feature-icon" />
            {feature}
          </div>
        ))}
      </div>
      <button className="share-button">Share</button>
    </div>
  );
};

export const CardSaintek = [
  {
    icon: (
      <img
        className="icon icon-saintek"
        src={require("../../images/logo_saintek.svg").default}
        alt="Saintek icon"
        draggable="false"
      />
    ),
    title: "SAINTEK",
    subtitle: "Sains & Teknologi",
    description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    features: ["Computational Thinking", "Algorithmic Problem Solving", "System Design", "Technology Integration"]
  }
];

export const CardSoshum = [
  {
    icon: (
      <img
        className="icon icon-soshum"
        src={require("../../images/logo_soshum.svg").default}
        alt="Soshum icon"
        draggable="false"
      />
    ),
    title: "SOSHUM",
    subtitle: "Sosial & Hukum",
    description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    features: ["Computational Thinking", "Algorithmic Problem Solving", "System Design", "Technology Integration"]
  }
];

export default CardMapel;








