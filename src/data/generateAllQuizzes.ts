import { instrumentsData } from './instrumentsData';
import { generateInstrumentQuiz } from './quizGenerator';

// Generate quizzes for all instruments
export function generateAllQuizzes() {
  const quizzes = new Map();
  
  instrumentsData.forEach(instrument => {
    const quiz = generateInstrumentQuiz(instrument);
    quizzes.set(instrument.id, quiz);
  });
  
  return quizzes;
}

// Export individual quiz files content for file generation
export function generateQuizFileContent(instrumentId: string): string {
  const instrument = instrumentsData.find(inst => inst.id === instrumentId);
  if (!instrument) {
    throw new Error(`Instrument with id ${instrumentId} not found`);
  }
  
  const quiz = generateInstrumentQuiz(instrument);
  
  return `import { Quiz } from '../../types';

export const ${instrumentId.replace(/-/g, '')}Quiz: Quiz = ${JSON.stringify(quiz, null, 2)};
`;
}

// Get all instrument IDs for batch generation
export const allInstrumentIds = instrumentsData.map(instrument => instrument.id);

// Sample usage - generate a few key instruments first
export const priorityInstruments = [
  'piano-grand',
  'violin',
  'flute',
  'trumpet',
  'guitar-classical',
  'drums-kit',
  'saxophone-alto',
  'cello',
  'clarinet',
  'french-horn'
];