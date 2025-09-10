import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import MetronomePage from './pages/MetronomePage';
import VirtualPianoPage from './pages/VirtualPianoPage';
import EarTrainingPage from './pages/EarTrainingPage';
import CircleOfFifthsPage from './pages/CircleOfFifthsPage';
import BemolEarTrainingPage from './pages/BemolEarTrainingPage';
import SightReadingPage from './pages/SightReadingPage';
import LinksPage from './pages/LinksPage';
import GenericPage from './pages/GenericPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="tools/metronome" element={<MetronomePage />} />
            <Route path="tools/virtual-piano" element={<VirtualPianoPage />} />
            <Route path="tools/ear-training" element={<EarTrainingPage />} />
            <Route path="tools/circle-of-fifths" element={<CircleOfFifthsPage />} />
            <Route path="tools/bemol-ear-training" element={<BemolEarTrainingPage />} />
            <Route path="tools/sight-reading" element={<SightReadingPage />} />
            <Route path="links" element={<LinksPage />} />
            <Route path="term/:termId" element={<GenericPage />} />
            <Route path="*" element={<GenericPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
