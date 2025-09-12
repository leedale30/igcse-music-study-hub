import { z } from 'zod';

// Quiz validation schemas
export const answerOptionSchema = z.object({
  id: z.string().min(1, 'Answer option ID is required'),
  text: z.string().min(1, 'Answer option text is required')
});

export const questionSchema = z.object({
  id: z.string().min(1, 'Question ID is required'),
  text: z.string().min(1, 'Question text is required'),
  options: z.array(answerOptionSchema).min(2, 'At least 2 answer options are required'),
  correctAnswerId: z.string().min(1, 'Correct answer ID is required'),
  explanation: z.string().optional()
});

export const quizSchema = z.object({
  title: z.string().min(1, 'Quiz title is required'),
  questions: z.array(questionSchema).min(1, 'At least 1 question is required')
});

// Quiz submission validation
export const quizSubmissionSchema = z.object({
  studentName: z.string()
    .min(2, 'Student name must be at least 2 characters')
    .max(50, 'Student name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Student name can only contain letters, spaces, hyphens, and apostrophes'),
  selectedAnswers: z.record(z.string(), z.string()),
  quizTitle: z.string().min(1, 'Quiz title is required'),
  score: z.number().min(0).max(100),
  totalQuestions: z.number().min(1)
});

// Audio player validation
export const audioSourceSchema = z.object({
  url: z.string().min(1, 'Audio URL is required').refine(
    (url) => {
      // Allow relative paths (starting with /) or full URLs
      return url.startsWith('/') || /^https?:\/\/.+/.test(url);
    },
    { message: 'Invalid audio URL - must be a relative path or valid URL' }
  ),
  type: z.string().min(1, 'Audio type is required')
});

export const audioPlayerSchema = z.object({
  sources: z.array(audioSourceSchema).min(1, 'At least one audio source is required'),
  credit: z.string().optional()
});

// Language context validation
export const languageSchema = z.enum(['en', 'en-zh']);

// Syllabus item validation
export const syllabusItemSchema = z.object({
  id: z.string().min(1, 'Syllabus item ID is required'),
  title: z.string().min(1, 'Title is required'),
  title_zh: z.string().optional(),
  path: z.string().min(1, 'Path is required'),
  content: z.string().optional(),
  content_zh: z.string().optional(),
  longDescription: z.string().optional(),
  longDescription_zh: z.string().optional(),
  imageUrl: z.string().url().optional(),
  imageAlt: z.string().optional(),
  isExternal: z.boolean().optional(),
  isTerm: z.boolean().optional(),
  quiz: quizSchema.optional(),
  audioSources: z.array(audioSourceSchema).optional(),
  audioSources_zh: z.array(audioSourceSchema).optional(),
  audioCredit: z.string().optional(),
  audioCredit_zh: z.string().optional()
});

// Validation helper functions
export function validateQuizSubmission(data: unknown) {
  try {
    return {
      success: true,
      data: quizSubmissionSchema.parse(data),
      error: null
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        error: error.issues.map(err => `${err.path.join('.')}: ${err.message}`).join(', ')
      };
    }
    return {
      success: false,
      data: null,
      error: 'Unknown validation error'
    };
  }
}

export function validateAudioSources(data: unknown) {
  try {
    return {
      success: true,
      data: z.array(audioSourceSchema).parse(data),
      error: null
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        error: error.issues.map(err => `${err.path.join('.')}: ${err.message}`).join(', ')
      };
    }
    return {
      success: false,
      data: null,
      error: 'Unknown validation error'
    };
  }
}

export function validateLanguage(data: unknown) {
  try {
    return {
      success: true,
      data: languageSchema.parse(data),
      error: null
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        error: error.issues[0]?.message || 'Invalid language'
      };
    }
    return {
      success: false,
      data: null,
      error: 'Unknown validation error'
    };
  }
}

// Error message helpers
export function getValidationErrorMessage(error: z.ZodError): string {
  const firstError = error.issues[0];
  if (!firstError) return 'Validation failed';
  
  const path = firstError.path.length > 0 ? `${firstError.path.join('.')}: ` : '';
  return `${path}${firstError.message}`;
}

export function formatValidationErrors(error: z.ZodError): string[] {
  return error.issues.map(err => {
    const path = err.path.length > 0 ? `${err.path.join('.')}: ` : '';
    return `${path}${err.message}`;
  });
}