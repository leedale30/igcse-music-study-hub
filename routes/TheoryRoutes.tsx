import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// TheoryListPage is frequently accessed, keep it eager
import TheoryListPage from '../pages/TheoryListPage';

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto mb-2"></div>
      <p className="text-slate-500 dark:text-slate-400 text-sm">Loading...</p>
    </div>
  </div>
);

// Lazy load all theory chapters
// Chapter 01 - Basic Concepts
const Ch01BasicconceptsPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01BasicconceptsPage })));
const Ch01PitchPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01PitchPage })));
const Ch01NotationPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01NotationPage })));
const Ch01OctaveregistersPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01OctaveregistersPage })));
const Ch01AccidentalsPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01AccidentalsPage })));
const Ch01EnharmonicnotesPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01EnharmonicnotesPage })));
const Ch01BasicconceptspracticeexercisesPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01BasicconceptspracticeexercisesPage })));
const Ch01AltoandtenorclefregistersPage = lazy(() => import('../pages/theory/chapter01').then(m => ({ default: m.Ch01AltoandtenorclefregistersPage })));

// Chapter 02 - Major Keys
const Ch02HalfstepsandwholestepsPage = lazy(() => import('../pages/theory/chapter02').then(m => ({ default: m.Ch02HalfstepsandwholestepsPage })));
const Ch02ThemajorscalePage = lazy(() => import('../pages/theory/chapter02').then(m => ({ default: m.Ch02ThemajorscalePage })));
const Ch02MajorkeysignaturesPage = lazy(() => import('../pages/theory/chapter02').then(m => ({ default: m.Ch02MajorkeysignaturesPage })));
const Ch02MajorkeyspracticeexercisesPage = lazy(() => import('../pages/theory/chapter02').then(m => ({ default: m.Ch02MajorkeyspracticeexercisesPage })));

// Chapter 03 - Minor Keys
const Ch03MinorscalesPage = lazy(() => import('../pages/theory/chapter03').then(m => ({ default: m.Ch03MinorscalesPage })));
const Ch03MinorkeysignaturesPage = lazy(() => import('../pages/theory/chapter03').then(m => ({ default: m.Ch03MinorkeysignaturesPage })));
const Ch03ScaledegreenamesPage = lazy(() => import('../pages/theory/chapter03').then(m => ({ default: m.Ch03ScaledegreenamesPage })));
const Ch03MinorkeyspracticeexercisesPage = lazy(() => import('../pages/theory/chapter03').then(m => ({ default: m.Ch03MinorkeyspracticeexercisesPage })));

// Chapter 04 - Rhythm
const Ch04TimesignaturePage = lazy(() => import('../pages/theory/chapter04').then(m => ({ default: m.Ch04TimesignaturePage })));
const Ch04DurationalsymbolsPage = lazy(() => import('../pages/theory/chapter04').then(m => ({ default: m.Ch04DurationalsymbolsPage })));
const Ch04DotsandtiesPage = lazy(() => import('../pages/theory/chapter04').then(m => ({ default: m.Ch04DotsandtiesPage })));
const Ch04MeterPage = lazy(() => import('../pages/theory/chapter04').then(m => ({ default: m.Ch04MeterPage })));
const Ch04TupletsPage = lazy(() => import('../pages/theory/chapter04').then(m => ({ default: m.Ch04TupletsPage })));
const Ch04CommonrhythmicnotationerrorsPage = lazy(() => import('../pages/theory/chapter04').then(m => ({ default: m.Ch04CommonrhythmicnotationerrorsPage })));
const Ch04BasicsofrhythmpracticeexercisesPage = lazy(() => import('../pages/theory/chapter04').then(m => ({ default: m.Ch04BasicsofrhythmpracticeexercisesPage })));

