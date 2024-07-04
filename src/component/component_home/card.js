import React from 'react';
import '../component_home/category_materi.css';

const Card = ({ title, icon, rating, reviews, description, onMainkan }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <div className="rating-review">
          <div className="rating">
            <img src={require('../../images/Rating icong.svg').default} alt='icon' /> {rating}
          </div>
          <div className="review">
            <img src={require('../../images/Icon Person.svg').default} alt='icon' /> {reviews}
          </div>
        </div>
        <p>{description}</p>
        <button className="play-button" onClick={onMainkan}>
          Mainkan
        </button>
      </div>
      <div className="icon-container">
        {icon}
      </div>
    </div>
  );
};

export default Card;


