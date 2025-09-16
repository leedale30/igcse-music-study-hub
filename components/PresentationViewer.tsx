import React, { useEffect, useRef, useState } from 'react';

interface Slide {
  id: string;
  title: string;
  content: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
}

interface PresentationViewerProps {
  slides: Slide[];
  title: string;
  onClose?: () => void;
}

const PresentationViewer: React.FC<PresentationViewerProps> = ({ slides, title, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const presentationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          nextSlide();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'Escape':
          if (isFullscreen) {
            exitFullscreen();
          }
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (presentationRef.current?.requestFullscreen) {
        presentationRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header Controls */}
      {!isFullscreen && (
        <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">{title}</h1>
            <span className="text-sm text-slate-300">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullscreen}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
              title="Fullscreen (F)"
            >
              📺 Fullscreen
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                ✕ Close
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main Presentation Area */}
      <div 
        ref={presentationRef}
        className="flex-1 relative overflow-hidden"
        style={{
          backgroundColor: currentSlideData?.backgroundColor || '#1e293b',
          backgroundImage: currentSlideData?.backgroundImage ? `url(${currentSlideData.backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Slide Content */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div 
            className="max-w-4xl w-full text-center"
            style={{ color: currentSlideData?.textColor || '#ffffff' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {currentSlideData?.title}
            </h2>
            <div 
              className="text-xl md:text-2xl leading-relaxed"
              dangerouslySetInnerHTML={{ __html: currentSlideData?.content || '' }}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
          disabled={currentSlide === 0}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
          disabled={currentSlide === slides.length - 1}
        >
          →
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30">
          <div 
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Bottom Controls */}
      {!isFullscreen && (
        <div className="bg-slate-800 text-white p-4">
          <div className="flex justify-between items-center">
            {/* Slide Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto max-w-2xl">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded border-2 transition-all ${
                    index === currentSlide
                      ? 'border-blue-500 bg-blue-900'
                      : 'border-slate-600 bg-slate-700 hover:border-slate-500'
                  }`}
                  title={slide.title}
                >
                  <div className="w-full h-full flex items-center justify-center text-xs">
                    {index + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="bg-slate-600 hover:bg-slate-500 disabled:bg-slate-700 disabled:opacity-50 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                ← Previous
              </button>
              <span className="text-sm text-slate-300 px-2">
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="bg-slate-600 hover:bg-slate-500 disabled:bg-slate-700 disabled:opacity-50 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="mt-2 text-xs text-slate-400 text-center">
            Use arrow keys or spacebar to navigate • Press F for fullscreen • Press Escape to exit fullscreen
          </div>
        </div>
      )}
    </div>
  );
};

export default PresentationViewer;