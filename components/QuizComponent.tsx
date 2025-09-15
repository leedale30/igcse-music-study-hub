import React, { useState, useEffect } from 'react';
import { Quiz, Question, AnswerOption } from '../types';
import { validateQuizSubmission } from '../utils/validation';
import { useErrorHandler } from './ErrorBoundary';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import { Link } from 'react-router-dom';

interface QuizProps {
  quizData: Quiz;
}

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.06 0l4.002-5.5a.25.25 0 0 0-.002-.289Z" clipRule="evenodd" />
  </svg>
);

const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
  </svg>
);

const ClipboardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
);


const QuizComponent: React.FC<QuizProps> = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [quizStartTime, setQuizStartTime] = useState<Date>(new Date());
  const [progressSaved, setProgressSaved] = useState(false);
  
  const { handleError } = useErrorHandler();
  const { user } = useAuth();
  const { addQuizResult } = useProgress();

  // Initialize quiz start time
  useEffect(() => {
    setQuizStartTime(new Date());
  }, [quizData.title]);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    if (showResults) return; 
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let currentScore = 0;
    quizData.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerId) {
        currentScore++;
      }
    });
    setScore(currentScore);
    
    // Save progress for logged-in users
    if (user && !progressSaved) {
      const quizEndTime = new Date();
      const timeSpent = Math.floor((quizEndTime.getTime() - quizStartTime.getTime()) / 1000); // in seconds
      const percentage = (currentScore / quizData.questions.length) * 100;
      
      try {
        addQuizResult({
          quizId: `quiz-${quizData.title.toLowerCase().replace(/\s+/g, '-')}`,
          quizTitle: quizData.title,
          score: currentScore,
          totalQuestions: quizData.questions.length,
          percentage,
          timeSpent
        });
        setProgressSaved(true);
      } catch (error) {
        console.error('Failed to save quiz progress:', error);
      }
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setProgressSaved(false);
    setQuizStartTime(new Date());
    setValidationError(null);
  };




  if (!quizData || quizData.questions.length === 0) {
    return <p className="text-gray-600 dark:text-gray-400">No quiz available for this topic yet.</p>;
  }

  if (showResults) {
    return (
      <div className="mt-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-6 text-center">Quiz Results</h2>
        <p className="text-lg sm:text-xl text-center text-gray-800 dark:text-gray-200 mb-6">
          You scored <span className="font-bold text-sky-600 dark:text-sky-400">{score}</span> out of <span className="font-bold text-sky-600 dark:text-sky-400">{quizData.questions.length}</span>!
        </p>
        
        {/* Progress tracking notifications */}
        {user && progressSaved && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center">
              <CheckCircleIcon className="text-green-600 dark:text-green-400 mr-3" />
              <div>
                <p className="text-green-800 dark:text-green-200 font-medium">Progress Saved!</p>
                <p className="text-green-700 dark:text-green-300 text-sm">Your quiz result has been added to your learning progress.</p>
              </div>
            </div>
            <div className="mt-3">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-green-700 dark:text-green-300 hover:text-green-800 dark:hover:text-green-200 text-sm font-medium hover:underline"
              >
                View Dashboard →
              </Link>
            </div>
          </div>
        )}
        
        {!user && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-blue-800 dark:text-blue-200 font-medium">Track Your Progress</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">Sign in to save your quiz results and track your learning progress.</p>
              </div>
            </div>
            <div className="mt-3 flex gap-3">
              <Link
                to="/login"
                className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-sm font-medium rounded-md transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        )}
        <ul className="space-y-6">
          {quizData.questions.map((q, index) => {
            const userAnswerId = selectedAnswers[q.id];
            const isCorrect = userAnswerId === q.correctAnswerId;
            return (
              <li key={q.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{index + 1}. {q.text}</p>
                <div className="space-y-2">
                  {q.options.map(opt => {
                    let itemClass = "flex items-center p-3 rounded-md text-sm ";
                    let icon = null;

                    if (opt.id === q.correctAnswerId) {
                      itemClass += "bg-green-100 text-green-700 font-medium dark:bg-green-900/60 dark:text-green-300";
                      icon = <CheckCircleIcon className="mr-2 text-green-500 flex-shrink-0" />;
                    } else if (opt.id === userAnswerId && !isCorrect) {
                      itemClass += "bg-red-100 text-red-700 font-medium dark:bg-red-900/60 dark:text-red-300";
                       icon = <XCircleIcon className="mr-2 text-red-500 flex-shrink-0" />;
                    } else {
                       itemClass += "bg-gray-50 text-gray-700 dark:bg-slate-600 dark:text-gray-300";
                    }

                    return (
                      <div key={opt.id} className={itemClass}>
                        {icon}
                        <span>{opt.text}</span>
                        {opt.id === userAnswerId && !isCorrect && <span className="ml-2 text-xs font-normal">(Your answer)</span>}
                      </div>
                    );
                  })}
                </div>
                {!isCorrect && q.explanation && (
                    <p className="mt-3 text-sm text-sky-700 bg-sky-50 dark:bg-sky-900/60 dark:text-sky-300 p-2 rounded-md">
                        <strong>Explanation:</strong> {q.explanation}
                    </p>
                )}
                 {isCorrect && q.explanation && ( 
                    <p className="mt-3 text-sm text-green-700 bg-green-50 dark:bg-green-900/40 dark:text-green-300 p-2 rounded-md">
                        <strong>Explanation:</strong> {q.explanation}
                    </p>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleTryAgain}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center">{quizData.title}</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Question {currentQuestionIndex + 1} of {quizData.questions.length}
      </p>
      
      <div className="bg-white dark:bg-slate-700 p-4 sm:p-6 rounded-lg shadow">
        <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 min-h-[3em]">{currentQuestion.text}</p>
        <div className="space-y-3">
          {currentQuestion.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
              disabled={showResults}
              aria-pressed={selectedAnswers[currentQuestion.id] === option.id}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-150 
                ${selectedAnswers[currentQuestion.id] === option.id 
                  ? 'bg-sky-500 border-sky-600 text-white font-semibold ring-2 ring-sky-300 shadow-md' 
                  : 'bg-white border-gray-300 hover:bg-sky-50 hover:border-sky-400 text-gray-700 dark:bg-slate-600 dark:border-slate-500 dark:hover:bg-sky-900/50 dark:hover:border-sky-600 dark:text-gray-300'
                } 
                focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50
                disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleNextQuestion}
          disabled={!selectedAnswers[currentQuestion.id] || showResults}
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed dark:disabled:bg-slate-600"
        >
          {currentQuestionIndex < quizData.questions.length - 1 ? 'Next Question' : 'Show Results'}
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;