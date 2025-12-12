import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { instrumentsData, InstrumentData } from '../src/data/instrumentsData'
import QuizComponent from '../components/QuizComponent'
import { loadQuizForInstrument } from '../src/utils/quizLoader'
import { generateInstrumentQuiz } from '../src/data/quizGenerator'
import { Quiz } from '../types'

const InstrumentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { language } = useLanguage()
  const navigate = useNavigate()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null)
  const [quizLoading, setQuizLoading] = useState(false)

  const instrument = instrumentsData.find(inst => inst.id === id)

  useEffect(() => {
    if (!instrument) {
      navigate('/instruments')
    }
  }, [instrument, navigate])

  if (!instrument) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {language === 'en-zh' ? '乐器未找到 / Instrument Not Found' : 'Instrument Not Found'}
          </h1>
          <Link
            to="/instruments"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {language === 'en-zh' ? '返回乐器列表 / Back to Instruments' : 'Back to Instruments'}
          </Link>
        </div>
      </div>
    )
  }

  const handleAudioPlay = async () => {
    if (!audioRef.current || !instrument.audioUrl) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error('Audio playback error:', error)
      setAudioError(true)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  const handleAudioError = () => {
    setAudioError(true)
    setIsPlaying(false)
  }

  const handleStartQuiz = async () => {
    if (!instrument) return

    setQuizLoading(true)
    try {
      // Try to load the specific quiz for this instrument
      let quiz = await loadQuizForInstrument(instrument.id)

      // If no specific quiz found, generate a comprehensive one
      if (!quiz) {
        quiz = generateInstrumentQuiz(instrument)
      }

      setCurrentQuiz(quiz)
      setShowQuiz(true)
    } catch (error) {
      console.error('Error loading quiz:', error)
      // Fallback to comprehensive quiz
      const comprehensiveQuiz = generateInstrumentQuiz(instrument)
      setCurrentQuiz(comprehensiveQuiz)
      setShowQuiz(true)
    } finally {
      setQuizLoading(false)
    }
  }

  const PlayIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )

  const PauseIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )

  const VolumeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793l-4-3.2A1 1 0 013 13V7a1 1 0 01.383-.924l4-3.2z" clipRule="evenodd" />
      <path d="M14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" />
    </svg>
  )

  const BackIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )

  const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/instruments"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <BackIcon />
            <span className="ml-2">
              {language === 'en-zh' ? '返回乐器列表 / Back to Instruments' : 'Back to Instruments'}
            </span>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">
                  {language === 'en-zh' && instrument.name_zh
                    ? `${instrument.name_zh} / ${instrument.name}`
                    : instrument.name
                  }
                </h1>
                <div className="flex items-center gap-4 text-blue-100">
                  <span className="bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                    {instrument.family}
                  </span>
                  {instrument.pitchRange && (
                    <span className="text-sm">
                      {language === 'en-zh' ? '音域 / Range' : 'Range'}: {instrument.pitchRange}
                    </span>
                  )}
                </div>
              </div>

              {/* Audio Player */}
              {instrument.audioUrl && !audioError && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleAudioPlay}
                    className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    <span>{isPlaying ?
                      (language === 'en-zh' ? '暂停 / Pause' : 'Pause') :
                      (language === 'en-zh' ? '播放 / Play' : 'Play')
                    }</span>
                  </button>
                  <VolumeIcon />
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Image */}
                {instrument.imageUrl && !imageError && (
                  <section>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img
                        src={instrument.imageUrl}
                        alt={instrument.name}
                        className="w-full h-auto object-contain"
                        onError={() => setImageError(true)}
                      />
                    </div>

                    {/* Audio Player */}
                    {instrument.audioUrl && (
                      <div className="mt-4">
                        <audio
                          controls
                          className="w-full"
                          preload="metadata"
                        >
                          <source src={instrument.audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                  </section>
                )}

                {/* Description */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {language === 'en-zh' ? '简介 / Description' : 'Description'}
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {language === 'en-zh' && instrument.description_zh
                        ? instrument.description_zh
                        : instrument.description
                      }
                    </p>
                  </div>
                </section>

                {/* Origins */}
                {instrument.origins && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      {language === 'en-zh' ? '起源 / Origins' : 'Origins'}
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {language === 'en-zh' && instrument.origins_zh
                          ? instrument.origins_zh
                          : instrument.origins
                        }
                      </p>
                    </div>
                  </section>
                )}

                {/* Video */}
                {instrument.videoUrl && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      {language === 'en-zh' ? '视频演示 / Video Demonstration' : 'Video Demonstration'}
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <iframe
                        src={instrument.videoUrl}
                        title={`${instrument.name} demonstration`}
                        className="w-full h-64 lg:h-96"
                        allowFullScreen
                      />
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Facts */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    {language === 'en-zh' ? '基本信息 / Quick Facts' : 'Quick Facts'}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {language === 'en-zh' ? '乐器族 / Family' : 'Family'}:
                      </span>
                      <span className="ml-2 text-gray-800 dark:text-white">{instrument.family}</span>
                    </div>
                    {instrument.pitchRange && (
                      <div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {language === 'en-zh' ? '音域 / Range' : 'Range'}:
                        </span>
                        <span className="ml-2 text-gray-800 dark:text-white">{instrument.pitchRange}</span>
                      </div>
                    )}
                    {instrument.origins && (
                      <div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {language === 'en-zh' ? '起源地 / Origins' : 'Origins'}:
                        </span>
                        <span className="ml-2 text-gray-800 dark:text-white">
                          {language === 'en-zh' && instrument.origins_zh
                            ? instrument.origins_zh
                            : instrument.origins
                          }
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* External Links */}
                <div className="space-y-3">
                  {instrument.audioUrl && !audioError && (
                    <a
                      href={instrument.audioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <VolumeIcon />
                      <span>{language === 'en-zh' ? '音频文件 / Audio File' : 'Audio File'}</span>
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {instrument.videoUrl && (
                    <a
                      href={instrument.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                      <span>{language === 'en-zh' ? '视频演示 / Video Demo' : 'Video Demo'}</span>
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="mt-8">
          {!showQuiz ? (
            <div className="text-center">
              <button
                onClick={handleStartQuiz}
                disabled={quizLoading}
                className="bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
              >
                {quizLoading
                  ? (language === 'en-zh' ? '加载中... / Loading...' : 'Loading...')
                  : (language === 'en-zh' ? '开始测验 / Start Quiz' : 'Start Quiz')
                }
              </button>
            </div>
          ) : (
            currentQuiz ? (
              <QuizComponent quizData={currentQuiz} />
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'en-zh' ? '正在加载测验... / Loading quiz...' : 'Loading quiz...'}
                </p>
              </div>
            )
          )}
        </div>

        {/* Audio Element */}
        {instrument.audioUrl && (
          <audio
            ref={audioRef}
            onEnded={handleAudioEnded}
            onError={handleAudioError}
            preload="metadata"
          >
            <source src={instrument.audioUrl} type="audio/mpeg" />
            <source src={instrument.audioUrl} type="audio/wav" />
            <source src={instrument.audioUrl} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  )
}

export default InstrumentPage