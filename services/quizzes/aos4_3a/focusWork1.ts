import { Quiz } from '../../../types';

export const popSongFocusWork1Quiz: Quiz = {
  title: "Pop Song Focus Work 1 Quiz",
  questions: [
    {
      id: 'ps4fw1q1',
      text: "When analyzing a pop song's structure, what should you identify first?",
      options: [
        { id: 'ps4fw1q1a1', text: 'The chord progressions' },
        { id: 'ps4fw1q1a2', text: 'The verse, chorus, bridge, and other sections' },
        { id: 'ps4fw1q1a3', text: 'The production effects' },
        { id: 'ps4fw1q1a4', text: 'The target audience' },
      ],
      correctAnswerId: 'ps4fw1q1a2',
      explanation: "When analyzing structure, first identify the main sections (verse, chorus, bridge) to understand how the song is organized."
    },
    {
      id: 'ps4fw1q2',
      text: "What makes a pop song hook effective?",
      options: [
        { id: 'ps4fw1q2a1', text: 'Complex harmonies' },
        { id: 'ps4fw1q2a2', text: 'Memorability and strategic placement' },
        { id: 'ps4fw1q2a3', text: 'Long melodic phrases' },
        { id: 'ps4fw1q2a4', text: 'Unusual time signatures' },
      ],
      correctAnswerId: 'ps4fw1q2a2',
      explanation: "An effective hook is memorable and strategically placed (often at the beginning of the chorus) to catch and hold the listener's attention."
    },
    {
      id: 'ps4fw1q3',
      text: "How do pop songs typically balance artistic expression with commercial considerations?",
      options: [
        { id: 'ps4fw1q3a1', text: 'By ignoring commercial factors entirely' },
        { id: 'ps4fw1q3a2', text: 'By using familiar musical languages while adding creative elements' },
        { id: 'ps4fw1q3a3', text: 'By copying other successful songs exactly' },
        { id: 'ps4fw1q3a4', text: 'By avoiding all familiar elements' },
      ],
      correctAnswerId: 'ps4fw1q3a2',
      explanation: "Pop songs balance art and commerce by using familiar musical languages that audiences understand while adding creative elements for distinctiveness."
    }
  ]
};