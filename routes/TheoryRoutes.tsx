import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TheoryListPage from '../pages/TheoryListPage';

// Import all theory components
import { Ch01BasicconceptsPage } from '../pages/theory/chapter01';
import { Ch01PitchPage } from '../pages/theory/chapter01';
import { Ch01NotationPage } from '../pages/theory/chapter01';
import { Ch01OctaveregistersPage } from '../pages/theory/chapter01';
import { Ch01AccidentalsPage } from '../pages/theory/chapter01';
import { Ch01EnharmonicnotesPage } from '../pages/theory/chapter01';
import { Ch01BasicconceptspracticeexercisesPage } from '../pages/theory/chapter01';
import { Ch01AltoandtenorclefregistersPage } from '../pages/theory/chapter01';
import { Ch02HalfstepsandwholestepsPage } from '../pages/theory/chapter02';
import { Ch02ThemajorscalePage } from '../pages/theory/chapter02';
import { Ch02MajorkeysignaturesPage } from '../pages/theory/chapter02';
import { Ch02MajorkeyspracticeexercisesPage } from '../pages/theory/chapter02';
import { Ch03MinorscalesPage } from '../pages/theory/chapter03';
import { Ch03MinorkeysignaturesPage } from '../pages/theory/chapter03';
import { Ch03ScaledegreenamesPage } from '../pages/theory/chapter03';
import { Ch03MinorkeyspracticeexercisesPage } from '../pages/theory/chapter03';
import { Ch04TimesignaturePage } from '../pages/theory/chapter04';
import { Ch04DurationalsymbolsPage } from '../pages/theory/chapter04';
import { Ch04DotsandtiesPage } from '../pages/theory/chapter04';
import { Ch04MeterPage } from '../pages/theory/chapter04';
import { Ch04TupletsPage } from '../pages/theory/chapter04';
import { Ch04CommonrhythmicnotationerrorsPage } from '../pages/theory/chapter04';
import { Ch04BasicsofrhythmpracticeexercisesPage } from '../pages/theory/chapter04';
import { Ch05IntervalsintroductionPage } from '../pages/theory/chapter05';
import { Ch05HowtoidentifyintervalsPage } from '../pages/theory/chapter05';
import { Ch05HowtowriteintervalsPage } from '../pages/theory/chapter05';
import { Ch05InversionofintervalsPage } from '../pages/theory/chapter05';
import { Ch05CompoundintervalsandtranspositionPage } from '../pages/theory/chapter05';
import { Ch05IntervalspracticeexercisesPage } from '../pages/theory/chapter05';
import { Ch06TriadsintroductionPage } from '../pages/theory/chapter06';
import { Ch06LeadsheetsymbolsPage } from '../pages/theory/chapter06';
import { Ch06InvertedtriadsPage } from '../pages/theory/chapter06';
import { Ch06AnalyzingchordsPage } from '../pages/theory/chapter06';
import { Ch06SimplesuschordsPage } from '../pages/theory/chapter06';
import { Ch06SummaryoftriadconstructionPage } from '../pages/theory/chapter06';
import { Ch06TriadspracticeexercisesPage } from '../pages/theory/chapter06';
import { Ch07RomannumeralchordsymbolsPage } from '../pages/theory/chapter07';
import { Ch07DiatonicchordsinmajorPage } from '../pages/theory/chapter07';
import { Ch07DiatonicchordsinminorPage } from '../pages/theory/chapter07';
import { Ch07CadencesPage } from '../pages/theory/chapter07';
import { Ch07RomannumeralpracticeexercisesPage } from '../pages/theory/chapter07';
import { Ch07SecondarytriadsinmajorandminorPage } from '../pages/theory/chapter07';
import { Ch07InterruptedcadencePage } from '../pages/theory/chapter07';
import { Ch08SeventhchordsintroductionPage } from '../pages/theory/chapter08';
import { Ch08Ivover5suschordPage } from '../pages/theory/chapter08';
import { Ch08RomannumeralsofdiatonicseventhchordsPage } from '../pages/theory/chapter08';
import { Ch08SeventhchordsexercisesPage } from '../pages/theory/chapter08';
import { Ch08DominantanddiminishedseventhsPage } from '../pages/theory/chapter08';
import { Ch09CircleoffifthsPage } from '../pages/theory/chapter09';
import { Ch09HarmonicrhythmPage } from '../pages/theory/chapter09';
import { Ch09ShorterprogressionsfromthecircleoffifthsPage } from '../pages/theory/chapter09';
import { Ch09HarmonicfunctionPage } from '../pages/theory/chapter09';
import { Ch09ExceptionscreatedbysequencesPage } from '../pages/theory/chapter09';
import { Ch09SubtonicviiinpopmusicPage } from '../pages/theory/chapter09';
import { Ch09BestsellerprogressionPage } from '../pages/theory/chapter09';
import { Ch09IViiViViiPage } from '../pages/theory/chapter09';
import { Ch09HarmonicprogressionexercisesPage } from '../pages/theory/chapter09';
import { Ch10NonchordtonesintroductionPage } from '../pages/theory/chapter10';
import { Ch10PassingtonesPage } from '../pages/theory/chapter10';
import { Ch10NeighbortonesPage } from '../pages/theory/chapter10';
import { Ch10AppoggiaturaPage } from '../pages/theory/chapter10';
import { Ch10EscapetonePage } from '../pages/theory/chapter10';
import { Ch10DoubleneighborPage } from '../pages/theory/chapter10';
import { Ch10AnticipationPage } from '../pages/theory/chapter10';
import { Ch10PedalpointPage } from '../pages/theory/chapter10';
import { Ch10SuspensionPage } from '../pages/theory/chapter10';
import { Ch10RetardationPage } from '../pages/theory/chapter10';
import { Ch10IncompleteneighborPage } from '../pages/theory/chapter10';
import { Ch10NonchordtonespracticeexercisesPage } from '../pages/theory/chapter10';
import { Ch10SuspensionwritingandanalysisPage } from '../pages/theory/chapter10';
import { Ch10TonicanddominantpedalsPage } from '../pages/theory/chapter10';
import { Ch11MotivesectionPage } from '../pages/theory/chapter11';
import { Ch11MelodicalterationPage } from '../pages/theory/chapter11';
import { Ch11FragmentsectionPage } from '../pages/theory/chapter11';
import { Ch11PhrasesectionPage } from '../pages/theory/chapter11';
import { Ch11SubphrasePage } from '../pages/theory/chapter11';
import { Ch11MelodicanalysispracticeexercisesPage } from '../pages/theory/chapter11';
import { Ch12VersechorusformPage } from '../pages/theory/chapter12';
import { Ch12AabaformPage } from '../pages/theory/chapter12';
import { Ch12AbacformPage } from '../pages/theory/chapter12';
import { Ch12TwelvebarbluesPage } from '../pages/theory/chapter12';
import { Ch12HarmonicallyclosedandopensectionsPage } from '../pages/theory/chapter12';
import { Ch12PopformpracticeexercisesPage } from '../pages/theory/chapter12';
import { Ch13PerfectauthenticcadencePage } from '../pages/theory/chapter13';
import { Ch13SentencestructurePage } from '../pages/theory/chapter13';
import { Ch13PeriodformPage } from '../pages/theory/chapter13';
import { Ch13AsymmetricalperiodPage } from '../pages/theory/chapter13';
import { Ch13DoubleperiodformPage } from '../pages/theory/chapter13';
import { Ch13PhrasegroupsandphrasechainsPage } from '../pages/theory/chapter13';
import { Ch13ElisionPage } from '../pages/theory/chapter13';
import { Ch13SummaryofphrasesincombinationPage } from '../pages/theory/chapter13';
import { Ch13PhrasesincombinationpracticeexercisesPage } from '../pages/theory/chapter13';
import { Ch14TexturePage } from '../pages/theory/chapter14';
import { Ch14ChoraletexturePage } from '../pages/theory/chapter14';
import { Ch14ArpeggiatedaccompanimentsPage } from '../pages/theory/chapter14';
import { Ch14BlockchordaccompanimentsPage } from '../pages/theory/chapter14';
import { Ch14AfterbeatsoffbeatsPage } from '../pages/theory/chapter14';
import { Ch14ThreetwoclavePage } from '../pages/theory/chapter14';
import { Ch14DistinctivebasslinesPage } from '../pages/theory/chapter14';
import { Ch14InstrumentalandvocaleffectsPage } from '../pages/theory/chapter14';
import { Ch14OrchestralandworldensemblesPage } from '../pages/theory/chapter14';
import { Ch15TheElementsOfMusicPage } from '../pages/theory/chapter15';
import { Ch15EineKleineIiPage } from '../pages/theory/chapter15';
import { Ch15Creatingcontrast5Page } from '../pages/theory/chapter15';
import { Ch16GlobalscalesandmodesPage } from '../pages/theory/chapter16';
import { Ch16IndianclassicalstructureandrhythmsPage } from '../pages/theory/chapter16';
import { Ch16ArabtakhtstructureandrhythmsPage } from '../pages/theory/chapter16';
import { Ch17WordsettingtechniquesPage } from '../pages/theory/chapter17';
import { Ch17PopularsongandmusicalstructuresPage } from '../pages/theory/chapter17';
import { Ch17ChoralandantiphonaltexturesPage } from '../pages/theory/chapter17';
import { Ch18TangoandsalsarhythmsPage } from '../pages/theory/chapter18';
import { Ch18EdmstructureandproductionPage } from '../pages/theory/chapter18';
import { Ch18ProductiontechniquesandeffectsPage } from '../pages/theory/chapter18';
import { Ch19LeitmotifsandprogrammaticdevicesPage } from '../pages/theory/chapter19';
import { Ch19AtonalandchromaticismintensionPage } from '../pages/theory/chapter19';
import { Ch19AdaptivemusicandloopsPage } from '../pages/theory/chapter19';
import { Ch22ModulationintroductionPage } from '../pages/theory/chapter22';
import { Ch22TonicizationversusmodulationPage } from '../pages/theory/chapter22';
import { Ch22KeyrelationshipsPage } from '../pages/theory/chapter22';
import { Ch22ModulationswithdiatonicpivotchordsPage } from '../pages/theory/chapter22';
import { Ch22HowtorecognizeakeyafteramodulationPage } from '../pages/theory/chapter22';
import { Ch22ModulationswithoutpivotchordsPage } from '../pages/theory/chapter22';
import { Ch22ModulationpracticeexercisesPage } from '../pages/theory/chapter22';
import { Ch24BinaryandternaryintroductionPage } from '../pages/theory/chapter24';
import { Ch24MinuetandtriostructurePage } from '../pages/theory/chapter24';
import { Ch24BinaryprinciplePage } from '../pages/theory/chapter24';
import { Ch24TernaryformPage } from '../pages/theory/chapter24';
import { Ch24DistinguishingbetweenroundedbinaryandternaryPage } from '../pages/theory/chapter24';
import { Ch24BinaryandternarypracticeexercisesPage } from '../pages/theory/chapter24';
import { Ch25SonataintroductionPage } from '../pages/theory/chapter25';
import { Ch25RondoformPage } from '../pages/theory/chapter25';
import { Ch25RondocharacterPage } from '../pages/theory/chapter25';
import { Ch25Sonataandrondoforms6Page } from '../pages/theory/chapter25';
import { Ch25SonataandrondopracticeexercisesPage } from '../pages/theory/chapter25';
import { Ch25SonataformstructuralfunctionsPage } from '../pages/theory/chapter25';

const TheoryRoutes: React.FC = () => {
  return (
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
  );
};

export default TheoryRoutes;
