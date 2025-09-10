
import { SyllabusItem } from '../../../../types';
import { vivaldiSpringMvt1Page } from './springMvt1';

export const vivaldiSpringPage: SyllabusItem = {
    id: 'aos1-vivaldi-spring', 
    title: 'Spring from The Four Seasons', 
    title_zh: '《四季》之《春》',
    path: '/areas-of-study/aos1-baroque-music/vivaldi/spring',
    content: 'Study Vivaldi\'s "Spring" concerto: overall context and Movement 1.',
    content_zh: '学习维瓦尔第的《春》协奏曲：整体背景及第一乐章。',
    longDescription: `This section focuses on "Spring" (La Primavera), the first concerto from Vivaldi's famous set, **The Four Seasons** (Le quattro stagioni). We'll explore the whole concerto's context and then dive deep into its first movement.`,
    longDescription_zh: `本节重点介绍维瓦尔第著名组曲**《四季》**中的第一首协奏曲《春》（La Primavera）。我们将探讨整首协奏曲的背景，然后深入研究其第一乐章。`,
    children: [
        vivaldiSpringMvt1Page,
    ]
};
