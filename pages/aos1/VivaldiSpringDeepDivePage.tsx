import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../components/AbcDisplayComponent';
import QuizComponent from '../../components/QuizComponent';
import { Quiz } from '../../types';

// ABC Notation Strings
const RITORNELLO_1_ABC = `X:1
T:Vivaldi: Spring (Allegro) - IGCSE Study Score
C:Antonio Vivaldi
M:4/4
L:1/16
Q:"Allegro" 1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
%%staves [1 2 3 4]
%
% --- RITORNELLO 1 ---
%
[V:1] "^ RITORNELLO 1: Spring Has Arrived" "^Tutti"!f! e4 | g2g2 g2fe b6 ba | g2g2 g2fe b6 ba | g2ab a2g2 f2d2 B2!p!"^Terraced Dynamics (Echo)"e2 | g2g2 g2fe b6 ba |
[V:2]!f! e4 | g2g2 g2fe b6 ba | g2g2 g2fe b6 ba | g2ab a2g2 f2d2 B2!p!e2 | g2g2 g2fe b6 ba |
[V:3]!f! G4 | B2B2 B2B2 E6 GA | B2B2 B2B2 E6 GA | B2B2 c2c2 F4 z2!p!G2 | B2B2 B2B2 E6 GA |
[V:4]!f! E,4 | E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,2E,2 A,,2^A,,2 B,,4 z2!p!E,2 | E,4 E,4 E,4 E,4 |
%
[V:1] g2g2 g2fe b6 ba | g2ab a2g2 f4 z2!f!"^Phrase B"e2 | b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | "^" c'2 b4 a2 g2fe!trill!f4 |
[V:2] g2g2 g2fe b6 ba | g2ab a2g2 f4 z2!f!e2 | b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe!trill!f4 |
[V:3] B2B2 B2B2 E6 GA | B2B2 c2c2 F4 z2!p!G2 | E4 E4 A2 E4 E2 | E4 E4 A2 E4 E2 | A2 E4 d2 B4 B4 |
[V:4] E,4 E,4 E,4 E,4 | E,2E,2 A,,2^A,,2 B,,4 z2!f!E,2 | E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,4 E,2B,,2 E,2E,,2 B,2B,,2 |
%
[V:1] e4 z2!p!"^Echo"e2 b2ag a2b2 | c'2 b4 e2 b2ag a2b2 | c'2 b4 e2 c'2 b4 a2 | g2fe!trill!f4 e4 z4 |
[V:2] e4 z2!p!e2 b2ag a2b2 | c'2 b4 e2 b2ag a2b2 | c'2 b4 e2 c'2 b4 a2 | g2fe!trill!f4 e4 z4 |
[V:3] G4 z2!p!B2 E4 E4 | A2 E4 B2 E4 E4 | A2 E4 E2 A2 E4 d2 | B4 B4 G4 z4 |
[V:4] E,,4 z2!p!E,2 E,4 E,4 | E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,2B,,2 | E,2E,,2 B,2B,,2 E,,4 z4 |`;

const EPISODE_1_ABC = `% --- EPISODE 1 ---
X:1
T:Episode 1: The Song of the Birds
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ EPISODE 1: The Birds" "^Solo"!trill!b4!trill!b4!trill!b4!trill!b4 |!trill!b4!trill!b4.b2.b2.b2.b2 |.b2.b2.b2.b2.b2.b2.b2c'd' | e'd'c'b agfe z8 |
[V:2] z16 | z16 | z8 "^Violins imitate"!f!.b4.b4 |.b4.b4.b4.b4 |
[V:3] z16 | z16 | z16 | z16 |
[V:4] z16 | z16 | z16 | z16 |
%
[V:1] z16 | z4 z2.e'2.e'2.e'2.e'2.e'2 |!trill!e'6.e'2.e'2.e'2.e'2.e'2 |!trill!e'4 z4 b4- be'bc' | "^" b4- be'bc' be'bc' be'bc' |
[V:2] .b2.b2.b2.b2.b2.b2.b2c'd' | e'd'c'b agfe z4 z2.e'2 |.e'2.e'2.e'2.e'2!trill!e'6.e'2 |.e'2.e'2.e'2.e'2!trill!e'4!trill!g4 | z4!trill!g4 z4!trill!g4 |
[V:3] z16 | z16 | z16 | z8 (aga)!trill!g4 | z (aga)!trill!g4 z (aga)!trill!g4 |
[V:4] z16 | z16 | z16 | z16 | z16 |
%
[V:1] be'bc' be'bc' b2e2!trill!g4 | z4!trill!g4 z4!trill!g4 | z4!trill!g4.e'4.e'4 |!trill!e'8.e'4.e'4 |!trill!e'8 z4 z2 e2 |
[V:2] z4!trill!e4 b4- be'bc' | b4- be'bc' be'bc' be'bc' | be'bc' be'bc' b2e2 z4 |.e'4.e'4!trill!e'8 |.e'4.e'4!trill!e'4 z4 |
[V:3] z2 b/a/g/f/ e4 z2 b/a/g/f/ e4 | z (aga)!trill!g4 z (aga)!trill!g4 | z8 z2 b/a/g/f/ e4 | z2 b/a/g/f/ e4 z2 b/a/g/f/ e4 | z8 g2>a2 g2>a2 |
[V:4] z16 | z16 | z16 | z16 | z16 |`;

