# Supabase + GitHub Setup Guide - SUPER EASY! 🚀

## ⏱️ **Setup Time: 30 Minutes Total**

**Difficulty Level: ⭐⭐☆☆☆ (Beginner-Friendly)**

This guide will walk you through setting up Supabase + GitHub backups in just 30 minutes. No complex configuration needed!

## 📋 **What You'll Get**
- ✅ Free PostgreSQL database (500MB)
- ✅ Real-time grade synchronization
- ✅ Secure authentication system
- ✅ Automatic GitHub backups
- ✅ Professional admin dashboard
- ✅ **$0/month cost**

---

## 🎯 **Step 1: Create Supabase Account (5 minutes)**

### 1.1 Sign Up
1. Go to [supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up with GitHub (recommended) or email
4. Verify your email if needed

### 1.2 Create Project
1. Click **"New Project"**
2. Choose your organization (usually your GitHub username)
3. Fill in project details:
   ```
   Name: igcse-music-hub
   Database Password: [Generate strong password - SAVE THIS!]
   Region: Choose closest to your location
   Pricing Plan: Free (selected by default)
   ```
4. Click **"Create new project"**
5. ⏳ Wait 2-3 minutes for database setup

**✅ Done! You now have a free PostgreSQL database.**

---

## 🗄️ **Step 2: Set Up Database Schema (10 minutes)**

### 2.1 Open SQL Editor
1. In your Supabase dashboard, click **"SQL Editor"** in the sidebar
2. Click **"New query"**

### 2.2 Copy & Paste Database Schema
Copy this entire SQL script and paste it into the editor:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user roles enum
CREATE TYPE user_role AS ENUM ('student', 'teacher', 'admin');

-- Users table
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    nickname VARCHAR(50),
    role user_role DEFAULT 'student',
    grade_level VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_login_at TIMESTAMP
);

-- Quiz results table
CREATE TABLE quiz_results (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    quiz_id VARCHAR(255) NOT NULL,
    quiz_title VARCHAR(500) NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0),
    total_questions INTEGER NOT NULL CHECK (total_questions > 0),
    percentage DECIMAL(5,2) NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
    time_spent INTEGER NOT NULL CHECK (time_spent >= 0),
    submitted_at TIMESTAMP DEFAULT NOW()
);

