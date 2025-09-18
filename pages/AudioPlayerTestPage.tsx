import React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import ImprovedAudioPlayer from '../components/ImprovedAudioPlayer';

const AudioPlayerTestPage: React.FC = () => {
  const testAudioSources = [
    {
      url: '/audio/AOS1_L1_C.mp3',
      type: 'audio/mpeg'
    },
    {
      url: '/audio/AOS1_L1_E.mp3', 
      type: 'audio/mpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Audio Player Comparison
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Testing the current audio player vs the improved react-h5-audio-player
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Current Audio Player
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Custom implementation with pause issues
            </p>
            <AudioPlayer 
              sources={testAudioSources}
              credit="Test Audio - Current Player"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Improved Audio Player
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Using react-h5-audio-player library with reliable pause functionality
            </p>
            <ImprovedAudioPlayer 
              sources={testAudioSources}
              credit="Test Audio - Improved Player"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Key Improvements
          </h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Reliable Pause/Play:</strong> Uses mature library with proven cross-browser compatibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Better State Management:</strong> Handles audio state internally with proper event handling</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Keyboard Support:</strong> Built-in keyboard shortcuts (Space, Arrow keys)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Mobile Friendly:</strong> Optimized for touch devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Accessibility:</strong> ARIA labels and screen reader support</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span><strong>Customizable:</strong> Easy to style and customize icons</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Library Information
          </h3>
          <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <p><strong>Library:</strong> react-h5-audio-player v3.10.1</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/lhz516/react-h5-audio-player" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">lhz516/react-h5-audio-player</a></p>
            <p><strong>Features:</strong> TypeScript, Mobile compatible, Keyboard friendly, I18n support</p>
            <p><strong>Browser Support:</strong> Chrome, Firefox, Safari, Edge</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Test both players above to compare the pause/play functionality
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerTestPage;