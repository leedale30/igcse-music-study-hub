import { IGCSEComponent, IGCSEGradeBoundaries, IGCSEAssessment } from '../types';

// IGCSE Music Components (2026-2028 Syllabus)
export const IGCSE_COMPONENTS: IGCSEComponent[] = [
  {
    id: 'component1',
    name: 'Component 1: Listening Exam',
    maxMarks: 100,
    weighting: 40
  },
  {
    id: 'component2-solo',
    name: 'Component 2: Performing - Solo',
    maxMarks: 100,
    weighting: 15
  },
  {
    id: 'component2-ensemble',
    name: 'Component 2: Performing - With Others',
    maxMarks: 100,
    weighting: 15
  },
  {
    id: 'component3-notation',
    name: 'Component 3: Composing - Staff Notation',
    maxMarks: 100,
    weighting: 15
  },
  {
    id: 'component3-brief',
    name: 'Component 3: Composing - Candidate-defined Brief',
    maxMarks: 100,
    weighting: 15
  }
];

// IGCSE Grade Boundaries (typical percentages)
export const IGCSE_GRADE_BOUNDARIES: IGCSEGradeBoundaries = {
  astar: 90,
  a: 80,
  b: 70,
  c: 60,
  d: 50,
  e: 40,
  f: 30,
  g: 20
  // U is anything below 20%
};

/**
 * Calculate IGCSE grade from percentage
 */
export const calculateIGCSEGrade = (percentage: number): string => {
  if (percentage >= IGCSE_GRADE_BOUNDARIES.astar) return 'A*';
  if (percentage >= IGCSE_GRADE_BOUNDARIES.a) return 'A';
  if (percentage >= IGCSE_GRADE_BOUNDARIES.b) return 'B';
  if (percentage >= IGCSE_GRADE_BOUNDARIES.c) return 'C';
  if (percentage >= IGCSE_GRADE_BOUNDARIES.d) return 'D';
  if (percentage >= IGCSE_GRADE_BOUNDARIES.e) return 'E';
  if (percentage >= IGCSE_GRADE_BOUNDARIES.f) return 'F';
  if (percentage >= IGCSE_GRADE_BOUNDARIES.g) return 'G';
  return 'U';
};

/**
 * Calculate overall IGCSE grade from component assessments
 */
export const calculateOverallIGCSEGrade = (assessments: IGCSEAssessment[]): { grade: string; percentage: number } => {
  if (assessments.length === 0) {
    return { grade: 'U', percentage: 0 };
  }

  let totalWeightedMarks = 0;
  let totalWeighting = 0;

  // Calculate weighted average
  assessments.forEach(assessment => {
    const component = IGCSE_COMPONENTS.find(c => c.id === assessment.componentId);
    if (component) {
      const weightedMark = assessment.percentage * (component.weighting / 100);
      totalWeightedMarks += weightedMark;
      totalWeighting += component.weighting;
    }
  });

  // If not all components are assessed, calculate based on available components
  const overallPercentage = totalWeighting > 0 ? (totalWeightedMarks / totalWeighting) * 100 : 0;
  const grade = calculateIGCSEGrade(overallPercentage);

  return { grade, percentage: overallPercentage };
};

/**
 * Get grade color for display
 */
export const getGradeColor = (grade: string): string => {
  switch (grade) {
    case 'A*':
    case 'A':
      return 'text-green-600 dark:text-green-400';
    case 'B':
    case 'C':
      return 'text-blue-600 dark:text-blue-400';
    case 'D':
    case 'E':
      return 'text-yellow-600 dark:text-yellow-400';
    case 'F':
    case 'G':
      return 'text-orange-600 dark:text-orange-400';
    case 'U':
      return 'text-red-600 dark:text-red-400';
    default:
      return 'text-slate-600 dark:text-slate-400';
  }
};

/**
 * Get grade background color for badges
 */
export const getGradeBadgeColor = (grade: string): string => {
  switch (grade) {
    case 'A*':
    case 'A':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'B':
    case 'C':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    case 'D':
    case 'E':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'F':
    case 'G':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
    case 'U':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    default:
      return 'bg-slate-100 text-slate-800 dark:bg-slate-900/20 dark:text-slate-400';
  }
};

/**
 * Validate assessment marks
 */
export const validateAssessmentMarks = (marks: number, maxMarks: number): boolean => {
  return marks >= 0 && marks <= maxMarks && !isNaN(marks);
};

/**
 * Calculate percentage from marks
 */
export const calculatePercentage = (marks: number, maxMarks: number): number => {
  if (maxMarks === 0) return 0;
  return Math.round((marks / maxMarks) * 100 * 100) / 100; // Round to 2 decimal places
};