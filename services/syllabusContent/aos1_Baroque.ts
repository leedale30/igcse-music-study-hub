
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
  generatedQuiz19,
  generatedQuiz20,
  generatedQuiz21,
  generatedQuiz22
} from '../quizzes/aos1/generated_quizzes';

// Detailed content sections from the new HTML pages - full hierarchy
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
      children: [
        { id: 'aos1-dynamics', title: 'Dynamics', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-01-dynamics/aos01-01-01-dynamics.html', content: 'Dynamic markings and terraced dynamics in Baroque music.' },
        { id: 'aos1-rhythm', title: 'Rhythm', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-02-rhythm/aos01-01-02-rhythm.html', content: 'Rhythmic patterns and motor rhythm.' },
        { id: 'aos1-metre', title: 'Metre', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-03-metre/aos01-01-03-metre.html', content: 'Time signatures and metric organization.' },
        { id: 'aos1-tempo', title: 'Tempo', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-04-tempo/aos01-01-04-tempo.html', content: 'Italian tempo markings and Baroque conventions.' },
        { id: 'aos1-melody', title: 'Melody', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-05-melody/aos01-01-05-melody.html', content: 'Melodic characteristics and sequences.' },
        { id: 'aos1-harmony', title: 'Harmony', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-06-harmony/aos01-01-06-harmony.html', content: 'Functional harmony and diatonic relationships.' },
        { id: 'aos1-tonality', title: 'Tonality', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-07-tonality/aos01-01-07-tonality.html', content: 'Major/minor keys and modulation.' },
        { id: 'aos1-texture', title: 'Texture', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-08-texture/aos01-01-08-texture.html', content: 'Polyphonic, homophonic, and imitative textures.' },
        { id: 'aos1-timbre', title: 'Timbre', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-09-timbre/aos01-01-09-timbre.html', content: 'Instrumental timbres and basso continuo.' },
        { id: 'aos1-structure', title: 'Structure/Form', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements/aos01-01-10-structure-form/aos01-01-10-structure-form.html', content: 'Binary, ternary, ritornello, and fugal forms.' },
      ]
    },
    {
      id: 'aos1-sound-sources',
      title: 'Sound Sources & Techniques',
      title_zh: '声源与技巧',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques',
      content: 'Instrumentation, organology, vocal techniques, and composition methods.',
      children: [
        { id: 'aos1-instrumentation', title: 'Instrumentation', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques/aos01-02-01-instrumentation/aos01-02-01-instrumentation.html', content: 'Baroque orchestra and ensembles.' },
        { id: 'aos1-organology', title: 'Organology', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques/aos01-02-02-organology/aos01-02-02-organology.html', content: 'Period instruments and their construction.' },
        { id: 'aos1-vocal-techniques', title: 'Vocal Techniques', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques/aos01-02-03-vocal-techniques/aos01-02-03-vocal-techniques.html', content: 'Baroque vocal styles and ornamentation.' },
        { id: 'aos1-extended-techniques', title: 'Extended Techniques', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques/aos01-02-04-extended-techniques/aos01-02-04-extended-techniques.html', content: 'Tremolo, pizzicato, and other techniques.' },
        { id: 'aos1-improvisation', title: 'Improvisation', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques/aos01-02-05-improvisation/aos01-02-05-improvisation.html', content: 'Figured bass realization and ornamentation.' },
        { id: 'aos1-composition', title: 'Composition Techniques', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques/aos01-02-06-composition-techniques/aos01-02-06-composition-techniques.html', content: 'Counterpoint, fugue, and canon.' },
      ]
    },
    {
      id: 'aos1-cultural-context',
      title: 'Cultural & Historical Context',
      title_zh: '文化与历史背景',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context',
      content: 'Historical background, key composers, patronage, and performance practice.',
      children: [
        { id: 'aos1-cultural-function', title: 'Cultural Function', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context/aos01-03-01-cultural-function/aos01-03-01-cultural-function.html', content: 'Role of music in society.' },
        { id: 'aos1-historical', title: 'Historical Background', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context/aos01-03-02-historical-background/aos01-03-02-historical-background.html', content: 'The Baroque era 1600-1750.' },
        { id: 'aos1-dance', title: 'Movement & Dance', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context/aos01-03-03-movement-and-dance/aos01-03-03-movement-and-dance.html', content: 'Dance forms and suites.' },
        { id: 'aos1-patronage', title: 'Economics & Patronage', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context/aos01-03-04-economics-and-patronage/aos01-03-04-economics-and-patronage.html', content: 'Court and church patronage.' },
        { id: 'aos1-key-works', title: 'Key Works & Pieces', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context/aos01-03-05-key-works-pieces/aos01-03-05-key-works-pieces.html', content: 'Important compositions to study.' },
        { id: 'aos1-composers', title: 'Key Composers', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context/aos01-03-06-key-composers-artists/aos01-03-06-key-composers-artists.html', content: 'Bach, Handel, Vivaldi, and others.' },
        { id: 'aos1-performance', title: 'Performance Practice', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context/aos01-03-07-performance-practice/aos01-03-07-performance-practice.html', content: 'Historical performance and interpretation.' },
      ]
    },
    {
      id: 'aos1-language-theory',
      title: 'Language, Literacy & Theory',
      title_zh: '语言、读写与理论',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory',
      content: 'Terminology, notation systems, and analytical concepts.',
      children: [
        { id: 'aos1-terminology', title: 'Specific Terminology', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory/aos01-04-01-specific-terminology/aos01-04-01-specific-terminology.html', content: 'Baroque musical vocabulary.' },
        { id: 'aos1-lyrics', title: 'Lyrics & Text Analysis', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory/aos01-04-02-lyrics-and-text-analysis/aos01-04-02-lyrics-and-text-analysis.html', content: 'Word painting and text setting.' },
        { id: 'aos1-notation', title: 'Notation System', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory/aos01-04-03-notation-system/aos01-04-03-notation-system.html', content: 'Figured bass and score notation.' },
        { id: 'aos1-oral-aural', title: 'Oral/Aural Tradition', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory/aos01-04-04-oral-aural-tradition/aos01-04-04-oral-aural-tradition.html', content: 'Listening and aural traditions.' },
      ]
    },
    {
      id: 'aos1-technology',
      title: 'Technology & Innovation',
      title_zh: '技术与创新',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-05-technology-and-innovation',
      content: 'Music technology, recording, and distribution in the Baroque context.',
      children: [
        { id: 'aos1-music-tech', title: 'Music Technology', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-05-technology-and-innovation/aos01-05-01-music-technology/aos01-05-01-music-technology.html', content: 'Instrument making and development.' },
        { id: 'aos1-recording', title: 'Recording & Production', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-05-technology-and-innovation/aos01-05-02-recording-and-production-techniques/aos01-05-02-recording-and-production-techniques.html', content: 'Modern recordings of Baroque music.' },
        { id: 'aos1-distribution', title: 'Distribution & Media', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-05-technology-and-innovation/aos01-05-03-distribution-and-media/aos01-05-03-distribution-and-media.html', content: 'Music printing and dissemination.' },
        { id: 'aos1-hybridization', title: 'Hybridization', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-05-technology-and-innovation/aos01-05-04-hybridization/aos01-05-04-hybridization.html', content: 'Cross-genre influences.' },
      ]
    },
    {
      id: 'aos1-analytical',
      title: 'Analytical Domains',
      title_zh: '分析领域',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-06-analytical-domains',
      content: 'Genre, style, aesthetics, audience reception, and geographic influence.',
      children: [
        { id: 'aos1-genre-style', title: 'Genre & Style', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-06-analytical-domains/aos01-06-01-genre-and-style/aos01-06-01-genre-and-style.html', content: 'Musical genres of the Baroque.' },
        { id: 'aos1-aesthetic', title: 'Aesthetic Values', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-06-analytical-domains/aos01-06-02-aesthetic-values/aos01-06-02-aesthetic-values.html', content: 'Doctrine of affections and beauty.' },
        { id: 'aos1-audience', title: 'Audience Reception', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-06-analytical-domains/aos01-06-03-audience-reception/aos01-06-03-audience-reception.html', content: 'Historical and modern reception.' },
        { id: 'aos1-political', title: 'Political/Social Commentary', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-06-analytical-domains/aos01-06-04-political-social-commentary/aos01-06-04-political-social-commentary.html', content: 'Music and power.' },
        { id: 'aos1-geographic', title: 'Geographic Influence', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-06-analytical-domains/aos01-06-05-geographic-influence/aos01-06-05-geographic-influence.html', content: 'Italian, French, German, English styles.' },
      ]
    },
    {
      id: 'aos1-glossary',
      title: 'AOS1 Glossary',
      title_zh: 'AOS1 术语表',
      path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-07-glossary/aos01-07-glossary.html',
      content: 'Key terminology for Baroque music study.',
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

// AOS1 Recap Quizzes Section - grouped topic quizzes with ABC notation
const recapQuizzesSection: SyllabusItem = {
  id: 'aos1-recap-quizzes',
  title: '🎯 AOS1 Recap Quizzes',
  title_zh: '🎯 AOS1复习测验',
  path: '/aos/aos01-baroque-music/recap-quizzes',
  content: 'Topic-specific quizzes with score excerpts to reinforce your Baroque music knowledge.',
  content_zh: '包含乐谱片段的专题测验，巩固巴洛克音乐知识。',
  children: [
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
  ]
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
    { id: 'aos1-assess-20', title: '📝 Quiz 20: Baroque Suite', path: '/aos/aos01-baroque-music/assessment/quiz-20', content: '20 questions on suite movements.', quiz: generatedQuiz20, isTerm: false },
    { id: 'aos1-assess-21', title: '📝 Quiz 21: Baroque Specimen', path: '/aos/aos01-baroque-music/assessment/quiz-21', content: '20 questions on specimen paper.', quiz: generatedQuiz21, isTerm: false },
    { id: 'aos1-assess-22', title: '📝 Quiz 22: Baroque Allegro II', path: '/aos/aos01-baroque-music/assessment/quiz-22', content: '20 questions on allegro analysis.', quiz: generatedQuiz22, isTerm: false },
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
    rapidFirePage,
    recapQuizzesSection,
    assessmentQuizzesSection,
    detailedContentSections,
  ]
};
