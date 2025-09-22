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
    question: "What is the correct term for the melodic pattern heard at the beginning?",
    options: ["Sequence", "Motif", "Imitation", "Repetition"],
    correctAnswer: 1,
    explanation: "A motif is a short segment or fragment of a melody, used as a distinctive building block in musical theatre compositions."
  },
  {
    id: 2,
    question: "What melodic device is heard in the opening part of the extract?",
    options: ["Disjunct", "Scalic", "Chromatic", "Arpeggiated"],
    correctAnswer: 1,
    explanation: "Scalic means the melody moves along using the notes in sequential order of a scale, common in musical theatre melodies."
  },
  {
    id: 3,
    question: "How is the melodic material contrasted in the second part of the extract?",
    options: ["Lower in pitch and quieter", "Higher in pitch and covers a wider range", "Same pitch but different rhythm", "Lower in pitch but louder"],
    correctAnswer: 1,
    explanation: "Higher in pitch and wider range creates dramatic contrast typical of musical theatre, allowing for emotional expression and vocal showcase."
  },
  {
    id: 4,
    question: "What vocal technique is characteristic of this Godspell piece?",
    options: ["Classical vibrato", "Gospel-style melisma", "Operatic projection", "Folk-style simplicity"],
    correctAnswer: 1,
    explanation: "Godspell incorporates gospel-style melisma (multiple notes on one syllable) reflecting its contemporary Christian musical theatre style."
  },
  {
    id: 5,
    question: "How does the melody support the theatrical narrative?",
    options: ["Remains static throughout", "Builds emotional intensity", "Uses only simple intervals", "Avoids repetition"],
    correctAnswer: 1,
    explanation: "Musical theatre melodies typically build emotional intensity to support character development and dramatic storytelling."
  }
]

export default function GodspellTestPage() {
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
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Godspell - Test Results
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
                <div key={question.id} className="border-l-4 border-red-500 pl-4">
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
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Godspell - Melody Listening Test
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              IGCSE Area of Study 5: Stage and Screen
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-red-600 h-2 rounded-full transition-all duration-300"
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
              <span className="text-gray-500">🎵 Godspell Audio</span>
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
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
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
                      ? 'bg-red-600 text-white'
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
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
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