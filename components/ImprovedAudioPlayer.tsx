import React, { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useErrorHandler } from './ErrorBoundary';
import { validateAudioSources } from '../utils/validation';

interface ImprovedAudioPlayerProps {
  sources: { url: string; type: string }[];
  credit?: string;
}

const ImprovedAudioPlayer: React.FC<ImprovedAudioPlayerProps> = ({ sources, credit }) => {
  const playerRef = useRef<AudioPlayer>(null);
  const { handleError } = useErrorHandler();

  // Get the first valid source URL
  const audioSrc = sources.length > 0 ? sources[0].url : '';

  useEffect(() => {
    const validation = validateAudioSources(sources);
    if (!validation.success) {
      handleError(new Error(validation.error || 'Invalid audio sources'), 'audio source validation');
    }
  }, [sources, handleError]);

  const handleAudioError = (error: any) => {
    console.error('Audio player error:', error);
    handleError(new Error('Audio playback failed'), 'audio playback');
  };

  const handlePlay = () => {
    // Audio started playing
  };

  const handlePause = () => {
    // Audio paused
  };

  const handleEnded = () => {
    // Audio playback ended
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-600">
      <div className="improved-audio-player">
        <AudioPlayer
          ref={playerRef}
          src={audioSrc}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          onError={handleAudioError}
          showSkipControls={false}
          showJumpControls={true}
          showDownloadProgress={true}
          showFilledProgress={true}
          showFilledVolume={true}
          hasDefaultKeyBindings={true}
          autoPlayAfterSrcChange={false}
          preload="metadata"
          volume={1.0}
          progressJumpSteps={{
            backward: 5000,
            forward: 5000
          }}
          customIcons={{
            play: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .98 0l4.25 3.5a.75.75 0 0 1 0 1.136l-4.25 3.5a.75.75 0 0 1-.98-.568V7.658a.75.75 0 0 1 0-.568Z" clipRule="evenodd" />
              </svg>
            ),
            pause: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0ZM7.25 5.75A.75.75 0 0 0 6.5 6.5v7a.75.75 0 0 0 1.5 0v-7A.75.75 0 0 0 7.25 5.75Zm5 0A.75.75 0 0 0 11.5 6.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
              </svg>
            ),
            rewind: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M8.25 4.5a.75.75 0 0 0-1.5 0v5.584l-1.97-1.97a.75.75 0 1 0-1.06 1.061l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L8.25 10.08V4.5Z" />
                <path d="M13.25 4.5a.75.75 0 0 0-1.5 0v5.584l-1.97-1.97a.75.75 0 1 0-1.06 1.061l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06l-1.72 1.72V4.5Z" />
              </svg>
            ),
            forward: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M11.75 4.5a.75.75 0 0 1 1.5 0v5.584l1.97-1.97a.75.75 0 1 1 1.06 1.061l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l1.72 1.72V4.5Z" />
                <path d="M6.75 4.5a.75.75 0 0 1 1.5 0v5.584l1.97-1.97a.75.75 0 1 1 1.06 1.061l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l1.72 1.72V4.5Z" />
              </svg>
            ),
            volumeFull: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V4.75Z" />
                <path d="M8.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V7Z" />
                <path d="M5.75 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" />
                <path d="M13.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V7Z" />
                <path d="M15.75 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" />
              </svg>
            ),
            volumeHalf: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V4.75Z" />
                <path d="M8.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V7Z" />
                <path d="M5.75 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" />
              </svg>
            ),
            volumeMuted: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.322-1.323a7.012 7.012 0 0 0 2.24-3.078.75.75 0 0 0-1.336-.668 5.512 5.512 0 0 1-1.828 2.53l-1.298-1.298a3.5 3.5 0 0 0 .963-1.71.75.75 0 1 0-1.477-.248A2.001 2.001 0 0 1 11.8 10.8L7.8 6.8a.75.75 0 0 0-1.06 0L3.28 2.22Z" />
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v3.69L7.72 6.72a.75.75 0 0 0-1.06 1.06L8.19 9.31v5.94a.75.75 0 0 0 1.5 0v-1.69l1.53 1.53a.75.75 0 1 0 1.06-1.06L10.75 12.5V4.75Z" />
              </svg>
            )
          }}
        />
      </div>
      {credit && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center sm:text-right">
          {credit}
        </p>
      )}

      <style jsx>{`
        .improved-audio-player {
          --rhap-theme-color: #0ea5e9;
          --rhap-background-color: transparent;
          --rhap-bar-color: #e2e8f0;
          --rhap-time-color: #64748b;
          --rhap-font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
        }
        
        .improved-audio-player :global(.rhap_container) {
          background-color: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        
        .improved-audio-player :global(.rhap_main-controls-button) {
          color: #0ea5e9 !important;
        }
        
        .improved-audio-player :global(.rhap_main-controls-button:hover) {
          color: #0284c7 !important;
        }
        
        .improved-audio-player :global(.rhap_progress-filled) {
          background-color: #0ea5e9 !important;
        }
        
        .improved-audio-player :global(.rhap_volume-filled) {
          background-color: #0ea5e9 !important;
        }
        
        .improved-audio-player :global(.rhap_time) {
          color: #64748b !important;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace !important;
          font-size: 0.875rem !important;
        }
        
        .dark .improved-audio-player :global(.rhap_time) {
          color: #94a3b8 !important;
        }
        
        .dark .improved-audio-player :global(.rhap_main-controls-button) {
          color: #38bdf8 !important;
        }
        
        .dark .improved-audio-player :global(.rhap_main-controls-button:hover) {
          color: #0ea5e9 !important;
        }
        
        .improved-audio-player :global(.rhap_progress-bar) {
          background-color: #cbd5e1 !important;
        }
        
        .dark .improved-audio-player :global(.rhap_progress-bar) {
          background-color: #475569 !important;
        }
        
        .improved-audio-player :global(.rhap_volume-bar) {
          background-color: #cbd5e1 !important;
        }
        
        .dark .improved-audio-player :global(.rhap_volume-bar) {
          background-color: #475569 !important;
        }
      `}</style>
    </div>
  );
};

export default ImprovedAudioPlayer;