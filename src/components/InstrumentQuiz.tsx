import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

// Icons as inline SVG components
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.236 4.53L7.53 10.23a.75.75 0 0 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
  </svg>
)

const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
  </svg>
)

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
  </svg>
)

const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 1ZM5.05 3.05a.75.75 0 0 1 1.06 0l1.062 1.06A.75.75 0 1 1 6.11 5.173L5.05 4.11a.75.75 0 0 1 0-1.06Zm9.9 0a.75.75 0 0 1 0 1.06l-1.06 1.062a.75.75 0 0 1-1.062-1.061L13.94 3.05a.75.75 0 0 1 1.06 0ZM3 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 3 8Zm11 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 14 8Zm-6.828 2.828a.75.75 0 0 1 0 1.061L6.11 12.95a.75.75 0 0 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.061 0Zm3.594-3.317a.75.75 0 0 0-1.37.364l-.492 6.861a.75.75 0 0 0 1.204.65l1.043-.799.985 3.678a.75.75 0 0 0 1.45-.388l-.978-3.646 1.292.204a.75.75 0 0 0 .74-1.16l-3.874-5.764Z" clipRule="evenodd" />
  </svg>
)

interface QuizQuestion {
  id: string
  question: string
  question_zh?: string
  options: Array<{
    id: string
    text: string
    text_zh?: string
  }>
  correctAnswer: string
  explanation?: string
  explanation_zh?: string
  difficulty: 'easy' | 'medium' | 'hard'
}

interface QuizResult {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
  timeSpent: number
}

interface InstrumentQuizProps {
  instrumentName: string
  instrumentName_zh?: string
  questions: QuizQuestion[]
  onQuizComplete?: (results: QuizResult[], score: number, timeSpent: number) => void
  onQuizExit?: () => void
}