const RITORNELLO_2_ABC = `% --- RITORNELLO 2 ---
X:1
T:Ritornello 2: Transition
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ RITORNELLO 2" "^Tutti" b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe!trill!f4 |
[V:2] z2!f!e2 b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe!trill!f4 |
[V:3] g2>a2 g2>a2 gaga gaga | ga ga ga ga!trill!g4 z4 |!trill!g4 z4!trill!g4 z4 |
[V:4] z8 z4 z2!f!B2 | E4 E4 A2 E4 B2 | E4 E4 A2 E4 B2 |`;

const EPISODE_2_ABC = `% --- EPISODE 2 ---
X:1
T:Episode 2: Murmuring Streams
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ EPISODE 2: Murmuring Streams"!p!e2(GA) (BA)(BA) (GA)(GA) (BA)(BA) | (GA)(GA) (BA)(BA) (GA)(GA) (Bc)(Bc) | (de)(de) (fe)(fe) (de)(de) (fe)(fe) |
[V:2]!p!e2(GA) (BA)(BA) (GA)(GA) (BA)(BA) | (GA)(GA) (BA)(BA) (GA)(GA) (Bc)(Bc) | (de)(de) (fe)(fe) (de)(de) (fe)(fe) |
[V:3]!trill!g4 z4!trill!g4 z4 |!trill!g4 z4!trill!g4 z4 |!trill!g4 z4 e4- ebef |
[V:4] E4 G2d2 B4 B4 |!p!G2B,2 B,2B,2 B,2B,2 B,2B,2 | B,2B,2 B,2B,2 B,2B,2 B,2B,2 |
%
[V:1] (de)(de) (fg)(fg) (ag)(ag) (fa)(gf) | g2(fe) (dc)(BA) (GA)(GA) (BA)(BA) | (GA)(GA) (BA)(BA) (GA)(GA) (BA)(BA) | G4 z2 g2 a8 | g8 f8 |
[V:2] (de)(de) (fg)(fg) (ag)(ag) (fa)(gf) | g2(fe) (dc)(BA) (GA)(GA) (BA)(BA) | (GA)(GA) (BA)(BA) (GA)(GA) (BA)(BA) | G4 z2 g2 a8 | g8 f8 |
[V:3] e4- ebef ebef ebef | ebef ebef e4 z2 e2 | g2fe f2g2 a2 g4 g2 | g2fe f2g2 a2 g4 g2 | a2 g4 f2 e4 d4 |
[V:4] B,2F2 F2F2 F2F2 F2F2 | F2F2 F2F2 D2D2 D2D2 | B,2B,2 B,2B,2 B,2B,2 B,2B,2 | B,2B,2 B,2B,2 B,2B,2 B,2B,2 | B,16- |`;

const RITORNELLO_3_ABC = `% --- RITORNELLO 3 ---
X:1
T:Ritornello 3: Dominant Key
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ RITORNELLO 3" "^Key: B Major (Dominant)" g8 a8 | g8 f4 z2!f!B2 | f2ed e2f2 g2 f4 B2 | f2ed e2f2 g2 f4 B2 | g2 f4 e2 d2cB!trill!c4 |
[V:2] g8 a8 | g8 f4 z2!f!B2 | f2ed e2f2 g2 f4 B2 | f2ed e2f2 g2 f4 B2 | g2 f4 e2 d2cB!trill!c4 |
[V:3]!p!e2(EF) (GF)(GF) (EF)(EF) (GF)(GF) | (EF)(EF) (GF)(GF) (EF)(EF) (GA)(GA) | (Bc)(Bc) (dc)(dc) (Bc)(Bc) (dc)(dc) | (Bc)(Bc) (de)(de) (fe)(fe) (df)(ed) | e2(dc) (BA)(GF) (EF)(EF) (GF)(GF) |
[V:4] B,16- | B,16 | B,8 B,4 z2!f!F2 | B,4 B,4 E2 B,4 F2 | B,4 B,4 E2 B,4 F2 |`;

