import React, { useEffect, useState } from 'react';
import {
  auth,
  database,
  signInAnonymouslyFirebase,
  onAuthStateChangedFirebase,
  databaseRef,
  setDatabase,
  updateDatabase,
  onValueDatabase,
} from '../../database/firebase';
import './style.css';
import GameContainer from './gameContainer';
import PlayerInfo from './playerInfo';
import {
  playerColors,
  randomFromArray,
  createName,
  getKeyString,
  isSolid,
  getRandomSafeSpot,
} from './utils';
import KeyPressListener from './useKeyPress';

const InGame = () => {
  const [playerId, setPlayerId] = useState();
  const [playerRef, setPlayerRef] = useState(null);
  const [players, setPlayers] = useState({});
  const [playerElements, setPlayerElements] = useState({});
  const [coins, setCoins] = useState({});
  const [coinElements, setCoinElements] = useState({});
  const [name, setName] = useState('');
  const [color, setColor] = useState(randomFromArray(playerColors));

  useEffect(() => {
    const authListener = onAuthStateChangedFirebase(auth, (user) => {
      if (user) {
        setPlayerId(user.uid);
        const playerRef = databaseRef(database, `players/${user.uid}`);
        setPlayerRef(playerRef);

        const playerName = createName();
        setName(playerName);
        const { x, y } = getRandomSafeSpot();

        if (playerRef) {
          setDatabase(playerRef, {
            id: user.uid,
            name: playerName,
            direction: 'right',
            color: randomFromArray(playerColors),
            x,
            y,
            coins: 0,
          });

          try {
            playerRef.onDisconnect().remove();
          } catch (error) {
            console.error("Error in setting onDisconnect: ", error);
          }

          initGame(playerRef);
        } else {
          console.error("playerRef is not initialized correctly.");
        }
      } else {
        signInAnonymouslyFirebase(auth).catch((error) => {
          console.error(error.code, error.message);
        });
      }
    });

    return () => {
      if (authListener) {
        authListener();
      }
    };
  }, []);

  const initGame = (playerRef) => {
    // Listener untuk tombol panah dan WASD
    const keyMappings = {
      'ArrowUp': [0, -1],
      'ArrowDown': [0, 1],
      'ArrowLeft': [-1, 0],
      'ArrowRight': [1, 0],
      'W': [0, -1],
      'A': [-1, 0],
      'S': [0, 1],
      'D': [1, 0],
    };

    Object.keys(keyMappings).forEach((key) => {
      new KeyPressListener(key, () => {
        const [xChange, yChange] = keyMappings[key];
        handleArrowPress(xChange, yChange);
      });
    });

    const allPlayersRef = databaseRef(database, 'players');
    const allCoinsRef = databaseRef(database, 'coins');

    onValueDatabase(allPlayersRef, (snapshot) => {
      const playersData = snapshot.val() || {};
      setPlayers(playersData);
    });

    onValueDatabase(allPlayersRef, (snapshot) => {
      const addedPlayer = snapshot.val();
      setPlayerElements((prevElements) => ({
        ...prevElements,
        [addedPlayer.id]: addedPlayer,
      }));
    });

    onValueDatabase(allPlayersRef, (snapshot) => {
      const removedPlayer = snapshot.val();
      setPlayerElements((prevElements) => {
        const newElements = { ...prevElements };
        delete newElements[removedPlayer.id];
        return newElements;
      });
    });

    onValueDatabase(allCoinsRef, (snapshot) => {
      const coinsData = snapshot.val() || {};
      setCoins(coinsData);
    });

    onValueDatabase(allCoinsRef, (snapshot) => {
      const coin = snapshot.val();
      setCoinElements((prevElements) => ({
        ...prevElements,
        [getKeyString(coin.x, coin.y)]: coin,
      }));
    });

    onValueDatabase(allCoinsRef, (snapshot) => {
      const { x, y } = snapshot.val();
      setCoinElements((prevElements) => {
        const newElements = { ...prevElements };
        delete newElements[getKeyString(x, y)];
        return newElements;
      });
    });

    placeCoin();
  };

  const handleArrowPress = (xChange = 0, yChange = 0) => {
    if (playerId && players[playerId]) {
      const newX = players[playerId].x + xChange;
      const newY = players[playerId].y + yChange;
      if (!isSolid(newX, newY)) {
        players[playerId].x = newX;
        players[playerId].y = newY;
        if (xChange === 1) {
          players[playerId].direction = 'right';
        } else if (xChange === -1) {
          players[playerId].direction = 'left';
        }
        setDatabase(playerRef, players[playerId]);
        attemptGrabCoin(newX, newY);
      }
    }
  };

  const attemptGrabCoin = (x, y) => {
    const key = getKeyString(x, y);
    if (coins[key]) {
      setDatabase(databaseRef(database, `coins/${key}`), null);
      updateDatabase(playerRef, {
        coins: players[playerId].coins + 1,
      });
    }
  };

  const placeCoin = () => {
    const { x, y } = getRandomSafeSpot();
    const coinRef = databaseRef(database, `coins/${getKeyString(x, y)}`);
    setDatabase(coinRef, { x, y });

    const coinTimeouts = [2000, 3000, 4000, 5000];
    setTimeout(() => {
      placeCoin();
    }, randomFromArray(coinTimeouts));
  };

  return (
    <div>
      <GameContainer players={players} coins={coins} />
      <PlayerInfo
        name={name}
        color={color}
        onNameChange={(newName) => {
          setName(newName);
          updateDatabase(playerRef, { name: newName });
        }}
        onColorChange={() => {
          const mySkinIndex = playerColors.indexOf(players[playerId].color);
          const nextColor = playerColors[mySkinIndex + 1] || playerColors[0];
          setColor(nextColor);
          updateDatabase(playerRef, { color: nextColor });
        }}
      />
    </div>
  );
};

export default InGame;


