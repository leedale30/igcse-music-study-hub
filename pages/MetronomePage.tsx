import React from 'react';
import Metronome from '../components/Metronome';
import { useLanguage } from '../contexts/LanguageContext';

const MetronomePage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'Metronome / 节拍器' : 'Metronome'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === 'en-zh'
            ? 'A professional metronome for music practice with precise timing and multiple features. / 专业的音乐练习节拍器，具有精确计时和多种功能。'
            : 'A professional metronome for music practice with precise timing and multiple features.'
          }
        </p>
      </div>

      <div className="mb-8">
        <Metronome title={language === 'en-zh' ? 'Professional Metronome / 专业节拍器' : 'Professional Metronome'} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'How to Use / 使用方法' : 'How to Use'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {language === 'en-zh' ? 'Basic Controls / 基本控制' : 'Basic Controls'}
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
              <li>• {language === 'en-zh' ? 'Click Start/Stop to begin/end the metronome / 点击开始/停止来启动/结束节拍器' : 'Click Start/Stop to begin/end the metronome'}</li>
              <li>• {language === 'en-zh' ? 'Use +/- buttons or slider to adjust BPM / 使用+/-按钮或滑块调整BPM' : 'Use +/- buttons or slider to adjust BPM'}</li>
              <li>• {language === 'en-zh' ? 'Select time signature from dropdown / 从下拉菜单选择拍号' : 'Select time signature from dropdown'}</li>
              <li>• {language === 'en-zh' ? 'Adjust volume with the volume slider / 用音量滑块调整音量' : 'Adjust volume with the volume slider'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {language === 'en-zh' ? 'Advanced Features / 高级功能' : 'Advanced Features'}
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
              <li>• {language === 'en-zh' ? 'Tap Tempo: Click repeatedly to set BPM / 敲击节拍：重复点击设置BPM' : 'Tap Tempo: Click repeatedly to set BPM'}</li>
              <li>• {language === 'en-zh' ? 'Accent Beat: First beat of each measure is louder / 重音节拍：每小节第一拍更响' : 'Accent Beat: First beat of each measure is louder'}</li>
              <li>• {language === 'en-zh' ? 'Visual Indicators: See which beat is currently playing / 视觉指示器：查看当前播放的节拍' : 'Visual Indicators: See which beat is currently playing'}</li>
              <li>• {language === 'en-zh' ? 'Multiple Time Signatures: 2/4, 3/4, 4/4, 5/4, 6/8, 7/8, 9/8 / 多种拍号：2/4, 3/4, 4/4, 5/4, 6/8, 7/8, 9/8' : 'Multiple Time Signatures: 2/4, 3/4, 4/4, 5/4, 6/8, 7/8, 9/8'}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            {language === 'en-zh' ? 'Practice Tips / 练习技巧' : 'Practice Tips'}
          </h3>
          <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
            <li>• {language === 'en-zh' ? 'Start with a slower tempo and gradually increase speed / 从较慢的节拍开始，逐渐提高速度' : 'Start with a slower tempo and gradually increase speed'}</li>
            <li>• {language === 'en-zh' ? 'Practice scales and exercises with the metronome / 用节拍器练习音阶和练习曲' : 'Practice scales and exercises with the metronome'}</li>
            <li>• {language === 'en-zh' ? 'Use different time signatures to challenge yourself / 使用不同的拍号来挑战自己' : 'Use different time signatures to challenge yourself'}</li>
            <li>• {language === 'en-zh' ? 'Focus on playing exactly with the beat, not ahead or behind / 专注于准确跟上节拍，不要提前或滞后' : 'Focus on playing exactly with the beat, not ahead or behind'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MetronomePage;