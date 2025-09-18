# IGCSE Music Study Hub - Backend Implementation Guide

## Recommended Backend: Railway + PostgreSQL

### Why Railway for Vercel/GitHub Setup?

✅ **Perfect Vercel Integration**
- Seamless deployment from GitHub repositories
- Automatic HTTPS and custom domains
- Built-in PostgreSQL with connection pooling
- Zero-config deployment pipeline

✅ **Cost-Effective**
- $5/month for PostgreSQL database
- $5/month for backend service
- **Total: $10/month** (vs $55+ for AWS setup)

✅ **Developer Experience**
- Git-based deployments
- Automatic migrations
- Built-in monitoring and logs
- Environment variable management

## Implementation Roadmap

### Phase 1: Backend Setup (Week 1-2)

#### 1. Railway Project Setup
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and create project
railway login
railway init

# Add PostgreSQL database
railway add postgresql
```

#### 2. Backend API Structure
```
backend/
├── src/
│   ├── routes/
│   │   ├── auth.ts          # Authentication endpoints
│   │   ├── users.ts         # User management
│   │   ├── quizzes.ts       # Quiz submission and grading
│   │   ├── progress.ts      # Student progress tracking
│   │   └── backups.ts       # Data backup endpoints
│   ├── middleware/
│   │   ├── auth.ts          # JWT authentication
│   │   ├── validation.ts    # Input validation
│   │   └── rateLimit.ts     # Rate limiting
│   ├── models/
│   │   ├── User.ts          # User data model
│   │   ├── Quiz.ts          # Quiz result model
│   │   └── Progress.ts      # Progress tracking model
│   ├── services/
│   │   ├── authService.ts   # Authentication logic
│   │   ├── quizService.ts   # Quiz processing
│   │   └── backupService.ts # Backup management
│   └── utils/
│       ├── encryption.ts    # Data encryption
│       ├── validation.ts    # Schema validation
│       └── logger.ts        # Logging utility
├── migrations/              # Database migrations
├── package.json
└── railway.json            # Railway configuration
```

#### 3. Database Schema
```sql
-- Users table with enhanced security
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    nickname VARCHAR(50),
    role user_role NOT NULL DEFAULT 'student',
    grade_level VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_login_at TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Quiz results with audit trail
CREATE TABLE quiz_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    quiz_id VARCHAR(255) NOT NULL,
    quiz_title VARCHAR(500) NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0),
    total_questions INTEGER NOT NULL CHECK (total_questions > 0),
    percentage DECIMAL(5,2) NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
    time_spent INTEGER NOT NULL CHECK (time_spent >= 0),
    encrypted_answers TEXT, -- Encrypted student responses
    submitted_at TIMESTAMP DEFAULT NOW(),
    ip_address INET,
    user_agent TEXT
);

-- Student progress tracking
CREATE TABLE student_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    total_quizzes_completed INTEGER DEFAULT 0,
    total_pages_visited INTEGER DEFAULT 0,
    average_quiz_score DECIMAL(5,2) DEFAULT 0,
    total_study_time INTEGER DEFAULT 0, -- in seconds
    last_activity_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Page progress tracking
CREATE TABLE page_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    page_id VARCHAR(255) NOT NULL,
    page_title VARCHAR(500) NOT NULL,
    time_spent INTEGER NOT NULL,
    completed BOOLEAN DEFAULT false,
    visited_at TIMESTAMP DEFAULT NOW()
);

-- Badges and achievements
CREATE TABLE user_badges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    badge_id VARCHAR(255) NOT NULL,
    badge_name VARCHAR(255) NOT NULL,
    badge_description TEXT,
    badge_icon VARCHAR(50),
    badge_category VARCHAR(100),
    earned_at TIMESTAMP DEFAULT NOW()
);

-- IGCSE assessments
CREATE TABLE igcse_assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    assessment_type VARCHAR(100) NOT NULL,
    component VARCHAR(100),
    grade VARCHAR(10),
    percentage DECIMAL(5,2),
    feedback TEXT,
    assessed_by UUID REFERENCES users(id),
    assessed_at TIMESTAMP DEFAULT NOW()
);

-- Data backups log
CREATE TABLE backup_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    backup_type VARCHAR(50) NOT NULL, -- 'user', 'system', 'automated'
    user_id UUID REFERENCES users(id), -- NULL for system backups
    backup_size BIGINT,
    backup_location TEXT,
    status VARCHAR(20) DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP
);

-- Audit trail for all data changes
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    table_name VARCHAR(100) NOT NULL,
    record_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX idx_quiz_results_submitted_at ON quiz_results(submitted_at);
