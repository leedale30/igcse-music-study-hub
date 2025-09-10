import { Quiz } from '../../../../types';

export const baroqueConcertoGrossoQuiz: Quiz = {
  title: "Baroque Concerto Grosso Quiz",
  questions: [
    {
      id: 'bcgq1',
      text: "In a Baroque Concerto Grosso, what is the name for the small group of soloists?",
      options: [
        { id: 'bcgq1a1', text: 'Ripieno' },
        { id: 'bcgq1a2', text: 'Tutti' },
        { id: 'bcgq1a3', text: 'Concertino' },
        { id: 'bcgq1a4', text: 'Continuo' },
      ],
      correctAnswerId: 'bcgq1a3',
      explanation: "The concertino is the small group of solo performers who contrast with the larger orchestra (the ripieno)."
    },
    {
      id: 'bcgq2',
      text: "What is the name for the main orchestral group that provides accompaniment in a Concerto Grosso?",
      options: [
        { id: 'bcgq2a1', text: 'Concertino' },
        { id: 'bcgq2a2', text: 'Cadenza' },
        { id: 'bcgq2a3', text: 'Episode' },
        { id: 'bcgq2a4', text: 'Ripieno' },
      ],
      correctAnswerId: 'bcgq2a4',
      explanation: "The ripieno (or tutti) is the main body of the orchestra that accompanies and contrasts with the concertino."
    },
    {
      id: 'bcgq3',
      text: "What is the typical tempo structure for the three movements of a Concerto Grosso?",
      options: [
        { id: 'bcgq3a1', text: 'Slow-Fast-Slow' },
        { id: 'bcgq3a2', text: 'Fast-Slow-Fast' },
        { id: 'bcgq3a3', text: 'Fast-Fast-Slow' },
        { id: 'bcgq3a4', text: 'Slow-Slow-Fast' },
      ],
      correctAnswerId: 'bcgq3a2',
      explanation: "Baroque concertos typically follow a three-movement plan with a Fast-Slow-Fast tempo structure."
    },
    {
      id: 'bcgq4',
      text: "Which musical form, featuring a returning theme (tutti) alternating with contrasting sections (solo), is common in the fast movements?",
      options: [
        { id: 'bcgq4a1', text: 'Sonata Form' },
        { id: 'bcgq4a2', text: 'Ternary Form' },
        { id: 'bcgq4a3', text: 'Ritornello Form' },
        { id: 'bcgq4a4', text: 'Rondo Form' },
      ],
      correctAnswerId: 'bcgq4a3',
      explanation: "Ritornello Form is the characteristic structure for the fast movements, where the main 'ritornello' theme returns."
    },
    {
      id: 'bcgq5',
      text: "Which term describes the dynamic effect of sudden shifts between loud and soft, common in Baroque music?",
      options: [
        { id: 'bcgq5a1', text: 'Crescendo' },
        { id: 'bcgq5a2', text: 'Diminuendo' },
        { id: 'bcgq5a3', text: 'Sforzando' },
        { id: 'bcgq5a4', text: 'Terraced Dynamics' },
      ],
      correctAnswerId: 'bcgq5a4',
      explanation: "Terraced dynamics involve abrupt changes in volume, a hallmark of the Baroque style, often achieved by contrasting the concertino and ripieno."
    },
    {
      id: 'bcgq6',
      text: "The harmonic foundation of a Concerto Grosso, played by a keyboard and a bass instrument, is called the:",
      options: [
        { id: 'bcgq6a1', text: 'Cadenza' },
        { id: 'bcgq6a2', text: 'Continuo' },
        { id: 'bcgq6a3', text: 'Episode' },
        { id: 'bcgq6a4', text: 'Ritornello' },
      ],
      correctAnswerId: 'bcgq6a2',
      explanation: "The Basso Continuo, or just continuo, is the harmonic backbone of almost all Baroque ensemble music."
    },
    {
      id: 'bcgq7',
      text: "What is the predominant musical texture in a Baroque Concerto Grosso?",
      options: [
        { id: 'bcgq7a1', text: 'Homophonic' },
        { id: 'bcgq7a2', text: 'Monophonic' },
        { id: 'bcgq7a3', text: 'Polyphonic / Contrapuntal' },
        { id: 'bcgq7a4', text: 'Heterophonic' },
      ],
      correctAnswerId: 'bcgq7a3',
      explanation: "The texture is mainly polyphonic or contrapuntal, featuring complex, interwoven melodic lines, though some homophonic sections exist for contrast."
    },
    {
      id: 'bcgq8',
      text: "Who led and directed the orchestra in a typical Baroque Concerto Grosso performance?",
      options: [
        { id: 'bcgq8a1', text: 'A dedicated conductor with a baton' },
        { id: 'bcgq8a2', text: 'The lead violinist of the concertino' },
        { id: 'bcgq8a3', text: 'The continuo player (usually the harpsichordist)' },
        { id: 'bcgq8a4', text: 'The composer of the piece' },
      ],
      correctAnswerId: 'bcgq8a3',
      explanation: "There was no separate conductor; the continuo player, usually the harpsichordist, directed the ensemble."
    }
  ]
};
