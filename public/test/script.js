// Default Quiz Text (From User's Untitled 2.txt)
const defaultQuizText = `
Title: Baroque Allegro Analysis
Code: AOS1-BAROQUE-001

### **Audio Stimulus (ABC Notation)**

\`\`\`abc
X:1
T:Specimen Extract: Baroque Allegro
C:SchoolClass.Net
M:4/4
L:1/8
Q:"Allegro" 1/4=112
K:G
%%barnumbers 1
%%MIDI program 40
V:1 name="Violin (Concertino)"
!f! G2 d2 B2 G2 | d2 cB A2 D2 | G2 B2 c2 A2 | B4 A4 |
!p! B2 d2 c2 B2 | c2 e2 d2 c2 | d2 g2 f2 e2 | d4 !trill!c4 |
!f! B2 d2 g2 b2 | a2 g2 f2 e2 | d2 c2 B2 A2 | G4 z4 ||
V:2 name="Cello/Harpsichord (Continuo)" clef=bass
%%MIDI program 42
!f! G,4 B,4 | D,4 F,4 | G,4 E,4 | D,4 D,,4 |
!p! G,4 G,,4 | A,4 A,,4 | B,4 C,4 | D,4 D,,4 |
!f! G,4 B,4 | C,4 ^C,4 | D,4 D,,4 | G,,4 z4 ||
\`\`\`

### **Questions**

**1. Which period of musical history is this extract from?**
A. Classical
B. Romantic
C. Baroque
D. Twentieth Century

**2. What is the texture of the opening four bars?**
A. Monophonic (single line)
B. Melody and Accompaniment (Homophonic)
C. Heterophonic
D. A cappella

**3. In the Baroque era, the bass line (played here by the cello) and the chordal accompaniment (harpsichord) are collectively known as what?**
A. Alberti Bass
B. Basso Continuo
C. Ground Bass
D. Walking Bass

**4. Look at bars 5 and 6 (the *piano* section). What compositional device is used in the melody?**
A. Ascending Sequence
B. Descending Sequence
C. Inversion
D. Pedal Note

**5. What implies that this piece is in a Major key?**
A. It sounds happy and uses a major third in the tonic chord.
B. It sounds sad and uses a minor third.
C. It uses a drone.
D. It is atonal.

**6. Which ornament is heard in the violin part in bar 8 (beat 3)?**
A. Turn
B. Mordent
C. Acciaccatura
D. Trill

**7. Identify the cadence at the very end of the extract (bars 11–12).**
A. Plagal (IV–I)
B. Perfect (V–I)
C. Imperfect (I–V)
D. Interrupted (V–VI)

**8. The change in volume from *forte* (bar 4) to *piano* (bar 5) without a crescendo or diminuendo is known as:**
A. Sforzando
B. Terraced Dynamics
C. Marcato
D. Fade-out

**9. Which instrument would most likely be improvising chords based on the bass line in this extract?**
A. Piano
B. Harpsichord
C. Clarinet
D. Timpani

**10. What is the system of numbers written below the bass line to tell the keyboard player which chords to play called?**
A. Tablature
B. Cipher Notation
C. Figured Bass
D. Lead Sheet

**11. Which musical form, common in Baroque concertos, features a recurring main theme alternating with contrasting episodes?**
A. Sonata Form
B. Minuet and Trio
C. Ritornello Form
D. Theme and Variations

**12. In a Concerto Grosso, the small group of soloists (heard here as the violin) is called the:**
A. Tutti
B. Ripieno
C. Concertino
D. Orchestra

**13. The large accompanying group (the full orchestra) is called the:**
A. Ripieno / Tutti
B. Concertino
C. Soloist
D. Quartet

**14. Which time signature best fits this extract?**
A. 3/4
B. 4/4 (Common Time)
C. 6/8
D. 5/4

**15. If a composer wanted this music to depict a specific scene (e.g., a storm or birds), what would it be called?**
A. Absolute Music
B. Programme Music
C. Atonal Music
D. Aleatoric Music

**16. Which of the following features is NOT typical of the Baroque period?**
A. Use of Basso Continuo
B. Use of the Clarinet
C. Use of Ornamentation
D. Use of Diatonic Harmony

**17. Look at the bass line in bar 10 (C to C# to D). What harmonic effect does the C# suggest?**
A. A modulation (key change) or chromatic passing note heading to D.
B. A mistake in the score.
C. A change to a minor key.
D. A drone.

**18. Which composer is a set Focus Composer for Baroque Music (AOS1) in the 2026–2028 syllabus?**
A. Mozart
B. Vivaldi
C. Beethoven
D. Haydn

**19. What relationship exists between the key at the start (G Major) and the key at the dominant (D Major)?**
A. They are unrelated.
B. They are closely related keys.
C. It is the relative minor.
D. It is the tonic minor.

**20. The concept that a single mood or feeling should persist throughout a Baroque movement is known as:**
A. The Doctrine of the Affections
B. Sonata Principle
C. Minimalism
D. Serialism
`;

