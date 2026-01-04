import React from 'react';
import { Route } from 'react-router-dom';
import {
    // Core Musical Elements
    Baroque0101DynamicsPage,
    Baroque0102RhythmPage,
    Baroque0103MetrePage,
    Baroque0104TempoPage,
    Baroque0105MelodyPage,
    Baroque0106HarmonyPage,
    Baroque0107TonalityPage,
    Baroque0108TexturePage,
    Baroque0109TimbrePage,
    Baroque0110StructureFormPage,
    Baroque01CoreMusicalElementsPage,
    // Sound Sources & Techniques
    Baroque0201InstrumentationPage,
    Baroque0202OrganologyPage,
    Baroque0203VocalTechniquesPage,
    Baroque0204ExtendedTechniquesPage,
    Baroque0205ImprovisationPage,
    Baroque0206CompositionTechniquesPage,
    Baroque02SoundSourcesAndTechniquesPage,
    // Cultural & Historical Context
    Baroque030101RitualPage,
    Baroque030102CelebrationPage,
    Baroque030103WorkProtestPage,
    Baroque030104HealingPage,
    Baroque030105SocialIdentityPage,
    Baroque0301CulturalFunctionPage,
    Baroque0302HistoricalBackgroundPage,
    Baroque0303MovementAndDancePage,
    Baroque0304EconomicsAndPatronagePage,
    Baroque0305KeyWorksPiecesPage,
    Baroque0306KeyComposersArtistsPage,
    Baroque030701StagingPage,
    Baroque030702PerformerAudienceRelationshipPage,
    Baroque030703AttirePage,
    Baroque030704RitualisticElementsPage,
    Baroque0307PerformancePracticePage,
    Baroque03CulturalAndHistoricalContextPage,
    // Language, Literacy & Theory
    Baroque0401SpecificTerminologyPage,
    Baroque0402LyricsAndTextAnalysisPage,
    Baroque0403NotationSystemPage,
    Baroque0404OralAuralTraditionPage,
    Baroque0405MusicTheoryFrameworkPage,
    Baroque04LanguageLiteracyAndTheoryPage,
    // Technology & Innovation
    Baroque0501MusicTechnologyPage,
    Baroque0502RecordingAndProductionTechniquesPage,
    Baroque0503DistributionAndMediaPage,
    Baroque0504HybridizationPage,
    Baroque05TechnologyAndInnovationPage,
    // Analytical Domains
    Baroque0601GenreAndStylePage,
    Baroque0602AestheticValuesPage,
    Baroque0603AudienceReceptionPage,
    Baroque0604PoliticalSocialCommentaryPage,
    Baroque0605GeographicInfluencePage,
    Baroque06AnalyticalDomainsPage,
    // Glossary & Overview
    Baroque07GlossaryPage,
    BaroqueBaroqueMusicPage,
} from '../pages/aos1/baroque';

/**
 * All routes for AOS1 Baroque Music section.
 * Use with <Routes>{BaroqueRoutes}</Routes>
 */
