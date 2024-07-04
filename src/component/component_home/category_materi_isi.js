import React, { useRef, useState, useEffect } from "react";
import "../component_home/category_materi.css";
import Iconleft from "../../images/icon_left.svg";
import Iconright from "../../images/icon_right.svg";
import Card from "../component_home/card";

const IsiMateri = ({ cards }) => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 100);
      setShowRightButton(scrollWidth - scrollLeft > clientWidth + 100);
    }
  };

  useEffect(() => {
    checkScrollPosition(); // Initial check
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => checkScrollPosition();
      currentScrollRef.addEventListener("scroll", handleScroll);
      return () => {
        if (currentScrollRef) {
          currentScrollRef.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <div className="isi-materi">
      <div className="scroll-container">
        {showLeftButton && (
          <button className="scroll-button left" onClick={() => scroll("left")}>
            <img src={Iconleft} alt="icon" />
          </button>
        )}
        <div className="cards" ref={scrollRef}>
          {cards &&
            cards.map((card, index) => (
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
          <button
            className="scroll-button right"
            onClick={() => scroll("right")}
          >
            <img src={Iconright} alt="icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default IsiMateri;
