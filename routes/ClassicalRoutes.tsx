import React from 'react';
import { Route } from 'react-router-dom';
import {
    // Core Musical Elements
    Classical0101DynamicsPage,
    Classical0102RhythmPage,
    Classical0103MetrePage,
    Classical0104TempoPage,
    Classical0105MelodyPage,
    Classical0106HarmonyPage,
    Classical0107TonalityPage,
    Classical0108TexturePage,
    Classical0109TimbrePage,
    Classical0110StructureFormPage,
    Classical01CoreMusicalElementsPage,
    // Sound Sources & Techniques
    Classical0201InstrumentationPage,
    Classical0202OrganologyPage,
    Classical0203VocalTechniquesPage,
    Classical0204ExtendedTechniquesPage,
    Classical0205ImprovisationPage,
    Classical0206CompositionTechniquesPage,
    Classical02SoundSourcesAndTechniquesPage,
    // Cultural & Historical Context
    Classical030101RitualPage,
    Classical030102CelebrationPage,
    Classical030103WorkProtestPage,
    Classical030104HealingPage,
    Classical030105SocialIdentityPage,
    Classical0301CulturalFunctionPage,
    Classical0302HistoricalBackgroundPage,
    Classical0303MovementAndDancePage,
    Classical0304EconomicsAndPatronagePage,
    Classical0305KeyWorksPiecesPage,
    Classical0306KeyComposersArtistsPage,
    Classical030701StagingPage,
    Classical030702PerformerAudienceRelationshipPage,
    Classical030703AttirePage,
    Classical030704RitualisticElementsPage,
    Classical0307PerformancePracticePage,
    Classical03CulturalAndHistoricalContextPage,
    // Language, Literacy & Theory
    Classical0401SpecificTerminologyPage,
    Classical0402LyricsAndTextAnalysisPage,
    Classical0403NotationSystemPage,
    Classical0404OralAuralTraditionPage,
    Classical0405MusicTheoryFrameworkPage,
    Classical04LanguageLiteracyAndTheoryPage,
    // Technology & Innovation
    Classical0501MusicTechnologyPage,
    Classical0502RecordingAndProductionTechniquesPage,
    Classical0503DistributionAndMediaPage,
    Classical0504HybridizationPage,
    Classical05TechnologyAndInnovationPage,
    // Analytical Domains
    Classical0601GenreAndStylePage,
    Classical0602AestheticValuesPage,
    Classical0603AudienceReceptionPage,
    Classical0604PoliticalSocialCommentaryPage,
    Classical0605GeographicInfluencePage,
    Classical06AnalyticalDomainsPage,
    // Glossary & Overview
    Classical07GlossaryPage,
    ClassicalClassicalMusicPage,
} from '../pages/aos2/classical';

/**
 * All routes for AOS2 Classical Music section.
 */
