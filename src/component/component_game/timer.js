import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './timer.css';

const Timer = ({ initialMinutes = 0, initialSeconds = 0, targetUrl }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isTimeAlmostUp, setIsTimeAlmostUp] = useState(false);

  useEffect(() => {
    let totalInitialSeconds = initialMinutes * 60 + initialSeconds;
    let myInterval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          return 59;
        } else {
          clearInterval(myInterval);
          window.location.href = targetUrl; // Redirect to the target URL
          return 0;
        }
      });

      let totalRemainingSeconds = (minutes * 60) + seconds - 1;
      if (totalRemainingSeconds <= totalInitialSeconds / 2 && totalRemainingSeconds >= 0) {
        setIsTimeAlmostUp(true);
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [initialMinutes, initialSeconds, minutes, seconds, targetUrl]);

  return (
    <div className={`timer ${isTimeAlmostUp ? 'almost-up' : ''}`}>
      <div className="time-block">
        {minutes < 10 ? `0${minutes}` : minutes}
      </div>
      <div className="colon">:</div>
      <div className="time-block">
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

Timer.propTypes = {
  initialMinutes: PropTypes.number.isRequired,
  initialSeconds: PropTypes.number.isRequired,
  targetUrl: PropTypes.string.isRequired,
};

export default Timer;



