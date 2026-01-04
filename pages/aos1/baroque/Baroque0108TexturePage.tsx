import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0108TexturePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Texture</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Texture
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 1 • Baroque Music
        </p>
      </header>

      {/* Main Content */}
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
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `Introduction 
<section>
<h2>Definition</h2>
<p>Texture refers to the layering of musical lines—monophonic, polyphonic, homophonic, etc. Baroque texture is highly varied and dynamic, characterized by the interplay of multiple independent parts, though homophony is also common.</p>
</section>
 Polyphonic Texture 
<section>
<h2>Polyphonic Texture - The Baroque Hallmark</h2>
<h3>Characteristics of Polyphony</h3>
<p>Baroque music is often strongly associated with <strong>polyphonic</strong> (or <strong>contrapuntal</strong>) textures, where several independent melodic lines are intertwined:</p>
<ul>
<li>Multiple voices move independently with equal importance</li>
<li>Each voice maintains its own melodic integrity</li>
<li>Complex interweaving creates rich harmonic content</li>
<li>Often features <strong>imitation</strong> between parts</li>
</ul>
<h3>Imitative Polyphony</h3>
<p>A key feature of Baroque polyphony is <strong>imitation</strong>, where melodic material is passed between different voices or instruments. This technique is exemplified in the fugal style found in Handel's <em>Allegro</em> (Movement 2).</p>
</section>
 Homophonic Texture 
<section>
<h2>Homophonic Texture</h2>
<h3>Melody and Accompaniment</h3>
<p><strong>Homophonic</strong> texture features a clear melody supported by harmony/accompaniment and is frequently used in Baroque music, particularly in:</p>
<ul>
<li>Vocal works where text clarity is important</li>
<li>Outer ritornello sections of concertos</li>
<li>Dance movements where rhythmic clarity is essential</li>
<li>Solo sections where the soloist takes melodic prominence</li>
</ul>
<h3>Structural Function</h3>
<p>Homophonic texture often provides contrast to polyphonic sections, creating variety and highlighting important thematic material.</p>
</section>
 Monophonic Texture 
<section>
<h2>Monophonic Texture</h2>
<h3>Single Line Texture</h3>
<p><strong>Monophonic</strong> textures (a single, unaccompanied melodic line) also occur in Baroque music for:</p>
<ul>
<li>Brief, dramatic statements</li>
<li>Thematic presentations</li>
<li>Transitional passages</li>
<li>Solo instrumental cadenzas</li>
</ul>
<h3>Expressive Impact</h3>
<p>Though less common than polyphonic or homophonic textures, monophonic passages create powerful dramatic effects through their stark simplicity.</p>
</section>
 Performance Context and Texture 
<section>
<h2>Performance Context and Textural Contrast</h2>
<h3>Tutti vs. Solo Sections</h3>
<p>The concerto genre exploits textural contrast between different performing forces:</p>
<h4>Tutti Sections (Full Orchestra)</h4>
<ul>
<li>Typically feature <strong>thicker texture</strong> with more instruments</li>
<li>Often employ polyphonic or rich homophonic writing</li>
<li>Create powerful, full sound for ritornello themes</li>
</ul>
<h4>Solo Sections (Episodes)</h4>
<ul>
<li>Feature <strong>thinner texture</strong> with fewer instruments</li>
<li>Contrast sharply with full tutti sections</li>
<li>Allow individual voices or small groups to be heard clearly</li>
<li>Often showcase virtuosic writing in reduced scoring</li>
</ul>
</section>
 Textural Techniques 
<section>
<h2>Specific Textural Techniques</h2>
<h3>Unison and Octave Doubling</h3>
<ul>
<li><strong>Unison</strong> - Multiple instruments playing the same pitches</li>
<li><strong>Doubled in octaves</strong> - Same melody played in different octaves simultaneously</li>
<li>Both techniques create powerful, unified statements</li>
</ul>
<h3>Imitative Entries</h3>
<p>Voices enter successively with the same or similar melodic material, creating a layered effect as the texture gradually builds.</p>
<h3>Contrapuntal Independence</h3>
<p>Each voice maintains rhythmic and melodic independence, creating complex but coherent musical fabric.</p>
</section>
 Focus Work Examples 
<section>
<h2>Focus Work Examples</h2>
<h3>Handel: Concerto Grosso in D major Op. 6, No. 5</h3>
<ul>
<li><strong>Movement 2 (Allegro)</strong> - Demonstrates fugal polyphonic texture with imitation between parts</li>
<li>Clear contrast between tutti and concertino textures</li>
<li>Shows how texture supports the concerto grosso structure</li>
</ul>
<h3>Vivaldi: Spring (from The Four Seasons)</h3>
<ul>
<li>Alternates between thick tutti textures and thin solo textures</li>
<li>Uses textural contrast to support the ritornello form</li>
<li>Demonstrates how texture can support programmatic content</li>
</ul>
</section>
 Textural Analysis 
<section>
<h2>Analyzing Baroque Texture</h2>
<h3>Questions to Consider</h3>
<p>When analyzing texture in Baroque music, consider:</p>
<ul>
<li>How many independent voices are present?</li>
<li>Is there a clear melody-accompaniment relationship?</li>
<li>Are voices moving independently or together?</li>
<li>How does texture change throughout the piece?</li>
<li>What is the relationship between texture and form?</li>
</ul>
</section>
 Essential Terminology 
<section>
<h2>Essential Terminology</h2>
<p>Students must recognize and understand these textural terms:</p>
<ul>
<li><strong>Monophonic</strong> - Single melodic line without accompaniment</li>
<li><strong>Homophonic</strong> - Melody with harmonic accompaniment</li>
<li><strong>Polyphonic</strong> - Multiple independent melodic lines</li>
<li><strong>Imitative</strong> - Voices entering with similar melodic material</li>
<li><strong>Unison</strong> - Multiple parts playing the same pitches</li>
<li><strong>Doubled in octaves</strong> - Same melody in different octaves</li>
<li><strong>Tutti</strong> - Full ensemble playing together</li>
<li><strong>Solo</strong> - Individual instrument or small group featured</li>
<li><strong>Contrapuntal</strong> - Relating to counterpoint/polyphony</li>
</ul>
</section>
 Assessment Focus 
<section>
<h2>Assessment Focus</h2>
<p>For IGCSE examination purposes, students should be able to:</p>
<ul>
<li>Identify monophonic, homophonic, and polyphonic textures</li>
<li>Recognize imitative and non-imitative polyphony</li>
<li>Understand the contrast between tutti and solo textures</li>
<li>Analyze how texture supports musical structure</li>
<li>Identify unison and octave doubling techniques</li>
<li>Connect textural choices to specific focus work examples</li>
<li>Understand how texture creates variety and contrast</li>
<li>Recognize the relationship between texture and performance forces</li>
</ul>
<p><strong>Important Note:</strong> Candidates must concentrate their analytical responses on the musical features actually heard in the recorded extracts, rather than generalizing based solely on knowledge of the Baroque period.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0108TexturePage;