// Chapter 05 - Intervals
const Ch05IntervalsintroductionPage = lazy(() => import('../pages/theory/chapter05').then(m => ({ default: m.Ch05IntervalsintroductionPage })));
const Ch05HowtoidentifyintervalsPage = lazy(() => import('../pages/theory/chapter05').then(m => ({ default: m.Ch05HowtoidentifyintervalsPage })));
const Ch05HowtowriteintervalsPage = lazy(() => import('../pages/theory/chapter05').then(m => ({ default: m.Ch05HowtowriteintervalsPage })));
const Ch05InversionofintervalsPage = lazy(() => import('../pages/theory/chapter05').then(m => ({ default: m.Ch05InversionofintervalsPage })));
const Ch05CompoundintervalsandtranspositionPage = lazy(() => import('../pages/theory/chapter05').then(m => ({ default: m.Ch05CompoundintervalsandtranspositionPage })));
const Ch05IntervalspracticeexercisesPage = lazy(() => import('../pages/theory/chapter05').then(m => ({ default: m.Ch05IntervalspracticeexercisesPage })));

// Chapter 06 - Triads
const Ch06TriadsintroductionPage = lazy(() => import('../pages/theory/chapter06').then(m => ({ default: m.Ch06TriadsintroductionPage })));
const Ch06LeadsheetsymbolsPage = lazy(() => import('../pages/theory/chapter06').then(m => ({ default: m.Ch06LeadsheetsymbolsPage })));
const Ch06InvertedtriadsPage = lazy(() => import('../pages/theory/chapter06').then(m => ({ default: m.Ch06InvertedtriadsPage })));
const Ch06AnalyzingchordsPage = lazy(() => import('../pages/theory/chapter06').then(m => ({ default: m.Ch06AnalyzingchordsPage })));
const Ch06SimplesuschordsPage = lazy(() => import('../pages/theory/chapter06').then(m => ({ default: m.Ch06SimplesuschordsPage })));
const Ch06SummaryoftriadconstructionPage = lazy(() => import('../pages/theory/chapter06').then(m => ({ default: m.Ch06SummaryoftriadconstructionPage })));
const Ch06TriadspracticeexercisesPage = lazy(() => import('../pages/theory/chapter06').then(m => ({ default: m.Ch06TriadspracticeexercisesPage })));

// Chapter 07 - Roman Numerals
const Ch07RomannumeralchordsymbolsPage = lazy(() => import('../pages/theory/chapter07').then(m => ({ default: m.Ch07RomannumeralchordsymbolsPage })));
const Ch07DiatonicchordsinmajorPage = lazy(() => import('../pages/theory/chapter07').then(m => ({ default: m.Ch07DiatonicchordsinmajorPage })));
const Ch07DiatonicchordsinminorPage = lazy(() => import('../pages/theory/chapter07').then(m => ({ default: m.Ch07DiatonicchordsinminorPage })));
const Ch07CadencesPage = lazy(() => import('../pages/theory/chapter07').then(m => ({ default: m.Ch07CadencesPage })));
const Ch07RomannumeralpracticeexercisesPage = lazy(() => import('../pages/theory/chapter07').then(m => ({ default: m.Ch07RomannumeralpracticeexercisesPage })));
const Ch07SecondarytriadsinmajorandminorPage = lazy(() => import('../pages/theory/chapter07').then(m => ({ default: m.Ch07SecondarytriadsinmajorandminorPage })));
const Ch07InterruptedcadencePage = lazy(() => import('../pages/theory/chapter07').then(m => ({ default: m.Ch07InterruptedcadencePage })));

// Chapter 08 - Seventh Chords
const Ch08SeventhchordsintroductionPage = lazy(() => import('../pages/theory/chapter08').then(m => ({ default: m.Ch08SeventhchordsintroductionPage })));
const Ch08Ivover5suschordPage = lazy(() => import('../pages/theory/chapter08').then(m => ({ default: m.Ch08Ivover5suschordPage })));
const Ch08RomannumeralsofdiatonicseventhchordsPage = lazy(() => import('../pages/theory/chapter08').then(m => ({ default: m.Ch08RomannumeralsofdiatonicseventhchordsPage })));
const Ch08SeventhchordsexercisesPage = lazy(() => import('../pages/theory/chapter08').then(m => ({ default: m.Ch08SeventhchordsexercisesPage })));
const Ch08DominantanddiminishedseventhsPage = lazy(() => import('../pages/theory/chapter08').then(m => ({ default: m.Ch08DominantanddiminishedseventhsPage })));

