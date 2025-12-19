// Detailed content sections for all Areas of Study
// These link to the comprehensive HTML pages on schoolclass.net

import { SyllabusItem } from '../../types';

const BASE_URL = 'https://www.schoolclass.net/aos';

// Create nested children for Core Musical Elements section
function createCoreElementsChildren(aosFolder: string): SyllabusItem[] {
    const base = `${BASE_URL}/${aosFolder}/${aosFolder.slice(0, 5)}-01-core-musical-elements`;
    return [
        { id: `${aosFolder}-dynamics`, title: 'Dynamics', path: `${base}/${aosFolder.slice(0, 5)}-01-01-dynamics/${aosFolder.slice(0, 5)}-01-01-dynamics.html`, content: 'Dynamic markings and expression.' },
        { id: `${aosFolder}-rhythm`, title: 'Rhythm', path: `${base}/${aosFolder.slice(0, 5)}-01-02-rhythm/${aosFolder.slice(0, 5)}-01-02-rhythm.html`, content: 'Rhythmic patterns and pulse.' },
        { id: `${aosFolder}-metre`, title: 'Metre', path: `${base}/${aosFolder.slice(0, 5)}-01-03-metre/${aosFolder.slice(0, 5)}-01-03-metre.html`, content: 'Time signatures and metric organization.' },
        { id: `${aosFolder}-tempo`, title: 'Tempo', path: `${base}/${aosFolder.slice(0, 5)}-01-04-tempo/${aosFolder.slice(0, 5)}-01-04-tempo.html`, content: 'Tempo markings and conventions.' },
        { id: `${aosFolder}-melody`, title: 'Melody', path: `${base}/${aosFolder.slice(0, 5)}-01-05-melody/${aosFolder.slice(0, 5)}-01-05-melody.html`, content: 'Melodic characteristics.' },
        { id: `${aosFolder}-harmony`, title: 'Harmony', path: `${base}/${aosFolder.slice(0, 5)}-01-06-harmony/${aosFolder.slice(0, 5)}-01-06-harmony.html`, content: 'Harmonic language and progressions.' },
        { id: `${aosFolder}-tonality`, title: 'Tonality', path: `${base}/${aosFolder.slice(0, 5)}-01-07-tonality/${aosFolder.slice(0, 5)}-01-07-tonality.html`, content: 'Keys and modulation.' },
        { id: `${aosFolder}-texture`, title: 'Texture', path: `${base}/${aosFolder.slice(0, 5)}-01-08-texture/${aosFolder.slice(0, 5)}-01-08-texture.html`, content: 'Musical textures.' },
        { id: `${aosFolder}-timbre`, title: 'Timbre', path: `${base}/${aosFolder.slice(0, 5)}-01-09-timbre/${aosFolder.slice(0, 5)}-01-09-timbre.html`, content: 'Instrumental timbres.' },
        { id: `${aosFolder}-structure`, title: 'Structure/Form', path: `${base}/${aosFolder.slice(0, 5)}-01-10-structure-form/${aosFolder.slice(0, 5)}-01-10-structure-form.html`, content: 'Musical forms and structures.' },
    ];
}

