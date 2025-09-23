import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import QuizComponent from '../../components/QuizComponent'
import { bassoonQuiz } from '../data/bassoonQuiz'

// Icons as inline SVG components
const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .98 0l4.25 3.5a.75.75 0 0 1 0 1.136l-4.25 3.5a.75.75 0 0 1-.98-.568V7.658a.75.75 0 0 1 0-.568Z" clipRule="evenodd" />
  </svg>
)

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0ZM7.25 5.75A.75.75 0 0 0 6.5 6.5v7a.75.75 0 0 0 1.5 0v-7A.75.75 0 0 0 7.25 5.75Zm5 0A.75.75 0 0 0 11.5 6.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
  </svg>
)

const VolumeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V4.75Z" />
    <path d="M8.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V7Z" />
    <path d="M5.75 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" />
  </svg>
)

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>
)

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
)

const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5c.71 0 1.396.098 2.046.282A1 1 0 0 0 18.5 14.5v-11a1 1 0 0 0-.728-.948A9.08 9.08 0 0 0 15 2c-1.982 0-3.83.519-5.25 1.431V16.82ZM9.25 3.431A9.08 9.08 0 0 0 4 2c-1.982 0-3.83.519-5.25 1.431A1 1 0 0 0-.5 4.5v11a1 1 0 0 0 1.454.948A7.462 7.462 0 0 1 4 15.5c1.982 0 3.83.519 5.25 1.431V3.431Z" />
  </svg>
)

interface InstrumentData {
  id: string
  name: string
  name_zh?: string
  description: string
  description_zh?: string
  family: string
  family_zh?: string
  pitchRange: string
  pitchRange_zh?: string
  material: string
  material_zh?: string
  size: string
  size_zh?: string
  origins: string
  origins_zh?: string
  classification: string
  classification_zh?: string
  additionalNotes?: string
  additionalNotes_zh?: string
  audioUrl?: string
  imageUrl?: string
  videoUrl?: string
  previousInstrument?: string
  nextInstrument?: string
}

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
}

interface InstrumentPageProps {
  instrumentData: InstrumentData
  onQuizStart?: () => void
}

export default function InstrumentPage({ instrumentData, onQuizStart }: InstrumentPageProps) {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Simple translations object
  const translations = {
    en: {
      family: 'Family',
      pitch: 'Pitch Range',
      material: 'Material',
      size: 'Size',
      origins: 'Origins',
      classification: 'Classification',
      notes: 'Additional Notes',
      quiz: 'Quiz',
      previous: 'Previous',
      next: 'Next',
      play: 'Play',
      pause: 'Pause',
      volume: 'Volume'
    },
    'en-zh': {
      family: 'Family / 乐器族',
      pitch: 'Pitch Range / 音域',
      material: 'Material / 材质',
      size: 'Size / 尺寸',
      origins: 'Origins / 起源',
      classification: 'Classification / 分类',
      notes: 'Additional Notes / 附加说明',
      quiz: 'Quiz / 测验',
      previous: 'Previous / 上一个',
      next: 'Next / 下一个',
      play: 'Play / 播放',
      pause: 'Pause / 暂停',
      volume: 'Volume / 音量'
    }
  }
  
  const t = translations[language] || translations.en

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const getDisplayText = (text: string, textZh?: string) => {
    return language === 'en-zh' && textZh ? `${text} / ${textZh}` : text
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {getDisplayText(instrumentData.name, instrumentData.name_zh)}
        </h1>
        
        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <button className="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            <ChevronLeftIcon className="w-5 h-5 mr-1" />
            {t.previous}
          </button>
          
          <button className="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {t.next}
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Audio Player */}
      {instrumentData.audioUrl && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <audio ref={audioRef} src={instrumentData.audioUrl} />
          
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlayPause}
              className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
            </button>
            
            <div className="flex-1">
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <VolumeIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Description */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {getDisplayText(instrumentData.description, instrumentData.description_zh)}
          </p>

          {/* Instrument Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.family}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {getDisplayText(instrumentData.family, instrumentData.family_zh)}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.pitch}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {getDisplayText(instrumentData.pitchRange, instrumentData.pitchRange_zh)}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.material}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {getDisplayText(instrumentData.material, instrumentData.material_zh)}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.size}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {getDisplayText(instrumentData.size, instrumentData.size_zh)}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.origins}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {getDisplayText(instrumentData.origins, instrumentData.origins_zh)}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{t.classification}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {getDisplayText(instrumentData.classification, instrumentData.classification_zh)}
              </p>
            </div>

            {instrumentData.additionalNotes && (
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{t.notes}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {getDisplayText(instrumentData.additionalNotes, instrumentData.additionalNotes_zh)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        {instrumentData.imageUrl && (
          <div>
            <img
              src={instrumentData.imageUrl}
              alt={instrumentData.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
      </div>

      {/* Video Section */}
      {instrumentData.videoUrl && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Video / 视频' : 'Video'}
          </h2>
          <div className="aspect-video">
            <iframe
              src={instrumentData.videoUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Quiz Section */}
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpenIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t.quiz}
            </h2>
          </div>
          
          <button
            onClick={() => setShowQuiz(!showQuiz)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            {showQuiz ? 'Hide Quiz' : 'Start Quiz'}
          </button>
        </div>

        {showQuiz && (
          <div className="mt-4">
            {instrumentData.id === 'bassoon' ? (
              <QuizComponent quizData={bassoonQuiz} />
            ) : (
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'en-zh' 
                    ? 'Quiz functionality will be implemented here / 测验功能将在此处实现'
                    : 'Quiz functionality will be implemented here'
                  }
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}