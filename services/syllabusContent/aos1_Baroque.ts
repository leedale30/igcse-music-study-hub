
import { SyllabusItem } from '../../types';
import { introductionPage } from './aos1/introduction';
import { keyFeaturesPage } from './aos1/keyFeatures';
import { vivaldiFocusWork } from './aos1/vivaldi';
import { handelFocusWork } from './aos1/handel';
import { widerListeningPage } from './aos1/widerListening';
import { finalExamPage } from './aos1/finalExam';
import { baroqueRapidFireQuiz } from '../quizzes/aos1/rapid_fire';
import {
  baroqueTextureQuiz,
  baroqueDynamicsQuiz,
  vivaldiRitornelloQuiz,
  vivaldiStormQuiz,
  vivaldiDogQuiz,
  handelOvertureQuiz,
  handelFugueQuiz,
  corelliQuiz,
  bachAirQuiz,
  telemannQuiz,
  ornamentsQuiz,
  harmonyQuiz,
  specimenAllegroQuiz
} from '../quizzes/aos1/abc_quizzes';
import {
  generatedQuiz1,
  generatedQuiz2,
  generatedQuiz3,
  generatedQuiz4,
  generatedQuiz5,
  generatedQuiz6,
  generatedQuiz7,
  generatedQuiz8,
  generatedQuiz9,
  generatedQuiz10,
  generatedQuiz11,
  generatedQuiz12,
  generatedQuiz13,
  generatedQuiz14,
  generatedQuiz15,
  generatedQuiz16,
  generatedQuiz17,
  generatedQuiz18,
  generatedQuiz19
} from '../quizzes/aos1/generated_quizzes';

// Detailed content sections from the new HTML pages
const detailedContentSections: SyllabusItem = {
  id: 'aos1-detailed-content',
  title: '📚 Detailed Study Materials',
  title_zh: '📚 详细学习资料',
  path: 'https://www.schoolclass.net/aos/aos01-baroque-music',
  content: 'In-depth content covering all aspects of Baroque music.',
  content_zh: '深入涵盖巴洛克音乐各方面的内容。',
  children: [
    {
      id: 'aos1-core-elements',
      title: 'Core Musical Elements',
      title_zh: '核心音乐元素',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements',
      content: 'Dynamics, rhythm, metre, tempo, melody, harmony, tonality, texture, timbre, and structure.',
    },
    {
      id: 'aos1-sound-sources',
      title: 'Sound Sources & Techniques',
      title_zh: '声源与技巧',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques',
      content: 'Instrumentation, organology, vocal techniques, and composition methods.',
    },
    {
      id: 'aos1-cultural-context',
      title: 'Cultural & Historical Context',
      title_zh: '文化与历史背景',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context',
      content: 'Historical background, key composers, patronage, and performance practice.',
    },
    {
      id: 'aos1-language-theory',
      title: 'Language, Literacy & Theory',
      title_zh: '语言、读写与理论',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory',
      content: 'Terminology, notation systems, and analytical concepts.',
    },
    {
      id: 'aos1-technology',
      title: 'Technology & Innovation',
      title_zh: '技术与创新',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-05-technology-and-innovation',
      content: 'Music technology, recording, and distribution in the Baroque context.',
    },
    {
      id: 'aos1-analytical',
      title: 'Analytical Domains',
      title_zh: '分析领域',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-06-analytical-domains',
      content: 'Genre, style, aesthetics, audience reception, and geographic influence.',
    },
  ]
};

const rapidFirePage: SyllabusItem = {
  id: 'aos1-rapid-fire',
  title: '⚡ Rapid Fire Knowledge Check',
  title_zh: '⚡ 快速知识检查',
  path: '/aos/aos01-baroque-music/rapid-fire',
  content: 'Test your knowledge with these quick-fire questions!',
  content_zh: '通过这些快速提问测试你的知识！',
  quiz: baroqueRapidFireQuiz,
  isTerm: false
};

const textureQuizPage: SyllabusItem = {
  id: 'aos1-texture-quiz',
  title: '🧐 Texture & Continuo Quiz',
  path: '/aos/aos01-baroque-music/texture-quiz',
  content: 'Identify Baroque textures and continuo instruments.',
  quiz: baroqueTextureQuiz,
  isTerm: false
};

const dynamicsQuizPage: SyllabusItem = {
  id: 'aos1-dynamics-quiz',
  title: '🔈 Terraced Dynamics Quiz',
  path: '/aos/aos01-baroque-music/dynamics-quiz',
  content: 'Understand terraced dynamics and echo effects.',
  quiz: baroqueDynamicsQuiz,
  isTerm: false
};

