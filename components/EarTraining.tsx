import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

interface EarTrainingProps {
  title?: string;
}

type IntervalType = {
  name: string;
  semitones: number;
  shortName: string;
};

const intervals: IntervalType[] = [
  { name: 'Perfect Unison', semitones: 0, shortName: 'P1' },
  { name: 'Minor Second', semitones: 1, shortName: 'm2' },
  { name: 'Major Second', semitones: 2, shortName: 'M2' },
  { name: 'Minor Third', semitones: 3, shortName: 'm3' },
  { name: 'Major Third', semitones: 4, shortName: 'M3' },
  { name: 'Perfect Fourth', semitones: 5, shortName: 'P4' },
  { name: 'Tritone', semitones: 6, shortName: 'TT' },
  { name: 'Perfect Fifth', semitones: 7, shortName: 'P5' },
  { name: 'Minor Sixth', semitones: 8, shortName: 'm6' },
  { name: 'Major Sixth', semitones: 9, shortName: 'M6' },
  { name: 'Minor Seventh', semitones: 10, shortName: 'm7' },
  { name: 'Major Seventh', semitones: 11, shortName: 'M7' },
  { name: 'Perfect Octave', semitones: 12, shortName: 'P8' }
];

const EarTraining: React.FC<EarTrainingProps> = ({ title = 'Ear Training' }) => {
  const [currentInterval, setCurrentInterval] = useState<IntervalType | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [playMode, setPlayMode] = useState<'harmonic' | 'melodic'>('harmonic');
  const [baseNote, setBaseNote] = useState('C4');
  const [isPlaying, setIsPlaying] = useState(false);
  
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const isInitializedRef = useRef(false);

  // Get intervals based on difficulty
  const getIntervalsForDifficulty = useCallback(() => {
    switch (difficulty) {
      case 'easy':
        return intervals.filter(i => [0, 2, 4, 5, 7, 9, 12].includes(i.semitones));
      case 'medium':
        return intervals.filter(i => [0, 1, 2, 3, 4, 5, 7, 8, 9, 12].includes(i.semitones));
      case 'hard':
        return intervals;
      default:
        return intervals;
    }
  }, [difficulty]);

  // Initialize Tone.js
  const initializeTone = useCallback(async () => {
    if (isInitializedRef.current) return;
    
    try {
      await Tone.start();
      
      synthRef.current = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: 'sine'
        },
        envelope: {
          attack: 0.1,
          decay: 0.3,
          sustain: 0.4,
          release: 1
        }
      }).toDestination();
      
      isInitializedRef.current = true;
    } catch (error) {
      console.error('Failed to initialize Tone.js:', error);
    }
  }, []);

  // Generate new interval
  const generateNewInterval = useCallback(() => {
    const availableIntervals = getIntervalsForDifficulty();
    const randomInterval = availableIntervals[Math.floor(Math.random() * availableIntervals.length)];
    
    // Generate random base note (C3 to C5)
    const baseNotes = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    const randomBaseNote = baseNotes[Math.floor(Math.random() * baseNotes.length)];
    
    setCurrentInterval(randomInterval);
    setBaseNote(randomBaseNote);
    setSelectedAnswer(null);
    setShowAnswer(false);
  }, [getIntervalsForDifficulty]);

  // Play interval
  const playInterval = useCallback(async () => {
    if (!currentInterval) return;
    
    if (!isInitializedRef.current) {
      await initializeTone();
    }
    
    if (!synthRef.current) return;
    
    setIsPlaying(true);
    
    try {
      const baseFreq = Tone.Frequency(baseNote).toFrequency();
      const intervalFreq = baseFreq * Math.pow(2, currentInterval.semitones / 12);
      const intervalNote = Tone.Frequency(intervalFreq).toNote();
      
      if (playMode === 'harmonic') {
        // Play both notes simultaneously
        synthRef.current.triggerAttackRelease([baseNote, intervalNote], '2n');
      } else {
        // Play notes sequentially
        synthRef.current.triggerAttackRelease(baseNote, '1n');
        setTimeout(() => {
          synthRef.current?.triggerAttackRelease(intervalNote, '1n');
        }, 800);
      }
    } catch (error) {
      console.error('Error playing interval:', error);
    }
    
    setTimeout(() => setIsPlaying(false), playMode === 'harmonic' ? 2000 : 3000);
  }, [currentInterval, baseNote, playMode, initializeTone]);

  // Handle answer selection
  const handleAnswerSelect = useCallback((intervalName: string) => {
    if (showAnswer) return;
    
    setSelectedAnswer(intervalName);
    setShowAnswer(true);
    
    const isCorrect = intervalName === currentInterval?.name;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  }, [currentInterval, showAnswer]);

  // Reset score
  const resetScore = useCallback(() => {
    setScore({ correct: 0, total: 0 });
  }, []);

  // Initialize with first interval
  useEffect(() => {
    generateNewInterval();
  }, [generateNewInterval]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []);

  const availableIntervals = getIntervalsForDifficulty();
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg shadow-md border border-green-200 dark:border-green-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-green-600 dark:text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-green-800 dark:text-green-200">{title}</span>
        </div>
        
        <div className="text-sm text-green-600 dark:text-green-300">
          Interval Recognition
        </div>
      </div>

      {/* Score Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 border border-green-200 dark:border-green-700">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-green-800 dark:text-green-200">
            Score: {score.correct}/{score.total}
          </div>
          <div className="text-lg font-semibold text-green-600 dark:text-green-400">
            Accuracy: {accuracy}%
          </div>
          <button
            onClick={resetScore}
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-2">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
            className="w-full p-2 border border-green-300 dark:border-green-600 rounded bg-white dark:bg-gray-800 text-green-900 dark:text-green-100"
          >
            <option value="easy">Easy (Perfect & Major intervals)</option>
            <option value="medium">Medium (Most common intervals)</option>
            <option value="hard">Hard (All intervals)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-green-700 dark:text-green-300 mb-2">
            Play Mode
          </label>
          <select
            value={playMode}
            onChange={(e) => setPlayMode(e.target.value as 'harmonic' | 'melodic')}
            className="w-full p-2 border border-green-300 dark:border-green-600 rounded bg-white dark:bg-gray-800 text-green-900 dark:text-green-100"
          >
            <option value="harmonic">Harmonic (Together)</option>
            <option value="melodic">Melodic (Sequential)</option>
          </select>
        </div>
      </div>

      {/* Play Controls */}
      <div className="text-center mb-6">
        <div className="mb-4">
          <div className="text-lg text-green-800 dark:text-green-200 mb-2">
            Listen to the interval and identify it:
          </div>
          <div className="text-sm text-green-600 dark:text-green-400">
            Base note: {baseNote} | Mode: {playMode}
          </div>
        </div>
        
        <button
          onClick={playInterval}
          disabled={isPlaying || !currentInterval}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isPlaying
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isPlaying ? 'Playing...' : 'Play Interval'}
        </button>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {availableIntervals.map((interval) => {
          const isSelected = selectedAnswer === interval.name;
          const isCorrect = showAnswer && interval.name === currentInterval?.name;
          const isWrong = showAnswer && isSelected && interval.name !== currentInterval?.name;
          
          return (
            <button
              key={interval.name}
              onClick={() => handleAnswerSelect(interval.name)}
              disabled={showAnswer}
              className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                isCorrect
                  ? 'bg-green-500 border-green-600 text-white'
                  : isWrong
                  ? 'bg-red-500 border-red-600 text-white'
                  : isSelected
                  ? 'bg-green-100 border-green-300 text-green-800 dark:bg-green-800 dark:text-green-100'
                  : 'bg-white dark:bg-gray-800 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20'
              } ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="font-semibold">{interval.shortName}</div>
              <div className="text-xs mt-1">{interval.name}</div>
            </button>
          );
        })}
      </div>

      {/* Answer Feedback */}
      {showAnswer && currentInterval && (
        <div className={`p-4 rounded-lg mb-4 ${
          selectedAnswer === currentInterval.name
            ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
            : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700'
        }`}>
          <div className={`font-semibold mb-2 ${
            selectedAnswer === currentInterval.name
              ? 'text-green-800 dark:text-green-200'
              : 'text-red-800 dark:text-red-200'
          }`}>
            {selectedAnswer === currentInterval.name ? '✓ Correct!' : '✗ Incorrect'}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            The correct answer is: <strong>{currentInterval.name} ({currentInterval.shortName})</strong>
            <br />
            Semitones: {currentInterval.semitones}
          </div>
        </div>
      )}

      {/* Next Question */}
      {showAnswer && (
        <div className="text-center">
          <button
            onClick={generateNewInterval}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
          >
            Next Interval
          </button>
        </div>
      )}
      
      <div className="mt-6 text-xs text-green-600 dark:text-green-400 space-y-1">
        <div className="font-medium">Features:</div>
        <ul className="text-green-500 dark:text-green-300 space-y-0.5">
          <li>• Progressive difficulty levels</li>
          <li>• Harmonic and melodic intervals</li>
          <li>• Score tracking and accuracy</li>
          <li>• Random note generation</li>
        </ul>
      </div>
    </div>
  );
};

export default EarTraining;