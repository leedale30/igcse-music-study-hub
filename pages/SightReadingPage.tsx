import React from 'react';
import SightReadingTrainer from '../components/SightReadingTrainer';
import { useLanguage } from '../contexts/LanguageContext';

const SightReadingPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'Sight Reading Trainer / 视谱训练器' : 'Sight Reading Trainer'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === 'en-zh'
            ? 'Practice reading musical notation with traditional staff-based note recognition exercises. / 通过传统的五线谱音符识别练习来练习阅读乐谱。'
            : 'Practice reading musical notation with traditional staff-based note recognition exercises.'
          }
        </p>
      </div>

      <div className="mb-8">
        <SightReadingTrainer title={language === 'en-zh' ? 'Note Recognition Trainer / 音符识别训练器' : 'Note Recognition Trainer'} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'About Sight Reading / 关于视谱' : 'About Sight Reading'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'What is Sight Reading? / 什么是视谱？' : 'What is Sight Reading?'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {language === 'en-zh'
                  ? 'Sight reading is the ability to read and perform music at first sight, without prior practice. It\'s a fundamental skill for musicians that involves quickly recognizing notes, rhythms, and musical symbols. / 视谱是指在没有事先练习的情况下，第一次看到乐谱就能阅读和演奏音乐的能力。这是音乐家的基本技能，涉及快速识别音符、节奏和音乐符号。'
                  : 'Sight reading is the ability to read and perform music at first sight, without prior practice. It\'s a fundamental skill for musicians that involves quickly recognizing notes, rhythms, and musical symbols.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Staff Notation Basics / 五线谱基础' : 'Staff Notation Basics'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Treble Clef (𝄞)</span>
                  <span className="text-gray-500 dark:text-gray-400">Higher pitched notes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Staff Lines</span>
                  <span className="text-gray-500 dark:text-gray-400">E-G-B-D-F (bottom to top)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Staff Spaces</span>
                  <span className="text-gray-500 dark:text-gray-400">F-A-C-E (bottom to top)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Ledger Lines</span>
                  <span className="text-gray-500 dark:text-gray-400">Extend range above/below staff</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Learning Progression / 学习进程' : 'Learning Progression'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• <strong>{language === 'en-zh' ? 'Beginner / 初学者' : 'Beginner'}:</strong> {language === 'en-zh' ? 'Notes E-B on the staff / 五线谱上的E-B音符' : 'Notes E-B on the staff'}</li>
                <li>• <strong>{language === 'en-zh' ? 'Intermediate / 中级' : 'Intermediate'}:</strong> {language === 'en-zh' ? 'Extended range C-D with ledger lines / 扩展范围C-D包含加线' : 'Extended range C-D with ledger lines'}</li>
                <li>• <strong>{language === 'en-zh' ? 'Advanced / 高级' : 'Advanced'}:</strong> {language === 'en-zh' ? 'Full range with all ledger lines / 包含所有加线的完整范围' : 'Full range with all ledger lines'}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Practice Guide / 练习指南' : 'Practice Guide'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'How to Practice / 如何练习' : 'How to Practice'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Start with beginner level to learn basic note positions / 从初级水平开始学习基本音符位置' : 'Start with beginner level to learn basic note positions'}</li>
                <li>• {language === 'en-zh' ? 'Use audio playback to verify your answers / 使用音频播放验证您的答案' : 'Use audio playback to verify your answers'}</li>
                <li>• {language === 'en-zh' ? 'Practice regularly for short sessions (10-15 minutes) / 定期进行短时间练习（10-15分钟）' : 'Practice regularly for short sessions (10-15 minutes)'}</li>
                <li>• {language === 'en-zh' ? 'Focus on accuracy before speed / 在追求速度之前专注于准确性' : 'Focus on accuracy before speed'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Recognition Strategies / 识别策略' : 'Recognition Strategies'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Learn landmark notes first (Middle C, Treble G) / 首先学习标志性音符（中央C、高音G）' : 'Learn landmark notes first (Middle C, Treble G)'}</li>
                <li>• {language === 'en-zh' ? 'Use mnemonic devices for line and space notes / 使用助记符记忆线上和间隙音符' : 'Use mnemonic devices for line and space notes'}</li>
                <li>• {language === 'en-zh' ? 'Practice interval recognition between notes / 练习音符之间的音程识别' : 'Practice interval recognition between notes'}</li>
                <li>• {language === 'en-zh' ? 'Count lines and spaces from known reference points / 从已知参考点计算线和空间' : 'Count lines and spaces from known reference points'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Memory Aids / 记忆辅助' : 'Memory Aids'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded">
                  <div className="font-semibold text-rose-800 dark:text-rose-200">Staff Lines</div>
                  <div className="text-rose-700 dark:text-rose-300">
                    {language === 'en-zh' ? 'Every Good Boy Does Fine (E-G-B-D-F) / 每个好孩子都很好（E-G-B-D-F）' : 'Every Good Boy Does Fine (E-G-B-D-F)'}
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <div className="font-semibold text-blue-800 dark:text-blue-200">Staff Spaces</div>
                  <div className="text-blue-700 dark:text-blue-300">
                    {language === 'en-zh' ? 'FACE in the space (F-A-C-E) / 空间中的FACE（F-A-C-E）' : 'FACE in the space (F-A-C-E)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
            <h3 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">
              {language === 'en-zh' ? 'Practice Tips / 练习技巧' : 'Practice Tips'}
            </h3>
            <ul className="text-rose-800 dark:text-rose-200 text-sm space-y-1">
              <li>• {language === 'en-zh' ? 'Aim for 90%+ accuracy before advancing difficulty / 在提高难度前争取达到90%以上的准确率' : 'Aim for 90%+ accuracy before advancing difficulty'}</li>
              <li>• {language === 'en-zh' ? 'Use the "Show note names" option when learning / 学习时使用"显示音符名称"选项' : 'Use the "Show note names" option when learning'}</li>
              <li>• {language === 'en-zh' ? 'Practice with a real instrument when possible / 尽可能用真实乐器练习' : 'Practice with a real instrument when possible'}</li>
              <li>• {language === 'en-zh' ? 'Track your progress with the built-in statistics / 使用内置统计功能跟踪您的进度' : 'Track your progress with the built-in statistics'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightReadingPage;