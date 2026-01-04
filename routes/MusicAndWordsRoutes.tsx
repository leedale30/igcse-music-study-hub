import React from 'react';
import { Route } from 'react-router-dom';
import {
  MusicAndWords0101DynamicsPage,
  MusicAndWords0102RhythmPage,
  MusicAndWords0103MetrePage,
  MusicAndWords0104TempoPage,
  MusicAndWords0105MelodyPage,
  MusicAndWords0106HarmonyPage,
  MusicAndWords0107TonalityPage,
  MusicAndWords0108TexturePage,
  MusicAndWords0109TimbrePage,
  MusicAndWords0110StructureFormPage,
  MusicAndWords01CoreMusicalElementsPage,
  MusicAndWords0201InstrumentationPage,
  MusicAndWords0202OrganologyPage,
  MusicAndWords0203VocalTechniquesPage,
  MusicAndWords0204ExtendedTechniquesPage,
  MusicAndWords0205ImprovisationPage,
  MusicAndWords0206CompositionTechniquesPage,
  MusicAndWords02SoundSourcesAndTechniquesPage,
  MusicAndWords030101RitualPage,
  MusicAndWords030102CelebrationPage,
  MusicAndWords030103WorkProtestPage,
  MusicAndWords030104HealingPage,
  MusicAndWords030105SocialIdentityPage,
  MusicAndWords0301CulturalFunctionPage,
  MusicAndWords0302HistoricalBackgroundPage,
  MusicAndWords0303MovementAndDancePage,
  MusicAndWords0304EconomicsAndPatronagePage,
  MusicAndWords0305KeyWorksPiecesPage,
  MusicAndWords0306KeyComposersArtistsPage,
  MusicAndWords030701StagingPage,
  MusicAndWords030702PerformerAudienceRelationshipPage,
  MusicAndWords030703AttirePage,
  MusicAndWords030704RitualisticElementsPage,
  MusicAndWords0307PerformancePracticePage,
  MusicAndWords03CulturalAndHistoricalContextPage,
  MusicAndWords0401SpecificTerminologyPage,
  MusicAndWords0402LyricsAndTextAnalysisPage,
  MusicAndWords0402LyricsTextAnalysisPage,
  MusicAndWords0403NotationSystemPage,
  MusicAndWords0404OralAuralTraditionPage,
  MusicAndWords0405MusicTheoryFrameworkPage,
  MusicAndWords04LanguageLiteracyAndTheoryPage,
  MusicAndWords0501MusicTechnologyPage,
  MusicAndWords0502RecordingAndProductionTechniquesPage,
  MusicAndWords0503DistributionAndMediaPage,
  MusicAndWords0504HybridizationPage,
  MusicAndWords05TechnologyAndInnovationPage,
  MusicAndWords0601GenreAndStylePage,
  MusicAndWords0602AestheticValuesPage,
  MusicAndWords0603AudienceReceptionPage,
  MusicAndWords0604PoliticalSocialCommentaryPage,
  MusicAndWords0605GeographicInfluencePage,
  MusicAndWords06AnalyticalDomainsPage,
  MusicAndWords07GlossaryPage,
  MusicAndWordsMusicAndWordsPage,
} from '../pages/aos4/music-words';

