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
    process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function createTeacher() {
    const teacher = {
        email: 'leedale30@hotmail.com',
        password: 'Zappazappa1',
        name: 'Antony Leedale',
        nickname: 'TONY'
    };

    console.log('Creating teacher account...\n');
    console.log(`Creating: ${teacher.name} (${teacher.email})`);

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: teacher.email,
        password: teacher.password,
        email_confirm: true,
        user_metadata: {
            name: teacher.name,
            nickname: teacher.nickname
        }
    });

    if (authError) {
        console.error(`❌ Auth error: ${authError.message}`);
        return;
    }

    console.log(`✓ Auth user created: ${authData.user.id}`);

    // Update profile with teacher role
    const { error: profileError } = await supabase
        .from('profiles')
        .update({
            name: teacher.name,
            nickname: teacher.nickname,
            role: 'teacher'
        })
        .eq('id', authData.user.id);

    if (profileError) {
        console.error(`❌ Profile error: ${profileError.message}`);
    } else {
        console.log(`✓ Profile updated with role: teacher`);
    }

    console.log('\n✅ Done!');
    console.log('\n=== TEACHER LOGIN CREDENTIALS ===');
    console.log(`Name: ${teacher.name} (${teacher.nickname})`);
    console.log(`Email: ${teacher.email}`);
    console.log(`Password: ${teacher.password}`);
}

createTeacher();
