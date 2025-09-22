import React, { useState } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the opening melodic interval in Moon River?",
    options: ["Perfect 4th", "Major 6th", "Perfect 5th", "Octave"],
    correctAnswer: 1,
    explanation: "The opening interval is a major 6th, which gives the song its distinctive, yearning quality that became iconic in film music."
  },
  {
    id: 2,
    question: "How would you describe the overall melodic contour?",
    options: ["Constantly ascending", "Arch-shaped with peaks and valleys", "Constantly descending", "Completely static"],
    correctAnswer: 1,
    explanation: "The melody has an arch-shaped contour with gentle rises and falls, creating a flowing, river-like quality that matches the song's imagery."
  },
  {
    id: 3,
    question: "What melodic technique is used in the phrase 'Moon River, wider than a mile'?",
    options: ["Sequence", "Imitation", "Stepwise motion", "Large intervallic leaps"],
    correctAnswer: 2,
    explanation: "The melody moves primarily by stepwise motion, creating a smooth, lyrical line that's easy to sing and remember."
  },
  {
    id: 4,
    question: "How does the melody support the emotional content of the lyrics?",
    options: ["Creates tension through dissonance", "Uses gentle, flowing phrases", "Employs rapid, energetic rhythms", "Remains monotone throughout"],
    correctAnswer: 1,
    explanation: "The gentle, flowing melodic phrases perfectly complement the dreamy, nostalgic lyrics, creating the song's wistful and romantic character."
  },
  {
    id: 5,
    question: "What makes this melody particularly effective for film use?",
    options: ["Complex rhythmic patterns", "Memorable and singable phrases", "Atonal harmonic structure", "Rapid tempo changes"],
    correctAnswer: 1,
    explanation: "The melody's memorable and singable quality makes it perfect for film use, as it can be easily recalled and associated with the movie's themes."
  },
  {
    id: 6,
    question: "How does the melodic range contribute to the song's character?",
    options: ["Very wide range creates drama", "Moderate range makes it accessible", "Extremely narrow range", "Range constantly expanding"],
    correctAnswer: 1,
    explanation: "The moderate melodic range makes the song accessible to singers while still providing enough variety to maintain interest and emotional expression."
  }
]

export default function MoonRiverTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    setShowExplanation(false)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowExplanation(false)
    }
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  const handleFinishTest = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  const getScorePercentage = () => {
    return Math.round((calculateScore() / questions.length) * 100)
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(-1))
    setShowResults(false)
    setShowExplanation(false)
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = getScorePercentage()
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Moon River - Test Results
            </h1>
            
            <div className="text-center mb-8">
              <div className="text-6xl font-bold mb-4">
                <span className={percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}>
                  {percentage}%
                </span>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                You scored {score} out of {questions.length} questions correctly
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {questions.map((question, index) => (
                <div key={question.id} className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Question {index + 1}: {question.question}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-2 rounded text-sm ${
                          optionIndex === question.correctAnswer
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : selectedAnswers[index] === optionIndex
                            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {option}
                        {optionIndex === question.correctAnswer && ' ✓'}
                        {selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer && ' ✗'}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    {question.explanation}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={resetTest}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Take Test Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Moon River - Melody Listening Test
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              IGCSE Area of Study 5: Stage and Screen
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Audio Player Placeholder */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-6 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">Audio will be added here</p>
            <div className="w-full h-12 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
              <span className="text-gray-500">🎵 Moon River Audio</span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                </button>
              ))}
            </div>
          </div>

          {/* Show Explanation Button */}
          {selectedAnswers[currentQuestion] !== -1 && (
            <div className="mb-6">
              <button
                onClick={handleShowExplanation}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Show Explanation
              </button>
            </div>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Explanation:</h3>
              <p className="text-yellow-700 dark:text-yellow-300">{currentQ.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {setCurrentQuestion(index); setShowExplanation(false)}}
                  className={`w-8 h-8 rounded-full text-sm font-bold transition-colors ${
                    index === currentQuestion
                      ? 'bg-indigo-600 text-white'
                      : selectedAnswers[index] !== -1
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleFinishTest}
                disabled={selectedAnswers.includes(-1)}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Finish Test
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}