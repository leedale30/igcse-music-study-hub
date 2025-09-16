import { SyllabusItem } from '../../types';
import { popularSongwritingQuiz } from '../quizzes/popularSongwriting';

export const popularSongwritingOverview: SyllabusItem = {
  id: 'popular-songwriting-overview',
  title: 'Popular Songwriting for IGCSE',
  title_zh: 'IGCSE流行歌曲创作',
  path: '/coursework/composing/composition-2',
  content: 'Master the art of writing compelling popular songs for your IGCSE Music coursework.',
  content_zh: '掌握为IGCSE音乐课程作业创作引人入胜的流行歌曲的艺术。',
  longDescription: `# Popular Songwriting for IGCSE Music

**Welcome to the comprehensive guide for Popular Songwriting in IGCSE Music coursework.** This section will take you through every aspect of creating compelling popular songs, from initial concept to final production.

## What You'll Learn

### 🎵 **Core Songwriting Elements**
- **Song Structure**: Master the ABABCB form and other popular structures
- **Melody Writing**: Create catchy, memorable melodies with hooks and riffs
- **Lyric Crafting**: Write honest, specific, and emotionally resonant lyrics
- **Harmonic Development**: Use chord progressions effectively
- **Rhythmic Foundation**: Understand tempo, meter, and syncopation

### 🎹 **Technical Skills**
- **Arrangement Techniques**: Instrumentation and production considerations
- **Technology Integration**: DAWs, effects, and modern production
- **Vocal Techniques**: Including rap, melisma, and expressive delivery

### 📚 **Academic Requirements**
- **Assessment Standards**: Understanding Cambridge IGCSE Music 0410/0978 expectations
- **Analysis Skills**: Studying successful popular songs
- **Creative Process**: From conception to completion

## Course Structure

This comprehensive guide is organized into eight main sections:

1. **[Fundamentals of Popular Song](/coursework/composing/composition-2/fundamentals)**
2. **[Song Structure & Form](/coursework/composing/composition-2/structure)**
3. **[Melody Composition](/coursework/composing/composition-2/melody)**
4. **[Lyric Writing](/coursework/composing/composition-2/lyrics)**
5. **[Harmony & Chord Progressions](/coursework/composing/composition-2/harmony)**
6. **[Rhythm & Tempo](/coursework/composing/composition-2/rhythm)**
7. **[Arrangement & Production](/coursework/composing/composition-2/production)**
8. **[Case Studies & Exercises](/coursework/composing/composition-2/practice)**

## Assessment Focus

**What You NEED to Know:**
- Musical elements and techniques used in popular songs from the 1990s onward
- Structural components and their functions
- Melodic, harmonic, and rhythmic characteristics
- Lyrical devices and content approaches
- Production techniques and technology

**What You DON'T Need to Know:**
- Specific composers or performers
- Exact time periods of extracts
- Instruments not found in other areas of study

## Getting Started

**Popular song** is defined as music with vocals that has achieved widespread appeal, primarily from the 1990s onwards. It's engineered for entertainment and emotional connection, often reflecting contemporary social and cultural trends.

**Key Characteristics:**
- **Accessibility**: Easy to understand and remember
- **Emotional Impact**: Designed to make listeners feel something
- **Commercial Appeal**: Structured for radio play and mass consumption
- **Contemporary Relevance**: Reflects current culture and technology

## Learning Approach

This course combines:
- **Theoretical Understanding**: Learn the principles behind effective songwriting
- **Practical Application**: Write your own songs using proven techniques
- **Analysis**: Study successful examples to understand what works
- **Creative Expression**: Develop your unique voice as a songwriter

---

**Ready to begin your songwriting journey?** Start with the [Fundamentals of Popular Song](/coursework/composing/composition-2/fundamentals) to build your foundation, or jump to any section that interests you most.

*Remember: Great songwriting combines craft with creativity. Master the techniques, then use them to express your unique artistic vision.*`,
  
  longDescription_zh: `# IGCSE音乐流行歌曲创作

**欢迎来到IGCSE音乐课程作业中流行歌曲创作的综合指南。** 本节将带您了解创作引人入胜的流行歌曲的各个方面，从最初的概念到最终的制作。

## 您将学到什么

### 🎵 **核心歌曲创作元素**
- **歌曲结构**：掌握ABABCB形式和其他流行结构
- **旋律创作**：创作朗朗上口、令人难忘的旋律，包含钩子和即兴段
- **歌词创作**：写出诚实、具体且情感共鸣的歌词
- **和声发展**：有效使用和弦进行
- **节奏基础**：理解速度、拍子和切分音

### 🎹 **技术技能**
- **编曲技巧**：乐器配置和制作考虑
- **技术整合**：DAW、效果和现代制作
- **声乐技巧**：包括说唱、花腔和表现力传达

### 📚 **学术要求**
- **评估标准**：理解剑桥IGCSE音乐0410/0978期望
- **分析技能**：研究成功的流行歌曲
- **创作过程**：从构思到完成

## 课程结构

这个综合指南分为八个主要部分：

1. **[流行歌曲基础](/coursework/composing/composition-2/fundamentals)**
2. **[歌曲结构与形式](/coursework/composing/composition-2/structure)**
3. **[旋律创作](/coursework/composing/composition-2/melody)**
4. **[歌词创作](/coursework/composing/composition-2/lyrics)**
5. **[和声与和弦进行](/coursework/composing/composition-2/harmony)**
6. **[节奏与速度](/coursework/composing/composition-2/rhythm)**
7. **[编曲与制作](/coursework/composing/composition-2/production)**
8. **[案例研究与练习](/coursework/composing/composition-2/practice)**`,
  
  quiz: popularSongwritingQuiz,
  children: [
    {
      id: 'popular-songwriting-fundamentals',
      title: 'Fundamentals',
      path: '/coursework/composing/composition-2/fundamentals',
      content: 'Core principles of popular music'
    },
    {
      id: 'popular-songwriting-structure',
      title: 'Song Structure',
      path: '/coursework/composing/composition-2/structure',
      content: 'Architectural elements of songs'
    },
    {
      id: 'popular-songwriting-melody',
      title: 'Melody Composition',
      path: '/coursework/composing/composition-2/melody',
      content: 'Creating memorable melodies'
    },
    {
      id: 'popular-songwriting-lyrics',
      title: 'Lyric Writing',
      path: '/coursework/composing/composition-2/lyrics',
      content: 'Crafting compelling lyrics'
    },
    {
      id: 'popular-songwriting-harmony',
      title: 'Harmony & Chords',
      path: '/coursework/composing/composition-2/harmony',
      content: 'Chord progressions and harmonic development'
    },
    {
      id: 'popular-songwriting-rhythm',
      title: 'Rhythm & Tempo',
      path: '/coursework/composing/composition-2/rhythm',
      content: 'Rhythmic foundations and tempo'
    },
    {
      id: 'popular-songwriting-production',
      title: 'Arrangement & Production',
      path: '/coursework/composing/composition-2/production',
      content: 'Modern production techniques'
    },
    {
      id: 'popular-songwriting-practice',
      title: 'Case Studies & Practice',
      path: '/coursework/composing/composition-2/practice',
      content: 'Examples and practical exercises'
    }
  ]
};

