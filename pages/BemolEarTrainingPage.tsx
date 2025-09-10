import React from 'react';
import BemolEarTraining from '../components/BemolEarTraining';
import { useLanguage } from '../contexts/LanguageContext';

const BemolEarTrainingPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en-zh' ? 'Functional Ear Training / 功能性听力训练' : 'Functional Ear Training'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {language === 'en-zh'
            ? 'Develop relative pitch through functional ear training inspired by Bemol. Learn to recognize scale degrees in tonal context. / 通过受Bemol启发的功能性听力训练培养相对音高。学会在调性语境中识别音阶度数。'
            : 'Develop relative pitch through functional ear training inspired by Bemol. Learn to recognize scale degrees in tonal context.'
          }
        </p>
      </div>

      <div className="mb-8">
        <BemolEarTraining title={language === 'en-zh' ? 'Functional Ear Training / 功能性听力训练' : 'Functional Ear Training'} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'About Functional Ear Training / 关于功能性听力训练' : 'About Functional Ear Training'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'What is Functional Ear Training? / 什么是功能性听力训练？' : 'What is Functional Ear Training?'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {language === 'en-zh'
                  ? 'Functional ear training focuses on recognizing notes within their tonal context rather than as isolated intervals. This method helps develop relative pitch by understanding how each note functions within a key. / 功能性听力训练专注于在调性语境中识别音符，而不是作为孤立的音程。这种方法通过理解每个音符在调性中的功能来帮助培养相对音高。'
                  : 'Functional ear training focuses on recognizing notes within their tonal context rather than as isolated intervals. This method helps develop relative pitch by understanding how each note functions within a key.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'The Solfege System / 首调唱名法' : 'The Solfege System'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-3 gap-2 text-center font-semibold">
                  <div>Degree</div>
                  <div>Solfege</div>
                  <div>Function</div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-2 space-y-1">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>1</div><div>Do</div><div>Tonic (Home)</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>2</div><div>Re</div><div>Supertonic</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>3</div><div>Mi</div><div>Mediant</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>4</div><div>Fa</div><div>Subdominant</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>5</div><div>Sol</div><div>Dominant</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>6</div><div>La</div><div>Submediant</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>7</div><div>Ti</div><div>Leading Tone</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Inspired by Bemol / 受Bemol启发' : 'Inspired by Bemol'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {language === 'en-zh'
                  ? 'This tool is inspired by Bemol, a free and open-source ear training app that implements the functional ear training method first described by Alain Benbassat. / 这个工具受到Bemol的启发，Bemol是一个免费开源的听力训练应用，实现了Alain Benbassat首次描述的功能性听力训练方法。'
                  : 'This tool is inspired by Bemol, a free and open-source ear training app that implements the functional ear training method first described by Alain Benbassat.'
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'en-zh' ? 'Training Guide / 训练指南' : 'Training Guide'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'How to Practice / 如何练习' : 'How to Practice'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• {language === 'en-zh' ? 'Start with "Tonic Context" enabled to hear the key center / 开始时启用"主音语境"以听到调性中心' : 'Start with "Tonic Context" enabled to hear the key center'}</li>
                <li>• {language === 'en-zh' ? 'Begin with Beginner level (Do-Mi-Sol) / 从初级水平开始（Do-Mi-Sol）' : 'Begin with Beginner level (Do-Mi-Sol)'}</li>
                <li>• {language === 'en-zh' ? 'Focus on the feeling and function of each degree / 专注于每个度数的感觉和功能' : 'Focus on the feeling and function of each degree'}</li>
                <li>• {language === 'en-zh' ? 'Practice in different keys to develop true relative pitch / 在不同调性中练习以培养真正的相对音高' : 'Practice in different keys to develop true relative pitch'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Difficulty Progression / 难度进阶' : 'Difficulty Progression'}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <div className="font-semibold text-green-800 dark:text-green-200">Beginner</div>
                  <div className="text-green-700 dark:text-green-300">
                    {language === 'en-zh' ? 'Do, Mi, Sol - The most stable degrees / Do, Mi, Sol - 最稳定的度数' : 'Do, Mi, Sol - The most stable degrees'}
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                  <div className="font-semibold text-yellow-800 dark:text-yellow-200">Intermediate</div>
                  <div className="text-yellow-700 dark:text-yellow-300">
                    {language === 'en-zh' ? 'Do, Re, Mi, Sol, La - Common pentatonic degrees / Do, Re, Mi, Sol, La - 常见的五声音阶度数' : 'Do, Re, Mi, Sol, La - Common pentatonic degrees'}
                  </div>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                  <div className="font-semibold text-red-800 dark:text-red-200">Advanced</div>
                  <div className="text-red-700 dark:text-red-300">
                    {language === 'en-zh' ? 'All seven degrees including Fa and Ti / 所有七个度数包括Fa和Ti' : 'All seven degrees including Fa and Ti'}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {language === 'en-zh' ? 'Key Characteristics / 音阶度数特征' : 'Key Characteristics'}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>• <strong>Do:</strong> {language === 'en-zh' ? 'Home, stable, restful / 主音，稳定，安息' : 'Home, stable, restful'}</li>
                <li>• <strong>Mi:</strong> {language === 'en-zh' ? 'Bright, major third feeling / 明亮，大三度感觉' : 'Bright, major third feeling'}</li>
                <li>• <strong>Sol:</strong> {language === 'en-zh' ? 'Strong, dominant, powerful / 强烈，属音，有力' : 'Strong, dominant, powerful'}</li>
                <li>• <strong>Fa:</strong> {language === 'en-zh' ? 'Tends to fall down to Mi / 倾向于下行到Mi' : 'Tends to fall down to Mi'}</li>
                <li>• <strong>Ti:</strong> {language === 'en-zh' ? 'Leading tone, wants to resolve up to Do / 导音，想要上行解决到Do' : 'Leading tone, wants to resolve up to Do'}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
            <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">
              {language === 'en-zh' ? 'Practice Tips / 练习技巧' : 'Practice Tips'}
            </h3>
            <ul className="text-teal-800 dark:text-teal-200 text-sm space-y-1">
              <li>• {language === 'en-zh' ? 'Aim for 90%+ accuracy before advancing difficulty / 在提高难度前争取达到90%以上的准确率' : 'Aim for 90%+ accuracy before advancing difficulty'}</li>
              <li>• {language === 'en-zh' ? 'Practice daily for 10-15 minutes for best results / 每天练习10-15分钟以获得最佳效果' : 'Practice daily for 10-15 minutes for best results'}</li>
              <li>• {language === 'en-zh' ? 'Try to sing the solfege syllables as you identify them / 在识别时尝试唱出首调唱名' : 'Try to sing the solfege syllables as you identify them'}</li>
              <li>• {language === 'en-zh' ? 'Use different keys to avoid memorizing absolute pitches / 使用不同调性避免记忆绝对音高' : 'Use different keys to avoid memorizing absolute pitches'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BemolEarTrainingPage;