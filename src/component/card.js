import React from 'react';
import './category_materi.css';
import ReviewIcon from '../images/Icon Person.svg';
import RatingIcon from '../images/Rating icong.svg';

const Card = ({ title, icon, rating, reviews, description, onMainkan }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <div className="rating-review">
          <div className="rating">
            <img src={RatingIcon} alt='icon'/> {rating}
          </div>
          <div className="review">
            <img src={ReviewIcon} alt='icon' /> {reviews}
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


