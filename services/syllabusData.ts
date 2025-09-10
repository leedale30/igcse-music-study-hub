
import { SyllabusItem } from '../types';

// Import individual syllabus sections
import { homePage, termPlaceholderPage } from './syllabusContent/generalSections';
import { baroqueMusicAoS } from './syllabusContent/aos1_Baroque';
import { classicalMusicAoS } from './syllabusContent/aos2_Classical';
import { romanticMusicAoS } from './syllabusContent/aos3_Romantic';
import { musicAndWordsAoS } from './syllabusContent/aos4_MusicAndWords';
import { musicForDanceAoS } from './syllabusContent/aos5_MusicForDance';
import { smallEnsembleAoS } from './syllabusContent/aos6_SmallEnsemble';
import { stageAndScreenAoS } from './syllabusContent/aos7_StageAndScreen';
import { courseworkPerforming } from './syllabusContent/courseworkPerforming';
import { courseworkComposing } from './syllabusContent/courseworkComposing';
import { musicalGlossaryPage } from './syllabusContent/musicalGlossary';

export const syllabusStructure: SyllabusItem[] = [
  homePage,
  {
    id: 'areas-of-study',
    title: 'Areas of Study (Paper 1)',
    title_zh: '学习领域 (试卷一)',
    path: '/areas-of-study',
    content: 'What you will learn for the Listening Paper (Paper 1).',
    content_zh: '您将在听力试卷（试卷一）中学到的内容。',
    longDescription: `Paper 1 is about listening to music. We will study seven "Areas of Study". This includes older Western music, music from around the world, and music from the 1900s to today. You will learn about important pieces of music called "focus works" and listen to many other examples.`,
    longDescription_zh: `试卷一是关于音乐听力的。我们将学习七个“学习领域”。这包括早期的西方音乐、世界各地的音乐，以及从20世纪至今的音乐。您将学习被称为“重点作品”的重要音乐作品，并聆听许多其他范例。`,
    children: [
      baroqueMusicAoS,
      classicalMusicAoS,
      romanticMusicAoS,
      musicAndWordsAoS,
      musicForDanceAoS,
      smallEnsembleAoS,
      stageAndScreenAoS,
    ]
  },
  {
    id: 'coursework',
    title: 'Coursework',
    title_zh: '课程作业',
    path: '/coursework',
    content: 'About your Performing and Composing work.',
    content_zh: '关于您的演奏和作曲作业。',
    longDescription: `The coursework has two main parts: Component 2 (Performing your instrument or voice) and Component 3 (Composing your own music). This section explains what you need to do for each, including how they are marked and how to submit your work.`,
    longDescription_zh: `课程作业有两个主要部分：第二部分（演奏您的乐器或演唱）和第三部分（创作您自己的音乐）。本节将解释每个部分需要做什么，包括评分标准和提交方式。`,
    children: [
      courseworkPerforming,
      courseworkComposing,
    ]
  },
  {
    id: 'tools',
    title: 'Music Tools',
    title_zh: '音乐工具',
    path: '/tools',
    content: 'Interactive music learning and practice tools.',
    content_zh: '交互式音乐学习和练习工具。',
    longDescription: `A collection of interactive music tools to help you practice, learn, and explore music theory. These tools use modern web audio technology to provide professional-quality experiences.`,
    longDescription_zh: `一系列交互式音乐工具，帮助您练习、学习和探索音乐理论。这些工具使用现代网络音频技术提供专业品质的体验。`,
    children: [
      {
        id: 'metronome',
        title: 'Metronome',
        title_zh: '节拍器',
        path: '/tools/metronome',
        content: 'Professional metronome with multiple time signatures and tap tempo.',
        content_zh: '具有多种拍号和敲击节拍功能的专业节拍器。',
        longDescription: `A professional-grade metronome with precise timing, multiple time signatures, tap tempo detection, and visual beat indicators. Perfect for music practice and developing rhythmic skills.`,
        longDescription_zh: `具有精确计时、多种拍号、敲击节拍检测和视觉节拍指示器的专业级节拍器。非常适合音乐练习和培养节奏技能。`
      },
      {
        id: 'virtual-piano',
        title: 'Virtual Piano',
        title_zh: '虚拟钢琴',
        path: '/tools/virtual-piano',
        content: 'Interactive piano keyboard with multiple instruments and keyboard support.',
        content_zh: '具有多种乐器和键盘支持的交互式钢琴键盘。',
        longDescription: `An interactive virtual piano with multiple instrument sounds, keyboard shortcuts, sustain pedal simulation, and polyphonic playback. Great for learning piano basics and music theory.`,
        longDescription_zh: `具有多种乐器音色、键盘快捷键、延音踏板模拟和多音播放的交互式虚拟钢琴。非常适合学习钢琴基础和音乐理论。`
      },
      {
        id: 'ear-training',
        title: 'Ear Training',
        title_zh: '听力训练',
        path: '/tools/ear-training',
        content: 'Develop your musical hearing with interval recognition exercises.',
        content_zh: '通过音程识别练习培养您的音乐听力。',
        longDescription: `Interactive ear training exercises focusing on interval recognition. Features progressive difficulty levels, harmonic and melodic intervals, score tracking, and detailed feedback to improve your musical ear.`,
        longDescription_zh: `专注于音程识别的交互式听力训练练习。具有渐进式难度级别、和声和旋律音程、分数跟踪和详细反馈，以提高您的音乐听力。`
      },
      {
         id: 'circle-of-fifths',
         title: 'Circle of Fifths',
         title_zh: '五度圈',
         path: '/tools/circle-of-fifths',
         content: 'Interactive visualization of key relationships and chord progressions.',
         content_zh: '调性关系和和弦进行的交互式可视化。',
         longDescription: `An interactive Circle of Fifths that helps you understand key signatures, chord relationships, and common progressions. Click on keys to explore their chords and hear how they sound together.`,
         longDescription_zh: `交互式五度圈，帮助您理解调号、和弦关系和常见进行。点击调性来探索它们的和弦并听听它们如何搭配。`
       },
       {
         id: 'bemol-ear-training',
         title: 'Functional Ear Training',
         title_zh: '功能性听力训练',
         path: '/tools/bemol-ear-training',
         content: 'Develop relative pitch through functional ear training inspired by Bemol.',
         content_zh: '通过受Bemol启发的功能性听力训练培养相对音高。',
         longDescription: `Learn to recognize scale degrees in tonal context using the functional ear training method. This approach, inspired by the open-source Bemol app, helps develop relative pitch by understanding how each note functions within a key rather than as isolated intervals.`,
         longDescription_zh: `使用功能性听力训练方法学会在调性语境中识别音阶度数。这种受开源Bemol应用启发的方法通过理解每个音符在调性中的功能而不是作为孤立音程来帮助培养相对音高。`
       },
       {
         id: 'sight-reading',
         title: 'Sight Reading Trainer',
         title_zh: '视谱训练器',
         path: '/tools/sight-reading',
         content: 'Practice reading musical notation with traditional staff-based note recognition.',
         content_zh: '通过传统的五线谱音符识别练习阅读乐谱。',
         longDescription: `Master the art of sight reading with this traditional staff-based note recognition trainer. Practice identifying notes on the treble clef with progressive difficulty levels, audio verification, and detailed progress tracking.`,
         longDescription_zh: `通过这个传统的五线谱音符识别训练器掌握视谱艺术。在高音谱号上练习识别音符，具有渐进式难度级别、音频验证和详细的进度跟踪。`
       }
    ]
  },
  musicalGlossaryPage,
  {
    id: 'links',
    title: 'Useful Links',
    title_zh: '有用链接',
    path: '/links',
    content: 'Curated collection of external websites and tools for music learning.',
    content_zh: '精选的音乐学习外部网站和工具集合。',
    longDescription: `Access a carefully curated collection of external websites and tools that complement your music education. These resources include music theory tools, practice aids, and educational websites to enhance your learning experience.`,
    longDescription_zh: `访问精心策划的外部网站和工具集合，这些资源补充您的音乐教育。这些资源包括音乐理论工具、练习辅助工具和教育网站，以增强您的学习体验。`
  },
  {
    id: 'test',
    title: 'Test',
    title_zh: '测试',
    path: '/test',
    content: 'A page for testing things out.',
    content_zh: '一个用于测试的页面。',
    longDescription: `This is the test page. Use this space to experiment with new components, layouts, or features.`,
    longDescription_zh: `这是测试页面。您可以在此空间中试验新组件、布局或功能。`
  },
  termPlaceholderPage 
];

