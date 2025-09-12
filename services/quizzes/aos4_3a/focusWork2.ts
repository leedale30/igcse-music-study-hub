import { Quiz } from '../../../types';

export const popSongFocusWork2Quiz: Quiz = {
  title: "Contemporary Pop Analysis Quiz",
  questions: [
    {
      id: 'ps4fw2q1',
      text: "What is a key characteristic of contemporary pop production?",
      options: [
        { id: 'ps4fw2q1a1', text: 'Only acoustic instruments' },
        { id: 'ps4fw2q1a2', text: 'Digital recording and electronic elements' },
        { id: 'ps4fw2q1a3', text: 'No use of technology' },
        { id: 'ps4fw2q1a4', text: 'Only live recording' },
      ],
      correctAnswerId: 'ps4fw2q1a2',
      explanation: "Contemporary pop heavily uses digital recording, electronic instruments, auto-tune, and various digital effects."
    },
    {
      id: 'ps4fw2q2',
      text: "How has streaming affected pop song structure?",
      options: [
        { id: 'ps4fw2q2a1', text: 'Songs have become much longer' },
        { id: 'ps4fw2q2a2', text: 'Hooks come earlier to prevent skipping' },
        { id: 'ps4fw2q2a3', text: 'Structure has become more complex' },
        { id: 'ps4fw2q2a4', text: 'No change in structure' },
      ],
      correctAnswerId: 'ps4fw2q2a2',
      explanation: "Streaming has led to hooks appearing earlier in songs to capture attention quickly and prevent listeners from skipping."
    },
    {
      id: 'ps4fw2q3',
      text: "What is genre fusion in contemporary pop?",
      options: [
        { id: 'ps4fw2q3a1', text: 'Using only one musical style' },
        { id: 'ps4fw2q3a2', text: 'Blending different musical styles and influences' },
        { id: 'ps4fw2q3a3', text: 'Avoiding all influences' },
        { id: 'ps4fw2q3a4', text: 'Only using classical music' },
      ],
      correctAnswerId: 'ps4fw2q3a2',
      explanation: "Genre fusion involves blending different musical styles like hip-hop, EDM, world music, and traditional pop elements."
    }
  ]
};