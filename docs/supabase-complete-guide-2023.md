# 🚀 Complete Supabase Implementation Guide 2023

**Time Required: 45 minutes**  
**Difficulty: ⭐⭐☆☆☆ (Beginner-friendly)**

---

## 🎯 **Why Supabase for IGCSE Music Study Hub**

### **Current Limitations Without Backend:**
- ❌ Student progress isolated to individual devices
- ❌ No cross-device synchronization of quiz results
- ❌ Teachers lack visibility into student performance
- ❌ Limited data persistence and recovery options
- ❌ No authentication or personalized experiences

### **Benefits With Supabase:**
- ✅ Unified student profiles across all devices
- ✅ Real-time synchronization of progress data
- ✅ Comprehensive teacher dashboards with student analytics
- ✅ Professional database with automatic backups
- ✅ Secure authentication with role-based access control
- ✅ Zero cost for educational projects (free tier)

---

## 📋 **Step 1: Create Supabase Account & Project**

### 1.1 Sign Up
1. Navigate to **https://supabase.com**
2. Click **"Start your project"**
3. Sign up with GitHub (recommended) or email
4. Verify your email if required

### 1.2 Create New Project
1. Click **"New Project"**
2. **Organization**: Select your personal organization
3. **Project Name**: `igcse-music-hub`
4. **Database Password**: Generate a strong password (save it securely!)
5. **Region**: Choose closest to your location
6. **Pricing Plan**: Free Tier
7. Click **"Create new project"**

⏳ **Wait 2-3 minutes** for project initialization

---

## 🗄️ **Step 2: Database Schema Setup**

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

> **IMPORTANT NOTE:** Previous guides included a line `ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret-here';` which causes the "permission denied to set parameter 'app.jwt_secret'" error. This line has been removed as it's not necessary. Supabase automatically handles JWT secrets for you.

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

## 🔐 **Step 3: Authentication Setup**

### 3.1 Configure Auth Settings
1. Go to **"Authentication"** → **"Settings"** in the sidebar
2. Under **"Site URL"**, enter your website URL:
   - For development: `http://localhost:5173`
   - For production: Your actual domain
3. Under **"Redirect URLs"**, add:
   - `http://localhost:5173/login`
   - `http://localhost:5173/signup`
   - `http://localhost:5173/callback`
   - Add your production URLs when ready
4. Click **"Save"**

### 3.2 Configure Email Authentication
1. Go to **"Authentication"** → **"Providers"**
2. Make sure **"Email"** is enabled
3. For development:
   - Toggle **"Confirm email"** to OFF
   - Set **"Secure email change"** to OFF
4. For production:
   - Enable both options for security

### 3.3 (Optional) Set Up OAuth Providers
1. Go to **"Authentication"** → **"Providers"**
2. Configure providers like Google, GitHub, etc.
3. Follow provider-specific instructions for API keys

---

## 🔄 **Step 4: Connect to Your React App**

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
import { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
```

### 4.5 Generate TypeScript Types (Optional but Recommended)
1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Login to Supabase CLI:
```bash
supabase login
```

3. Generate types:
```bash
supabase gen types typescript --project-id your-project-id > lib/database.types.ts
```

---

## 👤 **Step 5: Implement Authentication**

### 5.1 Create Auth Context
Create `contexts/AuthContext.tsx`:

```typescript
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { User } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active sessions and set the user
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  // Sign up with email and password
  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password })
    return { error }
  }

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }

  // Sign out
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
```

### 5.2 Create Login Component
Create `components/LoginForm.tsx`:

```typescript
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    
    try {
      const { error } = await signIn(email, password)
      if (error) throw error
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  )
}
```

### 5.3 Create Protected Route Component
Create `components/ProtectedRoute.tsx`:

```typescript
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  
  if (loading) {
    return <div className="flex justify-center p-8">Loading...</div>
  }
  
  if (!user) {
    return <Navigate to="/login" replace />
  }
  
  return <>{children}</>
}
```

---

## 📊 **Step 6: Implement Data Access**

### 6.1 Create Progress Service
Create `services/progressService.ts`:

```typescript
import { supabase } from '../lib/supabase'

interface QuizResult {
  section: string
  quiz_id: string
  score: number
  total_questions: number
  percentage: number
  time_taken: number
  answers?: any
}

export async function saveQuizResult(result: QuizResult) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User must be logged in to save quiz results')
  }
  
  const { data, error } = await supabase
    .from('progress')
    .upsert({
      user_id: user.id,
      ...result,
      completed_at: new Date().toISOString()
    })
    .select()
  
  if (error) {
    console.error('Error saving quiz result:', error)
    throw error
  }
  
  return data
}

export async function getUserProgress() {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User must be logged in to get progress')
  }
  
  const { data, error } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching user progress:', error)
    throw error
  }
  
  return data
}

export async function getProgressBySection(section: string) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User must be logged in to get progress')
  }
  
  const { data, error } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('section', section)
    .order('completed_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching section progress:', error)
    throw error
  }
  
  return data
}
```

### 6.2 Create User Profile Service
Create `services/userService.ts`:

```typescript
import { supabase } from '../lib/supabase'

interface UserProfile {
  full_name?: string
  nickname?: string
  grade?: string
  profile_image?: string
}

export async function getUserProfile() {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User must be logged in to get profile')
  }
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()
  
  if (error) {
    console.error('Error fetching user profile:', error)
    throw error
  }
  
  return data
}

