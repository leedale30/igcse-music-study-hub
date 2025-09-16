import React, { useState, useRef } from 'react';
import PresentationViewer from './PresentationViewer';

interface Slide {
  id: string;
  title: string;
  content: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
}

interface PresentationEditorProps {
  onClose?: () => void;
}

const PresentationEditor: React.FC<PresentationEditorProps> = ({ onClose }) => {
  const [presentationTitle, setPresentationTitle] = useState('My Music Presentation');
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: '1',
      title: 'Welcome to IGCSE Music',
      content: 'An introduction to the world of music theory and history',
      backgroundColor: '#1e40af',
      textColor: '#ffffff'
    }
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [savedPresentations, setSavedPresentations] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentSlide = slides[currentSlideIndex];

  const addSlide = () => {
    const newSlide: Slide = {
      id: Date.now().toString(),
      title: 'New Slide',
      content: 'Enter your content here...',
      backgroundColor: '#1e40af',
      textColor: '#ffffff'
    };
    setSlides([...slides, newSlide]);
    setCurrentSlideIndex(slides.length);
  };

  const deleteSlide = (index: number) => {
    if (slides.length > 1) {
      const newSlides = slides.filter((_, i) => i !== index);
      setSlides(newSlides);
      if (currentSlideIndex >= newSlides.length) {
        setCurrentSlideIndex(newSlides.length - 1);
      }
    }
  };

  const duplicateSlide = (index: number) => {
    const slideToClone = slides[index];
    const newSlide: Slide = {
      ...slideToClone,
      id: Date.now().toString(),
      title: slideToClone.title + ' (Copy)'
    };
    const newSlides = [...slides];
    newSlides.splice(index + 1, 0, newSlide);
    setSlides(newSlides);
    setCurrentSlideIndex(index + 1);
  };

  const updateSlide = (field: keyof Slide, value: string) => {
    const newSlides = [...slides];
    newSlides[currentSlideIndex] = {
      ...newSlides[currentSlideIndex],
      [field]: value
    };
    setSlides(newSlides);
  };

  const moveSlide = (fromIndex: number, toIndex: number) => {
    const newSlides = [...slides];
    const [movedSlide] = newSlides.splice(fromIndex, 1);
    newSlides.splice(toIndex, 0, movedSlide);
    setSlides(newSlides);
    setCurrentSlideIndex(toIndex);
  };

  const savePresentation = () => {
    const presentation = {
      id: Date.now().toString(),
      title: presentationTitle,
      slides: slides,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const saved = JSON.parse(localStorage.getItem('music-presentations') || '[]');
    saved.push(presentation);
    localStorage.setItem('music-presentations', JSON.stringify(saved));
    setSavedPresentations(saved);
    
    alert('Presentation saved successfully!');
  };

  const loadPresentation = (presentation: any) => {
    setPresentationTitle(presentation.title);
    setSlides(presentation.slides);
    setCurrentSlideIndex(0);
  };

  const exportPresentation = () => {
    const presentation = {
      title: presentationTitle,
      slides: slides,
      exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(presentation, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${presentationTitle.replace(/\s+/g, '-')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importPresentation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const presentation = JSON.parse(e.target?.result as string);
          setPresentationTitle(presentation.title);
          setSlides(presentation.slides);
          setCurrentSlideIndex(0);
          alert('Presentation imported successfully!');
        } catch (error) {
          alert('Error importing presentation. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const presetThemes = [
    { name: 'Blue Ocean', bg: '#1e40af', text: '#ffffff' },
    { name: 'Dark Night', bg: '#1f2937', text: '#f9fafb' },
    { name: 'Forest Green', bg: '#065f46', text: '#ffffff' },
    { name: 'Sunset Orange', bg: '#ea580c', text: '#ffffff' },
    { name: 'Purple Dream', bg: '#7c3aed', text: '#ffffff' },
    { name: 'Clean White', bg: '#ffffff', text: '#1f2937' }
  ];

  if (isPreviewMode) {
    return (
      <PresentationViewer
        slides={slides}
        title={presentationTitle}
        onClose={() => setIsPreviewMode(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={presentationTitle}
            onChange={(e) => setPresentationTitle(e.target.value)}
            className="bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
          <span className="text-sm text-slate-300">
            {slides.length} slide{slides.length !== 1 ? 's' : ''}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={savePresentation}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            💾 Save
          </button>
          <button
            onClick={exportPresentation}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            📤 Export
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            📥 Import
          </button>
          <button
            onClick={() => setIsPreviewMode(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            ▶️ Preview
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

      <div className="flex-1 flex">
        {/* Slide List Sidebar */}
        <div className="w-64 bg-slate-100 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Slides</h3>
            <button
              onClick={addSlide}
              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm transition-colors"
            >
              + Add
            </button>
          </div>
          
          <div className="space-y-2">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`p-3 rounded cursor-pointer border-2 transition-all ${
                  index === currentSlideIndex
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                    : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-slate-400'
                }`}
                onClick={() => setCurrentSlideIndex(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                      {index + 1}. {slide.title}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 truncate">
                      {slide.content.replace(/<[^>]*>/g, '').substring(0, 50)}...
                    </div>
                  </div>
                  <div className="flex space-x-1 ml-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        duplicateSlide(index);
                      }}
                      className="text-blue-600 hover:text-blue-800 text-xs"
                      title="Duplicate"
                    >
                      📋
                    </button>
                    {slides.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteSlide(index);
                        }}
                        className="text-red-600 hover:text-red-800 text-xs"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex flex-col">
          {/* Slide Preview */}
          <div className="flex-1 p-6">
            <div 
              className="w-full h-96 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: currentSlide?.backgroundColor || '#1e40af',
                backgroundImage: currentSlide?.backgroundImage ? `url(${currentSlide.backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div 
                className="text-center p-8 max-w-2xl"
                style={{ color: currentSlide?.textColor || '#ffffff' }}
              >
                <h2 className="text-3xl font-bold mb-4">{currentSlide?.title}</h2>
                <div 
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: currentSlide?.content || '' }}
                />
              </div>
            </div>
          </div>

          {/* Editor Panel */}
          <div className="bg-slate-50 dark:bg-slate-800 p-6 border-t border-slate-300 dark:border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Content Editor */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Content</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Slide Title
                    </label>
                    <input
                      type="text"
                      value={currentSlide?.title || ''}
                      onChange={(e) => updateSlide('title', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Content (HTML supported)
                    </label>
                    <textarea
                      value={currentSlide?.content || ''}
                      onChange={(e) => updateSlide('content', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                      placeholder="Enter slide content... You can use HTML tags like <strong>, <em>, <br>, <ul>, <li>, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Style Editor */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Styling</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Theme Presets
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {presetThemes.map((theme) => (
                        <button
                          key={theme.name}
                          onClick={() => {
                            updateSlide('backgroundColor', theme.bg);
                            updateSlide('textColor', theme.text);
                          }}
                          className="p-2 rounded border border-slate-300 dark:border-slate-600 text-xs hover:border-blue-500 transition-colors"
                          style={{ backgroundColor: theme.bg, color: theme.text }}
                        >
                          {theme.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Background Color
                      </label>
                      <input
                        type="color"
                        value={currentSlide?.backgroundColor || '#1e40af'}
                        onChange={(e) => updateSlide('backgroundColor', e.target.value)}
                        className="w-full h-10 rounded border border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Text Color
                      </label>
                      <input
                        type="color"
                        value={currentSlide?.textColor || '#ffffff'}
                        onChange={(e) => updateSlide('textColor', e.target.value)}
                        className="w-full h-10 rounded border border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Background Image URL (optional)
                    </label>
                    <input
                      type="url"
                      value={currentSlide?.backgroundImage || ''}
                      onChange={(e) => updateSlide('backgroundImage', e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden file input for import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={importPresentation}
        className="hidden"
      />
    </div>
  );
};

export default PresentationEditor;