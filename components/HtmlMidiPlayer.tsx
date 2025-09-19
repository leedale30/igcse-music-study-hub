import React, { useEffect, useRef, useState } from 'react';

interface HtmlMidiPlayerProps {
  midiUrl: string;
  title?: string;
  credit?: string;
  showVisualizer?: boolean;
  visualizerType?: 'piano-roll' | 'waterfall' | 'staff';
}

const HtmlMidiPlayer: React.FC<HtmlMidiPlayerProps> = ({ 
  midiUrl, 
  title, 
  credit, 
  showVisualizer = true,
  visualizerType = 'piano-roll'
}) => {
  const playerRef = useRef<HTMLElement>(null);
  const visualizerId = `visualizer-${Math.random().toString(36).substr(2, 9)}`;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadMidiPlayer = async () => {
      if (isLoaded || isLoading) return;
      
      setIsLoading(true);
      setError(null);

      try {
        // Dynamic import to avoid bundling html-midi-player and its dependencies initially
        await import('html-midi-player');
        
        if (isMounted) {
          setIsLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load MIDI player');
          setIsLoading(false);
        }
      }
    };

    loadMidiPlayer();

    return () => {
      isMounted = false;
    };
  }, [isLoaded, isLoading]);

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg shadow-md border border-red-200 dark:border-red-700">
        <div className="text-red-800 dark:text-red-200 text-center">
          <p className="font-medium">MIDI Player Error</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading || !isLoaded) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg shadow-md border border-green-200 dark:border-green-700">
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600 dark:border-green-400"></div>
          <span className="text-green-800 dark:text-green-200">Loading MIDI Player...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg shadow-md border border-green-200 dark:border-green-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 text-green-600 dark:text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.98 8.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785L3.804 11.02a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785L6.98 8.804ZM12.245 18.533a.5.5 0 0 1-.49-.408l-.063-.317a.5.5 0 0 0-.392-.392l-.317-.063a.5.5 0 0 1 0-.981l.317-.063a.5.5 0 0 0 .392-.392l.063-.317a.5.5 0 0 1 .98 0l.063.317a.5.5 0 0 0 .392.392l.317.063a.5.5 0 0 1 0 .981l-.317.063a.5.5 0 0 0-.392.392l-.063.317a.5.5 0 0 1-.49.408Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-green-800 dark:text-green-200">HTML MIDI Player</span>
          {title && <span className="text-sm text-green-600 dark:text-green-300">- {title}</span>}
        </div>
        <div className="text-xs text-green-600 dark:text-green-300">
          Powered by Magenta.js
        </div>
      </div>
      
      <div className="space-y-4">
        {React.createElement('midi-player', {
          ref: playerRef,
          src: midiUrl,
          'sound-font': true,
          visualizer: showVisualizer ? `#${visualizerId}` : undefined,
          className: 'w-full'
        })}
        
        {showVisualizer && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-2 border border-green-200 dark:border-green-700">
            {React.createElement('midi-visualizer', {
              type: visualizerType,
              id: visualizerId,
              className: 'w-full h-32'
            })}
          </div>
        )}
      </div>
      
      {credit && (
        <p className="text-xs text-green-500 dark:text-green-400 mt-3 text-center sm:text-right">
          {credit}
        </p>
      )}
      
      <div className="mt-3 text-xs text-green-600 dark:text-green-400 space-y-1">
        <div className="font-medium">Features:</div>
        <ul className="text-green-500 dark:text-green-300 space-y-0.5">
          <li>• High-quality SoundFont synthesis</li>
          <li>• Real-time piano roll visualization</li>
          <li>• Professional audio engine (Magenta.js)</li>
          <li>• Automatic tempo and timing detection</li>
        </ul>
      </div>
    </div>
  );
};

export default HtmlMidiPlayer;