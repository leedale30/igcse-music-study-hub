import React, { useEffect, useRef, useState } from 'react';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';

interface SheetMusicDisplayProps {
  musicXmlUrl?: string;
  musicXmlContent?: string;
  title?: string;
  width?: number;
  height?: number;
  autoResize?: boolean;
  showControls?: boolean;
}

const SheetMusicDisplay: React.FC<SheetMusicDisplayProps> = ({
  musicXmlUrl,
  musicXmlContent,
  title,
  width = 800,
  height = 600,
  autoResize = true,
  showControls = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize OSMD
  useEffect(() => {
    if (!containerRef.current || isInitialized) return;

    try {
      osmdRef.current = new OpenSheetMusicDisplay(containerRef.current, {
        autoResize: autoResize,
        backend: 'svg',
        drawTitle: true,
        drawSubtitle: true,
        drawComposer: true,
        drawCredits: true,
        drawPartNames: true,
        drawPartAbbreviations: true,
        drawMeasureNumbers: true,
        measureNumberInterval: 4,
        pageFormat: 'A4_P',
        pageBackgroundColor: '#FFFFFF',
        renderSingleHorizontalStaffline: false,
        coloringMode: 0, // No coloring
        defaultColorNotehead: '#000000',
        defaultColorStem: '#000000'
      });
      setIsInitialized(true);
    } catch (err) {
      console.error('Failed to initialize OSMD:', err);
      setError('Failed to initialize sheet music display');
    }
  }, [autoResize]);

  // Load and render music
  useEffect(() => {
    if (!osmdRef.current || (!musicXmlUrl && !musicXmlContent)) return;

    const loadMusic = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (musicXmlUrl) {
          await osmdRef.current!.load(musicXmlUrl);
        } else if (musicXmlContent) {
          await osmdRef.current!.load(musicXmlContent);
        }
        
        osmdRef.current!.render();
      } catch (err) {
        console.error('Failed to load/render music:', err);
        setError(err instanceof Error ? err.message : 'Failed to load sheet music');
      } finally {
        setIsLoading(false);
      }
    };

    loadMusic();
  }, [musicXmlUrl, musicXmlContent, isInitialized]);

  // Handle resize
  useEffect(() => {
    if (!osmdRef.current || !autoResize) return;

    const handleResize = () => {
      if (osmdRef.current) {
        try {
          osmdRef.current.render();
        } catch (err) {
          console.error('Failed to resize sheet music:', err);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [autoResize, isInitialized]);

  const handleZoomIn = () => {
    if (osmdRef.current) {
      osmdRef.current.zoom *= 1.2;
      osmdRef.current.render();
    }
  };

  const handleZoomOut = () => {
    if (osmdRef.current) {
      osmdRef.current.zoom *= 0.8;
      osmdRef.current.render();
    }
  };

  const handleResetZoom = () => {
    if (osmdRef.current) {
      osmdRef.current.zoom = 1.0;
      osmdRef.current.render();
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-lg shadow-md border border-indigo-200 dark:border-indigo-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 text-indigo-600 dark:text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192ZM6.98 8.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785L3.804 11.02a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785L6.98 8.804ZM12.245 18.533a.5.5 0 0 1-.49-.408l-.063-.317a.5.5 0 0 0-.392-.392l-.317-.063a.5.5 0 0 1 0-.981l.317-.063a.5.5 0 0 0 .392-.392l.063-.317a.5.5 0 0 1 .98 0l.063.317a.5.5 0 0 0 .392.392l.317.063a.5.5 0 0 1 0 .981l-.317.063a.5.5 0 0 0-.392.392l-.063.317a.5.5 0 0 1-.49.408Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-indigo-800 dark:text-indigo-200">Sheet Music Display</span>
          {title && <span className="text-sm text-indigo-600 dark:text-indigo-300">- {title}</span>}
        </div>
        
        {showControls && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleZoomOut}
              className="p-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded transition-colors"
              title="Zoom Out"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 py-1 text-xs text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded transition-colors"
              title="Reset Zoom"
            >
              100%
            </button>
            <button
              onClick={handleZoomIn}
              className="p-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded transition-colors"
              title="Zoom In"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="relative bg-white dark:bg-gray-800 rounded-lg border border-indigo-200 dark:border-indigo-700 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 flex items-center justify-center z-10">
            <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
              <span className="text-sm">Loading sheet music...</span>
            </div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 bg-red-50 dark:bg-red-900/20 flex items-center justify-center z-10">
            <div className="text-center p-4">
              <div className="text-red-600 dark:text-red-400 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          </div>
        )}
        
        <div 
          ref={containerRef}
          className="w-full overflow-auto"
          style={{ 
            minHeight: height,
            maxHeight: autoResize ? 'none' : height
          }}
        />
      </div>
      
      <div className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 space-y-1">
        <div className="font-medium">Features:</div>
        <ul className="text-indigo-500 dark:text-indigo-300 space-y-0.5">
          <li>• Professional sheet music rendering</li>
          <li>• MusicXML format support</li>
          <li>• Interactive zoom controls</li>
          <li>• Responsive layout</li>
        </ul>
      </div>
    </div>
  );
};

export default SheetMusicDisplay;