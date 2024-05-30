import React, { useRef, useState, useEffect } from 'react';
import './category_materi.css';
import Iconleft from '../images/icon_left.svg';
import Iconright from '../images/icon_right.svg';
import Card from '../component/card';

const IsiMateri = ({ cards }) => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 100);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition(); // Initial check
    if (scrollRef.current) {
      const handleScroll = () => checkScrollPosition();
      scrollRef.current.addEventListener('scroll', handleScroll);
      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  return (
    <div className="isi-materi">
      <div className="scroll-container">
        {showLeftButton && (
          <button className="scroll-button left" onClick={() => scroll('left')}>
            <img src={Iconleft} alt='icon' />
          </button>
        )}
        <div className="cards" ref={scrollRef}>
          {cards && cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              icon={card.icon}
              rating={card.rating}
              reviews={card.reviews}
              description={card.description}
            />
          ))}
        </div>
        {showRightButton && (
          <button className="scroll-button right" onClick={() => scroll('right')}>
            <img src={Iconright} alt='icon' />
          </button>
        )}
      </div>
    </div>
  );
};

export default IsiMateri;

