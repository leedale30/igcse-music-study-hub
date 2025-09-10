import { Quiz } from '../../../../types';

export const luteTheorboQuiz: Quiz = {
  title: "The Lute and Theorbo Quiz",
  questions: [
    {
      id: 'ltq1',
      text: "Which of these best describes a lute?",
      options: [
        { id: 'ltq1a1', text: 'A large, floor-standing harp.' },
        { id: 'ltq1a2', text: 'A plucked string instrument with a deep, rounded back.' },
        { id: 'ltq1a3', text: 'A keyboard instrument where strings are struck.' },
        { id: 'ltq1a4', text: 'A woodwind instrument with a double reed.' },
      ],
      correctAnswerId: 'ltq1a2',
      explanation: "The lute is a plucked string instrument easily recognized by its deep, rounded back, similar to a halved pear."
    },
    {
      id: 'ltq2',
      text: "What is a theorbo?",
      options: [
        { id: 'ltq2a1', text: 'A type of small drum.' },
        { id: 'ltq2a2', text: 'A very large lute with a second pegbox for extra bass strings.' },
        { id: 'ltq2a3', text: 'A valveless brass instrument.' },
        { id: 'ltq2a4', text: 'A bowed string instrument.' },
      ],
      correctAnswerId: 'ltq2a2',
      explanation: "The theorbo is a large member of the lute family, characterized by an extended neck with a second pegbox to accommodate long, unfretted bass strings."
    },
    {
      id: 'ltq3',
      text: "What was a primary role for the lute and theorbo in Baroque music?",
      options: [
        { id: 'ltq3a1', text: 'Playing the highest melodic parts in the orchestra.' },
        { id: 'ltq3a2', text: 'Providing rhythmic drive with loud, percussive sounds.' },
        { id: 'ltq3a3', text: 'Serving as chordal instruments in the Basso Continuo, especially in vocal music.' },
        { id: 'ltq3a4', text: 'They were exclusively used in military bands.' },
      ],
      correctAnswerId: 'ltq3a3',
      explanation: "Both the lute and, especially, the larger theorbo were commonly used as continuo instruments, ideal for accompanying singers or in small chamber settings."
    }
  ]
};
