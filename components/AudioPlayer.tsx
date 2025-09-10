import React, { useState, useRef, useEffect, useCallback } from 'react';

// Icons
const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .98 0l4.25 3.5a.75.75 0 0 1 0 1.136l-4.25 3.5a.75.75 0 0 1-.98-.568V7.658a.75.75 0 0 1 0-.568Z" clipRule="evenodd" />
  </svg>
);
const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0ZM7.25 5.75A.75.75 0 0 0 6.5 6.5v7a.75.75 0 0 0 1.5 0v-7A.75.75 0 0 0 7.25 5.75Zm5 0A.75.75 0 0 0 11.5 6.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
  </svg>
);
const VolumeHighIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V4.75Z" />
        <path d="M8.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V7Z" />
        <path d="M5.75 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" />
        <path d="M13.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V7Z" />
        <path d="M15.75 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" />
    </svg>
);
const VolumeMuteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V4.75Z" />
        <path d="M3.559 8.24A.75.75 0 0 1 4.5 7.5h.586a.75.75 0 0 1 .53.22l1.147 1.146a.75.75 0 0 1 .22.53v2.708a.75.75 0 0 1-.22.53l-1.147 1.146a.75.75 0 0 1-.53.22H4.5a.75.75 0 0 1-.65-.375l-.542-.938a.75.75 0 0 1 .12-1.02l.79-.588-.79-.587a.75.75 0 0 1-.12-1.02l.542-.938Z" />
        <path d="M13.25 7a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V7Z" />
        <path d="M16.5 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z" />
    </svg>
);


interface AudioPlayerProps {
  sources: { url: string; type: string }[];
  credit?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ sources, credit }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  
  const formatTime = (time: number): string => {
    if (isNaN(time) || !isFinite(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current?.pause();
      if(animationRef.current) cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = useCallback(() => {
    if(audioRef.current && progressBarRef.current) {
      progressBarRef.current.value = String(audioRef.current.currentTime);
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }, []);

  const changeRange = () => {
    if(audioRef.current && progressBarRef.current) {
        audioRef.current.currentTime = Number(progressBarRef.current.value);
        setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      if(progressBarRef.current) progressBarRef.current.max = String(seconds);
    }
  }

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if(animationRef.current) cancelAnimationFrame(animationRef.current);
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if(audioRef.current) {
        audioRef.current.volume = newVolume;
        setIsMuted(newVolume === 0);
    }
  }
  
  const toggleMute = () => {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      if(audioRef.current){
          audioRef.current.muted = newMutedState;
          if(!newMutedState && volume === 0){
              setVolume(0.5);
              audioRef.current.volume = 0.5;
          }
      }
  }
  
  useEffect(() => {
      if(audioRef.current){
          audioRef.current.muted = isMuted;
      }
  }, [isMuted]);

  return (
    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-600">
      <audio ref={audioRef} preload="metadata" onLoadedMetadata={onLoadedMetadata} onEnded={handleEnded}>
        {sources.map((source) => (
          <source key={source.url} src={source.url} type={source.type} />
        ))}
        Your browser does not support the audio element.
      </audio>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button onClick={togglePlayPause} className="text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 focus:outline-none flex-shrink-0" aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <PauseIcon className="w-10 h-10" /> : <PlayIcon className="w-10 h-10" />}
        </button>

        <div className="flex-1 flex items-center space-x-2 sm:space-x-3 min-w-0">
          <span className="text-sm font-mono text-slate-600 dark:text-slate-300 w-12 text-center">{formatTime(currentTime)}</span>
          <input 
            type="range" 
            ref={progressBarRef}
            defaultValue="0" 
            onChange={changeRange}
            className="w-full h-1.5 bg-slate-300 dark:bg-slate-500 rounded-full appearance-none cursor-pointer" 
            aria-label="Seek audio"
          />
          <span className="text-sm font-mono text-slate-600 dark:text-slate-300 w-12 text-center">{formatTime(duration)}</span>
        </div>
        
        <div className="hidden sm:flex items-center space-x-2">
            <button onClick={toggleMute} className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100" aria-label={isMuted ? "Unmute" : "Mute"}>
                {isMuted || volume === 0 ? <VolumeMuteIcon className="w-6 h-6" /> : <VolumeHighIcon className="w-6 h-6" />}
            </button>
            <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1.5 bg-slate-300 dark:bg-slate-500 rounded-full appearance-none cursor-pointer" 
                aria-label="Volume"
            />
        </div>
      </div>
      {credit && <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center sm:text-right">{credit}</p>}
    </div>
  );
};

export default AudioPlayer;