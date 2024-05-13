import React, { useState, useEffect } from "react";
import Loading from "./loading.js";
import { Link } from "react-router-dom";

export default function Progressbar() {
  const [filled, setFilled] = useState(0);
  const [isRunning] = useState(true);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (filled <= 100 && isRunning) {
      setTimeout(() => setFilled((prev) => prev + 1), 100);
    } else {
      setIsLoadingFinished(true);
      setTimeout(() => setShowButton(true), 1000);
    }
  }, [filled, isRunning]);

  const getGradient = () => {
    if (filled >= 0 && filled <= 25) {
      return `linear-gradient(100deg, #FCE63E 25%, #FCE63E ${filled}%, #D4D55C ${filled}%)`;
    } else if (filled > 25 && filled <= 50) {
      return `linear-gradient(100deg, #FCE63E 25%, #D4D55C 25%, #A6C17F 50%, #A6C17F ${filled}%, #9FC084 50%, #9FC084 ${filled}%)`;
    } else if (filled > 50 && filled <= 75) {
      return `linear-gradient(100deg, #FCE63E 25%, #D4D55C 25%, #A6C17F 50%, #9FC084 50%, #96BF8B 75%, #96BF8B 75%, #96BF8B ${filled}%)`;
    } else if (filled > 75 && filled <= 100) {
      return `linear-gradient(100deg, #FCE63E 25%, #D4D55C 25%, #A6C17F 50%, #9FC084 50%, #96BF8B 75%, #96BF8B 75%, #6CB7AB 100%, #6CB7AB ${filled}%)`;
    } else if (filled > 75 && filled <= 100) {
      return `linear-gradient(100deg, #FCE63E 25%, #D4D55C 25%, #A6C17F 50%, #9FC084 50%, #96BF8B 75%, #96BF8B 75%, #6CB7AB 100%, #6CB7AB ${filled}%)`;
    }
  };

  return (
    <div>
      {!isLoadingFinished ? (
        <div className="box-progress">
          <div className="progressbar-bg">
            <div
              className="progressbar"
              style={{
                width: `${filled}%`,
                background: getGradient(),
              }}
            ></div>
          </div>

          <Loading />
        </div>
      ) : (
        showButton && (
          <Link to="/home">
            <button className="btn">
              <b>Lanjutkan</b>
            </button>
          </Link>
        )
      )}
      <div>
        <p className="textvalue">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual
          <p>&thinsp;</p>
          <p className="text-different">
            <u>Pusat bantuan!</u>
          </p>
        </p>
      </div>
    </div>
  );
}