const vivaldiRitornelloPage: SyllabusItem = {
  id: 'aos1-vivaldi-ritornello',
  title: '🎻 Vivaldi: Ritornello Form',
  path: '/aos/aos01-baroque-music/vivaldi-ritornello',
  content: 'Detailed analysis of Vivaldi\'s Ritornello form.',
  quiz: vivaldiRitornelloQuiz,
  isTerm: false
};

const vivaldiStormPage: SyllabusItem = {
  id: 'aos1-vivaldi-storm',
  title: '🌩️ Vivaldi: The Storm',
  path: '/aos/aos01-baroque-music/vivaldi-storm',
  content: 'Analyze the "Storm" episode and tremolo technique.',
  quiz: vivaldiStormQuiz,
  isTerm: false
};

const vivaldiDogPage: SyllabusItem = {
  id: 'aos1-vivaldi-dog',
  title: '🐕 Vivaldi: The Barking Dog',
  path: '/aos/aos01-baroque-music/vivaldi-dog',
  content: 'Programmatic music analysis: The lurking dog.',
  quiz: vivaldiDogQuiz,
  isTerm: false
};

const handelOverturePage: SyllabusItem = {
  id: 'aos1-handel-overture',
  title: '👑 Handel: French Overture',
  path: '/aos/aos01-baroque-music/handel-overture',
  content: 'Study the characteristics of the French Overture.',
  quiz: handelOvertureQuiz,
  isTerm: false
};

const handelFuguePage: SyllabusItem = {
  id: 'aos1-handel-fugue',
  title: '🎼 Handel: Fugal Texture',
  path: '/aos/aos01-baroque-music/handel-fugue',
  content: 'Analyze fugal texture and counterpoint.',
  quiz: handelFugueQuiz,
  isTerm: false
};

const corelliPage: SyllabusItem = {
  id: 'aos1-corelli',
  title: '🎄 Corelli: Pastorale',
  path: '/aos/aos01-baroque-music/corelli',
  content: 'Explore the Pastorale genre and Christmas Concerto.',
  quiz: corelliQuiz,
  isTerm: false
};

const bachAirPage: SyllabusItem = {
  id: 'aos1-bach-air',
  title: '🕯️ Bach: Air on the G String',
  path: '/aos/aos01-baroque-music/bach-air',
  content: 'Walking bass and suspensions in Bach\'s Air.',
  quiz: bachAirQuiz,
  isTerm: false
};

const telemannPage: SyllabusItem = {
  id: 'aos1-telemann',
  title: '👥 Telemann: Trio Sonata',
  path: '/aos/aos01-baroque-music/telemann',
  content: 'Understand the Trio Sonata texture and instrumentation.',
  quiz: telemannQuiz,
  isTerm: false
};

const ornamentsPage: SyllabusItem = {
  id: 'aos1-ornaments',
  title: '✨ Baroque Ornaments',
  path: '/aos/aos01-baroque-music/ornaments',
  content: 'Identify trills, mordents, and appoggiaturas.',
  quiz: ornamentsQuiz,
  isTerm: false
};

const harmonyQuizPage: SyllabusItem = {
  id: 'aos1-harmony-quiz',
  title: '⭕ Circle of Fifths Quiz',
  path: '/aos/aos01-baroque-music/harmony-quiz',
  content: 'Test your knowledge on sequences and harmony.',
  quiz: harmonyQuiz,
  isTerm: false
};

const specimenPage: SyllabusItem = {
  id: 'aos1-specimen-allegro',
  title: '📝 Specimen: Baroque Allegro',
  path: '/aos/aos01-baroque-music/specimen-allegro',
  content: 'Analyze a specimen Baroque Allegro piece.',
  quiz: specimenAllegroQuiz,
  isTerm: false
};

