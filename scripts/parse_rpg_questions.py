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
                'prompt': q_match.group(2),
                'choices': [],
                'answer': None
            }
            continue
            
        c_match = re.match(r'^([A-D])\)\s+(.*?)(?:\s+\*)?$', line_stripped)
        if c_match and current_q:
            choice_text = c_match.group(2).strip()
            # The * might be separated by spaces or right against the text
            is_correct = '*' in line_stripped[line_stripped.find(')') :]
            
            if is_correct:
                current_q['answer'] = len(current_q['choices'])
            
            current_q['choices'].append(choice_text)
            
    if current_q:
        questions.append(current_q)
        
    return questions

def generate_sql(questions):
    sql_lines = ["-- Purge old questions and insert new verified set", "DELETE FROM rpg_questions;", "INSERT INTO rpg_questions (type, content, answer_key, difficulty, subject_tag) VALUES"]
    
    values = []
    for q in questions:
        if len(q['choices']) != 4 or q['answer'] is None:
            continue
            
        content = {
            'prompt': q['prompt'],
            'choices': q['choices'],
            'questionType': 'mcq'
        }
        
        content_json = json.dumps(content).replace("'", "''")
        answer_key = str(q['answer'])
        
        values.append(f"('mcq', '{content_json}'::jsonb, '{answer_key}'::jsonb, 3, 'glossary')")
        
    sql_lines.append(",\n".join(values) + ";")
    return "\n".join(sql_lines)

if __name__ == "__main__":
    qs = parse_questions('/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/assets/all_questions_combined.txt')
    sql = generate_sql(qs)
    with open('/Users/antonyleedale/GIT OLD WEBSITE IGCSE/igcse-music-study-hub/scripts/rpg_questions.sql', 'w', encoding='utf-8') as f:
        f.write(sql)
    print(f"Updated scripts/rpg_questions.sql with {len(qs)} questions.")
