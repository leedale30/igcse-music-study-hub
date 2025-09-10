
import { SyllabusItem } from '../../types';

export const romanticMusicAoS: SyllabusItem = {
  id: 'aos3-romantic-music',
  title: 'Area of Study 3: Romantic Music',
  title_zh: '学习领域三：浪漫主义音乐',
  path: '/areas-of-study/aos3-romantic-music',
  content: 'Emotional and expressive music from about 1810 to 1900.',
  content_zh: '大约从1810年到1900年的充满情感和表现力的音乐。',
  longDescription: `The Romantic period (about 1810-1900) was full of big emotions and expression. Music often told stories or described feelings. Orchestras became larger and new instruments were added. We will study Smetana's "Vltava" as a "focus work" and learn about programme music and nationalism.`,
  longDescription_zh: `浪漫主义时期（约1810-1900年）充满了强烈的情感和表现力。音乐常常讲述故事或描绘感情。管弦乐队规模变得更大，并增加了新的乐器。我们将学习斯美塔那的《沃尔塔瓦河》作为“重点作品”，并了解标题音乐和民族主义。`,
  children: [
    {
      id: 'aos3-introduction', 
      title: 'Introduction', 
      title_zh: '简介',
      path: '/areas-of-study/aos3-romantic-music/introduction',
      content: 'What is Romantic Music?',
      content_zh: '什么是浪漫主义音乐？',
      longDescription: `This page introduces Romantic music. You will learn about its love for storytelling, expressing strong feelings, and how composers like Smetana, Chopin, and Mendelssohn showed these ideas in their music.`,
      longDescription_zh: `此页面介绍了浪漫主义音乐。您将了解到它对讲故事的热爱、强烈情感的表达，以及斯美塔那、肖邦和门德尔松等作曲家如何在他们的音乐中展现这些思想。`
    },
    {
      id: 'aos3-smetana', 
      title: 'Focus Work: Smetana: Vltava from Ma Vlast', 
      title_zh: '重点作品：斯美塔那：《我的祖国》之《沃尔塔瓦河》',
      path: '/areas-of-study/aos3-romantic-music/smetana-vltava',
      content: 'Learn about Bedřich Smetana and "Vltava".',
      content_zh: '了解贝德日赫·斯美塔那和《沃尔塔瓦河》。',
      longDescription: `Bedřich Smetana was a Czech composer. "Vltava" (also known as "The Moldau") is a famous piece of programme music from his set of pieces called "Ma Vlast" (My Homeland). It describes the journey of a river.`,
      longDescription_zh: `贝德日赫·斯美塔那是捷克作曲家。《沃尔塔瓦河》（又名《莫尔道河》）是他名为《我的祖国》的组曲中一首著名的标题音乐作品。它描绘了一条河流的旅程。`,
      children: [
        {
          id: 'aos3-smetana-vltava-analysis', 
          title: 'Analysis of Vltava', 
          title_zh: '《沃尔塔瓦河》分析',
          path: '/areas-of-study/aos3-romantic-music/smetana-vltava/analysis',
          content: 'Looking closely at "Vltava".',
          content_zh: '仔细研究《沃尔塔瓦河》。',
          longDescription: `We will study how Smetana uses the orchestra to paint a picture of the Vltava river, from its start as small streams to a mighty river flowing through Prague.`,
          longDescription_zh: `我们将研究斯美塔那如何运用管弦乐队描绘沃尔塔瓦河的景象，从它起始时的小溪流，到流经布拉格的雄伟河流。`
        }
      ]
    },
    {
      id: 'programme-music', 
      title: 'Programme Music', 
      title_zh: '标题音乐',
      path: '/term/programme-music', 
      isTerm: true,
      content: 'Music that tells a story.',
      content_zh: '讲述故事的音乐。',
      longDescription: `Programme Music is instrumental music that tells a story, paints a picture, or describes an idea or character. Composers often gave a title or a written note to help listeners understand the story. "Vltava" is a good example.`,
      longDescription_zh: `标题音乐是讲述故事、描绘画面或描述思想或角色的器乐音乐。作曲家通常会给出一个标题或书面说明，以帮助听众理解故事。《沃尔塔瓦河》就是一个很好的例子。`
    },
    {
      id: 'nationalism-in-music', 
      title: 'Nationalism in Music', 
      title_zh: '音乐中的民族主义',
      path: '/term/nationalism-in-music', 
      isTerm: true,
      content: 'Music about a composer\'s country.',
      content_zh: '关于作曲家祖国的音乐。',
      longDescription: `Nationalism in music is when composers use folk songs, dances, legends, or history from their own country. This makes the music sound special to that nation. Smetana showed nationalism in "Ma Vlast".`,
      longDescription_zh: `音乐中的民族主义是指作曲家运用本国的民歌、舞蹈、传说或历史。这使得音乐听起来具有该民族的特色。斯美塔那在《我的祖国》中展现了民族主义。`
    },
    {
      id: 'romantic-orchestra', 
      title: 'The Romantic Orchestra', 
      title_zh: '浪漫主义管弦乐队',
      path: '/term/romantic-orchestra', 
      isTerm: true,
      content: 'How the orchestra grew bigger.',
      content_zh: '管弦乐队如何变得更大。',
      longDescription: `In the Romantic period, the orchestra became much larger than in the Classical period. More instruments were added, like the piccolo, trombone, and tuba, giving composers more colours and power in their music.`,
      longDescription_zh: `在浪漫主义时期，管弦乐队的规模比古典时期大得多。增加了更多的乐器，如短笛、长号和大号，为作曲家的音乐提供了更多的色彩和力量。`
    },
    {
      id: 'aos3-wider-listening', 
      title: 'Wider Listening', 
      title_zh: '扩展聆听',
      path: '/areas-of-study/aos3-romantic-music/wider-listening',
      content: 'More Romantic music to explore.',
      content_zh: '更多可供探索的浪漫主义音乐。',
      longDescription: `Listen to other Romantic music to understand the style. This page suggests works by Mendelssohn, Emilie Mayer, Borodin, Clara Schumann, and Chopin.`,
      longDescription_zh: `聆听其他浪漫主义音乐以理解其风格。此页面推荐了门德尔松、艾米莉·迈尔、鲍罗丁、克拉拉·舒曼和肖邦的作品。`
    },
  ]
};
