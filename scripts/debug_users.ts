
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

function loadEnvLocal() {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        if (fs.existsSync(envPath)) {
            const envConfig = dotenv.parse(fs.readFileSync(envPath));
            for (const k in envConfig) {
                process.env[k] = envConfig[k];
            }
        }
    } catch (e) {
        console.error("Error loading .env.local", e);
    }
}

loadEnvLocal();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
// Use SERVICE ROLE KEY to bypass RLS and see everything
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing environment variables! Make sure SUPABASE_SERVICE_ROLE_KEY is in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function listUsers() {
    console.log("Fetching profiles...");

    // Check profiles table
    const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('*');

    if (profileError) {
        console.error("Error fetching profiles:", profileError);
    } else {
        console.log(`Found ${profiles.length} profiles:`);
        profiles.forEach(p => {
            console.log(`- ${p.email} (Role: ${p.role}, Group: ${p.group_name})`);
        });
    }

    // Check auth users (only possible with service role)
    const { data: { users }, error: authError } = await supabase.auth.admin.listUsers();

    if (authError) {
        console.error("Error fetching auth users:", authError);
    } else {
        console.log(`\nFound ${users.length} auth users:`);
        users.forEach(u => {
            console.log(`- ${u.email} (ID: ${u.id})`);
        });
    }
}

listUsers();
