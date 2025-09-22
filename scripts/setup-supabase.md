# 🚀 Quick Fix for Failing Supabase Tests

Your tests are failing because the required database tables and storage buckets don't exist in your Supabase project yet. Here's how to fix it:

## 🔧 Quick Setup (5 minutes)

### Step 1: Set up Database Tables

1. **Open your Supabase dashboard** at https://supabase.com
2. **Go to SQL Editor** (left sidebar)
3. **Click "New query"**
4. **Copy and paste** the entire contents of `scripts/setup-supabase-infrastructure.sql`
5. **Click "Run"** - you should see "Success. No rows returned"

### Step 2: Create Storage Bucket

**Option A: Automatic (Recommended)**
```bash
# Install dependencies if needed
npm install dotenv

# Run the bucket creation script
node scripts/create-storage-bucket.js
```

**Option B: Manual**
1. In your Supabase dashboard, go to **Storage**
2. Click **"Create a new bucket"**
3. **Bucket name**: `test-files`
4. **Public bucket**: ✅ YES
5. Click **"Create bucket"**

### Step 3: Verify Setup

1. **Start your dev server**: `npm run dev`
2. **Navigate to**: http://localhost:5173/test (Supabase Test Page)
3. **Click "Run All Tests"**
4. **Expected result**: All 6 tests should now pass! ✅

## 🧪 What This Fixes

### Before Setup:
- ❌ Progress Service test fails (missing `progress` table)
- ❌ Storage Service test fails (missing `test-files` bucket)
- ✅ 3 tests pass (Connection, Auth, Realtime)

### After Setup:
- ✅ Progress Service test passes (can save quiz progress)
- ✅ Storage Service test passes (can upload/download files)
- ✅ All 6 tests pass!

## 🔍 What Gets Created

### Database Tables:
- `users` - User accounts and profiles
- `progress` - Quiz scores and learning progress
- `achievements` - Badges and milestones
- `study_sessions` - Time tracking

### Storage:
- `test-files` bucket - For file upload/download testing

### Security:
- Row Level Security (RLS) policies
- User authentication and authorization
- Proper database indexes for performance

## 🆘 Troubleshooting

### "Cannot connect to Supabase"
- Check your `.env.local` file has the correct Supabase URL and keys
- Restart your dev server: `npm run dev`

### "Bucket creation failed"
- Use the manual method (Option B above)
- Check your Supabase project has storage enabled

### "Progress test still failing"
- Verify the SQL script ran successfully
- Check the `progress` table exists in your Supabase dashboard

### "Permission denied"
- Make sure you're using the correct Supabase keys
- Check that RLS policies were created properly

## ✅ Success Indicators

When everything is working correctly:
- **Supabase Connection**: ✅ Success
- **Authentication**: ✅ Success  
- **Progress Service**: ✅ Success
- **Realtime Service**: ✅ Success
- **Storage Service**: ✅ Success

**Total: 6/6 tests passing** 🎉

---

*This setup creates the backend infrastructure needed for your IGCSE Music Study Hub to work across devices with real-time synchronization.*