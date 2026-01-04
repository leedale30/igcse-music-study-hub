import React from 'react';
import { Route } from 'react-router-dom';
import {
  SmallEnsemble0101DynamicsPage,
  SmallEnsemble0102RhythmPage,
  SmallEnsemble0103MetrePage,
  SmallEnsemble0104TempoPage,
  SmallEnsemble0105MelodyPage,
  SmallEnsemble0106HarmonyPage,
  SmallEnsemble0107TonalityPage,
  SmallEnsemble0108TexturePage,
  SmallEnsemble0109TimbrePage,
  SmallEnsemble0110StructureFormPage,
  SmallEnsemble01CoreMusicalElementsPage,
  SmallEnsemble0201InstrumentationPage,
  SmallEnsemble0202OrganologyPage,
  SmallEnsemble0203VocalTechniquesPage,
  SmallEnsemble0204ExtendedTechniquesPage,
  SmallEnsemble0205ImprovisationPage,
  SmallEnsemble0206CompositionTechniquesPage,
  SmallEnsemble02SoundSourcesAndTechniquesPage,
  SmallEnsemble030101RitualPage,
  SmallEnsemble030102CelebrationPage,
  SmallEnsemble030103WorkProtestPage,
  SmallEnsemble030104HealingPage,
  SmallEnsemble030105SocialIdentityPage,
  SmallEnsemble0301CulturalFunctionPage,
  SmallEnsemble0302HistoricalBackgroundPage,
  SmallEnsemble0303MovementAndDancePage,
  SmallEnsemble0304EconomicsAndPatronagePage,
  SmallEnsemble0305KeyWorksPiecesPage,
  SmallEnsemble0306KeyComposersArtistsPage,
  SmallEnsemble030701StagingPage,
  SmallEnsemble030702PerformerAudienceRelationshipPage,
  SmallEnsemble030703AttirePage,
  SmallEnsemble030704RitualisticElementsPage,
  SmallEnsemble0307PerformancePracticePage,
  SmallEnsemble03CulturalAndHistoricalContextPage,
  SmallEnsemble0401SpecificTerminologyPage,
  SmallEnsemble0402LyricsAndTextAnalysisPage,
  SmallEnsemble0402LyricsTextAnalysisPage,
  SmallEnsemble0403NotationSystemPage,
  SmallEnsemble0404OralAuralTraditionPage,
  SmallEnsemble0405MusicTheoryFrameworkPage,
  SmallEnsemble04LanguageLiteracyAndTheoryPage,
  SmallEnsemble0601GenreAndStylePage,
  SmallEnsemble0602AestheticValuesPage,
  SmallEnsemble0603AudienceReceptionPage,
  SmallEnsemble0604PoliticalSocialCommentaryPage,
  SmallEnsemble0605GeographicInfluencePage,
  SmallEnsemble06AnalyticalDomainsPage,
  SmallEnsemble07GlossaryPage,
  SmallEnsembleMusicForSmallEnsemblePage,
} from '../pages/aos6/small-ensemble';

