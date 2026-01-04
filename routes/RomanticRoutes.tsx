import React from 'react';
import { Route } from 'react-router-dom';
import {
  Romantic0101DynamicsPage,
  Romantic0102RhythmPage,
  Romantic0103MetrePage,
  Romantic0104TempoPage,
  Romantic0105MelodyPage,
  Romantic0106HarmonyPage,
  Romantic0107TonalityPage,
  Romantic0108TexturePage,
  Romantic0109TimbrePage,
  Romantic0110StructureFormPage,
  Romantic01CoreMusicalElementsPage,
  Romantic0201InstrumentationPage,
  Romantic0202OrganologyPage,
  Romantic0203VocalTechniquesPage,
  Romantic0204ExtendedTechniquesPage,
  Romantic0205ImprovisationPage,
  Romantic0206CompositionTechniquesPage,
  Romantic02SoundSourcesAndTechniquesPage,
  Romantic030101RitualPage,
  Romantic030102CelebrationPage,
  Romantic030103WorkProtestPage,
  Romantic030104HealingPage,
  Romantic030105SocialIdentityPage,
  Romantic0301CulturalFunctionPage,
  Romantic0302HistoricalBackgroundPage,
  Romantic0303MovementAndDancePage,
  Romantic0304EconomicsAndPatronagePage,
  Romantic0305KeyWorksPiecesPage,
  Romantic0306KeyComposersArtistsPage,
  Romantic030701StagingPage,
  Romantic030702PerformerAudienceRelationshipPage,
  Romantic030703AttirePage,
  Romantic030704RitualisticElementsPage,
  Romantic0307PerformancePracticePage,
  Romantic03CulturalAndHistoricalContextPage,
  Romantic0401SpecificTerminologyPage,
  Romantic0402LyricsAndTextAnalysisPage,
  Romantic0402LyricsTextAnalysisPage,
  Romantic0403NotationSystemPage,
  Romantic0404OralAuralTraditionPage,
  Romantic0405MusicTheoryFrameworkPage,
  Romantic04LanguageLiteracyAndTheoryPage,
  Romantic0501MusicTechnologyPage,
  Romantic0502RecordingAndProductionTechniquesPage,
  Romantic0503DistributionAndMediaPage,
  Romantic0504HybridizationPage,
  Romantic05TechnologyAndInnovationPage,
  Romantic0601GenreAndStylePage,
  Romantic0602AestheticValuesPage,
  Romantic0603AudienceReceptionPage,
  Romantic0604PoliticalSocialCommentaryPage,
  Romantic0605GeographicInfluencePage,
  Romantic06AnalyticalDomainsPage,
  Romantic07GlossaryPage,
  RomanticRomanticMusicPage,
} from '../pages/aos3/romantic';

