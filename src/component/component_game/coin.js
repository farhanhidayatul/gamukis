import React from 'react';
import { getKeyString } from './utils';

const Coin = ({ coin }) => {
  const { x, y } = coin;
  const left = 16 * x + 'px';
  const top = 16 * y - 4 + 'px';
  const key = getKeyString(x, y);

  return (
    <div className="Coin grid-cell" style={{ transform: `translate3d(${left}, ${top}, 0)` }} key={key}>
      <div className="Coin_shadow grid-cell"></div>
      <div className="Coin_sprite grid-cell"></div>
    </div>
  );
};

export default Coin;
