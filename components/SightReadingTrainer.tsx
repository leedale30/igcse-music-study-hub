import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

interface SightReadingTrainerProps {
  title?: string;
}

type Note = {
  name: string;
  octave: number;
  position: number; // Staff position (0 = middle C)
  accidental?: 'sharp' | 'flat';
};

const trebleClefNotes: Note[] = [
  { name: 'C', octave: 4, position: 0 },
  { name: 'D', octave: 4, position: 1 },
  { name: 'E', octave: 4, position: 2 },
  { name: 'F', octave: 4, position: 3 },
  { name: 'G', octave: 4, position: 4 },
  { name: 'A', octave: 4, position: 5 },
  { name: 'B', octave: 4, position: 6 },
  { name: 'C', octave: 5, position: 7 },
  { name: 'D', octave: 5, position: 8 },
  { name: 'E', octave: 5, position: 9 },
  { name: 'F', octave: 5, position: 10 },
  { name: 'G', octave: 5, position: 11 }
];

const SightReadingTrainer: React.FC<SightReadingTrainerProps> = ({ title = 'Sight Reading Trainer' }) => {
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [clef, setClef] = useState<'treble' | 'bass'>('treble');
  const [isPlaying, setIsPlaying] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showNoteNames, setShowNoteNames] = useState(false);
  
  const synthRef = useRef<Tone.Synth | null>(null);
  const isInitializedRef = useRef(false);

  // Get notes based on difficulty
  const getNotesForDifficulty = useCallback(() => {
    switch (difficulty) {
      case 'beginner':
        return trebleClefNotes.filter(n => n.position >= 2 && n.position <= 6); // E4 to B4
      case 'intermediate':
        return trebleClefNotes.filter(n => n.position >= 0 && n.position <= 8); // C4 to D5
      case 'advanced':
        return trebleClefNotes; // All notes
      default:
        return trebleClefNotes;
    }
  }, [difficulty]);

  // Initialize Tone.js
  const initializeTone = useCallback(async () => {
    if (isInitializedRef.current) return;
    
    try {
      await Tone.start();
      
      synthRef.current = new Tone.Synth({
        oscillator: {
          type: 'triangle'
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

  // Generate new note
  const generateNewNote = useCallback(() => {
    const availableNotes = getNotesForDifficulty();
    const randomNote = availableNotes[Math.floor(Math.random() * availableNotes.length)];
    
    setCurrentNote(randomNote);
    setSelectedNote(null);
    setShowAnswer(false);
  }, [getNotesForDifficulty]);

  // Play note
  const playNote = useCallback(async () => {
    if (!currentNote) return;
    
    if (!isInitializedRef.current) {
      await initializeTone();
    }
    
    if (!synthRef.current) return;
    
    setIsPlaying(true);
    
    try {
      const noteName = `${currentNote.name}${currentNote.octave}`;
      synthRef.current.triggerAttackRelease(noteName, '1n');
    } catch (error) {
      console.error('Error playing note:', error);
    }
    
    setTimeout(() => setIsPlaying(false), 1200);
  }, [currentNote, initializeTone]);

  // Handle answer selection
  const handleAnswerSelect = useCallback((noteName: string) => {
    if (showAnswer) return;
    
    setSelectedNote(noteName);
    setShowAnswer(true);
    
    const isCorrect = noteName === currentNote?.name;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    
    if (isCorrect) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  }, [currentNote, showAnswer]);

  // Reset score
  const resetScore = useCallback(() => {
    setScore({ correct: 0, total: 0 });
    setStreak(0);
  }, []);

  // Initialize with first note
  useEffect(() => {
    generateNewNote();
  }, [generateNewNote]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []);

  // Render staff with note
  const renderStaff = () => {
    if (!currentNote) return null;
    
    const staffLines = [0, 1, 2, 3, 4]; // 5 staff lines
    const noteY = 200 - (currentNote.position * 10); // Position from bottom
    
    return (
      <div className="relative bg-white dark:bg-gray-100 rounded-lg p-8 border border-gray-300">
        <svg viewBox="0 0 400 300" className="w-full h-64">
          {/* Staff lines */}
          {staffLines.map((line, index) => (
            <line
              key={line}
              x1="50"
              y1={50 + index * 20}
              x2="350"
              y2={50 + index * 20}
              stroke="#000"
              strokeWidth="1"
            />
          ))}
          
          {/* Treble clef */}
          <text
            x="60"
            y="90"
            fontSize="48"
            fill="#000"
            fontFamily="serif"
          >
            𝄞
          </text>
          
          {/* Ledger lines for notes outside staff */}
          {currentNote.position < 2 && (
            <line
              x1="180"
              y1="130"
              x2="220"
              y2="130"
              stroke="#000"
              strokeWidth="1"
            />
          )}
          {currentNote.position > 10 && (
            <line
              x1="180"
              y1="30"
              x2="220"
              y2="30"
              stroke="#000"
              strokeWidth="1"
            />
          )}
          
          {/* Note */}
          <ellipse
            cx="200"
            cy={Math.max(30, Math.min(130, 130 - (currentNote.position - 2) * 10))}
            rx="8"
            ry="6"
            fill="#000"
            transform={`rotate(-20 200 ${Math.max(30, Math.min(130, 130 - (currentNote.position - 2) * 10))})`}
          />
          
          {/* Note name (if enabled) */}
          {showNoteNames && (
            <text
              x="200"
              y={Math.max(30, Math.min(130, 130 - (currentNote.position - 2) * 10)) + 25}
              fontSize="12"
              fill="#666"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              {currentNote.name}{currentNote.octave}
            </text>
          )}
        </svg>
      </div>
    );
  };

  const availableNotes = getNotesForDifficulty();
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
  const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  return (
    <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-lg shadow-md border border-rose-200 dark:border-rose-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-rose-600 dark:text-rose-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-rose-800 dark:text-rose-200">{title}</span>
        </div>
        
        <div className="text-sm text-rose-600 dark:text-rose-300">
          Note Recognition
        </div>
      </div>

      {/* Score Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 border border-rose-200 dark:border-rose-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-rose-800 dark:text-rose-200">
              {score.correct}/{score.total}
            </div>
            <div className="text-xs text-rose-600 dark:text-rose-400">Score</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-rose-600 dark:text-rose-400">
              {accuracy}%
            </div>
            <div className="text-xs text-rose-600 dark:text-rose-400">Accuracy</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">
              {streak}
            </div>
            <div className="text-xs text-rose-600 dark:text-rose-400">Streak</div>
          </div>
        </div>
        <button
          onClick={resetScore}
          className="mt-3 w-full px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white rounded text-sm transition-colors"
        >
          Reset Score
        </button>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-rose-700 dark:text-rose-300 mb-2">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as 'beginner' | 'intermediate' | 'advanced')}
            className="w-full p-2 border border-rose-300 dark:border-rose-600 rounded bg-white dark:bg-gray-800 text-rose-900 dark:text-rose-100"
          >
            <option value="beginner">Beginner (E-B)</option>
            <option value="intermediate">Intermediate (C-D)</option>
            <option value="advanced">Advanced (All notes)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-rose-700 dark:text-rose-300 mb-2">
            Clef
          </label>
          <select
            value={clef}
            onChange={(e) => setClef(e.target.value as 'treble' | 'bass')}
            className="w-full p-2 border border-rose-300 dark:border-rose-600 rounded bg-white dark:bg-gray-800 text-rose-900 dark:text-rose-100"
          >
            <option value="treble">Treble Clef</option>
            <option value="bass">Bass Clef (Coming Soon)</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <label className="flex items-center space-x-2 text-sm text-rose-700 dark:text-rose-300">
            <input
              type="checkbox"
              checked={showNoteNames}
              onChange={(e) => setShowNoteNames(e.target.checked)}
              className="rounded"
            />
            <span>Show note names</span>
          </label>
        </div>
      </div>

      {/* Staff Display */}
      <div className="mb-6">
        <div className="text-center mb-4">
          <div className="text-lg text-rose-800 dark:text-rose-200 mb-2">
            Identify this note:
          </div>
        </div>
        
        {renderStaff()}
        
        <div className="text-center mt-4">
          <button
            onClick={playNote}
            disabled={isPlaying || !currentNote}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              isPlaying
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-rose-500 hover:bg-rose-600 text-white'
            }`}
          >
            {isPlaying ? 'Playing...' : 'Play Note'}
          </button>
        </div>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {noteNames.map((noteName) => {
          const isSelected = selectedNote === noteName;
          const isCorrect = showAnswer && noteName === currentNote?.name;
          const isWrong = showAnswer && isSelected && noteName !== currentNote?.name;
          
          return (
            <button
              key={noteName}
              onClick={() => handleAnswerSelect(noteName)}
              disabled={showAnswer}
              className={`p-3 rounded-lg border-2 transition-all duration-200 font-bold ${
                isCorrect
                  ? 'bg-green-500 border-green-600 text-white'
                  : isWrong
                  ? 'bg-red-500 border-red-600 text-white'
                  : isSelected
                  ? 'bg-rose-100 border-rose-300 text-rose-800 dark:bg-rose-800 dark:text-rose-100'
                  : 'bg-white dark:bg-gray-800 border-rose-200 dark:border-rose-700 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20'
              } ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {noteName}
            </button>
          );
        })}
      </div>

      {/* Answer Feedback */}
      {showAnswer && currentNote && (
        <div className={`p-4 rounded-lg mb-4 ${
          selectedNote === currentNote.name
            ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
            : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700'
        }`}>
          <div className={`font-semibold mb-2 ${
            selectedNote === currentNote.name
              ? 'text-green-800 dark:text-green-200'
              : 'text-red-800 dark:text-red-200'
          }`}>
            {selectedNote === currentNote.name ? '✓ Correct!' : '✗ Incorrect'}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            The correct answer is: <strong>{currentNote.name}{currentNote.octave}</strong>
          </div>
        </div>
      )}

      {/* Next Question */}
      {showAnswer && (
        <div className="text-center">
          <button
            onClick={generateNewNote}
            className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-semibold transition-colors"
          >
            Next Note
          </button>
        </div>
      )}
      
      <div className="mt-6 text-xs text-rose-600 dark:text-rose-400 space-y-1">
        <div className="font-medium">Sight Reading Features:</div>
        <ul className="text-rose-500 dark:text-rose-300 space-y-0.5">
          <li>• Note recognition on treble clef staff</li>
          <li>• Progressive difficulty levels</li>
          <li>• Audio playback for ear training</li>
          <li>• Score tracking and streak counting</li>
        </ul>
      </div>
    </div>
  );
};

export default SightReadingTrainer;