// Helper function to find an item by path
export const findSyllabusItemByPath = (path: string, items: SyllabusItem[] = syllabusStructure): SyllabusItem | undefined => {
  for (const item of items) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      const found = findSyllabusItemByPath(path, item.children);
      if (found) {
        return found;
      }
    }
  }
  // Handle dynamic paths like /term/:termId
  if (path.startsWith('/term/')) {
      const termId = path.split('/').pop() || 'unknown-term';
      
      const findSpecificTerm = (currentItems: SyllabusItem[]): SyllabusItem | undefined => {
        for (const currentItem of currentItems) {
            if (currentItem.isTerm && currentItem.path === path) { 
                return currentItem;
            }
            if (currentItem.children) {
                const foundInChildren = findSpecificTerm(currentItem.children);
                if (foundInChildren) return foundInChildren;
            }
        }
        return undefined;
      };

      const specificTermData = findSpecificTerm(syllabusStructure);
      if (specificTermData) return specificTermData;

      // Fallback for terms not explicitly defined but linked via /term/term-name
      const formattedTermTitle = termId.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      return {
          id: termId,
          title: formattedTermTitle,
          title_zh: formattedTermTitle, // Fallback, could be improved with real translation if needed
          path: path,
          content: `Learn about ${formattedTermTitle}.`,
          content_zh: `学习关于 ${formattedTermTitle}。`,
          longDescription: `This page explains the musical term: ${formattedTermTitle}. Understanding this term will help you discuss music more effectively. Detailed explanation for ${formattedTermTitle} will appear here, covering its meaning, usage, and examples in music.`,
          longDescription_zh: `此页面解释音乐术语：${formattedTermTitle}。理解这个术语将帮助您更有效地讨论音乐。关于${formattedTermTitle}的详细解释将在此处显示，涵盖其含义、用法和音乐中的例子。`,
          isTerm: true
      };
  }
  return undefined;
};
