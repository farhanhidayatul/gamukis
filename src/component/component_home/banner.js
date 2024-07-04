import React from 'react';
import Play from '../../images/play.png';
import '../component_home/banner.css';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className='background-interior'></div>
      <div className='banner-background'>
        <div className="promo-content">
          <div className="promo-text">
            <p><b>Gamukis Smart</b></p>
            <h3>Waktunya Mencoba <br/>Kemampuanmu</h3>
          </div>
          <div className="promo-button">
            <button>
              <span className='banner-button-text'><b>Mulai sekarang</b></span>
              <img src={Play} alt="Play icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="promo-images">
        <div className="promo-image-left"></div>
        <div className="promo-image-right"></div>
      </div>
    </div>
  );
};

export default PromoBanner;


