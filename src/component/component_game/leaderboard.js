import React, { useState, useEffect } from "react";
import { ref, onValue, database } from "../../database/firebase";
import { auth, onAuthStateChanged } from "../../database/firebaseAuth";
import "./leaderboard.css";
import No1 from "../../images/Icon-Win-1.png";
import No2 from "../../images/Icon-win-2.png";
import No3 from "../../images/Icon-win-3.png";
import DefaultProfile from "../../images/people-profile.png";

const Leaderboard = ({ page }) => {
  const [players, setPlayers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    // Mendeteksi user yang sedang login
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserId(user.uid);
      } else {
        setCurrentUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Mengambil data pemain dari Firebase
    const playersRef = ref(database, "players");
    onValue(playersRef, (snapshot) => {
      const playersData = snapshot.val() || {};
      const sortedPlayers = Object.values(playersData).sort(
        (a, b) => b.coins - a.coins
      );

      setPlayers(sortedPlayers);
    });
  }, []);

  // Menentukan pemain yang sedang bermain
  const playerSelf = players.find((player) => player.id === currentUserId) || null;
  const playerRank = playerSelf ? players.findIndex((player) => player.id === currentUserId) + 1 : null;

  return (
    <div
      className={`leaderboard ${
        page === "gamePage" ? "leaderboard-gamePage" : "leaderboard-inGame"
      }`}
    >
      <h2>Score</h2>
      <div className="leaderboard-container-text">
        <p className="leaderboard-decs-text-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </p>
        <p className="leaderboard-decs-text-2">Lihat Semua</p>
      </div>
      <ul>
        {players.slice(0, 5).map((player, index) => (
          <li
            key={player.id}
            className={`leaderboard-item ${
              index < 3 ? "top-three" : index < 10 ? "top-ten" : "regular"
            }`}
          >
            {/* Nomor / Medal */}
            <div className="rank-leaderboard">
              {index === 0 ? (
                <img src={No1} alt="Gold Medal" className="medal" />
              ) : index === 1 ? (
                <img src={No2} alt="Silver Medal" className="medal" />
              ) : index === 2 ? (
                <img src={No3} alt="Bronze Medal" className="medal" />
              ) : (
                `${index + 1}`
              )}
            </div>

            {/* Nama dan Foto Profil */}
            <div className="profile-container">
              <div className="profile-out-color">
                <img
                  src={player.profilePic ? player.profilePic : DefaultProfile}
                  alt="Profile"
                  className="profile-pic"
                />
              </div>
              <span className="player-name">
                <p className="player-name-text">{player.name} :</p>
                <p className="player-coins-text">{player.coins}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Garis pemisah */}
      <hr className="divider" />

      {/* Tampilan Player Sendiri hanya jika di InGame */}
      {page === "inGame" && playerSelf && (
       <div className={`player-self ${playerRank <= 3 ? "top-three" : playerRank <= 10 ? "top-ten" : "regular"}`}>
          <div className="rank-leaderboard">
            {playerRank}
          </div>
          <div className="profile-container">
              <div className="profile-out-color">
                <img
                  src={playerSelf.profilePic ? playerSelf.profilePic : DefaultProfile}
                  alt="Profile"
                  className="profile-pic"
                />
              </div>
              <span className="player-name">
                <p className="player-name-text">{playerSelf.name} :</p>
                <p className="player-coins-text">{playerSelf.coins}</p>
              </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;




