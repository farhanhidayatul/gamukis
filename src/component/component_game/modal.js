import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './modal.css';
import { ref, push, database } from '../../database/firebase';
import { questions } from './questions'; // Import questions here

const CoinModal = ({ isOpen, onRequestClose, onQuestionAnswered, playerId }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questionData, setQuestionData] = useState({}); // State for the current question

  useEffect(() => {
    // Randomly select a question when the modal opens
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestionData(randomQuestion);
    // Reset state
    setSelectedAnswer(null);
    setIsCorrect(false);
  }, [isOpen]); // Trigger when modal opens

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      const correct = answer === questionData.correct;
      setIsCorrect(correct);
      onQuestionAnswered(questionData.question, answer, correct);

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
          {questionData.options && questionData.options.map((option, index) => (
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













