
import { SyllabusItem } from '../../../types';
import { aos1FinalQuiz } from '../../quizzes/aos1/final_exam';

export const finalExamPage: SyllabusItem = {
    id: 'aos1-final-quiz',
    title: 'AoS 1 Final Exam',
    title_zh: '学习领域一期末考试',
    path: '/areas-of-study/aos1-baroque-music/final-exam',
    content: 'Test your knowledge of the entire Baroque Music Area of Study.',
    content_zh: '测试您对整个巴洛克音乐学习领域的知识。',
    longDescription: `This quiz covers all the key concepts, composers, focus works, and wider listening from Area of Study 1: Baroque Music. It includes questions on the general features of the era, Vivaldi's "The Four Seasons," Handel's Concerto Grosso, and key terminology. Use this to test your understanding and prepare for your exam.`,
    longDescription_zh: `本次测验涵盖了学习领域一：巴洛克音乐的所有关键概念、作曲家、重点作品和扩展聆听内容。它包括关于该时代总体特征、维瓦尔第的《四季》、亨德尔的大协奏曲以及关键术语的问题。用它来检验您的理解程度并为考试做准备。`,
    quiz: aos1FinalQuiz
};
