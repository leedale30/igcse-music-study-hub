import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

interface FallingNotesTrainerProps {
  title?: string;
}

type FallingNote = {
  id: string;
  name: string;
  octave: number;
  x: number;
  y: number;
  speed: number;
  color: string;
  hit: boolean;
};

const noteColors: { [key: string]: string } = {
  'C': '#FF6B6B',
  'D': '#4ECDC4',
  'E': '#45B7D1',
  'F': '#96CEB4',
  'G': '#FFEAA7',
  'A': '#DDA0DD',
  'B': '#98D8C8'
};

const FallingNotesTrainer: React.FC<FallingNotesTrainerProps> = ({ title = 'Falling Notes Trainer' }) => {
  const [notes, setNotes] = useState<FallingNote[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [showLabels, setShowLabels] = useState(true);
  const [gameTime, setGameTime] = useState(0);
  
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const isInitializedRef = useRef(false);
  const gameLoopRef = useRef<number | null>(null);
  const lastNoteTimeRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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
          attack: 0.05,
          decay: 0.2,
          sustain: 0.3,
          release: 0.8
        }
      }).toDestination();
      
      isInitializedRef.current = true;
    } catch (error) {
      console.error('Failed to initialize Tone.js:', error);
    }
  }, []);

  // Get notes based on difficulty
  const getNotesForDifficulty = useCallback(() => {
    switch (difficulty) {
      case 'easy':
        return ['C', 'D', 'E', 'F', 'G'];
      case 'medium':
        return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
      case 'hard':
        return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
      default:
        return ['C', 'D', 'E', 'F', 'G'];
    }
  }, [difficulty]);

  // Generate new falling note
  const generateNote = useCallback(() => {
    const availableNotes = getNotesForDifficulty();
    const noteName = availableNotes[Math.floor(Math.random() * availableNotes.length)];
    const octave = 4;
    
    const newNote: FallingNote = {
      id: Math.random().toString(36).substr(2, 9),
      name: noteName,
      octave: octave,
      x: Math.random() * 300 + 50, // Random x position
      y: -50, // Start above canvas
      speed: speed * (0.5 + Math.random() * 0.5), // Vary speed slightly
      color: noteColors[noteName],
      hit: false
    };
    
    setNotes(prev => [...prev, newNote]);
  }, [getNotesForDifficulty, speed]);

  // Play note sound
  const playNoteSound = useCallback(async (note: FallingNote) => {
    if (!isInitializedRef.current) {
      await initializeTone();
    }
    
    if (!synthRef.current) return;
    
    try {
      const noteName = `${note.name}${note.octave}`;
      synthRef.current.triggerAttackRelease(noteName, '8n');
    } catch (error) {
      console.error('Error playing note:', error);
    }
  }, [initializeTone]);

  // Handle key press
  const handleKeyPress = useCallback((key: string) => {
    if (!isPlaying) return;
    
    const targetZone = 350; // Y position where notes should be hit
    const hitZone = 50; // Tolerance for hitting notes
    
    // Find the closest note to the target zone
    const hittableNotes = notes.filter(note => 
      !note.hit && 
      note.name === key.toUpperCase() &&
      Math.abs(note.y - targetZone) < hitZone
    );
    
    if (hittableNotes.length > 0) {
      // Hit the closest note
      const closestNote = hittableNotes.reduce((closest, current) => 
        Math.abs(current.y - targetZone) < Math.abs(closest.y - targetZone) ? current : closest
      );
      
      // Mark note as hit
      setNotes(prev => prev.map(note => 
        note.id === closestNote.id ? { ...note, hit: true } : note
      ));
      
      // Play sound
      playNoteSound(closestNote);
      
      // Update score and combo
      const accuracy = Math.max(0, 100 - Math.abs(closestNote.y - targetZone));
      const points = Math.round(accuracy * (1 + combo * 0.1));
      
      setScore(prev => prev + points);
      setCombo(prev => {
        const newCombo = prev + 1;
        setMaxCombo(current => Math.max(current, newCombo));
        return newCombo;
      });
    } else {
      // Missed - reset combo
      setCombo(0);
    }
  }, [notes, isPlaying, combo, playNoteSound]);

  // Keyboard event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['c', 'd', 'e', 'f', 'g', 'a', 'b'].includes(key)) {
        e.preventDefault();
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  // Game animation loop
  const animate = useCallback(() => {
    if (!isPlaying) return;
    
    setNotes(prev => {
      return prev
        .map(note => ({ ...note, y: note.y + note.speed * 2 }))
        .filter(note => note.y < 500 && !note.hit); // Remove notes that fell off screen or were hit
    });
    
    // Check for missed notes (passed the target zone)
    setNotes(prev => {
      const missedNotes = prev.filter(note => !note.hit && note.y > 400);
      if (missedNotes.length > 0) {
        setCombo(0); // Reset combo for missed notes
      }
      return prev;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isPlaying]);

  // Game loop for generating notes
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastNote = now - lastNoteTimeRef.current;
      
      // Generate notes based on difficulty
      const noteInterval = difficulty === 'easy' ? 2000 : difficulty === 'medium' ? 1500 : 1000;
      
      if (timeSinceLastNote > noteInterval / speed) {
        generateNote();
        lastNoteTimeRef.current = now;
      }
      
      setGameTime(prev => prev + 100);
    }, 100);
    
    return () => clearInterval(interval);
  }, [isPlaying, difficulty, speed, generateNote]);

  // Start animation when playing
  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, animate]);

  // Start/stop game
  const toggleGame = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setNotes([]);
      setScore(0);
      setCombo(0);
      setGameTime(0);
      lastNoteTimeRef.current = Date.now();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  // Reset game
  const resetGame = useCallback(() => {
    setIsPlaying(false);
    setNotes([]);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setGameTime(0);
  }, []);

  // Render game canvas
  const renderGame = () => {
    return (
      <div className="relative bg-gradient-to-b from-blue-900 to-purple-900 rounded-lg overflow-hidden" style={{ height: '400px' }}>
        {/* Target zone */}
        <div className="absolute bottom-12 left-0 right-0 h-2 bg-yellow-400 opacity-75 z-10"></div>
        <div className="absolute bottom-8 left-0 right-0 text-center text-yellow-300 text-sm font-bold z-10">
          Hit Zone
        </div>
        
        {/* Falling notes */}
        {notes.map(note => (
          <div
            key={note.id}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-100 ${
              note.hit ? 'scale-150 opacity-50' : 'scale-100'
            }`}
            style={{
              left: `${note.x}px`,
              top: `${note.y}px`,
              backgroundColor: note.color,
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            {showLabels && note.name}
          </div>
        ))}
        
        {/* Instructions */}
        {!isPlaying && notes.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl font-bold mb-4">🎵 Falling Notes</div>
              <div className="text-lg mb-2">Press the corresponding keys when notes reach the hit zone!</div>
              <div className="text-sm opacity-75">Use keys: C D E F G A B</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg shadow-md border border-indigo-200 dark:border-indigo-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-indigo-800 dark:text-indigo-200">{title}</span>
        </div>
        
        <div className="text-sm text-indigo-600 dark:text-indigo-300">
          Inspired by Sightread
        </div>
      </div>

      {/* Score Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 border border-indigo-200 dark:border-indigo-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-indigo-800 dark:text-indigo-200">
              {score.toLocaleString()}
            </div>
            <div className="text-xs text-indigo-600 dark:text-indigo-400">Score</div>
          </div>
          <div>
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
              {combo}x
            </div>
            <div className="text-xs text-indigo-600 dark:text-indigo-400">Combo</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
              {maxCombo}x
            </div>
            <div className="text-xs text-indigo-600 dark:text-indigo-400">Max Combo</div>
          </div>
          <div>
            <div className="text-xl font-bold text-green-600 dark:text-green-400">
              {formatTime(gameTime)}
            </div>
            <div className="text-xs text-indigo-600 dark:text-indigo-400">Time</div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
            disabled={isPlaying}
            className="w-full p-2 border border-indigo-300 dark:border-indigo-600 rounded bg-white dark:bg-gray-800 text-indigo-900 dark:text-indigo-100 disabled:opacity-50"
          >
            <option value="easy">Easy (C-G)</option>
            <option value="medium">Medium (C-B)</option>
            <option value="hard">Hard (C-B, Fast)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">
            Speed: {speed}x
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isPlaying}
            className="w-full disabled:opacity-50"
          />
        </div>
        
        <div className="flex items-end">
          <label className="flex items-center space-x-2 text-sm text-indigo-700 dark:text-indigo-300">
            <input
              type="checkbox"
              checked={showLabels}
              onChange={(e) => setShowLabels(e.target.checked)}
              className="rounded"
            />
            <span>Show note labels</span>
          </label>
        </div>
      </div>

      {/* Game Area */}
      <div className="mb-6">
        {renderGame()}
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleGame}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isPlaying
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isPlaying ? 'Stop Game' : 'Start Game'}
        </button>
        
        <button
          onClick={resetGame}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
        >
          Reset
        </button>
      </div>
      
      {/* Keyboard Guide */}
      <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
        <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
          Keyboard Controls:
        </h3>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map(note => (
            <div key={note} className="bg-white dark:bg-gray-700 p-2 rounded border">
              <div className="font-bold">{note}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{note.toLowerCase()}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-xs text-indigo-600 dark:text-indigo-400 space-y-1">
        <div className="font-medium">Falling Notes Features:</div>
        <ul className="text-indigo-500 dark:text-indigo-300 space-y-0.5">
          <li>• Gamified note recognition with falling notes</li>
          <li>• Combo system and score tracking</li>
          <li>• Adjustable speed and difficulty</li>
          <li>• Real-time audio feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default FallingNotesTrainer;