
import { SyllabusItem } from '../../../types';
import { concertoTerm } from './key_features/concerto';
import { continuoPage, bassoContinuoTerm } from './key_features/bassoContinuo';
import { ritornelloFormTerm } from './key_features/ritornelloForm';
import { terracedDynamicsTerm } from './key_features/terracedDynamics';
import { harmonyAndTonalityTerm } from './key_features/harmonyAndTonality';
import { majorMinorScalesTerm } from './key_features/majorMinorScales';
import { pedalNoteTerm } from './key_features/pedalNote';
import { suspensionTerm } from './key_features/suspension';
import { polyphonyTerm } from './key_features/polyphony';
import { ornamentationTerm } from './key_features/ornamentation';
import { instrumentsPage } from './key_features/instruments';

export const keyFeaturesPage: SyllabusItem = {
    id: 'aos1-key-features',
    title: 'Key Baroque Features',
    title_zh: '巴洛克音乐主要特征',
    path: '/areas-of-study/aos1-baroque-music/key-features',
    content: 'Core concepts of Baroque music.',
    content_zh: '巴洛克音乐的核心概念。',
    longDescription: 'This section explores some of the most important musical ideas and terms from the Baroque period. Understanding these concepts is key to analysing the focus works and other music from this era.',
    longDescription_zh: '本节探讨巴洛克时期一些最重要的音乐理念和术语。理解这些概念是分析重点作品和这一时期其他音乐的关键。',
    children: [
        concertoTerm,
        continuoPage,
        ritornelloFormTerm,
        bassoContinuoTerm, // This is the /term/ page, distinct from the section page
        terracedDynamicsTerm,
        harmonyAndTonalityTerm,
        majorMinorScalesTerm,
        pedalNoteTerm,
        suspensionTerm,
        polyphonyTerm,
        ornamentationTerm,
        instrumentsPage,
    ]
};