// Chapter 09 - Harmonic Progression
const Ch09CircleoffifthsPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09CircleoffifthsPage })));
const Ch09HarmonicrhythmPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09HarmonicrhythmPage })));
const Ch09ShorterprogressionsfromthecircleoffifthsPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09ShorterprogressionsfromthecircleoffifthsPage })));
const Ch09HarmonicfunctionPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09HarmonicfunctionPage })));
const Ch09ExceptionscreatedbysequencesPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09ExceptionscreatedbysequencesPage })));
const Ch09SubtonicviiinpopmusicPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09SubtonicviiinpopmusicPage })));
const Ch09BestsellerprogressionPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09BestsellerprogressionPage })));
const Ch09IViiViViiPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09IViiViViiPage })));
const Ch09HarmonicprogressionexercisesPage = lazy(() => import('../pages/theory/chapter09').then(m => ({ default: m.Ch09HarmonicprogressionexercisesPage })));

// Chapter 10 - Non-chord Tones
const Ch10NonchordtonesintroductionPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10NonchordtonesintroductionPage })));
const Ch10PassingtonesPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10PassingtonesPage })));
const Ch10NeighbortonesPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10NeighbortonesPage })));
const Ch10AppoggiaturaPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10AppoggiaturaPage })));
const Ch10EscapetonePage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10EscapetonePage })));
const Ch10DoubleneighborPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10DoubleneighborPage })));
const Ch10AnticipationPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10AnticipationPage })));
const Ch10PedalpointPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10PedalpointPage })));
const Ch10SuspensionPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10SuspensionPage })));
const Ch10RetardationPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10RetardationPage })));
const Ch10IncompleteneighborPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10IncompleteneighborPage })));
const Ch10NonchordtonespracticeexercisesPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10NonchordtonespracticeexercisesPage })));
const Ch10SuspensionwritingandanalysisPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10SuspensionwritingandanalysisPage })));
const Ch10TonicanddominantpedalsPage = lazy(() => import('../pages/theory/chapter10').then(m => ({ default: m.Ch10TonicanddominantpedalsPage })));

// Chapters 11-25 - Form and Analysis
const Ch11MotivesectionPage = lazy(() => import('../pages/theory/chapter11').then(m => ({ default: m.Ch11MotivesectionPage })));
const Ch11MelodicalterationPage = lazy(() => import('../pages/theory/chapter11').then(m => ({ default: m.Ch11MelodicalterationPage })));
const Ch11FragmentsectionPage = lazy(() => import('../pages/theory/chapter11').then(m => ({ default: m.Ch11FragmentsectionPage })));
const Ch11PhrasesectionPage = lazy(() => import('../pages/theory/chapter11').then(m => ({ default: m.Ch11PhrasesectionPage })));
const Ch11SubphrasePage = lazy(() => import('../pages/theory/chapter11').then(m => ({ default: m.Ch11SubphrasePage })));
const Ch11MelodicanalysispracticeexercisesPage = lazy(() => import('../pages/theory/chapter11').then(m => ({ default: m.Ch11MelodicanalysispracticeexercisesPage })));

