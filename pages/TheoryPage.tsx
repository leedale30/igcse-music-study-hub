import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { findTheoryTopicById, theoryChapters } from '../services/theoryData';

declare global {
    interface Window {
        MathJax?: {
            typesetPromise?: (elements?: HTMLElement[]) => Promise<void>;
            startup?: {
                promise: Promise<void>;
            };
        };
    }
}

const TheoryPage: React.FC = () => {
    const { pageId } = useParams<{ pageId: string }>();
    const [htmlContent, setHtmlContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const topicInfo = pageId ? findTheoryTopicById(pageId) : undefined;

    // Find previous and next topics for navigation
    const getNavigation = () => {
        if (!topicInfo) return { prev: null, next: null };

        const allTopics: { chapterNum: number; topicId: string; title: string }[] = [];
        theoryChapters.forEach(ch => {
            ch.topics.forEach(t => {
                allTopics.push({ chapterNum: ch.number, topicId: t.id, title: t.title });
            });
        });

        const currentIndex = allTopics.findIndex(t => t.topicId === pageId);
        return {
            prev: currentIndex > 0 ? allTopics[currentIndex - 1] : null,
            next: currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null,
        };
    };

    const { prev, next } = getNavigation();

    useEffect(() => {
        if (!topicInfo) {
            setError('Topic not found');
            setLoading(false);
            return;
        }

        const fetchContent = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/theory/${topicInfo.topic.file}`);
                if (!response.ok) {
                    throw new Error('Failed to load content');
                }
                const html = await response.text();

                // Extract just the main content (between <main> tags)
                const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
                if (mainMatch) {
                    // Fix relative paths for images
                    let content = mainMatch[1];
                    content = content.replace(/src="external\//g, 'src="/theory/external/');
                    content = content.replace(/src='external\//g, "src='/theory/external/");
                    setHtmlContent(content);
                } else {
                    // If no main tag, try to get body content
                    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
                    if (bodyMatch) {
                        let content = bodyMatch[1];
                        // Remove nav elements
                        content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
                        content = content.replace(/src="external\//g, 'src="/theory/external/');
                        content = content.replace(/src='external\//g, "src='/theory/external/");
                        setHtmlContent(content);
                    } else {
                        setHtmlContent(html);
                    }
                }
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load content');
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [topicInfo, pageId]);

    // Initialize MathJax after content loads
    useEffect(() => {
        if (htmlContent && contentRef.current && window.MathJax?.typesetPromise) {
            window.MathJax.typesetPromise([contentRef.current]).catch(console.error);
        }
    }, [htmlContent]);

    // Handle internal links
    useEffect(() => {
        if (!contentRef.current) return;

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href) return;

            // Check if it's an internal theory link
            if (href.endsWith('.html') && !href.startsWith('http')) {
                e.preventDefault();
                // Extract the topic ID from the filename
                const filename = href.split('/').pop()?.replace('.html', '') || '';
                // Try to find the topic
                const match = filename.match(/^(\d{2}-\d{2})/);
                if (match) {
                    navigate(`/theory/${match[1]}`);
                }
            }
        };

        const container = contentRef.current;
        container.addEventListener('click', handleClick);
        return () => container.removeEventListener('click', handleClick);
    }, [htmlContent, navigate]);

    if (loading) {
        return (
            <div className="p-6 flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-500 border-t-transparent"></div>
            </div>
        );
    }

    if (error || !topicInfo) {
        return (
            <div className="p-6 max-w-4xl mx-auto">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
                    <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
                        {error || 'Topic Not Found'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        The requested theory topic could not be found.
                    </p>
                    <Link
                        to="/theory"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
                    >
                        ← Back to Theory Index
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center flex-wrap gap-1">
                <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
                <span className="mx-1">/</span>
                <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
                <span className="mx-1">/</span>
                <span className="text-gray-600 dark:text-gray-300">Ch. {topicInfo.chapter.number}</span>
                <span className="mx-1">/</span>
                <span className="text-gray-800 dark:text-gray-200">{topicInfo.topic.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
                        Chapter {topicInfo.chapter.number}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {topicInfo.chapter.title}
                    </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {topicInfo.topic.title}
                </h1>
            </header>

            {/* Content */}
            <article
                ref={contentRef}
                className="
          theory-content
          prose prose-slate dark:prose-invert max-w-none
          prose-headings:text-gray-800 dark:prose-headings:text-gray-100
          prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-img:rounded-lg prose-img:shadow-md
          prose-figure:my-6
          prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 dark:prose-figcaption:text-gray-400
          prose-ol:pl-6 prose-ul:pl-6
          prose-li:text-gray-700 dark:prose-li:text-gray-300
        "
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Navigation */}
            <nav className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center gap-4">
                    {prev ? (
                        <Link
                            to={`/theory/${prev.topicId}`}
                            className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-sky-50 dark:hover:bg-gray-700 rounded-xl transition-colors group text-left"
                        >
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">← Previous</div>
                            <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                {prev.title}
                            </div>
                        </Link>
                    ) : (
                        <div className="flex-1" />
                    )}

                    <Link
                        to="/theory"
                        className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
                    >
                        All Topics
                    </Link>

                    {next ? (
                        <Link
                            to={`/theory/${next.topicId}`}
                            className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-sky-50 dark:hover:bg-gray-700 rounded-xl transition-colors group text-right"
                        >
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Next →</div>
                            <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                {next.title}
                            </div>
                        </Link>
                    ) : (
                        <div className="flex-1" />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default TheoryPage;
