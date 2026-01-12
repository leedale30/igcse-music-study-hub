import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { findSyllabusItemByPath } from '../services/syllabusData';
import QuizComponent from '../components/QuizComponent';
import { Quiz } from '../types';

// MathJax global declaration is in TheoryPage.tsx

// AOS metadata for navigation and titles
const aosData = [
    { id: 'aos01-baroque-music', title: 'Baroque Music', emoji: '🎻', shortTitle: 'AOS1' },
    { id: 'aos02-classical-music', title: 'Classical Music', emoji: '🎹', shortTitle: 'AOS2' },
    { id: 'aos03-romantic-music', title: 'Romantic Music', emoji: '🎼', shortTitle: 'AOS3' },
    { id: 'aos04-music-and-words', title: 'Music and Words', emoji: '📖', shortTitle: 'AOS4' },
    { id: 'aos05-music-for-dance', title: 'Music for Dance', emoji: '💃', shortTitle: 'AOS5' },
    { id: 'aos06-music-for-small-ensemble', title: 'Music for Small Ensemble', emoji: '🎺', shortTitle: 'AOS6' },
    { id: 'aos07-music-for-stage-and-screen', title: 'Music for Stage and Screen', emoji: '🎬', shortTitle: 'AOS7' },
];

const AosContentPage: React.FC = () => {
    const { aosId } = useParams<{ aosId: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const [htmlContent, setHtmlContent] = useState<string>('');
    const [pageTitle, setPageTitle] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeQuiz, setActiveQuiz] = useState<Quiz | undefined>(undefined);
    const contentRef = useRef<HTMLDivElement>(null);

    // Build the file path from the URL - memoized to prevent infinite loops
    const pathAfterAos = location.pathname.replace('/aos/', '');
    const pathParts = useMemo(() => pathAfterAos.split('/').filter(Boolean), [pathAfterAos]);

    // Find AOS info
    const currentAos = aosData.find(aos => pathAfterAos.startsWith(aos.id));

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setLoading(true);
                setError(null);
                setActiveQuiz(undefined);
                setHtmlContent('');

                // Check if this path corresponds to a SyllabusItem (our new data-driven approach)
                const item = findSyllabusItemByPath(location.pathname);

                if (item) {
                    setPageTitle(item.title);

                    // If we have longDescription, use it!
                    if (item.longDescription) {
                        setHtmlContent(item.longDescription);

                        // Also set the quiz if it exists
                        if (item.quiz) {
                            setActiveQuiz(item.quiz);
                        }

                        setLoading(false);
                        return;
                    }

                    // If it has ONLY a quiz (legacy behavior), just show the quiz
                    if (item.quiz) {
                        setActiveQuiz(item.quiz);
                        setLoading(false);
                        return;
                    }
                }

                // If no data-driven content found, try fetching HTML content (legacy fallback)
                // Build possible HTML file paths to try
                const pathsToTry: string[] = [];
                const lastPart = pathParts[pathParts.length - 1];

                // If it already ends with .html, use as-is
                if (pathAfterAos.endsWith('.html')) {
                    pathsToTry.push(`/aos/${pathAfterAos}`);
                } else {
                    // Try: /aos/path.html (add .html to current path)
                    pathsToTry.push(`/aos/${pathAfterAos}.html`);

                    // Try: /aos/path/lastpart.html (append lastpart.html)
                    pathsToTry.push(`/aos/${pathAfterAos}/${lastPart}.html`);

                    // Try: /aos/parentpath/lastpart.html (go up one level if lastpart is duplicated)
                    if (pathParts.length >= 2 && pathParts[pathParts.length - 1] === pathParts[pathParts.length - 2]) {
                        const parentPath = pathParts.slice(0, -1).join('/');
                        pathsToTry.push(`/aos/${parentPath}/${lastPart}.html`);
                    }
                }

                let response: Response | null = null;
                let successPath = '';

                for (const htmlPath of pathsToTry) {
                    try {
                        response = await fetch(htmlPath);
                        if (response.ok) {
                            successPath = htmlPath;
                            break;
                        }
                    } catch {
                        // Try next path
                    }
                }

                if (!response || !response.ok) {
                    // If no HTML found and no quiz found, throw
                    throw new Error('Content not found');
                }

                const html = await response.text();

                // Extract title from the HTML
                const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
                if (titleMatch) {
                    setPageTitle(titleMatch[1].replace(/^\s*Aos\d+\s*/i, '').trim());
                }

                // Extract main content
                const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
                if (mainMatch) {
                    setHtmlContent(mainMatch[1]);
                } else {
                    // Try body without nav
                    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
                    if (bodyMatch) {
                        let content = bodyMatch[1];
                        // Remove nav elements
                        content = content.replace(/<nav[^>]*class="aos-nav"[^>]*>[\s\S]*?<\/nav>/gi, '');
                        content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
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

        if (aosId) {
            fetchContent();
        }
    }, [aosId, pathAfterAos, location.pathname, pathParts]);

    // Initialize MathJax after content loads
    useEffect(() => {
        if (htmlContent && contentRef.current) {
            // 1. MathJax
            if (window.MathJax?.typesetPromise) {
                window.MathJax.typesetPromise([contentRef.current]).catch(console.error);
            }

            // 2. Re-execute scripts (dangerouslySetInnerHTML does not execute scripts)
            const scripts = contentRef.current.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                // Copy attributes
                for (let i = 0; i < oldScript.attributes.length; i++) {
                    const attr = oldScript.attributes[i];
                    newScript.setAttribute(attr.name, attr.value);
                }
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                try {
                    oldScript.parentNode?.replaceChild(newScript, oldScript);
                } catch (e) {
                    // Script might have been removed already
                }
            });
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

            // Handle internal links
            if (href.endsWith('.html') && !href.startsWith('http')) {
                e.preventDefault();
                // Convert relative path to absolute path
                let newPath = href;

                if (href.startsWith('../')) {
                    // Navigate up from current path
                    const currentParts = pathParts.slice(0, -1);
                    const relativeParts = href.split('/');

                    for (const part of relativeParts) {
                        if (part === '..') {
                            currentParts.pop();
                        } else if (part && !part.endsWith('.html')) {
                            currentParts.push(part);
                        } else if (part.endsWith('.html')) {
                            // Extract folder name from .html file
                            const folderName = part.replace('.html', '');
                            currentParts.push(folderName);
                        }
                    }
                    newPath = `/aos/${currentParts.join('/')}`;
                } else if (!href.startsWith('/')) {
                    // Relative path from current location
                    const folderName = href.replace('.html', '');
                    newPath = `/aos/${pathParts.join('/')}/${folderName}`;
                }

                navigate(newPath.replace('.html', ''));
            }
        };

        const container = contentRef.current;
        container.addEventListener('click', handleClick);
        return () => container.removeEventListener('click', handleClick);
    }, [htmlContent, navigate, pathParts]);

    // Build breadcrumbs from path
    const buildBreadcrumbs = () => {
        const crumbs = [
            { path: '/', label: 'Home' },
            { path: '/areas-of-study', label: 'Areas of Study' },
        ];

        if (currentAos) {
            crumbs.push({
                path: `/aos/${currentAos.id}`,
                label: `${currentAos.emoji} ${currentAos.title}`
            });
        }

        // Add intermediate paths
        let buildPath = `/aos`;
        for (let i = 1; i < pathParts.length; i++) {
            buildPath += `/${pathParts[i]}`;
            const label = pathParts[i]
                .replace(/^aos\d+-\d+-/, '')
                .replace(/aos\d+-/, '')
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            crumbs.push({ path: buildPath, label });
        }

        return crumbs;
    };

    if (loading) {
        return (
            <div className="p-6 flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-500 border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 max-w-4xl mx-auto">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
                    <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Content Not Found</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        The requested page could not be found.
                    </p>
                    <Link
                        to="/areas-of-study"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
                    >
                        ← Back to Areas of Study
                    </Link>
                </div>
            </div>
        );
    }

    const breadcrumbs = buildBreadcrumbs();

    return (
        <div className="p-4 md:p-6 max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center flex-wrap gap-1">
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.path}>
                        {index > 0 && <span className="mx-1">/</span>}
                        {index === breadcrumbs.length - 1 ? (
                            <span className="text-gray-800 dark:text-gray-200">{crumb.label}</span>
                        ) : (
                            <Link to={crumb.path} className="hover:text-sky-600 dark:hover:text-sky-400">
                                {crumb.label}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </nav>

            {/* Header */}
            <header className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                {currentAos && (
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
                            {currentAos.shortTitle}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {currentAos.title}
                        </span>
                    </div>
                )}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {pageTitle || 'Loading...'}
                </h1>
            </header>

            {/* Content and/or Quiz */}
            <div className="space-y-10">
                {htmlContent && (
                    <article
                        ref={contentRef}
                        className="
                  aos-content
                  prose prose-slate dark:prose-invert max-w-none
                  prose-headings:text-gray-800 dark:prose-headings:text-gray-100
                  prose-p:text-gray-700 dark:prose-p:text-gray-300
                  prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 dark:prose-strong:text-white
                  prose-li:text-gray-700 dark:prose-li:text-gray-300
                  prose-em:text-gray-700 dark:prose-em:text-gray-300
                  [&_.card]:bg-white [&_.card]:dark:bg-gray-800 [&_.card]:rounded-xl [&_.card]:p-4 [&_.card]:shadow-sm [&_.card]:border [&_.card]:border-gray-200 [&_.card]:dark:border-gray-700
                  [&_.grid]:grid [&_.grid]:gap-4 [&_.grid]:grid-cols-1 [&_.grid]:md:grid-cols-2
                  [&_section]:mb-8
                  [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
                  [&_h3]:text-lg [&_h3]:md:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
                "
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                )}

                {activeQuiz && (
                    <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0">Practice Quiz</h2>
                            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium">
                                Test Your Knowledge
                            </span>
                        </div>
                        <QuizComponent quizData={activeQuiz} />
                    </section>
                )}
            </div>

            {/* Navigation back */}
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                    to="/areas-of-study"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
                >
                    ← Back to Areas of Study
                </Link>
            </div>
        </div>
    );
};

export default AosContentPage;