export const RomanticRoutes = (
  <>
    <Route path="/aos/romantic/core-musical-elements/dynamics" element={<Romantic0101DynamicsPage />} />
    <Route path="/aos/romantic/core-musical-elements/rhythm" element={<Romantic0102RhythmPage />} />
    <Route path="/aos/romantic/core-musical-elements/metre" element={<Romantic0103MetrePage />} />
    <Route path="/aos/romantic/core-musical-elements/tempo" element={<Romantic0104TempoPage />} />
    <Route path="/aos/romantic/core-musical-elements/melody" element={<Romantic0105MelodyPage />} />
    <Route path="/aos/romantic/core-musical-elements/harmony" element={<Romantic0106HarmonyPage />} />
    <Route path="/aos/romantic/core-musical-elements/tonality" element={<Romantic0107TonalityPage />} />
    <Route path="/aos/romantic/core-musical-elements/texture" element={<Romantic0108TexturePage />} />
    <Route path="/aos/romantic/core-musical-elements/timbre" element={<Romantic0109TimbrePage />} />
    <Route path="/aos/romantic/core-musical-elements/structure-form" element={<Romantic0110StructureFormPage />} />
    <Route path="/aos/romantic/core-musical-elements" element={<Romantic01CoreMusicalElementsPage />} />
    <Route path="/aos/romantic/sound-sources-and-techniques/instrumentation" element={<Romantic0201InstrumentationPage />} />
    <Route path="/aos/romantic/sound-sources-and-techniques/organology" element={<Romantic0202OrganologyPage />} />
    <Route path="/aos/romantic/sound-sources-and-techniques/vocal-techniques" element={<Romantic0203VocalTechniquesPage />} />
    <Route path="/aos/romantic/sound-sources-and-techniques/extended-techniques" element={<Romantic0204ExtendedTechniquesPage />} />
    <Route path="/aos/romantic/sound-sources-and-techniques/improvisation" element={<Romantic0205ImprovisationPage />} />
    <Route path="/aos/romantic/sound-sources-and-techniques/composition-techniques" element={<Romantic0206CompositionTechniquesPage />} />
    <Route path="/aos/romantic/sound-sources-and-techniques" element={<Romantic02SoundSourcesAndTechniquesPage />} />
    <Route path="/aos/romantic/ritual" element={<Romantic030101RitualPage />} />
    <Route path="/aos/romantic/celebration" element={<Romantic030102CelebrationPage />} />
    <Route path="/aos/romantic/work-protest" element={<Romantic030103WorkProtestPage />} />
    <Route path="/aos/romantic/healing" element={<Romantic030104HealingPage />} />
    <Route path="/aos/romantic/social-identity" element={<Romantic030105SocialIdentityPage />} />
    <Route path="/aos/romantic/cultural-and-historical-context/cultural-function" element={<Romantic0301CulturalFunctionPage />} />
    <Route path="/aos/romantic/cultural-and-historical-context/historical-background" element={<Romantic0302HistoricalBackgroundPage />} />
    <Route path="/aos/romantic/cultural-and-historical-context/movement-and-dance" element={<Romantic0303MovementAndDancePage />} />
    <Route path="/aos/romantic/cultural-and-historical-context/economics-and-patronage" element={<Romantic0304EconomicsAndPatronagePage />} />
    <Route path="/aos/romantic/cultural-and-historical-context/key-works-pieces" element={<Romantic0305KeyWorksPiecesPage />} />
    <Route path="/aos/romantic/cultural-and-historical-context/key-composers-artists" element={<Romantic0306KeyComposersArtistsPage />} />
    <Route path="/aos/romantic/staging" element={<Romantic030701StagingPage />} />
    <Route path="/aos/romantic/performer-audience-relationship" element={<Romantic030702PerformerAudienceRelationshipPage />} />
    <Route path="/aos/romantic/attire" element={<Romantic030703AttirePage />} />
    <Route path="/aos/romantic/ritualistic-elements" element={<Romantic030704RitualisticElementsPage />} />
    <Route path="/aos/romantic/cultural-and-historical-context/performance-practice" element={<Romantic0307PerformancePracticePage />} />
    <Route path="/aos/romantic/cultural-and-historical-context" element={<Romantic03CulturalAndHistoricalContextPage />} />
    <Route path="/aos/romantic/language-literacy-and-theory/specific-terminology" element={<Romantic0401SpecificTerminologyPage />} />
    <Route path="/aos/romantic/language-literacy-and-theory/lyrics-and-text-analysis" element={<Romantic0402LyricsAndTextAnalysisPage />} />
    <Route path="/aos/romantic/language-literacy-and-theory/lyrics-and-text-analysis" element={<Romantic0402LyricsTextAnalysisPage />} />
    <Route path="/aos/romantic/language-literacy-and-theory/notation-system" element={<Romantic0403NotationSystemPage />} />
    <Route path="/aos/romantic/language-literacy-and-theory/oral-aural-tradition" element={<Romantic0404OralAuralTraditionPage />} />
    <Route path="/aos/romantic/language-literacy-and-theory/music-theory-framework" element={<Romantic0405MusicTheoryFrameworkPage />} />
    <Route path="/aos/romantic/language-literacy-and-theory" element={<Romantic04LanguageLiteracyAndTheoryPage />} />
    <Route path="/aos/romantic/technology-and-innovation/music-technology" element={<Romantic0501MusicTechnologyPage />} />
    <Route path="/aos/romantic/technology-and-innovation/recording-and-production" element={<Romantic0502RecordingAndProductionTechniquesPage />} />
    <Route path="/aos/romantic/technology-and-innovation/distribution-and-media" element={<Romantic0503DistributionAndMediaPage />} />
    <Route path="/aos/romantic/technology-and-innovation/hybridization" element={<Romantic0504HybridizationPage />} />
    <Route path="/aos/romantic/technology-and-innovation" element={<Romantic05TechnologyAndInnovationPage />} />
    <Route path="/aos/romantic/analytical-domains/genre-and-style" element={<Romantic0601GenreAndStylePage />} />
    <Route path="/aos/romantic/analytical-domains/aesthetic-values" element={<Romantic0602AestheticValuesPage />} />
    <Route path="/aos/romantic/analytical-domains/audience-reception" element={<Romantic0603AudienceReceptionPage />} />
    <Route path="/aos/romantic/analytical-domains/political-social-commentary" element={<Romantic0604PoliticalSocialCommentaryPage />} />
    <Route path="/aos/romantic/analytical-domains/geographic-influence" element={<Romantic0605GeographicInfluencePage />} />
    <Route path="/aos/romantic/analytical-domains" element={<Romantic06AnalyticalDomainsPage />} />
    <Route path="/aos/romantic/glossary" element={<Romantic07GlossaryPage />} />
    <Route path="/aos/romantic" element={<RomanticRomanticMusicPage />} />
  </>
);

export default RomanticRoutes;
