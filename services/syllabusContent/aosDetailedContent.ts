// Detailed content sections for all Areas of Study
// Updated to use internal React routes instead of external HTML pages

import { SyllabusItem } from '../../types';

// Route mappings for each AOS
const AOS_ROUTES: Record<string, string> = {
    'aos02-classical-music': '/aos/classical',
    'aos03-romantic-music': '/aos/romantic',
    'aos04-music-and-words': '/aos/music-words',
    'aos05-music-for-dance': '/aos/dance',
    'aos06-music-for-small-ensemble': '/aos/small-ensemble',
    'aos07-music-for-stage-and-screen': '/aos/stage-screen',
};

// Create nested children for Core Musical Elements section
function createCoreElementsChildren(aosFolder: string): SyllabusItem[] {
    const base = `${AOS_ROUTES[aosFolder]}/core-musical-elements`;
    return [
        { id: `${aosFolder}-dynamics`, title: 'Dynamics', path: `${base}/dynamics`, content: 'Dynamic markings and expression.' },
        { id: `${aosFolder}-rhythm`, title: 'Rhythm', path: `${base}/rhythm`, content: 'Rhythmic patterns and pulse.' },
        { id: `${aosFolder}-metre`, title: 'Metre', path: `${base}/metre`, content: 'Time signatures and metric organization.' },
        { id: `${aosFolder}-tempo`, title: 'Tempo', path: `${base}/tempo`, content: 'Tempo markings and conventions.' },
        { id: `${aosFolder}-melody`, title: 'Melody', path: `${base}/melody`, content: 'Melodic characteristics.' },
        { id: `${aosFolder}-harmony`, title: 'Harmony', path: `${base}/harmony`, content: 'Harmonic language and progressions.' },
        { id: `${aosFolder}-tonality`, title: 'Tonality', path: `${base}/tonality`, content: 'Keys and modulation.' },
        { id: `${aosFolder}-texture`, title: 'Texture', path: `${base}/texture`, content: 'Musical textures.' },
        { id: `${aosFolder}-timbre`, title: 'Timbre', path: `${base}/timbre`, content: 'Instrumental timbres.' },
        { id: `${aosFolder}-structure`, title: 'Structure/Form', path: `${base}/structure-form`, content: 'Musical forms and structures.' },
    ];
}

// Create nested children for Sound Sources section
function createSoundSourcesChildren(aosFolder: string): SyllabusItem[] {
    const base = `${AOS_ROUTES[aosFolder]}/sound-sources-and-techniques`;
    return [
        { id: `${aosFolder}-instrumentation`, title: 'Instrumentation', path: `${base}/instrumentation`, content: 'Instrumental forces.' },
        { id: `${aosFolder}-organology`, title: 'Organology', path: `${base}/organology`, content: 'Instrument classification.' },
        { id: `${aosFolder}-vocal`, title: 'Vocal Techniques', path: `${base}/vocal-techniques`, content: 'Vocal styles and techniques.' },
        { id: `${aosFolder}-extended`, title: 'Extended Techniques', path: `${base}/extended-techniques`, content: 'Special playing techniques.' },
        { id: `${aosFolder}-improv`, title: 'Improvisation', path: `${base}/improvisation`, content: 'Improvised elements.' },
        { id: `${aosFolder}-composition`, title: 'Composition Techniques', path: `${base}/composition-techniques`, content: 'Compositional methods.' },
    ];
}

// Create nested children for Cultural Context section
function createCulturalContextChildren(aosFolder: string): SyllabusItem[] {
    const base = `${AOS_ROUTES[aosFolder]}/cultural-and-historical-context`;
    return [
        { id: `${aosFolder}-cultural-fn`, title: 'Cultural Function', path: `${base}/cultural-function`, content: 'Role of music in society.' },
        { id: `${aosFolder}-historical`, title: 'Historical Background', path: `${base}/historical-background`, content: 'Historical context.' },
        { id: `${aosFolder}-dance`, title: 'Movement & Dance', path: `${base}/movement-and-dance`, content: 'Dance forms.' },
        { id: `${aosFolder}-patronage`, title: 'Economics & Patronage', path: `${base}/economics-and-patronage`, content: 'Musical economics.' },
        { id: `${aosFolder}-works`, title: 'Key Works', path: `${base}/key-works-pieces`, content: 'Important compositions.' },
        { id: `${aosFolder}-composers`, title: 'Key Composers', path: `${base}/key-composers-artists`, content: 'Important artists.' },
        { id: `${aosFolder}-performance`, title: 'Performance Practice', path: `${base}/performance-practice`, content: 'Performance conventions.' },
    ];
}

