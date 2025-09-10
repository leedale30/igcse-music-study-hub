import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

interface BemolEarTrainingProps {
  title?: string;
}

type ScaleDegree = {
  name: string;
  degree: number;
  solfege: string;
  semitones: number;
};

const scaleDegreesC: ScaleDegree[] = [
  { name: 'Do (Tonic)', degree: 1, solfege: 'Do', semitones: 0 },
  { name: 'Re', degree: 2, solfege: 'Re', semitones: 2 },
  { name: 'Mi', degree: 3, solfege: 'Mi', semitones: 4 },
  { name: 'Fa', degree: 4, solfege: 'Fa', semitones: 5 },
  { name: 'Sol (Dominant)', degree: 5, solfege: 'Sol', semitones: 7 },
  { name: 'La', degree: 6, solfege: 'La', semitones: 9 },
  { name: 'Ti (Leading Tone)', degree: 7, solfege: 'Ti', semitones: 11 }
];

const keys = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'F', 'Bb', 'Eb', 'Ab', 'Db'];

const BemolEarTraining: React.FC<BemolEarTrainingProps> = ({ title = 'Functional Ear Training' }) => {
  const [currentKey, setCurrentKey] = useState('C');
  const [currentDegree, setCurrentDegree] = useState<ScaleDegree | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [playWithContext, setPlayWithContext] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const isInitializedRef = useRef(false);

  // Get scale degrees based on difficulty
  const getDegreesForDifficulty = useCallback(() => {
    switch (difficulty) {
      case 'beginner':
        return scaleDegreesC.filter(d => [1, 3, 5].includes(d.degree)); // Do, Mi, Sol
      case 'intermediate':
        return scaleDegreesC.filter(d => [1, 2, 3, 5, 6].includes(d.degree)); // Do, Re, Mi, Sol, La
      case 'advanced':
        return scaleDegreesC; // All degrees
      default:
        return scaleDegreesC;
    }
  }, [difficulty]);

  // Initialize Tone.js
  const initializeTone = useCallback(async () => {
    if (isInitializedRef.current) return;
    
    try {
      await Tone.start();
      
      synthRef.current = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: 'triangle'
        },
        envelope: {
          attack: 0.1,
          decay: 0.3,
          sustain: 0.4,
          release: 1.2
        }
      }).toDestination();
      
      isInitializedRef.current = true;
    } catch (error) {
      console.error('Failed to initialize Tone.js:', error);
    }
  }, []);

  // Convert key and degree to actual note
  const getNote = useCallback((key: string, degree: ScaleDegree, octave: number = 4): string => {
    const keyOffsets: { [key: string]: number } = {
      'C': 0, 'G': 7, 'D': 2, 'A': 9, 'E': 4, 'B': 11, 'F#': 6,
      'F': 5, 'Bb': 10, 'Eb': 3, 'Ab': 8, 'Db': 1
    };
    
    const baseNote = keyOffsets[key] || 0;
    const noteNumber = (baseNote + degree.semitones) % 12;
    const actualOctave = octave + Math.floor((baseNote + degree.semitones) / 12);
    
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    return `${noteNames[noteNumber]}${actualOctave}`;
  }, []);

  // Generate new exercise
  const generateNewExercise = useCallback(() => {
    const availableDegrees = getDegreesForDifficulty();
    const randomDegree = availableDegrees[Math.floor(Math.random() * availableDegrees.length)];
    
    setCurrentDegree(randomDegree);
    setSelectedAnswer(null);
    setShowAnswer(false);
  }, [getDegreesForDifficulty]);

  // Play the exercise
  const playExercise = useCallback(async () => {
    if (!currentDegree) return;
    
    if (!isInitializedRef.current) {
      await initializeTone();
    }
    
    if (!synthRef.current) return;
    
    setIsPlaying(true);
    
    try {
      if (playWithContext) {
        // Play tonic chord first for context
        const tonic = getNote(currentKey, scaleDegreesC[0], 4); // Do
        const third = getNote(currentKey, scaleDegreesC[2], 4); // Mi
        const fifth = getNote(currentKey, scaleDegreesC[4], 4); // Sol
        
        synthRef.current.triggerAttackRelease([tonic, third, fifth], '1n');
        
        // Wait then play the target note
        setTimeout(() => {
          const targetNote = getNote(currentKey, currentDegree, 4);
          synthRef.current?.triggerAttackRelease(targetNote, '1n');
        }, 1200);
      } else {
        // Play just the target note
        const targetNote = getNote(currentKey, currentDegree, 4);
        synthRef.current.triggerAttackRelease(targetNote, '1n');
      }
    } catch (error) {
      console.error('Error playing exercise:', error);
    }
    
    setTimeout(() => setIsPlaying(false), playWithContext ? 2500 : 1200);
  }, [currentDegree, currentKey, playWithContext, getNote, initializeTone]);

  // Handle answer selection
  const handleAnswerSelect = useCallback((degree: number) => {
    if (showAnswer) return;
    
    setSelectedAnswer(degree);
    setShowAnswer(true);
    
    const isCorrect = degree === currentDegree?.degree;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }
    } else {
      setStreak(0);
    }
  }, [currentDegree, showAnswer, streak, bestStreak]);

  // Reset score
  const resetScore = useCallback(() => {
    setScore({ correct: 0, total: 0 });
    setStreak(0);
  }, []);

  // Initialize with first exercise
  useEffect(() => {
    generateNewExercise();
  }, [generateNewExercise]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []);

  const availableDegrees = getDegreesForDifficulty();
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg shadow-md border border-teal-200 dark:border-teal-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-teal-600 dark:text-teal-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-teal-800 dark:text-teal-200">{title}</span>
        </div>
        
        <div className="text-sm text-teal-600 dark:text-teal-300">
          Inspired by Bemol
        </div>
      </div>

      {/* Score Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 border border-teal-200 dark:border-teal-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-teal-800 dark:text-teal-200">
              {score.correct}/{score.total}
            </div>
            <div className="text-xs text-teal-600 dark:text-teal-400">Score</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-teal-600 dark:text-teal-400">
              {accuracy}%
            </div>
            <div className="text-xs text-teal-600 dark:text-teal-400">Accuracy</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">
              {streak}
            </div>
            <div className="text-xs text-teal-600 dark:text-teal-400">Streak</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">
              {bestStreak}
            </div>
            <div className="text-xs text-teal-600 dark:text-teal-400">Best</div>
          </div>
        </div>
        <button
          onClick={resetScore}
          className="mt-3 w-full px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white rounded text-sm transition-colors"
        >
          Reset Statistics
        </button>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
            Key
          </label>
          <select
            value={currentKey}
            onChange={(e) => setCurrentKey(e.target.value)}
            className="w-full p-2 border border-teal-300 dark:border-teal-600 rounded bg-white dark:bg-gray-800 text-teal-900 dark:text-teal-100"
          >
            {keys.map(key => (
              <option key={key} value={key}>{key} Major</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as 'beginner' | 'intermediate' | 'advanced')}
            className="w-full p-2 border border-teal-300 dark:border-teal-600 rounded bg-white dark:bg-gray-800 text-teal-900 dark:text-teal-100"
          >
            <option value="beginner">Beginner (Do-Mi-Sol)</option>
            <option value="intermediate">Intermediate (5 degrees)</option>
            <option value="advanced">Advanced (All degrees)</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <label className="flex items-center space-x-2 text-sm text-teal-700 dark:text-teal-300">
            <input
              type="checkbox"
              checked={playWithContext}
              onChange={(e) => setPlayWithContext(e.target.checked)}
              className="rounded"
            />
            <span>Play with tonic context</span>
          </label>
        </div>
      </div>

      {/* Exercise Display */}
      <div className="text-center mb-6">
        <div className="mb-4">
          <div className="text-lg text-teal-800 dark:text-teal-200 mb-2">
            Listen and identify the scale degree in {currentKey} Major:
          </div>
          <div className="text-sm text-teal-600 dark:text-teal-400">
            {playWithContext ? 'You will hear the tonic chord followed by the target note' : 'You will hear only the target note'}
          </div>
        </div>
        
        <button
          onClick={playExercise}
          disabled={isPlaying || !currentDegree}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isPlaying
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-teal-500 hover:bg-teal-600 text-white'
          }`}
        >
          {isPlaying ? 'Playing...' : 'Play Exercise'}
        </button>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {availableDegrees.map((degree) => {
          const isSelected = selectedAnswer === degree.degree;
          const isCorrect = showAnswer && degree.degree === currentDegree?.degree;
          const isWrong = showAnswer && isSelected && degree.degree !== currentDegree?.degree;
          
          return (
            <button
              key={degree.degree}
              onClick={() => handleAnswerSelect(degree.degree)}
              disabled={showAnswer}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                isCorrect
                  ? 'bg-green-500 border-green-600 text-white'
                  : isWrong
                  ? 'bg-red-500 border-red-600 text-white'
                  : isSelected
                  ? 'bg-teal-100 border-teal-300 text-teal-800 dark:bg-teal-800 dark:text-teal-100'
                  : 'bg-white dark:bg-gray-800 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20'
              } ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="font-bold text-lg">{degree.degree}</div>
              <div className="text-sm">{degree.solfege}</div>
              <div className="text-xs mt-1 opacity-75">{degree.name}</div>
            </button>
          );
        })}
      </div>

      {/* Answer Feedback */}
      {showAnswer && currentDegree && (
        <div className={`p-4 rounded-lg mb-4 ${
          selectedAnswer === currentDegree.degree
            ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
            : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700'
        }`}>
          <div className={`font-semibold mb-2 ${
            selectedAnswer === currentDegree.degree
              ? 'text-green-800 dark:text-green-200'
              : 'text-red-800 dark:text-red-200'
          }`}>
            {selectedAnswer === currentDegree.degree ? '✓ Correct!' : '✗ Incorrect'}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            The correct answer is: <strong>{currentDegree.degree} - {currentDegree.solfege} ({currentDegree.name})</strong>
            <br />
            In {currentKey} Major, this is the note: <strong>{getNote(currentKey, currentDegree)}</strong>
          </div>
        </div>
      )}

      {/* Next Question */}
      {showAnswer && (
        <div className="text-center">
          <button
            onClick={generateNewExercise}
            className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors"
          >
            Next Exercise
          </button>
        </div>
      )}
      
      <div className="mt-6 text-xs text-teal-600 dark:text-teal-400 space-y-1">
        <div className="font-medium">Functional Ear Training Features:</div>
        <ul className="text-teal-500 dark:text-teal-300 space-y-0.5">
          <li>• Scale degree recognition in tonal context</li>
          <li>• Progressive difficulty with solfege system</li>
          <li>• Multiple keys and tonic context option</li>
          <li>• Streak tracking and detailed statistics</li>
        </ul>
      </div>
    </div>
  );
};

export default BemolEarTraining;