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
import InstrumentsListPage from './pages/InstrumentsListPage';
import InstrumentPage from './pages/InstrumentPage';
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
import TheoryRoutes from './routes/TheoryRoutes';
import AosContentPage from './pages/AosContentPage';
import VivaldiSpringDeepDivePage from './pages/aos1/VivaldiSpringDeepDivePage';
import { BaroqueRoutes } from './routes/BaroqueRoutes';
import { ClassicalRoutes } from './routes/ClassicalRoutes';
import { RomanticRoutes } from './routes/RomanticRoutes';
import { MusicAndWordsRoutes } from './routes/MusicAndWordsRoutes';
import { DanceRoutes } from './routes/DanceRoutes';
import { SmallEnsembleRoutes } from './routes/SmallEnsembleRoutes';
import { StageScreenRoutes } from './routes/StageScreenRoutes';
import SitemapPage from './pages/SitemapPage';
import GlossaryPage from './pages/GlossaryPage';
import CourseworkPage from './pages/CourseworkPage';
import AreasOfStudyPage from './pages/AreasOfStudyPage';
import ProtectedRoute from './components/ProtectedRoute';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { RPGProvider } from './contexts/RPGContext';
import ErrorBoundary from './components/ErrorBoundary';
import { SupabaseTestPage } from './components/SupabaseTestPage';
import { ChatWidget } from './components/tutor/ChatWidget';
import { LobbyView } from './components/rpg/LobbyView';
import { MatchmakingView } from './components/rpg/MatchmakingView';
import { BattleView } from './components/rpg/BattleView';
import { ResultsView } from './components/rpg/ResultsView';
import { PracticeView } from './components/rpg/PracticeView';
import { CharacterSheet } from './components/rpg/CharacterSheet';

// Wrapper component that only shows ChatWidget for logged-in users
const AuthenticatedChatWidget: React.FC = () => {
  const { user } = useAuth();

  // Only show Maestro for logged-in users
  if (!user) return null;

  return <ChatWidget />;
};

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

                  {/* Main app routes (with layout and protection) */}
                  <Route element={
                    <ProtectedRoute>
                      <Layout />
                    </ProtectedRoute>
                  }>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/profile-setup" element={<ProfileSetupPage />} />
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/achievements" element={<AchievementsPage />} />
                    <Route path="/account-settings" element={<AccountSettingsPage />} />
                    <Route path="/presentations" element={<PresentationPage />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/audio-test" element={<AudioPlayerTestPage />} />
                    <Route path="/tools/metronome" element={<MetronomePage />} />
                    <Route path="/tools/virtual-piano" element={<VirtualPianoPage />} />
                    <Route path="/tools/ear-training" element={<EarTrainingPage />} />
                    <Route path="/tools/circle-of-fifths" element={<CircleOfFifthsPage />} />
                    <Route path="/tools/bemol-ear-training" element={<BemolEarTrainingPage />} />
                    <Route path="/tools/sight-reading" element={<SightReadingPage />} />
                    <Route path="/links" element={<LinksPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />
                    <Route path="/instruments" element={<InstrumentsListPage />} />
                    <Route path="/instrument/:id" element={<InstrumentPage />} />
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
                    <Route path="/glossary" element={<GlossaryPage />} />
                    {/* Areas of study routes */}
                    <Route path="/areas-of-study" element={<AreasOfStudyPage />} />
                    {/* Coursework routes */}
                    <Route path="/coursework" element={<CourseworkPage />} />
                    {/* Theory routes (135 React components) */}
                    <Route path="/theory/*" element={<TheoryRoutes />} />
                    {/* AOS content routes */}
                    {/* Specific AOS Pages */}
                    <Route path="/aos/vivaldi-spring-deep-dive" element={<VivaldiSpringDeepDivePage />} />
                    {/* AOS1 Baroque Music Routes (52 pages) */}
                    {BaroqueRoutes}
                    {/* AOS2 Classical Music Routes (52 pages) */}
                    {ClassicalRoutes}
                    {/* AOS3 Romantic Music Routes (58 pages) */}
                    {RomanticRoutes}
                    {/* AOS4 Music and Words Routes (58 pages) */}
                    {MusicAndWordsRoutes}
                    {/* AOS5 Music for Dance Routes (58 pages) */}
                    {DanceRoutes}
                    {/* AOS6 Small Ensemble Routes (53 pages) */}
                    {SmallEnsembleRoutes}
                    {/* AOS7 Stage and Screen Routes (58 pages) */}
                    {StageScreenRoutes}
                    {/* AOS generic content routes */}
                    <Route path="/aos/:aosId/*" element={<AosContentPage />} />

                    {/* RPG Routes */}
                    <Route path="/rpg" element={<LobbyView />} />
                    <Route path="/rpg/matchmaking" element={<MatchmakingView />} />
                    <Route path="/rpg/battle/:matchId" element={<BattleView />} />
                    <Route path="/rpg/results/:matchId" element={<ResultsView />} />
                    <Route path="/rpg/practice" element={<PracticeView />} />
                    <Route path="/rpg/character" element={<CharacterSheet />} />

                    {/* Catch-all route - protected */}
                    <Route path="*" element={<GenericPage />} />
                  </Route>
                </Routes>
                {/* AI Tutor Widget - Only for logged-in users */}
                <AuthenticatedChatWidget />
              </RPGProvider>
            </ProgressProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
