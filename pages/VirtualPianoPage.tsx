import React from 'react';
import VirtualPiano from '../components/VirtualPiano';
import { useLanguage } from '../contexts/LanguageContext';

const VirtualPianoPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'Virtual Piano / 虚拟钢琴' : 'Virtual Piano'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === 'en-zh'
            ? 'An interactive virtual piano with multiple instruments and keyboard support. / 具有多种乐器和键盘支持的交互式虚拟钢琴。'
            : 'An interactive virtual piano with multiple instruments and keyboard support.'
          }
        </p>
      </div>

      <div className="mb-8">
        <VirtualPiano 
          title={language === 'en-zh' ? 'Interactive Piano / 交互式钢琴' : 'Interactive Piano'}
          octaves={3}
          startOctave={3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Keyboard Shortcuts / 键盘快捷键' : 'Keyboard Shortcuts'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'White Keys / 白键' : 'White Keys'}
              </h3>
              <div className="grid grid-cols-7 gap-1 text-sm">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center">
                  <div className="font-bold">A</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">C</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center">
                  <div className="font-bold">S</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">D</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center">
                  <div className="font-bold">D</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">E</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center">
                  <div className="font-bold">F</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">F</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center">
                  <div className="font-bold">G</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">G</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center">
                  <div className="font-bold">H</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">A</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center">
                  <div className="font-bold">J</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">B</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Black Keys / 黑键' : 'Black Keys'}
              </h3>
              <div className="grid grid-cols-5 gap-1 text-sm">
                <div className="bg-gray-800 dark:bg-gray-600 text-white p-2 rounded text-center">
                  <div className="font-bold">W</div>
                  <div className="text-xs text-gray-300">C#</div>
                </div>
                <div className="bg-gray-800 dark:bg-gray-600 text-white p-2 rounded text-center">
                  <div className="font-bold">E</div>
                  <div className="text-xs text-gray-300">D#</div>
                </div>
                <div className="bg-gray-800 dark:bg-gray-600 text-white p-2 rounded text-center">
                  <div className="font-bold">T</div>
                  <div className="text-xs text-gray-300">F#</div>
                </div>
                <div className="bg-gray-800 dark:bg-gray-600 text-white p-2 rounded text-center">
                  <div className="font-bold">Y</div>
                  <div className="text-xs text-gray-300">G#</div>
                </div>
                <div className="bg-gray-800 dark:bg-gray-600 text-white p-2 rounded text-center">
                  <div className="font-bold">U</div>
                  <div className="text-xs text-gray-300">A#</div>
                </div>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {language === 'en-zh' ? 'Sustain Pedal / 延音踏板' : 'Sustain Pedal'}
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Spacebar
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Features & Tips / 功能与技巧' : 'Features & Tips'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Instruments / 乐器' : 'Instruments'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• <strong>{language === 'en-zh' ? 'Piano / 钢琴' : 'Piano'}:</strong> {language === 'en-zh' ? 'Classic piano sound with natural decay / 经典钢琴音色，自然衰减' : 'Classic piano sound with natural decay'}</li>
                <li>• <strong>{language === 'en-zh' ? 'Organ / 风琴' : 'Organ'}:</strong> {language === 'en-zh' ? 'Sustained organ tones, great for chords / 持续的风琴音色，适合和弦' : 'Sustained organ tones, great for chords'}</li>
                <li>• <strong>{language === 'en-zh' ? 'Strings / 弦乐' : 'Strings'}:</strong> {language === 'en-zh' ? 'Smooth string ensemble sound / 平滑的弦乐合奏音色' : 'Smooth string ensemble sound'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Playing Techniques / 演奏技巧' : 'Playing Techniques'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Click and drag across keys for glissando effects / 点击并拖拽键盘产生滑音效果' : 'Click and drag across keys for glissando effects'}</li>
                <li>• {language === 'en-zh' ? 'Use sustain pedal (spacebar) for connected playing / 使用延音踏板（空格键）连贯演奏' : 'Use sustain pedal (spacebar) for connected playing'}</li>
                <li>• {language === 'en-zh' ? 'Play multiple keys simultaneously for chords / 同时按下多个键演奏和弦' : 'Play multiple keys simultaneously for chords'}</li>
                <li>• {language === 'en-zh' ? 'Adjust volume for different dynamics / 调整音量获得不同力度' : 'Adjust volume for different dynamics'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Practice Ideas / 练习建议' : 'Practice Ideas'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Practice scales using keyboard shortcuts / 使用键盘快捷键练习音阶' : 'Practice scales using keyboard shortcuts'}</li>
                <li>• {language === 'en-zh' ? 'Learn chord progressions (C-F-G-C) / 学习和弦进行（C-F-G-C）' : 'Learn chord progressions (C-F-G-C)'}</li>
                <li>• {language === 'en-zh' ? 'Try different instruments for various musical styles / 尝试不同乐器演奏各种音乐风格' : 'Try different instruments for various musical styles'}</li>
                <li>• {language === 'en-zh' ? 'Use with the metronome for rhythm practice / 配合节拍器进行节奏练习' : 'Use with the metronome for rhythm practice'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualPianoPage;