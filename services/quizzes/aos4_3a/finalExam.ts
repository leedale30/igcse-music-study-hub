import { Quiz } from '../../../types';

export const popSongFinalExamQuiz: Quiz = {
  title: "Pop Song Final Exam Preparation Quiz",
  questions: [
    {
      id: 'ps4feq1',
      text: "What should you focus on when analyzing the structure of a pop song in an exam?",
      options: [
        { id: 'ps4feq1a1', text: 'Only the chord progressions' },
        { id: 'ps4feq1a2', text: 'Identifying sections and how they serve commercial and artistic goals' },
        { id: 'ps4feq1a3', text: 'Only the lyrics' },
        { id: 'ps4feq1a4', text: 'Only the production effects' },
      ],
      correctAnswerId: 'ps4feq1a2',
      explanation: "When analyzing structure, identify the sections (verse, chorus, bridge) and explain how they serve both commercial appeal and artistic expression."
    },
    {
      id: 'ps4feq2',
      text: "How do pop songs differ from art songs in their approach to commercial considerations?",
      options: [
        { id: 'ps4feq2a1', text: 'Pop songs ignore commercial factors' },
        { id: 'ps4feq2a2', text: 'Pop songs prioritize broad appeal and accessibility' },
        { id: 'ps4feq2a3', text: 'Pop songs are identical to art songs' },
        { id: 'ps4feq2a4', text: 'Pop songs avoid all familiar elements' },
      ],
      correctAnswerId: 'ps4feq2a2',
      explanation: "Pop songs prioritize broad appeal and accessibility, using familiar musical languages to reach the widest possible audience."
    },
    {
      id: 'ps4feq3',
      text: "What is the most important skill for analyzing pop songs in an exam context?",
      options: [
        { id: 'ps4feq3a1', text: 'Memorizing all chord progressions' },
        { id: 'ps4feq3a2', text: 'Connecting musical elements to their commercial and cultural functions' },
        { id: 'ps4feq3a3', text: 'Knowing all pop song titles' },
        { id: 'ps4feq3a4', text: 'Identifying the recording studio' },
      ],
      correctAnswerId: 'ps4feq3a2',
      explanation: "The key skill is connecting musical elements (melody, harmony, rhythm, production) to their commercial and cultural functions."
    },
    {
      id: 'ps4feq4',
      text: "When comparing pop songs from different eras, what should you focus on?",
      options: [
        { id: 'ps4feq4a1', text: 'Only the differences' },
        { id: 'ps4feq4a2', text: 'How technology and culture influenced musical style evolution' },
        { id: 'ps4feq4a3', text: 'Only the similarities' },
        { id: 'ps4feq4a4', text: 'Which era was better' },
      ],
      correctAnswerId: 'ps4feq4a2',
      explanation: "When comparing different eras, focus on how technological advances and cultural changes influenced the evolution of musical style."
    },
    {
      id: 'ps4feq5',
      text: "What makes a strong analytical response about pop music?",
      options: [
        { id: 'ps4feq5a1', text: 'Personal opinions only' },
        { id: 'ps4feq5a2', text: 'Specific musical examples supporting clear arguments' },
        { id: 'ps4feq5a3', text: 'General statements without examples' },
        { id: 'ps4feq5a4', text: 'Avoiding technical terminology' },
      ],
      correctAnswerId: 'ps4feq5a2',
      explanation: "Strong analytical responses use specific musical examples to support clear arguments, demonstrating understanding through concrete evidence."
    }
  ]
};