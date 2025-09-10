
export interface AnswerOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: AnswerOption[];
  correctAnswerId: string;
  explanation?: string; // Optional explanation for the correct answer
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export interface SyllabusItem {
  id: string;
  title: string;
  title_zh?: string;
  path: string;
  content?: string; 
  content_zh?: string;
  longDescription?: string; 
  longDescription_zh?: string;
  imageUrl?: string; 
  imageAlt?: string; 
  children?: SyllabusItem[];
  isExternal?: boolean; 
  isTerm?: boolean; 
  quiz?: Quiz; // Add optional quiz property
  audioSources?: { url: string; type: string }[];
  audioSources_zh?: { url: string; type: string }[];
  audioCredit?: string;
  audioCredit_zh?: string;
}

export interface ProcessedSyllabusItem extends SyllabusItem {
  level: number;
}