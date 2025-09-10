import { Quiz } from '../../../../types';

export const naturalTrumpetQuiz: Quiz = {
  title: "The Natural Trumpet Quiz",
  questions: [
    {
      id: 'ntq1',
      text: "What key feature is missing from a 'natural' trumpet compared to a modern trumpet?",
      options: [
        { id: 'ntq1a1', text: 'A mouthpiece' },
        { id: 'ntq1a2', text: 'A bell' },
        { id: 'ntq1a3', text: 'Valves' },
        { id: 'ntq1a4', text: 'Tubing' },
      ],
      correctAnswerId: 'ntq1a3',
      explanation: "The natural trumpet has no valves, which severely limits the notes it can play to the natural harmonic series of its fundamental pitch."
    },
    {
      id: 'ntq2',
      text: "How did a natural trumpet player change notes?",
      options: [
        { id: 'ntq2a1', text: 'By pressing keys like on a flute.' },
        { id: 'ntq2a2', text: 'By changing the length of the instrument with a slide.' },
        { id: 'ntq2a3', text: 'Solely by changing their lip tension (embouchure) to select different notes from the harmonic series.' },
        { id: 'ntq2a4', text: 'They could only play one single note.' },
      ],
      correctAnswerId: 'ntq2a3',
      explanation: "Players had to use their embouchure to precisely select different pitches from the harmonic series, a very difficult skill."
    },
    {
      id: 'ntq3',
      text: "The difficult, high-pitched, and virtuosic style of playing the natural trumpet is known as the ____ register.",
      options: [
        { id: 'ntq3a1', text: 'Pedal' },
        { id: 'ntq3a2', text: 'Clarino' },
        { id: 'ntq3a3', text: 'Tutti' },
        { id: 'ntq3a4', text: 'Continuo' },
      ],
      correctAnswerId: 'ntq3a2',
      explanation: "Playing in the high 'clarino' register allowed the natural trumpet to play more scale-like passages, as the available notes of the harmonic series are closer together at the top."
    },
    {
      id: 'ntq4',
      text: "In Baroque orchestral music, trumpets were often paired with which percussion instrument?",
      options: [
        { id: 'ntq4a1', text: 'Snare Drum' },
        { id: 'ntq4a2', text: 'Cymbals' },
        { id: 'ntq4a3', text: 'Timpani' },
        { id: 'ntq4a4', text: 'Triangle' },
      ],
      correctAnswerId: 'ntq4a3',
      explanation: "Trumpets and timpani were frequently used together to create a majestic, festive, or military sound, especially in music in D major."
    }
  ]
};
