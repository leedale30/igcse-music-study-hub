/**
 * Insert RPG Questions into Supabase
 * Uses the service role key for direct database access
 */

import { createClient } from '@supabase/supabase-js';
import { glossaryTerms, GlossaryTerm } from '../services/glossaryData';

const SUPABASE_URL = 'https://kgbfftdqqhqzbvoimhen.supabase.co';
const SUPABASE_SERVICE_KEY = 'sb_secret_nO5CHD_QA_mSfp57e29z_g_kbQXDBHk';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

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

// Truncate long definitions for choices
function truncateDefinition(def: string, maxLength: number = 120): string {
    if (def.length <= maxLength) return def;
    return def.substring(0, maxLength - 3) + '...';
}

// Filter out terms with very short or unhelpful definitions
function isValidTerm(term: GlossaryTerm): boolean {
    if (term.definition === 'Plural form.' || term.definition === 'Phrase form.') return false;
    if (term.definition === 'Capitalized form.' || term.definition.startsWith('Alternative spelling')) return false;
    if (term.definition.length < 20) return false;
    return true;
}

interface QuestionInsert {
    type: string;
    content: object;
    answer_key: object;
    difficulty: number;
    subject_tag: string;
}

// Generate questions
function generateQuestions(validTerms: GlossaryTerm[]): QuestionInsert[] {
    const questions: QuestionInsert[] = [];

    for (const term of validTerms) {
        const termIndex = validTerms.findIndex(t => t.id === term.id);
        const wrongAnswers = getRandomItems(validTerms, 3, [termIndex]);

        // Type 1: What is [term]?
        const defChoices = [
            truncateDefinition(term.definition),
            ...wrongAnswers.map(t => truncateDefinition(t.definition))
        ];
        const defShuffled = shuffle(defChoices.map((c, i) => ({ choice: c, isCorrect: i === 0 })));
        const defCorrectIndex = defShuffled.findIndex(c => c.isCorrect);

        questions.push({
            type: 'mcq',
            content: {
                prompt: `What is "${term.term}"?`,
                choices: defShuffled.map(c => c.choice),
                questionType: 'definition'
            },
            answer_key: defCorrectIndex,
            difficulty: calculateDifficulty(term),
            subject_tag: 'glossary'
        });

        // Type 2: Which term means...?
        const termChoices = [
            term.term,
            ...wrongAnswers.map(t => t.term)
        ];
        const termShuffled = shuffle(termChoices.map((c, i) => ({ choice: c, isCorrect: i === 0 })));
        const termCorrectIndex = termShuffled.findIndex(c => c.isCorrect);

        questions.push({
            type: 'mcq',
            content: {
                prompt: `Which term means: "${truncateDefinition(term.definition, 150)}"`,
                choices: termShuffled.map(c => c.choice),
                questionType: 'term'
            },
            answer_key: termCorrectIndex,
            difficulty: calculateDifficulty(term),
            subject_tag: 'glossary'
        });
    }

    return shuffle(questions);
}

async function main() {
    console.log('🚀 Starting RPG Question Insert...\n');

    const validTerms = glossaryTerms.filter(isValidTerm);
    console.log(`Found ${validTerms.length} valid terms`);

    const questions = generateQuestions(validTerms);
    console.log(`Generated ${questions.length} questions\n`);

    // Insert in batches of 100
    const batchSize = 100;
    let inserted = 0;
    let errors = 0;

    for (let i = 0; i < questions.length; i += batchSize) {
        const batch = questions.slice(i, i + batchSize);

        const { data, error } = await supabase
            .from('rpg_questions')
            .insert(batch);

        if (error) {
            console.error(`❌ Batch ${Math.floor(i / batchSize) + 1} failed:`, error.message);
            errors += batch.length;
        } else {
            inserted += batch.length;
            console.log(`✅ Inserted batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(questions.length / batchSize)} (${inserted}/${questions.length})`);
        }
    }

    console.log(`\n========== COMPLETE ==========`);
    console.log(`✅ Inserted: ${inserted} questions`);
    if (errors > 0) console.log(`❌ Errors: ${errors} questions`);
}

main().catch(console.error);
