import React from 'react';
import EarTraining from '../components/EarTraining';
import { useLanguage } from '../contexts/LanguageContext';

const EarTrainingPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'Ear Training / 听力训练' : 'Ear Training'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === 'en-zh'
            ? 'Develop your musical hearing skills with interactive interval recognition exercises. / 通过交互式音程识别练习培养您的音乐听力技能。'
            : 'Develop your musical hearing skills with interactive interval recognition exercises.'
          }
        </p>
      </div>

      <div className="mb-8">
        <EarTraining title={language === 'en-zh' ? 'Interval Recognition / 音程识别' : 'Interval Recognition'} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'About Intervals / 关于音程' : 'About Intervals'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'What is an Interval? / 什么是音程？' : 'What is an Interval?'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {language === 'en-zh'
                  ? 'An interval is the distance between two musical notes. Learning to recognize intervals by ear is fundamental to developing musical skills. / 音程是两个音符之间的距离。学会用耳朵识别音程是培养音乐技能的基础。'
                  : 'An interval is the distance between two musical notes. Learning to recognize intervals by ear is fundamental to developing musical skills.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Common Intervals / 常见音程' : 'Common Intervals'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Perfect Unison (P1)</span>
                  <span className="text-gray-500 dark:text-gray-400">0 semitones</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Major Second (M2)</span>
                  <span className="text-gray-500 dark:text-gray-400">2 semitones</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Major Third (M3)</span>
                  <span className="text-gray-500 dark:text-gray-400">4 semitones</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Perfect Fourth (P4)</span>
                  <span className="text-gray-500 dark:text-gray-400">5 semitones</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Perfect Fifth (P5)</span>
                  <span className="text-gray-500 dark:text-gray-400">7 semitones</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Perfect Octave (P8)</span>
                  <span className="text-gray-500 dark:text-gray-400">12 semitones</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Difficulty Levels / 难度等级' : 'Difficulty Levels'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• <strong>{language === 'en-zh' ? 'Easy / 简单' : 'Easy'}:</strong> {language === 'en-zh' ? 'Perfect and major intervals / 完全音程和大音程' : 'Perfect and major intervals'}</li>
                <li>• <strong>{language === 'en-zh' ? 'Medium / 中等' : 'Medium'}:</strong> {language === 'en-zh' ? 'Most common intervals / 最常见的音程' : 'Most common intervals'}</li>
                <li>• <strong>{language === 'en-zh' ? 'Hard / 困难' : 'Hard'}:</strong> {language === 'en-zh' ? 'All intervals including tritones / 所有音程包括三全音' : 'All intervals including tritones'}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Training Tips / 训练技巧' : 'Training Tips'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Getting Started / 入门指南' : 'Getting Started'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Start with easy level and perfect intervals / 从简单级别和完全音程开始' : 'Start with easy level and perfect intervals'}</li>
                <li>• {language === 'en-zh' ? 'Listen to each interval multiple times / 多次聆听每个音程' : 'Listen to each interval multiple times'}</li>
                <li>• {language === 'en-zh' ? 'Try both harmonic and melodic modes / 尝试和声和旋律两种模式' : 'Try both harmonic and melodic modes'}</li>
                <li>• {language === 'en-zh' ? 'Practice regularly for best results / 定期练习以获得最佳效果' : 'Practice regularly for best results'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Recognition Strategies / 识别策略' : 'Recognition Strategies'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Associate intervals with familiar songs / 将音程与熟悉的歌曲联系起来' : 'Associate intervals with familiar songs'}</li>
                <li>• {language === 'en-zh' ? 'Focus on the "color" or feeling of each interval / 专注于每个音程的"色彩"或感觉' : 'Focus on the "color" or feeling of each interval'}</li>
                <li>• {language === 'en-zh' ? 'Practice singing intervals to internalize them / 练习唱音程以内化它们' : 'Practice singing intervals to internalize them'}</li>
                <li>• {language === 'en-zh' ? 'Use reference notes to help identify intervals / 使用参考音符帮助识别音程' : 'Use reference notes to help identify intervals'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Play Modes / 播放模式' : 'Play Modes'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• <strong>{language === 'en-zh' ? 'Harmonic / 和声' : 'Harmonic'}:</strong> {language === 'en-zh' ? 'Both notes played simultaneously / 两个音符同时播放' : 'Both notes played simultaneously'}</li>
                <li>• <strong>{language === 'en-zh' ? 'Melodic / 旋律' : 'Melodic'}:</strong> {language === 'en-zh' ? 'Notes played one after another / 音符依次播放' : 'Notes played one after another'}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
              {language === 'en-zh' ? 'Practice Goal / 练习目标' : 'Practice Goal'}
            </h3>
            <p className="text-green-800 dark:text-green-200 text-sm">
              {language === 'en-zh'
                ? 'Aim for 80%+ accuracy before moving to the next difficulty level. Regular practice will improve your musical ear significantly! / 在进入下一个难度级别之前，争取达到80%以上的准确率。定期练习将显著提高您的音乐听力！'
                : 'Aim for 80%+ accuracy before moving to the next difficulty level. Regular practice will improve your musical ear significantly!'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarTrainingPage;