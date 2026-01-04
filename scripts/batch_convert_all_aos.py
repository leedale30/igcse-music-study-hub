#!/usr/bin/env python3
"""
Batch convert all remaining AOS HTML pages (AOS3-7) to React components.
"""

import os
import re
from pathlib import Path

# AOS configurations
AOS_CONFIGS = [
    {
        "num": 3,
        "name": "Romantic",
        "folder": "aos03-romantic-music",
        "prefix": "aos03",
        "title": "Romantic Music"
    },
    {
        "num": 4,
        "name": "MusicAndWords",
        "folder": "aos04-music-and-words",
        "prefix": "aos04",
        "title": "Music and Words"
    },
    {
        "num": 5,
        "name": "Dance",
        "folder": "aos05-music-for-dance",
        "prefix": "aos05",
        "title": "Music for Dance"
    },
    {
        "num": 6,
        "name": "SmallEnsemble",
        "folder": "aos06-music-for-small-ensemble",
        "prefix": "aos06",
        "title": "Music for Small Ensemble"
    },
    {
        "num": 7,
        "name": "StageScreen",
        "folder": "aos07-music-for-stage-and-screen",
        "prefix": "aos07",
        "title": "Music for Stage and Screen"
    },
]

BASE_PUBLIC = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/public/aos")
BASE_OUTPUT = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/pages")
ROUTES_DIR = Path("/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/routes")


def extract_title_from_html(html_content: str, prefix: str) -> str:
    match = re.search(r'<title>([^<]+)</title>', html_content, re.IGNORECASE)
    if match:
        title = match.group(1)
        title = title.replace(f'Aos0{prefix[-1]} ', '').replace(f'Aos0{prefix[-1]}-', '')
        title = re.sub(r'\d+\s*', '', title)
        return title.strip().title()
    return "Untitled Page"


def extract_main_content(html_content: str) -> str:
    match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return ""


def html_to_jsx(html: str) -> str:
    html = re.sub(r'\bclass=', 'className=', html)
    void_elements = ['br', 'hr', 'img', 'input', 'meta', 'link']
    for elem in void_elements:
        html = re.sub(rf'<{elem}([^>]*)(?<!/)>', rf'<{elem}\1 />', html)
    html = html.replace('&', '&amp;')
    html = re.sub(r'&amp;([a-z]+);', r'&\1;', html)
    return html


def generate_component_name(file_path: Path, name: str, prefix: str) -> str:
    stem = file_path.stem
    parts = stem.replace(f'{prefix}-', '').replace('-', ' ').split()
    component_name = ''.join(word.capitalize() for word in parts)
    return f"{name}{component_name}Page"


def generate_route_path(file_path: Path, html_dir: Path, route_base: str, prefix: str) -> str:
    relative = file_path.parent.relative_to(html_dir)
    parts = str(relative).split('/')
    
    simplified = []
    for part in parts:
        clean = re.sub(rf'^{prefix}-\d+-', '', part)
        clean = re.sub(rf'^{prefix}-\d+-\d+-', '', clean)
        clean = re.sub(r'^\d+-', '', clean)
        if clean and clean not in simplified:
            simplified.append(clean)
    
    if not simplified or simplified == ['.']:
        return f"/aos/{route_base}"
    
    return f"/aos/{route_base}/{'/'.join(simplified)}"


