from bs4 import BeautifulSoup, Tag
import os

html_path = 'public/aos/aos01-baroque-music/vivaldi/spring/deep-dive.html'

if not os.path.exists(html_path):
    print("File not found.")
    exit(1)

with open(html_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

print(f"Soup loaded. Body exists: {bool(soup.body)}")

# Search for Full Score start
start_h1 = soup.find(lambda t: t.name == "h1" and "X:1" in t.get_text())
print(f"Full Score Start Node: {start_h1 is not None}")
if start_h1:
    print(f"Text: {start_h1.get_text().strip()}")

# Search for Snippets
snippets = []
for p in soup.find_all('p'):
    txt = p.get_text()
    if "X:1" in txt and "T:" in txt:
        snippets.append(p)
    elif "[V:1]" in txt:
        snippets.append(p)

print(f"Found {len(snippets)} snippets.")

# Attempt modifications
try:
    # Styles
    if soup.body:
        style = soup.new_tag('style')
        style.string = "/* Test Style */"
        soup.body.insert(0, style)
        print("Style inserted.")

    # Convert Full Score
    if start_h1:
        abc_lines = []
        to_remove = []
        curr = start_h1
        while curr and curr.name == "h1":
            abc_lines.append(curr.get_text().strip())
            to_remove.append(curr)
            curr = curr.find_next_sibling()
            
        full_abc = "\n".join(abc_lines)
        div = soup.new_tag('div', attrs={'class': 'abc-container'})
        div.string = full_abc
        
        start_h1.insert_before(div)
        for n in to_remove:
            n.decompose()
        print("Full Score converted.")

    # Convert Snippets
    for p in snippets:
        clean_lines = []
        for child in p.children:
             if child.name == 'br':
                 clean_lines.append('\n')
             elif child.string:
                 clean_lines.append(child.string)
             else:
                 clean_lines.append(child.get_text())
        new_div = soup.new_tag('div', attrs={'class': 'abc-container'})
        new_div.string = "".join(clean_lines).strip()
        p.replace_with(new_div)
    print("Snippets converted.")

    # Scripts
    if soup.body:
        s = soup.new_tag('script')
        s.string = "console.log('init');"
        soup.body.append(s)
        print("Script appended.")

    # Serialize
    out = str(soup)
    print("Serialization success.")
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(out)
    print("File written.")

except Exception as e:
    print(f"Error during modification: {e}")
    # Inspect broken tags
    for t in soup.descendants:
        if isinstance(t, Tag) and t.name is None:
            print(f"BROKEN TAG FOUND: {t}")