const Ch12VersechorusformPage = lazy(() => import('../pages/theory/chapter12').then(m => ({ default: m.Ch12VersechorusformPage })));
const Ch12AabaformPage = lazy(() => import('../pages/theory/chapter12').then(m => ({ default: m.Ch12AabaformPage })));
const Ch12AbacformPage = lazy(() => import('../pages/theory/chapter12').then(m => ({ default: m.Ch12AbacformPage })));
const Ch12TwelvebarbluesPage = lazy(() => import('../pages/theory/chapter12').then(m => ({ default: m.Ch12TwelvebarbluesPage })));
const Ch12HarmonicallyclosedandopensectionsPage = lazy(() => import('../pages/theory/chapter12').then(m => ({ default: m.Ch12HarmonicallyclosedandopensectionsPage })));
const Ch12PopformpracticeexercisesPage = lazy(() => import('../pages/theory/chapter12').then(m => ({ default: m.Ch12PopformpracticeexercisesPage })));

const Ch13PerfectauthenticcadencePage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13PerfectauthenticcadencePage })));
const Ch13SentencestructurePage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13SentencestructurePage })));
const Ch13PeriodformPage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13PeriodformPage })));
const Ch13AsymmetricalperiodPage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13AsymmetricalperiodPage })));
const Ch13DoubleperiodformPage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13DoubleperiodformPage })));
const Ch13PhrasegroupsandphrasechainsPage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13PhrasegroupsandphrasechainsPage })));
const Ch13ElisionPage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13ElisionPage })));
const Ch13SummaryofphrasesincombinationPage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13SummaryofphrasesincombinationPage })));
const Ch13PhrasesincombinationpracticeexercisesPage = lazy(() => import('../pages/theory/chapter13').then(m => ({ default: m.Ch13PhrasesincombinationpracticeexercisesPage })));

const Ch14TexturePage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14TexturePage })));
const Ch14ChoraletexturePage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14ChoraletexturePage })));
const Ch14ArpeggiatedaccompanimentsPage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14ArpeggiatedaccompanimentsPage })));
const Ch14BlockchordaccompanimentsPage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14BlockchordaccompanimentsPage })));
const Ch14AfterbeatsoffbeatsPage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14AfterbeatsoffbeatsPage })));
const Ch14ThreetwoclavePage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14ThreetwoclavePage })));
const Ch14DistinctivebasslinesPage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14DistinctivebasslinesPage })));
const Ch14InstrumentalandvocaleffectsPage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14InstrumentalandvocaleffectsPage })));
const Ch14OrchestralandworldensemblesPage = lazy(() => import('../pages/theory/chapter14').then(m => ({ default: m.Ch14OrchestralandworldensemblesPage })));

const Ch15TheElementsOfMusicPage = lazy(() => import('../pages/theory/chapter15').then(m => ({ default: m.Ch15TheElementsOfMusicPage })));
const Ch15EineKleineIiPage = lazy(() => import('../pages/theory/chapter15').then(m => ({ default: m.Ch15EineKleineIiPage })));
const Ch15Creatingcontrast5Page = lazy(() => import('../pages/theory/chapter15').then(m => ({ default: m.Ch15Creatingcontrast5Page })));

const Ch16GlobalscalesandmodesPage = lazy(() => import('../pages/theory/chapter16').then(m => ({ default: m.Ch16GlobalscalesandmodesPage })));
const Ch16IndianclassicalstructureandrhythmsPage = lazy(() => import('../pages/theory/chapter16').then(m => ({ default: m.Ch16IndianclassicalstructureandrhythmsPage })));
const Ch16ArabtakhtstructureandrhythmsPage = lazy(() => import('../pages/theory/chapter16').then(m => ({ default: m.Ch16ArabtakhtstructureandrhythmsPage })));

const Ch17WordsettingtechniquesPage = lazy(() => import('../pages/theory/chapter17').then(m => ({ default: m.Ch17WordsettingtechniquesPage })));
const Ch17PopularsongandmusicalstructuresPage = lazy(() => import('../pages/theory/chapter17').then(m => ({ default: m.Ch17PopularsongandmusicalstructuresPage })));
const Ch17ChoralandantiphonaltexturesPage = lazy(() => import('../pages/theory/chapter17').then(m => ({ default: m.Ch17ChoralandantiphonaltexturesPage })));

