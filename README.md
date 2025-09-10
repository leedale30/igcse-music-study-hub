<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# IGCSE Music Study Hub

This is an interactive study hub for IGCSE Music students, featuring syllabus content, quizzes, and a glossary bot.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```
   npm install
   ```
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   ```
   npm run dev
   ```

## Deploy to Vercel

1. Fork or clone this repository to your GitHub account
2. Connect your GitHub repository to Vercel
3. Add the `GEMINI_API_KEY` environment variable in the Vercel project settings
4. Deploy the application

### Deployment Steps

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel:
   ```
   vercel login
   ```
4. Deploy the application:
   ```
   vercel
   ```
5. For production deployment:
   ```
   vercel --prod
   ```
# IGCSE Music Study Hub - Production Ready