// Create nested children for Sound Sources section
function createSoundSourcesChildren(aosFolder: string): SyllabusItem[] {
    const base = `${BASE_URL}/${aosFolder}/${aosFolder.slice(0, 5)}-02-sound-sources-and-techniques`;
    return [
        { id: `${aosFolder}-instrumentation`, title: 'Instrumentation', path: `${base}/${aosFolder.slice(0, 5)}-02-01-instrumentation/${aosFolder.slice(0, 5)}-02-01-instrumentation.html`, content: 'Instrumental forces.' },
        { id: `${aosFolder}-organology`, title: 'Organology', path: `${base}/${aosFolder.slice(0, 5)}-02-02-organology/${aosFolder.slice(0, 5)}-02-02-organology.html`, content: 'Instrument classification.' },
        { id: `${aosFolder}-vocal`, title: 'Vocal Techniques', path: `${base}/${aosFolder.slice(0, 5)}-02-03-vocal-techniques/${aosFolder.slice(0, 5)}-02-03-vocal-techniques.html`, content: 'Vocal styles and techniques.' },
        { id: `${aosFolder}-extended`, title: 'Extended Techniques', path: `${base}/${aosFolder.slice(0, 5)}-02-04-extended-techniques/${aosFolder.slice(0, 5)}-02-04-extended-techniques.html`, content: 'Special playing techniques.' },
        { id: `${aosFolder}-improv`, title: 'Improvisation', path: `${base}/${aosFolder.slice(0, 5)}-02-05-improvisation/${aosFolder.slice(0, 5)}-02-05-improvisation.html`, content: 'Improvised elements.' },
        { id: `${aosFolder}-composition`, title: 'Composition Techniques', path: `${base}/${aosFolder.slice(0, 5)}-02-06-composition-techniques/${aosFolder.slice(0, 5)}-02-06-composition-techniques.html`, content: 'Compositional methods.' },
    ];
}

// Create nested children for Cultural Context section
function createCulturalContextChildren(aosFolder: string): SyllabusItem[] {
    const base = `${BASE_URL}/${aosFolder}/${aosFolder.slice(0, 5)}-03-cultural-and-historical-context`;
    return [
        { id: `${aosFolder}-cultural-fn`, title: 'Cultural Function', path: `${base}/${aosFolder.slice(0, 5)}-03-01-cultural-function/${aosFolder.slice(0, 5)}-03-01-cultural-function.html`, content: 'Role of music in society.' },
        { id: `${aosFolder}-historical`, title: 'Historical Background', path: `${base}/${aosFolder.slice(0, 5)}-03-02-historical-background/${aosFolder.slice(0, 5)}-03-02-historical-background.html`, content: 'Historical context.' },
        { id: `${aosFolder}-dance`, title: 'Movement & Dance', path: `${base}/${aosFolder.slice(0, 5)}-03-03-movement-and-dance/${aosFolder.slice(0, 5)}-03-03-movement-and-dance.html`, content: 'Dance forms.' },
        { id: `${aosFolder}-patronage`, title: 'Economics & Patronage', path: `${base}/${aosFolder.slice(0, 5)}-03-04-economics-and-patronage/${aosFolder.slice(0, 5)}-03-04-economics-and-patronage.html`, content: 'Musical economics.' },
        { id: `${aosFolder}-works`, title: 'Key Works', path: `${base}/${aosFolder.slice(0, 5)}-03-05-key-works-pieces/${aosFolder.slice(0, 5)}-03-05-key-works-pieces.html`, content: 'Important compositions.' },
        { id: `${aosFolder}-composers`, title: 'Key Composers', path: `${base}/${aosFolder.slice(0, 5)}-03-06-key-composers-artists/${aosFolder.slice(0, 5)}-03-06-key-composers-artists.html`, content: 'Important artists.' },
        { id: `${aosFolder}-performance`, title: 'Performance Practice', path: `${base}/${aosFolder.slice(0, 5)}-03-07-performance-practice/${aosFolder.slice(0, 5)}-03-07-performance-practice.html`, content: 'Performance conventions.' },
    ];
}

