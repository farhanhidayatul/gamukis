// src/components/Leaderboard.js
import React, { useState, useEffect } from 'react';
import { ref, onValue, database } from '../../database/firebase';
import './leaderboard.css';

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const playersRef = ref(database, 'players');
    onValue(playersRef, (snapshot) => {
      const playersData = snapshot.val() || {};
      const sortedPlayers = Object.values(playersData).sort((a, b) => b.coins - a.coins);
      setPlayers(sortedPlayers);
    });
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {players.slice(0, 10).map((player, index) => (
          <li key={player.id}>
            {index + 1}. {player.name} - {player.coins} coins
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