export const MusicAndWordsRoutes = (
  <>
    <Route path="/aos/music-words/core-musical-elements/dynamics" element={<MusicAndWords0101DynamicsPage />} />
    <Route path="/aos/music-words/core-musical-elements/rhythm" element={<MusicAndWords0102RhythmPage />} />
    <Route path="/aos/music-words/core-musical-elements/metre" element={<MusicAndWords0103MetrePage />} />
    <Route path="/aos/music-words/core-musical-elements/tempo" element={<MusicAndWords0104TempoPage />} />
    <Route path="/aos/music-words/core-musical-elements/melody" element={<MusicAndWords0105MelodyPage />} />
    <Route path="/aos/music-words/core-musical-elements/harmony" element={<MusicAndWords0106HarmonyPage />} />
    <Route path="/aos/music-words/core-musical-elements/tonality" element={<MusicAndWords0107TonalityPage />} />
    <Route path="/aos/music-words/core-musical-elements/texture" element={<MusicAndWords0108TexturePage />} />
    <Route path="/aos/music-words/core-musical-elements/timbre" element={<MusicAndWords0109TimbrePage />} />
    <Route path="/aos/music-words/core-musical-elements/structure-form" element={<MusicAndWords0110StructureFormPage />} />
    <Route path="/aos/music-words/core-musical-elements" element={<MusicAndWords01CoreMusicalElementsPage />} />
    <Route path="/aos/music-words/sound-sources-and-techniques/instrumentation" element={<MusicAndWords0201InstrumentationPage />} />
    <Route path="/aos/music-words/sound-sources-and-techniques/organology" element={<MusicAndWords0202OrganologyPage />} />
    <Route path="/aos/music-words/sound-sources-and-techniques/vocal-techniques" element={<MusicAndWords0203VocalTechniquesPage />} />
    <Route path="/aos/music-words/sound-sources-and-techniques/extended-techniques" element={<MusicAndWords0204ExtendedTechniquesPage />} />
    <Route path="/aos/music-words/sound-sources-and-techniques/improvisation" element={<MusicAndWords0205ImprovisationPage />} />
    <Route path="/aos/music-words/sound-sources-and-techniques/composition-techniques" element={<MusicAndWords0206CompositionTechniquesPage />} />
    <Route path="/aos/music-words/sound-sources-and-techniques" element={<MusicAndWords02SoundSourcesAndTechniquesPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030101RitualPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030102CelebrationPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030103WorkProtestPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030104HealingPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030105SocialIdentityPage />} />
    <Route path="/aos/music-words/cultural-and-historical-context/cultural-function" element={<MusicAndWords0301CulturalFunctionPage />} />
    <Route path="/aos/music-words/cultural-and-historical-context/historical-background" element={<MusicAndWords0302HistoricalBackgroundPage />} />
    <Route path="/aos/music-words/cultural-and-historical-context/movement-and-dance" element={<MusicAndWords0303MovementAndDancePage />} />
    <Route path="/aos/music-words/cultural-and-historical-context/economics-and-patronage" element={<MusicAndWords0304EconomicsAndPatronagePage />} />
    <Route path="/aos/music-words/cultural-and-historical-context/key-works-pieces" element={<MusicAndWords0305KeyWorksPiecesPage />} />
    <Route path="/aos/music-words/cultural-and-historical-context/key-composers-artists" element={<MusicAndWords0306KeyComposersArtistsPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030701StagingPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030702PerformerAudienceRelationshipPage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030703AttirePage />} />
    <Route path="/aos/music-words" element={<MusicAndWords030704RitualisticElementsPage />} />
    <Route path="/aos/music-words/cultural-and-historical-context/performance-practice" element={<MusicAndWords0307PerformancePracticePage />} />
    <Route path="/aos/music-words/cultural-and-historical-context" element={<MusicAndWords03CulturalAndHistoricalContextPage />} />
    <Route path="/aos/music-words/language-literacy-and-theory/specific-terminology" element={<MusicAndWords0401SpecificTerminologyPage />} />
    <Route path="/aos/music-words/language-literacy-and-theory/lyrics-and-text-analysis" element={<MusicAndWords0402LyricsAndTextAnalysisPage />} />
    <Route path="/aos/music-words/language-literacy-and-theory/lyrics-and-text-analysis" element={<MusicAndWords0402LyricsTextAnalysisPage />} />
    <Route path="/aos/music-words/language-literacy-and-theory/notation-system" element={<MusicAndWords0403NotationSystemPage />} />
    <Route path="/aos/music-words/language-literacy-and-theory/oral-aural-tradition" element={<MusicAndWords0404OralAuralTraditionPage />} />
    <Route path="/aos/music-words/language-literacy-and-theory/music-theory-framework" element={<MusicAndWords0405MusicTheoryFrameworkPage />} />
    <Route path="/aos/music-words/language-literacy-and-theory" element={<MusicAndWords04LanguageLiteracyAndTheoryPage />} />
    <Route path="/aos/music-words/technology-and-innovation/music-technology" element={<MusicAndWords0501MusicTechnologyPage />} />
    <Route path="/aos/music-words/technology-and-innovation/recording-and-production" element={<MusicAndWords0502RecordingAndProductionTechniquesPage />} />
    <Route path="/aos/music-words/technology-and-innovation/distribution-and-media" element={<MusicAndWords0503DistributionAndMediaPage />} />
    <Route path="/aos/music-words/technology-and-innovation/hybridization" element={<MusicAndWords0504HybridizationPage />} />
    <Route path="/aos/music-words/technology-and-innovation" element={<MusicAndWords05TechnologyAndInnovationPage />} />
    <Route path="/aos/music-words/analytical-domains/genre-and-style" element={<MusicAndWords0601GenreAndStylePage />} />
    <Route path="/aos/music-words/analytical-domains/aesthetic-values" element={<MusicAndWords0602AestheticValuesPage />} />
    <Route path="/aos/music-words/analytical-domains/audience-reception" element={<MusicAndWords0603AudienceReceptionPage />} />
    <Route path="/aos/music-words/analytical-domains/political-social-commentary" element={<MusicAndWords0604PoliticalSocialCommentaryPage />} />
    <Route path="/aos/music-words/analytical-domains/geographic-influence" element={<MusicAndWords0605GeographicInfluencePage />} />
    <Route path="/aos/music-words/analytical-domains" element={<MusicAndWords06AnalyticalDomainsPage />} />
    <Route path="/aos/music-words/glossary" element={<MusicAndWords07GlossaryPage />} />
    <Route path="/aos/music-words" element={<MusicAndWordsMusicAndWordsPage />} />
  </>
);

export default MusicAndWordsRoutes;
