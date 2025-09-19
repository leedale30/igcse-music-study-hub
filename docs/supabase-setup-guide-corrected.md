# 🚀 Corrected Supabase Setup Guide for IGCSE Music Study Hub

**Time Required: 30 minutes**  
**Difficulty: ⭐⭐☆☆☆ (Beginner-friendly)**

---

## 🎯 **Why You Need Supabase**

### **Current Problem:**
- ❌ Student does quiz on school computer → only visible on school computer
- ❌ Student does quiz on home tablet → only visible on tablet
- ❌ Teacher can't see complete student progress
- ❌ No cross-device synchronization

### **With Supabase:**
- ✅ Student login from any device → see all progress
- ✅ Real-time sync across all devices
- ✅ Teachers see complete student dashboard
- ✅ Professional database with automatic backups

---

## 📋 **Step 1: Create Supabase Account (5 minutes)**

### 1.1 Sign Up
1. Go to **https://supabase.com**
2. Click **"Start your project"**
3. Sign up with GitHub (recommended) or email
4. Verify your email if required

### 1.2 Create New Project
1. Click **"New Project"**
2. **Organization**: Select your personal organization
3. **Project Name**: `igcse-music-hub`
4. **Database Password**: Generate a strong password (save it!)
5. **Region**: Choose closest to your location
6. Click **"Create new project"**

⏳ **Wait 2-3 minutes** for project to initialize

---

## 🗄️ **Step 2: Database Setup (10 minutes)**

### 2.1 Access SQL Editor
1. In your Supabase dashboard, click **"SQL Editor"** (left sidebar)
2. Click **"New query"**

### 2.2 Create Database Schema
**Copy and paste this entire SQL script:**

```sql
-- Create users table
CREATE TABLE public.users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    nickname TEXT,
    role TEXT NOT NULL CHECK (role IN ('student', 'teacher', 'admin')),
    grade TEXT,
    profile_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create progress table
CREATE TABLE public.progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    section TEXT NOT NULL,
    quiz_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    time_taken INTEGER, -- in seconds
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    answers JSONB, -- store quiz answers
    UNIQUE(user_id, section, quiz_id)
);

-- Create achievements table
CREATE TABLE public.achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    badge_id TEXT NOT NULL,
    badge_name TEXT NOT NULL,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, badge_id)
);

-- Create study_sessions table
CREATE TABLE public.study_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    page TEXT NOT NULL,
    duration INTEGER NOT NULL, -- in seconds
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ended_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies for users table
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Teachers can view all users" ON public.users
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role IN ('teacher', 'admin')
        )
    );

CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- Create policies for progress table
CREATE POLICY "Users can view own progress" ON public.progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Teachers can view all progress" ON public.progress
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role IN ('teacher', 'admin')
        )
    );

CREATE POLICY "Users can insert own progress" ON public.progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.progress
    FOR UPDATE USING (auth.uid() = user_id);

-- Create policies for achievements table
CREATE POLICY "Users can view own achievements" ON public.achievements
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Teachers can view all achievements" ON public.achievements
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role IN ('teacher', 'admin')
        )
    );

CREATE POLICY "Users can insert own achievements" ON public.achievements
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policies for study_sessions table
CREATE POLICY "Users can view own sessions" ON public.study_sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Teachers can view all sessions" ON public.study_sessions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.users 
            WHERE id = auth.uid() AND role IN ('teacher', 'admin')
        )
    );

CREATE POLICY "Users can insert own sessions" ON public.study_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_progress_user_id ON public.progress(user_id);
CREATE INDEX idx_progress_section ON public.progress(section);
CREATE INDEX idx_achievements_user_id ON public.achievements(user_id);
CREATE INDEX idx_study_sessions_user_id ON public.study_sessions(user_id);
CREATE INDEX idx_users_role ON public.users(role);
CREATE INDEX idx_users_email ON public.users(email);
```

3. Click **"Run"** to execute the script
4. You should see **"Success. No rows returned"**

> **IMPORTANT NOTE:** The previous guide included a line `ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret-here';` which causes the "permission denied to set parameter 'app.jwt_secret'" error. This line has been removed as it's not necessary. Supabase automatically handles JWT secrets for you.

### 2.3 Insert Sample Data (Optional)
**Run this script to add sample users:**

