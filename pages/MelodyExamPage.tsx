import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const melodyQuestions: Question[] = [
  {
    id: 1,
    question: "What is a 'hook' in popular music?",
    options: [
      "A repeated chord progression",
      "A catchy, memorable melodic phrase designed to grab the listener's attention",
      "The bridge section of a song",
      "A type of guitar technique"
    ],
    correctAnswer: 1,
    explanation: "A hook is a catchy, memorable melodic phrase specifically designed to grab and hold the listener's attention. It's often the most recognizable part of a song."
  },
  {
    id: 2,
    question: "Which of the following best describes a 'riff'?",
    options: [
      "A vocal improvisation",
      "A drum pattern",
      "A short, repeated melodic or rhythmic pattern, often instrumental",
      "A type of song structure"
    ],
    correctAnswer: 2,
    explanation: "A riff is a short, repeated melodic or rhythmic pattern that is often instrumental and serves as a foundation or recurring element in a song."
  },
  {
    id: 3,
    question: "What is melodic contour?",
    options: [
      "The volume of the melody",
      "The speed of the melody",
      "The shape or direction of a melody as it moves up and down in pitch",
      "The rhythm of the melody"
    ],
    correctAnswer: 2,
    explanation: "Melodic contour refers to the shape or direction of a melody as it moves up and down in pitch, creating patterns that can be visualized as lines moving higher or lower."
  },
  {
    id: 4,
    question: "In popular music, what is typically the function of a melodic hook?",
    options: [
      "To provide harmonic support",
      "To establish the key signature",
      "To create memorability and commercial appeal",
      "To demonstrate technical skill"
    ],
    correctAnswer: 2,
    explanation: "The primary function of a melodic hook is to create memorability and commercial appeal, making the song stick in the listener's mind and encouraging repeated listening."
  },
  {
    id: 5,
    question: "Which melodic technique involves repeating a musical phrase at different pitch levels?",
    options: [
      "Inversion",
      "Sequence",
      "Augmentation",
      "Retrograde"
    ],
    correctAnswer: 1,
    explanation: "A sequence involves repeating a musical phrase at different pitch levels, either higher or lower than the original, creating a sense of melodic development and movement."
  },
  {
    id: 6,
    question: "What is the term for the highest or most prominent melody in a musical texture?",
    options: [
      "Bass line",
      "Countermelody",
      "Main melody or tune",
      "Ostinato"
    ],
    correctAnswer: 2,
    explanation: "The main melody or tune is the highest or most prominent melodic line in a musical texture, typically the part that listeners focus on and remember most easily."
  },
  {
    id: 7,
    question: "In popular music analysis, what does 'melodic range' refer to?",
    options: [
      "The tempo of the melody",
      "The distance between the highest and lowest notes in a melody",
      "The number of notes in a melody",
      "The key signature of the melody"
    ],
    correctAnswer: 1,
    explanation: "Melodic range refers to the distance between the highest and lowest notes in a melody, which affects the vocal or instrumental demands and the overall character of the piece."
  },
  {
    id: 8,
    question: "What is a 'motif' in melodic analysis?",
    options: [
      "A complete song section",
      "A short, distinctive musical idea that can be developed throughout a piece",
      "A type of chord progression",
      "A rhythmic pattern only"
    ],
    correctAnswer: 1,
    explanation: "A motif is a short, distinctive musical idea that serves as a building block for larger musical structures and can be developed, varied, and repeated throughout a piece."
  }
];

const MelodyExamPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(melodyQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (currentQuestion < melodyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === melodyQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const resetExam = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(melodyQuestions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / melodyQuestions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Melody Exam Results
            </h1>
            <div className="text-6xl font-bold mb-4">
              <span className={percentage >= 70 ? 'text-green-500' : percentage >= 50 ? 'text-yellow-500' : 'text-red-500'}>
                {percentage}%
              </span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              You scored {score} out of {melodyQuestions.length} questions correctly
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {melodyQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Question {index + 1}: {question.question}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optionIndex) => {
                      let className = "p-3 rounded border ";
                      
                      if (optionIndex === question.correctAnswer) {
                        className += "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/20 dark:border-green-400 dark:text-green-300";
                      } else if (optionIndex === userAnswer && !isCorrect) {
                        className += "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/20 dark:border-red-400 dark:text-red-300";
                      } else {
                        className += "bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300";
                      }
                      
                      return (
                        <div key={optionIndex} className={className}>
                          {option}
                          {optionIndex === question.correctAnswer && (
                            <span className="ml-2 text-green-600 dark:text-green-400">✓ Correct</span>
                          )}
                          {optionIndex === userAnswer && !isCorrect && (
                            <span className="ml-2 text-red-600 dark:text-red-400">✗ Your answer</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded p-4">
                    <p className="text-blue-800 dark:text-blue-300">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={resetExam}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retake Exam
            </button>
            <Link
              to="/listening-exams"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Listening Exams
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = melodyQuestions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;
  const allAnswered = selectedAnswers.every(answer => answer !== -1);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/listening-exams"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            ← Back to Listening Exams
          </Link>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Question {currentQuestion + 1} of {melodyQuestions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / melodyQuestions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Melody Listening Exam
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            {question.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'bg-blue-100 border-blue-500 text-blue-800 dark:bg-blue-900/30 dark:border-blue-400 dark:text-blue-300'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Show Explanation Button */}
        {isAnswered && (
          <div className="mb-6">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              {showExplanation ? 'Hide' : 'Show'} Explanation
            </button>
            
            {showExplanation && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-300">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex space-x-2">
            {melodyQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : selectedAnswers[index] !== -1
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestion === melodyQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit Exam
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MelodyExamPage;