def create_react_component(html_path: Path, html_dir: Path, config: dict) -> tuple:
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    title = extract_title_from_html(html_content, config["prefix"])
    main_content = extract_main_content(html_content)
    
    if not main_content:
        return None, None, None
    
    jsx_content = html_to_jsx(main_content)
    component_name = generate_component_name(html_path, config["name"], config["prefix"])
    route_base = config["name"].lower().replace("and", "-").replace("musicandwords", "music-and-words").replace("smallensemble", "small-ensemble").replace("stagescreen", "stage-screen")
    route_path = generate_route_path(html_path, html_dir, route_base, config["prefix"])
    
    component_content = f'''import React from 'react';
import {{ Link }} from 'react-router-dom';

const {component_name}: React.FC = () => {{
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {{/* Breadcrumb Navigation */}}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/{route_base}" className="hover:text-sky-600 dark:hover:text-sky-400">{config["title"]}</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">{title}</span>
      </nav>

      {{/* Page Header */}}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study {config["num"]} • {config["title"]}
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
      ">
        <div dangerouslySetInnerHTML={{{{ __html: `{jsx_content.replace('`', '\\`').replace('${', '\\${')}` }}}} />
      </div>
    </article>
  );
}};

export default {component_name};
'''
    
    return component_name, component_content, route_path


def create_routes_file(components: list, routes: list, config: dict, output_dir: Path):
    """Create barrel export and routes file."""
    # Barrel export
    barrel_content = f"// Barrel export for AOS{config['num']} {config['title']} pages\n\n"
    for name, _ in components:
        barrel_content += f"export {{ default as {name} }} from './{name}';\n"
    
    with open(output_dir / "index.ts", 'w') as f:
        f.write(barrel_content)
    
    # Routes file
    route_base = config["name"].lower().replace("and", "-").replace("musicandwords", "music-and-words").replace("smallensemble", "small-ensemble").replace("stagescreen", "stage-screen")
    routes_content = f'''import React from 'react';
import {{ Route }} from 'react-router-dom';
import {{
'''
    for name, _ in components:
        routes_content += f"  {name},\n"
    
    routes_content += f"}} from '../pages/aos{config['num']}/{route_base}';\n\n"
    routes_content += f"export const {config['name']}Routes = (\n  <>\n"
    
    for name, route in routes:
        routes_content += f'    <Route path="{route}" element={{<{name} />}} />\n'
    
    routes_content += "  </>\n);\n\nexport default " + config['name'] + "Routes;\n"
    
    routes_file = ROUTES_DIR / f"{config['name']}Routes.tsx"
    with open(routes_file, 'w') as f:
        f.write(routes_content)
    
    return routes_file


def process_aos(config: dict):
    """Process a single AOS directory."""
    html_dir = BASE_PUBLIC / config["folder"]
    route_base = config["name"].lower().replace("and", "-").replace("musicandwords", "music-and-words").replace("smallensemble", "small-ensemble").replace("stagescreen", "stage-screen")
    output_dir = BASE_OUTPUT / f"aos{config['num']}" / route_base
    
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"\n🎼 Converting AOS{config['num']}: {config['title']}")
    print("=" * 50)
    
    html_files = sorted(html_dir.rglob("*.html"))
    print(f"Found {len(html_files)} HTML files\n")
    
    components = []
    routes = []
    
    for html_file in html_files:
        try:
            component_name, content, route_path = create_react_component(html_file, html_dir, config)
            
            if content is None:
                continue
            
            output_file = output_dir / f"{component_name}.tsx"
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            components.append((component_name, output_file))
            routes.append((component_name, route_path))
            
        except Exception as e:
            print(f"  ❌ Error in {html_file.name}: {e}")
    
    # Create routes file
    routes_file = create_routes_file(components, routes, config, output_dir)
    
    print(f"✅ Created {len(components)} components")
    print(f"📄 Routes saved to: {routes_file}")
    
    return config['name'], len(components)


def main():
    print("🎼 Batch Converting AOS3-7 to React")
    print("=" * 60)
    
    results = []
    for config in AOS_CONFIGS:
        name, count = process_aos(config)
        results.append((name, count))
    
    print("\n" + "=" * 60)
    print("📊 SUMMARY")
    print("=" * 60)
    for name, count in results:
        print(f"  {name}: {count} pages")
    print(f"\n  Total: {sum(c for _, c in results)} pages")


if __name__ == "__main__":
    main()
