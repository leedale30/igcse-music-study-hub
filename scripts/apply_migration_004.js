
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing API keys in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigration() {
    const migrationPath = path.resolve(process.cwd(), 'supabase/migrations/004_items_schema.sql');

    if (!fs.existsSync(migrationPath)) {
        console.error('❌ Migration file not found:', migrationPath);
        return;
    }

    const sql = fs.readFileSync(migrationPath, 'utf8');
    console.log('📜 Executing migration: 004_items_schema.sql');

    // We use the 'exec_sql' RPC we created earlier (if it exists)
    // If not, we might fail here. Let's hope it exists or we use the CLI.
    const { error } = await supabase.rpc('exec_sql', { sql_query: sql });

    if (error) {
        console.error('❌ Migration failed:', error.message);
        if (error.message.includes('function "exec_sql" does not exist')) {
            console.log('⚠️  RPC exec_sql missing. Please run this SQL manually in Supabase Dashboard.');
        }
    } else {
        console.log('✅ Migration executed successfully!');
    }
}

runMigration();
