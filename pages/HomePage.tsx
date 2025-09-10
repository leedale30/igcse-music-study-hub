import React from 'react';
import { Link } from 'react-router-dom';

const HeroIcon: React.FC<{ path: string; className?: string }> = ({ path, className = "w-16 h-16 text-sky-600 mb-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-700 to-cyan-500 text-white py-16 sm:py-20 md:py-28 rounded-lg shadow-xl overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">Welcome to the IGCSE Music Hub!</h1>
          <p className="text-md sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-sm">Your friendly guide to succeed in the Cambridge IGCSE Music (0410 / 0978) exam for 2026 and beyond.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/areas-of-study" 
              className="bg-white text-sky-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-sky-100 transition duration-300 text-lg w-full sm:w-auto"
            >
              Start Learning
            </Link>
            <Link 
              to="/test" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-sky-700 transition duration-300 text-lg w-full sm:w-auto"
            >
              MusicXML Test Page
            </Link>
            <a
              href="https://igcse-music-terms-quiz-638765078362.us-west1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-sky-700 transition duration-300 text-lg w-full sm:w-auto"
            >
              IGCSE Music Terms Quiz
            </a>
          </div>
        </div>
      </section>

      {/* What is IGCSE Music? Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8">What is IGCSE Music?</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            IGCSE Music is an exciting journey into the world of sounds! You will explore different types of music from all over the globe and from different times in history. It's not just about listening – you will also get to perform music and even create your own! This course helps you understand how music works and why it is such an important part of our lives.
          </p>
        </div>
      </section>

      {/* What Will You Learn? Section */}
      <section className="bg-sky-50 dark:bg-slate-900 py-12 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 text-center mb-12 sm:mb-16">What Will You Learn?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <HeroIcon path="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" className="w-16 h-16 text-sky-600 dark:text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-700 dark:text-sky-400 mb-4">Listening Skills</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Discover music from Baroque to modern pop, and sounds from around the world. Learn to hear the details and understand how music is put together.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <HeroIcon path="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" className="w-16 h-16 text-sky-600 dark:text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-700 dark:text-sky-400 mb-4">Performing Skills</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Develop your talent on an instrument or with your voice. You will perform solo and as part of a group, expressing yourself through music.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <HeroIcon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" className="w-16 h-16 text-sky-600 dark:text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-700 dark:text-sky-400 mb-4">Composing Skills</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Unleash your creativity by writing your own original music! Learn how to build melodies, harmonies, and rhythms into your unique compositions.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Explore the Syllabus Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 text-center mb-12 sm:mb-16">Explore the Syllabus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/areas-of-study" className="block group">
              <div className="bg-white dark:bg-slate-700 p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-700 dark:text-sky-400 mb-3">Areas of Study (Paper 1)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Dive into different musical worlds, from classical masterpieces to global sounds and modern hits. Prepare for your listening exam!</p>
                  <span className="font-semibold text-sky-600 dark:text-sky-300 group-hover:text-sky-800 dark:group-hover:text-sky-200 transition-colors duration-300">Learn more →</span>
                </div>
              </div>
            </Link>
            <Link to="/coursework" className="block group">
              <div className="bg-white dark:bg-slate-700 p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-700 dark:text-sky-400 mb-3">Coursework (Performing & Composing)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Get guidance on your performances and original compositions. Find out how to showcase your practical musical skills.</p>
                  <span className="font-semibold text-sky-600 dark:text-sky-300 group-hover:text-sky-800 dark:group-hover:text-sky-200 transition-colors duration-300">Find out how →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Use This Hub? Section */}
       <section className="bg-slate-100 dark:bg-slate-900 py-12 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8">Why Use This Study Hub?</h2>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <HeroIcon path="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" className="w-10 h-10 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Simple Explanations</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Musical terms and ideas are explained clearly, perfect for all learners.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <HeroIcon path="M10.5 6h9.75M10.5 12h9.75M10.5 18h9.75M3.75 6H6v2.25H3.75V6zm0 6H6v2.25H3.75v-2.25zm0 6H6v2.25H3.75V18z" className="w-10 h-10 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Syllabus Focussed</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Covers all Areas of Study and coursework components for the 2026 IGCSE Music exam.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <HeroIcon path="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.188l-1.25-2.188L13.563 12l2.188-1.25L17 8.563l1.25 2.188L20.438 12z" className="w-10 h-10 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Interactive Learning</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Engage with examples and (soon!) quizzes to test your knowledge.</p>
              </div>
            </div>
             <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <HeroIcon path="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" className="w-10 h-10 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Organised for You</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Easy navigation to find exactly what you need to study.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer call to action - can be simple */}
      <section className="py-12 bg-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Ready to make some music?</h2>
          <p className="text-sky-100 mb-6">Let's start this musical adventure together!</p>
           <Link 
            to="/areas-of-study" 
            className="bg-white text-sky-700 font-semibold py-2 px-6 rounded-lg shadow hover:bg-sky-100 transition duration-300"
          >
            Explore Areas of Study
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;