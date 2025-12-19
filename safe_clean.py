from bs4 import BeautifulSoup
import re
import os

html_path = 'public/aos/aos01-baroque-music/vivaldi/spring/deep-dive.html'

if not os.path.exists(html_path):
    print(f"Error: {html_path} not found")
    exit(1)

with open(html_path, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

# Body check
if not soup.body:
    print("No body found, creating...")
    soup.append(soup.new_tag('body'))

print("Injecting styles/scripts into BODY...")

# CSS
style = soup.new_tag('style')
style.string = """
    .abc-container { 
        margin: 30px 0; 
        background: #ffffff; 
        padding: 20px; 
        border-radius: 8px; 
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border: 1px solid #e1e4e8;
    }
    .abcjs-inline-audio { 
        background: #f1f3f5; 
        padding: 10px; 
        border-radius: 0 0 8px 8px; 
        margin-top: 10px;
    }
    .abcjs-midi-loop.abcjs-btn { display: none !important; }
    svg { overflow: visible !important; }
    
    table { width: 100%; border-collapse: collapse; margin: 20px 0; background: white; }
    th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
    th { background-color: #f8f9fa; font-weight: bold; }
    tr:nth-child(even) { background-color: #f8f9fa; }
"""
soup.body.insert(0, style)

# JS
abcjs_script = soup.new_tag('script', src="https://cdnjs.cloudflare.com/ajax/libs/abcjs/6.2.2/abcjs-basic-min.js")
soup.body.append(abcjs_script)

# Process Full Score
start_node = soup.find(lambda tag: tag.name == "h1" and "X:1" in tag.get_text())

if start_node:
    print("Processing Full Score...")
    abc_content = []
    nodes_to_remove = []
    curr = start_node
    while curr and curr.name == "h1":
        text = curr.get_text().strip()
        abc_content.append(text)
        nodes_to_remove.append(curr)
        curr = curr.find_next_sibling()
        
    full_abc = "\n".join(abc_content)
    wrapper = soup.new_tag('div', attrs={'class': 'abc-container', 'id': 'full-score-container'})
    wrapper.string = full_abc
    start_node.insert_before(wrapper)
    for node in nodes_to_remove:
        node.decompose()

# Process Snippets
blocks = soup.find_all('p', class_='p3')
code_blocks_converted = 0
for p in blocks:
    text = p.get_text()
    if ("X:1" in text and "T:" in text) or "[V:1]" in text or (text.strip().startswith("%") and "RITORNELLO" in text):
        clean_lines = []
        for child in p.children:
            if child.name == 'br':
                clean_lines.append('\n')
            elif child.string:
                clean_lines.append(child.string)
            else:
                clean_lines.append(child.get_text())
        
        # Safe replacement
        full_text = "".join(clean_lines).strip()
        new_div = soup.new_tag('div', attrs={'class': 'abc-container'})
        new_div.string = full_text
        p.replace_with(new_div)
        code_blocks_converted += 1

print(f"Converted {code_blocks_converted} snippets.")

# Init Script
init_script = soup.new_tag('script')
init_script.string = """
(function() {
    function initABC() {
        if (typeof ABCJS === 'undefined') {
            console.log("ABCJS waiting...");
            setTimeout(initABC, 100);
            return;
        }
        var abcElements = document.querySelectorAll('.abc-container');
        abcElements.forEach(function(el, index) {
            if (el.querySelector('svg')) return;
            var abcString = el.innerText.trim();
            el.innerHTML = "";
            var idBase = "abc-item-" + index + "-" + Math.floor(Math.random() * 1000);
            var visualDiv = document.createElement("div");
            visualDiv.id = idBase + "-vis";
            el.appendChild(visualDiv);
            var audioDiv = document.createElement("div");
            audioDiv.id = idBase + "-aud";
            el.appendChild(audioDiv);
            var visualObj = ABCJS.renderAbc(visualDiv.id, abcString, { responsive: "resize", add_classes: true, staffwidth: 800 });
            if (ABCJS.synth.supportsAudio()) {
                var synthControl = new ABCJS.synth.SynthController();
                synthControl.load(audioDiv.id, null, { displayPlay: true, displayProgress: true, displayWarp: true });
                var createSynth = new ABCJS.synth.CreateSynth();
                createSynth.init({visualObj: visualObj[0]}).then(function () {
                    synthControl.setTune(visualObj[0], false).catch(function(e){});
                }).catch(function(e){});
            }
        });
    }
    initABC();
})();
"""
soup.body.append(init_script)

with open(html_path, 'wb') as f:
    f.write(soup.encode('utf-8')) # Use encode instead of str
    
print("Safe clean complete.")
