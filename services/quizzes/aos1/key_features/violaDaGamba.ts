import { Quiz } from '../../../../types';

export const violaDaGambaQuiz: Quiz = {
  title: "The Viola da Gamba Quiz",
  questions: [
    {
      id: 'vdgq1',
      text: "How is the viola da gamba (or viol) typically held and played?",
      options: [
        { id: 'vdgq1a1', text: 'Under the chin, like a violin.' },
        { id: 'vdgq1a2', text: 'Upright on the lap or between the legs, like a small cello.' },
        { id: 'vdgq1a3', text: 'Horizontally across the lap and plucked.' },
        { id: 'vdgq1a4', text: 'On a strap over the shoulder.' },
      ],
      correctAnswerId: 'vdgq1a2',
      explanation: "'Viola da gamba' literally means 'viol for the leg,' and the instrument is held on or between the legs while being played with a bow."
    },
    {
      id: 'vdgq2',
      text: "Which of these is a key physical difference between a viola da gamba and a cello?",
      options: [
        { id: 'vdgq2a1', text: 'The viola da gamba has no strings.' },
        { id: 'vdgq2a2', text: 'The viola da gamba is made of metal.' },
        { id: 'vdgq2a3', text: 'The viola da gamba has frets on its fingerboard.' },
        { id: 'vdgq2a4', text: 'The viola da gamba is played by striking with a hammer.' },
      ],
      correctAnswerId: 'vdgq2a3',
      explanation: "Unlike members of the violin family (like the cello), viols have frets (like a guitar), which affects their tone and intonation."
    },
    {
      id: 'vdgq3',
      text: "What is the characteristic sound (timbre) of the viola da gamba often described as?",
      options: [
        { id: 'vdgq3a1', text: 'Loud, brilliant, and powerful.' },
        { id: 'vdgq3a2', text: 'Harsh and percussive.' },
        { id: 'vdgq3a3', text: 'Quiet, clear, and somewhat reedy or nasal.' },
        { id: 'vdgq3a4', text: 'Muted and indistinct.' },
      ],
      correctAnswerId: 'vdgq3a3',
      explanation: "The viol's construction and gut strings produce a quieter, more transparent, and complex tone compared to the more powerful cello."
    },
    {
      id: 'vdgq4',
      text: "In a Baroque ensemble, what was a common role for the viola da gamba?",
      options: [
        { id: 'vdgq4a1', text: 'Playing the highest trumpet parts.' },
        { id: 'vdgq4a2', text: 'Serving as the bass line instrument in the Basso Continuo.' },
        { id: 'vdgq4a3', text: 'It was only ever used as a solo instrument.' },
        { id: 'vdgq4a4', text: 'Providing percussion by tapping the instrument body.' },
      ],
      correctAnswerId: 'vdgq4a2',
      explanation: "The bass viola da gamba was frequently used to play the bass line of the continuo, often alongside a cello."
    }
  ]
};
