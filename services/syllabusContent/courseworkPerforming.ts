
import { SyllabusItem } from '../../types';

export const courseworkPerforming: SyllabusItem = {
  id: 'coursework-performing',
  title: 'Component 2: Performing',
  title_zh: '第二部分：演奏',
  path: '/coursework/performing',
  content: 'How to prepare for your music performances.',
  content_zh: '如何准备您的音乐演奏。',
  longDescription: `For Component 2, you need to record two performances. One will be a solo performance (you playing or singing by yourself, maybe with accompaniment). The other will be performing with other musicians (an ensemble). Each part should be at least 2 minutes long. Together, they should not be longer than 10 minutes.`,
  longDescription_zh: `在第二部分中，您需要录制两次演奏。一次是独奏（您自己演奏或演唱，可以有伴奏）。另一次是与其他音乐家合奏。每个部分应至少长2分钟。两者加起来不应超过10分钟。`,
  children: [
      { 
        id: 'performing-part1', 
        title: 'Part 1 – Solo Performing', 
        title_zh: '第一部分 – 独奏',
        path: '/coursework/performing/solo', 
        content: 'Performing music by yourself.',
        content_zh: '独自演奏音乐。',
        longDescription: `For this part, you sing or play an instrument on your own. You can have an accompaniment (like a piano or a backing track) or perform without one if the music is written that way. If your piece is very short, you can perform two short solo pieces.`,
        longDescription_zh: `在这部分，您需要自己唱歌或演奏一种乐器。您可以有伴奏（如钢琴或背景音轨），或者如果乐谱是这样写的，也可以无伴奏演奏。如果您的曲目很短，您可以演奏两首简短的独奏曲。`
      },
      { 
        id: 'performing-part2', 
        title: 'Part 2 – Performing with Others', 
        title_zh: '第二部分 – 合奏',
        path: '/coursework/performing/ensemble', 
        content: 'Performing music in a group.',
        content_zh: '在团体中演奏音乐。',
        longDescription: `Here, you need to sing or play your instrument with at least one other live musician. This could be a duet (two performers) or a small group. The music you choose should allow you to show how well you can coordinate and play or sing together with others.`,
        longDescription_zh: `在这里，您需要与至少一位其他现场音乐家一起唱歌或演奏您的乐器。这可以是二重奏（两位演奏者）或一个小团体。您选择的音乐应能让您展示自己与他人协调合作以及共同演奏或演唱的能力。`
      },
      { 
        id: 'performing-choice', 
        title: 'Choice of Music', 
        title_zh: '曲目选择',
        path: '/coursework/performing/choice-of-music', 
        content: 'Tips for choosing your performance pieces.',
        content_zh: '选择演奏曲目的技巧。',
        longDescription: `It is important to choose music that is right for your skill level. Pick pieces that you enjoy and can play or sing well. This will help you show your musical abilities. Choosing music that is too hard can make it difficult to perform accurately and expressively.`,
        longDescription_zh: `选择适合您技能水平的音乐非常重要。挑选您喜欢并且能很好地演奏或演唱的曲目。这将帮助您展示您的音乐能力。选择太难的音乐会使准确、富有表现力地演奏变得困难。`
      },
      { 
        id: 'performing-marking', 
        title: 'Marking Criteria', 
        title_zh: '评分标准',
        path: '/coursework/performing/marking-criteria', 
        content: 'How your performances will be marked.',
        content_zh: '您的演奏将如何被评分。',
        longDescription: `This page explains how your performances are assessed. You will get marks for things like: how accurately and fluently (smoothly) you perform; your control of tempo and rhythm; your musical expression and style; your technical control of your instrument or voice; and how well the performance sounds as a whole.`,
        longDescription_zh: `此页面解释了您的演奏是如何被评估的。您将在以下方面获得分数：演奏的准确性和流畅度；对速度和节奏的控制；音乐表现和风格；对乐器或声音的技术控制；以及演奏的整体效果。`
      },
  ]
};
