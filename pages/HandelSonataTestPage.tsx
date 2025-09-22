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
    question: "Which two musical terms best describe the shape of the melody in bar 1?",
    options: ["Conjunct and Ascending", "Conjunct and Descending", "Disjunct and Ascending", "Disjunct and Descending"],
    correctAnswer: 1,
    explanation: "Conjunct movement means the melody moves mainly by step, using semitones or tones. Descending means the melody is moving lower in pitch."
  },
  {
    id: 2,
    question: "What melodic device is used in bars 2 and 3?",
    options: ["Sequence", "Imitation", "Repetition", "Inversion"],
    correctAnswer: 1,
    explanation: "Imitation is a compositional device where a short musical idea or motif is played by one part and is then immediately copied by another instrument or voice."
  },
  {
    id: 3,
    question: "What term best describes the shape of the melody in bar 4?",
    options: ["Conjunct", "Disjunct", "Scalic", "Chromatic"],
    correctAnswer: 1,
    explanation: "Disjunct movement involves the melody moving mainly by leaps, meaning the notes are further away and the melody has a more angular feel."
  },
  {
    id: 4,
    question: "What interval is featured in bar 4?",
    options: ["3rd", "4th", "5th", "Octave"],
    correctAnswer: 1,
    explanation: "An interval is the gap or distance in pitch between any two notes. The 4th is a perfect interval commonly used in Baroque music."
  },
  {
    id: 5,
    question: "What melodic device is used in bars 4² – 6² in the right-hand part?",
    options: ["Imitation", "Sequence", "Repetition", "Inversion"],
    correctAnswer: 1,
    explanation: "A sequence is when a melodic idea (motif) is repeated but starting on a different pitch (either ascending or descending). This device is often used to expand thematic material."
  },
  {
    id: 6,
    question: "What word describes the melody in bar 12?",
    options: ["Disjunct", "Scalic", "Chromatic", "Arpeggiated"],
    correctAnswer: 1,
    explanation: "Scalic describes a melody that moves along using notes in the order of a musical scale."
  },
  {
    id: 7,
    question: "What melodic device is used in bars 13 and 14?",
    options: ["Imitation", "Sequence", "Repetition", "Inversion"],
    correctAnswer: 2,
    explanation: "Repetition is the compositional technique of repeating a musical idea."
  },
  {
    id: 8,
    question: "Suggest a tempo marking for this extract.",
    options: ["60 BPM Andante", "90 BPM Allegro", "120 BPM Presto", "40 BPM Largo"],
    correctAnswer: 1,
    explanation: "90 BPM Allegro is the appropriate tempo marking for this Baroque keyboard sonata. Allegro indicates a fast, lively tempo typical of Handel's energetic style."
  },
  {
    id: 9,
    question: "Is the tonality major, minor, or modal?",
    options: ["Minor", "Major", "Modal", "Atonal"],
    correctAnswer: 1,
    explanation: "This piece is in a major key, which is characteristic of many Baroque compositions and gives the music its bright, uplifting character."
  },
  {
    id: 10,
    question: "Is this 2/4 type of time signature known as SIMPLE DUPLE, SIMPLE TRIPLE OR SIMPLE QUADRUPLE?",
    options: ["Simple Triple", "Simple Duple", "Simple Quadruple", "Compound Duple"],
    correctAnswer: 1,
    explanation: "2/4 time signature is classified as Simple Duple - 'Simple' because each beat divides into two, and 'Duple' because there are two beats per measure."
  },
  {
    id: 11,
    question: "What instrument would have been used for the original performance of this piece and why?",
    options: ["Piano", "Harpsichord", "Organ", "Clavichord"],
    correctAnswer: 1,
    explanation: "The harpsichord would have been used for the original performance. During Handel's Baroque era (1685-1759), the harpsichord was the primary keyboard instrument, as the piano was not yet widely available or developed."
  }
]

export default function HandelSonataTestPage() {
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
              Handel Keyboard Sonata - Test Results
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
                <div key={question.id} className="border-l-4 border-blue-500 pl-4">
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
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
              Handel Keyboard Sonata - Melody Listening Test
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              IGCSE Area of Study 1: Baroque Music
            </p>
            
            {/* Musical Notation */}
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/handel-sonata-notation.png" 
                alt="Handel Keyboard Sonata musical notation showing melodic devices and intervals"
                className="max-w-full h-auto border rounded-lg shadow-sm bg-white p-4"
              />
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Audio Player */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
              🎵 Handel Keyboard Sonata in C major HWV 577
            </h3>
            <div className="flex justify-center">
              <audio 
                controls 
                className="w-full max-w-md"
                preload="metadata"
              >
                <source 
                  src="/audio/Sonata in C major HWV 577 by George Frideric Handel.mp3" 
                  type="audio/mpeg" 
                />
                Your browser does not support the audio element.
              </audio>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
              Listen to the musical examples while answering the questions
            </p>
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
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
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
                      ? 'bg-blue-600 text-white'
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
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
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