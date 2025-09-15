import { Quiz } from '../../../../types';

export const baroqueConcertoGrossoQuiz: Quiz = {
  title: "Baroque Concerto Grosso - Comprehensive Quiz",
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
    },
    // Additional questions 9-10 (Multiple Choice)
    {
      id: 'bcgq9',
      text: "Which Italian composer is credited with establishing the concerto grosso form?",
      options: [
        { id: 'bcgq9a1', text: 'Antonio Vivaldi' },
        { id: 'bcgq9a2', text: 'Arcangelo Corelli' },
        { id: 'bcgq9a3', text: 'Giuseppe Torelli' },
        { id: 'bcgq9a4', text: 'Alessandro Scarlatti' }
      ],
      correctAnswerId: 'bcgq9a2',
      explanation: "Arcangelo Corelli (1653-1713) is credited with establishing the concerto grosso form, particularly through his Op. 6 collection."
    },
    {
      id: 'bcgq10',
      text: "What is the typical instrumentation of the concertino in most Baroque concerti grossi?",
      options: [
        { id: 'bcgq10a1', text: 'Solo violin only' },
        { id: 'bcgq10a2', text: 'Two violins and cello' },
        { id: 'bcgq10a3', text: 'Flute, oboe, and bassoon' },
        { id: 'bcgq10a4', text: 'Trumpet and timpani' }
      ],
      correctAnswerId: 'bcgq10a2',
      explanation: "The standard concertino consists of two violins and a cello, following the trio sonata tradition."
    },
    // TRUE/FALSE QUESTIONS (11-12)
    {
      id: 'bcgq11',
      text: "TRUE or FALSE: The concerto grosso form was primarily developed in Germany during the Baroque period.",
      options: [
        { id: 'bcgq11a1', text: 'True' },
        { id: 'bcgq11a2', text: 'False' }
      ],
      correctAnswerId: 'bcgq11a2',
      explanation: "False. The concerto grosso form was primarily developed in Italy, particularly by composers like Corelli and later adopted by other European composers."
    },
    {
      id: 'bcgq12',
      text: "TRUE or FALSE: Baroque concerti grossi always have exactly three movements.",
      options: [
        { id: 'bcgq12a1', text: 'True' },
        { id: 'bcgq12a2', text: 'False' }
      ],
      correctAnswerId: 'bcgq12a2',
      explanation: "False. While three movements (Fast-Slow-Fast) is typical, some concerti grossi have more movements, such as Handel's Op. 6 No. 5 which has six movements."
    },
    // ODD ONE OUT QUESTIONS (13-14)
    {
      id: 'bcgq13',
      text: "ODD ONE OUT: Which of these is NOT a typical characteristic of Baroque concerto grosso style?",
      options: [
        { id: 'bcgq13a1', text: 'Terraced dynamics' },
        { id: 'bcgq13a2', text: 'Basso continuo' },
        { id: 'bcgq13a3', text: 'Gradual crescendos and diminuendos' },
        { id: 'bcgq13a4', text: 'Ritornello form' }
      ],
      correctAnswerId: 'bcgq13a3',
      explanation: "Gradual crescendos and diminuendos are characteristic of later Classical and Romantic periods, not Baroque music which features terraced dynamics."
    },
    {
      id: 'bcgq14',
      text: "ODD ONE OUT: Which composer did NOT write significant concerti grossi?",
      options: [
        { id: 'bcgq14a1', text: 'Arcangelo Corelli' },
        { id: 'bcgq14a2', text: 'George Frideric Handel' },
        { id: 'bcgq14a3', text: 'Wolfgang Amadeus Mozart' },
        { id: 'bcgq14a4', text: 'Johann Sebastian Bach' }
      ],
      correctAnswerId: 'bcgq14a3',
      explanation: "Mozart was a Classical period composer who wrote solo concertos but not concerti grossi, which were primarily a Baroque form."
    },
    // ORDERING/SEQUENCE QUESTIONS (15-16)
    {
      id: 'bcgq15',
      text: "ORDERING: Arrange these historical periods in chronological order of concerto development:",
      options: [
        { id: 'bcgq15a1', text: 'Concerto Grosso → Solo Concerto → Romantic Concerto → Modern Concerto' },
        { id: 'bcgq15a2', text: 'Solo Concerto → Concerto Grosso → Modern Concerto → Romantic Concerto' },
        { id: 'bcgq15a3', text: 'Romantic Concerto → Concerto Grosso → Solo Concerto → Modern Concerto' },
        { id: 'bcgq15a4', text: 'Modern Concerto → Solo Concerto → Concerto Grosso → Romantic Concerto' }
      ],
      correctAnswerId: 'bcgq15a1',
      explanation: "Historical development: Concerto Grosso (Baroque, 1600-1750) → Solo Concerto (Classical, 1750-1820) → Romantic Concerto (1820-1900) → Modern Concerto (1900+)."
    },
    {
      id: 'bcgq16',
      text: "SEQUENCE: In ritornello form, arrange these sections in their typical order:",
      options: [
        { id: 'bcgq16a1', text: 'Ritornello → Episode → Ritornello → Episode → Ritornello' },
        { id: 'bcgq16a2', text: 'Episode → Ritornello → Episode → Ritornello → Episode' },
        { id: 'bcgq16a3', text: 'Ritornello → Ritornello → Episode → Episode → Ritornello' },
        { id: 'bcgq16a4', text: 'Episode → Episode → Ritornello → Ritornello → Episode' }
      ],
      correctAnswerId: 'bcgq16a1',
      explanation: "Ritornello form alternates between the main theme (ritornello) played by tutti and contrasting episodes featuring soloists."
    },
    // MATCHING PAIRS (17-18)
    {
      id: 'bcgq17',
      text: "MATCHING: Which term correctly matches the description 'Sections featuring the concertino soloists in ritornello form'?",
      options: [
        { id: 'bcgq17a1', text: 'Ritornello' },
        { id: 'bcgq17a2', text: 'Episode' },
        { id: 'bcgq17a3', text: 'Cadenza' },
        { id: 'bcgq17a4', text: 'Coda' }
      ],
      correctAnswerId: 'bcgq17a2',
      explanation: "Episodes are the sections in ritornello form where the concertino soloists are featured, contrasting with the tutti ritornello sections."
    },
    {
      id: 'bcgq18',
      text: "MATCHING: Which musical texture correctly pairs with 'Multiple independent melodic lines woven together'?",
      options: [
        { id: 'bcgq18a1', text: 'Homophonic' },
        { id: 'bcgq18a2', text: 'Monophonic' },
        { id: 'bcgq18a3', text: 'Polyphonic' },
        { id: 'bcgq18a4', text: 'Heterophonic' }
      ],
      correctAnswerId: 'bcgq18a3',
      explanation: "Polyphonic texture features multiple independent melodic lines, which is characteristic of Baroque concerto grosso style."
    },
    // SELECT ALL THAT APPLY (19-20)
    {
      id: 'bcgq19',
      text: "SELECT ALL: Which of these are essential elements of the concerto grosso form? (Choose the MOST comprehensive answer)",
      options: [
        { id: 'bcgq19a1', text: 'Only: Contrast between concertino and ripieno' },
        { id: 'bcgq19a2', text: 'Only: Three-movement structure' },
        { id: 'bcgq19a3', text: 'Only: Basso continuo accompaniment' },
        { id: 'bcgq19a4', text: 'All of the above: Concertino/ripieno contrast, three movements, and basso continuo' }
      ],
      correctAnswerId: 'bcgq19a4',
      explanation: "All three elements are essential: the contrast between small and large groups, the typical three-movement structure, and the basso continuo foundation."
    },
    {
      id: 'bcgq20',
      text: "SELECT ALL: Which composers were major contributors to the concerto grosso repertoire? (Choose the COMPLETE set)",
      options: [
        { id: 'bcgq20a1', text: 'Only: Corelli and Vivaldi' },
        { id: 'bcgq20a2', text: 'Only: Handel and Bach' },
        { id: 'bcgq20a3', text: 'Corelli, Vivaldi, and Handel' },
        { id: 'bcgq20a4', text: 'Corelli, Vivaldi, Handel, and Bach' }
      ],
      correctAnswerId: 'bcgq20a4',
      explanation: "All four composers made significant contributions: Corelli established the form, Vivaldi developed it, and Handel and Bach created masterworks in the genre."
    },
    // FILL-IN-THE-BLANK (21-22)
    {
      id: 'bcgq21',
      text: "FILL IN THE BLANK: In a concerto grosso, the _______ provides the harmonic foundation while the _______ creates textural contrast.",
      options: [
        { id: 'bcgq21a1', text: 'ripieno, concertino' },
        { id: 'bcgq21a2', text: 'basso continuo, concertino vs. ripieno alternation' },
        { id: 'bcgq21a3', text: 'concertino, basso continuo' },
        { id: 'bcgq21a4', text: 'ritornello, episode' }
      ],
      correctAnswerId: 'bcgq21a2',
      explanation: "The basso continuo provides harmonic foundation throughout, while the alternation between concertino and ripieno creates the characteristic textural contrasts."
    },
    {
      id: 'bcgq22',
      text: "FILL IN THE BLANK: The typical movement structure of a Baroque concerto grosso is _______ - _______ - _______.",
      options: [
        { id: 'bcgq22a1', text: 'Slow, Fast, Slow' },
        { id: 'bcgq22a2', text: 'Fast, Slow, Fast' },
        { id: 'bcgq22a3', text: 'Fast, Fast, Slow' },
        { id: 'bcgq22a4', text: 'Moderate, Slow, Fast' }
      ],
      correctAnswerId: 'bcgq22a2',
      explanation: "The standard three-movement structure is Fast-Slow-Fast, providing energy, contrast, and a rousing conclusion."
    },
    // CATEGORY SORTING (23-24)
    {
      id: 'bcgq23',
      text: "CATEGORY SORTING: Which grouping correctly categorizes these musical elements by their function?",
      options: [
        { id: 'bcgq23a1', text: 'Structural elements: Ritornello, Episode | Performance forces: Concertino, Ripieno' },
        { id: 'bcgq23a2', text: 'Structural elements: Concertino, Ripieno | Performance forces: Ritornello, Episode' },
        { id: 'bcgq23a3', text: 'Structural elements: Basso continuo, Terraced dynamics | Performance forces: Fast, Slow' },
        { id: 'bcgq23a4', text: 'All elements serve the same function' }
      ],
      correctAnswerId: 'bcgq23a1',
      explanation: "Structural elements (Ritornello, Episode) organize the musical form, while performance forces (Concertino, Ripieno) define the instrumental groups."
    },
    {
      id: 'bcgq24',
      text: "CATEGORY SORTING: Group these characteristics by their musical aspect:",
      options: [
        { id: 'bcgq24a1', text: 'Texture: Polyphonic, Homophonic | Dynamics: Terraced, Gradual' },
        { id: 'bcgq24a2', text: 'Texture: Terraced, Gradual | Dynamics: Polyphonic, Homophonic' },
        { id: 'bcgq24a3', text: 'Texture: Fast, Slow | Dynamics: Major, Minor' },
        { id: 'bcgq24a4', text: 'All characteristics are textural' }
      ],
      correctAnswerId: 'bcgq24a1',
      explanation: "Texture refers to how melodic lines interact (Polyphonic, Homophonic), while dynamics refer to volume changes (Terraced vs. Gradual)."
    },
    // SEQUENCE COMPLETION (25-26)
    {
      id: 'bcgq25',
      text: "SEQUENCE COMPLETION: In the evolution of Baroque instrumental music, what logically follows this pattern: Dance Suite → ?",
      options: [
        { id: 'bcgq25a1', text: 'Concerto Grosso' },
        { id: 'bcgq25a2', text: 'Opera' },
        { id: 'bcgq25a3', text: 'Fugue' },
        { id: 'bcgq25a4', text: 'Chorale' }
      ],
      correctAnswerId: 'bcgq25a1',
      explanation: "The concerto grosso developed as instrumental music evolved from dance suites to more sophisticated forms featuring soloist-ensemble contrasts."
    },
    {
      id: 'bcgq26',
      text: "SEQUENCE COMPLETION: Following the pattern of Baroque formal development, after establishing ritornello form, composers next developed:",
      options: [
        { id: 'bcgq26a1', text: 'Sonata form' },
        { id: 'bcgq26a2', text: 'More complex ritornello structures with modulation' },
        { id: 'bcgq26a3', text: 'Atonal composition' },
        { id: 'bcgq26a4', text: 'Minimalist techniques' }
      ],
      correctAnswerId: 'bcgq26a2',
      explanation: "Within the Baroque period, composers developed more sophisticated ritornello forms with complex modulation schemes before the Classical period introduced sonata form."
    },
    // RATING SCALE (27-28)
    {
      id: 'bcgq27',
      text: "RATING SCALE: How important is the role of improvisation in Baroque concerto grosso performance practice?",
      options: [
        { id: 'bcgq27a1', text: 'Not important - everything was fully written out' },
        { id: 'bcgq27a2', text: 'Somewhat important - occasional ornaments added' },
        { id: 'bcgq27a3', text: 'Very important - continuo realization and ornamentation expected' },
        { id: 'bcgq27a4', text: 'Extremely important - most music was completely improvised' }
      ],
      correctAnswerId: 'bcgq27a3',
      explanation: "Improvisation was very important in Baroque performance: continuo players realized harmonies from figured bass, and soloists added ornaments and embellishments."
    },
    {
      id: 'bcgq28',
      text: "RATING SCALE: How significant was the influence of Italian style on the development of concerto grosso across Europe?",
      options: [
        { id: 'bcgq28a1', text: 'Minimal influence - each country developed independently' },
        { id: 'bcgq28a2', text: 'Moderate influence - some Italian elements adopted' },
        { id: 'bcgq28a3', text: 'Strong influence - Italian models widely imitated' },
        { id: 'bcgq28a4', text: 'Dominant influence - Italian style became the European standard' }
      ],
      correctAnswerId: 'bcgq28a4',
      explanation: "Italian influence was dominant - composers like Corelli and Vivaldi established models that became the European standard, adopted by Handel, Bach, and others."
    },
    // MATRIX ANALYSIS (29)
    {
      id: 'bcgq29',
      text: "MATRIX ANALYSIS: Which combination correctly matches Movement Type with Typical Characteristics in concerto grosso?",
      options: [
        { id: 'bcgq29a1', text: 'First Movement: Slow tempo, Simple texture | Last Movement: Fast tempo, Complex fugal writing' },
        { id: 'bcgq29a2', text: 'First Movement: Fast tempo, Ritornello form | Last Movement: Fast tempo, Dance-like character' },
        { id: 'bcgq29a3', text: 'First Movement: Moderate tempo, Homophonic | Last Movement: Slow tempo, Polyphonic' },
        { id: 'bcgq29a4', text: 'First Movement: Variable tempo, Atonal | Last Movement: Variable tempo, Serial technique' }
      ],
      correctAnswerId: 'bcgq29a2',
      explanation: "First movements are typically fast with ritornello form, while last movements are also fast but often have dance-like characteristics or return to ritornello form."
    },
    // COMPREHENSIVE ANALYSIS (30)
    {
      id: 'bcgq30',
      text: "COMPREHENSIVE ANALYSIS: Which statement best summarizes the historical and musical significance of the Baroque concerto grosso?",
      options: [
        { id: 'bcgq30a1', text: 'It was primarily a technical exercise with little artistic merit' },
        { id: 'bcgq30a2', text: 'It established the principle of soloist-ensemble contrast that influenced all later concerto development and showcased Baroque ideals of textural variety, formal organization, and virtuosic display' },
        { id: 'bcgq30a3', text: 'It was only popular in Italy and had no lasting influence' },
        { id: 'bcgq30a4', text: 'It was identical to earlier Renaissance forms with no innovations' }
      ],
      correctAnswerId: 'bcgq30a2',
      explanation: "The concerto grosso was historically significant for establishing soloist-ensemble contrast principles, embodying key Baroque aesthetic ideals, and laying the foundation for all subsequent concerto development through the Classical, Romantic, and Modern periods."
    }
  ]
};
