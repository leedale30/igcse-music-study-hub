import { SyllabusItem } from '../../types';
import { popularSongIntroductionPage } from './aos3a/introduction';
import { popularSongKeyFeaturesPage } from './aos3a/keyFeatures';
import { popularSongFocusWork1 } from './aos3a/focusWork1';
import { popularSongFocusWork2 } from './aos3a/focusWork2';
import { popularSongWiderListeningPage } from './aos3a/widerListening';
import { popularSongFinalExamPage } from './aos3a/finalExam';

export const popularSongAoS: SyllabusItem = {
  id: 'aos3a-popular-song',
  title: 'Area of Study 3A: Popular Song',
  title_zh: '学习领域三A：流行歌曲',
  path: '/areas-of-study/aos3a-popular-song',
  content: 'Popular music from the 20th and 21st centuries.',
  content_zh: '20世纪和21世纪的流行音乐。',
  longDescription: `Popular Song is a focus area that explores the development of popular music from the early 20th century to the present day. This includes various genres such as blues, jazz, rock, pop, hip-hop, and contemporary styles. You will study specific focus works and learn to analyze the musical elements, cultural contexts, and technological developments that have shaped popular music.`,
  longDescription_zh: `流行歌曲是一个重点领域，探索从20世纪初到现在流行音乐的发展。这包括各种风格，如蓝调、爵士乐、摇滚乐、流行音乐、嘻哈音乐和当代风格。您将学习特定的重点作品，并学会分析塑造流行音乐的音乐元素、文化背景和技术发展。`,
  children: [
    popularSongIntroductionPage,
    popularSongKeyFeaturesPage,
    popularSongFocusWork1,
    popularSongFocusWork2,
    popularSongWiderListeningPage,
    popularSongFinalExamPage,
  ]
};