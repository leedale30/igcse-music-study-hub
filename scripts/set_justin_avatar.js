
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing API keys in .env.local');
    process.exit(1);
}

// Initialize Supabase with Service Role Key (Admin Access)
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const IMAGE_PATH = '/Users/antonyleedale/.gemini/antigravity/brain/a1292640-0a18-4d2a-9ff7-5a894e36aa24/uploaded_image_1768295369531.png';
const TARGET_NAME = 'Justin';

async function setAvatar() {
    console.log(`🔍 Looking for user "${TARGET_NAME}"...`);

    // 1. Find the user profile
    const { data: users, error: userError } = await supabase
        .from('profiles')
        .select('id, name, nickname')
        .ilike('name', `%${TARGET_NAME}%`)
        .limit(1);

    if (userError) {
        console.error('❌ Error finding user:', userError.message);
        return;
    }

    if (!users || users.length === 0) {
        console.error(`❌ User "${TARGET_NAME}" not found.`);
        // Try nickname
        const { data: nickUsers } = await supabase
            .from('profiles')
            .select('id, name, nickname')
            .ilike('nickname', `%${TARGET_NAME}%`)
            .limit(1);

        if (nickUsers && nickUsers.length > 0) {
            console.log(`✅ Found user by nickname: ${nickUsers[0].name} (${nickUsers[0].id})`);
            return processUpload(nickUsers[0]);
        }

        return;
    }

    const user = users[0];
    console.log(`✅ Found user: ${user.name} (${user.id})`);
    await processUpload(user);
}

async function processUpload(user) {
    try {
        // 2. Read the file
        if (!fs.existsSync(IMAGE_PATH)) {
            console.error('❌ Image file not found at:', IMAGE_PATH);
            return;
        }
        const fileBuffer = fs.readFileSync(IMAGE_PATH);

        // 3. Upload to Storage
        const fileName = `${user.id}-admin-upload-${Date.now()}.png`;
        console.log(`fk📤 Uploading avatar...`);

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(fileName, fileBuffer, {
                contentType: 'image/png',
                upsert: true
            });

        if (uploadError) {
            // If bucket doesn't exist, this fails.
            console.error('❌ Upload failed:', uploadError.message);
            if (uploadError.message.includes('bucket not found')) {
                console.error('💡 HINT: Did you run the SQL migration I provided?');
            }
            return;
        }

        // 4. Get Public URL
        const { data: { publicUrl } } = supabase.storage
            .from('avatars')
            .getPublicUrl(fileName);

        console.log(`🔗 Public URL: ${publicUrl}`);

        // 5. Update Profile
        const { error: updateError } = await supabase
            .from('profiles')
            .update({ avatar_url: publicUrl })
            .eq('id', user.id);

        if (updateError) {
            console.error('❌ Failed to update profile:', updateError.message);
        } else {
            console.log(`✅ Successfully updated avatar for ${user.name}!`);
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

setAvatar();
