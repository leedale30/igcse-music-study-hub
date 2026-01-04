#!/usr/bin/env python3
"""
Batch convert AOS2 Classical Music HTML pages to React components.
Extracts content from <main> tags and creates TSX files.
"""

import os
import re
from pathlib import Path

# Paths
HTML_DIR = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/public/aos/aos02-classical-music")
OUTPUT_DIR = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/pages/aos2/classical")

# Ensure output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def extract_title_from_html(html_content: str) -> str:
    """Extract title from HTML <title> tag."""
    match = re.search(r'<title>([^<]+)</title>', html_content, re.IGNORECASE)
    if match:
        title = match.group(1)
        # Clean up title
        title = title.replace('Aos02 ', '').replace('Aos02-', '')
        title = re.sub(r'\d+\s*', '', title)
        return title.strip().title()
    return "Untitled Page"


def extract_main_content(html_content: str) -> str:
    """Extract raw HTML content between <main> tags."""
    match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return ""


def html_to_jsx(html: str) -> str:
    """Convert HTML to JSX-compatible format."""
    # Replace class with className
    html = re.sub(r'\bclass=', 'className=', html)
    
    # Self-close void elements
    void_elements = ['br', 'hr', 'img', 'input', 'meta', 'link']
    for elem in void_elements:
        html = re.sub(rf'<{elem}([^>]*)(?<!/)>', rf'<{elem}\1 />', html)
    
    # Fix HTML entities
    html = html.replace('&', '&amp;')
    html = re.sub(r'&amp;([a-z]+);', r'&\1;', html)  # Restore valid entities
    
    return html


def generate_component_name(file_path: Path) -> str:
    """Generate React component name from file path."""
    name = file_path.stem
    parts = name.replace('aos02-', '').replace('-', ' ').split()
    component_name = ''.join(word.capitalize() for word in parts)
    return f"Classical{component_name}Page"


def generate_route_path(file_path: Path, html_dir: Path) -> str:
    """Generate URL route path from file path."""
    relative = file_path.parent.relative_to(html_dir)
    parts = str(relative).split('/')
    
    simplified = []
    for part in parts:
        clean = re.sub(r'^aos02-\d+-', '', part)
        clean = re.sub(r'^aos02-\d+-\d+-', '', clean)
        clean = re.sub(r'^\d+-', '', clean)
        if clean and clean not in simplified:
            simplified.append(clean)
    
    if not simplified:
        return "/aos/classical"
    
    return f"/aos/classical/{'/'.join(simplified)}"


def create_react_component(html_path: Path, html_dir: Path) -> tuple:
    """Create a React component from an HTML file."""
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    title = extract_title_from_html(html_content)
    main_content = extract_main_content(html_content)
    
    if not main_content:
        print(f"  ⚠️  No <main> content found in {html_path.name}")
        return None, None, None
    
    jsx_content = html_to_jsx(main_content)
    component_name = generate_component_name(html_path)
    route_path = generate_route_path(html_path, html_dir)
    
    component_content = f'''import React from 'react';
import {{ Link }} from 'react-router-dom';

const {component_name}: React.FC = () => {{
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {{/* Breadcrumb Navigation */}}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">{title}</span>
      </nav>

      {{/* Page Header */}}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 2 • Classical Music
        </p>
      </header>

      {{/* Main Content */}}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 prose-h2:dark:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 prose-li:dark:text-gray-300
        prose-strong:text-slate-800 prose-strong:dark:text-slate-200
        prose-em:text-gray-600 prose-em:dark:text-gray-400
        prose-a:text-sky-600 prose-a:dark:text-sky-400 prose-a:hover:underline
        [&_section]:mb-10 [&_section]:bg-slate-50 [&_section]:dark:bg-slate-800 [&_section]:rounded-lg [&_section]:p-6
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{{{ __html: `{jsx_content.replace('`', '\\`').replace('${', '\\${')}` }}}} />
      </div>
    </article>
  );
}};

export default {component_name};
'''
    
    return component_name, component_content, route_path


def main():
    """Main function to batch convert all AOS2 HTML files."""
    print("🎼 Batch Converting AOS2 Classical Music Pages to React")
    print("=" * 60)
    
    html_files = sorted(HTML_DIR.rglob("*.html"))
    print(f"Found {len(html_files)} HTML files to convert\n")
    
    components = []
    routes = []
    
    for html_file in html_files:
        rel_path = html_file.relative_to(HTML_DIR)
        print(f"Converting: {rel_path}")
        
        try:
            component_name, content, route_path = create_react_component(html_file, HTML_DIR)
            
            if content is None:
                continue
            
            output_file = OUTPUT_DIR / f"{component_name}.tsx"
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"  ✅ Created: {component_name}.tsx")
            
            components.append((component_name, output_file))
            routes.append((component_name, route_path))
            
        except Exception as e:
            print(f"  ❌ Error: {e}")
    
    print("\n" + "=" * 60)
    print(f"✅ Successfully converted {len(components)} pages")
    
    # Save routes to a file for reference
    routes_file = OUTPUT_DIR / "_routes.txt"
    with open(routes_file, 'w') as f:
        f.write("// Import statements\n")
        for name, _ in components:
            f.write(f"import {name} from './pages/aos2/classical/{name}';\n")
        f.write("\n// Route definitions\n")
        for name, route in routes:
            f.write(f'<Route path="{route}" element={{<{name} />}} />\n')
    
    print(f"\n📄 Routes saved to: {routes_file}")


if __name__ == "__main__":
    main()
