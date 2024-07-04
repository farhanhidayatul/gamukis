import React from 'react';

const GameContainer = ({ players, coins }) => {
  return (
    <div className="game-container">
      {Object.keys(players).map(playerId => {
        const player = players[playerId];
        return (
          <div
            key={playerId}
            className={`Character grid-cell ${player.id === playerId ? 'you' : ''}`}
            data-color={player.color}
            data-direction={player.direction}
            style={{ transform: `translate3d(${16 * player.x}px, ${16 * player.y - 4}px, 0)` }}
          >
            <div className="Character_shadow grid-cell"></div>
            <div className="Character_sprite grid-cell"></div>
            <div className="Character_name-container">
              <span className="Character_name">{player.name}</span>
              <span className="Character_coins">{player.coins}</span>
            </div>
            <div className="Character_you-arrow"></div>
          </div>
        );
      })}
      {Object.keys(coins).map(coinId => {
        const coin = coins[coinId];
        return (
          <div
            key={coinId}
            className="Coin grid-cell"
            style={{ transform: `translate3d(${16 * coin.x}px, ${16 * coin.y - 4}px, 0)` }}
          >
            <div className="Coin_shadow grid-cell"></div>
            <div className="Coin_sprite grid-cell"></div>
          </div>
        );
      })}
    </div>
  );
};

export default GameContainer;
