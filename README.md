<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# 🎵 IGCSE Music Study Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org/)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%20AI-4285F4?logo=google)](https://ai.google.dev/)

**An interactive study platform for IGCSE Music students featuring comprehensive syllabus content, interactive quizzes, ABC music notation tools, and an AI-powered glossary bot.**

[🌐 Live Demo](https://igcse-music-study-hub.vercel.app) • [📖 Documentation](docs/) • [🐛 Report Bug](https://github.com/leedale30/igcse-music-study-hub/issues)

</div>

---

## ✨ Features

- 🎼 **Comprehensive Syllabus Coverage** - All IGCSE Music Areas of Study
- 📝 **Interactive Quizzes** - Test your knowledge with instant feedback
- 🎹 **ABC Notation Editor** - Write and play back music notation in your browser
- 🤖 **AI Glossary Bot** - Get instant answers to music terminology questions (powered by Gemini)
- 🎨 **Modern UI** - Sleek, responsive design with dark mode support
- 📱 **Mobile Friendly** - Study on any device

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- A Gemini API key (for the AI glossary bot)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/leedale30/igcse-music-study-hub.git
   cd igcse-music-study-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Fork this repository to your GitHub account
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Add the `GEMINI_API_KEY` environment variable in Vercel project settings
4. Deploy!

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 📚 Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend framework |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| Gemini AI | Glossary bot intelligence |
| ABC.js | Music notation rendering |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ for IGCSE Music students everywhere

⭐ Star this repo if you find it helpful!

</div>