CREATE INDEX idx_student_progress_user_id ON student_progress(user_id);
CREATE INDEX idx_page_progress_user_id ON page_progress(user_id);
CREATE INDEX idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
```

### Phase 2: API Implementation (Week 3-4)

#### Authentication Service
```typescript
// src/services/authService.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  static generateTokens(userId: string, role: string) {
    const accessToken = jwt.sign(
      { userId, role },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );
    
    const refreshToken = jwt.sign(
      { userId },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: '7d' }
    );
    
    return { accessToken, refreshToken };
  }

  static async login(credentials: unknown) {
    const { email, password } = LoginSchema.parse(credentials);
    
    // Find user and verify password
    const user = await db.user.findUnique({ where: { email } });
    if (!user || !await this.verifyPassword(password, user.password_hash)) {
      throw new Error('Invalid credentials');
    }
    
    // Update last login
    await db.user.update({
      where: { id: user.id },
      data: { last_login_at: new Date() }
    });
    
    const tokens = this.generateTokens(user.id, user.role);
    return { user: { ...user, password_hash: undefined }, ...tokens };
  }
}
```

#### Quiz Service with Backup Integration
```typescript
// src/services/quizService.ts
import { z } from 'zod';
import { BackupService } from './backupService';

const QuizSubmissionSchema = z.object({
  quizId: z.string(),
  quizTitle: z.string(),
  score: z.number().min(0),
  totalQuestions: z.number().min(1),
  percentage: z.number().min(0).max(100),
  timeSpent: z.number().min(0),
  answers: z.array(z.string())
});

export class QuizService {
  static async submitQuiz(userId: string, submission: unknown, ipAddress: string, userAgent: string) {
    const validatedSubmission = QuizSubmissionSchema.parse(submission);
    
    // Encrypt answers for privacy
    const encryptedAnswers = await this.encryptAnswers(validatedSubmission.answers);
    
    // Save quiz result
    const quizResult = await db.quiz_result.create({
      data: {
        user_id: userId,
        quiz_id: validatedSubmission.quizId,
        quiz_title: validatedSubmission.quizTitle,
        score: validatedSubmission.score,
        total_questions: validatedSubmission.totalQuestions,
        percentage: validatedSubmission.percentage,
        time_spent: validatedSubmission.timeSpent,
        encrypted_answers: encryptedAnswers,
        ip_address: ipAddress,
        user_agent: userAgent
      }
    });
    
    // Update student progress
    await this.updateStudentProgress(userId);
    
    // Create automatic backup after quiz submission
    await BackupService.createUserBackup(userId, 'quiz_completion');
    
    // Log audit trail
    await this.logAuditTrail(userId, 'quiz_submitted', 'quiz_results', quizResult.id);
    
    return quizResult;
  }
  
  private static async updateStudentProgress(userId: string) {
    // Recalculate average score using latest attempts only
    const latestQuizzes = await db.$queryRaw`
      SELECT DISTINCT ON (quiz_id) quiz_id, percentage
      FROM quiz_results 
      WHERE user_id = ${userId}
      ORDER BY quiz_id, submitted_at DESC
    `;
    
    const averageScore = latestQuizzes.length > 0 
      ? latestQuizzes.reduce((sum, quiz) => sum + quiz.percentage, 0) / latestQuizzes.length
      : 0;
    
    await db.student_progress.upsert({
      where: { user_id: userId },
      update: {
        total_quizzes_completed: latestQuizzes.length,
        average_quiz_score: averageScore,
        last_activity_at: new Date(),
        updated_at: new Date()
      },
      create: {
        user_id: userId,
        total_quizzes_completed: latestQuizzes.length,
        average_quiz_score: averageScore
      }
    });
  }
}
```

#### Backup Service Implementation
```typescript
// src/services/backupService.ts
import AWS from 'aws-sdk';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

export class BackupService {
  private static readonly ENCRYPTION_KEY = process.env.BACKUP_ENCRYPTION_KEY!;
  private static readonly BUCKET_NAME = process.env.S3_BACKUP_BUCKET!;
  
  static async createUserBackup(userId: string, trigger: string) {
    try {
      // Gather all user data
      const userData = await this.gatherUserData(userId);
      
      // Encrypt backup data
      const encryptedData = this.encryptData(JSON.stringify(userData));
      
      // Generate backup filename
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `user-backups/${userId}/${timestamp}-${trigger}.json.enc`;
      
      // Upload to S3
      await s3.upload({
        Bucket: this.BUCKET_NAME,
        Key: filename,
        Body: encryptedData,
        ServerSideEncryption: 'AES256'
      }).promise();
      
      // Log backup creation
      await db.backup_log.create({
        data: {
          backup_type: 'user',
          user_id: userId,
          backup_size: encryptedData.length,
          backup_location: filename,
          expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
        }
      });
      
      console.log(`✅ User backup created: ${filename}`);
      return filename;
    } catch (error) {
      console.error(`❌ Backup failed for user ${userId}:`, error);
      throw error;
    }
  }
  
