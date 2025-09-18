import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { syllabusStructure, findSyllabusItemByPath } from '../services/syllabusData';
import { SyllabusItem } from '../types';
import QuizComponent from '../components/QuizComponent'; 
// GlossaryBot temporarily removed
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggleButton from '../components/LanguageToggleButton';
import ImprovedAudioPlayer from '../components/ImprovedAudioPlayer';

const Breadcrumbs: React.FC<{ currentItem: SyllabusItem }> = ({ currentItem }) => {
  const { language } = useLanguage();
  const crumbs: { title: string; path: string }[] = [];

  const getCrumbTitle = (item: SyllabusItem) => {
    return language === 'en-zh' && item.title_zh ? `${item.title} / ${item.title_zh}` : item.title;
  };

  // Always start with Home
  const homeItem = findSyllabusItemByPath('/');
  if (currentItem.path !== '/' && homeItem) { 
    crumbs.push({ title: getCrumbTitle(homeItem), path: '/' });
  }
  
  if (currentItem.isTerm && currentItem.path.startsWith('/term/')) {
    const glossaryPage = findSyllabusItemByPath('/glossary');
    if (glossaryPage) {
      crumbs.push({ title: getCrumbTitle(glossaryPage), path: glossaryPage.path });
    }
    crumbs.push({ title: getCrumbTitle(currentItem), path: currentItem.path });
  } else {
    const pathParts = currentItem.path.split('/').filter(Boolean);
    let currentBuiltPath = '';
    for (const part of pathParts) {
      currentBuiltPath += `/${part}`;
      const page = findSyllabusItemByPath(currentBuiltPath);
      if (page) {
        if (page.path !== '/') {
          crumbs.push({ title: getCrumbTitle(page), path: page.path });
        }
      }
    }
  }
  
  const uniqueCrumbs = crumbs.reduce((acc, current) => {
    if (!acc.find(crumb => crumb.path === current.path)) {
      acc.push(current);
    }
    return acc;
  }, [] as { title: string; path: string }[]);
  
  if (!uniqueCrumbs.find(crumb => crumb.path === currentItem.path) && currentItem.path !== '/') {
     uniqueCrumbs.push({ title: getCrumbTitle(currentItem), path: currentItem.path });
  } else if (currentItem.path === '/' && uniqueCrumbs.length === 0 && homeItem) {
     uniqueCrumbs.push({ title: getCrumbTitle(homeItem), path: '/' });
  }

  return (
    <nav aria-label="breadcrumb" className="mb-6 text-sm text-gray-600 dark:text-gray-400">
      <ol className="list-none p-0 inline-flex space-x-2 flex-wrap">
        {uniqueCrumbs.map((crumb, index) => (
          <li key={crumb.path + '-' + index} className="flex items-center">
            {index < uniqueCrumbs.length - 1 ? (
              <>
                <Link to={crumb.path} className="hover:text-sky-600 dark:hover:text-sky-400 hover:underline">
                  {crumb.title}
                </Link>
                <span className="mx-2 select-none" aria-hidden="true">/</span>
              </>
            ) : (
              <span className="text-gray-800 dark:text-gray-200 font-medium" aria-current="page">{crumb.title}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

const renderFormattedText = (text: string): React.ReactNode => {
  if (!text) return null;
  
  // Check if the text contains HTML iframe elements
  if (text.includes('<iframe')) {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  }
  
  // Handle Markdown headings
  if (text.startsWith('#')) {
    const headingMatch = text.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const content = headingMatch[2];
      const headingClasses = {
        1: 'text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8',
        2: 'text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-6',
        3: 'text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-5',
        4: 'text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4',
        5: 'text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2 mt-3',
        6: 'text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-2 mt-2'
      };
      
      switch(level) {
        case 1: return <h1 className={headingClasses[1]}>{content}</h1>;
        case 2: return <h2 className={headingClasses[2]}>{content}</h2>;
        case 3: return <h3 className={headingClasses[3]}>{content}</h3>;
        case 4: return <h4 className={headingClasses[4]}>{content}</h4>;
        case 5: return <h5 className={headingClasses[5]}>{content}</h5>;
        case 6: return <h6 className={headingClasses[6]}>{content}</h6>;
        default: return <h6 className={headingClasses[6]}>{content}</h6>;
      }
    }
  }
  
  const parts = text.split(/(\*\*.*?\*\*)/g); 
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
    }
    return part; 
  });
};

const renderDescriptionBlock = (block: string, keyPrefix: string): React.ReactNode[] => {
    const elements: React.ReactNode[] = [];
    if (!block) return elements;

    const trimmedBlock = block.trim();
    if (!trimmedBlock) return elements;

    const lines = trimmedBlock.split('\n');
    let currentListItemsContent: React.ReactNode[] = [];

    lines.forEach((line, lineIndex) => {
        const trimmedLineStart = line.trimStart();
        if (trimmedLineStart.startsWith('*   ')) {
            currentListItemsContent.push(renderFormattedText(trimmedLineStart.substring(4)));
        } else {
            if (currentListItemsContent.length > 0) {
                elements.push(
                    <ul key={`${keyPrefix}-list-${lineIndex}`} className="list-disc pl-7 mb-4 space-y-1">
                        {currentListItemsContent.map((itemContent, itemIndex) => (
                            <li key={itemIndex} className="text-base sm:text-lg text-gray-700 dark:text-gray-300">{itemContent}</li>
                        ))}
                    </ul>
                );
                currentListItemsContent = [];
            }
            if (line.trim()) {
                // Check if the line contains HTML content (like iframe)
                if (line.trim().includes('<iframe')) {
                    elements.push(
                        <div key={`${keyPrefix}-html-${lineIndex}`} className="mb-4">
                            {renderFormattedText(line.trim())}
                        </div>
                    );
                } else {
                    elements.push(
                        <p key={`${keyPrefix}-para-${lineIndex}`} className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
                            {renderFormattedText(line.trim())}
                        </p>
                    );
                }
            }
        }
    });

    if (currentListItemsContent.length > 0) {
        elements.push(
            <ul key={`${keyPrefix}-list-end`} className="list-disc pl-7 mb-4 space-y-1">
                {currentListItemsContent.map((itemContent, itemIndex) => (
                    <li key={itemIndex} className="text-base sm:text-lg text-gray-700 dark:text-gray-300">{itemContent}</li>
                ))}
            </ul>
        );
    }
    return elements;
};

const GenericPage: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  let currentPath = location.pathname;
  
  const item = findSyllabusItemByPath(currentPath);

  if (!item) {
    return (
      <div className="p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-red-600">Page Not Found</h1>
        <p className="text-gray-700 dark:text-gray-300">The page you are looking for at <code className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 p-1 rounded">{currentPath}</code> could not be found.</p>
        <Link to="/" className="text-sky-600 dark:text-sky-400 hover:underline mt-4 inline-block">Go to Home</Link>
      </div>
    );
  }
  
  const displayTitle = language === 'en-zh' && item.title_zh ? `${item.title} / ${item.title_zh}` : item.title;
  const audioCreditText = language === 'en-zh' && item.audioCredit_zh ? item.audioCredit_zh : item.audioCredit;
  // Use Chinese audio for bilingual mode, English audio for English-only mode
  const currentAudioSources = language === 'en-zh' ? (item.audioSources_zh || item.audioSources) : item.audioSources;
  // Create a unique key to force AudioPlayer re-render when language changes
  const audioPlayerKey = `${item.id}-${language}-${currentAudioSources?.[0]?.url || 'no-audio'}`;

  const renderContent = () => {
    if (language === 'en-zh' && item.longDescription_zh) {
      const englishBlocks = (item.longDescription || '').split(/\n\s*\n/);
      const chineseBlocks = item.longDescription_zh.split(/\n\s*\n/);
      const maxLength = Math.max(englishBlocks.length, chineseBlocks.length);
      
      return Array.from({ length: maxLength }).map((_, i) => (
        <React.Fragment key={i}>
          {englishBlocks[i] && (
            <div className="prose prose-slate max-w-none prose-headings:text-slate-700 prose-a:text-sky-600 hover:prose-a:text-sky-700 prose-li:text-lg prose-li:text-gray-700 dark:prose-invert">
              {renderDescriptionBlock(englishBlocks[i], `en-block-${i}`)}
            </div>
          )}
          {chineseBlocks[i] && (
            <div className="prose prose-slate max-w-none prose-headings:text-slate-700 prose-a:text-sky-600 hover:prose-a:text-sky-700 prose-li:text-lg prose-li:text-gray-700 mt-2 font-sans dark:prose-invert">
              {renderDescriptionBlock(chineseBlocks[i], `zh-block-${i}`)}
            </div>
          )}
          {i < maxLength - 1 && (englishBlocks[i] || chineseBlocks[i]) && <hr className="my-6 border-slate-200 dark:border-slate-700" />}
        </React.Fragment>
      ));
    }

    const description = item.longDescription || item.content || `Content for ${item.title} is being prepared.`;
    return (
      <div className="prose prose-slate max-w-none prose-headings:text-slate-700 prose-a:text-sky-600 hover:prose-a:text-sky-700 prose-li:text-lg prose-li:text-gray-700 dark:prose-invert">
        {renderDescriptionBlock(description, 'en-single')}
      </div>
    );
  };

  return (
    <div className="p-0 sm:p-2 md:p-4">
      <Breadcrumbs currentItem={item} />
      <article>
        <header className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <LanguageToggleButton />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">{displayTitle}</h1>
            {item.isTerm && <p className="text-sky-600 dark:text-sky-400 text-sm mt-1">Musical Term / 音乐术语</p>}
        </header>

        {currentAudioSources && currentAudioSources.length > 0 && (
          <div className="my-6">
            <ImprovedAudioPlayer key={audioPlayerKey} sources={currentAudioSources} credit={audioCreditText} />
          </div>
        )}

        {item.imageUrl && item.imageAlt && (
          <div className="my-6 flex justify-center" role="figure" aria-label={item.imageAlt}>
            <img 
              src={item.imageUrl} 
              alt={item.imageAlt} 
              className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover border border-gray-200 dark:border-gray-700"
            />
          </div>
        )}
        
        <section>
          {renderContent()}
        </section>
      </article>

      {/* GlossaryBot temporarily removed */}

      {item.quiz && (
        <section className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-600">
          <QuizComponent quizData={item.quiz} />
        </section>
      )}

      {item.children && item.children.length > 0 && item.id !== 'glossary' && (
        <div className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-600">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4">
              Explore further: / 进一步探索：
            </h2>
            <ul className="list-none pl-0 space-y-3">
            {item.children.filter(child => !(child.isTerm && child.path.includes(':termId'))).map(child => {
              const childDisplayTitle = language === 'en-zh' && child.title_zh ? `${child.title} / ${child.title_zh}` : child.title;
              const childDisplayContent = language === 'en-zh' && child.content_zh ? `${child.content} / ${child.content_zh}`: child.content;

              return (
                <li key={child.id} className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg shadow-sm transition-all duration-150 border border-gray-200 hover:border-sky-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-gray-600 dark:hover:border-sky-500">
                  <Link to={child.path} className="text-sky-700 hover:text-sky-800 font-medium text-lg group block dark:text-sky-400 dark:hover:text-sky-300">
                      {childDisplayTitle}
                      <span className="ml-2 text-sky-500 group-hover:translate-x-1 transition-transform inline-block opacity-75 group-hover:opacity-100 dark:text-sky-400">→</span>
                  </Link>
                  {child.content && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5">{childDisplayContent}</p>}
                </li>
              );
            })}
            </ul>
        </div>
      )}
    </div>
  );
};

export default GenericPage;