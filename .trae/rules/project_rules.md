# IGCSE Music Study Hub - Project Rules

## Core Development Principles

- Write concise, technical responses with accurate TypeScript examples
- Use functional, declarative programming. Avoid classes
- Prefer iteration and modularization over duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Use lowercase with dashes for directories (e.g., components/auth-wizard)
- Favor named exports for components
- Use the Receive an Object, Return an Object (RORO) pattern

## JavaScript/TypeScript Standards

- Use "function" keyword for pure functions. Omit semicolons
- Use TypeScript for all code. Prefer interfaces over types
- File structure: Exported component, subcomponents, helpers, static content, types
- Avoid unnecessary curly braces in conditional statements
- For single-line statements in conditionals, omit curly braces
- Use concise, one-line syntax for simple conditional statements

## Error Handling and Validation (HIGH PRIORITY)

- Prioritize error handling and edge cases:
  - Handle errors and edge cases at the beginning of functions
  - Use early returns for error conditions to avoid deeply nested if statements
  - Place the happy path last in the function for improved readability
  - Avoid unnecessary else statements; use if-return pattern instead
  - Use guard clauses to handle preconditions and invalid states early
- Use error boundaries for unexpected errors: Implement error boundaries for quiz and audio components
- Code in services/ dir always throw user-friendly errors that can be caught and shown to the user
- Use Zod for form validation and data validation

## IGCSE-Specific React Patterns

- Quiz state management with proper error handling
- Audio player state management with loading/error states
- Multi-language content switching with fallbacks
- Progress tracking for educational content
- Responsive design optimized for educational content consumption

## Performance Optimization (HIGH PRIORITY)

- Implement lazy loading for large educational content sections
- Use React.Suspense for code splitting
- Optimize audio/MIDI file loading with proper caching
- Implement virtual scrolling for long content lists
- Use proper memoization for expensive calculations (music theory)
- Optimize bundle size with proper tree shaking

## Accessibility (HIGH PRIORITY FOR EDUCATIONAL CONTENT)

- Ensure all interactive elements are keyboard navigable
- Implement proper ARIA labels for quiz components and audio players
- Provide alternative text for all images and audio content
- Ensure proper color contrast for readability
- Support screen readers for educational content
- Implement focus management for complex interactions

## Component Structure

- Break down components into smaller parts with minimal props
- Use composition to build complex components
- Follow the order: component declaration, styled components (if any), TypeScript types
- Use micro folder structure for components when appropriate

## Data Management

- Use React state and context for client-side state management
- Implement proper loading states for educational content
- Use local storage for user progress and preferences
- Implement proper caching for audio and educational resources

## Styling

- Use Tailwind CSS for styling, following the Utility First approach
- Utilize custom CSS classes for complex educational content layouts
- Ensure responsive design works well for educational content consumption
- Use mobile-first approach for responsive design

## Documentation (HIGH PRIORITY)

- Provide clear and concise comments for complex educational logic
- Use JSDoc comments for functions and components to improve IDE intellisense
- Keep the README files up-to-date with setup instructions and project overview
- Document educational content structure and quiz formats
- Document audio/MIDI integration patterns

## Naming Conventions

- Use PascalCase for components and interfaces
- Use camelCase for variables, functions, and methods
- Use SCREAMING_SNAKE_CASE for constants
- Booleans: Use auxiliary verbs such as 'does', 'has', 'is', and 'should'
- Filenames: Use lowercase with dash separators (e.g., quiz-component.tsx)
- File extensions: Use .config.ts, .test.ts, .context.tsx, .type.ts, .hook.ts as appropriate

## Vite-Specific Optimizations

- Use Vite's dynamic imports: import('./Component').then(module => module.default)
- Implement proper chunk splitting in vite.config.ts
- Use Vite's environment variables: import.meta.env.VITE_API_KEY
- Leverage Vite's fast HMR for development
- Use Vite's asset handling for audio/MIDI files
- Configure proper build optimizations for educational content

## PRIORITY IMPLEMENTATION PHASES

### Phase 1 (High Priority - COMPLETED)
✅ Implement React Error Boundaries for quiz and audio components
✅ Add Zod validation for quiz submissions and form inputs
✅ Improve error handling in audio/MIDI players
✅ Add proper loading states and user feedback
✅ Implement accessibility improvements (ARIA labels, keyboard navigation)

### Phase 2 (Medium Priority - Next Sprint)
- Add Suspense boundaries with proper fallbacks
- Implement lazy loading for large content sections
- Optimize image loading (WebP, lazy loading)
- Add proper JSDoc documentation
- Implement user progress tracking with local storage

### Phase 3 (Low Priority - Future Enhancement)
- Add comprehensive testing suite
- Implement advanced performance optimizations
- Consider migration to Next.js if server-side features are needed
- Add backend integration with Supabase if user accounts are needed
- Implement AI-powered features for enhanced learning

## Educational Content Guidelines

