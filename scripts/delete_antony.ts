import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false }
});

async function deleteUser() {
    const { data: users } = await supabase.auth.admin.listUsers();
    const antonyTest = users?.users.find(u => u.email === 'antony.test@gmail.com');

    if (!antonyTest) {
        console.log('User antony.test@gmail.com not found');
        return;
    }

    console.log('Deleting user:', antonyTest.id, antonyTest.email);
    const { error } = await supabase.auth.admin.deleteUser(antonyTest.id);

    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('✓ User deleted successfully');
    }
}

deleteUser();
