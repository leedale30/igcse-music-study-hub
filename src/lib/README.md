# Supabase Integration

## Overview
This directory contains the Supabase client setup for the IGCSE Music Study Hub. The integration allows for user authentication, data storage, and real-time updates.

## Files
- `supabase.ts`: Creates and exports the Supabase client using environment variables

## Usage

### Authentication
Use the AuthService in `src/services/auth.ts` for user management:

```typescript
import { AuthService } from '../services/auth'

// Sign up
await AuthService.signUp('student@example.com', 'password123', {
  fullName: 'Student Name',
  role: 'student'
})

// Sign in
await AuthService.signIn('student@example.com', 'password123')

// Get current user
const user = await AuthService.getCurrentUser()

// Sign out
await AuthService.signOut()
```

### Progress Tracking
Use the ProgressService in `src/services/progressService.ts` to track student progress:

```typescript
import { ProgressService } from '../services/progressService'

// Save quiz results
await ProgressService.saveQuizProgress(
  userId,
  'section_name',
  'quiz_id',
  8, // score
  10, // total questions
  120, // time taken in seconds
  { answers: [...] } // optional answers data
)

// Get user progress
const progress = await ProgressService.getUserProgress(userId)

// Get progress for a specific section
const sectionProgress = await ProgressService.getSectionProgress(userId, 'section_name')
```

## Environment Variables
Make sure these variables are set in your `.env.local` file:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Database Schema
The integration expects the following tables in your Supabase project:

### progress
- id (uuid, primary key)
- user_id (uuid, references auth.users.id)
- section (text)
- quiz_id (text)
- score (integer)
- total_questions (integer)
- percentage (float)
- time_taken (integer, nullable)
- completed_at (timestamp with timezone)
- answers (jsonb, nullable)

### users
- id (uuid, primary key, references auth.users.id)
- full_name (text)
- nickname (text, nullable)
- role (text)
- grade (text, nullable)
- profile_image (text, nullable)
- created_at (timestamp with timezone)
- updated_at (timestamp with timezone)