-- Student progress table
CREATE TABLE student_progress (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    total_quizzes_completed INTEGER DEFAULT 0,
    total_pages_visited INTEGER DEFAULT 0,
    average_quiz_score DECIMAL(5,2) DEFAULT 0,
    total_study_time INTEGER DEFAULT 0,
    last_activity_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- User badges table
CREATE TABLE user_badges (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    badge_id VARCHAR(255) NOT NULL,
    badge_name VARCHAR(255) NOT NULL,
    badge_description TEXT,
    badge_icon VARCHAR(50),
    badge_category VARCHAR(100),
    earned_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX idx_quiz_results_submitted_at ON quiz_results(submitted_at);
CREATE INDEX idx_student_progress_user_id ON student_progress(user_id);
CREATE INDEX idx_user_badges_user_id ON user_badges(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

-- Create security policies
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Students can view own quiz results" ON quiz_results
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Students can insert quiz results" ON quiz_results
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Students can view own progress" ON student_progress
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Students can update own progress" ON student_progress
    FOR ALL USING (auth.uid()::text = user_id::text);

CREATE POLICY "Students can view own badges" ON user_badges
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Students can insert own badges" ON user_badges
    FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);
```

### 2.3 Run the Script
1. Click **"Run"** button (or press Ctrl+Enter)
2. ✅ You should see "Success. No rows returned" message
3. Check the **"Tables"** section in sidebar - you should see 4 new tables

**✅ Done! Your database is ready.**

---

## 🔐 **Step 3: Configure Authentication (5 minutes)**

### 3.1 Enable Email Authentication
1. Go to **"Authentication"** → **"Settings"** in Supabase dashboard
2. Under **"Auth Providers"**, make sure **"Email"** is enabled
3. Scroll down to **"Email Templates"**
4. Customize if needed (optional)

### 3.2 Get API Keys
1. Go to **"Settings"** → **"API"**
2. Copy these values (you'll need them soon):
   ```
   Project URL: https://your-project-id.supabase.co
   anon public key: eyJ... (long string)
   service_role key: eyJ... (long string - keep secret!)
   ```

**✅ Done! Authentication is configured.**

---

## 💻 **Step 4: Update Your React App (10 minutes)**

### 4.1 Install Supabase Client
In your project terminal:
```bash
npm install @supabase/supabase-js
```

### 4.2 Create Environment Variables
Create `.env.local` file in your project root:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4.3 Create Supabase Client
Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 4.4 Update Quiz Submission (Replace existing function)
Create `src/services/supabaseService.ts`:
```typescript
import { supabase } from '../lib/supabase'

export interface QuizSubmission {
  quiz_id: string
  quiz_title: string
  score: number
  total_questions: number
  percentage: number
  time_spent: number
}

export async function submitQuiz(quizData: QuizSubmission) {
  const { data: user } = await supabase.auth.getUser()
  
  if (!user.user) {
    throw new Error('User not authenticated')
  }

  // Submit quiz result
  const { data, error } = await supabase
    .from('quiz_results')
    .insert({
      user_id: user.user.id,
      ...quizData
    })
    .select()

  if (error) throw error

  // Update student progress
  await updateStudentProgress(user.user.id)
  
  return data[0]
}

async function updateStudentProgress(userId: string) {
  // Get latest quiz results for average calculation
  const { data: quizzes } = await supabase
    .from('quiz_results')
    .select('quiz_id, percentage, submitted_at')
    .eq('user_id', userId)
    .order('submitted_at', { ascending: false })

  if (!quizzes || quizzes.length === 0) return

  // Calculate average from latest attempts only
  const latestQuizzes = new Map()
  quizzes.forEach(quiz => {
    if (!latestQuizzes.has(quiz.quiz_id)) {
      latestQuizzes.set(quiz.quiz_id, quiz.percentage)
    }
  })

  const averageScore = Array.from(latestQuizzes.values())
    .reduce((sum, score) => sum + score, 0) / latestQuizzes.size

  // Update progress
  await supabase
    .from('student_progress')
    .upsert({
      user_id: userId,
      total_quizzes_completed: latestQuizzes.size,
      average_quiz_score: averageScore,
      last_activity_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
}

// Get student progress
export async function getStudentProgress() {
  const { data: user } = await supabase.auth.getUser()
  if (!user.user) throw new Error('User not authenticated')

  const { data, error } = await supabase
    .from('student_progress')
    .select('*')
    .eq('user_id', user.user.id)
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return data
}

// Real-time subscription for progress updates
export function subscribeToProgress(userId: string, callback: (payload: any) => void) {
  return supabase
    .channel('progress-changes')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'student_progress',
      filter: `user_id=eq.${userId}`
    }, callback)
    .subscribe()
}
```

**✅ Done! Your app now uses Supabase.**

---

## 📁 **Step 5: Set Up GitHub Backups (5 minutes)**

### 5.1 Create Backup Repository
1. Go to GitHub and create a new **private** repository
2. Name it: `igcse-music-backups`
3. Make it **private** (important for student data)
4. Don't initialize with README

### 5.2 Generate GitHub Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click **"Generate new token (classic)"**
3. Name: `IGCSE Backup Token`
4. Select scopes: `repo` (full control)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)

### 5.3 Add Backup Service
Create `src/services/backupService.ts`:
```typescript
import { supabase } from '../lib/supabase'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
const GITHUB_REPO = 'YOUR_USERNAME/igcse-music-backups'

export async function createGitHubBackup() {
  try {
    // Get all data from Supabase
    const { data: users } = await supabase.from('users').select('*')
    const { data: quizResults } = await supabase.from('quiz_results').select('*')
    const { data: progress } = await supabase.from('student_progress').select('*')
    const { data: badges } = await supabase.from('user_badges').select('*')

    const backupData = {
      timestamp: new Date().toISOString(),
      users: users?.length || 0,
      quiz_results: quizResults?.length || 0,
      student_progress: progress?.length || 0,
      user_badges: badges?.length || 0,
      data: {
        users,
        quiz_results: quizResults,
        student_progress: progress,
        user_badges: badges
      }
    }

    // Create filename
    const filename = `backup-${new Date().toISOString().split('T')[0]}.json`
    
    // Upload to GitHub
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/backups/${filename}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Automated backup: ${new Date().toLocaleDateString()}`,
        content: btoa(JSON.stringify(backupData, null, 2))
      })
    })

    if (response.ok) {
      console.log('✅ Backup created successfully')
      return true
    } else {
      console.error('❌ Backup failed:', await response.text())
      return false
    }
  } catch (error) {
    console.error('❌ Backup error:', error)
    return false
  }
}

// Schedule daily backups
export function scheduleBackups() {
  // Backup every 24 hours
  setInterval(createGitHubBackup, 24 * 60 * 60 * 1000)
  
  // Backup on page unload
  window.addEventListener('beforeunload', createGitHubBackup)
}
```

### 5.4 Add Environment Variable
Add to your `.env.local`:
```env
VITE_GITHUB_TOKEN=your-github-token-here
```

**✅ Done! Automatic backups are set up.**

---

## 🧪 **Step 6: Test Everything (5 minutes)**

### 6.1 Test Database Connection
1. Start your development server: `npm run dev`
2. Open browser console (F12)
3. Run this test:
```javascript
// Test Supabase connection
import { supabase } from './src/lib/supabase.js'
supabase.from('users').select('count').then(console.log)
```

### 6.2 Test Authentication
1. Try to sign up a test user
2. Check Supabase dashboard → Authentication → Users
3. You should see the new user

### 6.3 Test Quiz Submission
1. Complete a quiz in your app
2. Check Supabase dashboard → Table Editor → quiz_results
3. You should see the new quiz result

### 6.4 Test Backup
1. Run in console: `createGitHubBackup()`
2. Check your GitHub backup repository
3. You should see a new backup file

**✅ Everything working? You're done!**

---

## 🎉 **Congratulations! You Now Have:**

✅ **Professional Database**: PostgreSQL with 500MB free storage
✅ **Real-time Sync**: Grades update instantly across devices
✅ **Secure Authentication**: Email/password with row-level security
✅ **Automatic Backups**: Daily GitHub backups with version control
✅ **Admin Dashboard**: Supabase dashboard for data management
✅ **Zero Cost**: Completely free for up to 50 students
✅ **Scalable**: Easy upgrade path when you need more

---

## 🔧 **Common Issues & Solutions**

### Issue: "Project URL not found"
**Solution**: Double-check your `.env.local` file and restart dev server

### Issue: "Row Level Security policy violation"
**Solution**: Make sure user is authenticated before database operations

### Issue: "GitHub backup fails"
**Solution**: Check GitHub token permissions and repository name

### Issue: "Database connection error"
**Solution**: Verify Supabase project is active and API keys are correct

---

## 📈 **Next Steps**

1. **Add More Students**: Invite teachers and students to sign up
2. **Customize UI**: Update your app to show real-time data
3. **Monitor Usage**: Check Supabase dashboard for usage stats
4. **Scale Up**: Upgrade to Pro plan ($25/month) when you hit limits

---

## 💡 **Pro Tips**

- **Backup Frequency**: Adjust backup schedule based on usage
- **Data Export**: Use Supabase dashboard to export data anytime
- **Monitoring**: Set up email alerts for database issues
- **Security**: Never commit API keys to Git (use .env files)
- **Testing**: Use Supabase's built-in SQL editor for queries

**Total Setup Time: ~30 minutes**
**Difficulty: ⭐⭐☆☆☆ (Beginner-friendly)**
**Cost: $0/month**

🎵 **Your IGCSE Music Study Hub is now enterprise-ready!** ✨