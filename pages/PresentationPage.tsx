import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import PresentationEditor from '../components/PresentationEditor';
import PresentationViewer from '../components/PresentationViewer';

interface SavedPresentation {
  id: string;
  title: string;
  slides: any[];
  createdAt: string;
  updatedAt: string;
}

const PresentationPage: React.FC = () => {
  const { user } = useAuth();
  const [showEditor, setShowEditor] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [selectedPresentation, setSelectedPresentation] = useState<SavedPresentation | null>(null);
  const [savedPresentations, setSavedPresentations] = useState<SavedPresentation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadSavedPresentations();
  }, []);

  const loadSavedPresentations = () => {
    const saved = JSON.parse(localStorage.getItem('music-presentations') || '[]');
    setSavedPresentations(saved);
  };

  const deletePresentation = (id: string) => {
    if (confirm('Are you sure you want to delete this presentation?')) {
      const updated = savedPresentations.filter(p => p.id !== id);
      localStorage.setItem('music-presentations', JSON.stringify(updated));
      setSavedPresentations(updated);
    }
  };

  const duplicatePresentation = (presentation: SavedPresentation) => {
    const duplicate = {
      ...presentation,
      id: Date.now().toString(),
      title: presentation.title + ' (Copy)',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const updated = [...savedPresentations, duplicate];
    localStorage.setItem('music-presentations', JSON.stringify(updated));
    setSavedPresentations(updated);
  };

  const filteredPresentations = savedPresentations.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const samplePresentations = [
    {
      id: 'sample-1',
      title: 'Introduction to Baroque Music',
      slides: [
        {
          id: '1',
          title: 'Baroque Period (1600-1750)',
          content: 'An era of ornate musical expression and complex harmonies',
          backgroundColor: '#7c3aed',
          textColor: '#ffffff'
        },
        {
          id: '2',
          title: 'Key Characteristics',
          content: '<ul><li>Basso Continuo</li><li>Terraced Dynamics</li><li>Ornate Melodies</li><li>Complex Counterpoint</li></ul>',
          backgroundColor: '#1e40af',
          textColor: '#ffffff'
        },
        {
          id: '3',
          title: 'Famous Composers',
          content: '<strong>Johann Sebastian Bach</strong><br/>George Frideric Handel<br/>Antonio Vivaldi<br/>Arcangelo Corelli',
          backgroundColor: '#065f46',
          textColor: '#ffffff'
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'sample-2',
      title: 'Understanding Musical Forms',
      slides: [
        {
          id: '1',
          title: 'Musical Forms',
          content: 'The structural organization of musical compositions',
          backgroundColor: '#ea580c',
          textColor: '#ffffff'
        },
        {
          id: '2',
          title: 'Binary Form (AB)',
          content: 'Two contrasting sections:<br/><strong>A</strong> - First theme<br/><strong>B</strong> - Contrasting theme',
          backgroundColor: '#dc2626',
          textColor: '#ffffff'
        },
        {
          id: '3',
          title: 'Ternary Form (ABA)',
          content: 'Three-part structure:<br/><strong>A</strong> - Main theme<br/><strong>B</strong> - Contrasting middle<br/><strong>A</strong> - Return of main theme',
          backgroundColor: '#7c2d12',
          textColor: '#ffffff'
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  if (showEditor) {
    return <PresentationEditor onClose={() => setShowEditor(false)} />;
  }

  if (showViewer && selectedPresentation) {
    return (
      <PresentationViewer
        slides={selectedPresentation.slides}
        title={selectedPresentation.title}
        onClose={() => {
          setShowViewer(false);
          setSelectedPresentation(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                🎵 Music Presentations
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Create and manage interactive presentations for your music lessons
              </p>
            </div>
            <button
              onClick={() => setShowEditor(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <span>➕</span>
              <span>Create New Presentation</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search presentations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* Sample Presentations */}
        {savedPresentations.length === 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              📚 Sample Presentations
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get started with these pre-made presentations. You can view them or use them as templates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samplePresentations.map((presentation) => (
                <div
                  key={presentation.id}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {presentation.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      {presentation.slides.length} slide{presentation.slides.length !== 1 ? 's' : ''}
                    </p>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedPresentation(presentation);
                          setShowViewer(true);
                        }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                      >
                        ▶️ View
                      </button>
                      <button
                        onClick={() => duplicatePresentation(presentation)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                        title="Use as Template"
                      >
                        📋
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saved Presentations */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
            💾 Your Presentations ({filteredPresentations.length})
          </h2>
          
          {filteredPresentations.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                {searchTerm ? 'No presentations found' : 'No presentations yet'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {searchTerm 
                  ? 'Try adjusting your search terms'
                  : 'Create your first presentation to get started'
                }
              </p>
              {!searchTerm && (
                <button
                  onClick={() => setShowEditor(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Create Your First Presentation
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPresentations.map((presentation) => (
                <div
                  key={presentation.id}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {presentation.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                      {presentation.slides.length} slide{presentation.slides.length !== 1 ? 's' : ''}
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs mb-4">
                      Updated: {new Date(presentation.updatedAt).toLocaleDateString()}
                    </p>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedPresentation(presentation);
                          setShowViewer(true);
                        }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                      >
                        ▶️ Present
                      </button>
                      <button
                        onClick={() => {
                          // Load presentation into editor
                          localStorage.setItem('edit-presentation', JSON.stringify(presentation));
                          setShowEditor(true);
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => duplicatePresentation(presentation)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                        title="Duplicate"
                      >
                        📋
                      </button>
                      <button
                        onClick={() => deletePresentation(presentation.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Features Info */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            🎯 Presentation Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 dark:text-blue-400">⌨️</span>
              <div>
                <strong className="text-blue-900 dark:text-blue-100">Keyboard Navigation</strong>
                <p className="text-blue-700 dark:text-blue-300">Use arrow keys or spacebar to navigate slides</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 dark:text-blue-400">🖥️</span>
              <div>
                <strong className="text-blue-900 dark:text-blue-100">Fullscreen Mode</strong>
                <p className="text-blue-700 dark:text-blue-300">Press F for immersive presentation experience</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 dark:text-blue-400">🎨</span>
              <div>
                <strong className="text-blue-900 dark:text-blue-100">Custom Themes</strong>
                <p className="text-blue-700 dark:text-blue-300">Customize colors, backgrounds, and styling</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 dark:text-blue-400">💾</span>
              <div>
                <strong className="text-blue-900 dark:text-blue-100">Save & Export</strong>
                <p className="text-blue-700 dark:text-blue-300">Save locally and export as JSON files</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 dark:text-blue-400">📱</span>
              <div>
                <strong className="text-blue-900 dark:text-blue-100">Responsive Design</strong>
                <p className="text-blue-700 dark:text-blue-300">Works perfectly on all devices and screen sizes</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 dark:text-blue-400">🔗</span>
              <div>
                <strong className="text-blue-900 dark:text-blue-100">HTML Support</strong>
                <p className="text-blue-700 dark:text-blue-300">Use HTML tags for rich formatting and links</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationPage;