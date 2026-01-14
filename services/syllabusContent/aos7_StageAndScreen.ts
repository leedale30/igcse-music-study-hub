
import { SyllabusItem } from '../../types';
import { aos7DetailedContent } from './aosDetailedContent';

export const stageAndScreenAoS: SyllabusItem = {
  id: 'aos7-stage-and-screen',
  title: 'Area of Study 7: Music for Stage and Screen',
  title_zh: '学习领域七：舞台与银幕音乐',
  path: '/areas-of-study/aos7-stage-and-screen',
  content: 'Music for ballet, films, and video games.',
  content_zh: '为芭蕾、电影和视频游戏创作的音乐。',
  longDescription: `This area explores music that is written to go with something visual – like a ballet performance, a film, or a computer game. We will learn how composers use music to create moods, highlight actions, and help tell stories in these different types of media.`,
  longDescription_zh: `这个领域探讨为视觉作品创作的音乐——比如芭蕾舞表演、电影或电脑游戏。我们将学习作曲家如何在这些不同类型的媒体中运用音乐来营造情绪、突出动作并帮助讲述故事。`,
  children: [
    {
      id: 'aos7-ballet', title: 'Focus Area: Ballet Music', title_zh: '重点领域：芭蕾音乐', path: '/areas-of-study/stage-and-screen/ballet',
      content: 'Music written for ballet dance.',
      content_zh: '为芭蕾舞创作的音乐。',
      longDescription: `Ballet music is meticulously crafted to support choreography. This section explores the Romantic traditions of Tchaikovsky and the modernist shifts of Stravinsky, focusing on how orchestral color and rhythmic precision drive the narrative on stage.`,
      longDescription_zh: `芭蕾音乐是为支持编舞而精心创作的。本节探讨了柴可夫斯基的浪漫主义传统和斯特拉文斯基的现代主义转变，重点关注管弦乐色彩和节奏精度如何驱动舞台上的叙事。`
    },
    {
      id: 'aos7-film-music', title: 'Focus Area: Film Music', title_zh: '重点领域：电影音乐', path: '/areas-of-study/stage-and-screen/film-music',
      content: 'Music in films.',
      content_zh: '电影中的音乐。',
      longDescription: `Film music is a cornerstone of modern storytelling. This area examines how composers like John Williams and Hans Zimmer use leitmotifs, underscore, and hybrid orchestration to create emotional resonance and build cinematic worlds.`,
      longDescription_zh: `电影音乐是现代叙事的核心。本节探讨约翰·威廉姆斯和汉斯·季默等作曲家如何利用主导动机、背景音乐和混合管弦乐来营造情感共鸣并构建电影世界。`
    },
    {
      id: 'leitmotif', title: 'Leitmotif', title_zh: '主导动机', path: '/term/leitmotif', isTerm: true,
      content: 'A musical theme for a character or idea.',
      content_zh: '代表一个角色或思想的音乐主题。',
      longDescription: `A leitmotif is a short musical idea or theme that is associated with a particular character, place, object, or emotion in a film or opera. When you hear the leitmotif, it reminds you of that thing. This technique was famously used by Richard Wagner and is common in film music (e.g., Star Wars).`,
      longDescription_zh: `主导动机是一个简短的音乐理念或主题，与电影或歌剧中的特定角色、地点、物体或情感相关联。当您听到主导动机时，它会提醒您那个事物。这种技巧由理查德·瓦格纳著名地使用，在电影音乐中很常见（例如《星球大战》）。`
    },
    {
      id: 'aos7-computer-game-music', title: 'Focus Area: Computer Game Music', title_zh: '重点领域：电脑游戏音乐', path: '/areas-of-study/stage-and-screen/computer-game',
      content: 'Music in video games.',
      content_zh: '视频游戏中的音乐。',
      longDescription: `Video game music has evolved from simple chiptunes to complex, adaptive scores. Learn how composers like Koji Kondo and Nobuo Uematsu use modular structures and vertical layering to create music that reacts to player choices.`,
      longDescription_zh: `视频游戏音乐已从简单的电子音效演变为复杂的自适应配乐。学习近藤浩治和植松伸夫等作曲家如何利用模块化结构和垂直分层来创作与玩家选择互动的音乐。`
    },
    {
      id: 'mickey-mousing', title: 'Mickey Mousing', title_zh: '米老鼠音效', path: '/term/mickey-mousing', isTerm: true,
      content: 'Music that copies the action.',
      content_zh: '模仿动作的音乐。',
      longDescription: `Mickey Mousing is a technique in film and cartoon music where the music very closely follows the actions on screen. For example, if someone tiptoes, the music might have light, tiptoeing sounds. It is often used for comic effect.`,
      longDescription_zh: `米老鼠音效是电影和卡通音乐中的一种技巧，音乐非常紧密地跟随屏幕上的动作。例如，如果有人踮起脚尖走路，音乐可能会有轻巧、踮脚的声音。它通常用于喜剧效果。`
    },
    {
      id: 'aos7-starting-points', title: 'Starting Points (Wider Listening)', title_zh: '起点 (扩展聆听)', path: '/areas-of-study/stage-and-screen/starting-points',
      content: 'Examples to listen to for stage and screen music.',
      content_zh: '可供聆听的舞台与银幕音乐范例。',
      longDescription: `Listen to: Stravinsky's "The Rite of Spring" (Ballet), John Williams' "Star Wars" score (Film Music), and Yoko Shimomura's "Gran Saga soundtrack" (Computer Game Music).`,
      longDescription_zh: `聆听：斯特拉文斯基的《春之祭》（芭蕾舞）、约翰·威廉姆斯的《星球大战》配乐（电影音乐），以及下村阳子的《格兰骑士团原声带》（电脑游戏音乐）。`
    },
    aos7DetailedContent,
  ]
};

