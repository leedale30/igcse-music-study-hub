import { Quiz } from '../../../../types';

export const baroqueSoloConcertoQuiz: Quiz = {
  title: "Solo Concerto Quiz",
  questions: [
    {
      id: 'bscq1',
      text: "The solo concerto that gained popularity after the Baroque period featured a single soloist accompanied by what kind of orchestra?",
      options: [
        { id: 'bscq1a1', text: 'A smaller, more intimate orchestra' },
        { id: 'bscq1a2', text: 'An orchestra of only string instruments' },
        { id: 'bscq1a3', text: 'A much larger and more developed orchestra' },
        { id: 'bscq1a4', text: 'An orchestra with no conductor' },
      ],
      correctAnswerId: 'bscq1a3',
      explanation: "The Classical solo concerto featured a single virtuosic soloist against a larger, more developed, and more powerful orchestra than in the Baroque era."
    },
    {
      id: 'bscq2',
      text: "Which new musical form became standard for the first movement of a Classical solo concerto?",
      options: [
        { id: 'bscq2a1', text: 'Ritornello Form' },
        { id: 'bscq2a2', text: 'Fugue' },
        { id: 'bscq2a3', text: 'Sonata Form' },
        { id: 'bscq2a4', text: 'Da Capo Aria Form' },
      ],
      correctAnswerId: 'bscq2a3',
      explanation: "Sonata Form (with its Exposition, Development, and Recapitulation) became the standard structure for the first movements of Classical concertos."
    },
    {
      id: 'bscq3',
      text: "What change occurred regarding dynamics in the Classical solo concerto compared to the Baroque Concerto Grosso?",
      options: [
        { id: 'bscq3a1', text: 'Only terraced dynamics were used.' },
        { id: 'bscq3a2', text: 'There was very little dynamic contrast.' },
        { id: 'bscq3a3', text: 'Gradual changes like crescendo and decrescendo became key expressive features.' },
        { id: 'bscq3a4', text: 'The music was performed at a constant loud volume.' },
      ],
      correctAnswerId: 'bscq3a3',
      explanation: "A key development was the use of a wider range of dynamics, including gradual changes like crescendos and decrescendos, for greater expression."
    },
    {
      id: 'bscq4',
      text: "What is the name for the virtuosic, unaccompanied section for the soloist, often found near the end of the first movement?",
      options: [
        { id: 'bscq4a1', text: 'Coda' },
        { id: 'bscq4a2', text: 'Episode' },
        { id: 'bscq4a3', text: 'Cadenza' },
        { id: 'bscq4a4', text: 'Ritornello' },
      ],
      correctAnswerId: 'bscq4a3',
      explanation: "The cadenza is the brilliant, unaccompanied passage where the soloist could show off their technical skill."
    },
    {
      id: 'bscq5',
      text: "What happened to the Basso Continuo in the Classical solo concerto?",
      options: [
        { id: 'bscq5a1', text: 'It became even more important and complex.' },
        { id: 'bscq5a2', text: 'It was replaced by a guitar.' },
        { id: 'bscq5a3', text: 'It declined in use and was eventually abandoned.' },
        { id: 'bscq5a4', text: 'It was only played by the soloist.' },
      ],
      correctAnswerId: 'bscq5a3',
      explanation: "As the harpsichord fell out of favor and composers wrote harmonies into the main orchestral parts, the basso continuo was no longer needed."
    },
    {
      id: 'bscq6',
      text: "Which instrument was a key NEW addition to the woodwind section of the Classical orchestra?",
      options: [
        { id: 'bscq6a1', text: 'Flute' },
        { id: 'bscq6a2', text: 'Oboe' },
        { id: 'bscq6a3', text: 'Bassoon' },
        { id: 'bscq6a4', text: 'Clarinet' },
      ],
      correctAnswerId: 'bscq6a4',
      explanation: "The clarinet was a newly invented instrument that became a standard member of the Classical orchestra's woodwind section."
    },
    {
      id: 'bscq7',
      text: "How did the texture of music change from the Baroque Concerto Grosso to the Classical Solo Concerto?",
      options: [
        { id: 'bscq7a1', text: 'It became more polyphonic and complex.' },
        { id: 'bscq7a2', text: 'It became clearer and more homophonic (melody and accompaniment).' },
        { id: 'bscq7a3', text: 'It remained exactly the same.' },
        { id: 'bscq7a4', text: 'It became primarily monophonic.' },
      ],
      correctAnswerId: 'bscq7a2',
      explanation: "The dense polyphony of the Baroque was replaced by a clearer homophonic texture, with elegant melodies over a chordal accompaniment."
    },
    {
      id: 'bscq8',
      text: "Which of these composers is a key figure in the development of the Classical solo concerto?",
      options: [
        { id: 'bscq8a1', text: 'J. S. Bach' },
        { id: 'bscq8a2', text: 'G. F. Handel' },
        { id: 'bscq8a3', text: 'W. A. Mozart' },
        { id: 'bscq8a4', text: 'A. Vivaldi' },
      ],
      correctAnswerId: 'bscq8a3',
      explanation: "Mozart, along with Haydn and Beethoven, was a master of the Classical solo concerto, particularly for the piano."
    }
  ]
};
