import React from 'react';
import './leaderboard.css';

const Leaderboard = () => {
  const players = [
    { rank: 1, name: 'No flames', score: 2980, stars: 5 },
    { rank: 2, name: 'Gojo', score: 2721, stars: 4.5 },
    { rank: 3, name: 'Strange', score: 2679, stars: 4 },
    { rank: 4, name: 'Wanda', score: 1874, stars: 3.5 },
    { rank: 5, name: 'Puta', score: 1756, stars: 3 },
    { rank: 6, name: 'Ahmadjani', score: 0, stars: 0 },
  ];

  const renderStars = (count) => {
    const fullStars = Math.floor(count);
    const halfStars = count % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStars ? '☆' : ''}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="leaderboard">
      <h2>Score</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
      <ul>
        {players.map((player, index) => (
          <li key={index} className={`player rank-${player.rank}`}>
            <span className="rank">{player.rank}</span>
            <span className="name">{player.name}</span>
            <span className="stars">{renderStars(player.stars)}</span>
            <span className="score">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;