
import * as QuizData from '../services/quizData';
import { glossaryTerms } from '../services/glossaryData';
import * as fs from 'fs';

// --- Types ---

interface QuizOption {
    id: string;
    text: string;
}

interface QuizQuestion {
    id: string;
    text: string;
    options: QuizOption[];
    correctAnswerId: string;
    explanation?: string;
}

interface Quiz {
    title: string;
    questions: QuizQuestion[];
}

interface RPGQuestionColumn {
    type: 'mcq' | 'short' | 'audio' | 'image' | 'listening';
    content: {
        prompt: string;
        choices: string[];
        explanation?: string | null;
        [key: string]: any;
    };
    answer_key: {
        correct: number; // Index of correct answer
    };
    difficulty: number;
    subject_tag: string;
}

// --- Helpers ---

function cleanText(text: string): string {
    return text.replace(/'/g, "''").replace(/\\/g, "\\\\");
}

function mapQuizToRPG(quiz: Quiz, subjectTag: string): RPGQuestionColumn[] {
    return quiz.questions.map(q => {
        const correctIndex = q.options.findIndex(opt => opt.id === q.correctAnswerId);

        if (correctIndex === -1) {
            console.warn(`Warning: Correct answer ID '${q.correctAnswerId}' not found in options for question: "${q.text.substring(0, 30)}..."`);
            return null;
        }

        return {
            type: 'mcq',
            content: {
                prompt: q.text,
                choices: q.options.map(opt => opt.text),
                explanation: q.explanation || null
            },
            answer_key: {
                correct: correctIndex
            },
            difficulty: 1, // Default difficulty
            subject_tag: subjectTag
        };
    }).filter((q): q is RPGQuestionColumn => q !== null);
}

// --- Main Generation ---

const allRpgQuestions: RPGQuestionColumn[] = [];

// 1. Process Syllabus Quizzes (SKIPPED per user request to avoid notation dependency)
// console.log('Processing Syllabus Quizzes...');
// Object.entries(QuizData).forEach(([key, quiz]: [string, any]) => {
//     // Check if it's a valid quiz object (has title and questions array)
//     if (quiz && typeof quiz === 'object' && Array.isArray(quiz.questions)) {
//         let tag = 'general';
//         if (key.includes('aos1')) tag = 'baroque';
//         else if (key.includes('aos2')) tag = 'classical';
//         else if (key.includes('aos3')) tag = 'romantic';
//         else if (key.includes('aos4')) tag = 'music_and_words';
//         else if (key.includes('aos5')) tag = 'dance';
//         else if (key.includes('aos6')) tag = 'small_ensemble';
//         else if (key.includes('aos7')) tag = 'stage_and_screen';
//         else if (key.toLowerCase().includes('commposing')) tag = 'composing';
//         else if (key.toLowerCase().includes('performing')) tag = 'performing';
//         else if (key.toLowerCase().includes('theory')) tag = 'theory';

//         const questions = mapQuizToRPG(quiz as Quiz, tag);
//         console.log(`  - ${key}: ${questions.length} questions (Tag: ${tag})`);
//         allRpgQuestions.push(...questions);
//     }
// });

// 2. Process Glossary Terms (Using existing logic adapted)
console.log('Processing Glossary Terms...');

// Shuffle array helper
function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Get random items from array (excluding certain indices)
function getRandomItems<T>(array: T[], count: number, excludeIndices: number[] = []): T[] {
    const filtered = array.filter((_, i) => !excludeIndices.includes(i));
    return shuffle(filtered).slice(0, count);
}

// Truncate long definitions
function truncateDefinition(def: string, maxLength: number = 120): string {
    if (def.length <= maxLength) return def;
    return def.substring(0, maxLength - 3) + '...';
}

const validGlossaryTerms = glossaryTerms.filter(t => t.definition.length >= 20); // Basic filter

validGlossaryTerms.forEach((term, index) => {
    // 1. Definition Question ("What is [Term]?")
    const wrongAnswersDef = getRandomItems(validGlossaryTerms, 3, [index]);
    const choicesDef = [truncateDefinition(term.definition), ...wrongAnswersDef.map(t => truncateDefinition(t.definition))];
    const shuffledDef = shuffle(choicesDef.map((c, i) => ({ choice: c, isCorrect: i === 0 })));
    const correctIndexDef = shuffledDef.findIndex(c => c.isCorrect);

    allRpgQuestions.push({
        type: 'mcq',
        content: {
            prompt: `What is "${term.term}"?`,
            choices: shuffledDef.map(c => c.choice)
        },
        answer_key: { correct: correctIndexDef },
        difficulty: 1,
        subject_tag: 'glossary'
    });

    // 2. Term Question ("Which term means [Definition]?")
    const wrongAnswersTerm = getRandomItems(validGlossaryTerms, 3, [index]);
    const choicesTerm = [term.term, ...wrongAnswersTerm.map(t => t.term)];
    const shuffledTerm = shuffle(choicesTerm.map((c, i) => ({ choice: c, isCorrect: i === 0 })));
    const correctIndexTerm = shuffledTerm.findIndex(c => c.isCorrect);

    allRpgQuestions.push({
        type: 'mcq',
        content: {
            prompt: `Which term means: "${truncateDefinition(term.definition, 150)}"?`,
            choices: shuffledTerm.map(c => c.choice)
        },
        answer_key: { correct: correctIndexTerm },
        difficulty: 1,
        subject_tag: 'glossary'
    });
});
console.log(`  - Glossary: ${validGlossaryTerms.length * 2} questions generated`);


// --- Generate SQL ---

console.log(`\nTotal Questions to Export: ${allRpgQuestions.length}`);

// Split size (files)
const FILE_SPLIT_SIZE = 400;
const BATCH_SIZE = 50;

let fileCount = 1;
for (let i = 0; i < allRpgQuestions.length; i += FILE_SPLIT_SIZE) {
    const fileBatch = allRpgQuestions.slice(i, i + FILE_SPLIT_SIZE);

    let sqlContent = `
-- Seed RPG Questions (Part ${fileCount})
-- Generated on ${new Date().toISOString()}
-- Contains questions ${i + 1} to ${Math.min(i + FILE_SPLIT_SIZE, allRpgQuestions.length)}
`;

    for (let j = 0; j < fileBatch.length; j += BATCH_SIZE) {
        const subBatch = fileBatch.slice(j, j + BATCH_SIZE);
        const sqlValues = subBatch.map(q => {
            const contentJson = JSON.stringify(q.content).replace(/'/g, "''");
            const answerKeyJson = JSON.stringify(q.answer_key).replace(/'/g, "''");
            return `('${q.type}', '${contentJson}'::jsonb, '${answerKeyJson}'::jsonb, ${q.difficulty}, '${q.subject_tag}', true)`;
        });

        sqlContent += `
INSERT INTO rpg_questions (type, content, answer_key, difficulty, subject_tag, is_active)
VALUES
${sqlValues.join(',\n')};
`;
    }

    const outputPath = `./scripts/rpg_questions_seed_part${fileCount}.sql`;
    fs.writeFileSync(outputPath, sqlContent);
    console.log(`✅ Generated part ${fileCount}: ${outputPath} (${fileBatch.length} questions)`);
    fileCount++;
}

console.log(`\n🎉 All files generated in ./scripts/`);

// --- Generate CSV for Review ---
console.log('\nGenerating CSV for review...');
const csvHeader = 'Type,Prompt,Correct Answer,Choices\n';
const csvRows = allRpgQuestions.map(q => {
    const prompt = `"${q.content.prompt.replace(/"/g, '""')}"`;
    const choices = q.content.choices || [];
    const correctIndex = q.answer_key.correct;
    const correctAnswer = choices[correctIndex] ? `"${choices[correctIndex].replace(/"/g, '""')}"` : '"UNKNOWN"';
    const allChoices = `"${choices.join(' | ').replace(/"/g, '""')}"`;
    return `${q.type},${prompt},${correctAnswer},${allChoices}`;
});

fs.writeFileSync('./scripts/rpg_questions_review.csv', csvHeader + csvRows.join('\n'));
console.log('✅ Generated ./scripts/rpg_questions_review.csv');
