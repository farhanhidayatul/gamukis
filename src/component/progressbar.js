import React, { useState, useEffect } from 'react';

export default function Progressbar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // Ubah menjadi true agar loading berjalan otomatis
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled(prev => prev + 2), 50);
    } else {
      setIsLoadingFinished(true);
    }
  }, [filled, isRunning]);

  const handleButtonClick = () => {
    setIsRunning(true);
    setFilled(0);
    setIsLoadingFinished(false);
  };

  return (
    <div>
      {!isLoadingFinished ? (
        <div className="progressbar">
          <div
            style={{
              height: "100%",
              width: `${filled}%`,
              backgroundColor: "#a66cff",
              transition: "width 0.5s"
            }}
          ></div>
          <span className="progressPercent">{filled}%</span>
        </div>
      ) : (
        <button className="btn" onClick={handleButtonClick}>
          Start Again
        </button>
      )}
    </div>
  );
}