```sql
-- Insert Grade 9 Students
INSERT INTO public.users (email, password_hash, full_name, nickname, role, grade, profile_image) VALUES
('student1@grade9.com', '$2b$10$hashedpassword1', 'Emma Thompson', 'Emma', 'student', '9', '👩‍🎓'),
('student2@grade9.com', '$2b$10$hashedpassword2', 'Liam Chen', 'Liam', 'student', '9', '👨‍🎓'),
('student3@grade9.com', '$2b$10$hashedpassword3', 'Sophia Rodriguez', 'Sophia', 'student', '9', '👩‍🎓');

-- Insert Grade 10 Students
INSERT INTO public.users (email, password_hash, full_name, nickname, role, grade, profile_image) VALUES
('student1@grade10.com', '$2b$10$hashedpassword4', 'Jackson Smith', 'Jackson', 'student', '10', '👨‍🎓'),
('student2@grade10.com', '$2b$10$hashedpassword5', 'Isabella Garcia', 'Bella', 'student', '10', '👩‍🎓');

-- Insert Teachers
INSERT INTO public.users (email, password_hash, full_name, nickname, role, grade, profile_image) VALUES
('teacher1@school.com', '$2b$10$hashedpassword6', 'Mr. David Wilson', 'Mr. Wilson', 'teacher', NULL, '👨‍🏫'),
('teacher2@school.com', '$2b$10$hashedpassword7', 'Ms. Sarah Lee', 'Ms. Lee', 'teacher', NULL, '👩‍🏫');
```

---

## 🔐 **Step 3: Set Up Authentication (5 minutes)**

### 3.1 Configure Auth Settings
1. Go to **"Authentication"** → **"Settings"** in the sidebar
2. Under **"Site URL"**, enter your website URL (for development: `http://localhost:5173`)
3. Under **"Redirect URLs"**, add:
   - `http://localhost:5173/login`
   - `http://localhost:5173/signup`
   - `http://localhost:5173/callback`
4. Click **"Save"**

### 3.2 Enable Email Authentication
1. Go to **"Authentication"** → **"Providers"**
2. Make sure **"Email"** is enabled
3. Toggle **"Confirm email"** to OFF for development (enable for production)

---

## 🔄 **Step 4: Connect to Your App (10 minutes)**

### 4.1 Get API Keys
1. Go to **"Settings"** → **"API"** in the sidebar
2. Copy your **"Project URL"** and **"anon"** key

### 4.2 Create Environment Variables
Create a `.env.local` file in your project root with:

```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 4.3 Install Supabase Client
```bash
npm install @supabase/supabase-js
```

### 4.4 Create Supabase Client
Create a file `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

---

## 🧪 **Step 5: Test Your Setup**

### 5.1 Test Authentication
```typescript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'test@example.com',
  password: 'password123'
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'test@example.com',
  password: 'password123'
})
```

### 5.2 Test Database Access
```typescript
// Get user profile
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', user.id)
  .single()

// Insert quiz result
const { data, error } = await supabase
  .from('progress')
  .insert([
    { 
      user_id: user.id, 
      section: 'aos1_baroque',
      quiz_id: 'quiz1',
      score: 8,
      total_questions: 10,
      percentage: 80.0,
      time_taken: 120
    }
  ])
```

---

## 🎉 **Congratulations!**

You've successfully set up Supabase for your IGCSE Music Study Hub! Your app now has:

- ✅ Secure authentication
- ✅ Database with Row Level Security
- ✅ Cross-device synchronization
- ✅ Teacher dashboard capabilities

### Next Steps:
1. Implement login/signup UI
2. Connect quiz results to Supabase
3. Create teacher dashboard
4. Set up GitHub backup (see separate guide)

---

## 🆘 **Troubleshooting**

### Common Issues:

#### "Permission denied to set parameter 'app.jwt_secret'"
- **Solution**: This error occurs when trying to manually set the JWT secret. You don't need to do this - Supabase handles JWT secrets automatically. Simply remove the line `ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret-here';` from your SQL script.

#### "RLS policy failed"
- **Solution**: Make sure you're signed in and the user ID matches the record you're trying to access. Check your RLS policies carefully.

#### "Network request failed"
- **Solution**: Verify your Supabase URL and API keys are correct in your environment variables.

---

## 📚 **Additional Resources**

- [Supabase Documentation](https://supabase.com/docs)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [TypeScript Support](https://supabase.com/docs/reference/javascript/typescript-support)
- [GitHub Auth Guide](https://supabase.com/docs/guides/auth/social-login/auth-github)