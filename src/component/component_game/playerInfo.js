import React from 'react';

const PlayerInfo = ({ name, color, onNameChange, onColorChange }) => {
  return (
    <div className="player-info">
      <div>
        <label htmlFor="player-name">Your Name</label>
        <input
          id="player-name"
          maxLength="10"
          type="text"
          value={name}
          onChange={e => onNameChange(e.target.value)}
        />
      </div>
      <div>
        <button id="player-color" onClick={onColorChange}>
          Change Color
        </button>
      </div>
    </div>
  );
};

export default PlayerInfo;
