import { Quiz } from '../../../types';
import { baroqueIntroductionQuiz } from './introduction';
import { vivaldiQuiz, vivaldiSpringMvt1Quiz } from './vivaldi';
import { handelConcertoGrossoQuiz } from './handel';
import { ritornelloFormQuiz } from './key_features/ritornelloForm';
import { baroqueHarmonyQuiz } from './key_features/harmony';
import { baroqueConcertoTermQuiz } from './key_features/concerto';
import { bassoContinuoTermQuiz } from './key_features/bassoContinuo';
import { terracedDynamicsTermQuiz } from './key_features/terracedDynamics';

// The final exam is composed of subsets of questions from other quizzes in this Area of Study.
// This file programmatically combines them to avoid data duplication and ensure maintainability.

// Question counts from source quizzes:
// - baroqueIntroductionQuiz: 10 of 30
// - vivaldiQuiz: 20 of 20
// - vivaldiSpringMvt1Quiz: 20 of 20
// - handelConcertoGrossoQuiz: 10 of 10
// - ritornelloFormQuiz: 10 of 50
// - baroqueHarmonyQuiz: 10 of 10
// - baroqueConcertoTermQuiz: 10 of 10
// - bassoContinuoTermQuiz: 5 of 10
// - terracedDynamicsTermQuiz: 5 of 10
// Total: 100 questions

const combinedQuestions = [
  ...baroqueIntroductionQuiz.questions.slice(0, 10),
  ...vivaldiQuiz.questions,
  ...vivaldiSpringMvt1Quiz.questions,
  ...handelConcertoGrossoQuiz.questions,
  ...ritornelloFormQuiz.questions.slice(0, 10),
  ...baroqueHarmonyQuiz.questions,
  ...baroqueConcertoTermQuiz.questions,
  ...bassoContinuoTermQuiz.questions.slice(0, 5),
  ...terracedDynamicsTermQuiz.questions.slice(0, 5),
].map((q, index) => ({
  ...q,
  // Remap IDs to be unique and sequential for the final exam context.
  id: `final-q${index + 1}`,
}));

export const aos1FinalQuiz: Quiz = {
  title: "Area of Study 1: Baroque Music Final Exam",
  questions: combinedQuestions,
};
