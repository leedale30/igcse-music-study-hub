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
import AccountSettingsPage from './pages/AccountSettingsPage';
import PresentationPage from './pages/PresentationPage';
import AudioPlayerTestPage from './pages/AudioPlayerTestPage';
import InstrumentsPage from './pages/InstrumentsPage';
import InstrumentDetailPage from './pages/InstrumentDetailPage';
import FamilyPage from './pages/FamilyPage';
import ListeningExamsPage from './pages/ListeningExamsPage';
import MelodyExamPage from './pages/MelodyExamPage';
import HandelSonataTestPage from './pages/HandelSonataTestPage';
import HaydnQuartetTestPage from './pages/HaydnQuartetTestPage';
import MendelssohnOvertureTestPage from './pages/MendelssohnOvertureTestPage';
import SamSmithTestPage from './pages/SamSmithTestPage';
import ColdplayTestPage from './pages/ColdplayTestPage';
import GodspellTestPage from './pages/GodspellTestPage';
import PiratesCaribbeanTestPage from './pages/PiratesCaribbeanTestPage';
import MoonRiverTestPage from './pages/MoonRiverTestPage';
import ProtectedRoute from './components/ProtectedRoute';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { RPGProvider } from './contexts/RPGContext';
import ErrorBoundary from './components/ErrorBoundary';
import { SupabaseTestPage } from './components/SupabaseTestPage';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
          <ProgressProvider>
            <RPGProvider>
              <Routes>
                {/* Public test routes - MUST come first and be completely separate */}
                <Route path="/supabase-test" element={<SupabaseTestPage />} />
                
                {/* Public authentication routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                
                {/* Protected routes without layout */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/profile-setup" element={
                  <ProtectedRoute>
                    <ProfileSetupPage />
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
                <Route path="/account-settings" element={
                  <ProtectedRoute>
                    <AccountSettingsPage />
                  </ProtectedRoute>
                } />
                <Route path="/presentations" element={
                  <ProtectedRoute>
                    <PresentationPage />
                  </ProtectedRoute>
                } />
                
                {/* Main app routes (with layout and protection) */}
                <Route element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/test" element={<TestPage />} />
                  <Route path="/audio-test" element={<AudioPlayerTestPage />} />
                  <Route path="/tools/metronome" element={<MetronomePage />} />
                  <Route path="/tools/virtual-piano" element={<VirtualPianoPage />} />
                  <Route path="/tools/ear-training" element={<EarTrainingPage />} />
                  <Route path="/tools/circle-of-fifths" element={<CircleOfFifthsPage />} />
                  <Route path="/tools/bemol-ear-training" element={<BemolEarTrainingPage />} />
                  <Route path="/tools/sight-reading" element={<SightReadingPage />} />
                  <Route path="/links" element={<LinksPage />} />
                  <Route path="/instruments" element={<InstrumentsPage />} />
                  <Route path="/instruments/:instrumentId" element={<InstrumentDetailPage />} />
                  <Route path="/instruments/family/:familyId" element={<FamilyPage />} />
                  <Route path="/listening-exams" element={<ListeningExamsPage />} />
            <Route path="/listening-exams/melody" element={<MelodyExamPage />} />
            <Route path="/listening-exams/handel-sonata" element={<HandelSonataTestPage />} />
            <Route path="/listening-exams/haydn-quartet" element={<HaydnQuartetTestPage />} />
            <Route path="/listening-exams/mendelssohn-overture" element={<MendelssohnOvertureTestPage />} />
            <Route path="/listening-exams/sam-smith" element={<SamSmithTestPage />} />
            <Route path="/listening-exams/coldplay" element={<ColdplayTestPage />} />
            <Route path="/listening-exams/godspell" element={<GodspellTestPage />} />
            <Route path="/listening-exams/pirates-caribbean" element={<PiratesCaribbeanTestPage />} />
            <Route path="/listening-exams/moon-river" element={<MoonRiverTestPage />} />
                  <Route path="/term/:termId" element={<GenericPage />} />
                </Route>
                
                {/* Catch-all route - MUST be last */}
                <Route path="*" element={<GenericPage />} />
              </Routes>
            </RPGProvider>
          </ProgressProvider>
        </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
