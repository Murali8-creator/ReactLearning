import { useState, useCallback } from 'react';
import logoImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx'
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null))

  if (isQuizComplete) {
    return (
      <div id='summary'>
        <img src={logoImg} alt='Trophy Icon' />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  return (
    <>
      <div id='quiz'>
        <div id='question'>
          <QuestionTimer
            timeout={10000}
            onTimeout={handleSkipAnswer}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id='answers'>
            {shuffledAnswers.map((ans) => (
              <li key={ans} className='answer'>
                <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
