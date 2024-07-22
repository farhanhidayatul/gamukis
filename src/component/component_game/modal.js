import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './modal.css'; // Import CSS for animations and styling
import { ref, push, database } from '../../database/firebase'; // Import database and push from firebase

const CoinModal = ({ isOpen, onRequestClose, questionData, onQuestionAnswered, playerId }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Reset state when questionData changes
    setSelectedAnswer(null);
    setIsCorrect(false);
  }, [questionData]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) { // Prevent clicking again after an answer is selected
      setSelectedAnswer(answer);
      const correct = answer === questionData.correct;
      setIsCorrect(correct);
      onQuestionAnswered(questionData.question, answer, correct); // Pass the result to the parent

      // Save the answer to the database
      const answerData = {
        question: questionData.question,
        answer: answer,
        correct: correct
      };
      const answerRef = ref(database, `answers/${playerId}/${correct ? 'correctAnswers' : 'incorrectAnswers'}`);
      push(answerRef, answerData);

      setTimeout(() => {
        onRequestClose();
      }, 1500);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Coin Collection Modal"
      ariaHideApp={false}
      className="coin-modal"
      overlayClassName="coin-modal-overlay"
    >
      <div className="modal-content">
        <h2>{questionData.question}</h2>
        <div className="options">
          {questionData.options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswerClick(option)}
              className={`option-button ${selectedAnswer !== null && selectedAnswer !== option ? 'blurred' : ''} ${selectedAnswer === option ? (isCorrect ? "correct" : "incorrect") : ""}`}
              disabled={selectedAnswer !== null && selectedAnswer !== option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CoinModal;










