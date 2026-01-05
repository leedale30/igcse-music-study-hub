
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configure dotenv to read from .env.local in the project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function listUsers() {
    console.log('Querying Supabase profiles...');
    const { data, error } = await supabase
        .from('profiles')
        .select('id, email, name, role, created_at, last_login_at');

    if (error) {
        console.error('Error fetching profiles:', error.message);
        return;
    }

    if (!data || data.length === 0) {
        console.log('No users found in the profiles table.');
    } else {
        console.log(`Found ${data.length} user(s):`);
        console.table(data);
    }
}

listUsers();
