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

## Testing Standards

- Write unit tests for critical educational logic
- Test accessibility features thoroughly
- Ensure cross-browser compatibility for educational content
- Test audio/MIDI functionality across different devices
- Implement proper error boundary testing

---

*Last Updated: Based on Phase 1 implementation (commit f52d3ce)*
*Reference: Modern Web Development Guidelines adapted for IGCSE Music Study Hub*