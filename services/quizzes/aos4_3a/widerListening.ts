import { Quiz } from '../../../types';

export const popSongWiderListeningQuiz: Quiz = {
  title: "Pop Song Wider Listening Quiz",
  questions: [
    {
      id: 'ps4wlq1',
      text: "What makes \"Yesterday\" by The Beatles a good example of classic pop?",
      options: [
        { id: 'ps4wlq1a1', text: 'Complex electronic production' },
        { id: 'ps4wlq1a2', text: 'Simple but effective melody with string arrangement' },
        { id: 'ps4wlq1a3', text: 'Heavy use of auto-tune' },
        { id: 'ps4wlq1a4', text: 'Rap verses' },
      ],
      correctAnswerId: 'ps4wlq1a2',
      explanation: "\"Yesterday\" exemplifies classic pop with its simple but effective melody, emotional lyrics, and sophisticated string quartet arrangement."
    },
    {
      id: 'ps4wlq2',
      text: "How does contemporary pop differ from classic pop in terms of production?",
      options: [
        { id: 'ps4wlq2a1', text: 'No difference at all' },
        { id: 'ps4wlq2a2', text: 'Heavy use of digital technology and electronic elements' },
        { id: 'ps4wlq2a3', text: 'Only acoustic instruments' },
        { id: 'ps4wlq2a4', text: 'Simpler arrangements' },
      ],
      correctAnswerId: 'ps4wlq2a2',
      explanation: "Contemporary pop heavily uses digital technology, electronic instruments, sampling, and various digital effects compared to classic pop."
    },
    {
      id: 'ps4wlq3',
      text: "What is the value of studying pop songs from different eras?",
      options: [
        { id: 'ps4wlq3a1', text: 'To see how technology and culture influence musical style' },
        { id: 'ps4wlq3a2', text: 'To prove older music is better' },
        { id: 'ps4wlq3a3', text: 'To avoid modern influences' },
        { id: 'ps4wlq3a4', text: 'To copy successful formulas exactly' },
      ],
      correctAnswerId: 'ps4wlq3a1',
      explanation: "Studying pop songs from different eras shows how technology, culture, and social trends influence musical style and evolution."
    }
  ]
};