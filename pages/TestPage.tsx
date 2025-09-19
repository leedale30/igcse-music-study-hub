import React, { Suspense } from 'react';
import SheetMusicDisplay from '../components/SheetMusicDisplay';
import Metronome from '../components/Metronome';
import VirtualPiano from '../components/VirtualPiano';
import EarTraining from '../components/EarTraining';
import CircleOfFifths from '../components/CircleOfFifths';
import SightReadingTrainer from '../components/SightReadingTrainer';
import FallingNotesTrainer from '../components/FallingNotesTrainer';
import { useLanguage } from '../contexts/LanguageContext';

// Lazy load HtmlMidiPlayer to reduce initial bundle size
const HtmlMidiPlayer = React.lazy(() => import('../components/HtmlMidiPlayer'));

const TestPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Music Education Toolkit / 音乐教育工具包' : 'Music Education Toolkit'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'en-zh' 
              ? 'Comprehensive music learning tools powered by Tone.js and modern web technologies. Practice, learn, and explore music theory interactively. / 由 Tone.js 和现代网络技术驱动的综合音乐学习工具。交互式练习、学习和探索音乐理论。'
              : 'Comprehensive music learning tools powered by Tone.js and modern web technologies. Practice, learn, and explore music theory interactively.'
            }
          </p>
        </div>





        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en-zh' ? 'MIDI Player / MIDI 播放器' : 'MIDI Player'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {language === 'en-zh'
              ? 'Professional MIDI player powered by Google\'s Magenta.js with real-time visualization and high-quality SoundFont synthesis. / 由 Google Magenta.js 驱动的专业 MIDI 播放器，具有实时可视化和高质量 SoundFont 合成功能。'
              : 'Professional MIDI player powered by Google\'s Magenta.js with real-time visualization and high-quality SoundFont synthesis.'
            }
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {language === 'en-zh' ? 'Sample: C Major Scale / 示例：C 大调音阶' : 'Sample: C Major Scale'}
              </h3>
              <Suspense fallback={
                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg shadow-md border border-green-200 dark:border-green-700">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600 dark:border-green-400"></div>
                    <span className="text-green-800 dark:text-green-200">Loading MIDI Player...</span>
                  </div>
                </div>
              }>
                <HtmlMidiPlayer 
                  midiUrl="/midi/C_Major_Scale.mid" 
                  title={language === 'en-zh' ? 'C Major Scale / C 大调音阶' : 'C Major Scale'}
                  credit={language === 'en-zh' ? 'Powered by Google Magenta.js / 由 Google Magenta.js 驱动' : 'Powered by Google Magenta.js'}
                  showVisualizer={true}
                  visualizerType="piano-roll"
                />
              </Suspense>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">
                {language === 'en-zh' ? 'MIDI Player Features / MIDI 播放器功能' : 'MIDI Player Features'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ul className="text-green-700 dark:text-green-300 space-y-1">
                  <li>• {language === 'en-zh' ? 'Professional SoundFont synthesis / 专业 SoundFont 合成' : 'Professional SoundFont synthesis'}</li>
                  <li>• {language === 'en-zh' ? 'Real-time piano roll visualization / 实时钢琴卷帘可视化' : 'Real-time piano roll visualization'}</li>
                  <li>• {language === 'en-zh' ? 'Google Magenta.js audio engine / Google Magenta.js 音频引擎' : 'Google Magenta.js audio engine'}</li>
                </ul>
                <ul className="text-green-700 dark:text-green-300 space-y-1">
                  <li>• {language === 'en-zh' ? 'Automatic tempo detection / 自动节拍检测' : 'Automatic tempo detection'}</li>
                  <li>• {language === 'en-zh' ? 'Industry-standard quality / 行业标准质量' : 'Industry-standard quality'}</li>
                  <li>• {language === 'en-zh' ? 'Cross-browser compatibility / 跨浏览器兼容性' : 'Cross-browser compatibility'}</li>
                </ul>
              </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en-zh' ? 'Sheet Music Display / 乐谱显示' : 'Sheet Music Display'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {language === 'en-zh'
              ? 'Professional sheet music rendering powered by OpenSheetMusicDisplay. View MusicXML files as beautiful, interactive sheet music with zoom controls and responsive layout. / 由 OpenSheetMusicDisplay 驱动的专业乐谱渲染。将 MusicXML 文件显示为美观、交互式的乐谱，具有缩放控件和响应式布局。'
              : 'Professional sheet music rendering powered by OpenSheetMusicDisplay. View MusicXML files as beautiful, interactive sheet music with zoom controls and responsive layout.'
            }
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {language === 'en-zh' ? 'Sample: Test MusicXML / 示例：测试 MusicXML' : 'Sample: Test MusicXML'}
              </h3>
              <SheetMusicDisplay 
                musicXmlUrl="/MusicXML_Files/test.xml"
                title={language === 'en-zh' ? 'Test Composition / 测试作品' : 'Test Composition'}
                autoResize={true}
                showControls={true}
              />
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-3">
                {language === 'en-zh' ? 'Sheet Music Features / 乐谱功能' : 'Sheet Music Features'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ul className="text-indigo-700 dark:text-indigo-300 space-y-1">
                  <li>• {language === 'en-zh' ? 'Professional music engraving / 专业音乐雕版' : 'Professional music engraving'}</li>
                  <li>• {language === 'en-zh' ? 'MusicXML format support / MusicXML 格式支持' : 'MusicXML format support'}</li>
                  <li>• {language === 'en-zh' ? 'Interactive zoom controls / 交互式缩放控件' : 'Interactive zoom controls'}</li>
                </ul>
                <ul className="text-indigo-700 dark:text-indigo-300 space-y-1">
                  <li>• {language === 'en-zh' ? 'Responsive layout / 响应式布局' : 'Responsive layout'}</li>
                  <li>• {language === 'en-zh' ? 'SVG-based rendering / 基于 SVG 的渲染' : 'SVG-based rendering'}</li>
                  <li>• {language === 'en-zh' ? 'Cross-platform compatibility / 跨平台兼容性' : 'Cross-platform compatibility'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en-zh' ? 'Practice Tools / 练习工具' : 'Practice Tools'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {language === 'en-zh'
              ? 'Essential tools for music practice and skill development. / 音乐练习和技能发展的基本工具。'
              : 'Essential tools for music practice and skill development.'
            }
          </p>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en-zh' ? 'Metronome / 节拍器' : 'Metronome'}
              </h3>
              <Metronome title={language === 'en-zh' ? 'Professional Metronome / 专业节拍器' : 'Professional Metronome'} />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en-zh' ? 'Virtual Piano / 虚拟钢琴' : 'Virtual Piano'}
              </h3>
              <VirtualPiano 
                title={language === 'en-zh' ? 'Interactive Piano / 交互式钢琴' : 'Interactive Piano'}
                octaves={2}
                startOctave={4}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en-zh' ? 'Music Theory & Training / 音乐理论与训练' : 'Music Theory & Training'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {language === 'en-zh'
              ? 'Interactive tools for developing musical understanding and ear training skills. / 用于培养音乐理解和听力训练技能的交互式工具。'
              : 'Interactive tools for developing musical understanding and ear training skills.'
            }
          </p>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en-zh' ? 'Ear Training / 听力训练' : 'Ear Training'}
              </h3>
              <EarTraining title={language === 'en-zh' ? 'Interval Recognition / 音程识别' : 'Interval Recognition'} />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en-zh' ? 'Circle of Fifths / 五度圈' : 'Circle of Fifths'}
              </h3>
              <CircleOfFifths title={language === 'en-zh' ? 'Key Relationships / 调性关系' : 'Key Relationships'} />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en-zh' ? 'Complete Toolkit Features / 完整工具包功能' : 'Complete Toolkit Features'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {language === 'en-zh' ? 'Audio Playback / 音频播放' : 'Audio Playback'}
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• MIDI file playback</li>
                <li>• Piano roll visualization</li>
                <li>• Professional audio synthesis</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                {language === 'en-zh' ? 'Sheet Music / 乐谱' : 'Sheet Music'}
              </h4>
              <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
                <li>• MusicXML rendering</li>
                <li>• Interactive zoom controls</li>
                <li>• Professional engraving</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                {language === 'en-zh' ? 'Virtual Instruments / 虚拟乐器' : 'Virtual Instruments'}
              </h4>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Interactive piano keyboard</li>
                <li>• Multiple instrument sounds</li>
                <li>• Keyboard and mouse input</li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                {language === 'en-zh' ? 'Ear Training / 听力训练' : 'Ear Training'}
              </h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Interval recognition</li>
                <li>• Progressive difficulty</li>
                <li>• Score tracking</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                {language === 'en-zh' ? 'Music Theory / 音乐理论' : 'Music Theory'}
              </h4>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Circle of fifths</li>
                <li>• Key relationships</li>
                <li>• Chord progressions</li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">
                {language === 'en-zh' ? 'Practice Tools / 练习工具' : 'Practice Tools'}
              </h4>
              <ul className="text-sm text-cyan-700 dark:text-cyan-300 space-y-1">
                <li>• Professional metronome</li>
                <li>• Multiple time signatures</li>
                <li>• Tap tempo detection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en-zh' ? 'Sight Reading Tools / 视谱工具' : 'Sight Reading Tools'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {language === 'en-zh'
              ? 'Practice reading musical notation with these interactive sight reading trainers inspired by popular open-source projects. / 使用这些受流行开源项目启发的交互式视谱训练器练习阅读乐谱。'
              : 'Practice reading musical notation with these interactive sight reading trainers inspired by popular open-source projects.'
            }
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en-zh' ? 'Traditional Sight Reading / 传统视谱' : 'Traditional Sight Reading'}
              </h3>
              <SightReadingTrainer title={language === 'en-zh' ? 'Note Recognition Trainer / 音符识别训练器' : 'Note Recognition Trainer'} />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en-zh' ? 'Gamified Sight Reading / 游戏化视谱' : 'Gamified Sight Reading'}
              </h3>
              <FallingNotesTrainer title={language === 'en-zh' ? 'Falling Notes Game / 下落音符游戏' : 'Falling Notes Game'} />
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                {language === 'en-zh' ? 'Sight Reading Comparison / 视谱工具对比' : 'Sight Reading Comparison'}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                    {language === 'en-zh' ? 'Traditional Trainer / 传统训练器' : 'Traditional Trainer'}
                  </h5>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• {language === 'en-zh' ? 'Staff notation display / 五线谱显示' : 'Staff notation display'}</li>
                    <li>• {language === 'en-zh' ? 'Note identification practice / 音符识别练习' : 'Note identification practice'}</li>
                    <li>• {language === 'en-zh' ? 'Progressive difficulty levels / 渐进式难度级别' : 'Progressive difficulty levels'}</li>
                    <li>• {language === 'en-zh' ? 'Audio playback for verification / 音频播放验证' : 'Audio playback for verification'}</li>
                    <li>• {language === 'en-zh' ? 'Inspired by sightreading.training / 受sightreading.training启发' : 'Inspired by sightreading.training'}</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                    {language === 'en-zh' ? 'Falling Notes Game / 下落音符游戏' : 'Falling Notes Game'}
                  </h5>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• {language === 'en-zh' ? 'Guitar Hero-style gameplay / 吉他英雄风格游戏' : 'Guitar Hero-style gameplay'}</li>
                    <li>• {language === 'en-zh' ? 'Real-time note recognition / 实时音符识别' : 'Real-time note recognition'}</li>
                    <li>• {language === 'en-zh' ? 'Combo system and scoring / 连击系统和计分' : 'Combo system and scoring'}</li>
                    <li>• {language === 'en-zh' ? 'Adjustable speed and difficulty / 可调节速度和难度' : 'Adjustable speed and difficulty'}</li>
                    <li>• {language === 'en-zh' ? 'Inspired by Sightread app / 受Sightread应用启发' : 'Inspired by Sightread app'}</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-800/30 rounded">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>{language === 'en-zh' ? 'Open Source Inspiration / 开源灵感来源' : 'Open Source Inspiration'}:</strong>
                  {language === 'en-zh'
                    ? ' These tools are inspired by popular GitHub projects including Sightread (falling notes), sightreading.training (traditional), and DavidCEllis/SightreadingPractice (MIDI input). / 这些工具受到流行的GitHub项目启发，包括Sightread（下落音符）、sightreading.training（传统）和DavidCEllis/SightreadingPractice（MIDI输入）。'
                    : ' These tools are inspired by popular GitHub projects including Sightread (falling notes), sightreading.training (traditional), and DavidCEllis/SightreadingPractice (MIDI input).'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


      </div>
    </div>
  );
};

export default TestPage;