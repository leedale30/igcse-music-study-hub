import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

interface CircleOfFifthsProps {
  title?: string;
}

type KeyInfo = {
  major: string;
  minor: string;
  sharps: number;
  flats: number;
  majorChords: string[];
  minorChords: string[];
};

const keyData: { [key: string]: KeyInfo } = {
  'C': { major: 'C', minor: 'Am', sharps: 0, flats: 0, majorChords: ['C', 'F', 'G'], minorChords: ['Am', 'Dm', 'Em'] },
  'G': { major: 'G', minor: 'Em', sharps: 1, flats: 0, majorChords: ['G', 'C', 'D'], minorChords: ['Em', 'Am', 'Bm'] },
  'D': { major: 'D', minor: 'Bm', sharps: 2, flats: 0, majorChords: ['D', 'G', 'A'], minorChords: ['Bm', 'Em', 'F#m'] },
  'A': { major: 'A', minor: 'F#m', sharps: 3, flats: 0, majorChords: ['A', 'D', 'E'], minorChords: ['F#m', 'Bm', 'C#m'] },
  'E': { major: 'E', minor: 'C#m', sharps: 4, flats: 0, majorChords: ['E', 'A', 'B'], minorChords: ['C#m', 'F#m', 'G#m'] },
  'B': { major: 'B', minor: 'G#m', sharps: 5, flats: 0, majorChords: ['B', 'E', 'F#'], minorChords: ['G#m', 'C#m', 'D#m'] },
  'F#': { major: 'F#', minor: 'D#m', sharps: 6, flats: 0, majorChords: ['F#', 'B', 'C#'], minorChords: ['D#m', 'G#m', 'A#m'] },
  'F': { major: 'F', minor: 'Dm', sharps: 0, flats: 1, majorChords: ['F', 'Bb', 'C'], minorChords: ['Dm', 'Gm', 'Am'] },
  'Bb': { major: 'Bb', minor: 'Gm', sharps: 0, flats: 2, majorChords: ['Bb', 'Eb', 'F'], minorChords: ['Gm', 'Cm', 'Dm'] },
  'Eb': { major: 'Eb', minor: 'Cm', sharps: 0, flats: 3, majorChords: ['Eb', 'Ab', 'Bb'], minorChords: ['Cm', 'Fm', 'Gm'] },
  'Ab': { major: 'Ab', minor: 'Fm', sharps: 0, flats: 4, majorChords: ['Ab', 'Db', 'Eb'], minorChords: ['Fm', 'Bbm', 'Cm'] },
  'Db': { major: 'Db', minor: 'Bbm', sharps: 0, flats: 5, majorChords: ['Db', 'Gb', 'Ab'], minorChords: ['Bbm', 'Ebm', 'Fm'] },
  'Gb': { major: 'Gb', minor: 'Ebm', sharps: 0, flats: 6, majorChords: ['Gb', 'Cb', 'Db'], minorChords: ['Ebm', 'Abm', 'Bbm'] }
};