// Create nested children for Language/Theory section
function createLanguageTheoryChildren(aosFolder: string): SyllabusItem[] {
    const base = `${AOS_ROUTES[aosFolder]}/language-literacy-and-theory`;
    return [
        { id: `${aosFolder}-terminology`, title: 'Specific Terminology', path: `${base}/specific-terminology`, content: 'Musical vocabulary.' },
        { id: `${aosFolder}-lyrics`, title: 'Lyrics & Text Analysis', path: `${base}/lyrics-and-text-analysis`, content: 'Text and meaning.' },
        { id: `${aosFolder}-notation`, title: 'Notation System', path: `${base}/notation-system`, content: 'Musical notation.' },
        { id: `${aosFolder}-oral`, title: 'Oral/Aural Tradition', path: `${base}/oral-aural-tradition`, content: 'Listening traditions.' },
    ];
}

// Create nested children for Technology section
function createTechnologyChildren(aosFolder: string): SyllabusItem[] {
    const base = `${AOS_ROUTES[aosFolder]}/technology-and-innovation`;
    return [
        { id: `${aosFolder}-music-tech`, title: 'Music Technology', path: `${base}/music-technology`, content: 'Technological developments.' },
        { id: `${aosFolder}-recording`, title: 'Recording & Production', path: `${base}/recording-and-production`, content: 'Recording methods.' },
        { id: `${aosFolder}-distribution`, title: 'Distribution & Media', path: `${base}/distribution-and-media`, content: 'Music distribution.' },
        { id: `${aosFolder}-hybridization`, title: 'Hybridization', path: `${base}/hybridization`, content: 'Cross-genre influences.' },
    ];
}

// Create nested children for Analytical Domains section
function createAnalyticalDomainsChildren(aosFolder: string): SyllabusItem[] {
    const base = `${AOS_ROUTES[aosFolder]}/analytical-domains`;
    return [
        { id: `${aosFolder}-genre`, title: 'Genre & Style', path: `${base}/genre-and-style`, content: 'Musical genres.' },
        { id: `${aosFolder}-aesthetic`, title: 'Aesthetic Values', path: `${base}/aesthetic-values`, content: 'Aesthetic principles.' },
        { id: `${aosFolder}-audience`, title: 'Audience Reception', path: `${base}/audience-reception`, content: 'Listener responses.' },
        { id: `${aosFolder}-political`, title: 'Political/Social Commentary', path: `${base}/political-social-commentary`, content: 'Social context.' },
        { id: `${aosFolder}-geographic`, title: 'Geographic Influence', path: `${base}/geographic-influence`, content: 'Regional styles.' },
    ];
}

// Create detailed content with full nested hierarchy
function createDetailedContent(aosNum: string, aosFolder: string, aosTitle: string): SyllabusItem {
    const basePath = AOS_ROUTES[aosFolder];
    return {
        id: `${aosNum}-detailed-content`,
        title: '📚 Detailed Study Materials',
        title_zh: '📚 详细学习资料',
        path: basePath,
        content: `In-depth content covering all aspects of ${aosTitle}.`,
        content_zh: `深入涵盖${aosTitle}各方面的内容。`,
        children: [
            {
                id: `${aosNum}-core-elements`,
                title: 'Core Musical Elements',
                title_zh: '核心音乐元素',
                path: `${basePath}/core-musical-elements`,
                content: 'Dynamics, rhythm, metre, tempo, melody, harmony, tonality, texture, timbre, and structure.',
                children: createCoreElementsChildren(aosFolder)
            },
            {
                id: `${aosNum}-sound-sources`,
                title: 'Sound Sources & Techniques',
                title_zh: '声源与技巧',
                path: `${basePath}/sound-sources-and-techniques`,
                content: 'Instrumentation, organology, vocal techniques, and composition methods.',
                children: createSoundSourcesChildren(aosFolder)
            },
            {
                id: `${aosNum}-cultural-context`,
                title: 'Cultural & Historical Context',
                title_zh: '文化与历史背景',
                path: `${basePath}/cultural-and-historical-context`,
                content: 'Historical background, key composers, patronage, and performance practice.',
                children: createCulturalContextChildren(aosFolder)
            },
            {
                id: `${aosNum}-language-theory`,
                title: 'Language, Literacy & Theory',
                title_zh: '语言、读写与理论',
                path: `${basePath}/language-literacy-and-theory`,
                content: 'Terminology, notation systems, and analytical concepts.',
                children: createLanguageTheoryChildren(aosFolder)
            },
            {
                id: `${aosNum}-technology`,
                title: 'Technology & Innovation',
                title_zh: '技术与创新',
                path: `${basePath}/technology-and-innovation`,
                content: 'Music technology, recording, and distribution.',
                children: createTechnologyChildren(aosFolder)
            },
            {
                id: `${aosNum}-analytical`,
                title: 'Analytical Domains',
                title_zh: '分析领域',
                path: `${basePath}/analytical-domains`,
                content: 'Genre, style, aesthetics, audience reception, and geographic influence.',
                children: createAnalyticalDomainsChildren(aosFolder)
            },
            {
                id: `${aosNum}-glossary`,
                title: `${aosTitle} Glossary`,
                title_zh: `${aosTitle}术语表`,
                path: `${basePath}/glossary`,
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
