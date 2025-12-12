// Detailed content sections for all Areas of Study
// These link to the comprehensive HTML pages in /public/aos/

import { SyllabusItem } from '../../types';

// Helper function to create section items for an AOS
function createAosSection(aosNum: string, aosFolder: string, sectionNum: string, sectionFolder: string, title: string, title_zh: string, content: string): SyllabusItem {
    return {
        id: `${aosNum}-${sectionFolder}`,
        title,
        title_zh,
        path: `/aos/${aosFolder}/${aosFolder.slice(0, 5)}-${sectionNum}-${sectionFolder}`,
        content,
    };
}

// Common sections structure for all AOS
const commonSections = [
    { num: '01', folder: 'core-musical-elements', title: 'Core Musical Elements', title_zh: '核心音乐元素', content: 'Dynamics, rhythm, metre, tempo, melody, harmony, tonality, texture, timbre, and structure.' },
    { num: '02', folder: 'sound-sources-and-techniques', title: 'Sound Sources & Techniques', title_zh: '声源与技巧', content: 'Instrumentation, organology, vocal techniques, and composition methods.' },
    { num: '03', folder: 'cultural-and-historical-context', title: 'Cultural & Historical Context', title_zh: '文化与历史背景', content: 'Historical background, key composers, patronage, and performance practice.' },
    { num: '04', folder: 'language-literacy-and-theory', title: 'Language, Literacy & Theory', title_zh: '语言、读写与理论', content: 'Terminology, notation systems, and analytical concepts.' },
    { num: '05', folder: 'technology-and-innovation', title: 'Technology & Innovation', title_zh: '技术与创新', content: 'Music technology, recording, and distribution.' },
    { num: '06', folder: 'analytical-domains', title: 'Analytical Domains', title_zh: '分析领域', content: 'Genre, style, aesthetics, audience reception, and geographic influence.' },
];

function createDetailedContent(aosNum: string, aosFolder: string, aosTitle: string): SyllabusItem {
    return {
        id: `${aosNum}-detailed-content`,
        title: '📚 Detailed Study Materials',
        title_zh: '📚 详细学习资料',
        path: `/aos/${aosFolder}`,
        content: `In-depth content covering all aspects of ${aosTitle}.`,
        content_zh: `深入涵盖${aosTitle}各方面的内容。`,
        children: commonSections.map(section => ({
            id: `${aosNum}-${section.folder}`,
            title: section.title,
            title_zh: section.title_zh,
            path: `/aos/${aosFolder}/${aosFolder.slice(0, 5)}-${section.num}-${section.folder}`,
            content: section.content,
        }))
    };
}

export const aos2DetailedContent = createDetailedContent('aos2', 'aos02-classical-music', 'Classical Music');
export const aos3DetailedContent = createDetailedContent('aos3', 'aos03-romantic-music', 'Romantic Music');
export const aos4DetailedContent = createDetailedContent('aos4', 'aos04-music-and-words', 'Music and Words');
export const aos5DetailedContent = createDetailedContent('aos5', 'aos05-music-for-dance', 'Music for Dance');
export const aos6DetailedContent = createDetailedContent('aos6', 'aos06-music-for-small-ensemble', 'Music for Small Ensemble');
export const aos7DetailedContent = createDetailedContent('aos7', 'aos07-music-for-stage-and-screen', 'Music for Stage and Screen');
