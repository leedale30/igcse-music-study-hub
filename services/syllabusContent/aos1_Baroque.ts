
import { SyllabusItem } from '../../types';
import { introductionPage } from './aos1/introduction';
import { keyFeaturesPage } from './aos1/keyFeatures';
import { vivaldiFocusWork } from './aos1/vivaldi';
import { handelFocusWork } from './aos1/handel';
import { widerListeningPage } from './aos1/widerListening';
import { finalExamPage } from './aos1/finalExam';

export const baroqueMusicAoS: SyllabusItem = {
  id: 'aos1-baroque-music',
  title: 'Area of Study 1: Baroque Music',
  title_zh: '学习领域一：巴洛克音乐',
  path: '/areas-of-study/aos1-baroque-music',
  content: 'Music from a long time ago, about 1600 to 1750.',
  content_zh: '很久以前的音乐，大约从1600年到1750年。',
  longDescription: `Baroque music is a style from many years ago, from around 1600 to 1750. In this section, we will study special pieces called "focus works". This will help you learn to read music scores and understand how the music is made (this is called analysis).`,
  longDescription_zh: `巴洛克音乐是许多年前的一种风格，大约从1600年到1750年。在本节中，我们将学习被称为“重点作品”的特殊曲目。这将帮助您学会阅读乐谱并理解音乐是如何创作的（这被称为分析）。`,
  children: [
    introductionPage,
    keyFeaturesPage,
    vivaldiFocusWork,
    handelFocusWork,
    widerListeningPage,
    finalExamPage,
  ]
};
