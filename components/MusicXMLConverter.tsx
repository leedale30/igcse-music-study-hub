import React, { useState, useRef } from 'react';

// Icons
const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
  </svg>
);

const ConvertIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm-3.068-9.849a7 7 0 0 0-11.712 3.138.75.75 0 1 0 1.449.39 5.5 5.5 0 0 1 9.201-2.466l.312.311H8.061a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .75-.75V3.456a.75.75 0 0 0-1.5 0v2.43l-.31-.31Z" clipRule="evenodd" />
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 10 2ZM5.5 17a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
  </svg>
);

interface MusicXMLConverterProps {
  onMidiGenerated?: (midiBlob: Blob, filename: string) => void;
}

interface ConversionOptions {
  globalGroove?: string;
  tempo?: number;
  count?: number;
  keysig?: string;
}

const MusicXMLConverter: React.FC<MusicXMLConverterProps> = ({ onMidiGenerated }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionStatus, setConversionStatus] = useState<string>('');
  const [midiBlob, setMidiBlob] = useState<Blob | null>(null);
  const [conversionOptions, setConversionOptions] = useState<ConversionOptions>({
    globalGroove: '',
    tempo: 120,
    count: 32,
    keysig: 'C'
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith('.musicxml')) {
      setSelectedFile(file);
      setConversionStatus('');
      setMidiBlob(null);
    } else {
      setConversionStatus('Please select a valid MusicXML file (.musicxml)');
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.name.toLowerCase().endsWith('.musicxml')) {
      setSelectedFile(file);
      setConversionStatus('');
      setMidiBlob(null);
    } else {
      setConversionStatus('Please drop a valid MusicXML file (.musicxml)');
    }
  };

  const convertToMidi = async () => {
    if (!selectedFile) {
      setConversionStatus('Please select a MusicXML file first');
      return;
    }

    setIsConverting(true);
    setConversionStatus('Converting MusicXML to MIDI...');

    try {
      const formData = new FormData();
      formData.append('musicXml', selectedFile);
      
      if (conversionOptions.globalGroove) {
        formData.append('globalGroove', conversionOptions.globalGroove);
      }
      if (conversionOptions.tempo) {
        formData.append('tempo', conversionOptions.tempo.toString());
      }
      if (conversionOptions.count) {
        formData.append('count', conversionOptions.count.toString());
      }
      if (conversionOptions.keysig) {
        formData.append('keysig', conversionOptions.keysig);
      }

      const response = await fetch('http://localhost:3000/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Conversion failed: ${response.statusText}`);
      }

      const blob = await response.blob();
      setMidiBlob(blob);
      setConversionStatus('Conversion successful! MIDI file is ready for download.');
      
      if (onMidiGenerated) {
        const filename = selectedFile.name.replace('.musicxml', '.mid');
        onMidiGenerated(blob, filename);
      }
    } catch (error) {
      console.error('Conversion error:', error);
      setConversionStatus(`Conversion failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsConverting(false);
    }
  };

  const downloadMidi = () => {
    if (midiBlob && selectedFile) {
      const url = URL.createObjectURL(midiBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile.name.replace('.musicxml', '.mid');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const resetConverter = () => {
    setSelectedFile(null);
    setMidiBlob(null);
    setConversionStatus('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-600">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
        MusicXML to MIDI Converter
      </h3>
      
      {/* File Upload Area */}
      <div 
        className="border-2 border-dashed border-slate-300 dark:border-slate-500 rounded-lg p-6 mb-4 text-center cursor-pointer hover:border-sky-400 dark:hover:border-sky-400 transition-colors"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".musicxml"
          onChange={handleFileSelect}
          className="hidden"
        />
        <UploadIcon className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-2" />
        <p className="text-slate-600 dark:text-slate-300 mb-1">
          {selectedFile ? selectedFile.name : 'Drop your MusicXML file here or click to browse'}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Supports .musicxml files
        </p>
      </div>

      {/* Conversion Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Groove Style (optional)
          </label>
          <input
            type="text"
            value={conversionOptions.globalGroove || ''}
            onChange={(e) => setConversionOptions(prev => ({ ...prev, globalGroove: e.target.value }))}
            placeholder="e.g., Maqsum, Swing, Rock"
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-500 rounded-md bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Tempo (BPM)
          </label>
          <input
            type="number"
            value={conversionOptions.tempo || 120}
            onChange={(e) => setConversionOptions(prev => ({ ...prev, tempo: parseInt(e.target.value) || 120 }))}
            min="60"
            max="200"
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-500 rounded-md bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={convertToMidi}
          disabled={!selectedFile || isConverting}
          className="flex items-center space-x-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          <ConvertIcon className="w-5 h-5" />
          <span>{isConverting ? 'Converting...' : 'Convert to MIDI'}</span>
        </button>
        
        {midiBlob && (
          <button
            onClick={downloadMidi}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Download MIDI</span>
          </button>
        )}
        
        {selectedFile && (
          <button
            onClick={resetConverter}
            className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Reset
          </button>
        )}
      </div>

      {/* Status Message */}
      {conversionStatus && (
        <div className={`p-3 rounded-md text-sm ${
          conversionStatus.includes('successful') 
            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700'
            : conversionStatus.includes('failed') || conversionStatus.includes('error')
            ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700'
            : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700'
        }`}>
          {conversionStatus}
        </div>
      )}
    </div>
  );
};

export default MusicXMLConverter;