let questions = [];
let abcString = "";
let quizInfo = { title: "Webpage Quiz", code: "DEFAULT" };
let abcPlayer = null;

// Parser Function
function parseQuizData(text) {
    // Validation: Check for minimal required sections
    if (!text.includes("### **Questions**")) throw new Error("Missing '### **Questions**' section.");
    if (!text.includes("### **Mark Scheme**")) throw new Error("Missing '### **Mark Scheme**' section.");

    // 0. Extract Metadata
    const titleMatch = text.match(/^Title:\s*(.+)$/m);
    const codeMatch = text.match(/^Code:\s*(.+)$/m);

    // 1. Extract ABC
    const abcMatch = text.match(/```abc([\s\S]*?)```/);
    const parsedAbc = abcMatch ? abcMatch[1].trim() : "";

    // 2. Extract Questions (Splitting by "**Number.")
    const questionsBlock = text.split("### **Questions**")[1].split("### **Mark Scheme**")[0];
    const markSchemeBlock = text.split("### **Mark Scheme**")[1];

    const parsedQuestions = [];

    // Regex to find questions: **1. Question Text** followed by options
    const questionRegex = /\*\*(\d+)\.\s+(.*?)\*\*\s+([\s\S]*?)(?=\*\*|$)/g;
    let match;

    while ((match = questionRegex.exec(questionsBlock)) !== null) {
        const qNum = match[1];
        const qText = match[2].trim();
        const optionsText = match[3].trim();

        // Parse Options (A. ... B. ...)
        const options = [];
        const optionLines = optionsText.split('\n').map(l => l.trim()).filter(l => l);
        optionLines.forEach(line => {
            // Remove "A. " prefix
            const optContent = line.replace(/^[A-D]\.\s+/, "");
            options.push(optContent);
        });

        // Parse Answer from Mark Scheme
        // Looking for "**1. C. Answer text**" or "**1. C.**"
        // Also look for *Rationale:*
        const answerRegex = new RegExp(`\\*\\*${qNum}\\.\\s+([A-D])\\..*?\\*\\*`, "i");
        const rationaleRegex = new RegExp(`\\*\\*${qNum}\\..*?\\*\\*[\\s\\S]*?\\*Rationale:\\*\\s+(.*?)(?=\\n\\n|\\*\\*|$)`, "i");

        const answerMatch = markSchemeBlock.match(answerRegex);
        let correctIndex = 0;
        if (answerMatch) {
            const letter = answerMatch[1].toUpperCase();
            correctIndex = letter.charCodeAt(0) - 65; // A=0, B=1...
        }

        const rationaleMatch = rationaleRegex.exec(markSchemeBlock);
        const feedback = rationaleMatch ? rationaleMatch[1].trim() : "";

        parsedQuestions.push({
            question: qText,
            options: options,
            correct: correctIndex,
            feedback: feedback
        });
    }

    if (parsedQuestions.length === 0) throw new Error("No questions found. Check formatting (**1.** etc).");

    return {
        abc: parsedAbc,
        questions: parsedQuestions,
        info: {
            title: titleMatch ? titleMatch[1].trim() : "Custom Quiz",
            code: codeMatch ? codeMatch[1].trim() : "CUSTOM-00"
        }
    };
}


