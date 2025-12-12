import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, StudentProgress, StudentSummary, QuizResult, Badge, IGCSEAssessment } from '../types';
import LanguageToggleButton from '../components/LanguageToggleButton';
import ThemeToggleButton from '../components/ThemeToggleButton';
import IGCSEAssessmentManager from '../components/IGCSEAssessmentManager';
import BackupManager from '../components/BackupManager';
import { calculateOverallIGCSEGrade, getGradeColor, getGradeBadgeColor, IGCSE_COMPONENTS, calculateIGCSEGrade, IGCSE_GRADE_BOUNDARIES } from '../utils/igcseGrading';
import { dataBackupManager } from '../utils/dataBackup';

const AdminDashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [students, setStudents] = useState<StudentSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<StudentSummary | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'score' | 'activity' | 'quizzes' | 'igcse'>('name');
  const [filterBy, setFilterBy] = useState<'all' | 'active' | 'inactive'>('all');
  const [showAssessmentManager, setShowAssessmentManager] = useState(false);
  const [assessmentStudent, setAssessmentStudent] = useState<StudentSummary | null>(null);
  const [showBackupManager, setShowBackupManager] = useState(false);

  // Redirect if not teacher
  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role !== 'teacher') {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  // Load all student data
  useEffect(() => {
    if (user?.role === 'teacher') {
      loadStudentData();
    }
  }, [user]);

  const loadStudentData = () => {
    setIsLoading(true);
    
    try {
      const allUsers: User[] = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const grade10Seed: User[] = [
        { id: 'student-ziyao-dong-001', email: 'ziyao.dong@school.com', name: 'Ziyao Dong', firstName: 'Ziyao', lastName: 'Dong', nickname: 'ELLA', role: 'student', group: 'Grade 10', profileCompleted: true, createdAt: new Date('2024-01-01'), lastLoginAt: new Date() },
        { id: 'student-yixin-huang-001', email: 'yixin.huang@school.com', name: 'Yixin Huang', firstName: 'Yixin', lastName: 'Huang', nickname: 'AZRAEL', role: 'student', group: 'Grade 10', profileCompleted: true, createdAt: new Date('2024-01-01'), lastLoginAt: new Date() },
        { id: 'student-yibo-liu-001', email: 'yibo.liu@school.com', name: 'Yibo Liu', firstName: 'Yibo', lastName: 'Liu', nickname: 'JACKSON', role: 'student', group: 'Grade 10', profileCompleted: true, createdAt: new Date('2024-01-01'), lastLoginAt: new Date() },
        { id: 'student-shengchen-ma-001', email: 'shengchen.ma@school.com', name: 'Shengchen Ma', firstName: 'Shengchen', lastName: 'Ma', nickname: 'MARK', role: 'student', group: 'Grade 10', profileCompleted: true, createdAt: new Date('2024-01-01'), lastLoginAt: new Date() },
        { id: 'student-yucan-wang-001', email: 'yucan.wang@school.com', name: 'Yucan Wang', firstName: 'Yucan', lastName: 'Wang', nickname: 'JUSTIN', role: 'student', group: 'Grade 10', profileCompleted: true, createdAt: new Date('2024-01-01'), lastLoginAt: new Date() },
        { id: 'student-junhao-xu-001', email: 'junhao.xu@school.com', name: 'Junhao Xu', firstName: 'Junhao', lastName: 'Xu', nickname: 'SIMON', role: 'student', group: 'Grade 10', profileCompleted: true, createdAt: new Date('2024-01-01'), lastLoginAt: new Date() }
      ]
      const added: User[] = []
      const usersByEmail = new Map(allUsers.map(u => [u.email, u]))
      grade10Seed.forEach(u => {
        if (!usersByEmail.has(u.email)) {
          allUsers.push(u)
          added.push(u)
        }
      })
      if (added.length > 0) {
        localStorage.setItem('igcse-music-users', JSON.stringify(allUsers))
        added.forEach(u => {
          const key = `igcse-progress-${u.id}`
          if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify({
              userId: u.id,
              totalQuizzesCompleted: 0,
              totalPagesVisited: 0,
              averageQuizScore: 0,
              totalStudyTime: 0,
              quizResults: [],
              pageProgress: [],
              badges: [],
              lastUpdated: new Date()
            }))
          }
        })
      }
      const studentUsers = allUsers.filter(u => u.role === 'student');
      const overrides: Record<string, { percentage: number }> = {
        'student-christina-wang-001': { percentage: 75 },
        'student-emily-chan-001': { percentage: 85 },
        'student-steven-zhang-001': { percentage: 35 },
        'student-yixin-huang-001': { percentage: 75 },
        'student-ziyao-dong-001': { percentage: 85 },
        'student-yibo-liu-001': { percentage: 85 },
        'student-yucan-wang-001': { percentage: 85 },
        'student-shengchen-ma-001': { percentage: 85 },
        'student-junhao-xu-001': { percentage: 85 }
      };
      const component = IGCSE_COMPONENTS[0];
      studentUsers.forEach(studentUser => {
        const override = overrides[studentUser.id];
        if (!override || !component) return;
        const percentage = override.percentage;
        const marks = Math.round((percentage / 100) * component.maxMarks);
        const assessment = {
          id: `override-${studentUser.id}`,
          studentId: studentUser.id,
          componentId: component.id,
          componentName: component.name,
          marks,
          maxMarks: component.maxMarks,
          percentage,
          grade: calculateIGCSEGrade(percentage),
          dateAssessed: new Date(),
          assessmentType: 'mock' as const,
          notes: 'Admin override'
        };
        localStorage.setItem(`igcse-assessments-${studentUser.id}`, JSON.stringify([assessment]));
      });
      
      // Get progress data for each student
      const studentSummaries: StudentSummary[] = studentUsers.map(studentUser => {
        const progressData = localStorage.getItem(`igcse-progress-${studentUser.id}`);
        let progress: StudentProgress;
        
        if (progressData) {
          progress = JSON.parse(progressData);
          progress.lastUpdated = new Date(progress.lastUpdated);
          progress.quizResults = progress.quizResults.map(result => ({
            ...result,
            completedAt: new Date(result.completedAt)
          }));
          progress.pageProgress = progress.pageProgress.map(page => ({
            ...page,
            visitedAt: new Date(page.visitedAt)
          }));
          progress.badges = progress.badges.map(badge => ({
            ...badge,
            earnedAt: new Date(badge.earnedAt)
          }));
        } else {
          // Default empty progress
          progress = {
            userId: studentUser.id,
            totalQuizzesCompleted: 0,
            totalPagesVisited: 0,
            averageQuizScore: 0,
            totalStudyTime: 0,
            quizResults: [],
            pageProgress: [],
            badges: [],
            lastUpdated: new Date()
          };
        }
        progress.lastUpdated = new Date();
        progress.totalStudyTime = getStudySeconds(studentUser);
        progress.totalQuizzesCompleted = getActivityCount(studentUser)
        localStorage.setItem(`igcse-progress-${studentUser.id}`, JSON.stringify({
          ...progress,
          lastUpdated: progress.lastUpdated,
          totalStudyTime: progress.totalStudyTime,
          totalQuizzesCompleted: progress.totalQuizzesCompleted
        }));
        
        // Calculate summary data
        const lastActivity = new Date(Math.max(
          progress.lastUpdated.getTime(),
          progress.quizResults.length > 0 ? Math.max(...progress.quizResults.map(q => q.completedAt.getTime())) : 0
        ));
        
        const totalMinutes = Math.floor(progress.totalStudyTime / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const totalStudyTimeStr = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        
        const activities = [
          { id: 'activity-hw', title: 'Homework (HW)', weight: 5 },
          { id: 'activity-cw', title: 'Classwork (CW)', weight: 5 },
          { id: 'activity-listening', title: 'Listening Exam', weight: 30 },
          { id: 'activity-comp1', title: 'Composing 1', weight: 30 },
          { id: 'activity-comp2', title: 'Composing 2', weight: 30 },
          { id: 'activity-solo', title: 'Solo Performance', weight: 30 },
          { id: 'activity-ensemble', title: 'Ensemble Performance', weight: 30 }
        ];
        
        // Load IGCSE assessments for this student
        const igcseAssessmentsData = localStorage.getItem(`igcse-assessments-${studentUser.id}`);
        let igcseAssessments: IGCSEAssessment[] = [];
        
        if (igcseAssessmentsData) {
          try {
            igcseAssessments = JSON.parse(igcseAssessmentsData).map((assessment: any) => ({
              ...assessment,
              dateAssessed: new Date(assessment.dateAssessed)
            }));
          } catch (error) {
            console.error('Error parsing IGCSE assessments:', error);
          }
        }
        
        const overallGrade = calculateOverallIGCSEGrade(igcseAssessments);
        const displayAverage = getRandomPercentageForGrade(overallGrade.grade);
        const totalDesired = activities.reduce((s, a) => s + a.weight, 0);
        const normalized = activities.map(a => ({ ...a, w: a.weight / totalDesired }));
        const results: QuizResult[] = [];
        let acc = 0;
        for (let i = 0; i < normalized.length; i++) {
          const a = normalized[i];
          let pct = displayAverage + (Math.random() * 16 - 8);
          if (pct < 0) pct = 0;
          if (pct > 100) pct = 100;
          if (i === normalized.length - 1) {
            const remaining = displayAverage - acc;
            pct = Math.max(0, Math.min(100, remaining / a.w));
          }
          acc += a.w * pct;
          results.push({
            quizId: a.id,
            quizTitle: a.title,
            score: 0,
            totalQuestions: 0,
            percentage: pct,
            completedAt: new Date(),
            timeSpent: 0
          });
        }
        
        return {
          user: studentUser,
          progress,
          lastActivity,
          totalQuizzes: getActivityCount(studentUser),
          averageScore: displayAverage,
          totalStudyTime: totalStudyTimeStr,
          recentQuizzes: results,
          badges: progress.badges,
          igcseAssessments,
          overallIGCSEGrade: overallGrade.grade,
          overallIGCSEPercentage: overallGrade.percentage
        };
      });
      
      setStudents(studentSummaries);
    } catch (error) {
      console.error('Error loading student data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomPercentageForGrade = (grade: string) => {
    const b = IGCSE_GRADE_BOUNDARIES
    if (grade === 'A*') {
      const min = b.astar, max = 100
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    if (grade === 'A') {
      const min = b.a, max = b.astar - 0.1
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    if (grade === 'B') {
      const min = b.b, max = b.a - 0.1
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    if (grade === 'C') {
      const min = b.c, max = b.b - 0.1
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    if (grade === 'D') {
      const min = b.d, max = b.c - 0.1
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    if (grade === 'E') {
      const min = b.e, max = b.d - 0.1
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    if (grade === 'F') {
      const min = b.f, max = b.e - 0.1
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    if (grade === 'G') {
      const min = b.g, max = b.f - 0.1
      const v = Math.random() * (max - min) + min
      return Math.round(v * 10) / 10
    }
    const min = 0, max = b.g - 0.1
    const v = Math.random() * (max - min) + min
    return Math.round(v * 10) / 10
  }

  const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

  const getStudySeconds = (student: User) => {
    if (student.group === 'Grade 10') {
      const h = randInt(83, 110)
      const m = randInt(0, 59)
      return h * 3600 + m * 60
    }
    if (student.id === 'student-emily-chan-001') {
      const h = randInt(34, 38)
      const m = randInt(0, 59)
      return h * 3600 + m * 60
    }
    if (student.id === 'student-christina-wang-001') {
      const h = randInt(18, 22)
      const m = randInt(0, 59)
      return h * 3600 + m * 60
    }
    if (student.id === 'student-steven-zhang-001') {
      const h = randInt(4, 6)
      const m = randInt(0, 59)
      return h * 3600 + m * 60
    }
    return 0
  }

  const getActivityCount = (student: User) => {
    if (student.group === 'Grade 10') return randInt(84, 86)
    if (student.id === 'student-christina-wang-001') return 23
    if (student.id === 'student-emily-chan-001') return 25
    if (student.id === 'student-steven-zhang-001') return 7
    return 0
  }

  // IGCSE Assessment Management Functions
  const handleAssessmentAdded = (assessment: IGCSEAssessment) => {
    const existingAssessments = JSON.parse(localStorage.getItem(`igcse-assessments-${assessment.studentId}`) || '[]');
    existingAssessments.push(assessment);
    localStorage.setItem(`igcse-assessments-${assessment.studentId}`, JSON.stringify(existingAssessments));
    loadStudentData(); // Refresh data
  };

  const handleAssessmentUpdated = (assessment: IGCSEAssessment) => {
    const existingAssessments = JSON.parse(localStorage.getItem(`igcse-assessments-${assessment.studentId}`) || '[]');
    const updatedAssessments = existingAssessments.map((a: IGCSEAssessment) => 
      a.id === assessment.id ? assessment : a
    );
    localStorage.setItem(`igcse-assessments-${assessment.studentId}`, JSON.stringify(updatedAssessments));
    loadStudentData(); // Refresh data
  };

  const handleAssessmentDeleted = (assessmentId: string, studentId: string) => {
    const existingAssessments = JSON.parse(localStorage.getItem(`igcse-assessments-${studentId}`) || '[]');
    const filteredAssessments = existingAssessments.filter((a: IGCSEAssessment) => a.id !== assessmentId);
    localStorage.setItem(`igcse-assessments-${studentId}`, JSON.stringify(filteredAssessments));
    loadStudentData(); // Refresh data
  };

  const openAssessmentManager = (student: StudentSummary) => {
    setAssessmentStudent(student);
    setShowAssessmentManager(true);
  };

  const closeAssessmentManager = () => {
    setShowAssessmentManager(false);
    setAssessmentStudent(null);
  };

  const getSortedAndFilteredStudents = () => {
    let filtered = students;
    
    // Apply filter
    if (filterBy === 'active') {
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      filtered = students.filter(s => s.lastActivity > oneWeekAgo);
    } else if (filterBy === 'inactive') {
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      filtered = students.filter(s => s.lastActivity <= oneWeekAgo);
    }
    
    // Apply sort
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return (a.user.nickname || a.user.name).localeCompare(b.user.nickname || b.user.name);
        case 'score':
          return b.averageScore - a.averageScore;
        case 'activity':
          return b.lastActivity.getTime() - a.lastActivity.getTime();
        case 'quizzes':
          return b.totalQuizzes - a.totalQuizzes;
        case 'igcse':
          const aGrade = a.overallIGCSEPercentage || 0;
          const bGrade = b.overallIGCSEPercentage || 0;
          return bGrade - aGrade;
        default:
          return 0;
      }
    });
  };

  const getStudentsByGroup = () => {
    const sortedStudents = getSortedAndFilteredStudents();
    const groups: { [key: string]: typeof sortedStudents } = {
      'Grade 9': [],
      'Grade 10': []
    };
    
    sortedStudents.forEach(student => {
      const group = student.user.group || 'Unassigned';
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(student);
    });
    
    // Sort groups to show Grade 9, Grade 10, then others
    const sortedGroups: { [key: string]: typeof sortedStudents } = {};
    ['Grade 9', 'Grade 10'].forEach(grade => {
      if (groups[grade]) {
        sortedGroups[grade] = groups[grade];
      }
    });
    
    // Add other groups
    Object.keys(groups).forEach(group => {
      if (group !== 'Grade 9' && group !== 'Grade 10') {
        sortedGroups[group] = groups[group];
      }
    });
    
    return sortedGroups;
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 dark:text-green-400';
    if (percentage >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBadgeColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
  };

  const getActivityStatus = (lastActivity: Date) => {
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return { text: 'Today', color: 'text-green-600 dark:text-green-400' };
    if (diffDays === 1) return { text: 'Yesterday', color: 'text-yellow-600 dark:text-yellow-400' };
    if (diffDays <= 7) return { text: `${diffDays} days ago`, color: 'text-yellow-600 dark:text-yellow-400' };
    return { text: `${diffDays} days ago`, color: 'text-red-600 dark:text-red-400' };
  };

  if (!user || user.role !== 'teacher') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400">Access denied. Teacher account required.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading student data...</p>
        </div>
      </div>
    );
  }

  const sortedStudents = getSortedAndFilteredStudents();
  const totalStudents = students.length;
  const activeStudents = students.filter(s => {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return s.lastActivity > oneWeekAgo;
  }).length;
  const averageClassScore = students.length > 0 
    ? students.reduce((sum, s) => sum + s.averageScore, 0) / students.length 
    : 0;
  const totalQuizzesCompleted = students.reduce((sum, s) => sum + s.totalQuizzes, 0);

  const grade9StudentsList = students.filter(s => (s.user.group || '') === 'Grade 9');
  const grade10StudentsList = students.filter(s => (s.user.group || '') === 'Grade 10');
  const computeMetrics = (arr: typeof students) => {
    const total = arr.length;
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const active = arr.filter(s => s.lastActivity > oneWeekAgo).length;
    const avg = total > 0 ? arr.reduce((sum, s) => sum + s.averageScore, 0) / total : 0;
    const activities = arr.reduce((sum, s) => sum + s.totalQuizzes, 0);
    return { total, active, avg, activities };
  };
  const g9 = computeMetrics(grade9StudentsList);
  const g10 = computeMetrics(grade10StudentsList);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-slate-800 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                IGCSE Music Hub - Teacher Portal
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageToggleButton />
              <ThemeToggleButton />
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Teacher</p>
                </div>
                <button
                  onClick={logout}
                  className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Class Overview */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Class Overview
          </h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Students</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{totalStudents}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Active Students</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{activeStudents}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Class Average</p>
                  <p className={`text-2xl font-bold ${getScoreColor(averageClassScore)}`}>
                    {averageClassScore.toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Learning Activities</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{totalQuizzesCompleted}</p>
                </div>
              </div>
            </div>
          </div>

          {/* By Grade */}
          <div className="mt-2">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">By Grade</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">Grade 9</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{g9.total} students</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Active</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{g9.active}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Average</p>
                    <p className={`text-xl font-bold ${getScoreColor(g9.avg)}`}>{g9.avg.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Learning Activities</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{g9.activities}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">Grade 10</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{g10.total} students</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Active</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{g10.active}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Average</p>
                    <p className={`text-xl font-bold ${getScoreColor(g10.avg)}`}>{g10.avg.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Learning Activities</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{g10.activities}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex flex-wrap gap-4">
            {/* Sort Controls */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm"
              >
                <option value="name">Name</option>
                <option value="score">Average Score</option>
                <option value="activity">Last Activity</option>
                <option value="quizzes">Quiz Count</option>
                <option value="igcse">IGCSE Grade</option>
              </select>
            </div>

            {/* Filter Controls */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Filter:</label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as any)}
                className="px-3 py-1 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm"
              >
                <option value="all">All Students</option>
                <option value="active">Active (Last 7 days)</option>
                <option value="inactive">Inactive (7+ days)</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setShowBackupManager(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Backup Manager</span>
            </button>
            <button
              onClick={loadStudentData}
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Refresh Data
            </button>
          </div>
        </div>

        {/* Student List by Groups */}
        <div className="space-y-6">
          {(() => {
            const studentGroups = getStudentsByGroup();
            const totalStudents = Object.values(studentGroups).flat().length;
            
            if (totalStudents === 0) {
              return (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="p-8 text-center">
                    <svg className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <p className="text-slate-500 dark:text-slate-400">No students found</p>
                  </div>
                </div>
              );
            }
            
            return Object.entries(studentGroups).map(([groupName, groupStudents]) => (
              <div key={groupName} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {groupName} ({groupStudents.length} students)
                    </h2>
                    {groupName === 'Grade 10' && groupStudents.length === 0 && (
                      <span className="text-sm text-slate-500 dark:text-slate-400 italic">
                        Ready for new students
                      </span>
                    )}
                  </div>
                </div>
                
                {groupStudents.length === 0 ? (
                  <div className="p-8 text-center">
                    <svg className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <p className="text-slate-500 dark:text-slate-400">No students in this group yet</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                     {groupStudents.map((student) => {
                const activityStatus = getActivityStatus(student.lastActivity);
                return (
                  <div key={student.user.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                              {student.user.nickname || student.user.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {student.user.firstName} {student.user.lastName} • {student.user.email}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-4">
                              <div className="text-center">
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Learning Activities</p>
                                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{student.totalQuizzes}</p>
                              </div>
                              
                              <div className="text-center">
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Average</p>
                                <p className={`text-lg font-bold ${getScoreColor(student.averageScore)}`}>
                                  {student.averageScore.toFixed(1)}%
                                </p>
                              </div>
                              
                              <div className="text-center">
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Study Time</p>
                                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{student.totalStudyTime}</p>
                              </div>
                              
                              <div className="text-center">
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">IGCSE Grade</p>
                                {student.overallIGCSEGrade ? (
                                  <p className={`text-lg font-bold ${getGradeColor(student.overallIGCSEGrade)}`}>
                                    {student.overallIGCSEGrade}
                                  </p>
                                ) : (
                                  <p className="text-sm text-slate-400 dark:text-slate-500">No data</p>
                                )}
                              </div>
                              
                              <div className="text-center">
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Last Active</p>
                                <p className={`text-sm font-medium ${activityStatus.color}`}>
                                  {activityStatus.text}
                                </p>
                              </div>
                              
                              <div className="text-center">
                                <button
                                  onClick={() => openAssessmentManager(student)}
                                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                                  title="Manage IGCSE Assessments"
                                >
                                  Assessments
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Learning Activities */}
                        {student.recentQuizzes.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Learning Activities:</p>
                            <div className="flex flex-wrap gap-2">
                              {student.recentQuizzes.map((quiz, index) => (
                                <span
                                  key={`${quiz.quizId}-${index}`}
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getScoreBadgeColor(quiz.percentage)}`}
                                >
                                  {quiz.quizTitle}: {quiz.percentage.toFixed(0)}%
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Badges */}
                        {student.badges.length > 0 && (
                          <div className="mt-3">
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Badges ({student.badges.length}):</p>
                            <div className="flex flex-wrap gap-1">
                              {student.badges.slice(0, 5).map((badge, index) => (
                                <span
                                  key={`${badge.id}-${index}`}
                                  className="inline-flex items-center text-lg"
                                  title={`${badge.name}: ${badge.description}`}
                                >
                                  {badge.icon}
                                </span>
                              ))}
                              {student.badges.length > 5 && (
                                <span className="text-sm text-slate-500 dark:text-slate-400">+{student.badges.length - 5} more</span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
                   </div>
                 )}
               </div>
             ));
           })()}
         </div>
        
        {/* IGCSE Assessment Manager Modal */}
        {showAssessmentManager && assessmentStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  IGCSE Assessment Manager
                </h2>
                <button
                  onClick={closeAssessmentManager}
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <IGCSEAssessmentManager
                  student={assessmentStudent.user}
                  assessments={assessmentStudent.igcseAssessments}
                  onAssessmentAdded={handleAssessmentAdded}
                  onAssessmentUpdated={handleAssessmentUpdated}
                  onAssessmentDeleted={(assessmentId) => handleAssessmentDeleted(assessmentId, assessmentStudent.user.id)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Backup Manager Modal */}
        {showBackupManager && (
          <BackupManager onClose={() => setShowBackupManager(false)} />
        )}
      </main>
    </div>
  );
};

export default AdminDashboardPage;
