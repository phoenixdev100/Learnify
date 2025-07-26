import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const practiceQuestions = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How do you say "Hello" in Spanish?',
    options: ['Hola', 'Bonjour', 'Ciao', 'Hallo'],
    correctAnswer: 'Hola',
    explanation: '"Hola" is the Spanish word for "Hello".'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which word means "Thank you" in Mandarin?',
    options: ['Arigato', 'Gracias', 'Xiexie', 'Danke'],
    correctAnswer: 'Xiexie',
    explanation: '"谢谢 (Xiexie)" is how you say "Thank you" in Mandarin Chinese.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "Madre" mean in Spanish?',
    options: ['Father', 'Mother', 'Sister', 'Brother'],
    correctAnswer: 'Mother',
    explanation: '"Madre" is the Spanish word for "Mother".'
  },
];

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
  const navigate = useNavigate();
  const percentage = (score / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Practice Complete!</h2>
      <div className="card mb-8">
        <div className="text-6xl font-bold text-primary mb-4">{percentage}%</div>
        <p className="text-xl mb-4">
          You got {score} out of {totalQuestions} questions correct
        </p>
        <div className="h-4 bg-gray-200 rounded-full">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
          onClick={onRestart}
        >
          Try Again
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-secondary"
          onClick={() => navigate('/lessons')}
        >
          Back to Lessons
        </motion.button>
      </div>
    </motion.div>
  );
};

const Practice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [streak, setStreak] = useState(0);

  const handleAnswerSelect = (answer) => {
    if (!showResult) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === practiceQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    setShowResult(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedAnswer('');
    setShowResult(false);
    setShowExplanation(false);
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setScore(0);
    setStreak(0);
    setIsCompleted(false);
  };

  const question = practiceQuestions[currentQuestion];

  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ResultScreen
          score={score}
          totalQuestions={practiceQuestions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Practice Your Skills</h1>
        <p className="mt-2 text-gray-600">
          Question {currentQuestion + 1} of {practiceQuestions.length}
        </p>
        {streak > 2 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mt-2 inline-block px-3 py-1 bg-accent text-white rounded-full text-sm"
          >
            🔥 {streak} Streak!
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        <div className="space-y-4">
          {question.options.map((option) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                selectedAnswer === option
                  ? showResult
                    ? option === question.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-primary bg-primary/10'
                  : 'border-gray-200 hover:border-primary/50'
              }`}
              disabled={showResult}
            >
              {option}
              {showResult && option === question.correctAnswer && (
                <span className="float-right text-green-500">✓</span>
              )}
              {showResult && option === selectedAnswer && option !== question.correctAnswer && (
                <span className="float-right text-red-500">✗</span>
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {question.explanation}
            </motion.div>
          )}
        </AnimatePresence>

        {showResult ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="btn-primary w-full mt-8"
          >
            {currentQuestion < practiceQuestions.length - 1 ? 'Next Question' : 'See Results'}
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={`btn-primary w-full mt-8 ${
              !selectedAnswer && 'opacity-50 cursor-not-allowed'
            }`}
          >
            Check Answer
          </motion.button>
        )}
      </motion.div>

      <div className="mt-8 text-center">
        <p className="text-xl font-semibold">
          Current Score: {score} / {practiceQuestions.length}
        </p>
      </div>
    </div>
  );
};

export default Practice;
