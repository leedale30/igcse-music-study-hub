import React from 'react';
import { Route } from 'react-router-dom';
import {
  Dance0101DynamicsPage,
  Dance0102RhythmPage,
  Dance0103MetrePage,
  Dance0104TempoPage,
  Dance0105MelodyPage,
  Dance0106HarmonyPage,
  Dance0107TonalityPage,
  Dance0108TexturePage,
  Dance0109TimbrePage,
  Dance0110StructureFormPage,
  Dance01CoreMusicalElementsPage,
  Dance0201InstrumentationPage,
  Dance0202OrganologyPage,
  Dance0203VocalTechniquesPage,
  Dance0204ExtendedTechniquesPage,
  Dance0205ImprovisationPage,
  Dance0206CompositionTechniquesPage,
  Dance02SoundSourcesAndTechniquesPage,
  Dance030101RitualPage,
  Dance030102CelebrationPage,
  Dance030103WorkProtestPage,
  Dance030104HealingPage,
  Dance030105SocialIdentityPage,
  Dance0301CulturalFunctionPage,
  Dance0302HistoricalBackgroundPage,
  Dance0303MovementAndDancePage,
  Dance0304EconomicsAndPatronagePage,
  Dance0305KeyWorksPiecesPage,
  Dance0306KeyComposersArtistsPage,
  Dance030701StagingPage,
  Dance030702PerformerAudienceRelationshipPage,
  Dance030703AttirePage,
  Dance030704RitualisticElementsPage,
  Dance0307PerformancePracticePage,
  Dance03CulturalAndHistoricalContextPage,
  Dance0401SpecificTerminologyPage,
  Dance0402LyricsAndTextAnalysisPage,
  Dance0402LyricsTextAnalysisPage,
  Dance0403NotationSystemPage,
  Dance0404OralAuralTraditionPage,
  Dance0405MusicTheoryFrameworkPage,
  Dance04LanguageLiteracyAndTheoryPage,
  Dance0501MusicTechnologyPage,
  Dance0502RecordingAndProductionTechniquesPage,
  Dance0503DistributionAndMediaPage,
  Dance0504HybridizationPage,
  Dance05TechnologyAndInnovationPage,
  Dance0601GenreAndStylePage,
  Dance0602AestheticValuesPage,
  Dance0603AudienceReceptionPage,
  Dance0604PoliticalSocialCommentaryPage,
  Dance0605GeographicInfluencePage,
  Dance06AnalyticalDomainsPage,
  Dance07GlossaryPage,
  DanceMusicForDancePage,
} from '../pages/aos5/dance';