const CircleOfFifths: React.FC<CircleOfFifthsProps> = ({ title = 'Circle of Fifths' }) => {
  const [selectedKey, setSelectedKey] = useState<string>('C');
  const [showMinor, setShowMinor] = useState(false);
  const [playingChord, setPlayingChord] = useState<string | null>(null);
  
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const isInitializedRef = useRef(false);

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
          release: 1.5
        }
      }).toDestination();
      
      isInitializedRef.current = true;
    } catch (error) {
      console.error('Failed to initialize Tone.js:', error);
    }
  }, []);

  // Play chord
  const playChord = useCallback(async (chordName: string) => {
    if (!isInitializedRef.current) {
      await initializeTone();
    }
    
    if (!synthRef.current) return;
    
    setPlayingChord(chordName);
    
    // Define chord notes (simplified)
    const getChordNotes = (chord: string): string[] => {
      const root = chord.replace(/m$/, '');
      const isMinor = chord.endsWith('m');
      
      // Basic chord mapping (root position)
      const chordMap: { [key: string]: string[] } = {
        'C': ['C4', 'E4', 'G4'],
        'Cm': ['C4', 'Eb4', 'G4'],
        'G': ['G4', 'B4', 'D5'],
        'Gm': ['G4', 'Bb4', 'D5'],
        'D': ['D4', 'F#4', 'A4'],
        'Dm': ['D4', 'F4', 'A4'],
        'A': ['A4', 'C#5', 'E5'],
        'Am': ['A4', 'C5', 'E5'],
        'E': ['E4', 'G#4', 'B4'],
        'Em': ['E4', 'G4', 'B4'],
        'B': ['B4', 'D#5', 'F#5'],
        'Bm': ['B4', 'D5', 'F#5'],
        'F#': ['F#4', 'A#4', 'C#5'],
        'F#m': ['F#4', 'A4', 'C#5'],
        'F': ['F4', 'A4', 'C5'],
        'Fm': ['F4', 'Ab4', 'C5'],
        'Bb': ['Bb4', 'D5', 'F5'],
        'Bbm': ['Bb4', 'Db5', 'F5'],
        'Eb': ['Eb4', 'G4', 'Bb4'],
        'Ebm': ['Eb4', 'Gb4', 'Bb4'],
        'Ab': ['Ab4', 'C5', 'Eb5'],
        'Abm': ['Ab4', 'Cb5', 'Eb5'],
        'Db': ['Db4', 'F4', 'Ab4'],
        'Dbm': ['Db4', 'Fb4', 'Ab4'],
        'Gb': ['Gb4', 'Bb4', 'Db5'],
        'Gbm': ['Gb4', 'A4', 'Db5'],
        'C#m': ['C#4', 'E4', 'G#4'],
        'G#m': ['G#4', 'B4', 'D#5'],
        'D#m': ['D#4', 'F#4', 'A#4'],
        'A#m': ['A#4', 'C#5', 'E#5']
      };
      
      return chordMap[chord] || ['C4', 'E4', 'G4'];
    };
    
    const notes = getChordNotes(chordName);
    synthRef.current.triggerAttackRelease(notes, '2n');
    
    setTimeout(() => setPlayingChord(null), 2000);
  }, [initializeTone]);

  // Get position for key on circle
  const getKeyPosition = (key: string, index: number, total: number = 12) => {
    const angle = (index * 360 / total) - 90; // Start from top
    const radius = 120;
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    return { x, y, angle };
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []);

  const keys = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
  const selectedKeyData = keyData[selectedKey];

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-md border border-yellow-200 dark:border-yellow-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-yellow-600 dark:text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">{title}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-sm text-yellow-700 dark:text-yellow-300">
            <input
              type="checkbox"
              checked={showMinor}
              onChange={(e) => setShowMinor(e.target.checked)}
              className="rounded"
            />
            <span>Show relative minors</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Circle of Fifths */}
        <div className="flex flex-col items-center">
          <div className="relative w-80 h-80 mb-4">
            <svg viewBox="-150 -150 300 300" className="w-full h-full">
              {/* Outer circle */}
              <circle
                cx="0"
                cy="0"
                r="140"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-yellow-300 dark:text-yellow-600"
              />
              
              {/* Inner circle */}
              <circle
                cx="0"
                cy="0"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-yellow-200 dark:text-yellow-700"
              />
              
              {/* Key positions */}
              {keys.map((key, index) => {
                const { x, y } = getKeyPosition(key, index);
                const isSelected = selectedKey === key;
                const keyInfo = keyData[key];
                
                return (
                  <g key={key}>
                    {/* Major key */}
                    <circle
                      cx={x}
                      cy={y}
                      r="25"
                      fill={isSelected ? '#fbbf24' : '#fef3c7'}
                      stroke={isSelected ? '#f59e0b' : '#fcd34d'}
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-200 hover:fill-yellow-300"
                      onClick={() => setSelectedKey(key)}
                    />
                    <text
                      x={x}
                      y={y + 5}
                      textAnchor="middle"
                      className="text-sm font-bold fill-yellow-900 cursor-pointer select-none"
                      onClick={() => setSelectedKey(key)}
                    >
                      {key}
                    </text>
                    
                    {/* Relative minor (inner circle) */}
                    {showMinor && (
                      <>
                        <circle
                          cx={x * 0.6}
                          cy={y * 0.6}
                          r="18"
                          fill={isSelected ? '#fb923c' : '#fed7aa'}
                          stroke={isSelected ? '#ea580c' : '#fdba74'}
                          strokeWidth="1.5"
                          className="cursor-pointer transition-all duration-200 hover:fill-orange-300"
                          onClick={() => setSelectedKey(key)}
                        />
                        <text
                          x={x * 0.6}
                          y={y * 0.6 + 4}
                          textAnchor="middle"
                          className="text-xs font-semibold fill-orange-900 cursor-pointer select-none"
                          onClick={() => setSelectedKey(key)}
                        >
                          {keyInfo.minor}
                        </text>
                      </>
                    )}
                    
                    {/* Accidentals indicator */}
                    <text
                      x={x}
                      y={y - 35}
                      textAnchor="middle"
                      className="text-xs fill-yellow-700 dark:fill-yellow-300 select-none"
                    >
                      {keyInfo.sharps > 0 ? `${keyInfo.sharps}#` : keyInfo.flats > 0 ? `${keyInfo.flats}♭` : ''}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          
          <div className="text-center text-sm text-yellow-600 dark:text-yellow-400">
            Click on any key to explore its relationships
          </div>
        </div>

        {/* Key Information */}
        <div className="space-y-6">
          {selectedKeyData && (
            <>
              {/* Key Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                  Key of {selectedKey} Major
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-yellow-700 dark:text-yellow-300">Major Key:</span>
                    <span className="ml-2 text-yellow-600 dark:text-yellow-400">{selectedKeyData.major}</span>
                  </div>
                  <div>
                    <span className="font-medium text-yellow-700 dark:text-yellow-300">Relative Minor:</span>
                    <span className="ml-2 text-yellow-600 dark:text-yellow-400">{selectedKeyData.minor}</span>
                  </div>
                  <div>
                    <span className="font-medium text-yellow-700 dark:text-yellow-300">Sharps:</span>
                    <span className="ml-2 text-yellow-600 dark:text-yellow-400">{selectedKeyData.sharps}</span>
                  </div>
                  <div>
                    <span className="font-medium text-yellow-700 dark:text-yellow-300">Flats:</span>
                    <span className="ml-2 text-yellow-600 dark:text-yellow-400">{selectedKeyData.flats}</span>
                  </div>
                </div>
              </div>

              {/* Major Chords */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                  Primary Major Chords (I-IV-V)
                </h4>
                <div className="flex space-x-2">
                  {selectedKeyData.majorChords.map((chord, index) => (
                    <button
                      key={chord}
                      onClick={() => playChord(chord)}
                      className={`px-4 py-2 rounded font-semibold transition-all duration-200 ${
                        playingChord === chord
                          ? 'bg-yellow-500 text-white scale-105'
                          : 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700'
                      }`}
                    >
                      {chord}
                      <div className="text-xs opacity-75">
                        {['I', 'IV', 'V'][index]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Minor Chords */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                  Primary Minor Chords (ii-iii-vi)
                </h4>
                <div className="flex space-x-2">
                  {selectedKeyData.minorChords.map((chord, index) => (
                    <button
                      key={chord}
                      onClick={() => playChord(chord)}
                      className={`px-4 py-2 rounded font-semibold transition-all duration-200 ${
                        playingChord === chord
                          ? 'bg-orange-500 text-white scale-105'
                          : 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700'
                      }`}
                    >
                      {chord}
                      <div className="text-xs opacity-75">
                        {['vi', 'ii', 'iii'][index]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Common Progressions */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                  Common Progressions
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-700 dark:text-yellow-300">I-V-vi-IV:</span>
                    <span className="text-yellow-600 dark:text-yellow-400">
                      {selectedKeyData.majorChords[0]}-{selectedKeyData.majorChords[2]}-{selectedKeyData.minorChords[0]}-{selectedKeyData.majorChords[1]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-700 dark:text-yellow-300">vi-IV-I-V:</span>
                    <span className="text-yellow-600 dark:text-yellow-400">
                      {selectedKeyData.minorChords[0]}-{selectedKeyData.majorChords[1]}-{selectedKeyData.majorChords[0]}-{selectedKeyData.majorChords[2]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-700 dark:text-yellow-300">I-vi-ii-V:</span>
                    <span className="text-yellow-600 dark:text-yellow-400">
                      {selectedKeyData.majorChords[0]}-{selectedKeyData.minorChords[0]}-{selectedKeyData.minorChords[1]}-{selectedKeyData.majorChords[2]}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
        <div className="font-medium">Features:</div>
        <ul className="text-yellow-500 dark:text-yellow-300 space-y-0.5">
          <li>• Interactive circle visualization</li>
          <li>• Key signature information</li>
          <li>• Chord playback and progressions</li>
          <li>• Major and relative minor keys</li>
        </ul>
      </div>
    </div>
  );
};

export default CircleOfFifths;