const Ch18TangoandsalsarhythmsPage = lazy(() => import('../pages/theory/chapter18').then(m => ({ default: m.Ch18TangoandsalsarhythmsPage })));
const Ch18EdmstructureandproductionPage = lazy(() => import('../pages/theory/chapter18').then(m => ({ default: m.Ch18EdmstructureandproductionPage })));
const Ch18ProductiontechniquesandeffectsPage = lazy(() => import('../pages/theory/chapter18').then(m => ({ default: m.Ch18ProductiontechniquesandeffectsPage })));

const Ch19LeitmotifsandprogrammaticdevicesPage = lazy(() => import('../pages/theory/chapter19').then(m => ({ default: m.Ch19LeitmotifsandprogrammaticdevicesPage })));
const Ch19AtonalandchromaticismintensionPage = lazy(() => import('../pages/theory/chapter19').then(m => ({ default: m.Ch19AtonalandchromaticismintensionPage })));
const Ch19AdaptivemusicandloopsPage = lazy(() => import('../pages/theory/chapter19').then(m => ({ default: m.Ch19AdaptivemusicandloopsPage })));

const Ch22ModulationintroductionPage = lazy(() => import('../pages/theory/chapter22').then(m => ({ default: m.Ch22ModulationintroductionPage })));
const Ch22TonicizationversusmodulationPage = lazy(() => import('../pages/theory/chapter22').then(m => ({ default: m.Ch22TonicizationversusmodulationPage })));
const Ch22KeyrelationshipsPage = lazy(() => import('../pages/theory/chapter22').then(m => ({ default: m.Ch22KeyrelationshipsPage })));
const Ch22ModulationswithdiatonicpivotchordsPage = lazy(() => import('../pages/theory/chapter22').then(m => ({ default: m.Ch22ModulationswithdiatonicpivotchordsPage })));
const Ch22HowtorecognizeakeyafteramodulationPage = lazy(() => import('../pages/theory/chapter22').then(m => ({ default: m.Ch22HowtorecognizeakeyafteramodulationPage })));
const Ch22ModulationswithoutpivotchordsPage = lazy(() => import('../pages/theory/chapter22').then(m => ({ default: m.Ch22ModulationswithoutpivotchordsPage })));
const Ch22ModulationpracticeexercisesPage = lazy(() => import('../pages/theory/chapter22').then(m => ({ default: m.Ch22ModulationpracticeexercisesPage })));

const Ch24BinaryandternaryintroductionPage = lazy(() => import('../pages/theory/chapter24').then(m => ({ default: m.Ch24BinaryandternaryintroductionPage })));
const Ch24MinuetandtriostructurePage = lazy(() => import('../pages/theory/chapter24').then(m => ({ default: m.Ch24MinuetandtriostructurePage })));
const Ch24BinaryprinciplePage = lazy(() => import('../pages/theory/chapter24').then(m => ({ default: m.Ch24BinaryprinciplePage })));
const Ch24TernaryformPage = lazy(() => import('../pages/theory/chapter24').then(m => ({ default: m.Ch24TernaryformPage })));
const Ch24DistinguishingbetweenroundedbinaryandternaryPage = lazy(() => import('../pages/theory/chapter24').then(m => ({ default: m.Ch24DistinguishingbetweenroundedbinaryandternaryPage })));
const Ch24BinaryandternarypracticeexercisesPage = lazy(() => import('../pages/theory/chapter24').then(m => ({ default: m.Ch24BinaryandternarypracticeexercisesPage })));

const Ch25SonataintroductionPage = lazy(() => import('../pages/theory/chapter25').then(m => ({ default: m.Ch25SonataintroductionPage })));
const Ch25RondoformPage = lazy(() => import('../pages/theory/chapter25').then(m => ({ default: m.Ch25RondoformPage })));
const Ch25RondocharacterPage = lazy(() => import('../pages/theory/chapter25').then(m => ({ default: m.Ch25RondocharacterPage })));
const Ch25Sonataandrondoforms6Page = lazy(() => import('../pages/theory/chapter25').then(m => ({ default: m.Ch25Sonataandrondoforms6Page })));
const Ch25SonataandrondopracticeexercisesPage = lazy(() => import('../pages/theory/chapter25').then(m => ({ default: m.Ch25SonataandrondopracticeexercisesPage })));
const Ch25SonataformstructuralfunctionsPage = lazy(() => import('../pages/theory/chapter25').then(m => ({ default: m.Ch25SonataformstructuralfunctionsPage })));

const TheoryRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index element={<TheoryListPage />} />
        <Route path="01-00" element={<Ch01BasicconceptsPage />} />
        <Route path="01-01" element={<Ch01PitchPage />} />
        <Route path="01-02" element={<Ch01NotationPage />} />
        <Route path="01-03" element={<Ch01OctaveregistersPage />} />
        <Route path="01-04" element={<Ch01AccidentalsPage />} />
        <Route path="01-05" element={<Ch01EnharmonicnotesPage />} />
        <Route path="01-06" element={<Ch01BasicconceptspracticeexercisesPage />} />
        <Route path="01-07" element={<Ch01AltoandtenorclefregistersPage />} />
        <Route path="02-01" element={<Ch02HalfstepsandwholestepsPage />} />
        <Route path="02-02" element={<Ch02ThemajorscalePage />} />
        <Route path="02-03" element={<Ch02MajorkeysignaturesPage />} />
        <Route path="02-04" element={<Ch02MajorkeyspracticeexercisesPage />} />
        <Route path="03-01" element={<Ch03MinorscalesPage />} />
        <Route path="03-02" element={<Ch03MinorkeysignaturesPage />} />
        <Route path="03-03" element={<Ch03ScaledegreenamesPage />} />
        <Route path="03-04" element={<Ch03MinorkeyspracticeexercisesPage />} />
        <Route path="04-01" element={<Ch04TimesignaturePage />} />
        <Route path="04-02" element={<Ch04DurationalsymbolsPage />} />
        <Route path="04-03" element={<Ch04DotsandtiesPage />} />
        <Route path="04-04" element={<Ch04MeterPage />} />
        <Route path="04-05" element={<Ch04TupletsPage />} />
        <Route path="04-06" element={<Ch04CommonrhythmicnotationerrorsPage />} />
        <Route path="04-07" element={<Ch04BasicsofrhythmpracticeexercisesPage />} />
        <Route path="05-01" element={<Ch05IntervalsintroductionPage />} />
        <Route path="05-02" element={<Ch05HowtoidentifyintervalsPage />} />
        <Route path="05-03" element={<Ch05HowtowriteintervalsPage />} />
        <Route path="05-04" element={<Ch05InversionofintervalsPage />} />
        <Route path="05-05" element={<Ch05CompoundintervalsandtranspositionPage />} />
        <Route path="05-06" element={<Ch05IntervalspracticeexercisesPage />} />
        <Route path="06-01" element={<Ch06TriadsintroductionPage />} />
        <Route path="06-02" element={<Ch06LeadsheetsymbolsPage />} />
        <Route path="06-03" element={<Ch06InvertedtriadsPage />} />
        <Route path="06-04" element={<Ch06AnalyzingchordsPage />} />
        <Route path="06-05" element={<Ch06SimplesuschordsPage />} />
        <Route path="06-06" element={<Ch06SummaryoftriadconstructionPage />} />
        <Route path="06-07" element={<Ch06TriadspracticeexercisesPage />} />
        <Route path="07-01" element={<Ch07RomannumeralchordsymbolsPage />} />
        <Route path="07-02" element={<Ch07DiatonicchordsinmajorPage />} />
        <Route path="07-03" element={<Ch07DiatonicchordsinminorPage />} />
        <Route path="07-04" element={<Ch07CadencesPage />} />
        <Route path="07-05" element={<Ch07RomannumeralpracticeexercisesPage />} />
        <Route path="07-06" element={<Ch07SecondarytriadsinmajorandminorPage />} />
        <Route path="07-07" element={<Ch07InterruptedcadencePage />} />
        <Route path="08-01" element={<Ch08SeventhchordsintroductionPage />} />
        <Route path="08-02" element={<Ch08Ivover5suschordPage />} />
        <Route path="08-03" element={<Ch08RomannumeralsofdiatonicseventhchordsPage />} />
        <Route path="08-04" element={<Ch08SeventhchordsexercisesPage />} />
        <Route path="08-05" element={<Ch08DominantanddiminishedseventhsPage />} />
        <Route path="09-01" element={<Ch09CircleoffifthsPage />} />
        <Route path="09-02" element={<Ch09HarmonicrhythmPage />} />
        <Route path="09-03" element={<Ch09ShorterprogressionsfromthecircleoffifthsPage />} />
        <Route path="09-04" element={<Ch09HarmonicfunctionPage />} />
        <Route path="09-05" element={<Ch09ExceptionscreatedbysequencesPage />} />
        <Route path="09-06" element={<Ch09SubtonicviiinpopmusicPage />} />
        <Route path="09-07" element={<Ch09BestsellerprogressionPage />} />
        <Route path="09-08" element={<Ch09IViiViViiPage />} />
        <Route path="09-09" element={<Ch09HarmonicprogressionexercisesPage />} />
        <Route path="10-01" element={<Ch10NonchordtonesintroductionPage />} />
        <Route path="10-02" element={<Ch10PassingtonesPage />} />
        <Route path="10-03" element={<Ch10NeighbortonesPage />} />
        <Route path="10-04" element={<Ch10AppoggiaturaPage />} />
        <Route path="10-05" element={<Ch10EscapetonePage />} />
        <Route path="10-06" element={<Ch10DoubleneighborPage />} />
        <Route path="10-07" element={<Ch10AnticipationPage />} />
        <Route path="10-08" element={<Ch10PedalpointPage />} />
        <Route path="10-09" element={<Ch10SuspensionPage />} />
        <Route path="10-10" element={<Ch10RetardationPage />} />
        <Route path="10-11" element={<Ch10IncompleteneighborPage />} />
        <Route path="10-12" element={<Ch10NonchordtonespracticeexercisesPage />} />
        <Route path="10-13" element={<Ch10SuspensionwritingandanalysisPage />} />
        <Route path="10-14" element={<Ch10TonicanddominantpedalsPage />} />
        <Route path="11-01" element={<Ch11MotivesectionPage />} />
        <Route path="11-02" element={<Ch11MelodicalterationPage />} />
        <Route path="11-03" element={<Ch11FragmentsectionPage />} />
        <Route path="11-04" element={<Ch11PhrasesectionPage />} />
        <Route path="11-05" element={<Ch11SubphrasePage />} />
        <Route path="11-06" element={<Ch11MelodicanalysispracticeexercisesPage />} />
        <Route path="12-01" element={<Ch12VersechorusformPage />} />
        <Route path="12-02" element={<Ch12AabaformPage />} />
        <Route path="12-03" element={<Ch12AbacformPage />} />
        <Route path="12-04" element={<Ch12TwelvebarbluesPage />} />
        <Route path="12-05" element={<Ch12HarmonicallyclosedandopensectionsPage />} />
        <Route path="12-06" element={<Ch12PopformpracticeexercisesPage />} />
        <Route path="13-01" element={<Ch13PerfectauthenticcadencePage />} />
        <Route path="13-02" element={<Ch13SentencestructurePage />} />
        <Route path="13-03" element={<Ch13PeriodformPage />} />
        <Route path="13-04" element={<Ch13AsymmetricalperiodPage />} />
        <Route path="13-05" element={<Ch13DoubleperiodformPage />} />
        <Route path="13-06" element={<Ch13PhrasegroupsandphrasechainsPage />} />
        <Route path="13-07" element={<Ch13ElisionPage />} />
        <Route path="13-08" element={<Ch13SummaryofphrasesincombinationPage />} />
        <Route path="13-09" element={<Ch13PhrasesincombinationpracticeexercisesPage />} />
        <Route path="14-01" element={<Ch14TexturePage />} />
        <Route path="14-02" element={<Ch14ChoraletexturePage />} />
        <Route path="14-03" element={<Ch14ArpeggiatedaccompanimentsPage />} />
        <Route path="14-04" element={<Ch14BlockchordaccompanimentsPage />} />
        <Route path="14-05" element={<Ch14AfterbeatsoffbeatsPage />} />
        <Route path="14-06" element={<Ch14ThreetwoclavePage />} />
        <Route path="14-07" element={<Ch14DistinctivebasslinesPage />} />
        <Route path="14-08" element={<Ch14InstrumentalandvocaleffectsPage />} />
        <Route path="14-09" element={<Ch14OrchestralandworldensemblesPage />} />
        <Route path="15-01" element={<Ch15TheElementsOfMusicPage />} />
        <Route path="15-02" element={<Ch15EineKleineIiPage />} />
        <Route path="15-03" element={<Ch15Creatingcontrast5Page />} />
        <Route path="16-01" element={<Ch16GlobalscalesandmodesPage />} />
        <Route path="16-02" element={<Ch16IndianclassicalstructureandrhythmsPage />} />
        <Route path="16-03" element={<Ch16ArabtakhtstructureandrhythmsPage />} />
        <Route path="17-01" element={<Ch17WordsettingtechniquesPage />} />
        <Route path="17-02" element={<Ch17PopularsongandmusicalstructuresPage />} />
        <Route path="17-03" element={<Ch17ChoralandantiphonaltexturesPage />} />
        <Route path="18-01" element={<Ch18TangoandsalsarhythmsPage />} />
        <Route path="18-02" element={<Ch18EdmstructureandproductionPage />} />
        <Route path="18-03" element={<Ch18ProductiontechniquesandeffectsPage />} />
        <Route path="19-01" element={<Ch19LeitmotifsandprogrammaticdevicesPage />} />
        <Route path="19-02" element={<Ch19AtonalandchromaticismintensionPage />} />
        <Route path="19-03" element={<Ch19AdaptivemusicandloopsPage />} />
        <Route path="22-01" element={<Ch22ModulationintroductionPage />} />
        <Route path="22-02" element={<Ch22TonicizationversusmodulationPage />} />
        <Route path="22-03" element={<Ch22KeyrelationshipsPage />} />
        <Route path="22-04" element={<Ch22ModulationswithdiatonicpivotchordsPage />} />
        <Route path="22-05" element={<Ch22HowtorecognizeakeyafteramodulationPage />} />
        <Route path="22-07" element={<Ch22ModulationswithoutpivotchordsPage />} />
        <Route path="22-08" element={<Ch22ModulationpracticeexercisesPage />} />
        <Route path="24-01" element={<Ch24BinaryandternaryintroductionPage />} />
        <Route path="24-03" element={<Ch24MinuetandtriostructurePage />} />
        <Route path="24-06" element={<Ch24BinaryprinciplePage />} />
        <Route path="24-07" element={<Ch24TernaryformPage />} />
        <Route path="24-08" element={<Ch24DistinguishingbetweenroundedbinaryandternaryPage />} />
        <Route path="24-09" element={<Ch24BinaryandternarypracticeexercisesPage />} />
        <Route path="25-01" element={<Ch25SonataintroductionPage />} />
        <Route path="25-03" element={<Ch25RondoformPage />} />
        <Route path="25-04" element={<Ch25RondocharacterPage />} />
        <Route path="25-05" element={<Ch25Sonataandrondoforms6Page />} />
        <Route path="25-06" element={<Ch25SonataandrondopracticeexercisesPage />} />
        <Route path="25-07" element={<Ch25SonataformstructuralfunctionsPage />} />
      </Routes>
    </Suspense>
  );
};

export default TheoryRoutes;
