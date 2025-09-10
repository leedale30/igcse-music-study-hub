
import { SyllabusItem } from '../../types';

export const courseworkComposing: SyllabusItem = {
  id: 'coursework-composing',
  title: 'Component 3: Composing',
  title_zh: '第三部分：作曲',
  path: '/coursework/composing',
  content: 'How to create your own original music.',
  content_zh: '如何创作您自己的原创音乐。',
  longDescription: `For Component 3, you need to create two original pieces of music (compositions). These pieces must be your own ideas. They should be different from each other in some way, perhaps using different instruments or styles. You cannot just arrange music someone else wrote.`,
  longDescription_zh: `在第三部分中，您需要创作两首原创音乐作品（作曲）。这些作品必须是您自己的想法。它们应该在某些方面有所不同，例如使用不同的乐器或风格。您不能仅仅改编别人写的音乐。`,
  children: [
      { 
        id: 'composing-comp1', 
        title: 'Composition 1 (Staff Notation)', 
        title_zh: '作曲 1 (五线谱记谱)',
        path: '/coursework/composing/composition-1', 
        content: 'Your first composition, written in standard music notation.',
        content_zh: '您的第一首作曲，用标准音乐记谱法写成。',
        longDescription: `Your first composition must be written down using staff notation (the lines and notes you see in printed music). You also need to provide a recording of this piece, which can be live or made with music technology.`,
        longDescription_zh: `您的第一首作曲必须使用五线谱记谱法（您在印刷乐谱中看到的谱线和音符）写下来。您还需要提供这首作品的录音，可以是现场录音或使用音乐技术制作的。`
      },
      { 
        id: 'composing-comp2', 
        title: 'Composition 2 (Candidate-defined Brief)', 
        title_zh: '作曲 2 (考生自定义主题)',
        path: '/coursework/composing/composition-2', 
        content: 'Your second composition, based on an idea or purpose you choose.',
        content_zh: '您的第二首作曲，基于您选择的一个想法或目的。',
        longDescription: `For your second composition, you need to choose a "brief". A brief is an idea or purpose for your music, like writing a song, music for a dance, or music for a film scene. This brief should relate to Area of Study 4, 5, 6, or 7. You need to submit a recording and either a score (in any suitable notation for the style) or a written commentary explaining your music.`,
        longDescription_zh: `对于您的第二首作曲，您需要选择一个“主题”。主题是您音乐的一个想法或目的，比如写一首歌、为舞蹈配乐或为电影场景配乐。这个主题应与学习领域4、5、6或7相关。您需要提交一份录音，以及一份乐谱（以适合该风格的任何记谱法）或一份解释您音乐的书面评论。`
      },
      { 
        id: 'composing-commentary', 
        title: 'Written Commentaries', 
        title_zh: '书面评论',
        path: '/coursework/composing/commentaries', 
        content: 'How to write about your Composition 2 if you don\'t submit a score.',
        content_zh: '如果您不提交乐谱，如何为您的第二首作曲撰写评论。',
        longDescription: `If you choose to submit a written commentary for Composition 2 (instead of a full score), this page explains what to include. Your commentary should describe your musical ideas, how your piece is structured, the instruments or sounds you used, and how your music meets your chosen brief. You will use a template for this.`,
        longDescription_zh: `如果您选择为第二首作曲提交书面评论（而不是完整的乐谱），此页面将解释应包含哪些内容。您的评论应描述您的音乐理念、作品的结构、使用的乐器或声音，以及您的音乐如何满足您选择的主题。您将为此使用一个模板。`
      },
      { 
        id: 'composing-marking', 
        title: 'Marking Criteria', 
        title_zh: '评分标准',
        path: '/coursework/composing/marking-criteria', 
        content: 'How your compositions will be marked.',
        content_zh: '您的作曲将如何被评分。',
        longDescription: `This page explains how your compositions are assessed. You will get marks for: your musical ideas (melody, rhythm, harmony); how well your music is structured; your use of instruments, voices, or electronic sounds; your composing techniques; and how clearly you present your score or commentary.`,
        longDescription_zh: `此页面解释了您的作曲是如何被评估的。您将在以下方面获得分数：您的音乐理念（旋律、节奏、和声）；您的音乐结构是否良好；您对乐器、人声或电子声音的运用；您的作曲技巧；以及您呈现乐谱或评论的清晰度。`
      },
  ]
};
