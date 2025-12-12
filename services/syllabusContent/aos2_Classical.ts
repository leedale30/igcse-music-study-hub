
import { SyllabusItem } from '../../types';
import {
  classicalIntroductionQuiz,
  mozartLifeQuiz
} from '../quizData';
import { aos2DetailedContent } from './aosDetailedContent';

export const classicalMusicAoS: SyllabusItem = {
  id: 'aos2-classical-music',
  title: 'Area of Study 2: Classical Music',
  title_zh: '学习领域二：古典音乐',
  path: '/areas-of-study/aos2-classical-music',
  content: 'Music from about 1750 to 1810, like Mozart.',
  content_zh: '大约从1750年到1810年的音乐，如莫扎特。',
  longDescription: `The Classical period (around 1750-1810) came after Baroque. Music from this time often sounds clear, elegant, and balanced. Important composers include Mozart and Haydn. We will study "focus works" to understand features like Sonata Form and learn about chamber music.`,
  longDescription_zh: `古典时期（约1750-1810年）紧随巴洛克时期之后。这一时期的音乐通常听起来清晰、优雅且平衡。重要作曲家包括莫扎特和海顿。我们将学习“重点作品”，以理解奏鸣曲式等特点，并了解室内乐。`,
  children: [
    {
      id: 'aos2-introduction',
      title: 'Introduction',
      title_zh: '简介',
      path: '/areas-of-study/aos2-classical-music/introduction',
      content: 'An Introduction to the Classical Era (c. 1750 – c. 1820).',
      content_zh: '古典时代简介 (约 1750 – 约 1820)。',
      longDescription: `**The Classical Era: An Age of Elegance, Clarity, and Reason (c. 1750 – c. 1820)**

The Classical period in music, roughly spanning from 1750 to 1820, emerged from the late Baroque as a reaction against its complexity and grandeur, favoring clarity, balance, and formal elegance. This era coincided with the **Age of Enlightenment**, a powerful intellectual and cultural movement that emphasized reason, individualism, and skepticism towards traditional authority.

**Historical and Cultural Context: The Enlightenment's Influence**

*   **The Enlightenment:** Philosophers like Voltaire, Rousseau, and Kant championed reason, empirical observation, and human rights. Ideas of liberty, equality, and fraternity gained traction, influencing social and political thought, and culminating in events like the American (1775-1783) and French (1789-1799) Revolutions.
*   **Shift in Patronage:** While aristocratic courts and the Church remained important patrons of music, the growing middle class led to an increase in public concerts and music publishing. Composers began to have more opportunities for freelance work, though many still relied on court or church employment (e.g., Haydn with the Esterházy family).
*   **Social and Political Change:** This was a period of significant societal upheaval. The old aristocratic order was being challenged, and new ideas about governance and individual freedom were taking root.
*   **Art and Architecture (Neoclassicism):** Similar to music, art and architecture saw a return to the perceived clarity, simplicity, and grandeur of ancient Greece and Rome. This Neoclassical style valued order, proportion, and restrained emotion. Think of the paintings of Jacques-Louis David or the architecture of Thomas Jefferson.

**Key Musical Characteristics of the Classical Era:**

*   **Melody:** Classical melodies are typically **clear, balanced, and memorable**. They are often organized into symmetrical phrases (e.g., four-bar phrases) and feature clear cadences. Melodies are often song-like (cantabile) and elegant.
*   **Harmony:** Harmony is predominantly **diatonic** (based on major/minor scales) and functional, with clear chord progressions (especially tonic-dominant relationships). The **Alberti bass** (a pattern of broken chords in the left hand of keyboard music) became a common accompaniment texture.
*   **Rhythm:** Rhythms are generally **clear, regular, and well-defined**, often with a less complex and driving feel than Baroque rhythms. There's a greater variety of rhythmic patterns within a piece.
*   **Texture:** The predominant texture is **homophonic** (a clear melody with chordal accompaniment). While counterpoint was still used (especially in development sections or by masters like Mozart), the dense polyphony of the Baroque became less common.
*   **Dynamics:** Gradual changes in dynamics (**crescendo** and **diminuendo**) became much more common and were an important expressive tool, unlike the predominantly terraced dynamics of the Baroque. This was facilitated by the development of instruments like the fortepiano.
*   **Forms:** Classical composers placed great emphasis on clarity of form. Key forms developed and refined during this era include:
    *   **Sonata Form:** The most important structural design, typically used for the first movement of sonatas, symphonies, string quartets, and concertos. It consists of three main sections: Exposition, Development, and Recapitulation.
    *   **Theme and Variations:** A theme is presented and then undergoes a series of variations.
    *   **Minuet and Trio:** A stately dance in triple meter (ABA form), often the third movement of a symphony or string quartet.
    *   **Rondo Form:** A principal theme (A) returns multiple times, alternating with contrasting episodes (e.g., ABACA or ABACABA). Often used for finales.
*   **Instrumentation:** The orchestra became more standardized, with distinct sections for strings, woodwinds (flutes, oboes, clarinets, bassoons), brass (horns, trumpets), and timpani. The harpsichord continuo largely disappeared as harmonies were written into the instrumental parts.

**Important Composers: The "First Viennese School"**
Vienna became a major musical center, and the most important composers of the era are often grouped as the First Viennese School:

*   **Franz Joseph Haydn (1732–1809):** Often called the "Father of the Symphony" and "Father of the String Quartet" for his significant contributions to these genres. He spent much of his career in the service of the wealthy Esterházy family but also achieved international fame.
*   **Wolfgang Amadeus Mozart (1756–1791):** A child prodigy who composed masterworks in virtually every genre of his time, including symphonies, concertos, operas, chamber music, and sacred music. Known for his melodic genius and sophisticated craftsmanship.
*   **Ludwig van Beethoven (1770–1827):** While Beethoven is also a pivotal figure in the transition to the Romantic era, his early works are firmly in the Classical style, building upon the foundations laid by Haydn and Mozart.

**Major Genres:**

*   **Symphony:** A large-scale orchestral work, usually in four movements.
*   **Sonata:** A work for solo instrument (e.g., piano sonata) or for a solo instrument with piano accompaniment (e.g., violin sonata), usually in three or four movements.
*   **Concerto:** A work for a solo instrument and orchestra, typically in three movements, showcasing the soloist's virtuosity.
*   **String Quartet:** Chamber music for two violins, viola, and cello, usually in four movements. It became a prestigious medium for composers.
*   **Opera:** Continued to be a popular genre, with developments in both serious opera (opera seria) and comic opera (opera buffa, Singspiel). Mozart was a master of opera.

The Classical era emphasized elegance, clarity, formal balance, and emotional restraint (though deep emotion was certainly present). It produced some of the most beloved and enduring music in the Western canon, paving the way for the expressive intensity of the Romantic period.`,
      longDescription_zh: `**古典时代：优雅、清晰与理性的时代 (约 1750 – 约 1820)**

古典音乐时期，大约从1750年到1820年，是从晚期巴洛克时期演变而来，作为对其复杂和宏伟风格的一种反拨，更偏爱清晰、平衡和形式上的优雅。这一时代恰逢**启蒙运动**，这是一场强调理性、个人主义和对传统权威持怀疑态度的强大思想文化运动。

**历史与文化背景：启蒙运动的影响**

*   **启蒙运动：** 伏尔泰、卢梭和康德等哲学家倡导理性、经验观察和人权。自由、平等和博爱的思想深入人心，影响了社会和政治思想，并最终促成了美国独立战争（1775-1783）和法国大革命（1789-1799）等事件。
*   **赞助体系的转变：** 虽然贵族宫廷和教会仍然是音乐的重要赞助者，但不断壮大的中产阶级导致了公共音乐会和音乐出版的增加。作曲家开始有更多机会从事自由职业，尽管许多人仍然依赖于宫廷或教会的雇佣（例如，海顿与埃斯特哈齐家族）。
*   **社会与政治变革：** 这是一个社会剧烈动荡的时期。旧的贵族秩序受到挑战，关于治理和个人自由的新思想正在生根发芽。
*   **艺术与建筑（新古典主义）：** 与音乐类似，艺术和建筑也回归到古希腊和罗马时期所推崇的清晰、简约和宏伟。这种新古典主义风格重视秩序、比例和克制的情感。可以想想雅克-路易·大卫的绘画或托马斯·杰斐逊的建筑。

**古典时代的主要音乐特征：**

*   **旋律：** 古典旋律通常**清晰、平衡且令人难忘**。它们常常被组织成对称的乐句（例如，四小节乐句），并具有明确的终止式。旋律通常如歌（cantabile）且优雅。
*   **和声：** 和声主要是**自然音阶的**（基于大调/小调音阶）和功能性的，具有清晰的和弦进行（特别是主-属关系）。**阿尔贝蒂低音**（键盘音乐左手部分的分解和弦模式）成为一种常见的伴奏织体。
*   **节奏：** 节奏通常**清晰、规整、定义明确**，与巴洛克时期的节奏相比，通常不那么复杂和有驱动力。一个作品中的节奏模式更加多样化。
*   **织体：** 主要的织体是**主音织体**（清晰的旋律配以和弦伴奏）。虽然对位法仍在使用（特别是在发展部或像莫扎特这样的名家作品中），但巴洛克时期密集的复音织体已变得不那么普遍。
*   **力度：** 力度的渐变（**渐强**和**渐弱**）变得更为普遍，并且是一个重要的表现工具，这与巴洛克时期主要是阶梯式力度形成对比。这得益于古钢琴等乐器的发展。
*   **曲式：** 古典作曲家非常注重曲式的清晰性。在这一时期发展和完善的主要曲式包括：
    *   **奏鸣曲式：** 最重要的结构设计，通常用于奏鸣曲、交响曲、弦乐四重奏和协奏曲的第一乐章。它由三个主要部分组成：呈示部、发展部和再现部。
    *   **主题与变奏：** 呈现一个主题，然后进行一系列变奏。
    *   **小步舞曲与三声中部：** 一种三拍子的庄重舞曲（ABA形式），通常是交响曲或弦乐四重奏的第三乐章。
    *   **回旋曲式：** 一个主要主题（A）多次重现，与对比性的插部交替出现（例如，ABACA或ABACABA）。常用于终曲。
*   **配器：** 管弦乐队变得更加标准化，分为弦乐、木管（长笛、双簧管、单簧管、巴松管）、铜管（圆号、小号）和定音鼓等不同声部。随着和声被完整地写入乐器分谱，羽管键琴的通奏低音基本消失。

**重要作曲家：“第一维也纳乐派”**
维也纳成为一个主要的音乐中心，这一时代最重要的作曲家通常被归为第一维也نا乐派：

*   **弗朗茨·约瑟夫·海顿 (1732–1809):** 因其在交响曲和弦乐四重奏这两个体裁上的重大贡献而常被称为“交响曲之父”和“弦乐四重奏之父”。他的大部分职业生涯为富有的埃斯特哈齐家族服务，但也取得了国际声誉。
*   **沃尔夫冈·阿玛多伊斯·莫扎特 (1756–1791):** 一位神童，在他那个时代几乎所有体裁中都创作了杰作，包括交响曲、协奏曲、歌剧、室内乐和宗教音乐。以其旋律天赋和精湛的技巧而闻名。
*   **路德维希·凡·贝多芬 (1770–1827):** 尽管贝多芬也是向浪漫主义时代过渡的关键人物，但他的早期作品牢固地植根于古典风格，建立在海顿和莫扎特奠定的基础之上。

**主要体裁：**

*   **交响曲：** 一种大型管弦乐作品，通常有四个乐章。
*   **奏鸣曲：** 为独奏乐器（如钢琴奏鸣曲）或为独奏乐器与钢琴伴奏（如小提琴奏鸣曲）而作的作品，通常有三或四个乐章。
*   **协奏曲：** 为独奏乐器与管弦乐队而作的作品，通常有三个乐章，展示独奏者的精湛技艺。
*   **弦乐四重奏：** 为两把小提琴、一把中提琴和一把大提琴而作的室内乐，通常有四个乐章。它成为作曲家一个享有盛誉的创作媒介。
*   **歌剧：** 仍然是一个受欢迎的体裁，在正歌剧（opera seria）和喜歌剧（opera buffa, Singspiel）方面都有发展。莫扎特是歌剧大师。

古典时代强调优雅、清晰、形式平衡和情感克制（尽管深刻的情感当然也存在）。它产生了西方经典音乐中一些最受喜爱和经久不衰的作品，为浪漫主义时期富有表现力的强烈情感铺平了道路。`,
      quiz: classicalIntroductionQuiz
    },
    {
      id: 'aos2-mozart', title: 'Focus Work: Mozart (1756–1791)', title_zh: '重点作品：莫扎特 (1756–1791)', path: '/areas-of-study/aos2-classical-music/mozart',
      content: 'Learn about Wolfgang Amadeus Mozart.',
      content_zh: '了解沃尔夫冈·阿玛多伊斯·莫扎特。',
      longDescription: `Wolfgang Amadeus Mozart was a brilliant composer of the Classical period. We will study his "Quintet for piano and winds, K. 452" to understand his style for chamber music, and also explore his extraordinary life.`,
      longDescription_zh: `沃尔夫冈·阿玛多伊斯·莫扎特是古典时期一位杰出的作曲家。我们将学习他的《钢琴与管乐五重奏，K. 452》，以理解他的室内乐风格，并探索他非凡的一生。`,
      children: [
        {
          id: 'aos2-mozart-background',
          title: 'Mozart: Life and Times',
          title_zh: '莫扎特：生平与时代',
          path: '/areas-of-study/aos2-classical-music/mozart/background',
          content: 'Explore the extraordinary life of Wolfgang Amadeus Mozart, from child prodigy to master composer.',
          content_zh: '探索沃尔夫冈·阿玛多伊斯·莫扎特的非凡一生，从神童到作曲大师。',
          longDescription: `Wolfgang Amadeus Mozart (1756–1791) is one of the most famous and influential composers of the Classical period, and indeed, in all of Western music history. His life, though short, was filled with extraordinary musical achievements.

**Early Life and Child Prodigy:**
Mozart was born in **Salzburg** (now in Austria) on January 27, 1756. His father, **Leopold Mozart**, was a respected composer, violinist, and music theorist. Recognizing his son's prodigious talent at an incredibly early age, Leopold dedicated himself to Wolfgang's musical education. Wolfgang (or Wolferl, as he was affectionately known) began composing minuets by the age of five and was proficient on the keyboard and violin.
Together with his older sister Maria Anna ("Nannerl"), also a talented keyboardist, Wolfgang embarked on extensive **European tours** organized by Leopold. They performed for royalty and aristocracy in major cities like Munich, Vienna, Paris, London, and throughout Italy. These tours exposed young Mozart to a vast array of musical styles and prominent musicians, which he absorbed and assimilated into his own developing compositional voice.

**Salzburg and Search for Independence:**
For a time, Mozart was employed in the court of the Archbishop of Salzburg, Hieronymus Colloredo. However, the relationship was often strained. Mozart felt constrained by the provincial atmosphere and the limitations imposed by the Archbishop. He longed for greater artistic freedom and opportunities.

**Vienna: The Freelance Years:**
In **1781**, Mozart made the bold decision to leave his Salzburg position and settle in **Vienna**, the imperial capital and a vibrant musical center. He aimed to establish himself as a freelance musician – composing, performing (especially as a pianist in his own concertos), and teaching.
His early Vienna years were marked by considerable success. Operas like "Die Entführung aus dem Serail" (The Abduction from the Seraglio) were well-received. He gained renown as a pianist and composer. He married Constanze Weber in 1782.

**Masterworks and Mature Style:**
Mozart's output in Vienna was phenomenal, showcasing his mastery across all contemporary genres:
*   **Operas:** He composed some of the greatest operas ever written, including "Le nozze di Figaro" (The Marriage of Figaro), "Don Giovanni," "Così fan tutte," and "Die Zauberflöte" (The Magic Flute). These works are celebrated for their brilliant music, insightful characterization, and dramatic power.
*   **Symphonies:** His later symphonies, such as No. 39 in E-flat, No. 40 in G minor, and No. 41 in C major ("Jupiter"), are cornerstones of the symphonic repertoire.
*   **Piano Concertos:** He wrote many of his 27 piano concertos for his own performances in Vienna, developing the form and showcasing a remarkable dialogue between soloist and orchestra.
*   **Chamber Music:** Masterpieces include string quartets (notably the six "Haydn" quartets dedicated to his friend Joseph Haydn), string quintets, and sonatas.
*   **Sacred Music:** Including masses like the "Coronation" Mass and the "Great" Mass in C minor.

Mozart's music is characterized by its **melodic beauty, formal elegance, harmonic richness, clarity of texture, and profound emotional depth.** He brought Classical forms to a peak of perfection.

**Later Years and Legacy:**
Despite his genius and prolific output, Mozart's later years in Vienna were marked by **financial difficulties** and fluctuating popularity. Commissions became less frequent, and he struggled to maintain a consistent income. His health also began to decline.
In 1791, while working on his opera "La clemenza di Tito" and "The Magic Flute," he received an anonymous commission for a **Requiem Mass**. He worked on this piece feverishly, believing it was for himself, but died on December 5, 1791, at the age of 35, leaving the Requiem unfinished. (It was later completed by his student, Franz Xaver Süssmayr).
Though his life was cut short, Wolfgang Amadeus Mozart left an indelible mark on music. His vast and varied body of work, comprising over 600 compositions, continues to be performed, studied, and cherished worldwide, solidifying his status as one of history's supreme musical geniuses.`,
          longDescription_zh: `沃尔夫冈·阿玛多伊斯·莫扎特（1756–1791）是古典时期乃至整个西方音乐史上最著名、最具影响力的作曲家之一。他的一生虽然短暂，却充满了非凡的音乐成就。

**早年生活与神童时期：**
莫扎特于1756年1月27日出生在**萨尔茨堡**（现属奥地利）。他的父亲**利奥波德·莫扎特**是一位备受尊敬的作曲家、小提琴家和音乐理论家。利奥波德在极早的年龄就认识到儿子的惊人天赋，于是倾心于沃尔夫冈的音乐教育。沃尔夫冈（昵称沃尔夫）五岁时便开始创作小步舞曲，并能熟练演奏键盘乐器和小提琴。
沃尔夫冈与他同样才华横溢的键盘手姐姐玛丽亚·安娜（“南妮儿”）一起，在利奥波德的组织下进行了广泛的**欧洲巡演**。他们在慕尼黑、维也纳、巴黎、伦敦以及整个意大利等主要城市为皇室和贵族表演。这些巡演使年轻的莫扎特接触了大量不同的音乐风格和著名音乐家，他吸收并融合了这些元素，形成了自己不断发展的作曲风格。

**萨尔茨堡与寻求独立：**
有一段时间，莫扎特受雇于萨尔茨堡大主教希罗尼穆斯·科洛雷多的宫廷。然而，这段关系常常很紧张。莫扎特感到受制于地方的局限氛围和大主教施加的限制。他渴望更大的艺术自由和机会。

**维也纳：自由职业生涯：**
**1781年**，莫扎特做出大胆决定，离开他在萨尔茨堡的职位，定居在帝国首都及充满活力的音乐中心**维也纳**。他旨在成为一名自由音乐家——作曲、演奏（尤其是在自己的协奏曲中担任钢琴家）和教学。
他在维也纳的早年取得了相当大的成功。像《后宫诱逃》这样的歌剧广受欢迎。他作为钢琴家和作曲家声名鹊起。他于1782年与康斯坦策·韦伯结婚。

**杰作与成熟风格：**
莫扎特在维也纳的创作量惊人，展示了他在当时所有体裁中的精湛技艺：
*   **歌剧：** 他创作了一些有史以来最伟大的歌剧，包括《费加罗的婚礼》、《唐·璜》、《女人心》和《魔笛》。这些作品因其辉煌的音乐、深刻的人物刻画和戏剧性的力量而备受赞誉。
*   **交响曲：** 他的晚期交响曲，如降E大调第39号、g小调第40号和C大调第41号（“朱庇特”），是交响乐曲目的基石。
*   **钢琴协奏曲：** 他为自己在维也纳的演出创作了27首钢琴协奏曲中的许多首，发展了这一曲式，并展示了独奏者与管弦乐队之间非凡的对话。
*   **室内乐：** 杰作包括弦乐四重奏（尤其是题献给他的朋友约瑟夫·海顿的六首“海顿”四重奏）、弦乐五重奏和奏鸣曲。
*   **宗教音乐：** 包括像“加冕”弥撒和c小调“大”弥撒这样的弥撒曲。

莫扎特的音乐以其**旋律优美、形式优雅、和声丰富、织体清晰和情感深刻**而著称。他将古典曲式推向了完美的顶峰。

**晚年与遗产：**
尽管他天赋异禀、作品丰富，但莫扎特在维也纳的晚年却遭遇了**经济困难**和声望的波动。委托创作变得不那么频繁，他努力维持稳定的收入。他的健康状况也开始下降。
1791年，当他正在创作歌剧《狄托的仁慈》和《魔笛》时，他收到了一个匿名的**安魂弥撒**委托。他狂热地创作这首曲子，相信这是为自己而作，但于1791年12月5日去世，年仅35岁，留下了未完成的安魂曲。（后来由他的学生弗朗茨·克萨韦尔·苏斯迈尔完成）。
尽管英年早逝，沃尔夫冈·阿玛多伊斯·莫扎特在音乐上留下了不可磨灭的印记。他庞大而多样的作品，包括600多首作品，继续在世界范围内被演奏、研究和珍爱，巩固了他作为历史上最伟大的音乐天才之一的地位。`,
          quiz: mozartLifeQuiz
        },
        {
          id: 'aos2-mozart-quintet', title: 'Quintet for piano and winds in E flat major, K. 452', title_zh: '降E大调钢琴与管乐五重奏, K. 452', path: '/areas-of-study/aos2-classical-music/mozart/quintet-k452',
          content: 'Study Mozart\'s Quintet.',
          content_zh: '学习莫扎特的五重奏。',
          longDescription: `This section is about Mozart's Quintet for piano, oboe, clarinet, horn, and bassoon. We will look at its movements and how Mozart writes for these instruments together.`,
          longDescription_zh: `本节关于莫扎特的钢琴、双簧管、单簧管、圆号和巴松管五重奏。我们将探讨其乐章以及莫扎特如何为这些乐器共同谱曲。`,
          children: [
            {
              id: 'aos2-mozart-quintet-mvt1', title: 'Movement 1 (Largo – Allegro moderato)', title_zh: '第一乐章 (广板 – 中庸的快板)', path: '/areas-of-study/aos2-classical-music/mozart/quintet-k452/movement-1',
              content: 'The first part of the Quintet. Largo means slow, Allegro moderato means moderately fast.',
              content_zh: '五重奏的第一部分。Largo意为缓慢，Allegro moderato意为中速的快板。',
              longDescription: `Let's explore the first movement of Mozart's Quintet. It starts with a slow introduction (Largo) and then moves to a faster main section (Allegro moderato). We will study its structure, especially Sonata Form.`,
              longDescription_zh: `让我们来探索莫扎特五重奏的第一乐章。它以一个缓慢的引子（广板）开始，然后进入一个较快的主部（中庸的快板）。我们将学习它的结构，特别是奏鸣曲式。`
            },
            {
              id: 'sonata-form', title: 'Sonata Form', title_zh: '奏鸣曲式', path: '/term/sonata-form', isTerm: true,
              content: 'A common structure in Classical music.',
              content_zh: '古典音乐中一种常见的结构。',
              longDescription: `Sonata Form is a very important way of organising music in the Classical period, often used for the first movement of sonatas, symphonies, and chamber music. It usually has three main sections: Exposition (themes are shown), Development (themes are changed and explored), and Recapitulation (themes return).`,
              longDescription_zh: `奏鸣曲式是古典时期组织音乐的一种非常重要的方式，常用于奏鸣曲、交响曲和室内乐的第一乐章。它通常有三个主要部分：呈示部（主题展示）、发展部（主题变化和探索）和再现部（主题回归）。`
            }
          ]
        }
      ]
    },
    {
      id: 'chamber-music', title: 'Chamber Music', title_zh: '室内乐', path: '/term/chamber-music', isTerm: true,
      content: 'Music for small groups.',
      content_zh: '为小组音乐家创作的音乐。',
      longDescription: `Chamber Music is written for a small group of musicians, usually with one player for each part. Examples are string quartets (two violins, viola, cello) and piano trios (piano, violin, cello). It was very popular in the Classical period for playing in smaller rooms rather than big concert halls.`,
      longDescription_zh: `室内乐是为一小组音乐家创作的音乐，通常每个声部只有一名演奏者。例子有弦乐四重奏（两把小提琴、一把中提琴、一把大提琴）和钢琴三重奏（钢琴、小提琴、大提琴）。它在古典时期非常流行，适合在小房间里演奏，而不是在大型音乐厅。`
    },
    {
      id: 'aos2-key-features', title: 'Key Classical Features', title_zh: '主要古典特征', path: '/areas-of-study/aos2-classical-music/key-features',
      content: 'Important musical ideas from the Classical period.',
      content_zh: '古典时期的重要音乐理念。',
      longDescription: `Classical music has its own special features. This includes balanced melodies (tunes), clear structures, and more use of gradual changes in dynamics (like crescendo and diminuendo) compared to Baroque music.`,
      longDescription_zh: `古典音乐有其自身的特殊特征。这包括平衡的旋律（曲调）、清晰的结构，以及与巴洛克音乐相比，更多地使用渐进的力度变化（如渐强和渐弱）。`,
      children: []
    },
    {
      id: 'aos2-wider-listening', title: 'Wider Listening', title_zh: '扩展聆听', path: '/areas-of-study/aos2-classical-music/wider-listening',
      content: 'More Classical music to listen to.',
      content_zh: '更多可供聆听的古典音乐。',
      longDescription: `To understand Classical music better, listen to different pieces. This page suggests works by Haydn, Mozart, and Beethoven. This will help you hear the style in different types of music like symphonies and concertos.`,
      longDescription_zh: `为了更好地理解古典音乐，请聆听不同的作品。此页面推荐了海顿、莫扎特和贝多芬的作品。这将帮助您在交响曲和协奏曲等不同类型的音乐中感受这种风格。`
    },
    aos2DetailedContent,
  ]
};
