import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './gamePage.css';
import Leaderboard from '../component/component_game/leaderboard';
import Skills from '../component/component_game/skill';
import Flashcards from '../component/component_game/flashCard';
import CardMapel from '../component/component_game/cardSS';

const GamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCard } = location.state || {};

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleStart = () => {
    navigate(`/InGame`); // Navigate to the inGame page
  };

  const getIcon = (icon) => {
    switch (icon) {
      case "logo_saintek":
        return <img className="icon icon-saintek" src={require("../images/logo_saintek.svg").default} alt="Saintek icon" draggable="false" />;
      case "logo_soshum":
        return <img className="icon icon-soshum" src={require("../images/logo_soshum.svg").default} alt="Soshum icon" draggable="false" />;
      default:
        return null;
    }
  };

  const getTitle = (title) => {
    switch (title) {
      case "Biologi":
      case "Kimia":
      case "Fisika":
      case "Matematika":
      case "Informatika":
        return "SAINTEK";
      case "Sejarah":
      case "Geografi":
      case "Ekonomi":
      case "Sosiologi":
        return "SOSHUM";
      default:
        return title;
    }
  };

  const cardData = selectedCard || {
    icon: '',
    title: '',
    subtitle: '',
    description: '',
    features: [],
  };

  return (
    <div className="game-page">
      <button className="back-button" onClick={handleBack}>
        <img className="icon-back" src={require("../images/back-icon.svg").default} alt="Biologi icon" draggable="false" />
        <p>Back</p>
      </button>
      <div className="game-page-content">
        <div className="sidebar">
          <CardMapel 
            logo={getIcon(cardData.logo)}
            title={getTitle(cardData.title)}
            subtitle={cardData.subtitle}
            description={cardData.description}
            features={cardData.features}
          />
          <Leaderboard page="gamePage"/>
        </div>
        <div className="main-content">
          <div className="actions">
            <button className="action-button" onClick={handleStart}>Mulai</button>
            <button className="action-button">Flashcards</button>
          </div>
          <Skills />
        </div>
        <div className="details">
          <Flashcards title={cardData.title} />
        </div>
      </div>
    </div>
  );
};

export default GamePage;


