import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
    const { data, error } = await supabase
        .from('progress')
        .select('quiz_id, score, percentage, completed_at, user_id');

    if (error) {
        console.log('Error:', error.message);
        return;
    }

    console.log('Total quiz records in Supabase:', data?.length || 0);

    for (const r of data || []) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('name')
            .eq('id', r.user_id)
            .single();
        console.log(`- ${profile?.name || 'Unknown'}: ${r.quiz_id} = ${r.percentage}% (${r.completed_at})`);
    }
}
check();
