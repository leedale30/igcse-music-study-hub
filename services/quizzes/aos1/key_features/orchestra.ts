import { Quiz } from '../../../../types';

export const baroqueOrchestraQuiz: Quiz = {
  title: "The Baroque Orchestra Quiz",
  questions: [
    {
      id: 'boq1',
      text: "What group of instruments formed the core or 'heart' of the Baroque orchestra?",
      options: [
        { id: 'boq1a1', text: 'The Woodwinds' },
        { id: 'boq1a2', text: 'The Brass' },
        { id: 'boq1a3', text: 'The Basso Continuo' },
        { id: 'boq1a4', text: 'The Strings' },
      ],
      correctAnswerId: 'boq1a4',
      explanation: "The string section (violins, violas, cellos, double basses) was the foundation of the Baroque orchestra."
    },
    {
      id: 'boq2',
      text: "Who typically led the Baroque orchestra in the absence of a modern conductor?",
      options: [
        { id: 'boq2a1', text: 'The timpanist' },
        { id: 'boq2a2', text: 'The composer from the audience' },
        { id: 'boq2a3', text: 'The harpsichordist or the lead violinist' },
        { id: 'boq2a4', text: 'The first oboe player' },
      ],
      correctAnswerId: 'boq2a3',
      explanation: "The ensemble was led from within, usually by the harpsichord player (as the leader of the continuo) or the principal first violinist."
    },
    {
      id: 'boq3',
      text: "The Basso Continuo group consisted of a chordal instrument (like a harpsichord) and what other type of instrument?",
      options: [
        { id: 'boq3a1', text: 'A high-pitched woodwind instrument' },
        { id: 'boq3a2', text: 'A percussion instrument' },
        { id: 'boq3a3', text: 'A bass line instrument (like a cello or bassoon)' },
        { id: 'boq3a4', text: 'A brass instrument' },
      ],
      correctAnswerId: 'boq3a3',
      explanation: "The continuo required both a chordal instrument to 'realize' the harmonies and a bass instrument to play the written bass line."
    },
    {
      id: 'boq4',
      text: "Brass instruments like the natural trumpet were typically used for what purpose in the Baroque orchestra?",
      options: [
        { id: 'boq4a1', text: 'To play quiet, lyrical melodies.' },
        { id: 'boq4a2', text: 'To provide the main harmony in every piece.' },
        { id: 'boq4a3', text: 'For special, festive, or military effects.' },
        { id: 'boq4a4', text: 'To accompany solo singers exclusively.' },
      ],
      correctAnswerId: 'boq4a3',
      explanation: "Due to their limitations (no valves) and bright sound, brass instruments and timpani were often reserved for special occasions and grand music."
    },
    {
      id: 'boq5',
      text: "How did the sound of Baroque string instruments differ from their modern counterparts?",
      options: [
        { id: 'boq5a1', text: 'They were much louder and more brilliant due to steel strings.' },
        { id: 'boq5a2', text: 'They had a warmer, less brilliant tone due to the use of gut strings.' },
        { id: 'boq5a3', text: 'They sounded exactly the same as modern strings.' },
        { id: 'boq5a4', text: 'They were always played with mutes.' },
      ],
      correctAnswerId: 'boq5a2',
      explanation: "Baroque strings used gut strings and different bows, which produced a warmer, richer, and less powerful sound than modern steel-stringed instruments."
    }
  ]
};
