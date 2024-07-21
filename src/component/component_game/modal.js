import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './modal.css'; // Import CSS for animations and styling

const CoinModal = ({ isOpen, onRequestClose, questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Reset state when questionData changes
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
  }, [questionData]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) { // Prevent clicking again after an answer is selected
      setSelectedAnswer(answer);
      const correct = answer === questionData.correct;
      setIsCorrect(correct);
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
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
        {showFeedback && (
          <div className={isCorrect ? "feedback correct" : "feedback incorrect"}>
            {isCorrect ? "Correct!" : "Incorrect!"}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CoinModal;