export const ClassicalRoutes = (
    <>
        {/* Classical Music Overview */}
        <Route path="/aos/classical" element={<ClassicalClassicalMusicPage />} />

        {/* Core Musical Elements */}
        <Route path="/aos/classical/core-musical-elements" element={<Classical01CoreMusicalElementsPage />} />
        <Route path="/aos/classical/core-musical-elements/dynamics" element={<Classical0101DynamicsPage />} />
        <Route path="/aos/classical/core-musical-elements/rhythm" element={<Classical0102RhythmPage />} />
        <Route path="/aos/classical/core-musical-elements/metre" element={<Classical0103MetrePage />} />
        <Route path="/aos/classical/core-musical-elements/tempo" element={<Classical0104TempoPage />} />
        <Route path="/aos/classical/core-musical-elements/melody" element={<Classical0105MelodyPage />} />
        <Route path="/aos/classical/core-musical-elements/harmony" element={<Classical0106HarmonyPage />} />
        <Route path="/aos/classical/core-musical-elements/tonality" element={<Classical0107TonalityPage />} />
        <Route path="/aos/classical/core-musical-elements/texture" element={<Classical0108TexturePage />} />
        <Route path="/aos/classical/core-musical-elements/timbre" element={<Classical0109TimbrePage />} />
        <Route path="/aos/classical/core-musical-elements/structure-form" element={<Classical0110StructureFormPage />} />

        {/* Sound Sources & Techniques */}
        <Route path="/aos/classical/sound-sources-and-techniques" element={<Classical02SoundSourcesAndTechniquesPage />} />
        <Route path="/aos/classical/sound-sources-and-techniques/instrumentation" element={<Classical0201InstrumentationPage />} />
        <Route path="/aos/classical/sound-sources-and-techniques/organology" element={<Classical0202OrganologyPage />} />
        <Route path="/aos/classical/sound-sources-and-techniques/vocal-techniques" element={<Classical0203VocalTechniquesPage />} />
        <Route path="/aos/classical/sound-sources-and-techniques/extended-techniques" element={<Classical0204ExtendedTechniquesPage />} />
        <Route path="/aos/classical/sound-sources-and-techniques/improvisation" element={<Classical0205ImprovisationPage />} />
        <Route path="/aos/classical/sound-sources-and-techniques/composition-techniques" element={<Classical0206CompositionTechniquesPage />} />

        {/* Cultural & Historical Context */}
        <Route path="/aos/classical/cultural-and-historical-context" element={<Classical03CulturalAndHistoricalContextPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/cultural-function" element={<Classical0301CulturalFunctionPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/cultural-function/ritual" element={<Classical030101RitualPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/cultural-function/celebration" element={<Classical030102CelebrationPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/cultural-function/work-protest" element={<Classical030103WorkProtestPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/cultural-function/healing" element={<Classical030104HealingPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/cultural-function/social-identity" element={<Classical030105SocialIdentityPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/historical-background" element={<Classical0302HistoricalBackgroundPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/movement-and-dance" element={<Classical0303MovementAndDancePage />} />
        <Route path="/aos/classical/cultural-and-historical-context/economics-and-patronage" element={<Classical0304EconomicsAndPatronagePage />} />
        <Route path="/aos/classical/cultural-and-historical-context/key-works-pieces" element={<Classical0305KeyWorksPiecesPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/key-composers-artists" element={<Classical0306KeyComposersArtistsPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/performance-practice" element={<Classical0307PerformancePracticePage />} />
        <Route path="/aos/classical/cultural-and-historical-context/performance-practice/staging" element={<Classical030701StagingPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/performance-practice/performer-audience-relationship" element={<Classical030702PerformerAudienceRelationshipPage />} />
        <Route path="/aos/classical/cultural-and-historical-context/performance-practice/attire" element={<Classical030703AttirePage />} />
        <Route path="/aos/classical/cultural-and-historical-context/performance-practice/ritualistic-elements" element={<Classical030704RitualisticElementsPage />} />

        {/* Language, Literacy & Theory */}
        <Route path="/aos/classical/language-literacy-and-theory" element={<Classical04LanguageLiteracyAndTheoryPage />} />
        <Route path="/aos/classical/language-literacy-and-theory/specific-terminology" element={<Classical0401SpecificTerminologyPage />} />
        <Route path="/aos/classical/language-literacy-and-theory/lyrics-and-text-analysis" element={<Classical0402LyricsAndTextAnalysisPage />} />
        <Route path="/aos/classical/language-literacy-and-theory/notation-system" element={<Classical0403NotationSystemPage />} />
        <Route path="/aos/classical/language-literacy-and-theory/oral-aural-tradition" element={<Classical0404OralAuralTraditionPage />} />
        <Route path="/aos/classical/language-literacy-and-theory/music-theory-framework" element={<Classical0405MusicTheoryFrameworkPage />} />

        {/* Technology & Innovation */}
        <Route path="/aos/classical/technology-and-innovation" element={<Classical05TechnologyAndInnovationPage />} />
        <Route path="/aos/classical/technology-and-innovation/music-technology" element={<Classical0501MusicTechnologyPage />} />
        <Route path="/aos/classical/technology-and-innovation/recording-and-production-techniques" element={<Classical0502RecordingAndProductionTechniquesPage />} />
        <Route path="/aos/classical/technology-and-innovation/distribution-and-media" element={<Classical0503DistributionAndMediaPage />} />
        <Route path="/aos/classical/technology-and-innovation/hybridization" element={<Classical0504HybridizationPage />} />

        {/* Analytical Domains */}
        <Route path="/aos/classical/analytical-domains" element={<Classical06AnalyticalDomainsPage />} />
        <Route path="/aos/classical/analytical-domains/genre-and-style" element={<Classical0601GenreAndStylePage />} />
        <Route path="/aos/classical/analytical-domains/aesthetic-values" element={<Classical0602AestheticValuesPage />} />
        <Route path="/aos/classical/analytical-domains/audience-reception" element={<Classical0603AudienceReceptionPage />} />
        <Route path="/aos/classical/analytical-domains/political-social-commentary" element={<Classical0604PoliticalSocialCommentaryPage />} />
        <Route path="/aos/classical/analytical-domains/geographic-influence" element={<Classical0605GeographicInfluencePage />} />

        {/* Glossary */}
        <Route path="/aos/classical/glossary" element={<Classical07GlossaryPage />} />
    </>
);

export default ClassicalRoutes;