// Create nested children for Language/Theory section
function createLanguageTheoryChildren(aosFolder: string): SyllabusItem[] {
    const base = `${BASE_URL}/${aosFolder}/${aosFolder.slice(0, 5)}-04-language-literacy-and-theory`;
    return [
        { id: `${aosFolder}-terminology`, title: 'Specific Terminology', path: `${base}/${aosFolder.slice(0, 5)}-04-01-specific-terminology/${aosFolder.slice(0, 5)}-04-01-specific-terminology.html`, content: 'Musical vocabulary.' },
        { id: `${aosFolder}-lyrics`, title: 'Lyrics & Text Analysis', path: `${base}/${aosFolder.slice(0, 5)}-04-02-lyrics-and-text-analysis/${aosFolder.slice(0, 5)}-04-02-lyrics-and-text-analysis.html`, content: 'Text and meaning.' },
        { id: `${aosFolder}-notation`, title: 'Notation System', path: `${base}/${aosFolder.slice(0, 5)}-04-03-notation-system/${aosFolder.slice(0, 5)}-04-03-notation-system.html`, content: 'Musical notation.' },
        { id: `${aosFolder}-oral`, title: 'Oral/Aural Tradition', path: `${base}/${aosFolder.slice(0, 5)}-04-04-oral-aural-tradition/${aosFolder.slice(0, 5)}-04-04-oral-aural-tradition.html`, content: 'Listening traditions.' },
    ];
}

// Create nested children for Technology section
function createTechnologyChildren(aosFolder: string): SyllabusItem[] {
    const base = `${BASE_URL}/${aosFolder}/${aosFolder.slice(0, 5)}-05-technology-and-innovation`;
    return [
        { id: `${aosFolder}-music-tech`, title: 'Music Technology', path: `${base}/${aosFolder.slice(0, 5)}-05-01-music-technology/${aosFolder.slice(0, 5)}-05-01-music-technology.html`, content: 'Technological developments.' },
        { id: `${aosFolder}-recording`, title: 'Recording & Production', path: `${base}/${aosFolder.slice(0, 5)}-05-02-recording-and-production-techniques/${aosFolder.slice(0, 5)}-05-02-recording-and-production-techniques.html`, content: 'Recording methods.' },
        { id: `${aosFolder}-distribution`, title: 'Distribution & Media', path: `${base}/${aosFolder.slice(0, 5)}-05-03-distribution-and-media/${aosFolder.slice(0, 5)}-05-03-distribution-and-media.html`, content: 'Music distribution.' },
        { id: `${aosFolder}-hybridization`, title: 'Hybridization', path: `${base}/${aosFolder.slice(0, 5)}-05-04-hybridization/${aosFolder.slice(0, 5)}-05-04-hybridization.html`, content: 'Cross-genre influences.' },
    ];
}

// Create nested children for Analytical Domains section
function createAnalyticalDomainsChildren(aosFolder: string): SyllabusItem[] {
    const base = `${BASE_URL}/${aosFolder}/${aosFolder.slice(0, 5)}-06-analytical-domains`;
    return [
        { id: `${aosFolder}-genre`, title: 'Genre & Style', path: `${base}/${aosFolder.slice(0, 5)}-06-01-genre-and-style/${aosFolder.slice(0, 5)}-06-01-genre-and-style.html`, content: 'Musical genres.' },
        { id: `${aosFolder}-aesthetic`, title: 'Aesthetic Values', path: `${base}/${aosFolder.slice(0, 5)}-06-02-aesthetic-values/${aosFolder.slice(0, 5)}-06-02-aesthetic-values.html`, content: 'Aesthetic principles.' },
        { id: `${aosFolder}-audience`, title: 'Audience Reception', path: `${base}/${aosFolder.slice(0, 5)}-06-03-audience-reception/${aosFolder.slice(0, 5)}-06-03-audience-reception.html`, content: 'Listener responses.' },
        { id: `${aosFolder}-political`, title: 'Political/Social Commentary', path: `${base}/${aosFolder.slice(0, 5)}-06-04-political-social-commentary/${aosFolder.slice(0, 5)}-06-04-political-social-commentary.html`, content: 'Social context.' },
        { id: `${aosFolder}-geographic`, title: 'Geographic Influence', path: `${base}/${aosFolder.slice(0, 5)}-06-05-geographic-influence/${aosFolder.slice(0, 5)}-06-05-geographic-influence.html`, content: 'Regional styles.' },
    ];
}