const EPISODE_3_ABC = `% --- EPISODE 3 ---
X:1
T:Episode 3: The Storm
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ EPISODE 3: The Storm" "^Tremolo (Thunder)" BB,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | "^Scales (Lightning)" (B/c/d/e/f/g/a/b/) z4 (B/c/d/e/f/g/a/b/) z4 |
[V:2] BB,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | (B/c/d/e/f/g/a/b/) z4 (B/c/d/e/f/g/a/b/) z4 |
[V:3] BB,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | (B/c/d/e/f/g/a/b/) z4 (B/c/d/e/f/g/a/b/) z4 |
[V:4] E2B,2 D2^A2 F4 F4 | DB,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ |
%
[V:1] B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | A,/A,/A,/A,/ A,/A,/A,/A,/ A,/A,/A,/A,/ A,/A,/A,/A,/ | (3bgb (3e'be' (3bgb (3e'be' (3bgb (3d'bd' (3bgb (3d'bd' |
[V:2] B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | A,/A,/A,/A,/ A,/A,/A,/A,/ A,/A,/A,/A,/ A,/A,/A,/A,/ | G,4 z4 z8 |
[V:3] B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ B,/B,/B,/B,/ | A,/A,/A,/A,/ A,/A,/A,/A,/ A,/A,/A,/A,/ A,/A,/A,/A,/ | G,4 z4 z8 |
[V:4] B,2 z2 B,2 z2 B,2 z2 B,2 z2 | B,/B,/B,/B,/ B,/B,/B,/B,/ A,/A,/A,/A,/ A,/A,/A,/A,/ | G,4 z4 z8 |`;

const RITORNELLO_4_ABC = `% --- RITORNELLO 4 ---
X:1
T:Ritornello 4: The Minor Mode
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ RITORNELLO 4" "^Key: C# Minor (Relative Minor)" c'4 z2 c2 | g2fe f2g2 a2 g4 c2 | g2fe f2g2 a2 g4 c2 | a2 g4 f2 e2dc!trill!d4 |
[V:2] C4 z2 c2 | g2fe f2g2 a2 g4 c2 | g2fe f2g2 a2 g4 c2 | a2 g4 f2 e2dc!trill!d4 |
[V:3] C4 z2 G2 | e2dc d2e2 f2 e4 e2 | e2dc d2e2 f2 e4 e2 | f2 e4 d2 c4 ^B4 |
[V:4] C4 z2 C,2 | C,4 C,4 C,4 C,4 | C,4 C,4 C,4 C,4 | C,4 C,2G,2 C2C,2 G,2"^Solo"G,,2 |`;

const EPISODE_4_ABC = `% --- EPISODE 4 ---
X:1
T:Episode 4: The Birds Return
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ EPISODE 4: Birds Return" "^Chromatic Ascent".c2.g2.g2.g2.g2.g2.g2.g2 |.a2.a2.^a2.a2.b2.b2.^b2.b2 |!trill!c'16- |!trill!c'16 | (c'd')(c'd') c'4 (c'd')(c'd') c'4- | (c'd')(c'd') (c'd')(c'd')!trill!c'8- | (c'/d'/)(c'/d'/)(c'/d'/)(c'/d'/) (c'/d'/)(c'/d'/)(c'/d'/)(c'/d'/)!trill!c'8 |
[V:2] c4 z4 z8 | z16 | z2 "^Solo".c2.c2.c2.c2.c2.c2.d2 |.e2.e2.^e2.e2.f2.f2.^^f2.f2 | g4- gaga g4- gaga |!trill!g8 gaga gaga |!trill!g8- g/a/g/a/g/a/g/a/ g/a/g/a/g/a/g/a/ |
[V:3] c4 z4 z8 | z16 | z16 | z16 | "^Solo" e4- efef e4- efef |!trill!e8 efef efef |!trill!e8- e/f/e/f/e/f/e/f/ e/f/e/f/e/f/e/f/ |
[V:4] C,16- | C,16- | C,16- | C,16- | C,16- | C,16- | C,16- |`;

