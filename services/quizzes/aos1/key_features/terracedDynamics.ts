import { Quiz } from '../../../../types';

export const terracedDynamicsTermQuiz: Quiz = {
  title: "Terraced Dynamics Quiz",
  questions: [
    {
      id: 'tdq1',
      text: "Terraced dynamics, common in Baroque music, refer to:",
      options: [
        { id: 'tdq1a1', text: 'Gradual changes in volume (crescendo/diminuendo).' },
        { id: 'tdq1a2', text: 'Sudden shifts between loud and soft volume levels.' },
        { id: 'tdq1a3', text: 'A consistently very loud volume.' },
        { id: 'tdq1a4', text: 'The use of echo effects only.' },
      ],
      correctAnswerId: 'tdq1a2',
      explanation: "Terraced dynamics are characterized by abrupt changes in volume, rather than gradual ones."
    },
    {
      id: 'tdq2',
      text: "Which Baroque keyboard instrument, due to its plucked-string mechanism, was incapable of producing gradual dynamics?",
      options: [
        { id: 'tdq2a1', text: 'Fortepiano' },
        { id: 'tdq2a2', text: 'Organ' },
        { id: 'tdq2a3', text: 'Harpsichord' },
        { id: 'tdq2a4', text: 'Clavichord' },
      ],
      correctAnswerId: 'tdq2a3',
      explanation: "The harpsichord could only play at fixed dynamic levels determined by its registers or manuals; pressing keys harder didn't change volume."
    },
    {
      id: 'tdq3',
      text: "How could a Baroque composer achieve a louder dynamic level in an orchestral piece without using crescendos?",
      options: [
        { id: 'tdq3a1', text: 'By writing \'crescendo\' in the score.' },
        { id: 'tdq3a2', text: 'By having all instruments play very slowly.' },
        { id: 'tdq3a3', text: 'By adding more instruments to the texture (e.g., full orchestra vs. solo group).' },
        { id: 'tdq3a4', text: 'By instructing performers to gradually increase bow pressure.' },
      ],
      correctAnswerId: 'tdq3a3',
      explanation: "Varying the number of instruments playing (e.g., tutti vs. solo) was a primary way to achieve terraced dynamics."
    },
    {
      id: 'tdq4',
      text: "The alternation between the 'concertino' (small solo group) and 'ripieno' (full orchestra) in a Concerto Grosso naturally creates:",
      options: [
        { id: 'tdq4a1', text: 'Complex polyrhythms.' },
        { id: 'tdq4a2', text: 'Gradual crescendos.' },
        { id: 'tdq4a3', text: 'Terraced dynamics.' },
        { id: 'tdq4a4', text: 'Atonal harmonies.' },
      ],
      correctAnswerId: 'tdq4a3',
      explanation: "The shift between the typically softer concertino and louder ripieno is a clear example of terraced dynamics."
    },
    {
      id: 'tdq5',
      text: "What is an 'echo effect' in the context of Baroque dynamics?",
      options: [
        { id: 'tdq5a1', text: 'A very long reverberation.' },
        { id: 'tdq5a2', text: 'Repeating a musical phrase softly after it was played loudly.' },
        { id: 'tdq5a3', text: 'Playing a phrase backwards.' },
        { id: 'tdq5a4', text: 'A gradual increase in volume and then decrease.' },
      ],
      correctAnswerId: 'tdq5a2',
      explanation: "An echo effect, where a phrase is repeated at a softer dynamic, is a specific type of terraced dynamic."
    },
    {
      id: 'tdq6',
      text: "The Baroque aesthetic preference for which artistic element aligned well with the use of terraced dynamics?",
      options: [
        { id: 'tdq6a1', text: 'Subtlety and understatement.' },
        { id: 'tdq6a2', text: 'Smooth transitions and blended colors.' },
        { id: 'tdq6a3', text: 'Clarity, drama, and contrast.' },
        { id: 'tdq6a4', text: 'Simplicity and folk-like character.' },
      ],
      correctAnswerId: 'tdq6a3',
      explanation: "The Baroque era valued contrast, drama, and clarity, all of which are enhanced by terraced dynamics."
    },
    {
      id: 'tdq7',
      text: "Gradual dynamic changes (crescendo and diminuendo) became much more common in which musical era that followed the Baroque?",
      options: [
        { id: 'tdq7a1', text: 'Renaissance' },
        { id: 'tdq7a2', text: 'Classical' },
        { id: 'tdq7a3', text: 'Medieval' },
        { id: 'tdq7a4', text: 'Impressionist' },
      ],
      correctAnswerId: 'tdq7a2',
      explanation: "The Classical era saw a significant increase in the use of gradual dynamics, partly due to instrument development like the fortepiano."
    },
    {
      id: 'tdq8',
      text: "True or False: Baroque composers never used markings like 'forte' (f) or 'piano' (p).",
      options: [
        { id: 'tdq8a1', text: 'True' },
        { id: 'tdq8a2', text: 'False' },
      ],
      correctAnswerId: 'tdq8a2',
      explanation: "False. While not as extensively as later periods, Baroque composers did sometimes use 'f' and 'p' to indicate distinct loud and soft sections."
    },
    {
      id: 'tdq9',
      text: "On a two-manual harpsichord, how could a player achieve terraced dynamics?",
      options: [
        { id: 'tdq9a1', text: 'By pressing the keys harder or softer.' },
        { id: 'tdq9a2', text: 'By using the pedals to sustain the sound.' },
        { id: 'tdq9a3', text: 'By switching between the two manuals, which could be set to different dynamic levels/registrations.' },
        { id: 'tdq9a4', text: 'By playing faster or slower.' },
      ],
      correctAnswerId: 'tdq9a3',
      explanation: "Different manuals on a harpsichord could be coupled with different sets of strings or quills, producing distinct volume levels."
    },
    {
      id: 'tdq10',
      text: "Terraced dynamics can help to:",
      options: [
        { id: 'tdq10a1', text: 'Blur the lines between musical sections.' },
        { id: 'tdq10a2', text: 'Create a very smooth and flowing sound.' },
        { id: 'tdq10a3', text: 'Delineate and clarify different sections of a musical form.' },
        { id: 'tdq10a4', text: 'Make the music intentionally ambiguous in its structure.' },
      ],
      correctAnswerId: 'tdq10a3',
      explanation: "The clear shifts in volume help to mark out different sections, like the contrast between ritornello and episode in a concerto."
    }
  ]
};