export async function updateUserProfile(profile: UserProfile) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('User must be logged in to update profile')
  }
  
  const { data, error } = await supabase
    .from('users')
    .update({
      ...profile,
      updated_at: new Date().toISOString()
    })
    .eq('id', user.id)
    .select()
  
  if (error) {
    console.error('Error updating user profile:', error)
    throw error
  }
  
  return data
}
```

---

## 🧪 **Step 7: Test Your Implementation**

### 7.1 Test Authentication
```typescript
// In a component or test file
import { supabase } from './lib/supabase'

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

// Get current user
const { data: { user } } = await supabase.auth.getUser()

// Sign out
await supabase.auth.signOut()
```

### 7.2 Test Database Access
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

## 📱 **Step 8: Advanced Features**

### 8.1 Real-time Updates
Implement real-time updates for collaborative features:

```typescript
// Subscribe to changes in a table
const subscription = supabase
  .channel('public:progress')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'progress' }, 
    (payload) => {
      console.log('Change received!', payload)
      // Update your UI here
    }
  )
  .subscribe()

// Unsubscribe when component unmounts
return () => {
  subscription.unsubscribe()
}
```

### 8.2 Storage for Files
Implement file uploads for assignments or profile images:

```typescript
// Upload a file
const { data, error } = await supabase.storage
  .from('profile-images')
  .upload(`${user.id}/avatar.png`, file)

// Get a public URL
const { data } = supabase.storage
  .from('profile-images')
  .getPublicUrl(`${user.id}/avatar.png`)
```

### 8.3 Teacher Dashboard
Implement a teacher dashboard to view student progress:

```typescript
async function getAllStudentProgress() {
  // Only teachers can access this
  const { data: profile } = await getUserProfile()
  
  if (profile.role !== 'teacher' && profile.role !== 'admin') {
    throw new Error('Only teachers can access student progress')
  }
  
  const { data, error } = await supabase
    .from('progress')
    .select(`
      *,
      users:user_id (full_name, nickname, grade)
    `)
    .order('completed_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching student progress:', error)
    throw error
  }
  
  return data
}
```

---

## 🔒 **Step 9: Security Best Practices**

### 9.1 Secure Environment Variables
- Never commit `.env` files to your repository
- Use `.env.example` to document required variables
- Set up proper environment variables in production

### 9.2 Row Level Security (RLS)
- All tables should have RLS enabled
- Test policies thoroughly with different user roles
- Use `auth.uid()` to restrict access to user's own data

### 9.3 API Security
- Use the `service_role` key only in secure server environments
- Never expose the `service_role` key in client-side code
- Use the `anon` key for client-side applications

---

## 🔄 **Step 10: Backup and Recovery**

### 10.1 Regular Database Backups
1. Go to **"Database"** → **"Backups"** in the sidebar
2. Enable **"Point in Time Recovery"** for production projects
3. Schedule regular backups

### 10.2 GitHub Backup Integration
Create a script to export data to GitHub for additional backup:

```typescript
import { supabase } from './lib/supabase'
import fs from 'fs'

async function backupToGitHub() {
  // Export users (excluding sensitive info)
  const { data: users } = await supabase
    .from('users')
    .select('id, email, full_name, nickname, role, grade, created_at, updated_at')
  
  // Export progress
  const { data: progress } = await supabase
    .from('progress')
    .select('*')
  
  // Export achievements
  const { data: achievements } = await supabase
    .from('achievements')
    .select('*')
  
  // Create backup object
  const backup = {
    timestamp: new Date().toISOString(),
    users,
    progress,
    achievements
  }
  
  // Write to file
  fs.writeFileSync(
    `./backups/backup-${new Date().toISOString().split('T')[0]}.json`,
    JSON.stringify(backup, null, 2)
  )
  
  // You can then commit this file to GitHub using a GitHub Action
}
```

---

## 🎉 **Congratulations!**

You've successfully set up Supabase for your IGCSE Music Study Hub! Your app now has:

- ✅ Secure authentication with role-based access
- ✅ Database with Row Level Security
- ✅ Cross-device synchronization
- ✅ Teacher dashboard capabilities
- ✅ Backup and recovery options

### Next Steps:
1. Implement the UI components for login/signup
2. Connect quiz components to save results to Supabase
3. Create the teacher dashboard
4. Set up automated backups
5. Deploy to production

---

## 🆘 **Troubleshooting**

### Common Issues:

#### "Permission denied to set parameter 'app.jwt_secret'"
- **Solution**: This error occurs when trying to manually set the JWT secret. You don't need to do this - Supabase handles JWT secrets automatically. Simply remove the line `ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret-here';` from your SQL script.

#### "RLS policy failed"
- **Solution**: Make sure you're signed in and the user ID matches the record you're trying to access. Check your RLS policies carefully.

#### "Network request failed"
- **Solution**: Verify your Supabase URL and API keys are correct in your environment variables.

#### "No tables in the database"
- **Solution**: Make sure you've run the SQL script to create tables. Check the SQL Editor history to confirm execution.

#### "Foreign key constraint failed"
- **Solution**: When inserting data, ensure referenced records exist (e.g., user_id must exist in users table before adding to progress table).

---

## 📚 **Additional Resources**

- [Supabase Documentation](https://supabase.com/docs)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [TypeScript Support](https://supabase.com/docs/reference/javascript/typescript-support)
- [GitHub Auth Guide](https://supabase.com/docs/guides/auth/social-login/auth-github)
- [Supabase React Hooks](https://github.com/supabase/supabase/tree/master/packages/supabase-js)
- [Supabase Community Discord](https://discord.supabase.com)