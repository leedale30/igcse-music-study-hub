
import { SyllabusItem } from '../../../../types';
import { handelConcertoGrossoPage } from './concertoGrosso';

export const handelFocusWork: SyllabusItem = {
    id: 'aos1-handel', 
    title: 'Focus Work: Handel (1685–1759)', 
    title_zh: '重点作品：亨德尔 (1685–1759)',
    path: '/areas-of-study/aos1-baroque-music/handel',
    content: 'Learn about George Frideric Handel and his Concerto Grosso.',
    content_zh: '了解乔治·弗里德里希·亨德尔及其大协奏曲。',
    longDescription: `George Frideric Handel (1685–1759) was a German-born British Baroque composer who is widely regarded as one of the greatest composers of his era. He spent most of his adult life in London, becoming a naturalized British subject in 1727. Handel's music combines German craft, Italian melody, and French grandeur. He composed in many genres, including operas, oratorios, anthems, concerti grossi, and organ concertos. His most famous work is the oratorio "Messiah."

In this section, we focus on his set of twelve Concerti Grossi, Op. 6, specifically No. 5 in D major, HWV 323. These concertos were published in 1739 and were composed in a remarkably short period. They are prime examples of the Baroque Concerto Grosso form, heavily influenced by the model of Arcangelo Corelli.`,
    longDescription_zh: `乔治·弗里德里希·亨德尔（1685–1759）是一位出生于德国的英国巴洛克作曲家，被广泛认为是他那个时代最伟大的作曲家之一。他的成年生活大部分在伦敦度过，并于1727年成为英国归化公民。亨德尔的音乐融合了德国的技巧、意大利的旋律和法国的宏伟。他创作了多种体裁的音乐，包括歌剧、清唱剧、赞美诗、大协奏曲和管风琴协奏曲。他最著名的作品是清唱剧《弥赛亚》。

在本节中，我们重点关注他的十二首大协奏曲（作品6），特别是D大调第五号（HWV 323）。这些协奏曲于1739年出版，是在极短的时间内创作完成的。它们是巴洛克大协奏曲形式的典型范例，深受阿尔坎杰罗·科雷利模式的影响。`,
    children: [
        handelConcertoGrossoPage,
    ]
};
