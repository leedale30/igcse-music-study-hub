#!/usr/bin/env python3
"""
Batch convert Theory HTML pages to React components.
Extracts content from <main> or <body> tags and creates TSX files.
"""

import os
import re
from pathlib import Path

# Paths
HTML_DIR = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/public/theory")
OUTPUT_DIR = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/pages/theory")

# Chapter mapping based on first two digits of filename
CHAPTER_NAMES = {
    '01': 'Basic Concepts',
    '02': 'Major Keys',
    '03': 'Minor Keys',
    '04': 'Rhythm',
    '05': 'Intervals',
    '06': 'Triads',
    '07': 'Roman Numerals & Cadences',
    '08': 'Seventh Chords',
    '09': 'Harmonic Progression',
    '10': 'Non-Chord Tones',
    '11': 'Melody',
    '12': 'Pop/Popular Form',
    '13': 'Phrases in Combination',
    '14': 'Texture & Accompaniment',
    '15': 'Musical Elements & Analysis',
    '16': 'World Music Theory',
    '17': 'Vocal Music',
    '18': 'Dance Music',
    '19': 'Film & Game Music',
    '22': 'Modulation',
    '24': 'Binary & Ternary Form',
    '25': 'Sonata & Rondo',
}

# Ensure output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def extract_title_from_html(html_content: str, filename: str) -> str:
    """Extract title from HTML <title> tag or generate from filename."""
    match = re.search(r'<title>([^<]+)</title>', html_content, re.IGNORECASE)
    if match:
        title = match.group(1)
        # Clean up common prefixes
        title = re.sub(r'^\d{2}[-.]?\d{2}[-.]?\s*', '', title)
        return title.strip()
    
    # Fallback: generate from filename
    name = filename.replace('.html', '')
    name = re.sub(r'^\d{2}-\d{2}-', '', name)
    words = re.split(r'(?=[A-Z])|[-_]', name)
    return ' '.join(word.capitalize() for word in words if word).strip()


