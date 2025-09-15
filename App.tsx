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
import ProfileSetupPage from './pages/ProfileSetupPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AchievementsPage from './pages/AchievementsPage';
import ProtectedRoute from './components/ProtectedRoute';
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
                {/* Public authentication routes (no protection) */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile-setup" element={<ProfileSetupPage />} />
                
                {/* Protected routes - require authentication */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <AdminDashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/achievements" element={
                  <ProtectedRoute>
                    <AchievementsPage />
                  </ProtectedRoute>
                } />
                
                {/* Main app routes (with layout and protection) */}
                <Route path="/" element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }>
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