export default function InstrumentQuiz({ 
  instrumentName, 
  instrumentName_zh, 
  questions, 
  onQuizComplete, 
  onQuizExit 
}: InstrumentQuizProps) {
  const { language } = useLanguage()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [startTime] = useState(Date.now())
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [timeSpent, setTimeSpent] = useState(0)

  const translations = {
    en: {
      quiz: 'Quiz',
      question: 'Question',
      of: 'of',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish Quiz',
      results: 'Quiz Results',
      score: 'Your Score',
      correct: 'Correct',
      incorrect: 'Incorrect',
      timeSpent: 'Time Spent',
      minutes: 'minutes',
      seconds: 'seconds',
      retake: 'Retake Quiz',
      exit: 'Exit Quiz',
      explanation: 'Explanation',
      difficulty: 'Difficulty',
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      congratulations: 'Congratulations!',
      goodJob: 'Good job!',
      keepPracticing: 'Keep practicing!',
      excellent: 'Excellent work!',
      wellDone: 'Well done!'
    },
    'en-zh': {
      quiz: 'Quiz / 测验',
      question: 'Question / 问题',
      of: 'of / 共',
      next: 'Next / 下一题',
      previous: 'Previous / 上一题',
      finish: 'Finish Quiz / 完成测验',
      results: 'Quiz Results / 测验结果',
      score: 'Your Score / 你的分数',
      correct: 'Correct / 正确',
      incorrect: 'Incorrect / 错误',
      timeSpent: 'Time Spent / 用时',
      minutes: 'minutes / 分钟',
      seconds: 'seconds / 秒',
      retake: 'Retake Quiz / 重新测验',
      exit: 'Exit Quiz / 退出测验',
      explanation: 'Explanation / 解释',
      difficulty: 'Difficulty / 难度',
      easy: 'Easy / 简单',
      medium: 'Medium / 中等',
      hard: 'Hard / 困难',
      congratulations: 'Congratulations! / 恭喜！',
      goodJob: 'Good job! / 做得好！',
      keepPracticing: 'Keep practicing! / 继续练习！',
      excellent: 'Excellent work! / 出色的工作！',
      wellDone: 'Well done! / 干得好！'
    }
  }

  const t = translations[language] || translations.en

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const isFirstQuestion = currentQuestionIndex === 0

  useEffect(() => {
    setQuestionStartTime(Date.now())
  }, [currentQuestionIndex])

  const getDisplayText = (text: string, textZh?: string) => {
    return language === 'en-zh' && textZh ? `${text} / ${textZh}` : text
  }

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerId
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const calculateResults = (): QuizResult[] => {
    const endTime = Date.now()
    const totalTime = endTime - startTime
    setTimeSpent(totalTime)

    return questions.map(question => {
      const selectedAnswer = selectedAnswers[question.id]
      const isCorrect = selectedAnswer === question.correctAnswer
      
      return {
        questionId: question.id,
        selectedAnswer: selectedAnswer || '',
        isCorrect,
        timeSpent: totalTime / questions.length // Average time per question
      }
    })
  }

  const handleFinishQuiz = () => {
    const results = calculateResults()
    setQuizResults(results)
    setShowResults(true)
    
    const score = results.filter(r => r.isCorrect).length
    onQuizComplete?.(results, score, timeSpent)
  }

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setQuizResults([])
    setQuestionStartTime(Date.now())
  }

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100
    
    if (percentage >= 90) return t.excellent
    if (percentage >= 80) return t.congratulations
    if (percentage >= 70) return t.wellDone
    if (percentage >= 60) return t.goodJob
    return t.keepPracticing
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20'
      case 'hard': return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20'
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20'
    }
  }

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    
    if (minutes > 0) {
      return `${minutes} ${t.minutes} ${seconds} ${t.seconds}`
    }
    return `${seconds} ${t.seconds}`
  }

  if (showResults) {
    const score = quizResults.filter(r => r.isCorrect).length
    const total = questions.length

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <TrophyIcon className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t.results}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {getDisplayText(instrumentName, instrumentName_zh)}
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {score}/{total}
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              {t.score}: {Math.round((score / total) * 100)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <ClockIcon className="w-4 h-4 inline mr-1" />
              {t.timeSpent}: {formatTime(timeSpent)}
            </div>
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {getScoreMessage(score, total)}
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {questions.map((question, index) => {
            const result = quizResults.find(r => r.questionId === question.id)
            const isCorrect = result?.isCorrect || false
            const selectedOption = question.options.find(opt => opt.id === result?.selectedAnswer)
            const correctOption = question.options.find(opt => opt.id === question.correctAnswer)

            return (
              <div key={question.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {t.question} {index + 1}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                        {t[question.difficulty as keyof typeof t]}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      {getDisplayText(question.question, question.question_zh)}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {isCorrect ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  {selectedOption && (
                    <div className={`p-2 rounded ${isCorrect ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'}`}>
                      <span className="text-sm font-medium">
                        {isCorrect ? t.correct : t.incorrect}:
                      </span>
                      <span className="ml-2 text-sm">
                        {getDisplayText(selectedOption.text, selectedOption.text_zh)}
                      </span>
                    </div>
                  )}
                  
                  {!isCorrect && correctOption && (
                    <div className="p-2 rounded bg-green-100 dark:bg-green-900/20">
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        {t.correct}:
                      </span>
                      <span className="ml-2 text-sm text-green-700 dark:text-green-300">
                        {getDisplayText(correctOption.text, correctOption.text_zh)}
                      </span>
                    </div>
                  )}
                </div>

                {question.explanation && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <span className="font-medium">{t.explanation}:</span>
                    <span className="ml-2">
                      {getDisplayText(question.explanation, question.explanation_zh)}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleRetakeQuiz}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
          >
            {t.retake}
          </button>
          <button
            onClick={onQuizExit}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium"
          >
            {t.exit}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t.quiz}: {getDisplayText(instrumentName, instrumentName_zh)}
          </h2>
          <button
            onClick={onQuizExit}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>{t.question} {currentQuestionIndex + 1} {t.of} {questions.length}</span>
            <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
            {t[currentQuestion.difficulty as keyof typeof t]}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {getDisplayText(currentQuestion.question, currentQuestion.question_zh)}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestion.id] === option.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedAnswers[currentQuestion.id] === option.id
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}>
                  {selectedAnswers[currentQuestion.id] === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                  )}
                </div>
                <span className="text-gray-900 dark:text-white">
                  {getDisplayText(option.text, option.text_zh)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={isFirstQuestion}
          className={`px-6 py-3 rounded-lg font-medium ${
            isFirstQuestion
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600'
              : 'bg-gray-600 hover:bg-gray-700 text-white'
          }`}
        >
          {t.previous}
        </button>

        {isLastQuestion ? (
          <button
            onClick={handleFinishQuiz}
            disabled={!selectedAnswers[currentQuestion.id]}
            className={`px-6 py-3 rounded-lg font-medium ${
              !selectedAnswers[currentQuestion.id]
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {t.finish}
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestion.id]}
            className={`px-6 py-3 rounded-lg font-medium ${
              !selectedAnswers[currentQuestion.id]
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {t.next}
          </button>
        )}
      </div>
    </div>
  )
}