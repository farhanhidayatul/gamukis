import React, { useState, useEffect } from 'react';

export default function Progressbar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (filled <= 100 && isRunning) {
      setTimeout(() => setFilled(prev => prev + 2), 100);
    } else {
      setIsLoadingFinished(true);
      setTimeout(() => setShowButton(true), 1000);
    }
  }, [filled, isRunning]);

  const handleButtonClick = () => {
    setIsRunning(true);
    setFilled(0);
    setIsLoadingFinished(false);
    setShowButton(false);
  };

  const getGradient = () => {
    if (filled >= 0 && filled <= 25) {
      return `linear-gradient(90deg, #FCE63E ${filled}%, #D4D55C ${filled}%)`;
    } else if (filled > 25 && filled <= 50) {
      return `linear-gradient(90deg, #FCE63E 25%, #D4D55C 25%, #A6C17F 50%, #A6C17 ${filled}%, #9FC084 50%, #9FC084 ${filled}%)`;
    } else if (filled > 50 && filled <= 75) {
      return `linear-gradient(90deg, #FCE63E 25%, #D4D55C 25%, #A6C17F 50%, #9FC084 50%, #96BF8B 75%, #96BF8B ${filled}%)`;
    } else if (filled > 75 && filled <= 100) {
      return `linear-gradient(90deg, #FCE63E 25%, #D4D55C 25%, #A6C17F 50%, #9FC084 50%, #96BF8B 75%, #6CB7AB 100%, #6CB7AB ${filled}%)`;
    }
  };

  return (
    <div>
      {!isLoadingFinished ? (
        <div className="progressbar">
          <div
            style={{
              width: `${filled}%`,
              background: getGradient()
            }}
          ></div>
          <span className="progressPercent">{filled}%</span>
          <span className="loading-text" style={{ padding: '5px' }}>Loading</span>
        </div>
      ) : (
        showButton && (
          <button className="btn" onClick={handleButtonClick}>
            Start Again
          </button>
        )
      )}
    </div>
  );
}