  static async createSystemBackup() {
    try {
      // Export all critical data
      const systemData = {
        users: await db.user.findMany({ select: { password_hash: false } }),
        quiz_results: await db.quiz_result.findMany(),
        student_progress: await db.student_progress.findMany(),
        user_badges: await db.user_badge.findMany(),
        igcse_assessments: await db.igcse_assessment.findMany(),
        backup_timestamp: new Date(),
        backup_version: '2.0.0'
      };
      
      // Encrypt and upload system backup
      const encryptedData = this.encryptData(JSON.stringify(systemData));
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `system-backups/${timestamp}-full-system.json.enc`;
      
      await s3.upload({
        Bucket: this.BUCKET_NAME,
        Key: filename,
        Body: encryptedData,
        ServerSideEncryption: 'AES256'
      }).promise();
      
      // Log system backup
      await db.backup_log.create({
        data: {
          backup_type: 'system',
          backup_size: encryptedData.length,
          backup_location: filename,
          expires_at: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) // 90 days
        }
      });
      
      console.log(`✅ System backup created: ${filename}`);
      return filename;
    } catch (error) {
      console.error('❌ System backup failed:', error);
      throw error;
    }
  }
  
  private static async gatherUserData(userId: string) {
    return {
      user: await db.user.findUnique({ 
        where: { id: userId },
        select: { password_hash: false } // Exclude password
      }),
      quiz_results: await db.quiz_result.findMany({ where: { user_id: userId } }),
      progress: await db.student_progress.findUnique({ where: { user_id: userId } }),
      page_progress: await db.page_progress.findMany({ where: { user_id: userId } }),
      badges: await db.user_badge.findMany({ where: { user_id: userId } }),
      assessments: await db.igcse_assessment.findMany({ where: { user_id: userId } })
    };
  }
  
  private static encryptData(data: string): Buffer {
    const iv = randomBytes(16);
    const cipher = createCipheriv('aes-256-gcm', Buffer.from(this.ENCRYPTION_KEY, 'hex'), iv);
    
    let encrypted = cipher.update(data, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    const authTag = cipher.getAuthTag();
    return Buffer.concat([iv, authTag, encrypted]);
  }
}
```

### Phase 3: Frontend Integration (Week 5-6)

#### API Client Setup
```typescript
// src/services/apiClient.ts
class APIClient {
  private baseURL = process.env.VITE_API_URL || 'https://your-railway-app.railway.app';
  private accessToken: string | null = null;
  
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
        ...options.headers
      }
    };
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  }
  
  async submitQuiz(quizData: QuizSubmission): Promise<QuizResult> {
    return this.request('/api/quizzes/submit', {
      method: 'POST',
      body: JSON.stringify(quizData)
    });
  }
  
  async getStudentProgress(): Promise<StudentProgress> {
    return this.request('/api/progress');
  }
  
  async createBackup(): Promise<{ backupId: string }> {
    return this.request('/api/backups/create', { method: 'POST' });
  }
}

export const apiClient = new APIClient();
```

## Deployment Steps

### 1. Railway Setup
```bash
# Create new Railway project
railway init igcse-music-backend

# Add PostgreSQL
railway add postgresql

# Deploy backend
railway up

# Set environment variables
railway variables set JWT_SECRET=your-jwt-secret
railway variables set JWT_REFRESH_SECRET=your-refresh-secret
railway variables set BACKUP_ENCRYPTION_KEY=your-encryption-key
```

### 2. Vercel Environment Variables
```bash
# Add to Vercel dashboard or .env.local
VITE_API_URL=https://your-railway-app.railway.app
VITE_ENABLE_BACKEND=true
```

### 3. Database Migration
```bash
# Run initial migration
npx prisma migrate deploy

# Seed with existing data
node scripts/migrate-localStorage-data.js
```

## Cost Breakdown

### Railway Costs
- **PostgreSQL Database**: $5/month
- **Backend Service**: $5/month
- **Total**: **$10/month**

### Optional Add-ons
- **AWS S3 Storage**: $3/month (for backups)
- **Redis Cache**: $5/month (for sessions)
- **Monitoring**: $10/month (DataDog/New Relic)

### Total Recommended Setup: $13-28/month

## Migration Timeline

- **Week 1**: Railway setup + Database schema
- **Week 2**: Authentication + Quiz APIs
- **Week 3**: Backup system + Data migration
- **Week 4**: Frontend integration + Testing
- **Week 5**: Production deployment + Monitoring
- **Week 6**: Performance optimization + Documentation

## Success Metrics

✅ **Zero data loss** during migration
✅ **Sub-200ms API response times**
✅ **99.9% uptime** with Railway
✅ **Daily automated backups** with verification
✅ **Real-time grade synchronization**
✅ **GDPR/FERPA compliance** ready

**This Railway + PostgreSQL setup provides enterprise-grade security and reliability at a fraction of the cost of traditional cloud providers, making it perfect for the IGCSE Music Study Hub's needs.**