// Create detailed content with full nested hierarchy
function createDetailedContent(aosNum: string, aosFolder: string, aosTitle: string): SyllabusItem {
    const prefix = aosFolder.slice(0, 5);
    return {
        id: `${aosNum}-detailed-content`,
        title: '📚 Detailed Study Materials',
        title_zh: '📚 详细学习资料',
        path: `${BASE_URL}/${aosFolder}`,
        content: `In-depth content covering all aspects of ${aosTitle}.`,
        content_zh: `深入涵盖${aosTitle}各方面的内容。`,
        children: [
            {
                id: `${aosNum}-core-elements`,
                title: 'Core Musical Elements',
                title_zh: '核心音乐元素',
                path: `${BASE_URL}/${aosFolder}/${prefix}-01-core-musical-elements`,
                content: 'Dynamics, rhythm, metre, tempo, melody, harmony, tonality, texture, timbre, and structure.',
                children: createCoreElementsChildren(aosFolder)
            },
            {
                id: `${aosNum}-sound-sources`,
                title: 'Sound Sources & Techniques',
                title_zh: '声源与技巧',
                path: `${BASE_URL}/${aosFolder}/${prefix}-02-sound-sources-and-techniques`,
                content: 'Instrumentation, organology, vocal techniques, and composition methods.',
                children: createSoundSourcesChildren(aosFolder)
            },
            {
                id: `${aosNum}-cultural-context`,
                title: 'Cultural & Historical Context',
                title_zh: '文化与历史背景',
                path: `${BASE_URL}/${aosFolder}/${prefix}-03-cultural-and-historical-context`,
                content: 'Historical background, key composers, patronage, and performance practice.',
                children: createCulturalContextChildren(aosFolder)
            },
            {
                id: `${aosNum}-language-theory`,
                title: 'Language, Literacy & Theory',
                title_zh: '语言、读写与理论',
                path: `${BASE_URL}/${aosFolder}/${prefix}-04-language-literacy-and-theory`,
                content: 'Terminology, notation systems, and analytical concepts.',
                children: createLanguageTheoryChildren(aosFolder)
            },
            {
                id: `${aosNum}-technology`,
                title: 'Technology & Innovation',
                title_zh: '技术与创新',
                path: `${BASE_URL}/${aosFolder}/${prefix}-05-technology-and-innovation`,
                content: 'Music technology, recording, and distribution.',
                children: createTechnologyChildren(aosFolder)
            },
            {
                id: `${aosNum}-analytical`,
                title: 'Analytical Domains',
                title_zh: '分析领域',
                path: `${BASE_URL}/${aosFolder}/${prefix}-06-analytical-domains`,
                content: 'Genre, style, aesthetics, audience reception, and geographic influence.',
                children: createAnalyticalDomainsChildren(aosFolder)
            },
            {
                id: `${aosNum}-glossary`,
                title: `${aosTitle} Glossary`,
                title_zh: `${aosTitle}术语表`,
                path: `${BASE_URL}/${aosFolder}/${prefix}-07-glossary/${prefix}-07-glossary.html`,
                content: 'Key terminology for this area of study.',
            },
        ]
    };
}

export const aos2DetailedContent = createDetailedContent('aos2', 'aos02-classical-music', 'Classical Music');
export const aos3DetailedContent = createDetailedContent('aos3', 'aos03-romantic-music', 'Romantic Music');
export const aos4DetailedContent = createDetailedContent('aos4', 'aos04-music-and-words', 'Music and Words');
export const aos5DetailedContent = createDetailedContent('aos5', 'aos05-music-for-dance', 'Music for Dance');
export const aos6DetailedContent = createDetailedContent('aos6', 'aos06-music-for-small-ensemble', 'Small Ensemble');
export const aos7DetailedContent = createDetailedContent('aos7', 'aos07-music-for-stage-and-screen', 'Stage and Screen');