// Initialized via AbcPlayer
function initMusic() {
    if (!abcString) return;

    // Initialize Player if not exists
    if (!abcPlayer) {
        abcPlayer = new AbcPlayer("abc-paper", "abc-audio", {
            visualOptions: { responsive: "resize", add_classes: true }
        });
    }

    abcPlayer.load(abcString);
}

// File Upload Handler
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        loadQuizFromText(text);
    };
    reader.readAsText(file);
}

// Attach listeners
const quizUploader = document.getElementById('quiz-uploader');
if (quizUploader) quizUploader.addEventListener('change', handleFileUpload);

const libraryUploader = document.getElementById('library-uploader');
if (libraryUploader) libraryUploader.addEventListener('change', handleFileUpload);


document.addEventListener("DOMContentLoaded", () => {
    // Check for Quiz Code in URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        // We need to wait for quiz_data.js to load ALL_QUIZZES?
        // It's a synchronous script tag, so it should be ready.
        if (typeof ALL_QUIZZES !== 'undefined' && ALL_QUIZZES[code]) {
            console.log(`Loading quiz from code: ${code}`);
            loadQuizData(ALL_QUIZZES[code]);
        } else {
            console.warn(`Quiz code ${code} not found.`);
            // alert(`Quiz Code "${code}" not found. Returning to Library.`);
            showLibrary();
        }
    } else {
        // No code? Show Library
        showLibrary();
    }

    // Always render library to be ready
    if (typeof ALL_QUIZZES !== 'undefined') {
        renderQuizLibrary();
    }
});

function renderQuizLibrary() {
    const grid = document.getElementById("quiz-grid");
    if (!grid) return;

    grid.innerHTML = "";

    // Sort keys or just iterate
    const codes = Object.keys(ALL_QUIZZES);

    if (codes.length === 0) {
        grid.innerHTML = "<p>No quizzes found. Upload one!</p>";
        return;
    }

    codes.forEach(code => {
        const quiz = ALL_QUIZZES[code];
        const info = quiz.info || {};
        const title = info.title || "Untitled Quiz";
        const desc = info.description || "No description provided.";
        const qCount = quiz.questions ? quiz.questions.length : 0;

        const card = document.createElement("div");
        card.className = "card-item";
        card.onclick = () => {
            // Update URL without reload
            const newUrl = new URL(window.location);
            newUrl.searchParams.set("code", code);
            window.history.pushState({}, "", newUrl);

            loadQuizData(quiz);
        };

        card.innerHTML = `
            <h3>${title}</h3>
            <div class="meta">
                <span>Code: ${code}</span>
                <span>${qCount} Questions</span>
            </div>
            <p>${desc}</p>
            <button class="play-btn">Play Quiz</button>
        `;

        grid.appendChild(card);
    });
}

function showLibrary() {
    const lib = document.getElementById("quiz-library");
    const app = document.getElementById("app-container");
    const controls = document.getElementById("header-controls");

    if (lib) lib.style.display = "block";
    if (app) app.style.display = "none";
    if (controls) controls.style.display = "none";

    // Clear URL param
    const newUrl = new URL(window.location);
    newUrl.searchParams.delete("code");
    window.history.pushState({}, "", newUrl);
}

function loadQuizData(quizData) {
    // Hide Library, Show App
    const lib = document.getElementById("quiz-library");
    const app = document.getElementById("app-container");
    const controls = document.getElementById("header-controls");

    if (lib) lib.style.display = "none";
    if (app) app.style.display = "grid";
    // If mobile, it might be block? Layout grid handles responsive.
    if (controls) controls.style.display = "flex";

    abcString = quizData.abc;
    questions = quizData.questions;
    quizInfo = quizData.info;

    initMusic();
    initQuiz();
}

