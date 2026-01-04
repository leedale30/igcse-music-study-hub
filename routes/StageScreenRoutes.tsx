import React from 'react';
import { Route } from 'react-router-dom';
import {
  StageScreen0101DynamicsPage,
  StageScreen0102RhythmPage,
  StageScreen0103MetrePage,
  StageScreen0104TempoPage,
  StageScreen0105MelodyPage,
  StageScreen0106HarmonyPage,
  StageScreen0107TonalityPage,
  StageScreen0108TexturePage,
  StageScreen0109TimbrePage,
  StageScreen0110StructureFormPage,
  StageScreen01CoreMusicalElementsPage,
  StageScreen0201InstrumentationPage,
  StageScreen0202OrganologyPage,
  StageScreen0203VocalTechniquesPage,
  StageScreen0204ExtendedTechniquesPage,
  StageScreen0205ImprovisationPage,
  StageScreen0206CompositionTechniquesPage,
  StageScreen02SoundSourcesAndTechniquesPage,
  StageScreen030101RitualPage,
  StageScreen030102CelebrationPage,
  StageScreen030103WorkProtestPage,
  StageScreen030104HealingPage,
  StageScreen030105SocialIdentityPage,
  StageScreen0301CulturalFunctionPage,
  StageScreen0302HistoricalBackgroundPage,
  StageScreen0303MovementAndDancePage,
  StageScreen0304EconomicsAndPatronagePage,
  StageScreen0305KeyWorksPiecesPage,
  StageScreen0306KeyComposersArtistsPage,
  StageScreen030701StagingPage,
  StageScreen030702PerformerAudienceRelationshipPage,
  StageScreen030703AttirePage,
  StageScreen030704RitualisticElementsPage,
  StageScreen0307PerformancePracticePage,
  StageScreen03CulturalAndHistoricalContextPage,
  StageScreen0401SpecificTerminologyPage,
  StageScreen0402LyricsAndTextAnalysisPage,
  StageScreen0402LyricsTextAnalysisPage,
  StageScreen0403NotationSystemPage,
  StageScreen0404OralAuralTraditionPage,
  StageScreen0405MusicTheoryFrameworkPage,
  StageScreen04LanguageLiteracyAndTheoryPage,
  StageScreen0501MusicTechnologyPage,
  StageScreen0502RecordingAndProductionTechniquesPage,
  StageScreen0503DistributionAndMediaPage,
  StageScreen0504HybridizationPage,
  StageScreen05TechnologyAndInnovationPage,
  StageScreen0601GenreAndStylePage,
  StageScreen0602AestheticValuesPage,
  StageScreen0603AudienceReceptionPage,
  StageScreen0604PoliticalSocialCommentaryPage,
  StageScreen0605GeographicInfluencePage,
  StageScreen06AnalyticalDomainsPage,
  StageScreen07GlossaryPage,
  StageScreenMusicForStageAndScreenPage,
} from '../pages/aos7/stage-screen';

