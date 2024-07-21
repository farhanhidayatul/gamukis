import React, { useState, useEffect } from 'react';

const Player = ({ player, isCurrentPlayer }) => {
  const { name, coins, color, direction, x, y } = player;

  const [isMoving, setIsMoving] = useState(false);

  // Utility function to check if the character is SVG
  const isSvgCharacter = (color) => color === 'man';

  useEffect(() => {
    if (isCurrentPlayer) {
      const handleKeyDown = () => {
        setIsMoving(true);
      };

      const handleKeyUp = () => {
        setIsMoving(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [isCurrentPlayer]);

  // Default positioning for non-SVG characters
  let left = 16 * x + 'px';
  let top = 16 * y - 4 + 'px';


  return (
    <div
      className={`Character grid-cell ${isCurrentPlayer ? 'you' : ''} ${isSvgCharacter(color) && isMoving ? 'moving' : ''}`}
      style={{ transform: `translate3d(${left}, ${top}, 0)` }}
      data-color={color}
      data-direction={direction}
    >
      <div className="Character_shadow grid-cell"></div>
      {isSvgCharacter(color) ? (
        <div className="Character_svg grid-cell"></div>
      ) : (
        <div className="Character_sprite grid-cell"></div>
      )}
      <div className="Character_name-container">
        <span className="Character_name">{name}</span>
        <span className="Character_coins">{coins}</span>
      </div>
      {isCurrentPlayer && <div className="Character_you-arrow"></div>}
    </div>
  );
};

export default Player;