export const BaroqueRoutes = (
    <>
        {/* Baroque Music Overview */}
        <Route path="/aos/baroque" element={<BaroqueBaroqueMusicPage />} />

        {/* Core Musical Elements */}
        <Route path="/aos/baroque/core-musical-elements" element={<Baroque01CoreMusicalElementsPage />} />
        <Route path="/aos/baroque/core-musical-elements/dynamics" element={<Baroque0101DynamicsPage />} />
        <Route path="/aos/baroque/core-musical-elements/rhythm" element={<Baroque0102RhythmPage />} />
        <Route path="/aos/baroque/core-musical-elements/metre" element={<Baroque0103MetrePage />} />
        <Route path="/aos/baroque/core-musical-elements/tempo" element={<Baroque0104TempoPage />} />
        <Route path="/aos/baroque/core-musical-elements/melody" element={<Baroque0105MelodyPage />} />
        <Route path="/aos/baroque/core-musical-elements/harmony" element={<Baroque0106HarmonyPage />} />
        <Route path="/aos/baroque/core-musical-elements/tonality" element={<Baroque0107TonalityPage />} />
        <Route path="/aos/baroque/core-musical-elements/texture" element={<Baroque0108TexturePage />} />
        <Route path="/aos/baroque/core-musical-elements/timbre" element={<Baroque0109TimbrePage />} />
        <Route path="/aos/baroque/core-musical-elements/structure-form" element={<Baroque0110StructureFormPage />} />

        {/* Sound Sources & Techniques */}
        <Route path="/aos/baroque/sound-sources-and-techniques" element={<Baroque02SoundSourcesAndTechniquesPage />} />
        <Route path="/aos/baroque/sound-sources-and-techniques/instrumentation" element={<Baroque0201InstrumentationPage />} />
        <Route path="/aos/baroque/sound-sources-and-techniques/organology" element={<Baroque0202OrganologyPage />} />
        <Route path="/aos/baroque/sound-sources-and-techniques/vocal-techniques" element={<Baroque0203VocalTechniquesPage />} />
        <Route path="/aos/baroque/sound-sources-and-techniques/extended-techniques" element={<Baroque0204ExtendedTechniquesPage />} />
        <Route path="/aos/baroque/sound-sources-and-techniques/improvisation" element={<Baroque0205ImprovisationPage />} />
        <Route path="/aos/baroque/sound-sources-and-techniques/composition-techniques" element={<Baroque0206CompositionTechniquesPage />} />

        {/* Cultural & Historical Context */}
        <Route path="/aos/baroque/cultural-and-historical-context" element={<Baroque03CulturalAndHistoricalContextPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/cultural-function" element={<Baroque0301CulturalFunctionPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/cultural-function/ritual" element={<Baroque030101RitualPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/cultural-function/celebration" element={<Baroque030102CelebrationPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/cultural-function/work-protest" element={<Baroque030103WorkProtestPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/cultural-function/healing" element={<Baroque030104HealingPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/cultural-function/social-identity" element={<Baroque030105SocialIdentityPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/historical-background" element={<Baroque0302HistoricalBackgroundPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/movement-and-dance" element={<Baroque0303MovementAndDancePage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/economics-and-patronage" element={<Baroque0304EconomicsAndPatronagePage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/key-works-pieces" element={<Baroque0305KeyWorksPiecesPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/key-composers-artists" element={<Baroque0306KeyComposersArtistsPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/performance-practice" element={<Baroque0307PerformancePracticePage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/performance-practice/staging" element={<Baroque030701StagingPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/performance-practice/performer-audience-relationship" element={<Baroque030702PerformerAudienceRelationshipPage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/performance-practice/attire" element={<Baroque030703AttirePage />} />
        <Route path="/aos/baroque/cultural-and-historical-context/performance-practice/ritualistic-elements" element={<Baroque030704RitualisticElementsPage />} />

        {/* Language, Literacy & Theory */}
        <Route path="/aos/baroque/language-literacy-and-theory" element={<Baroque04LanguageLiteracyAndTheoryPage />} />
        <Route path="/aos/baroque/language-literacy-and-theory/specific-terminology" element={<Baroque0401SpecificTerminologyPage />} />
        <Route path="/aos/baroque/language-literacy-and-theory/lyrics-and-text-analysis" element={<Baroque0402LyricsAndTextAnalysisPage />} />
        <Route path="/aos/baroque/language-literacy-and-theory/notation-system" element={<Baroque0403NotationSystemPage />} />
        <Route path="/aos/baroque/language-literacy-and-theory/oral-aural-tradition" element={<Baroque0404OralAuralTraditionPage />} />
        <Route path="/aos/baroque/language-literacy-and-theory/music-theory-framework" element={<Baroque0405MusicTheoryFrameworkPage />} />

        {/* Technology & Innovation */}
        <Route path="/aos/baroque/technology-and-innovation" element={<Baroque05TechnologyAndInnovationPage />} />
        <Route path="/aos/baroque/technology-and-innovation/music-technology" element={<Baroque0501MusicTechnologyPage />} />
        <Route path="/aos/baroque/technology-and-innovation/recording-and-production-techniques" element={<Baroque0502RecordingAndProductionTechniquesPage />} />
        <Route path="/aos/baroque/technology-and-innovation/distribution-and-media" element={<Baroque0503DistributionAndMediaPage />} />
        <Route path="/aos/baroque/technology-and-innovation/hybridization" element={<Baroque0504HybridizationPage />} />

        {/* Analytical Domains */}
        <Route path="/aos/baroque/analytical-domains" element={<Baroque06AnalyticalDomainsPage />} />
        <Route path="/aos/baroque/analytical-domains/genre-and-style" element={<Baroque0601GenreAndStylePage />} />
        <Route path="/aos/baroque/analytical-domains/aesthetic-values" element={<Baroque0602AestheticValuesPage />} />
        <Route path="/aos/baroque/analytical-domains/audience-reception" element={<Baroque0603AudienceReceptionPage />} />
        <Route path="/aos/baroque/analytical-domains/political-social-commentary" element={<Baroque0604PoliticalSocialCommentaryPage />} />
        <Route path="/aos/baroque/analytical-domains/geographic-influence" element={<Baroque0605GeographicInfluencePage />} />

        {/* Glossary */}
        <Route path="/aos/baroque/glossary" element={<Baroque07GlossaryPage />} />
    </>
);

export default BaroqueRoutes;