// Assessment Quizzes Section - 19 comprehensive quizzes with ABC notation
const assessmentQuizzesSection: SyllabusItem = {
  id: 'aos1-assessment-quizzes',
  title: '📋 Assessment Quizzes',
  title_zh: '📋 评估测验',
  path: '/aos/aos01-baroque-music/assessment-quizzes',
  content: '19 comprehensive assessment quizzes with score analysis and audio playback.',
  content_zh: '19个综合评估测验，含乐谱分析和音频播放.',
  children: [
    { id: 'aos1-assess-1', title: '📝 Quiz 1: Concerto Grosso in D Major', path: '/aos/aos01-baroque-music/assessment/quiz-1', content: '20 questions on Concerto Grosso structure and analysis.', quiz: generatedQuiz1, isTerm: false },
    { id: 'aos1-assess-2', title: '📝 Quiz 2: Baroque Concerto Skeleton', path: '/aos/aos01-baroque-music/assessment/quiz-2', content: '20 questions on skeleton score analysis.', quiz: generatedQuiz2, isTerm: false },
    { id: 'aos1-assess-3', title: '📝 Quiz 3: Baroque Concerto Analysis', path: '/aos/aos01-baroque-music/assessment/quiz-3', content: '20 questions on concerto form and texture.', quiz: generatedQuiz3, isTerm: false },
    { id: 'aos1-assess-4', title: '📝 Quiz 4: Baroque Ritornello', path: '/aos/aos01-baroque-music/assessment/quiz-4', content: '20 questions on ritornello form.', quiz: generatedQuiz4, isTerm: false },
    { id: 'aos1-assess-5', title: '📝 Quiz 5: Score Analysis I', path: '/aos/aos01-baroque-music/assessment/quiz-5', content: '19 questions on score reading.', quiz: generatedQuiz5, isTerm: false },
    { id: 'aos1-assess-6', title: '📝 Quiz 6: Score Analysis II', path: '/aos/aos01-baroque-music/assessment/quiz-6', content: '18 questions on Baroque analysis.', quiz: generatedQuiz6, isTerm: false },
    { id: 'aos1-assess-7', title: '📝 Quiz 7: Baroque Features', path: '/aos/aos01-baroque-music/assessment/quiz-7', content: '20 questions on key features.', quiz: generatedQuiz7, isTerm: false },
    { id: 'aos1-assess-8', title: '📝 Quiz 8: Musical Elements', path: '/aos/aos01-baroque-music/assessment/quiz-8', content: '19 questions on musical elements.', quiz: generatedQuiz8, isTerm: false },
    { id: 'aos1-assess-9', title: '📝 Quiz 9: Harmonic Analysis', path: '/aos/aos01-baroque-music/assessment/quiz-9', content: '20 questions on harmony and cadences.', quiz: generatedQuiz9, isTerm: false },
    { id: 'aos1-assess-10', title: '📝 Quiz 10: Texture & Form', path: '/aos/aos01-baroque-music/assessment/quiz-10', content: '20 questions on texture and structure.', quiz: generatedQuiz10, isTerm: false },
    { id: 'aos1-assess-11', title: '📝 Quiz 11: Instrumentation', path: '/aos/aos01-baroque-music/assessment/quiz-11', content: '18 questions on Baroque instruments.', quiz: generatedQuiz11, isTerm: false },
    { id: 'aos1-assess-12', title: '📝 Quiz 12: Baroque Ritornello II', path: '/aos/aos01-baroque-music/assessment/quiz-12', content: '19 questions on ritornello analysis.', quiz: generatedQuiz12, isTerm: false },
    { id: 'aos1-assess-13', title: '📝 Quiz 13: Concerto Grosso II', path: '/aos/aos01-baroque-music/assessment/quiz-13', content: '19 questions on concerto grosso.', quiz: generatedQuiz13, isTerm: false },
    { id: 'aos1-assess-14', title: '📝 Quiz 14: Baroque Listening', path: '/aos/aos01-baroque-music/assessment/quiz-14', content: '20 questions with audio stimulus.', quiz: generatedQuiz14, isTerm: false },
    { id: 'aos1-assess-15', title: '📝 Quiz 15: Specimen Allegro', path: '/aos/aos01-baroque-music/assessment/quiz-15', content: '20 questions on specimen analysis.', quiz: generatedQuiz15, isTerm: false },
    { id: 'aos1-assess-16', title: '📝 Quiz 16: Concerto in G Minor', path: '/aos/aos01-baroque-music/assessment/quiz-16', content: '20 questions on G minor concerto.', quiz: generatedQuiz16, isTerm: false },
    { id: 'aos1-assess-17', title: '📝 Quiz 17: Concerto Grosso B', path: '/aos/aos01-baroque-music/assessment/quiz-17', content: '20 questions on concerto grosso.', quiz: generatedQuiz17, isTerm: false },
    { id: 'aos1-assess-18', title: '📝 Quiz 18: Fugal Style', path: '/aos/aos01-baroque-music/assessment/quiz-18', content: '20 questions on fugal texture.', quiz: generatedQuiz18, isTerm: false },
    { id: 'aos1-assess-19', title: '📝 Quiz 19: Baroque Gigue', path: '/aos/aos01-baroque-music/assessment/quiz-19', content: '20 questions on compound time.', quiz: generatedQuiz19, isTerm: false },
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
    assessmentQuizzesSection,
    rapidFirePage,
    textureQuizPage,
    dynamicsQuizPage,
    vivaldiRitornelloPage,
    vivaldiStormPage,
    vivaldiDogPage,
    handelOverturePage,
    handelFuguePage,
    corelliPage,
    bachAirPage,
    telemannPage,
    ornamentsPage,
    harmonyQuizPage,
    specimenPage,
    detailedContentSections,
  ]
};