export const DanceRoutes = (
  <>
    <Route path="/aos/dance/core-musical-elements/dynamics" element={<Dance0101DynamicsPage />} />
    <Route path="/aos/dance/core-musical-elements/rhythm" element={<Dance0102RhythmPage />} />
    <Route path="/aos/dance/core-musical-elements/metre" element={<Dance0103MetrePage />} />
    <Route path="/aos/dance/core-musical-elements/tempo" element={<Dance0104TempoPage />} />
    <Route path="/aos/dance/core-musical-elements/melody" element={<Dance0105MelodyPage />} />
    <Route path="/aos/dance/core-musical-elements/harmony" element={<Dance0106HarmonyPage />} />
    <Route path="/aos/dance/core-musical-elements/tonality" element={<Dance0107TonalityPage />} />
    <Route path="/aos/dance/core-musical-elements/texture" element={<Dance0108TexturePage />} />
    <Route path="/aos/dance/core-musical-elements/timbre" element={<Dance0109TimbrePage />} />
    <Route path="/aos/dance/core-musical-elements/structure-form" element={<Dance0110StructureFormPage />} />
    <Route path="/aos/dance/core-musical-elements" element={<Dance01CoreMusicalElementsPage />} />
    <Route path="/aos/dance/sound-sources-and-techniques/instrumentation" element={<Dance0201InstrumentationPage />} />
    <Route path="/aos/dance/sound-sources-and-techniques/organology" element={<Dance0202OrganologyPage />} />
    <Route path="/aos/dance/sound-sources-and-techniques/vocal-techniques" element={<Dance0203VocalTechniquesPage />} />
    <Route path="/aos/dance/sound-sources-and-techniques/extended-techniques" element={<Dance0204ExtendedTechniquesPage />} />
    <Route path="/aos/dance/sound-sources-and-techniques/improvisation" element={<Dance0205ImprovisationPage />} />
    <Route path="/aos/dance/sound-sources-and-techniques/composition-techniques" element={<Dance0206CompositionTechniquesPage />} />
    <Route path="/aos/dance/sound-sources-and-techniques" element={<Dance02SoundSourcesAndTechniquesPage />} />
    <Route path="/aos/dance/ritual" element={<Dance030101RitualPage />} />
    <Route path="/aos/dance/celebration" element={<Dance030102CelebrationPage />} />
    <Route path="/aos/dance/work-protest" element={<Dance030103WorkProtestPage />} />
    <Route path="/aos/dance/healing" element={<Dance030104HealingPage />} />
    <Route path="/aos/dance/social-identity" element={<Dance030105SocialIdentityPage />} />
    <Route path="/aos/dance/cultural-and-historical-context/cultural-function" element={<Dance0301CulturalFunctionPage />} />
    <Route path="/aos/dance/cultural-and-historical-context/historical-background" element={<Dance0302HistoricalBackgroundPage />} />
    <Route path="/aos/dance/movement-and" element={<Dance0303MovementAndDancePage />} />
    <Route path="/aos/dance/cultural-and-historical-context/economics-and-patronage" element={<Dance0304EconomicsAndPatronagePage />} />
    <Route path="/aos/dance/cultural-and-historical-context/key-works-pieces" element={<Dance0305KeyWorksPiecesPage />} />
    <Route path="/aos/dance/cultural-and-historical-context/key-composers-artists" element={<Dance0306KeyComposersArtistsPage />} />
    <Route path="/aos/dance/staging" element={<Dance030701StagingPage />} />
    <Route path="/aos/dance/performer-audience-relationship" element={<Dance030702PerformerAudienceRelationshipPage />} />
    <Route path="/aos/dance/attire" element={<Dance030703AttirePage />} />
    <Route path="/aos/dance/ritualistic-elements" element={<Dance030704RitualisticElementsPage />} />
    <Route path="/aos/dance/cultural-and-historical-context/performance-practice" element={<Dance0307PerformancePracticePage />} />
    <Route path="/aos/dance/cultural-and-historical-context" element={<Dance03CulturalAndHistoricalContextPage />} />
    <Route path="/aos/dance/language-literacy-and-theory/specific-terminology" element={<Dance0401SpecificTerminologyPage />} />
    <Route path="/aos/dance/language-literacy-and-theory/lyrics-and-text-analysis" element={<Dance0402LyricsAndTextAnalysisPage />} />
    <Route path="/aos/dance/language-literacy-and-theory/lyrics-and-text-analysis" element={<Dance0402LyricsTextAnalysisPage />} />
    <Route path="/aos/dance/language-literacy-and-theory/notation-system" element={<Dance0403NotationSystemPage />} />
    <Route path="/aos/dance/language-literacy-and-theory/oral-aural-tradition" element={<Dance0404OralAuralTraditionPage />} />
    <Route path="/aos/dance/language-literacy-and-theory/music-theory-framework" element={<Dance0405MusicTheoryFrameworkPage />} />
    <Route path="/aos/dance/language-literacy-and-theory" element={<Dance04LanguageLiteracyAndTheoryPage />} />
    <Route path="/aos/dance/technology-and-innovation/music-technology" element={<Dance0501MusicTechnologyPage />} />
    <Route path="/aos/dance/technology-and-innovation/recording-and-production" element={<Dance0502RecordingAndProductionTechniquesPage />} />
    <Route path="/aos/dance/technology-and-innovation/distribution-and-media" element={<Dance0503DistributionAndMediaPage />} />
    <Route path="/aos/dance/technology-and-innovation/hybridization" element={<Dance0504HybridizationPage />} />
    <Route path="/aos/dance/technology-and-innovation" element={<Dance05TechnologyAndInnovationPage />} />
    <Route path="/aos/dance/analytical-domains/genre-and-style" element={<Dance0601GenreAndStylePage />} />
    <Route path="/aos/dance/analytical-domains/aesthetic-values" element={<Dance0602AestheticValuesPage />} />
    <Route path="/aos/dance/analytical-domains/audience-reception" element={<Dance0603AudienceReceptionPage />} />
    <Route path="/aos/dance/analytical-domains/political-social-commentary" element={<Dance0604PoliticalSocialCommentaryPage />} />
    <Route path="/aos/dance/analytical-domains/geographic-influence" element={<Dance0605GeographicInfluencePage />} />
    <Route path="/aos/dance/analytical-domains" element={<Dance06AnalyticalDomainsPage />} />
    <Route path="/aos/dance/glossary" element={<Dance07GlossaryPage />} />
    <Route path="/aos/dance/music-for" element={<DanceMusicForDancePage />} />
  </>
);

export default DanceRoutes;