export const popularSongwritingFundamentals: SyllabusItem = {
  id: 'popular-songwriting-fundamentals',
  title: 'Fundamentals of Popular Song',
  title_zh: '流行歌曲基础',
  path: '/coursework/composing/composition-2/fundamentals',
  content: 'Understanding the core principles and characteristics of popular music.',
  content_zh: '理解流行音乐的核心原则和特征。',
  longDescription: `# Fundamentals of Popular Song

## Definition and Scope

**Popular song** is music with vocals that has achieved widespread appeal, primarily from the 1990s onwards. It's engineered for entertainment and emotional connection, often reflecting contemporary social and cultural trends.

### Key Characteristics

**1. Accessibility**
- Easy to understand and remember
- Singable melodies (usually within an octave range)
- Clear, relatable lyrics
- Predictable yet engaging structures

**2. Emotional Impact**
- Designed to make listeners feel something
- Uses specific techniques to evoke emotions
- Connects with universal human experiences
- Balances familiarity with surprise

**3. Commercial Viability**
- Structured for radio play (typically 3-4 minutes)
- Hooks that grab attention quickly
- Memorable choruses for sing-along appeal
- Production quality suitable for mass distribution

**4. Contemporary Relevance**
- Reflects current culture and social issues
- Uses modern production techniques
- Incorporates current musical trends
- Appeals to target demographic

## Relationship to Musical Theatre

Popular songs share foundational structural and musical features with songs from musicals:

- **Verse-Chorus Structure**: Both use alternating sections
- **Narrative Elements**: Story-telling through lyrics
- **Emotional Arc**: Building and releasing tension
- **Memorable Melodies**: Designed for audience retention
- **Character Expression**: Conveying personality through musical choices

## Historical Context

### Evolution from the 1990s

**Technology Revolution**
- Digital recording and production
- MIDI and sampling capabilities
- Home studio accessibility
- Internet distribution

**Genre Fusion**
- Hip-hop integration into mainstream pop
- Electronic music influence
- World music incorporation
- Cross-genre collaboration

**Cultural Shifts**
- Globalization of music markets
- MTV and music video culture
- Social media and viral marketing
- Streaming platform algorithms

## Core Elements Overview

### Musical Elements

**Melody**
- Catchy, memorable tunes
- Hooks and riffs
- Singable range and rhythm
- Emotional expression

**Harmony**
- Accessible chord progressions
- Genre-specific harmonic languages
- Tension and resolution
- Mood establishment

**Rhythm**
- Consistent tempo and feel
- Genre-appropriate patterns
- Syncopation for interest
- Groove and pocket

**Structure**
- Predictable yet engaging forms
- Clear section definitions
- Dynamic contrast
- Narrative flow

### Production Elements

**Instrumentation**
- Core instruments: guitar, bass, drums, keyboards
- Electronic elements: synthesizers, samples, programming
- Vocal arrangements and harmonies
- Sonic palette choices

**Technology**
- Digital Audio Workstations (DAWs)
- Effects processing (reverb, delay, chorus)
- Auto-tuning and pitch correction
- Virtual instruments and samples

## Songwriting Approaches

### Starting Points

**1. Title-First Approach**
- Begin with a compelling title
- Build concept around the title
- Ensure title appears in chorus
- Use title to guide lyrical development

**2. Music-First Approach**
- Start with chord progression or melody
- Let music suggest mood and theme
- Write lyrics to fit musical phrasing
- Maintain musical integrity

**3. Concept-Driven Approach**
- Begin with an idea or story
- Develop musical elements to support concept
- Ensure all elements serve the central idea
- Maintain thematic consistency

**4. Collaborative Approach**
- Work with co-writers
- Combine different strengths
- Share creative responsibilities
- Build on each other's ideas

## Assessment Criteria for IGCSE

### What Examiners Look For

**Musical Understanding**
- Appropriate use of popular song conventions
- Effective melody and harmony integration
- Rhythmic accuracy and style
- Structural coherence

**Creative Expression**
- Original ideas within established frameworks
- Personal voice and style development
- Effective emotional communication
- Appropriate genre characteristics

**Technical Competence**
- Proper notation and presentation
- Understanding of production elements
- Effective use of technology
- Professional presentation standards

## Practical Exercise: Song Analysis

**Choose a popular song from the 1990s onward and analyze:**

1. **Structure**: Identify verses, choruses, bridges, etc.
2. **Melody**: Note range, memorable phrases, hooks
3. **Harmony**: Identify chord progressions and key centers
4. **Rhythm**: Analyze tempo, meter, and rhythmic patterns
5. **Lyrics**: Examine themes, rhyme schemes, and imagery
6. **Production**: Note instrumentation and effects

**Questions to Consider:**
- What makes this song memorable?
- How do the musical elements support the lyrics?
- What production techniques enhance the song?
- How does the structure serve the song's message?

---

**Next Steps**: Now that you understand the fundamentals, explore [Song Structure & Form](/coursework/composing/composition-2/structure) to learn how to organize your musical ideas effectively.`
};

