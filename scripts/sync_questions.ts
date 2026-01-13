import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load env from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function syncQuestions() {
    console.log('🚀 Starting RPG Question Sync...');

    const jsonPath = path.resolve(process.cwd(), 'scripts/rpg_questions.json');
    if (!fs.existsSync(jsonPath)) {
        console.error('scripts/rpg_questions.json not found');
        return;
    }

    const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    console.log(`Read ${questions.length} questions from JSON.`);

    // 1. Delete all existing questions as requested
    console.log('🗑️ Deleting existing questions...');
    const { error: deleteError } = await supabase
        .from('rpg_questions')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (deleteError) {
        console.error('Error deleting questions:', deleteError);
        return;
    }

    // 2. Insert new questions in batches
    console.log('📥 Inserting new questions...');
    const batchSize = 100;
    for (let i = 0; i < questions.length; i += batchSize) {
        const batch = questions.slice(i, i + batchSize);
        const { error: insertError } = await supabase
            .from('rpg_questions')
            .insert(batch);

        if (insertError) {
            console.error(`Error inserting batch ${i / batchSize + 1}:`, insertError);
        } else {
            console.log(`✅ Inserted batch ${i / batchSize + 1}/${Math.ceil(questions.length / batchSize)}`);
        }
    }

    // 3. Apply migration for random questions RPC
    console.log('📜 Applying migrations...');
    const migrationPath = path.resolve(process.cwd(), 'supabase/migrations/002_random_questions_rpc.sql');
    if (fs.existsSync(migrationPath)) {
        const migrationSql = fs.readFileSync(migrationPath, 'utf8');
        const { error: migrationError } = await supabase.rpc('exec_sql', { sql_query: migrationSql });

        if (migrationError) {
            console.warn('Migration auto-apply failed (exec_sql RPC might be disabled). This is expected if the RPC is already created or access is restricted. Please confirm manually in the Supabase dashboard if questions don\'t shuffle.');
        } else {
            console.log('✅ Migration applied successfully.');
        }
    }

    console.log('\n✨ Sync Complete!');
}

syncQuestions().catch(console.error);