function loadQuizFromText(text) {
    try {
        const data = parseQuizData(text);
        // Add to ALL_QUIZZES temporarily so we can "play" it. 
        // Use the code from the file, or generate a TEMP one.
        const code = data.info.code || "CUSTOM-" + Date.now();
        ALL_QUIZZES[code] = data;

        // Update URL to match this new code
        const newUrl = new URL(window.location);
        newUrl.searchParams.set("code", code);
        window.history.pushState({}, "", newUrl);

        loadQuizData(data);
    } catch (e) {
        console.error(e);
        alert("Failed to parse quiz: " + e.message);
    }
}


// Quiz Logic Variables
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const quizContent = document.getElementById('quiz-content');

function initQuiz() {
    // Update Header Info
    const titleLabel = document.getElementById('quiz-title-label');
    const codeLabel = document.getElementById('quiz-code-label');

    if (titleLabel) titleLabel.textContent = quizInfo.title;
    if (codeLabel) codeLabel.textContent = "CODE: " + quizInfo.code;

    currentQuestionIndex = 0;
    score = 0;
    if (scoreElement) scoreElement.textContent = score;
    if (restartBtn) restartBtn.classList.add('hidden');
    if (quizContent) quizContent.classList.remove('hidden');

    // Shuffle Questions
    if (questions && questions.length > 0) {
        shuffleArray(questions);
    }

    loadQuestion();
}

function loadQuestion() {
    resetState();
    if (!questions || questions.length === 0) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (questionTextElement) questionTextElement.textContent = currentQuestion.question;

    // Update Progress Bar
    if (progressBar) {
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    if (optionsContainer && currentQuestion.options) {
        // Create array of objects with original index
        const optionsWithIndex = currentQuestion.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        // Shuffle the array
        shuffleArray(optionsWithIndex);

        optionsWithIndex.forEach((optObj) => {
            const button = document.createElement('button');
            button.innerText = optObj.text;
            button.classList.add('option-btn');
            button.dataset.originalIndex = optObj.originalIndex;
            button.addEventListener('click', (e) => selectAnswer(optObj.originalIndex, e.target));
            optionsContainer.appendChild(button);
        });
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetState() {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (feedbackContainer) {
        feedbackContainer.classList.add('hidden');
        feedbackContainer.classList.remove('correct', 'incorrect');
    }
    if (optionsContainer) {
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
    }
}

function selectAnswer(originalIndex, clickedButton) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = originalIndex === currentQuestion.correct;
    const buttons = optionsContainer.querySelectorAll('.option-btn');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    // Highlight selected
    clickedButton.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (!isCorrect) {
        // Find the correct button based on dataset.originalIndex
        const correctBtn = Array.from(buttons).find(btn => parseInt(btn.dataset.originalIndex) === currentQuestion.correct);
        if (correctBtn) correctBtn.classList.add('correct');
    }

    // Update Score
    if (isCorrect) {
        score += 10;
        if (scoreElement) scoreElement.textContent = score;
        if (feedbackContainer) feedbackContainer.classList.add('correct');
        if (feedbackText) feedbackText.textContent = "Correct! " + currentQuestion.feedback;
    } else {
        if (feedbackContainer) feedbackContainer.classList.add('incorrect');
        if (feedbackText) feedbackText.textContent = "Incorrect. " + currentQuestion.feedback;
    }

    if (feedbackContainer) feedbackContainer.classList.remove('hidden');

    if (currentQuestionIndex < questions.length - 1) {
        if (nextBtn) nextBtn.classList.remove('hidden');
    } else {
        showResults();
    }
}

function showResults() {
    // Show final progress
    if (progressBar) progressBar.style.width = '100%';

    // Create a simple result view instad of the question
    if (questionTextElement) questionTextElement.textContent = "Quiz Completed!";
    if (optionsContainer) {
        optionsContainer.innerHTML = `
        <div style="text-align: center; font-size: 1.2rem;">
            <p>Your final score is: <strong>${score} / ${questions.length * 10}</strong></p>
        </div>
    `;
    }

    if (nextBtn) nextBtn.classList.add('hidden');
    if (restartBtn) restartBtn.classList.remove('hidden');
}

if (nextBtn) nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

if (restartBtn) restartBtn.addEventListener('click', initQuiz);


