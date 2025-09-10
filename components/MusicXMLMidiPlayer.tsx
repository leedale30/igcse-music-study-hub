import React, { useState } from 'react';
import MusicXMLConverter from './MusicXMLConverter';
import MidiAudioPlayer from './MidiAudioPlayer';

interface MusicXMLMidiPlayerProps {
  title?: string;
  description?: string;
  className?: string;
}

const MusicXMLMidiPlayer: React.FC<MusicXMLMidiPlayerProps> = ({ 
  title = "MusicXML to MIDI Player",
  description = "Upload a MusicXML file to convert it to MIDI and play it back with customizable accompaniment styles.",
  className = ""
}) => {
  const [currentMidiBlob, setCurrentMidiBlob] = useState<Blob | null>(null);
  const [currentFilename, setCurrentFilename] = useState<string>('');
  const [conversionHistory, setConversionHistory] = useState<Array<{
    id: string;
    originalName: string;
    midiName: string;
    blob: Blob;
    timestamp: Date;
  }>>([]);

  const handleMidiGenerated = (midiBlob: Blob, filename: string) => {
    setCurrentMidiBlob(midiBlob);
    setCurrentFilename(filename);
    
    // Add to conversion history
    const newConversion = {
      id: Date.now().toString(),
      originalName: filename.replace('.mid', '.musicxml'),
      midiName: filename,
      blob: midiBlob,
      timestamp: new Date()
    };
    
    setConversionHistory(prev => [newConversion, ...prev.slice(0, 4)]); // Keep last 5 conversions
  };

  const loadFromHistory = (conversion: typeof conversionHistory[0]) => {
    setCurrentMidiBlob(conversion.blob);
    setCurrentFilename(conversion.midiName);
  };

  const clearHistory = () => {
    setConversionHistory([]);
    setCurrentMidiBlob(null);
    setCurrentFilename('');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* MusicXML Converter */}
      <MusicXMLConverter onMidiGenerated={handleMidiGenerated} />

      {/* MIDI Audio Player */}
      <MidiAudioPlayer 
        midiBlob={currentMidiBlob} 
        filename={currentFilename}
        credit={currentMidiBlob ? "Generated from MusicXML using musicxml-midi" : undefined}
      />

      {/* Conversion History */}
      {conversionHistory.length > 0 && (
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">
              Recent Conversions
            </h4>
            <button
              onClick={clearHistory}
              className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 underline"
            >
              Clear History
            </button>
          </div>
          
          <div className="space-y-2">
            {conversionHistory.map((conversion) => (
              <div 
                key={conversion.id}
                className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-md border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-650 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">
                    {conversion.originalName}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Converted {conversion.timestamp.toLocaleString()}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => loadFromHistory(conversion)}
                    className="px-3 py-1 text-xs bg-sky-100 hover:bg-sky-200 dark:bg-sky-900 dark:hover:bg-sky-800 text-sky-800 dark:text-sky-200 rounded-md transition-colors"
                  >
                    Load
                  </button>
                  
                  <button
                    onClick={() => {
                      const url = URL.createObjectURL(conversion.blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = conversion.midiName;
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                    className="px-3 py-1 text-xs bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-800 dark:text-green-200 rounded-md transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
          How to Use:
        </h4>
        <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-decimal list-inside">
          <li>Upload a MusicXML file (.musicxml) using the converter above</li>
          <li>Optionally specify a groove style (e.g., "Swing", "Rock", "Maqsum") for accompaniment</li>
          <li>Adjust tempo and other settings as needed</li>
          <li>Click "Convert to MIDI" to generate the MIDI file</li>
          <li>Use the audio player to play back the generated MIDI</li>
          <li>Download the MIDI file or access it from the conversion history</li>
        </ol>
        
        <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
          <p className="text-xs text-blue-600 dark:text-blue-400">
            <strong>Note:</strong> MIDI playback support varies by browser. For best results, use Chrome or Firefox. 
            The conversion service supports chord symbols, melody lines, and various accompaniment styles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicXMLMidiPlayer;