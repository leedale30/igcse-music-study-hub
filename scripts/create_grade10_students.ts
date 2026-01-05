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

const grade10Students = [
    { email: 'ziyao.dong@school.com', password: 'ella123', name: 'Ziyao Dong', nickname: 'ELLA' },
    { email: 'yixin.huang@school.com', password: 'azrael123', name: 'Yixin Huang', nickname: 'AZRAEL' },
    { email: 'yibo.liu@school.com', password: 'jackson123', name: 'Yibo Liu', nickname: 'JACKSON' },
    { email: 'shengchen.ma@school.com', password: 'mark123', name: 'Shengchen Ma', nickname: 'MARK' },
    { email: 'yucan.wang@school.com', password: 'justin123', name: 'Yucan Wang', nickname: 'JUSTIN' },
    { email: 'junhao.xu@school.com', password: 'simon123', name: 'Junhao Xu', nickname: 'SIMON' },
];

async function createStudents() {
    console.log('Creating Grade 10 students...\n');

    for (const student of grade10Students) {
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
                group_name: 'Grade 10',
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
    console.log('\n=== GRADE 10 LOGIN CREDENTIALS ===');
    grade10Students.forEach((s, i) => {
        console.log(`${i + 1}. ${s.name} (${s.nickname})`);
        console.log(`   Email: ${s.email}`);
        console.log(`   Password: ${s.password}\n`);
    });
}

createStudents();