def extract_main_content(html_content: str) -> str:
    """Extract raw HTML content between <main> tags or from <body>."""
    # Try <main> first
    match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1).strip()
    
    # Fallback to <body>
    match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
    if match:
        content = match.group(1)
        # Remove nav, header, footer elements
        content = re.sub(r'<nav[^>]*>.*?</nav>', '', content, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(r'<header[^>]*>.*?</header>', '', content, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(r'<footer[^>]*>.*?</footer>', '', content, flags=re.DOTALL | re.IGNORECASE)
        return content.strip()
    
    return ""


def html_to_jsx(html: str) -> str:
    """Convert HTML to JSX-compatible format."""
    # Replace class with className
    html = re.sub(r'\bclass=', 'className=', html)
    
    # Replace for with htmlFor (in labels)
    html = re.sub(r'\bfor=', 'htmlFor=', html)
    
    # Self-close void elements
    void_elements = ['br', 'hr', 'img', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr']
    for elem in void_elements:
        html = re.sub(rf'<{elem}([^>]*)(?<!/)>', rf'<{elem}\1 />', html)
    
    # Fix external/ paths to /theory/external/
    html = re.sub(r'src="external/', 'src="/theory/external/', html)
    html = re.sub(r"src='external/", "src='/theory/external/", html)
    html = re.sub(r'href="external/', 'href="/theory/external/', html)
    html = re.sub(r"href='external/", "href='/theory/external/", html)
    
    # Escape backticks and template literals for JSX string
    html = html.replace('\\', '\\\\')
    html = html.replace('`', '\\`')
    html = html.replace('${', '\\${')
    
    return html


def generate_component_name(filename: str) -> str:
    """Generate React component name from filename."""
    # Remove extension
    name = filename.replace('.html', '')
    
    # Extract chapter and topic numbers (e.g., 01-02 -> Ch01Topic02)
    match = re.match(r'^(\d{2})-(\d{2})-?(.*)$', name)
    if match:
        chapter, topic, rest = match.groups()
        # Convert rest to PascalCase
        if rest:
            parts = re.split(r'[-_]', rest)
            rest_pascal = ''.join(word.capitalize() for word in parts if word)
            return f"Ch{chapter}{rest_pascal}Page"
        else:
            return f"Ch{chapter}Topic{topic}Page"
    
    # Fallback: just convert to PascalCase
    parts = re.split(r'[-_]', name)
    return ''.join(word.capitalize() for word in parts) + 'Page'


def get_chapter_num(filename: str) -> str:
    """Extract chapter number from filename."""
    match = re.match(r'^(\d{2})-', filename)
    return match.group(1) if match else '00'


def get_topic_id(filename: str) -> str:
    """Extract topic ID (e.g., 01-02) from filename."""
    match = re.match(r'^(\d{2}-\d{2})', filename)
    return match.group(1) if match else filename.replace('.html', '')


def create_react_component(html_path: Path) -> tuple:
    """
    Create a React component from an HTML file.
    Returns: (component_name, file_content, chapter_num, topic_id, title)
    """
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    filename = html_path.name
    title = extract_title_from_html(html_content, filename)
    main_content = extract_main_content(html_content)
    
    if not main_content:
        print(f"  ⚠️  No content found in {filename}")
        return None, None, None, None, None
    
    # Convert to JSX
    jsx_content = html_to_jsx(main_content)
    
    # Generate names
    component_name = generate_component_name(filename)
    chapter_num = get_chapter_num(filename)
    topic_id = get_topic_id(filename)
    chapter_name = CHAPTER_NAMES.get(chapter_num, f'Chapter {chapter_num}')
    
    # Create the React component
    component_content = f'''import React from 'react';
import {{ Link }} from 'react-router-dom';

const {component_name}: React.FC = () => {{
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {{/* Breadcrumb Navigation */}}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. {chapter_num}</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">{title}</span>
      </nav>

      {{/* Page Header */}}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter {chapter_num}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {chapter_name}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          {title}
        </h1>
      </header>

      {{/* Main Content */}}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 dark:prose-li:text-gray-300
        prose-strong:text-slate-800 dark:prose-strong:text-slate-200
        prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:hover:underline
        prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
        prose-figure:my-6
        prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 dark:prose-figcaption:text-gray-400
        [&_section]:mb-8 [&_section]:bg-slate-50 dark:[&_section]:bg-slate-800/50 [&_section]:rounded-lg [&_section]:p-6
        [&_table]:w-full [&_th]:bg-slate-100 dark:[&_th]:bg-slate-700 [&_th]:p-2 [&_td]:p-2 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{{{ __html: `{jsx_content}` }}}} />
      </div>

      {{/* Back to Theory Index */}}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/theory"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
        >
          ← Back to Theory Index
        </Link>
      </div>
    </article>
  );
}};

export default {component_name};
'''
    
    return component_name, component_content, chapter_num, topic_id, title


def main():
    """Main function to batch convert all Theory HTML files."""
    print("📚 Batch Converting Theory Pages to React")
    print("=" * 60)
    
    # Find all HTML files (exclude index.html)
    html_files = sorted([f for f in HTML_DIR.glob("*.html") if f.name != 'index.html'])
    print(f"Found {len(html_files)} HTML files to convert\n")
    
    # Track results by chapter
    chapters = {}
    all_components = []
    
    for html_file in html_files:
        print(f"Converting: {html_file.name}")
        
        try:
            component_name, content, chapter_num, topic_id, title = create_react_component(html_file)
            
            if content is None:
                continue
            
            # Organize by chapter
            if chapter_num not in chapters:
                chapters[chapter_num] = []
            
            # Create chapter directory
            chapter_dir = OUTPUT_DIR / f"chapter{chapter_num}"
            chapter_dir.mkdir(parents=True, exist_ok=True)
            
            # Write the component
            output_file = chapter_dir / f"{component_name}.tsx"
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"  ✅ Created: chapter{chapter_num}/{component_name}.tsx")
            
            chapters[chapter_num].append({
                'name': component_name,
                'topic_id': topic_id,
                'title': title,
                'file': output_file
            })
            all_components.append({
                'name': component_name,
                'chapter': chapter_num,
                'topic_id': topic_id,
                'title': title
            })
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
            import traceback
            traceback.print_exc()
    
    # Generate index.ts for each chapter
    print("\n📝 Generating barrel exports...")
    for chapter_num, components in chapters.items():
        chapter_dir = OUTPUT_DIR / f"chapter{chapter_num}"
        index_content = "// Auto-generated barrel export\n"
        for comp in components:
            index_content += f"export {{ default as {comp['name']} }} from './{comp['name']}';\n"
        
        with open(chapter_dir / "index.ts", 'w') as f:
            f.write(index_content)
        print(f"  ✅ Created: chapter{chapter_num}/index.ts")
    
    # Generate main index.ts
    main_index = "// Auto-generated barrel export for all theory chapters\n"
    for chapter_num in sorted(chapters.keys()):
        main_index += f"export * from './chapter{chapter_num}';\n"
    
    with open(OUTPUT_DIR / "index.ts", 'w') as f:
        f.write(main_index)
    print(f"  ✅ Created: theory/index.ts")
    
    # Generate TheoryRoutes.tsx
    print("\n📝 Generating TheoryRoutes.tsx...")
    routes_content = '''import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TheoryListPage from '../pages/TheoryListPage';

// Import all theory components
'''
    
    # Add imports
    for chapter_num in sorted(chapters.keys()):
        for comp in chapters[chapter_num]:
            routes_content += f"import {{ {comp['name']} }} from '../pages/theory/chapter{chapter_num}';\n"
    
    routes_content += '''
const TheoryRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<TheoryListPage />} />
'''
    
    # Add route definitions
    for comp in all_components:
        routes_content += f'      <Route path="{comp["topic_id"]}" element={{<{comp["name"]} />}} />\n'
    
    routes_content += '''    </Routes>
  );
};

export default TheoryRoutes;
'''
    
    routes_file = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/routes/TheoryRoutes.tsx")
    routes_file.parent.mkdir(parents=True, exist_ok=True)
    with open(routes_file, 'w') as f:
        f.write(routes_content)
    print(f"  ✅ Created: routes/TheoryRoutes.tsx")
    
    # Summary
    print("\n" + "=" * 60)
    print(f"✅ Successfully converted {len(all_components)} pages across {len(chapters)} chapters")
    print(f"\n📁 Output directory: {OUTPUT_DIR}")
    print(f"📁 Routes file: {routes_file}")
    
    print("\n⚡ Next steps:")
    print("1. Update App.tsx to use TheoryRoutes")
    print("2. Run: npm run typecheck")
    print("3. Run: npm run dev")


if __name__ == "__main__":
    main()
