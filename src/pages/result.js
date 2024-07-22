import React, { useEffect, useState } from 'react';
import { auth, database, ref, onValue, onAuthStateChanged } from '../database/firebase';
import './result.css';

const Result = () => {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [playerId, setPlayerId] = useState(null);

  useEffect(() => {
    const fetchAnswers = (playerId) => {
      const correctAnswersRef = ref(database, `answers/${playerId}/correctAnswers`);
      const incorrectAnswersRef = ref(database, `answers/${playerId}/incorrectAnswers`);

      onValue(correctAnswersRef, (snapshot) => {
        const data = snapshot.val();
        setCorrectAnswers(data ? Object.values(data) : []);
      }, (error) => {
        console.error("Error fetching correct answers:", error);
      });

      onValue(incorrectAnswersRef, (snapshot) => {
        const data = snapshot.val();
        setIncorrectAnswers(data ? Object.values(data) : []);
      }, (error) => {
        console.error("Error fetching incorrect answers:", error);
      });
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPlayerId(user.uid);
        fetchAnswers(user.uid);
      }
    });
  }, []);

  const totalAnswers = correctAnswers.length + incorrectAnswers.length;
  const accuracy = totalAnswers > 0 ? (correctAnswers.length / totalAnswers) * 100 : 0;

  return (
    <div className="result-container">
      <h1>WOW GGWP!! Selamat ya</h1>
      <div className="score-box">
        <span className="score">{correctAnswers.length * 10}</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="result-content">
        <div className="result-section rank">
          <h2>Rank</h2>
          <img src="rank-icon.png" alt="Rank Icon" />
          <div className="rank-details">
            <p>Common</p>
            <p><span className="level-up">60%</span> to Legendary</p>
          </div>
        </div>
        <div className="result-section subject">
          <h2>Pelajaran</h2>
          <div className="subject-details">
            <p>Saintek</p>
            <p>Telah menjawab tantangan saintek, kamu siap unggul</p>
            <p>Biologi</p>
            <p>25 Soal</p>
          </div>
        </div>
        <div className="result-section accuracy">
          <h2>Akurasi</h2>
          <div className="accuracy-bar">
            <div className="accuracy-progress" style={{ width: `${accuracy}%` }}></div>
            <span className="accuracy-label">{Math.round(accuracy)}%</span>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>Correct Answers:</h2>
        <ul>
          {correctAnswers.map((item, index) => (
            <li key={index}>{item.question}: {item.answer}</li>
          ))}
        </ul>
        <h2>Incorrect Answers:</h2>
        <ul>
          {incorrectAnswers.map((item, index) => (
            <li key={index}>{item.question}: {item.answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Result;









