#!/usr/bin/env python3
"""Add unified navigation to all HTML files in NEW WEBSITE"""

import os
import re

BASE_DIR = "/Users/antonyleedale/Desktop/BLOOODY HELL/NEW WEBSITE"

def get_nav_html(depth):
    """Generate nav HTML with correct relative paths based on folder depth"""
    prefix = "../" * depth if depth > 0 else ""
    return f'''    <nav>
        <ul>
            <li><a href="{prefix}index.html">Home</a></li>
            <li><a href="{prefix}glossary.html">Glossary</a></li>
            <li><a href="{prefix}instruments/index.html">Instruments</a></li>
            <li><a href="{prefix}theory/index.html">Theory</a></li>
            <li><a href="{prefix}areas-of-study/index.html">Areas of Study</a></li>
            <li><a href="{prefix}coursework/index.html">Coursework</a></li>
        </ul>
    </nav>
'''

def add_stylesheet_link(content, depth):
    """Add stylesheet link if not present"""
    prefix = "../" * depth if depth > 0 else ""
    if '<link rel="stylesheet"' not in content and f'href="{prefix}style.css"' not in content:
        # Add stylesheet link before </head>
        style_link = f'    <link rel="stylesheet" href="{prefix}style.css">\n'
        content = content.replace('</head>', style_link + '</head>')
    return content

def process_file(filepath, depth):
    """Add nav to a single HTML file"""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Skip if already has our new nav (check for specific structure)
        if 'href="../index.html">Home' in content or 'href="index.html">Home' in content:
            # Already processed, but need to remove old sidebar
            pass
        
        # Remove old sidebar div completely (from FULL WEB V5)
        content = re.sub(r'<div class="sidebar">.*?</div>\s*</nav>\s*</div>', '', content, flags=re.DOTALL)
        content = re.sub(r'<div class="sidebar">.*?<nav class="sidebar-nav">.*?</nav>\s*</div>', '', content, flags=re.DOTALL)
        
        # Remove existing nav if present (our simple nav)
        content = re.sub(r'<nav>\s*<ul>.*?</ul>\s*</nav>', '', content, flags=re.DOTALL)
        
        # Add stylesheet link
        content = add_stylesheet_link(content, depth)
        
        # Add nav after <body> or <body ...>
        nav_html = get_nav_html(depth)
        content = re.sub(r'(<body[^>]*>)', r'\1\n' + nav_html, content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def process_directory(dir_path, depth=0):
    """Process all HTML files in a directory"""
    count = 0
    for item in os.listdir(dir_path):
        item_path = os.path.join(dir_path, item)
        if os.path.isfile(item_path) and item.endswith('.html'):
            if process_file(item_path, depth):
                count += 1
                print(f"Updated: {item}")
        elif os.path.isdir(item_path) and item != 'external':
            count += process_directory(item_path, depth + 1)
    return count

if __name__ == "__main__":
    # Process root files
    print("Processing root files...")
    root_count = 0
    for item in os.listdir(BASE_DIR):
        item_path = os.path.join(BASE_DIR, item)
        if os.path.isfile(item_path) and item.endswith('.html'):
            if process_file(item_path, 0):
                root_count += 1
                print(f"Updated: {item}")
    
    # Process subdirectories
    for subdir in ['instruments', 'theory', 'coursework', 'areas-of-study']:
        subdir_path = os.path.join(BASE_DIR, subdir)
        if os.path.exists(subdir_path):
            print(f"\nProcessing {subdir}/...")
            count = process_directory(subdir_path, 1)
            print(f"Updated {count} files in {subdir}")
    
    print("\nDone!")
