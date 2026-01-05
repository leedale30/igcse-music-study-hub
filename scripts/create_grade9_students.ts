import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
    console.error('Error: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
    console.log('\nTo get your Service Role Key:');
    console.log('1. Go to Supabase Dashboard > Settings > API');
    console.log('2. Copy the "service_role" key (NOT the anon key)');
    console.log('3. Add to .env.local: SUPABASE_SERVICE_ROLE_KEY=your_key_here\n');
    process.exit(1);
}

// Use service role for admin operations
const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

const grade9Students = [
    { email: 'emily.chan@schoolclass.com', password: 'emily123', name: 'Emily Chan', nickname: 'EMILY' },
    { email: 'christina.wang@schoolclass.com', password: 'christina123', name: 'Christina Wang', nickname: 'CHRISTINA' },
    { email: 'steven.zhang@schoolclass.com', password: 'steven123', name: 'Steven Zhang', nickname: 'STEVEN' },
    { email: 'vengie.guan@schoolclass.com', password: 'vengie123', name: 'Vengie Guan', nickname: 'VENGIE' },
];

async function createStudents() {
    console.log('Creating Grade 9 students...\n');

    for (const student of grade9Students) {
        console.log(`Creating: ${student.name} (${student.email})`);

        // Create auth user
        const { data: authData, error: authError } = await supabase.auth.admin.createUser({
            email: student.email,
            password: student.password,
            email_confirm: true, // Auto-confirm email
            user_metadata: {
                name: student.name,
                nickname: student.nickname
            }
        });

        if (authError) {
            console.error(`  ❌ Auth error: ${authError.message}`);
            continue;
        }

        console.log(`  ✓ Auth user created: ${authData.user.id}`);

        // Update profile with nickname and group
        const { error: profileError } = await supabase
            .from('profiles')
            .update({
                name: student.name,
                nickname: student.nickname,
                group_name: 'Grade 9',
                role: 'student'
            })
            .eq('id', authData.user.id);

        if (profileError) {
            console.error(`  ❌ Profile error: ${profileError.message}`);
        } else {
            console.log(`  ✓ Profile updated with nickname: ${student.nickname}`);
        }
    }

    console.log('\n✅ Done!');
}

createStudents();