export const popularSongwritingStructure: SyllabusItem = {
  id: 'popular-songwriting-structure',
  title: 'Song Structure & Form',
  title_zh: '歌曲结构与形式',
  path: '/coursework/composing/composition-2/structure',
  content: 'Master the architectural elements that make songs compelling and memorable.',
  content_zh: '掌握使歌曲引人入胜且令人难忘的建筑元素。',
  longDescription: `# Song Structure & Form

## The Architecture of Popular Songs

Song structure is the architectural framework that organizes musical and lyrical ideas into a coherent, engaging experience. Like a well-designed building, effective song structure provides both stability and flow.

## Common Form: ABABCB Structure

The most prevalent structure in popular music, alternating verses and choruses with a contrasting bridge:

### A = Verse
**Function**: Narrative advancement, scene setting
**Characteristics**:
- Conversational melody
- Changing lyrics each time
- Sets up the chorus
- Usually 8-16 bars

### B = Chorus  
**Function**: Emotional and melodic climax
**Characteristics**:
- Most memorable melody
- Repeated lyrics (the "hook")
- Highest energy level
- Contains the song's main message

### C = Bridge
**Function**: Contrast and fresh perspective
**Characteristics**:
- Different melody and harmony
- New lyrical angle
- Builds tension for final chorus
- Usually appears once

## Detailed Section Analysis

### Intro (Introduction)
**Purpose**: Set mood and grab attention
**Length**: 4-8 bars typically
**Elements**:
- Establishes key and tempo
- Introduces main musical motif
- Creates anticipation
- May feature instrumental hook

**Examples of Effective Intros**:
- Distinctive riff (guitar, piano, synth)
- Atmospheric pad or texture
- Rhythmic pattern establishment
- Vocal sample or spoken word

### Verse
**Purpose**: Tell the story, set the scene
**Characteristics**:
- **Melody**: Simple, conversational, doesn't compete with lyrics
- **Harmony**: Often uses basic progressions (I-vi-IV-V)
- **Rhythm**: Steady, supports lyrical flow
- **Lyrics**: Narrative, specific details, changing each verse

**Verse Writing Tips**:
- Keep melody in comfortable singing range
- Use chord progressions that support but don't overshadow
- Write lyrics that advance the story
- Maintain consistent rhythmic feel

### Pre-Chorus (Channel/B Section)
**Purpose**: Build anticipation for chorus
**Function**:
- Melodic bridge between verse and chorus
- Often ascends in pitch
- Changes rhythmic pattern
- Introduces new chords
- Creates tension that resolves in chorus

**When to Use Pre-Chorus**:
- When verse and chorus are too similar
- To create more dynamic build
- When you need extra lyrical space
- To enhance the impact of the chorus

### Chorus
**Purpose**: Deliver the main message and hook
**Characteristics**:
- **Melody**: Most memorable, often highest notes
- **Harmony**: Strong, often uses power progressions
- **Rhythm**: Driving, energetic
- **Lyrics**: Universal, emotional, repeated

**Chorus Writing Principles**:
- Make it singable and memorable
- Use the song title prominently
- Create emotional peak
- Keep lyrics simple and universal
- Use strong, clear chord progressions

### Bridge
**Purpose**: Provide contrast and fresh perspective
**Placement**: Usually after second chorus
**Elements**:
- **Melody**: Different from verse and chorus
- **Harmony**: New chord progressions, possible key change
- **Rhythm**: May change feel or tempo
- **Lyrics**: New angle on the theme, often more introspective

**Bridge Techniques**:
- Modulate to relative minor/major
- Use different chord progressions
- Change rhythmic feel
- Strip down or build up arrangement
- Provide lyrical revelation or twist

### Outro/Coda
**Purpose**: Provide satisfying conclusion
**Types**:
- **Fade Out**: Gradual volume reduction
- **Cold Ending**: Definitive stop
- **Repeat and Fade**: Chorus repetition with fade
- **Tag**: Short repeated phrase

## Alternative Song Forms

### AAA Form (Folk/Narrative)
**Structure**: Verse-Verse-Verse
**Use**: Story songs, folk traditions
**Characteristics**:
- All verses, no chorus
- Melody repeats with new lyrics
- Focus on narrative progression
- Common in folk, country, and singer-songwriter styles

### Verse-Chorus Form
**Structure**: Verse-Chorus-Verse-Chorus-Bridge-Chorus
**Use**: Most common in pop and rock
**Benefits**:
- Clear contrast between sections
- Memorable chorus repetition
- Flexible for different song lengths

### AABA (Standard Form)
**Structure**: Verse-Verse-Bridge-Verse
**Historical**: Common in early 20th century popular music
**Modern Use**: Still effective for certain song types
**Characteristics**:
- Two identical A sections
- Contrasting B section (bridge)
- Return to A section for resolution

### Single-Verse Form
**Structure**: One repeating section with variations
**Examples**: "Closer" by Kings of Leon
**Technique**:
- Entire song built on one musical idea
- Variations in arrangement and dynamics
- Builds intensity through repetition
- Hypnotic or driving effect

### Two-Verse Form
**Structure**: Verse-Verse (sometimes with bridge)
**Use**: Complete story in two parts
**Length**: Often 16 bars each
**Examples**: Classic film songs, some Lionel Richie songs

## Structural Considerations

### "Multiples of 4" Rule
**Principle**: Sections typically use 4, 8, or 16 bars
**Reasons**:
- Matches natural breathing patterns
- Creates predictable flow
- Easier for musicians to follow
- Fits radio formatting

**Breaking the Rule**:
- Add 1-2 extra bars for surprise
- Use odd-length sections for artistic effect
- Create tension through unexpected lengths

### Dynamic Flow
**Energy Mapping**:
- **Intro**: Medium energy, building
- **Verse 1**: Lower energy, conversational
- **Chorus 1**: High energy, memorable
- **Verse 2**: Return to lower energy
- **Chorus 2**: High energy, familiar
- **Bridge**: Variable, often building
- **Final Chorus**: Highest energy, climactic

### Lyrical Considerations
**Verse Lyrics**:
- Advance the story
- Provide specific details
- Set up the chorus message
- Change with each verse

**Chorus Lyrics**:
- Universal and relatable
- Contain the main message
- Include the song title
- Remain consistent

**Bridge Lyrics**:
- Offer new perspective
- Provide revelation or twist
- Often more introspective
- Lead back to final chorus

## Practical Exercises

### Exercise 1: Structure Analysis
Analyze three popular songs from different decades:
1. Map out the structure (ABABCB, etc.)
2. Time each section
3. Note key changes or modulations
4. Identify the main hook/memorable element

### Exercise 2: Structure Experimentation
Take a simple chord progression and create:
1. A verse melody
2. A contrasting chorus melody
3. A bridge with different chords
4. Arrange them in ABABCB form

### Exercise 3: Lyrical Structure
Write lyrics for ABABCB structure:
1. Verse 1: Set the scene
2. Chorus: Main message
3. Verse 2: Develop the story
4. Chorus: Repeat main message
5. Bridge: New perspective
6. Chorus: Final statement

---

**Next Steps**: With structure mastered, explore [Melody Composition](/coursework/composing/composition-2/melody) to learn how to create memorable and emotionally compelling melodies.`
};

// Export all items for use in the main syllabus
export const popularSongwritingItems = [
  popularSongwritingOverview,
  popularSongwritingFundamentals,
  popularSongwritingStructure
  // Additional items will be added in subsequent files
];