
import { SyllabusItem } from '../../types';
import { introductionPage } from './aos1/introduction';
import { keyFeaturesPage } from './aos1/keyFeatures';
import { vivaldiFocusWork } from './aos1/vivaldi';
import { handelFocusWork } from './aos1/handel';
import { widerListeningPage } from './aos1/widerListening';
import { finalExamPage } from './aos1/finalExam';

// Detailed content sections from the new HTML pages
const detailedContentSections: SyllabusItem = {
  id: 'aos1-detailed-content',
  title: '📚 Detailed Study Materials',
  title_zh: '📚 详细学习资料',
  path: '/aos/aos01-baroque-music',
  content: 'In-depth content covering all aspects of Baroque music.',
  content_zh: '深入涵盖巴洛克音乐各方面的内容。',
  children: [
    {
      id: 'aos1-core-elements',
      title: 'Core Musical Elements',
      title_zh: '核心音乐元素',
      path: '/aos/aos01-baroque-music/aos01-01-core-musical-elements',
      content: 'Dynamics, rhythm, metre, tempo, melody, harmony, tonality, texture, timbre, and structure.',
    },
    {
      id: 'aos1-sound-sources',
      title: 'Sound Sources & Techniques',
      title_zh: '声源与技巧',
      path: '/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques',
      content: 'Instrumentation, organology, vocal techniques, and composition methods.',
    },
    {
      id: 'aos1-cultural-context',
      title: 'Cultural & Historical Context',
      title_zh: '文化与历史背景',
      path: '/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context',
      content: 'Historical background, key composers, patronage, and performance practice.',
    },
    {
      id: 'aos1-language-theory',
      title: 'Language, Literacy & Theory',
      title_zh: '语言、读写与理论',
      path: '/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory',
      content: 'Terminology, notation systems, and analytical concepts.',
    },
    {
      id: 'aos1-technology',
      title: 'Technology & Innovation',
      title_zh: '技术与创新',
      path: '/aos/aos01-baroque-music/aos01-05-technology-and-innovation',
      content: 'Music technology, recording, and distribution in the Baroque context.',
    },
    {
      id: 'aos1-analytical',
      title: 'Analytical Domains',
      title_zh: '分析领域',
      path: '/aos/aos01-baroque-music/aos01-06-analytical-domains',
      content: 'Genre, style, aesthetics, audience reception, and geographic influence.',
    },
  ]
};

export const baroqueMusicAoS: SyllabusItem = {
  id: 'aos1-baroque-music',
  title: 'Area of Study 1: Baroque Music',
  title_zh: '学习领域一：巴洛克音乐',
  path: '/areas-of-study/aos1-baroque-music',
  content: 'Music from a long time ago, about 1600 to 1750.',
  content_zh: '很久以前的音乐，大约从1600年到1750年。',
  longDescription: `Baroque music is a style from many years ago, from around 1600 to 1750. In this section, we will study special pieces called "focus works". This will help you learn to read music scores and understand how the music is made (this is called analysis).`,
  longDescription_zh: `巴洛克音乐是许多年前的一种风格，大约从1600年到1750年。在本节中，我们将学习被称为"重点作品"的特殊曲目。这将帮助您学会阅读乐谱并理解音乐是如何创作的（这被称为分析）。`,
  children: [
    introductionPage,
    keyFeaturesPage,
    vivaldiFocusWork,
    handelFocusWork,
    widerListeningPage,
    finalExamPage,
    detailedContentSections,
  ]
};
