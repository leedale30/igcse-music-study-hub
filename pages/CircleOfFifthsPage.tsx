import React from 'react';
import CircleOfFifths from '../components/CircleOfFifths';
import { useLanguage } from '../contexts/LanguageContext';

const CircleOfFifthsPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'Circle of Fifths / 五度圈' : 'Circle of Fifths'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === 'en-zh'
            ? 'Explore key relationships, chord progressions, and music theory with this interactive visualization. / 通过这个交互式可视化工具探索调性关系、和弦进行和音乐理论。'
            : 'Explore key relationships, chord progressions, and music theory with this interactive visualization.'
          }
        </p>
      </div>

      <div className="mb-8">
        <CircleOfFifths title={language === 'en-zh' ? 'Key Relationships / 调性关系' : 'Key Relationships'} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Understanding the Circle / 理解五度圈' : 'Understanding the Circle'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'What is the Circle of Fifths? / 什么是五度圈？' : 'What is the Circle of Fifths?'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {language === 'en-zh'
                  ? 'The Circle of Fifths is a visual representation of key signatures and their relationships. Moving clockwise adds sharps, while moving counterclockwise adds flats. / 五度圈是调号及其关系的可视化表示。顺时针移动增加升号，逆时针移动增加降号。'
                  : 'The Circle of Fifths is a visual representation of key signatures and their relationships. Moving clockwise adds sharps, while moving counterclockwise adds flats.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Key Signatures / 调号' : 'Key Signatures'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="font-semibold text-gray-700 dark:text-gray-300">Sharps</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">升号</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700 dark:text-gray-300">Key</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">调性</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700 dark:text-gray-300">Flats</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">降号</div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>0</div><div>C Major</div><div>0</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>1#</div><div>G Major</div><div>-</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>2#</div><div>D Major</div><div>-</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>-</div><div>F Major</div><div>1♭</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>-</div><div>B♭ Major</div><div>2♭</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Relative Minor Keys / 关系小调' : 'Relative Minor Keys'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {language === 'en-zh'
                  ? 'Each major key has a relative minor that shares the same key signature. The relative minor is found a minor third (3 semitones) below the major key. / 每个大调都有一个共享相同调号的关系小调。关系小调位于大调下方小三度（3个半音）。'
                  : 'Each major key has a relative minor that shares the same key signature. The relative minor is found a minor third (3 semitones) below the major key.'
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Chord Progressions / 和弦进行' : 'Chord Progressions'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Primary Chords / 主要和弦' : 'Primary Chords'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• <strong>I (Tonic):</strong> {language === 'en-zh' ? 'The home chord, provides stability / 主和弦，提供稳定感' : 'The home chord, provides stability'}</li>
                <li>• <strong>IV (Subdominant):</strong> {language === 'en-zh' ? 'Creates movement away from home / 创造离开主调的动向' : 'Creates movement away from home'}</li>
                <li>• <strong>V (Dominant):</strong> {language === 'en-zh' ? 'Creates tension, wants to resolve to I / 产生张力，倾向于解决到I' : 'Creates tension, wants to resolve to I'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Popular Progressions / 流行进行' : 'Popular Progressions'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="font-semibold text-gray-800 dark:text-gray-200">I-V-vi-IV</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {language === 'en-zh' ? 'Very common in pop music / 流行音乐中非常常见' : 'Very common in pop music'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'en-zh' ? 'Example in C: C-G-Am-F / C大调例子：C-G-Am-F' : 'Example in C: C-G-Am-F'}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="font-semibold text-gray-800 dark:text-gray-200">vi-IV-I-V</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {language === 'en-zh' ? 'Creates emotional journey / 创造情感旅程' : 'Creates emotional journey'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'en-zh' ? 'Example in C: Am-F-C-G / C大调例子：Am-F-C-G' : 'Example in C: Am-F-C-G'}
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="font-semibold text-gray-800 dark:text-gray-200">I-vi-ii-V</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {language === 'en-zh' ? 'Classic jazz progression / 经典爵士进行' : 'Classic jazz progression'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'en-zh' ? 'Example in C: C-Am-Dm-G / C大调例子：C-Am-Dm-G' : 'Example in C: C-Am-Dm-G'}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Using the Tool / 使用工具' : 'Using the Tool'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Click any key on the circle to explore it / 点击圆圈上的任何调性来探索' : 'Click any key on the circle to explore it'}</li>
                <li>• {language === 'en-zh' ? 'Toggle "Show relative minors" to see minor keys / 切换"显示关系小调"查看小调' : 'Toggle "Show relative minors" to see minor keys'}</li>
                <li>• {language === 'en-zh' ? 'Click chord buttons to hear how they sound / 点击和弦按钮听听它们的声音' : 'Click chord buttons to hear how they sound'}</li>
                <li>• {language === 'en-zh' ? 'Study the common progressions for each key / 学习每个调性的常见进行' : 'Study the common progressions for each key'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
          {language === 'en-zh' ? 'Music Theory Applications / 音乐理论应用' : 'Music Theory Applications'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              {language === 'en-zh' ? 'For Composers / 对于作曲者' : 'For Composers'}
            </h3>
            <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• {language === 'en-zh' ? 'Choose keys that work well together / 选择搭配良好的调性' : 'Choose keys that work well together'}</li>
              <li>• {language === 'en-zh' ? 'Plan modulations to related keys / 计划到相关调性的转调' : 'Plan modulations to related keys'}</li>
              <li>• {language === 'en-zh' ? 'Build chord progressions systematically / 系统地构建和弦进行' : 'Build chord progressions systematically'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              {language === 'en-zh' ? 'For Performers / 对于演奏者' : 'For Performers'}
            </h3>
            <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• {language === 'en-zh' ? 'Understand key signatures quickly / 快速理解调号' : 'Understand key signatures quickly'}</li>
              <li>• {language === 'en-zh' ? 'Anticipate chord changes in music / 预测音乐中的和弦变化' : 'Anticipate chord changes in music'}</li>
              <li>• {language === 'en-zh' ? 'Transpose music to different keys / 将音乐移调到不同调性' : 'Transpose music to different keys'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleOfFifthsPage;