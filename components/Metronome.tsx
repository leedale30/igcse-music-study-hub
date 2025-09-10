import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as Tone from 'tone';

interface MetronomeProps {
  title?: string;
}

const Metronome: React.FC<MetronomeProps> = ({ title = 'Metronome' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [volume, setVolume] = useState(0.7);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [accentEnabled, setAccentEnabled] = useState(true);
  
  const synthRef = useRef<Tone.Synth | null>(null);
  const loopRef = useRef<Tone.Loop | null>(null);
  const gainNodeRef = useRef<Tone.Gain | null>(null);
  const isInitializedRef = useRef(false);

  // Initialize Tone.js components
  const initializeTone = useCallback(async () => {
    if (isInitializedRef.current) return;
    
    try {
      await Tone.start();
      
      // Create synth and gain node
      synthRef.current = new Tone.Synth({
        oscillator: {
          type: 'sine'
        },
        envelope: {
          attack: 0.01,
          decay: 0.1,
          sustain: 0,
          release: 0.1
        }
      });
      
      gainNodeRef.current = new Tone.Gain(volume);
      synthRef.current.connect(gainNodeRef.current);
      gainNodeRef.current.toDestination();
      
      isInitializedRef.current = true;
    } catch (error) {
      console.error('Failed to initialize Tone.js:', error);
    }
  }, [volume]);

  // Update volume
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume;
    }
  }, [volume]);

  // Get beats per measure from time signature
  const getBeatsPerMeasure = useCallback(() => {
    const [numerator] = timeSignature.split('/').map(Number);
    return numerator;
  }, [timeSignature]);

  // Start/stop metronome
  const toggleMetronome = useCallback(async () => {
    if (!isInitializedRef.current) {
      await initializeTone();
    }

    if (!synthRef.current) return;

    if (isPlaying) {
      // Stop metronome
      if (loopRef.current) {
        loopRef.current.stop();
        loopRef.current.dispose();
        loopRef.current = null;
      }
      Tone.getTransport().stop();
      setCurrentBeat(0);
    } else {
      // Start metronome
      const beatsPerMeasure = getBeatsPerMeasure();
      let beatCount = 0;
      
      loopRef.current = new Tone.Loop((time) => {
        const isAccent = beatCount === 0 && accentEnabled;
        const frequency = isAccent ? 'C5' : 'C4';
        const velocity = isAccent ? 0.8 : 0.6;
        
        synthRef.current?.triggerAttackRelease(frequency, '16n', time, velocity);
        
        // Update beat counter on the main thread
        Tone.Draw.schedule(() => {
          setCurrentBeat(beatCount + 1);
        }, time);
        
        beatCount = (beatCount + 1) % beatsPerMeasure;
      }, `${timeSignature.split('/')[1]}n`);
      
      Tone.getTransport().bpm.value = bpm;
      loopRef.current.start(0);
      Tone.getTransport().start();
    }
    
    setIsPlaying(!isPlaying);
  }, [isPlaying, bpm, timeSignature, accentEnabled, getBeatsPerMeasure, initializeTone]);

  // Update BPM
  const handleBpmChange = useCallback((newBpm: number) => {
    setBpm(newBpm);
    if (isPlaying) {
      Tone.getTransport().bpm.value = newBpm;
    }
  }, [isPlaying]);

  // Tap tempo
  const tapTimes = useRef<number[]>([]);
  const handleTapTempo = useCallback(() => {
    const now = Date.now();
    tapTimes.current.push(now);
    
    // Keep only the last 4 taps
    if (tapTimes.current.length > 4) {
      tapTimes.current.shift();
    }
    
    if (tapTimes.current.length >= 2) {
      const intervals = [];
      for (let i = 1; i < tapTimes.current.length; i++) {
        intervals.push(tapTimes.current[i] - tapTimes.current[i - 1]);
      }
      
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const newBpm = Math.round(60000 / avgInterval);
      
      if (newBpm >= 40 && newBpm <= 300) {
        handleBpmChange(newBpm);
      }
    }
  }, [handleBpmChange]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (loopRef.current) {
        loopRef.current.stop();
        loopRef.current.dispose();
      }
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      if (gainNodeRef.current) {
        gainNodeRef.current.dispose();
      }
    };
  }, []);

  // Beat indicators
  const renderBeatIndicators = () => {
    const beatsPerMeasure = getBeatsPerMeasure();
    const indicators = [];
    
    for (let i = 1; i <= beatsPerMeasure; i++) {
      indicators.push(
        <div
          key={i}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-100 ${
            currentBeat === i
              ? i === 1 && accentEnabled
                ? 'bg-red-500 border-red-600 text-white scale-110'
                : 'bg-blue-500 border-blue-600 text-white scale-110'
              : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300'
          }`}
        >
          {i}
        </div>
      );
    }
    
    return indicators;
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg shadow-md border border-blue-200 dark:border-blue-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-blue-600 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-blue-800 dark:text-blue-200">{title}</span>
        </div>
        
        <div className="text-sm text-blue-600 dark:text-blue-300">
          Powered by Tone.js
        </div>
      </div>

      {/* BPM Display and Controls */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-2">
          {bpm} BPM
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={() => handleBpmChange(Math.max(40, bpm - 5))}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
          >
            -5
          </button>
          <button
            onClick={() => handleBpmChange(Math.max(40, bpm - 1))}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
          >
            -1
          </button>
          <button
            onClick={() => handleBpmChange(Math.min(300, bpm + 1))}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
          >
            +1
          </button>
          <button
            onClick={() => handleBpmChange(Math.min(300, bpm + 5))}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
          >
            +5
          </button>
        </div>
        
        <input
          type="range"
          min="40"
          max="300"
          value={bpm}
          onChange={(e) => handleBpmChange(Number(e.target.value))}
          className="w-full mb-4"
        />
      </div>

      {/* Beat Indicators */}
      <div className="flex justify-center space-x-2 mb-6">
        {renderBeatIndicators()}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
            Time Signature
          </label>
          <select
            value={timeSignature}
            onChange={(e) => setTimeSignature(e.target.value)}
            className="w-full p-2 border border-blue-300 dark:border-blue-600 rounded bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100"
          >
            <option value="2/4">2/4</option>
            <option value="3/4">3/4</option>
            <option value="4/4">4/4</option>
            <option value="5/4">5/4</option>
            <option value="6/8">6/8</option>
            <option value="7/8">7/8</option>
            <option value="9/8">9/8</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
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
          <label className="flex items-center space-x-2 text-sm text-blue-700 dark:text-blue-300">
            <input
              type="checkbox"
              checked={accentEnabled}
              onChange={(e) => setAccentEnabled(e.target.checked)}
              className="rounded"
            />
            <span>Accent first beat</span>
          </label>
        </div>
      </div>

      {/* Play/Stop and Tap Tempo */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleMetronome}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isPlaying
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isPlaying ? 'Stop' : 'Start'}
        </button>
        
        <button
          onClick={handleTapTempo}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
        >
          Tap Tempo
        </button>
      </div>
      
      <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 space-y-1">
        <div className="font-medium">Features:</div>
        <ul className="text-blue-500 dark:text-blue-300 space-y-0.5">
          <li>• Precise Web Audio timing</li>
          <li>• Multiple time signatures</li>
          <li>• Tap tempo detection</li>
          <li>• Visual beat indicators</li>
        </ul>
      </div>
    </div>
  );
};

export default Metronome;