const FINALE_ABC = `% --- FINALE ---
X:1
T:Finale: Ritornello 5 and Final Solo
M:4/4
L:1/16
Q:1/4=100
K:E
V:1 name="Solo Violin"
V:2 name="Orch. Violins"
V:3 name="Viola" clef=alto
V:4 name="Continuo" clef=bass
[V:1] "^ RITORNELLO 5" "^Key: E Major (Tonic)" g2g2 g2fg a6 ag | f2f2 f2ef g6 ga | b2b2 b2ba g2g2 g2ga |
[V:2] "^Tutti" g2g2 g2fg a6 ag | f2f2 f2ef g6 ga | b2b2 b2ba g2g2 g2ga |
[V:3] "^Tutti" e2e2 e2de f6 fe | d2d2 d2cd e6 ef | g2g2 g2gf e2e2 e2ef |
[V:4] C,2C,2 C,2C,2 F,2F,2 F,2F,2 | B,,2B,,2 B,,2B,,2 E,2E,2 E,2E,2 B,,2B,,2 | E,2E,2 E,2E,2 B,,2B,,2 E,2E,2 E,2E,2 B,,2B,,2 |
%
[V:1] b2b2 b2ba g2g2 g2ga | b2b2 b2ba (fB)(cB) (dc)(ed) | (fe)(gf) (ag)(ba) (BA)(cB) (dc)(ed) | (fe)(gf) (ag)(ba) (ge)(fe) (ge)(fe) |
[V:2] b2b2 b2ba g2g2 g2ga | b2b2 b2ba f4 z4 | z16 | z16 |
[V:3] g2g2 g2gf e2e2 e2ef | g2g2 g2gf d4 z4 | z16 | z16 |
[V:4] E,2E,2 E,2E,2 B,,2B,,2 E,2E,2 E,2E,2 B,,2B,,2 | E,2E,2 E,2E,2 B,,2B,,2 "^Solo" B,,8- | B,,16- | B,,8 E,4 E,4 |
%
[V:1] (ae)(fe) (ae)(fe) (be)(fe) (be)(fe) | (c'2d'2) e'4 (e'b)(e'b) (c'b)(e'b) | (c'b)(e'b) (c'b)(e'b) e'2e2!f!!trill!f4 |
[V:2] z16 | z16 | z16 |
[V:3] z16 | z16 | z16 |
[V:4] F,4 F,4 G,4 G,4 | A,4 G,2F,2 E,4 z4 | E,4 z4 E,4 B,,4 |
%
[V:1] "^Final Ritornello" e2>g2 a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe!trill!f4 | e4 z2!p!e2 b2ag a2b2 |
[V:2] b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe!trill!f4 | e4 z2!p!e2 b2ag a2b2 |
[V:3] g2fe f2g2 a2 g4 g2 | g2fe f2g2 a2 g4 g2 | a2 g4 f2 e4 d4 | e4 z2!p!g2 g2fe f2g2 |
[V:4] E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,4 E,2B,,2 E,2E,,2 B,2B,,2 | E,,4 z2!p!E,2 E,4 E,4 |
%
[V:1] c'2 b4 e2 b2ag a2b2 | c'2 b4 e2 c'2 b4 a2 | g2fe!trill!f4!fermata!e8 |]
[V:2] c'2 b4 e2 b2ag a2b2 | c'2 b4 e2 c'2 b4 a2 | g2fe!trill!f4!fermata!e8 |]
[V:3] a2 g4 g2 g2fe f2g2 | a2 g4 g2 a2 g4 f2 | e4 d4!fermata!e8 |]
[V:4] E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,2B,,2 | E,2E,,2 B,2B,,2!fermata!E,,8 |]`;

