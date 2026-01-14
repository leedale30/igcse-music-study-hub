import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { RPGProvider } from './contexts/RPGContext';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const TestPage = lazy(() => import('./pages/TestPage'));
const MetronomePage = lazy(() => import('./pages/MetronomePage'));
const VirtualPianoPage = lazy(() => import('./pages/VirtualPianoPage'));
const EarTrainingPage = lazy(() => import('./pages/EarTrainingPage'));
const CircleOfFifthsPage = lazy(() => import('./pages/CircleOfFifthsPage'));
const BemolEarTrainingPage = lazy(() => import('./pages/BemolEarTrainingPage'));
const SightReadingPage = lazy(() => import('./pages/SightReadingPage'));
const LinksPage = lazy(() => import('./pages/LinksPage'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ProfileSetupPage = lazy(() => import('./pages/ProfileSetupPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'));
const AccountSettingsPage = lazy(() => import('./pages/AccountSettingsPage'));
const PresentationPage = lazy(() => import('./pages/PresentationPage'));
const AudioPlayerTestPage = lazy(() => import('./pages/AudioPlayerTestPage'));
const InstrumentsListPage = lazy(() => import('./pages/InstrumentsListPage'));
const InstrumentPage = lazy(() => import('./pages/InstrumentPage'));
const FamilyPage = lazy(() => import('./pages/FamilyPage'));
const ListeningExamsPage = lazy(() => import('./pages/ListeningExamsPage'));
const MelodyExamPage = lazy(() => import('./pages/MelodyExamPage'));
const HandelSonataTestPage = lazy(() => import('./pages/HandelSonataTestPage'));
const HaydnQuartetTestPage = lazy(() => import('./pages/HaydnQuartetTestPage'));
const MendelssohnOvertureTestPage = lazy(() => import('./pages/MendelssohnOvertureTestPage'));
const SamSmithTestPage = lazy(() => import('./pages/SamSmithTestPage'));
const ColdplayTestPage = lazy(() => import('./pages/ColdplayTestPage'));
const GodspellTestPage = lazy(() => import('./pages/GodspellTestPage'));
const PiratesCaribbeanTestPage = lazy(() => import('./pages/PiratesCaribbeanTestPage'));
const MoonRiverTestPage = lazy(() => import('./pages/MoonRiverTestPage'));
const TheoryRoutes = lazy(() => import('./routes/TheoryRoutes'));
const AosContentPage = lazy(() => import('./pages/AosContentPage'));
const VivaldiSpringDeepDivePage = lazy(() => import('./pages/aos1/VivaldiSpringDeepDivePage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const CourseworkPage = lazy(() => import('./pages/CourseworkPage'));
const AreasOfStudyPage = lazy(() => import('./pages/AreasOfStudyPage'));
const ExamQuizPage = lazy(() => import('./pages/ExamQuizPage'));

// Lazy load route modules
const BaroqueRoutes = lazy(() => import('./routes/BaroqueRoutes').then(m => ({ default: () => m.BaroqueRoutes })));
const ClassicalRoutes = lazy(() => import('./routes/ClassicalRoutes').then(m => ({ default: () => m.ClassicalRoutes })));
const RomanticRoutes = lazy(() => import('./routes/RomanticRoutes').then(m => ({ default: () => m.RomanticRoutes })));
const MusicAndWordsRoutes = lazy(() => import('./routes/MusicAndWordsRoutes').then(m => ({ default: () => m.MusicAndWordsRoutes })));
const DanceRoutes = lazy(() => import('./routes/DanceRoutes').then(m => ({ default: () => m.DanceRoutes })));
const SmallEnsembleRoutes = lazy(() => import('./routes/SmallEnsembleRoutes').then(m => ({ default: () => m.SmallEnsembleRoutes })));
const StageScreenRoutes = lazy(() => import('./routes/StageScreenRoutes').then(m => ({ default: () => m.StageScreenRoutes })));

// Lazy load heavy components
const SupabaseTestPage = lazy(() => import('./components/SupabaseTestPage').then(m => ({ default: m.SupabaseTestPage })));
const ChatWidget = lazy(() => import('./components/tutor/ChatWidget').then(m => ({ default: m.ChatWidget })));
const LobbyView = lazy(() => import('./components/rpg/LobbyView').then(m => ({ default: m.LobbyView })));
const MatchmakingView = lazy(() => import('./components/rpg/MatchmakingView').then(m => ({ default: m.MatchmakingView })));
const BattleView = lazy(() => import('./components/rpg/BattleView').then(m => ({ default: m.BattleView })));
const ResultsView = lazy(() => import('./components/rpg/ResultsView').then(m => ({ default: m.ResultsView })));
const PracticeView = lazy(() => import('./components/rpg/PracticeView').then(m => ({ default: m.PracticeView })));
const CharacterSheet = lazy(() => import('./components/rpg/CharacterSheet').then(m => ({ default: m.CharacterSheet })));
const InventoryView = lazy(() => import('./components/rpg/InventoryView').then(m => ({ default: m.InventoryView })));
const ShopView = lazy(() => import('./components/rpg/ShopView').then(m => ({ default: m.ShopView })));
const EquipmentView = lazy(() => import('./components/rpg/EquipmentView').then(m => ({ default: m.EquipmentView })));
const TeamView = lazy(() => import('./components/rpg/TeamView').then(m => ({ default: m.TeamView })));
const SkillsView = lazy(() => import('./components/rpg/SkillsView').then(m => ({ default: m.SkillsView })));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
      <p className="text-slate-600 dark:text-slate-400">Loading...</p>
    </div>
  </div>
);

// Wrapper component that only shows ChatWidget for logged-in users
const AuthenticatedChatWidget: React.FC = () => {
  const { user } = useAuth();

  // Only show Maestro for logged-in users
  if (!user) return null;

  return (
    <Suspense fallback={null}>
      <ChatWidget />
    </Suspense>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <ProgressProvider>
              <RPGProvider>
                <Suspense fallback={<PageLoader />}>
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
                      <Route path="/coursework/:sectionId" element={<AosContentPage />} />
                      <Route path="/coursework/:sectionId/:subSectionId" element={<AosContentPage />} />

                      {/* Exam Practice Routes */}
                      <Route path="/exam-practice/1st-year/mock-1/:quizId" element={<ExamQuizPage />} />
                      <Route path="/exam-practice/2nd-year/mock-1/:quizId" element={<ExamQuizPage />} />

                      {/* Theory routes (135 React components) */}
                      <Route path="/theory/*" element={<TheoryRoutes />} />
                      {/* AOS content routes */}
                      {/* Specific AOS Pages */}
                      <Route path="/aos/vivaldi-spring-deep-dive" element={<VivaldiSpringDeepDivePage />} />
                      {/* AOS1 Baroque Music Routes (52 pages) */}
                      <Route path="/aos/baroque/*" element={<BaroqueRoutes />} />
                      {/* AOS2 Classical Music Routes (52 pages) */}
                      <Route path="/aos/classical/*" element={<ClassicalRoutes />} />
                      {/* AOS7 Stage and Screen Routes */}
                      <Route path="/aos/stage-screen/*" element={<StageScreenRoutes />} />
                      <Route path="/areas-of-study/stage-and-screen/*" element={<StageScreenRoutes />} />
                      {/* Dynamic AOS Routes (AOS3-AOS7) */}
                      {/* AOS generic content routes */}
                      <Route path="/aos/:aosId/*" element={<AosContentPage />} />
                      <Route path="/areas-of-study/:aosId/*" element={<AosContentPage />} />

                      {/* RPG Routes */}
                      <Route path="/rpg" element={<LobbyView />} />
                      <Route path="/rpg/matchmaking" element={<MatchmakingView />} />
                      <Route path="/rpg/battle/:matchId" element={<BattleView />} />
                      <Route path="/rpg/results/:matchId" element={<ResultsView />} />
                      <Route path="/rpg/practice" element={<PracticeView />} />
                      <Route path="/rpg/character" element={<CharacterSheet />} />
                      <Route path="/rpg/inventory" element={<InventoryView />} />
                      <Route path="/rpg/shop" element={<ShopView />} />
                      <Route path="/rpg/equipment" element={<EquipmentView />} />
                      <Route path="/rpg/team" element={<TeamView />} />
                      <Route path="/rpg/skills" element={<SkillsView />} />

                      {/* Catch-all route - protected */}
                      <Route path="*" element={<GenericPage />} />
                    </Route>
                  </Routes>
                </Suspense>
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
