import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ExternalLink {
  id: string;
  title: string;
  title_zh?: string;
  url: string;
  description: string;
  description_zh?: string;
  category?: string;
  category_zh?: string;
}

const externalLinks: ExternalLink[] = [
  {
    id: 'chordchord',
    title: 'ChordChord',
    title_zh: 'ChordChord',
    url: 'https://chordchord.com/',
    description: 'Interactive chord progression tool for music theory and composition practice.',
    description_zh: '用于音乐理论和作曲练习的交互式和弦进行工具。',
    category: 'Music Theory',
    category_zh: '音乐理论'
  }
];

const LinksPage: React.FC = () => {
  const { language } = useLanguage();

  const handleLinkClick = (url: string, title: string) => {
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const groupedLinks = externalLinks.reduce((acc, link) => {
    const category = language === 'en-zh' && link.category_zh 
      ? `${link.category} / ${link.category_zh}` 
      : link.category || 'General';
    
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(link);
    return acc;
  }, {} as Record<string, ExternalLink[]>);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'Useful Links / 有用链接' : 'Useful Links'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === 'en-zh'
            ? 'Curated collection of external websites and tools to enhance your music learning experience. / 精选的外部网站和工具集合，以增强您的音乐学习体验。'
            : 'Curated collection of external websites and tools to enhance your music learning experience.'
          }
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedLinks).map(([category, links]) => (
          <div key={category} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  onClick={() => handleLinkClick(link.url, link.title)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors">
                        {language === 'en-zh' && link.title_zh 
                          ? `${link.title} / ${link.title_zh}` 
                          : link.title
                        }
                      </h3>
                      
                      <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                        {language === 'en-zh' && link.description_zh 
                          ? link.description_zh 
                          : link.description
                        }
                      </p>
                      
                      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="font-medium">{link.url}</span>
                      </div>
                    </div>
                    
                    <div className="ml-4 text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
        <div className="flex items-start space-x-3">
          <div className="text-yellow-600 dark:text-yellow-400 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              {language === 'en-zh' ? 'External Links Notice / 外部链接提醒' : 'External Links Notice'}
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              {language === 'en-zh'
                ? 'These links will open in new tabs and lead to external websites. Please ensure you have permission to access these sites and be aware of their individual terms of service and privacy policies. / 这些链接将在新标签页中打开并导向外部网站。请确保您有权访问这些网站，并了解它们各自的服务条款和隐私政策。'
                : 'These links will open in new tabs and lead to external websites. Please ensure you have permission to access these sites and be aware of their individual terms of service and privacy policies.'
              }
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
          {language === 'en-zh' ? 'How to Use These Links / 如何使用这些链接' : 'How to Use These Links'}
        </h3>
        <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              {language === 'en-zh'
                ? 'Click on any link card to open the website in a new tab / 点击任何链接卡片在新标签页中打开网站'
                : 'Click on any link card to open the website in a new tab'
              }
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              {language === 'en-zh'
                ? 'Use these tools alongside the built-in features for comprehensive music learning / 将这些工具与内置功能一起使用，进行全面的音乐学习'
                : 'Use these tools alongside the built-in features for comprehensive music learning'
              }
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>
              {language === 'en-zh'
                ? 'Bookmark useful sites for quick access during your studies / 收藏有用的网站以便在学习期间快速访问'
                : 'Bookmark useful sites for quick access during your studies'
              }
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinksPage;