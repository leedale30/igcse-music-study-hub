import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

interface VirtualPianoProps {
  title?: string;
  octaves?: number;
  startOctave?: number;
}

const VirtualPiano: React.FC<VirtualPianoProps> = ({ 
  title = 'Virtual Piano', 
  octaves = 2, 
  startOctave = 4 
}) => {
  const [activeNotes, setActiveNotes] = useState<Set<string>>(new Set());
  const [volume, setVolume] = useState(0.7);
  const [sustainEnabled, setSustainEnabled] = useState(false);
  const [currentInstrument, setCurrentInstrument] = useState('piano');
  
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const gainNodeRef = useRef<Tone.Gain | null>(null);
  const isInitializedRef = useRef(false);
  const sustainedNotesRef = useRef<Set<string>>(new Set());

  // Note names for each octave
  const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = ['C#', 'D#', 'F#', 'G#', 'A#'];

  // Initialize Tone.js components
  const initializeTone = useCallback(async () => {
    if (isInitializedRef.current) return;
    
    try {
      await Tone.start();
      
      // Create polyphonic synth based on instrument selection
      const createSynth = () => {
        switch (currentInstrument) {
          case 'piano':
            return new Tone.PolySynth(Tone.Synth, {
              oscillator: {
                type: 'triangle'
              },
              envelope: {
                attack: 0.02,
                decay: 0.1,
                sustain: 0.3,
                release: 1
              }
            });
          case 'organ':
            return new Tone.PolySynth(Tone.Synth, {
              oscillator: {
                type: 'sine'
              },
              envelope: {
                attack: 0.1,
                decay: 0.2,
                sustain: 0.8,
                release: 0.5
              }
            });
          case 'strings':
            return new Tone.PolySynth(Tone.Synth, {
              oscillator: {
                type: 'sawtooth'
              },
              envelope: {
                attack: 0.5,
                decay: 0.3,
                sustain: 0.7,
                release: 2
              }
            });
          default:
            return new Tone.PolySynth();
        }
      };
      
      synthRef.current = createSynth();
      gainNodeRef.current = new Tone.Gain(volume);
      synthRef.current.connect(gainNodeRef.current);
      gainNodeRef.current.toDestination();
      
      isInitializedRef.current = true;
    } catch (error) {
      console.error('Failed to initialize Tone.js:', error);
    }
  }, [volume, currentInstrument]);

  // Update volume
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume;
    }
  }, [volume]);

  // Update instrument
  useEffect(() => {
    if (isInitializedRef.current) {
      // Dispose old synth and create new one
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      initializeTone();
    }
  }, [currentInstrument, initializeTone]);

  // Play note
  const playNote = useCallback(async (note: string) => {
    if (!isInitializedRef.current) {
      await initializeTone();
    }

    if (!synthRef.current) return;

    synthRef.current.triggerAttack(note);
    setActiveNotes(prev => new Set([...prev, note]));
    
    if (sustainEnabled) {
      sustainedNotesRef.current.add(note);
    }
  }, [initializeTone, sustainEnabled]);

  // Stop note
  const stopNote = useCallback((note: string) => {
    if (!synthRef.current) return;

    if (!sustainEnabled || !sustainedNotesRef.current.has(note)) {
      synthRef.current.triggerRelease(note);
      setActiveNotes(prev => {
        const newSet = new Set(prev);
        newSet.delete(note);
        return newSet;
      });
    }
  }, [sustainEnabled]);

  // Release sustain
  const releaseSustain = useCallback(() => {
    if (!synthRef.current) return;

    sustainedNotesRef.current.forEach(note => {
      synthRef.current?.triggerRelease(note);
      setActiveNotes(prev => {
        const newSet = new Set(prev);
        newSet.delete(note);
        return newSet;
      });
    });
    sustainedNotesRef.current.clear();
  }, []);

  // Handle sustain toggle
  const handleSustainToggle = useCallback(() => {
    if (sustainEnabled) {
      releaseSustain();
    }
    setSustainEnabled(!sustainEnabled);
  }, [sustainEnabled, releaseSustain]);

  // Keyboard event handlers
  useEffect(() => {
    const keyMap: { [key: string]: string } = {
      'a': `C${startOctave}`,
      'w': `C#${startOctave}`,
      's': `D${startOctave}`,
      'e': `D#${startOctave}`,
      'd': `E${startOctave}`,
      'f': `F${startOctave}`,
      't': `F#${startOctave}`,
      'g': `G${startOctave}`,
      'y': `G#${startOctave}`,
      'h': `A${startOctave}`,
      'u': `A#${startOctave}`,
      'j': `B${startOctave}`,
      'k': `C${startOctave + 1}`,
      'o': `C#${startOctave + 1}`,
      'l': `D${startOctave + 1}`,
      'p': `D#${startOctave + 1}`,
      ';': `E${startOctave + 1}`,
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const note = keyMap[e.key.toLowerCase()];
      if (note && !activeNotes.has(note)) {
        playNote(note);
      }
      
      if (e.key === ' ') {
        e.preventDefault();
        handleSustainToggle();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const note = keyMap[e.key.toLowerCase()];
      if (note) {
        stopNote(note);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeNotes, playNote, stopNote, handleSustainToggle, startOctave]);

  // Generate all notes for the specified range
  const generateNotes = () => {
    const notes = [];
    for (let octave = startOctave; octave < startOctave + octaves; octave++) {
      for (const noteName of noteNames) {
        notes.push(`${noteName}${octave}`);
      }
    }
    return notes;
  };

  // Check if note is black key
  const isBlackKey = (note: string) => {
    const noteName = note.slice(0, -1);
    return blackKeys.includes(noteName);
  };

  // Get key position for black keys
  const getBlackKeyPosition = (note: string, octave: number) => {
    const noteName = note.slice(0, -1);
    const octaveOffset = (octave - startOctave) * 7;
    
    switch (noteName) {
      case 'C#': return octaveOffset * 40 + 30;
      case 'D#': return octaveOffset * 40 + 70;
      case 'F#': return octaveOffset * 40 + 150;
      case 'G#': return octaveOffset * 40 + 190;
      case 'A#': return octaveOffset * 40 + 230;
      default: return 0;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      if (gainNodeRef.current) {
        gainNodeRef.current.dispose();
      }
    };
  }, []);

  const allNotes = generateNotes();
  const whiteNotes = allNotes.filter(note => !isBlackKey(note));
  const blackNotes = allNotes.filter(note => isBlackKey(note));

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg shadow-md border border-purple-200 dark:border-purple-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-purple-600 dark:text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-purple-800 dark:text-purple-200">{title}</span>
        </div>
        
        <div className="text-sm text-purple-600 dark:text-purple-300">
          Use keyboard or click keys
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">
            Instrument
          </label>
          <select
            value={currentInstrument}
            onChange={(e) => setCurrentInstrument(e.target.value)}
            className="w-full p-2 border border-purple-300 dark:border-purple-600 rounded bg-white dark:bg-gray-800 text-purple-900 dark:text-purple-100"
          >
            <option value="piano">Piano</option>
            <option value="organ">Organ</option>
            <option value="strings">Strings</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">
            Volume
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="flex items-end">
          <button
            onClick={handleSustainToggle}
            className={`px-4 py-2 rounded font-semibold transition-colors ${
              sustainEnabled
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Sustain {sustainEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Piano Keyboard */}
      <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
        <div className="relative" style={{ width: `${whiteNotes.length * 40}px`, height: '200px' }}>
          {/* White Keys */}
          {whiteNotes.map((note, index) => {
            const isActive = activeNotes.has(note);
            return (
              <button
                key={note}
                onMouseDown={() => playNote(note)}
                onMouseUp={() => stopNote(note)}
                onMouseLeave={() => stopNote(note)}
                className={`absolute border border-gray-300 dark:border-gray-600 rounded-b transition-all duration-75 select-none ${
                  isActive
                    ? 'bg-purple-200 dark:bg-purple-700 transform scale-95'
                    : 'bg-white dark:bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-200'
                }`}
                style={{
                  left: `${index * 40}px`,
                  width: '38px',
                  height: '180px',
                  top: '0px'
                }}
              >
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-700">
                  {note}
                </span>
              </button>
            );
          })}
          
          {/* Black Keys */}
          {blackNotes.map((note) => {
            const octave = parseInt(note.slice(-1));
            const isActive = activeNotes.has(note);
            return (
              <button
                key={note}
                onMouseDown={() => playNote(note)}
                onMouseUp={() => stopNote(note)}
                onMouseLeave={() => stopNote(note)}
                className={`absolute rounded-b transition-all duration-75 select-none ${
                  isActive
                    ? 'bg-purple-800 transform scale-95'
                    : 'bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800'
                }`}
                style={{
                  left: `${getBlackKeyPosition(note, octave)}px`,
                  width: '24px',
                  height: '120px',
                  top: '0px',
                  zIndex: 10
                }}
              >
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white">
                  {note}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Keyboard Shortcuts */}
      <div className="mt-4 text-xs text-purple-600 dark:text-purple-400">
        <div className="font-medium mb-2">Keyboard Shortcuts:</div>
        <div className="grid grid-cols-2 gap-2 text-purple-500 dark:text-purple-300">
          <div>A-J-K-L-; = White keys</div>
          <div>W-E-T-Y-U-O-P = Black keys</div>
          <div>Spacebar = Toggle sustain</div>
          <div>Click or drag on keys to play</div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-purple-600 dark:text-purple-400 space-y-1">
        <div className="font-medium">Features:</div>
        <ul className="text-purple-500 dark:text-purple-300 space-y-0.5">
          <li>• Polyphonic playback</li>
          <li>• Multiple instrument sounds</li>
          <li>• Keyboard and mouse input</li>
          <li>• Sustain pedal simulation</li>
        </ul>
      </div>
    </div>
  );
};

export default VirtualPiano;