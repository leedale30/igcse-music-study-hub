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
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <ProgressProvider>
              <Routes>
                {/* Authentication routes (no layout) */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                
                {/* Main app routes (with layout) */}
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
            </ProgressProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
