import React, { useState, useEffect } from 'react';
import {
  auth, database, ref, set, onValue, onDisconnect, remove, update, signInAnonymously, onAuthStateChanged
} from '../../database/firebase';
import {
  randomFromArray, getKeyString, createName, isSolid, getRandomSafeSpot
} from './utils';
import Player from './playerInfo';
import Coin from './coin';
import "./style.css";
import useKeyPress from './useKeyPress';
import CoinModal from './modal';
import { questions } from './questions';

const mapData = {
  minX: 1,
  maxX: 14,
  minY: 4,
  maxY: 12,
  blockedSpaces: {
    "7x4": true, "1x11": true, "12x10": true,
  },
};

const playerColors = ["blue", "red", "orange", "yellow", "green", "purple", "man"];

const InGame = () => {
  const [playerId, setPlayerId] = useState(null);
  const [players, setPlayers] = useState({});
  const [coins, setCoins] = useState({});
  const [playerName, setPlayerName] = useState(createName());
  const [playerColor, setPlayerColor] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    question: "",
    options: [],
    correct: ""
  });

  const handleNameChange = (event) => {
    const newName = event.target.value || createName();
    setPlayerName(newName);
    if (playerId) {
      update(ref(database, `players/${playerId}`), { name: newName });
    }
  };

  const changeColor = () => {
    const currentIndex = playerColors.indexOf(playerColor);
    const nextIndex = (currentIndex + 1) % playerColors.length;
    const newColor = playerColors[nextIndex];
    setPlayerColor(newColor);
    if (playerId) {
      update(ref(database, `players/${playerId}`), { color: newColor });
    }
  };

  const handleArrowPress = (xChange = 0, yChange = 0) => {
    if (!playerId) return;
    const player = players[playerId];
    const newX = player.x + xChange;
    const newY = player.y + yChange;
    if (!isSolid(newX, newY, mapData)) {
      player.x = newX;
      player.y = newY;
      if (xChange !== 0) {
        player.direction = xChange === 1 ? 'right' : 'left';
      } else if (yChange !== 0) {
        player.direction = yChange === 1 ? 'down' : 'up';
      }
      set(ref(database, `players/${playerId}`), player);
      attemptGrabCoin(newX, newY);
    }
  };

  const attemptGrabCoin = (x, y) => {
    const key = getKeyString(x, y);
    if (coins[key]) {
      remove(ref(database, `coins/${key}`));
      const newCoinCount = players[playerId].coins + 1;
      update(ref(database, `players/${playerId}`), {
        coins: newCoinCount,
      });
      if (newCoinCount % 5 === 0) {
        const questionIndex = (newCoinCount / 5) - 1;
        const questionData = questions[questionIndex % questions.length];
        setModalContent(questionData);
        setIsModalOpen(true);
      }
    }
  };

  const placeCoin = () => {
    const { x, y } = getRandomSafeSpot();
    const coinRef = ref(database, `coins/${getKeyString(x, y)}`);
    set(coinRef, { x, y });

    setTimeout(() => {
      placeCoin();
    }, randomFromArray([2000, 3000, 4000, 5000]));
  };

  const setupGameListeners = (playerId, playerRef) => {
    const allPlayersRef = ref(database, 'players');
    const allCoinsRef = ref(database, 'coins');

    onValue(allPlayersRef, (snapshot) => {
      setPlayers(snapshot.val() || {});
    });

    onValue(allCoinsRef, (snapshot) => {
      setCoins(snapshot.val() || {});
    });

    placeCoin();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const playerId = user.uid;
        setPlayerId(playerId);
        const playerRef = ref(database, `players/${playerId}`);
        const { x, y } = getRandomSafeSpot();

        set(playerRef, {
          id: playerId,
          name: playerName,
          direction: "right",
          color: randomFromArray(playerColors),
          x,
          y,
          coins: 0,
        });

        onDisconnect(playerRef).remove();
        setupGameListeners(playerId, playerRef);
      }
    });

    signInAnonymously(auth).catch((error) => {
      console.error(error.code, error.message);
    });
  }, []);

  useKeyPress({
    'KeyW': () => handleArrowPress(0, -1),
    'ArrowUp': () => handleArrowPress(0, -1),
    'KeyS': () => handleArrowPress(0, 1),
    'ArrowDown': () => handleArrowPress(0, 1),
    'KeyA': () => handleArrowPress(-1, 0),
    'ArrowLeft': () => handleArrowPress(-1, 0),
    'KeyD': () => handleArrowPress(1, 0),
    'ArrowRight': () => handleArrowPress(1, 0),
    'KeyC': changeColor
  });

  return (
    <div className="game-wrapper">
      <div className="game-container">
        {Object.keys(players).map((key) => (
          <Player key={key} player={players[key]} isCurrentPlayer={key === playerId} />
        ))}
        {Object.keys(coins).map((key) => (
          <Coin key={key} coin={coins[key]} />
        ))}
      </div>
      <div className="controls">
        <div className="row">
          <button onClick={() => handleArrowPress(0, -1)}>↑</button>
        </div>
        <div className="row">
          <button onClick={() => handleArrowPress(-1, 0)}>←</button>
          <button onClick={() => handleArrowPress(1, 0)}>→</button>
        </div>
        <div className="row">
          <button onClick={() => handleArrowPress(0, 1)}>↓</button>
        </div>
      </div>
      <div className="player-info">
        <div>
          <label htmlFor="player-name">Your Name</label>
          <input
            id="player-name"
            maxLength="10"
            type="text"
            value={playerName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button id="player-color" onClick={changeColor}>
            Change Color
          </button>
        </div>
      </div>
      <CoinModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        questionData={modalContent}
      />
    </div>
  );
};

export default InGame;


