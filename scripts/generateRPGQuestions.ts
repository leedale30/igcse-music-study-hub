/**
 * RPG Question Generator
 * Generates MCQ questions from glossary terms for the Battle Arena
 * 
 * Question Types:
 * 1. "What is [term]?" → Pick correct definition
 * 2. "Which term means [definition]?" → Pick correct term
 */

import { glossaryTerms, GlossaryTerm } from '../services/glossaryData';

interface RPGQuestion {
    type: 'mcq';
    content: {
        prompt: string;
        choices: string[];
        questionType: 'definition' | 'term';
    };
    answer_key: number; // 0-indexed position of correct answer
    difficulty: number; // 1-5
    subject_tag: string;
}

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

// Calculate difficulty based on definition complexity
function calculateDifficulty(term: GlossaryTerm): number {
    const defLength = term.definition.length;
    if (defLength < 50) return 1;
    if (defLength < 100) return 2;
    if (defLength < 150) return 3;
    if (defLength < 200) return 4;
    return 5;
}

// Truncate long definitions for choices (keep them readable)
function truncateDefinition(def: string, maxLength: number = 120): string {
    if (def.length <= maxLength) return def;
    return def.substring(0, maxLength - 3) + '...';
}

// Generate "What is [term]?" question
function generateDefinitionQuestion(term: GlossaryTerm, allTerms: GlossaryTerm[]): RPGQuestion {
    const termIndex = allTerms.findIndex(t => t.id === term.id);
    const wrongAnswers = getRandomItems(allTerms, 3, [termIndex]);

    const choices = [
        truncateDefinition(term.definition),
        ...wrongAnswers.map(t => truncateDefinition(t.definition))
    ];

    const shuffled = shuffle(choices.map((c, i) => ({ choice: c, isCorrect: i === 0 })));
    const correctIndex = shuffled.findIndex(c => c.isCorrect);

    return {
        type: 'mcq',
        content: {
            prompt: `What is "${term.term}"?`,
            choices: shuffled.map(c => c.choice),
            questionType: 'definition'
        },
        answer_key: correctIndex,
        difficulty: calculateDifficulty(term),
        subject_tag: 'glossary'
    };
}

// Generate "Which term means...?" question
function generateTermQuestion(term: GlossaryTerm, allTerms: GlossaryTerm[]): RPGQuestion {
    const termIndex = allTerms.findIndex(t => t.id === term.id);
    const wrongAnswers = getRandomItems(allTerms, 3, [termIndex]);

    const choices = [
        term.term,
        ...wrongAnswers.map(t => t.term)
    ];

    const shuffled = shuffle(choices.map((c, i) => ({ choice: c, isCorrect: i === 0 })));
    const correctIndex = shuffled.findIndex(c => c.isCorrect);

    return {
        type: 'mcq',
        content: {
            prompt: `Which term means: "${truncateDefinition(term.definition, 150)}"`,
            choices: shuffled.map(c => c.choice),
            questionType: 'term'
        },
        answer_key: correctIndex,
        difficulty: calculateDifficulty(term),
        subject_tag: 'glossary'
    };
}

// Filter out terms with very short or unhelpful definitions
function isValidTerm(term: GlossaryTerm): boolean {
    // Skip plural forms and very short definitions
    if (term.definition === 'Plural form.' || term.definition === 'Phrase form.') return false;
    if (term.definition === 'Capitalized form.' || term.definition === 'Alternative spelling') return false;
    if (term.definition.length < 20) return false;
    return true;
}

// Main generator
function generateAllQuestions(): RPGQuestion[] {
    const validTerms = glossaryTerms.filter(isValidTerm);
    console.log(`Found ${validTerms.length} valid terms out of ${glossaryTerms.length} total`);

    const questions: RPGQuestion[] = [];

    for (const term of validTerms) {
        // Generate both question types for each term
        questions.push(generateDefinitionQuestion(term, validTerms));
        questions.push(generateTermQuestion(term, validTerms));
    }

    return shuffle(questions);
}

// Generate SQL insert statements
function generateSQL(questions: RPGQuestion[]): string {
    const values = questions.map(q => {
        const content = JSON.stringify(q.content).replace(/'/g, "''");
        return `('${q.type}', '${content}'::jsonb, '${JSON.stringify(q.answer_key)}'::jsonb, ${q.difficulty}, '${q.subject_tag}')`;
    });

    return `INSERT INTO rpg_questions (type, content, answer_key, difficulty, subject_tag) VALUES\n${values.join(',\n')};`;
}

// Show samples
function showSamples(questions: RPGQuestion[], count: number = 10): void {
    console.log('\n========== SAMPLE QUESTIONS ==========\n');

    const samples = questions.slice(0, count);
    samples.forEach((q, i) => {
        console.log(`--- Question ${i + 1} (Difficulty: ${q.difficulty}) ---`);
        console.log(`Q: ${q.content.prompt}`);
        q.content.choices.forEach((choice, j) => {
            const marker = j === q.answer_key ? '✓' : ' ';
            console.log(`  ${marker} ${String.fromCharCode(65 + j)}) ${choice}`);
        });
        console.log('');
    });
}

// Run
const allQuestions = generateAllQuestions();
console.log(`\nGenerated ${allQuestions.length} total questions`);

showSamples(allQuestions, 10);

// Output SQL to file
const sql = generateSQL(allQuestions);
console.log('\n========== SQL PREVIEW (first 500 chars) ==========');
console.log(sql.substring(0, 500) + '...');
console.log(`\nFull SQL has ${sql.length} characters`);

// Write SQL to file
import * as fs from 'fs';
fs.writeFileSync('./scripts/rpg_questions.sql', sql);
console.log('\n✅ SQL saved to scripts/rpg_questions.sql');