- All content must be IGCSE Music curriculum compliant
- Provide bilingual support (English/Chinese) where applicable
- Include interactive elements (quizzes, audio players) for engagement
- Ensure content is accessible to students with different learning needs
- Implement proper progress tracking and feedback mechanisms
- Use clear, educational language appropriate for the target age group

## Audio/MIDI Integration Rules

- Always provide fallback options for audio content
- Implement proper loading states for audio files
- Use appropriate audio formats for web delivery
- Provide visual feedback for audio playback
- Ensure audio controls are accessible via keyboard
- Implement proper error handling for audio loading failures

## Security and Privacy

- Never commit sensitive information to the repository
- Use environment variables for configuration
- Implement proper input validation and sanitization
- Follow GDPR guidelines for any user data collection
- Ensure secure handling of student progress data

## Backend Architecture (HIGH PRIORITY)

### Recommended Stack for Vercel/GitHub Deployment
- **Primary Choice**: Railway + PostgreSQL (seamless Vercel integration)
- **Alternative**: Supabase (PostgreSQL + Auth + Real-time)
- **Enterprise**: AWS/GCP with auto-scaling
- **Database**: PostgreSQL with encryption at rest
- **Authentication**: JWT with refresh tokens + bcrypt password hashing
- **File Storage**: AWS S3 or Cloudinary for audio/MIDI files
- **Caching**: Redis for session management and performance

### Backend Implementation Phases
- **Phase 1**: Hybrid architecture (client + secure API)
- **Phase 2**: Full backend migration with real-time sync
- **Phase 3**: Enterprise features (SSO, multi-tenant, analytics)

### API Design Principles
- RESTful endpoints with proper HTTP status codes
- Input validation using Zod schemas
- Rate limiting and CORS policies
- Comprehensive error handling and logging
- API versioning for backward compatibility

### Database Schema Requirements
- User authentication with role-based access control
- Encrypted storage for sensitive student data
- Audit trails for all data modifications
- Proper indexing for quiz and progress queries
- Foreign key constraints for data integrity

## Data Backup and Recovery (CRITICAL REQUIREMENT)

### Automated Backup Strategy
- **Daily automated backups** of all student data, grades, and progress
- **Real-time backup** after each quiz completion or grade update
- **Multi-location storage** (primary database + cloud backup)
- **Versioned backups** with 30-day retention minimum
- **Encrypted backup files** with secure key management

### Student Data Protection
- **Grade Data**: All quiz scores, averages, and progress metrics
- **User Profiles**: Account information, preferences, and settings
- **Learning Progress**: Page visits, study time, and achievement data
- **Assessment Records**: IGCSE assessments and teacher evaluations
- **Badge/Achievement Data**: All earned badges and milestone tracking

### Backup Implementation Requirements
- Automated daily system-wide backups using `dataBackupManager`
- Individual student backups after each significant data change
- Export functionality for data portability (GDPR compliance)
- Backup integrity verification and corruption detection
- Disaster recovery procedures with RTO < 4 hours

### Data Synchronization Rules
- **Real-time sync** between client and server for grade updates
- **Conflict resolution** for simultaneous updates
- **Offline capability** with sync when connection restored
- **Data validation** on both client and server sides
- **Audit logging** for all data modifications with timestamps

## Security and Privacy (ENHANCED)

### Backend Security Requirements
- **Password Security**: bcrypt hashing with salt rounds ≥ 12
- **Session Management**: JWT tokens with secure refresh mechanism
- **Data Encryption**: AES-256 encryption for sensitive data at rest
- **Transport Security**: HTTPS/TLS 1.3 for all communications
- **Input Validation**: Server-side validation for all user inputs
- **SQL Injection Prevention**: Parameterized queries and ORM usage

### Compliance and Governance
- **GDPR Compliance**: Data protection, right to erasure, data portability
- **FERPA Compliance**: Educational record protection and access controls
- **Audit Requirements**: Comprehensive logging of all data access
- **Data Retention**: Configurable retention policies for student records
- **Access Controls**: Role-based permissions (student/teacher/admin)

## Testing Standards

- Write unit tests for critical educational logic
- Test accessibility features thoroughly
- Ensure cross-browser compatibility for educational content
- Test audio/MIDI functionality across different devices
- Implement proper error boundary testing
- **Backend Testing**: API endpoint testing with automated test suites
- **Database Testing**: Data integrity and backup/restore procedures
- **Security Testing**: Penetration testing and vulnerability assessments

## Deployment and DevOps

### Vercel Integration
- **Frontend**: Continue using Vercel for static site deployment
- **API Routes**: Utilize Vercel serverless functions for lightweight endpoints
- **Environment Variables**: Secure configuration management
- **Preview Deployments**: Automatic staging environments for testing

### Backend Deployment
- **Railway**: Recommended for PostgreSQL + Node.js backend
- **Database Migrations**: Version-controlled schema changes
- **Health Monitoring**: Uptime monitoring and alerting
- **Performance Monitoring**: Response time and error rate tracking

---

*Last Updated: Backend architecture and data backup requirements added*
*Reference: Modern Web Development Guidelines adapted for IGCSE Music Study Hub*
*Backend Security Assessment: docs/backend-security-assessment.md*