import { SyllabusItem } from '../../../../types';
import { baroqueOrchestraPage } from './instruments/baroqueOrchestra';
import { harpsichordTerm } from './instruments/harpsichord';
import { luteTheorboTerm } from './instruments/luteTheorbo';
import { violaDaGambaTerm } from './instruments/violaDaGamba';
import { naturalTrumpetTerm } from './instruments/naturalTrumpet';
import { baroqueViolinTerm } from './instruments/baroqueViolin';

export const instrumentsPage: SyllabusItem = {
    id: 'aos1-baroque-instruments-orchestra',
    title: 'The Baroque Instruments and Baroque Orchestra',
    title_zh: '巴洛克乐器与管弦乐队',
    path: '/areas-of-study/aos1-baroque-music/key-features/instruments-and-orchestra',
    content: 'Explore the instruments and ensemble of the Baroque era.',
    content_zh: '探索巴洛克时代的乐器与合奏。',
    longDescription: `The sound of the Baroque era is uniquely defined by its instruments and the way they were combined into an ensemble. This section provides a detailed look at both the orchestra as a whole and the key individual instruments that gave the period its distinctive character. Explore the structure of the Baroque orchestra, then dive deeper into the sounds of the harpsichord, lute, viola da gamba, and more.`,
    longDescription_zh: `巴洛克时代的声音由其乐器以及它们组合成合奏的方式独特地定义。本节详细介绍了整个管弦乐队以及赋予该时期独特个性的关键个别乐器。探索巴洛克管弦乐队的结构，然后更深入地了解羽管键琴、琉特琴、古大提琴等乐器的声音。`,
    children: [
        baroqueOrchestraPage,
        harpsichordTerm,
        luteTheorboTerm,
        violaDaGambaTerm,
        naturalTrumpetTerm,
        baroqueViolinTerm,
    ]
};