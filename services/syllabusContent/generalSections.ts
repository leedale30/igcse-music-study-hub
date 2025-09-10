
import { SyllabusItem } from '../../types';

export const homePage: SyllabusItem = {
  id: 'home',
  title: 'Home',
  title_zh: '主页',
  path: '/',
  content: 'Welcome! Learn about IGCSE Music.',
  content_zh: '欢迎！学习IGCSE音乐。',
  longDescription: `This website helps you study for your IGCSE Music exam (0410 / 0978). You can find information about different music styles, how to perform, and how to compose music. We will cover everything you need for the exam starting in 2026.`,
  longDescription_zh: `本网站帮助您备考IGCSE音乐考试（0410 / 0978）。您可以找到关于不同音乐风格、如何演奏以及如何作曲的信息。我们将涵盖从2026年开始的考试所需的一切内容。`
};

export const termPlaceholderPage: SyllabusItem = { 
  id: 'term-placeholder', 
  title: 'Term', 
  title_zh: '术语',
  path: '/term/:termId', 
  content: 'Placeholder: What does this musical term mean?',
  content_zh: '占位符：这个音乐术语是什么意思？',
  longDescription: `This page will explain an important musical term. We are working on adding all the definitions. Check back soon!`,
  longDescription_zh: `此页面将解释一个重要的音乐术语。我们正在努力添加所有定义。请稍后回来查看！`,
  isTerm: true
};
