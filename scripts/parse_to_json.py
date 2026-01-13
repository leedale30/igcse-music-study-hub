import re
import json

def parse_questions(filename):
    questions = []
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    current_q = None
    
    for line in lines:
        line_stripped = line.strip()
        if not line_stripped:
            continue
            
        q_match = re.match(r'^(\d+)\.\s+(.*)$', line_stripped)
        if q_match:
            if current_q:
                questions.append(current_q)
            current_q = {
                'prompt': q_match.group(2).strip(),
                'choices': [],
                'answer': None
            }
            continue
            
        c_match = re.match(r'^([A-D])\)\s+(.*)$', line_stripped)
        if c_match and current_q:
            choice_raw = c_match.group(2).strip()
            is_correct = choice_raw.endswith('*')
            choice_text = choice_raw.rstrip('*').strip()
            
            if is_correct:
                current_q['answer'] = len(current_q['choices'])
            
            current_q['choices'].append(choice_text)
            
    if current_q:
        questions.append(current_q)
        
    return questions

def generate_data(questions):
    data = []
    for q in questions:
        if len(q['choices']) != 4 or q['answer'] is None:
            continue
            
        data.append({
            'type': 'mcq',
            'content': {
                'prompt': q['prompt'],
                'choices': q['choices'],
                'questionType': 'mcq'
            },
            # Edge Function expects an object like { "correct": 0 }
            'answer_key': { 'correct': q['answer'] },
            'difficulty': 3,
            'subject_tag': 'glossary',
            'is_active': True
        })
    return data

if __name__ == "__main__":
    qs = parse_questions('/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/assets/all_questions_combined.txt')
    data = generate_data(qs)
    with open('/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/scripts/rpg_questions.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print(f"Generated scripts/rpg_questions.json with {len(data)} questions.")