export const StageScreenRoutes = (
  <>
    <Route path="/aos/stage-screen/core-musical-elements/dynamics" element={<StageScreen0101DynamicsPage />} />
    <Route path="/aos/stage-screen/core-musical-elements/rhythm" element={<StageScreen0102RhythmPage />} />
    <Route path="/aos/stage-screen/core-musical-elements/metre" element={<StageScreen0103MetrePage />} />
    <Route path="/aos/stage-screen/core-musical-elements/tempo" element={<StageScreen0104TempoPage />} />
    <Route path="/aos/stage-screen/core-musical-elements/melody" element={<StageScreen0105MelodyPage />} />
    <Route path="/aos/stage-screen/core-musical-elements/harmony" element={<StageScreen0106HarmonyPage />} />
    <Route path="/aos/stage-screen/core-musical-elements/tonality" element={<StageScreen0107TonalityPage />} />
    <Route path="/aos/stage-screen/core-musical-elements/texture" element={<StageScreen0108TexturePage />} />
    <Route path="/aos/stage-screen/core-musical-elements/timbre" element={<StageScreen0109TimbrePage />} />
    <Route path="/aos/stage-screen/core-musical-elements/structure-form" element={<StageScreen0110StructureFormPage />} />
    <Route path="/aos/stage-screen/core-musical-elements" element={<StageScreen01CoreMusicalElementsPage />} />
    <Route path="/aos/stage-screen/sound-sources-and-techniques/instrumentation" element={<StageScreen0201InstrumentationPage />} />
    <Route path="/aos/stage-screen/sound-sources-and-techniques/organology" element={<StageScreen0202OrganologyPage />} />
    <Route path="/aos/stage-screen/sound-sources-and-techniques/vocal-techniques" element={<StageScreen0203VocalTechniquesPage />} />
    <Route path="/aos/stage-screen/sound-sources-and-techniques/extended-techniques" element={<StageScreen0204ExtendedTechniquesPage />} />
    <Route path="/aos/stage-screen/sound-sources-and-techniques/improvisation" element={<StageScreen0205ImprovisationPage />} />
    <Route path="/aos/stage-screen/sound-sources-and-techniques/composition-techniques" element={<StageScreen0206CompositionTechniquesPage />} />
    <Route path="/aos/stage-screen/sound-sources-and-techniques" element={<StageScreen02SoundSourcesAndTechniquesPage />} />
    <Route path="/aos/stage-screen/ritual" element={<StageScreen030101RitualPage />} />
    <Route path="/aos/stage-screen/celebration" element={<StageScreen030102CelebrationPage />} />
    <Route path="/aos/stage-screen/work-protest" element={<StageScreen030103WorkProtestPage />} />
    <Route path="/aos/stage-screen/healing" element={<StageScreen030104HealingPage />} />
    <Route path="/aos/stage-screen/social-identity" element={<StageScreen030105SocialIdentityPage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context/cultural-function" element={<StageScreen0301CulturalFunctionPage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context/historical-background" element={<StageScreen0302HistoricalBackgroundPage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context/movement-and-dance" element={<StageScreen0303MovementAndDancePage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context/economics-and-patronage" element={<StageScreen0304EconomicsAndPatronagePage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context/key-works-pieces" element={<StageScreen0305KeyWorksPiecesPage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context/key-composers-artists" element={<StageScreen0306KeyComposersArtistsPage />} />
    <Route path="/aos/stage-screen/staging" element={<StageScreen030701StagingPage />} />
    <Route path="/aos/stage-screen/performer-audience-relationship" element={<StageScreen030702PerformerAudienceRelationshipPage />} />
    <Route path="/aos/stage-screen/attire" element={<StageScreen030703AttirePage />} />
    <Route path="/aos/stage-screen/ritualistic-elements" element={<StageScreen030704RitualisticElementsPage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context/performance-practice" element={<StageScreen0307PerformancePracticePage />} />
    <Route path="/aos/stage-screen/cultural-and-historical-context" element={<StageScreen03CulturalAndHistoricalContextPage />} />
    <Route path="/aos/stage-screen/language-literacy-and-theory/specific-terminology" element={<StageScreen0401SpecificTerminologyPage />} />
    <Route path="/aos/stage-screen/language-literacy-and-theory/lyrics-and-text-analysis" element={<StageScreen0402LyricsAndTextAnalysisPage />} />
    <Route path="/aos/stage-screen/language-literacy-and-theory/lyrics-and-text-analysis" element={<StageScreen0402LyricsTextAnalysisPage />} />
    <Route path="/aos/stage-screen/language-literacy-and-theory/notation-system" element={<StageScreen0403NotationSystemPage />} />
    <Route path="/aos/stage-screen/language-literacy-and-theory/oral-aural-tradition" element={<StageScreen0404OralAuralTraditionPage />} />
    <Route path="/aos/stage-screen/language-literacy-and-theory/music-theory-framework" element={<StageScreen0405MusicTheoryFrameworkPage />} />
    <Route path="/aos/stage-screen/language-literacy-and-theory" element={<StageScreen04LanguageLiteracyAndTheoryPage />} />
    <Route path="/aos/stage-screen/technology-and-innovation/music-technology" element={<StageScreen0501MusicTechnologyPage />} />
    <Route path="/aos/stage-screen/technology-and-innovation/recording-and-production" element={<StageScreen0502RecordingAndProductionTechniquesPage />} />
    <Route path="/aos/stage-screen/technology-and-innovation/distribution-and-media" element={<StageScreen0503DistributionAndMediaPage />} />
    <Route path="/aos/stage-screen/technology-and-innovation/hybridization" element={<StageScreen0504HybridizationPage />} />
    <Route path="/aos/stage-screen/technology-and-innovation" element={<StageScreen05TechnologyAndInnovationPage />} />
    <Route path="/aos/stage-screen/analytical-domains/genre-and-style" element={<StageScreen0601GenreAndStylePage />} />
    <Route path="/aos/stage-screen/analytical-domains/aesthetic-values" element={<StageScreen0602AestheticValuesPage />} />
    <Route path="/aos/stage-screen/analytical-domains/audience-reception" element={<StageScreen0603AudienceReceptionPage />} />
    <Route path="/aos/stage-screen/analytical-domains/political-social-commentary" element={<StageScreen0604PoliticalSocialCommentaryPage />} />
    <Route path="/aos/stage-screen/analytical-domains/geographic-influence" element={<StageScreen0605GeographicInfluencePage />} />
    <Route path="/aos/stage-screen/analytical-domains" element={<StageScreen06AnalyticalDomainsPage />} />
    <Route path="/aos/stage-screen/glossary" element={<StageScreen07GlossaryPage />} />
    <Route path="/aos/stage-screen/music-for-stage-and-screen" element={<StageScreenMusicForStageAndScreenPage />} />
  </>
);

export default StageScreenRoutes;
