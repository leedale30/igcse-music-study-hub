import { Quiz } from '../../types';

// Dynamic quiz loader that attempts to load quiz for any instrument
export const loadQuizForInstrument = async (instrumentId: string): Promise<Quiz | null> => {
  try {
    // Convert instrument ID to variable name (remove hyphens and special chars)
    const variableName = instrumentId.replace(/-/g, '').replace(/[^a-zA-Z0-9]/g, '');
    
    // Try to dynamically import the quiz file
    const quizModule = await import(`../data/${instrumentId}Quiz.ts`);
    
    // The quiz should be exported with the pattern: {variableName}Quiz
    const quiz = quizModule[`${variableName}Quiz`];
    
    if (quiz) {
      return quiz;
    }
    
    // If not found with that pattern, try other common patterns
    const possibleExports = Object.keys(quizModule);
    for (const exportName of possibleExports) {
      if (exportName.toLowerCase().includes('quiz')) {
        return quizModule[exportName];
      }
    }
    
    return null;
  } catch (error) {
    console.warn(`Quiz not found for instrument: ${instrumentId}`, error);
    return null;
  }
};

// Generate a basic quiz if no specific quiz file exists
export const generateBasicQuiz = (instrumentData: any): Quiz => {
  const { id, name, family } = instrumentData;
  
  return {
    title: `${name} Basic Quiz`,
    questions: [
      {
        id: `${id}_basic_q1`,
        text: `What instrument family does the ${name.toLowerCase()} belong to?`,
        options: [
          { id: `${id}_basic_q1_a1`, text: 'Brass' },
          { id: `${id}_basic_q1_a2`, text: 'Woodwinds' },
          { id: `${id}_basic_q1_a3`, text: 'Strings' },
          { id: `${id}_basic_q1_a4`, text: 'Percussion' }
        ],
        correctAnswerId: `${id}_basic_q1_a${family === 'Brass' ? '1' : family === 'Woodwinds' ? '2' : family === 'Strings' ? '3' : '4'}`,
        explanation: `The ${name.toLowerCase()} belongs to the ${family ? family.toLowerCase() : 'unknown'} family.`
      },
      {
        id: `${id}_basic_q2`,
        text: `The ${name} is classified as which type of instrument?`,
        options: [
          { id: `${id}_basic_q2_a1`, text: 'A modern electronic instrument' },
          { id: `${id}_basic_q2_a2`, text: `A ${family ? family.toLowerCase() : 'traditional'} instrument` },
          { id: `${id}_basic_q2_a3`, text: 'A percussion-only instrument' },
          { id: `${id}_basic_q2_a4`, text: 'A vocal technique' }
        ],
        correctAnswerId: `${id}_basic_q2_a2`,
        explanation: `The ${name} is classified as a ${family ? family.toLowerCase() : 'traditional'} instrument.`
      }
    ]
  };
};