export const SmallEnsembleRoutes = (
  <>
    <Route path="/aos/small-ensemble/core-musical-elements/dynamics" element={<SmallEnsemble0101DynamicsPage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/rhythm" element={<SmallEnsemble0102RhythmPage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/metre" element={<SmallEnsemble0103MetrePage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/tempo" element={<SmallEnsemble0104TempoPage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/melody" element={<SmallEnsemble0105MelodyPage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/harmony" element={<SmallEnsemble0106HarmonyPage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/tonality" element={<SmallEnsemble0107TonalityPage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/texture" element={<SmallEnsemble0108TexturePage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/timbre" element={<SmallEnsemble0109TimbrePage />} />
    <Route path="/aos/small-ensemble/core-musical-elements/structure-form" element={<SmallEnsemble0110StructureFormPage />} />
    <Route path="/aos/small-ensemble/core-musical-elements" element={<SmallEnsemble01CoreMusicalElementsPage />} />
    <Route path="/aos/small-ensemble/sound-sources-and-techniques/instrumentation" element={<SmallEnsemble0201InstrumentationPage />} />
    <Route path="/aos/small-ensemble/sound-sources-and-techniques/organology" element={<SmallEnsemble0202OrganologyPage />} />
    <Route path="/aos/small-ensemble/sound-sources-and-techniques/vocal-techniques" element={<SmallEnsemble0203VocalTechniquesPage />} />
    <Route path="/aos/small-ensemble/sound-sources-and-techniques/extended-techniques" element={<SmallEnsemble0204ExtendedTechniquesPage />} />
    <Route path="/aos/small-ensemble/sound-sources-and-techniques/improvisation" element={<SmallEnsemble0205ImprovisationPage />} />
    <Route path="/aos/small-ensemble/sound-sources-and-techniques/composition-techniques" element={<SmallEnsemble0206CompositionTechniquesPage />} />
    <Route path="/aos/small-ensemble/sound-sources-and-techniques" element={<SmallEnsemble02SoundSourcesAndTechniquesPage />} />
    <Route path="/aos/small-ensemble/ritual" element={<SmallEnsemble030101RitualPage />} />
    <Route path="/aos/small-ensemble/celebration" element={<SmallEnsemble030102CelebrationPage />} />
    <Route path="/aos/small-ensemble/work-protest" element={<SmallEnsemble030103WorkProtestPage />} />
    <Route path="/aos/small-ensemble/healing" element={<SmallEnsemble030104HealingPage />} />
    <Route path="/aos/small-ensemble/social-identity" element={<SmallEnsemble030105SocialIdentityPage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context/cultural-function" element={<SmallEnsemble0301CulturalFunctionPage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context/historical-background" element={<SmallEnsemble0302HistoricalBackgroundPage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context/movement-and-dance" element={<SmallEnsemble0303MovementAndDancePage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context/economics-and-patronage" element={<SmallEnsemble0304EconomicsAndPatronagePage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context/key-works-pieces" element={<SmallEnsemble0305KeyWorksPiecesPage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context/key-composers-artists" element={<SmallEnsemble0306KeyComposersArtistsPage />} />
    <Route path="/aos/small-ensemble/staging" element={<SmallEnsemble030701StagingPage />} />
    <Route path="/aos/small-ensemble/performer-audience-relationship" element={<SmallEnsemble030702PerformerAudienceRelationshipPage />} />
    <Route path="/aos/small-ensemble/attire" element={<SmallEnsemble030703AttirePage />} />
    <Route path="/aos/small-ensemble/ritualistic-elements" element={<SmallEnsemble030704RitualisticElementsPage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context/performance-practice" element={<SmallEnsemble0307PerformancePracticePage />} />
    <Route path="/aos/small-ensemble/cultural-and-historical-context" element={<SmallEnsemble03CulturalAndHistoricalContextPage />} />
    <Route path="/aos/small-ensemble/language-literacy-and-theory/specific-terminology" element={<SmallEnsemble0401SpecificTerminologyPage />} />
    <Route path="/aos/small-ensemble/language-literacy-and-theory/lyrics-and-text-analysis" element={<SmallEnsemble0402LyricsAndTextAnalysisPage />} />
    <Route path="/aos/small-ensemble/language-literacy-and-theory/lyrics-and-text-analysis" element={<SmallEnsemble0402LyricsTextAnalysisPage />} />
    <Route path="/aos/small-ensemble/language-literacy-and-theory/notation-system" element={<SmallEnsemble0403NotationSystemPage />} />
    <Route path="/aos/small-ensemble/language-literacy-and-theory/oral-aural-tradition" element={<SmallEnsemble0404OralAuralTraditionPage />} />
    <Route path="/aos/small-ensemble/language-literacy-and-theory/music-theory-framework" element={<SmallEnsemble0405MusicTheoryFrameworkPage />} />
    <Route path="/aos/small-ensemble/language-literacy-and-theory" element={<SmallEnsemble04LanguageLiteracyAndTheoryPage />} />
    <Route path="/aos/small-ensemble/analytical-domains/genre-and-style" element={<SmallEnsemble0601GenreAndStylePage />} />
    <Route path="/aos/small-ensemble/analytical-domains/aesthetic-values" element={<SmallEnsemble0602AestheticValuesPage />} />
    <Route path="/aos/small-ensemble/analytical-domains/audience-reception" element={<SmallEnsemble0603AudienceReceptionPage />} />
    <Route path="/aos/small-ensemble/analytical-domains/political-social-commentary" element={<SmallEnsemble0604PoliticalSocialCommentaryPage />} />
    <Route path="/aos/small-ensemble/analytical-domains/geographic-influence" element={<SmallEnsemble0605GeographicInfluencePage />} />
    <Route path="/aos/small-ensemble/analytical-domains" element={<SmallEnsemble06AnalyticalDomainsPage />} />
    <Route path="/aos/small-ensemble/glossary" element={<SmallEnsemble07GlossaryPage />} />
    <Route path="/aos/small-ensemble/music-for" element={<SmallEnsembleMusicForSmallEnsemblePage />} />
  </>
);

export default SmallEnsembleRoutes;