const VivaldiSpringDeepDivePage: React.FC = () => {
    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto dark:text-gray-200">
            {/* Navigation Header */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Link to="/areas-of-study" className="hover:text-sky-600">Areas of Study</Link>
                    <span>/</span>
                    <Link to="/aos/aos01-baroque-music" className="hover:text-sky-600">Baroque Music</Link>
                    <span>/</span>
                    <span>Vivaldi Spring - Deep Dive</span>
                </div>
                <Link
                    to="/aos/aos01-baroque-music"
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm transition-colors"
                >
                    Back to Menu
                </Link>
            </div>

            {/* Title Section */}
            <header className="mb-10 pb-6 border-b border-gray-200 dark:border-gray-700">
                <span className="inline-block px-3 py-1 mb-3 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider">
                    Deep Dive Analysis
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Antonio Vivaldi's The Four Seasons — 'Spring' (Allegro)
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Pedagogical Musicological Analysis and Annotated Score
                </p>
            </header>

            {/* Introduction */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction to the Baroque Area of Study</h2>
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p className="mb-4">
                        The study of Antonio Vivaldi's <em>Le quattro stagioni</em> (The Four Seasons), particularly the opening Allegro of the first concerto, 'Spring' (La Primavera), constitutes a foundational component of the Cambridge IGCSE Music curriculum (Area of Study 1: Baroque Music). To engage with this work is to engage with the very architectural and aesthetic principles that defined Western art music between approximately 1600 and 1750.
                    </p>
                    <p className="mb-4">
                        The primary objective of this report is to provide an exhaustive analysis of the 'Spring' Allegro, synthesizing historical context, theoretical analysis, and performance practice into a cohesive pedagogical resource. Crucially, this analysis is paired with a generated annotated score rendered in ABC music notation.
                    </p>
                    <p>
                        This digital format provides a clean, adaptable, and structurally explicit text-based representation of the music, allowing students to visualize the interplay of structure (Ritornello form), texture (tutti vs. solo), and program (the sonnet) without the visual density of a traditional Urtext edition.
                    </p>
                </div>
            </section>

            {/* Full Score Reference */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Full Score Reference (Bar 1-13)</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    Interactive score of the opening Ritornello. Press play to listen.
                </p>
                <AbcDisplayComponent abcNotation={RITORNELLO_1_ABC} id="vivaldi-spring-rit-1" />
            </section>

            {/* Context Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Historical and Stylistic Context: The Baroque Paradigm</h2>
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p className="mb-4">
                        To fully comprehend the annotated score of 'Spring', one must first situate the work within the broader context of the Baroque era. The Baroque was not a monolithic style but a dynamic evolution of musical thought that prioritized the projection of a single, dominant emotion—the <em>Affekt</em>—within a movement.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">2.1 The Aesthetic of the Affekt</h3>
                    <p className="mb-4">
                        The doctrine of affections (<em>Affektenlehre</em>) posited that music's primary purpose was to move the passions of the soul. In the context of 'Spring', the dominant affection is one of unbridled joy and pastoral renewal. Vivaldi establishes this immediately in the opening bars through the use of the bright key of E Major and a rhythmic vitality that pervades the tutti sections.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">2.2 The Basso Continuo: The Harmonic Engine</h3>
                    <p className="mb-4">
                        A defining feature of Baroque music, and one explicitly highlighted in the IGCSE syllabus, is the presence of the basso continuo. In the provided ABC score, the continuo lines are represented by the Cello (V:5) and Bass (V:6/7), often doubled by a keyboard instrument such as the harpsichord or organ (V:8/12).
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Function:</strong> The continuo provides the harmonic foundation upon which the melodic lines float. It is omnipresent in the tutti sections, driving the rhythm and defining the chord progressions.</li>
                        <li><strong>Realization:</strong> The keyboard player was expected to "realize" the figured bass—improvising chords and textures. In 'Spring', the continuo plays a critical structural role; its presence signals the stability of the Ritornello, while its absence (<em>tasto solo</em>) creates a lighter texture for solo episodes.</li>
                    </ul>
                </div>
            </section>

            {/* The Sonnet */}
            <section className="mb-12 p-6 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-800">
                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4 text-center font-serif">The Sonnet for Spring</h2>
                <div className="max-w-md mx-auto italic text-center text-amber-800 dark:text-amber-200 space-y-2 font-serif">
                    <p>Giunt' è la Primavera e festosetti (Spring has arrived and festively)</p>
                    <p>La Salutan gl' Augei con lieto canto, (The birds salute her with happy song,)</p>
                    <p>E i fonti allo Spirar de' Zeffiretti (And the brooks, by the breathing of the Zephyrs,)</p>
                    <p>Con dolce mormorio scorrono intanto: (Meanwhile flow with a sweet murmur:)</p>
                    <p>Vengon' coprendo l' aer di nero amanto (They come, covering the air with a black mantle,)</p>
                    <p>E Lampi, e tuoni ad annuntiarla eletti (Lightning and thunder, chosen to announce her;)</p>
                    <p>Indi tacendo questi, gl' Augei tornano (Then, when these are silent, the birds return)</p>
                    <p>Di nuovo al lor canoro incanto: (To their melodious enchantment:)</p>
                </div>
            </section>

            {/* Analysis Sections with ABC */}
            <div className="space-y-16">

                {/* 6.1 Ritornello 1 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.1 Ritornello 1: The Arrival of Spring (Bars 1–13)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-1 space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Program:</strong> "Spring has arrived."</p>
                            <p>The movement opens with one of the most recognizable themes in classical music. This Ritornello is structurally significant for its internal AABB form.</p>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                <li><strong>Theme (A):</strong> Jubilant arpeggio in E Major.</li>
                                <li><strong>Terraced Dynamics (A'):</strong> The "echo effect" (f then p).</li>
                                <li><strong>Sequence (B):</strong> Descending scalic figure driving forward.</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <AbcDisplayComponent abcNotation={RITORNELLO_1_ABC} id="ritornello-1" title="Ritornello 1 (Bars 1-13)" />
                        </div>
                    </div>
                </section>

                {/* 6.2 Episode 1 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.2 Episode 1: The Song of the Birds (Bars 13–27)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-1 space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Program:</strong> "The birds salute her with happy song."</p>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                <li><strong>Reduced Texture:</strong> Lower strings dropout. High-frequency, airy texture.</li>
                                <li><strong>Mimicry:</strong> Trills (trillo) on high B simulate warbling.</li>
                                <li><strong>Imitation:</strong> Call-and-response between solo and orchestral violins (flock effect).</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <AbcDisplayComponent abcNotation={EPISODE_1_ABC} id="episode-1" title="Episode 1 (Bars 13-27)" />
                        </div>
                    </div>
                </section>

                {/* 6.3 Ritornello 2 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.3 Ritornello 2: The First Transition (Bars 27–30)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-1 space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Program:</strong> Narrative Transition</p>
                            <p>Abbreviated statement (only Phrase B) serves as a punctuation mark, confirming E Major before the scene shifts.</p>
                        </div>
                        <div className="md:col-span-2">
                            <AbcDisplayComponent abcNotation={RITORNELLO_2_ABC} id="ritornello-2" title="Ritornello 2 (Bars 27-30)" />
                        </div>
                    </div>
                </section>

                {/* 6.4 Episode 2 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.4 Episode 2: Murmuring Streams (Bars 31–40)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-1 space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Program:</strong> "And the brooks... flow with a sweet murmur."</p>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                <li><strong>Undulation:</strong> Flowing semiquavers slurred in pairs creating a liquid effect.</li>
                                <li><strong>Dynamics:</strong> Piano (!p!) represents the gentle breath of the Zephyrs.</li>
                                <li><strong>Modulation:</strong> Pivots from E Major towards B Major (Dominant).</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <AbcDisplayComponent abcNotation={EPISODE_2_ABC} id="episode-2" title="Episode 2 (Bars 31-40)" />
                        </div>
                    </div>
                </section>

                {/* 6.5 Ritornello 3 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.5 Ritornello 3: The Dominant Key (Bars 40–44)</h3>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4">
                        <p className="text-gray-700 dark:text-gray-300">
                            Confirms the modulation to <strong>B Major</strong> (Dominant). The theme is transposed up a fifth. This stability is the foil for the coming storm.
                        </p>
                    </div>
                    <AbcDisplayComponent abcNotation={RITORNELLO_3_ABC} id="ritornello-3" title="Ritornello 3 (Bars 40-44)" />
                </section>

                {/* 6.6 Episode 3 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.6 Episode 3: The Storm (Bars 44–55)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-1 space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Program:</strong> "Lightning and thunder..."</p>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                <li><strong>Thunder:</strong> Tremolo repetition in lower strings.</li>
                                <li><strong>Lightning:</strong> Rapid ascending scales (demisemiquavers) in solo violin.</li>
                                <li><strong>Instability:</strong> Modulates through diminished harmonies to C# Minor.</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <AbcDisplayComponent abcNotation={EPISODE_3_ABC} id="episode-3" title="Episode 3 (Bars 44-55)" />
                        </div>
                    </div>
                </section>

                {/* 6.7 Ritornello 4 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.7 Ritornello 4: The Minor Mode (Bars 55–59)</h3>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4">
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Key:</strong> C# Minor. The theme returns in the minor mode, transforming its character from joy to ominous melancholy—the aftermath of the storm.
                        </p>
                    </div>
                    <AbcDisplayComponent abcNotation={RITORNELLO_4_ABC} id="ritornello-4" title="Ritornello 4 (Bars 55-59)" />
                </section>

                {/* 6.8 Episode 4 */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.8 Episode 4: The Birds Return (Bars 59–65)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-1 space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Program:</strong> "The birds return..."</p>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                <li><strong>Chromaticism:</strong> Rising chromatic line implies yearning/pleading, distinct from the earlier cheerful song.</li>
                                <li><strong>Texture:</strong> Sparse solo texture highlights vulnerability.</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <AbcDisplayComponent abcNotation={EPISODE_4_ABC} id="episode-4" title="Episode 4 (Bars 59-65)" />
                        </div>
                    </div>
                </section>

                {/* 6.9 Finale */}
                <section>
                    <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-4">6.9 Finale: Ritornello 5 and Final Solo (Bars 66–82)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-1 space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>Program:</strong> Conclusion</p>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                <li><strong>Ritornello 5:</strong> E Major restoration. Triumph of Spring.</li>
                                <li><strong>Final Solo:</strong> Virtuosic <em>bariolage</em>.</li>
                                <li><strong>Closure:</strong> Perfect authentic cadence in E Major.</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <AbcDisplayComponent abcNotation={FINALE_ABC} id="finale" title="Finale (Bars 66-82)" />
                        </div>
                    </div>
                </section>

            </div>

            {/* Conclusion */}
            <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
                <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p>
                        Antonio Vivaldi's 'Spring' Allegro stands as a monument to the Baroque imagination. Through this analysis, we have visualized the mechanics of the masterpiece: the "terrace" of the dynamics, the "mimicry" of the birds, and the "architecture" of the keys.
                    </p>
                </div>
            </section>

            {/* Quiz Section */}
            <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Test Your Knowledge</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Complete this 20-question quiz to test your understanding of Vivaldi's Spring Allegro.
                </p>
                <QuizComponent quizData={{
                    id: 'vivaldi-spring-deep-dive-quiz',
                    title: "Vivaldi's Spring (Allegro) Quiz",
                    questions: [
                        {
                            id: 'vsq1',
                            text: 'What key is the opening Ritornello of Spring written in?',
                            options: [
                                { id: 'a', text: 'E Major' },
                                { id: 'b', text: 'B Major' },
                                { id: 'c', text: 'C# Minor' },
                                { id: 'd', text: 'A Major' }
                            ],
                            correctAnswerId: 'a',
                            explanation: 'The entire movement is in E Major, a bright key suitable for depicting the joy of spring.'
                        },
                        {
                            id: 'vsq2',
                            text: 'What is the name of the structural form used in the fast movements of Baroque concertos?',
                            options: [
                                { id: 'a', text: 'Sonata Form' },
                                { id: 'b', text: 'Ritornello Form' },
                                { id: 'c', text: 'Binary Form' },
                                { id: 'd', text: 'Rondo Form' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'Ritornello Form alternates between a recurring theme (ritornello) played by the tutti and contrasting solo episodes.'
                        },
                        {
                            id: 'vsq3',
                            text: 'What technique does Vivaldi use in Episode 1 to depict birdsong?',
                            options: [
                                { id: 'a', text: 'Tremolo' },
                                { id: 'b', text: 'Pizzicato' },
                                { id: 'c', text: 'Trills on high notes' },
                                { id: 'd', text: 'Glissando' }
                            ],
                            correctAnswerId: 'c',
                            explanation: 'The solo violin uses trills (trillo) on high B to simulate the warbling of birds.'
                        },
                        {
                            id: 'vsq4',
                            text: 'What is the term for the dramatic shift between loud and soft dynamics without gradual change?',
                            options: [
                                { id: 'a', text: 'Crescendo' },
                                { id: 'b', text: 'Diminuendo' },
                                { id: 'c', text: 'Terraced Dynamics' },
                                { id: 'd', text: 'Sforzando' }
                            ],
                            correctAnswerId: 'c',
                            explanation: 'Terraced dynamics (forte then piano "echo") is a hallmark of Baroque music, heard clearly in the opening Ritornello.'
                        },
                        {
                            id: 'vsq5',
                            text: 'What happens to the basso continuo during the Bird Episode (Episode 1)?',
                            options: [
                                { id: 'a', text: 'It plays a walking bass line' },
                                { id: 'b', text: 'It drops out completely (rests)' },
                                { id: 'c', text: 'It plays tremolo' },
                                { id: 'd', text: 'It plays the main theme' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'The lower strings and continuo drop out, creating a light, airy texture appropriate for birds flying in the sky.'
                        },
                        {
                            id: 'vsq6',
                            text: 'What key does Ritornello 3 establish?',
                            options: [
                                { id: 'a', text: 'E Major (Tonic)' },
                                { id: 'b', text: 'B Major (Dominant)' },
                                { id: 'c', text: 'C# Minor (Relative Minor)' },
                                { id: 'd', text: 'F# Minor' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'Ritornello 3 confirms the modulation to B Major, the dominant key, which is standard in Baroque forms.'
                        },
                        {
                            id: 'vsq7',
                            text: 'How does Vivaldi depict thunder in Episode 3 (The Storm)?',
                            options: [
                                { id: 'a', text: 'Loud brass fanfares' },
                                { id: 'b', text: 'Timpani rolls' },
                                { id: 'c', text: 'Tremolo in the lower strings' },
                                { id: 'd', text: 'Pizzicato bass notes' }
                            ],
                            correctAnswerId: 'c',
                            explanation: 'The strings execute a tremolo (rapid repetition of a note) to create a rumbling thunder effect.'
                        },
                        {
                            id: 'vsq8',
                            text: 'How does Vivaldi depict lightning in Episode 3?',
                            options: [
                                { id: 'a', text: 'Sustained high notes' },
                                { id: 'b', text: 'Rapid ascending scales' },
                                { id: 'c', text: 'Slow descending arpeggios' },
                                { id: 'd', text: 'Silence' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'The solo violin plays rapid ascending scales that shoot upwards like flashes of lightning.'
                        },
                        {
                            id: 'vsq9',
                            text: 'What key does Ritornello 4 use, representing the aftermath of the storm?',
                            options: [
                                { id: 'a', text: 'E Major' },
                                { id: 'b', text: 'B Major' },
                                { id: 'c', text: 'C# Minor' },
                                { id: 'd', text: 'A Major' }
                            ],
                            correctAnswerId: 'c',
                            explanation: 'C# Minor is the relative minor of E Major, and its darker character represents the post-storm atmosphere.'
                        },
                        {
                            id: 'vsq10',
                            text: 'What type of music is "Spring" an early example of?',
                            options: [
                                { id: 'a', text: 'Absolute Music' },
                                { id: 'b', text: 'Program Music' },
                                { id: 'c', text: 'Sacred Music' },
                                { id: 'd', text: 'Dance Music' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'Program Music tells a story or depicts scenes. Vivaldi published sonnets with the score describing each season.'
                        },
                        {
                            id: 'vsq11',
                            text: 'What is the role of the basso continuo in Baroque music?',
                            options: [
                                { id: 'a', text: 'To play the main melody' },
                                { id: 'b', text: 'To provide the harmonic foundation' },
                                { id: 'c', text: 'To play only during solo sections' },
                                { id: 'd', text: 'To improvise virtuosic passages' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'The continuo provides the harmonic foundation upon which melodic lines float, typically played by cello and keyboard.'
                        },
                        {
                            id: 'vsq12',
                            text: 'Episode 2 depicts what natural element according to the sonnet?',
                            options: [
                                { id: 'a', text: 'Birds singing' },
                                { id: 'b', text: 'Thunder and lightning' },
                                { id: 'c', text: 'Murmuring streams' },
                                { id: 'd', text: 'Wind in the trees' }
                            ],
                            correctAnswerId: 'c',
                            explanation: 'Episode 2 depicts brooks flowing with a sweet murmur, represented by flowing semiquaver patterns.'
                        },
                        {
                            id: 'vsq13',
                            text: 'What institution did Vivaldi work at for most of his career?',
                            options: [
                                { id: 'a', text: "St. Mark's Basilica, Venice" },
                                { id: 'b', text: 'The Ospedale della Pietà, Venice' },
                                { id: 'c', text: 'The Court of Mantua' },
                                { id: 'd', text: 'The Vatican, Rome' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'Vivaldi taught at the Ospedale della Pietà, a music school for orphaned girls famous for its excellent orchestra.'
                        },
                        {
                            id: 'vsq14',
                            text: 'What type of concerto is "Spring"?',
                            options: [
                                { id: 'a', text: 'Concerto Grosso' },
                                { id: 'b', text: 'Solo Concerto' },
                                { id: 'c', text: 'Double Concerto' },
                                { id: 'd', text: 'Orchestral Concerto' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'A Solo Concerto features one virtuoso soloist (the violin) against the orchestra, as championed by Vivaldi.'
                        },
                        {
                            id: 'vsq15',
                            text: 'What cadence type is used at the very end of the movement to create closure?',
                            options: [
                                { id: 'a', text: 'Plagal Cadence (IV-I)' },
                                { id: 'b', text: 'Imperfect Cadence (I-V)' },
                                { id: 'c', text: 'Perfect Authentic Cadence (V-I)' },
                                { id: 'd', text: 'Interrupted Cadence (V-vi)' }
                            ],
                            correctAnswerId: 'c',
                            explanation: 'A perfect authentic cadence (V-I) in E Major provides a strong sense of finality and closure.'
                        },
                        {
                            id: 'vsq16',
                            text: 'What was Vivaldi\'s nickname?',
                            options: [
                                { id: 'a', text: 'Il Maestro di Venezia' },
                                { id: 'b', text: 'Il Prete Rosso (The Red Priest)' },
                                { id: 'c', text: 'Il Virtuoso' },
                                { id: 'd', text: 'Il Compositore' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'Vivaldi was called "The Red Priest" due to his red hair and his ordination as a Catholic priest.'
                        },
                        {
                            id: 'vsq17',
                            text: 'During the Bird Episode, what technique do the orchestral violins use to imitate the solo?',
                            options: [
                                { id: 'a', text: 'Unison playing' },
                                { id: 'b', text: 'Call and response (imitation)' },
                                { id: 'c', text: 'Pedal notes' },
                                { id: 'd', text: 'Ostinato' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'The first and second violins engage in call-and-response, mimicking a flock of birds calling to each other.'
                        },
                        {
                            id: 'vsq18',
                            text: 'What larger collection is "Spring" the first concerto of?',
                            options: [
                                { id: 'a', text: 'L\'Estro Armonico' },
                                { id: 'b', text: 'La Stravaganza' },
                                { id: 'c', text: 'Il cimento dell\'armonia e dell\'inventione' },
                                { id: 'd', text: 'Concerti a cinque' }
                            ],
                            correctAnswerId: 'c',
                            explanation: 'The Four Seasons form the first four concertos of "Il cimento dell\'armonia e dell\'inventione" (The Contest Between Harmony and Invention).'
                        },
                        {
                            id: 'vsq19',
                            text: 'What is the purpose of an abbreviated Ritornello (like Ritornello 2)?',
                            options: [
                                { id: 'a', text: 'To introduce new thematic material' },
                                { id: 'b', text: 'To act as a punctuation mark between episodes' },
                                { id: 'c', text: 'To modulate to a distant key' },
                                { id: 'd', text: 'To showcase the soloist\'s cadenza' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'Abbreviated ritornellos serve as punctuation marks, closing one episode and confirming the key before the next.'
                        },
                        {
                            id: 'vsq20',
                            text: 'What term describes the Baroque principle of projecting a single dominant emotion within a movement?',
                            options: [
                                { id: 'a', text: 'Leitmotif' },
                                { id: 'b', text: 'Affekt (Doctrine of Affections)' },
                                { id: 'c', text: 'Sturm und Drang' },
                                { id: 'd', text: 'Empfindsamkeit' }
                            ],
                            correctAnswerId: 'b',
                            explanation: 'The Affektenlehre (Doctrine of Affections) held that music\'s purpose was to move the passions of the soul.'
                        }
                    ]
                } as Quiz} />
            </section>
        </div>
    );
};

export default VivaldiSpringDeepDivePage;
