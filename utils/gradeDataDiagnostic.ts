// Grade Data Diagnostic and Repair Utility
// Addresses Grade 9 student quiz grading issues and data synchronization problems

import { User, StudentProgress, QuizResult } from '../types';
import { dataBackupManager } from './dataBackup';

export interface DiagnosticResult {
  userId: string;
  userName: string;
  issues: string[];
  fixes: string[];
  quizData: {
    totalQuizzes: number;
    averageScore: number;
    quizResults: QuizResult[];
    hasValidData: boolean;
  };
  dataIntegrity: {
    hasUserData: boolean;
    hasProgressData: boolean;
    hasBackup: boolean;
    lastUpdated: Date | null;
  };
}

export interface SystemDiagnostic {
  totalStudents: number;
  grade9Students: DiagnosticResult[];
  grade10Students: DiagnosticResult[];
  criticalIssues: string[];
  recommendations: string[];
  backupStatus: {
    hasSystemBackup: boolean;
    lastBackup: Date | null;
    studentsWithBackups: number;
  };
}

class GradeDataDiagnostic {
  private readonly GRADE_9_STUDENT_IDS = [
    'student-emily-chan-001',
    'student-christina-wang-001',
    'student-steven-zhang-001'
  ];

  private readonly GRADE_10_STUDENT_IDS = [
    'student-ziyao-dong-001',
    'student-yixin-huang-001',
    'student-yibo-liu-001',
    'student-shengchen-ma-001',
    'student-yucan-wang-001',
    'student-junhao-xu-001'
  ];

  /**
   * Perform comprehensive diagnostic of Grade 9 and Grade 10 student data
   */
  performSystemDiagnostic(): SystemDiagnostic {
    console.log('🔍 Starting comprehensive grade data diagnostic...');
    
    const users: User[] = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
    const grade9Students = this.GRADE_9_STUDENT_IDS.map(id => this.diagnoseStudent(id, users));
    const grade10Students = this.GRADE_10_STUDENT_IDS.map(id => this.diagnoseStudent(id, users));
    
    const allStudents = [...grade9Students, ...grade10Students];
    const criticalIssues: string[] = [];
    const recommendations: string[] = [];
    
    // Analyze critical issues
    const studentsWithZeroGrades = allStudents.filter(s => 
      s.quizData.totalQuizzes > 0 && s.quizData.averageScore === 0
    );
    
    if (studentsWithZeroGrades.length > 0) {
      criticalIssues.push(`${studentsWithZeroGrades.length} students have completed quizzes but show 0% average scores`);
      recommendations.push('Run the fixZeroGradeIssue() function to recalculate quiz scores');
    }
    
    const studentsWithoutBackups = allStudents.filter(s => !s.dataIntegrity.hasBackup);
    if (studentsWithoutBackups.length > 0) {
      criticalIssues.push(`${studentsWithoutBackups.length} students lack data backups`);
      recommendations.push('Create immediate backups for all students using createAllStudentBackups()');
    }
    
    const studentsWithCorruptedData = allStudents.filter(s => 
      s.dataIntegrity.hasUserData && !s.dataIntegrity.hasProgressData
    );
    if (studentsWithCorruptedData.length > 0) {
      criticalIssues.push(`${studentsWithCorruptedData.length} students have missing progress data`);
      recommendations.push('Restore progress data from backups or reinitialize');
    }
    
    // Check backup status
    const backupStatus = dataBackupManager.getBackupStatus();
    const systemBackupData = localStorage.getItem('igcse-system-backup');
    const hasSystemBackup = !!systemBackupData;
    let lastBackup: Date | null = null;
    
    if (hasSystemBackup) {
      try {
        const backup = JSON.parse(systemBackupData);
        lastBackup = new Date(backup.backupTimestamp);
      } catch (error) {
        console.error('Error parsing system backup:', error);
      }
    }
    
    const studentsWithBackups = Object.values(backupStatus).filter(s => s.hasBackup).length;
    
    // Security recommendations
    recommendations.push(
      'Consider implementing server-side data storage with encrypted databases',
      'Add real-time data synchronization across devices',
      'Implement automated daily backups to secure cloud storage',
      'Add data validation and integrity checks',
      'Consider implementing user session management with secure tokens'
    );
    
    return {
      totalStudents: allStudents.length,
      grade9Students,
      grade10Students,
      criticalIssues,
      recommendations,
      backupStatus: {
        hasSystemBackup,
        lastBackup,
        studentsWithBackups
      }
    };
  }
  
  /**
   * Diagnose individual student data
   */
  private diagnoseStudent(userId: string, users: User[]): DiagnosticResult {
    const user = users.find(u => u.id === userId);
    const issues: string[] = [];
    const fixes: string[] = [];
    
    // Check user data
    const dataIntegrity = {
      hasUserData: !!user,
      hasProgressData: false,
      hasBackup: false,
      lastUpdated: null as Date | null
    };
    
    if (!user) {
      issues.push('User account not found in system');
      fixes.push('Recreate user account using student creation script');
    }
    
    // Check progress data
    const progressData = localStorage.getItem(`igcse-progress-${userId}`);
    let progress: StudentProgress | null = null;
    
    if (progressData) {
      try {
        progress = JSON.parse(progressData);
        dataIntegrity.hasProgressData = true;
        dataIntegrity.lastUpdated = new Date(progress.lastUpdated);
      } catch (error) {
        issues.push('Progress data is corrupted');
        fixes.push('Restore from backup or reinitialize progress data');
      }
    } else {
      issues.push('No progress data found');
      fixes.push('Initialize progress data');
    }
    
    // Check backup
    const backupData = localStorage.getItem(`igcse-backup-${userId}`);
    dataIntegrity.hasBackup = !!backupData;
    
    if (!dataIntegrity.hasBackup) {
      issues.push('No backup data available');
      fixes.push('Create immediate backup');
    }
    
    // Analyze quiz data
    const quizData = {
      totalQuizzes: progress?.totalQuizzesCompleted || 0,
      averageScore: progress?.averageQuizScore || 0,
      quizResults: progress?.quizResults || [],
      hasValidData: false
    };
    
    // Check for zero grade issue
    if (quizData.totalQuizzes > 0 && quizData.averageScore === 0) {
      issues.push('Quiz grades showing as 0% despite completed quizzes');
      fixes.push('Recalculate average score from quiz results');
    }
    
    // Validate quiz results data
    if (quizData.quizResults.length > 0) {
      const validResults = quizData.quizResults.filter(q => 
        q.percentage >= 0 && q.percentage <= 100 && q.score >= 0
      );
      quizData.hasValidData = validResults.length === quizData.quizResults.length;
      
      if (!quizData.hasValidData) {
        issues.push('Some quiz results contain invalid data');
        fixes.push('Clean and validate quiz result data');
      }
    }
    
    return {
      userId,
      userName: user?.name || 'Unknown User',
      issues,
      fixes,
      quizData,
      dataIntegrity
    };
  }
  
  /**
   * Fix zero grade issue by recalculating scores
   */
  fixZeroGradeIssue(): { fixed: number; errors: string[] } {
    console.log('🔧 Fixing zero grade issues...');
    
    const allStudentIds = [...this.GRADE_9_STUDENT_IDS, ...this.GRADE_10_STUDENT_IDS];
    let fixed = 0;
    const errors: string[] = [];
    
    allStudentIds.forEach(userId => {
      try {
        const progressData = localStorage.getItem(`igcse-progress-${userId}`);
        if (!progressData) return;
        
        const progress: StudentProgress = JSON.parse(progressData);
        
        // Only fix if there are quiz results but average is 0
        if (progress.quizResults.length > 0 && progress.averageQuizScore === 0) {
          // Recalculate average score using only the latest attempt for each quiz
          const latestQuizResults = new Map<string, QuizResult>();
          
          progress.quizResults.forEach(quiz => {
            const existing = latestQuizResults.get(quiz.quizId);
            if (!existing || new Date(quiz.completedAt) > new Date(existing.completedAt)) {
              latestQuizResults.set(quiz.quizId, quiz);
            }
          });
          
          const latestResults = Array.from(latestQuizResults.values());
          const totalScore = latestResults.reduce((sum, quiz) => sum + quiz.percentage, 0);
          const newAverageScore = latestResults.length > 0 ? totalScore / latestResults.length : 0;
          
          // Update progress with corrected average
          progress.averageQuizScore = newAverageScore;
          progress.lastUpdated = new Date();
          
          // Save corrected data
          localStorage.setItem(`igcse-progress-${userId}`, JSON.stringify(progress));
          
          // Create backup of corrected data
          dataBackupManager.createStudentBackup(userId);
          
          fixed++;
          console.log(`✅ Fixed grades for ${userId}: ${newAverageScore.toFixed(1)}%`);
        }
      } catch (error) {
        errors.push(`Error fixing ${userId}: ${error}`);
        console.error(`❌ Error fixing ${userId}:`, error);
      }
    });
    
    return { fixed, errors };
  }
  
  /**
   * Create backups for all students
   */
  createAllStudentBackups(): { created: number; errors: string[] } {
    console.log('💾 Creating backups for all students...');
    
    const allStudentIds = [...this.GRADE_9_STUDENT_IDS, ...this.GRADE_10_STUDENT_IDS];
    let created = 0;
    const errors: string[] = [];
    
    allStudentIds.forEach(userId => {
      try {
        const backup = dataBackupManager.createStudentBackup(userId);
        if (backup) {
          created++;
          console.log(`✅ Backup created for ${userId}`);
        } else {
          errors.push(`Failed to create backup for ${userId}`);
        }
      } catch (error) {
        errors.push(`Error creating backup for ${userId}: ${error}`);
        console.error(`❌ Error creating backup for ${userId}:`, error);
      }
    });
    
    // Also create system backup
    try {
      dataBackupManager.createSystemBackup();
      console.log('✅ System backup created');
    } catch (error) {
      errors.push(`Error creating system backup: ${error}`);
    }
    
    return { created, errors };
  }
  
  /**
   * Reinitialize progress data for students with missing data
   */
  reinitializeMissingProgressData(): { initialized: number; errors: string[] } {
    console.log('🔄 Reinitializing missing progress data...');
    
    const allStudentIds = [...this.GRADE_9_STUDENT_IDS, ...this.GRADE_10_STUDENT_IDS];
    let initialized = 0;
    const errors: string[] = [];
    
    allStudentIds.forEach(userId => {
      try {
        const progressData = localStorage.getItem(`igcse-progress-${userId}`);
        
        if (!progressData) {
          const initialProgress: StudentProgress = {
            userId,
            totalQuizzesCompleted: 0,
            totalPagesVisited: 0,
            averageQuizScore: 0,
            totalStudyTime: 0,
            quizResults: [],
            pageProgress: [],
            badges: [],
            lastUpdated: new Date()
          };
          
          localStorage.setItem(`igcse-progress-${userId}`, JSON.stringify(initialProgress));
          initialized++;
          console.log(`✅ Initialized progress data for ${userId}`);
        }
      } catch (error) {
        errors.push(`Error initializing ${userId}: ${error}`);
        console.error(`❌ Error initializing ${userId}:`, error);
      }
    });
    
    return { initialized, errors };
  }
  
  /**
   * Generate comprehensive diagnostic report
   */
  generateReport(): string {
    const diagnostic = this.performSystemDiagnostic();
    
    let report = '\n=== IGCSE MUSIC STUDY HUB - GRADE DATA DIAGNOSTIC REPORT ===\n';
    report += `Generated: ${new Date().toLocaleString()}\n\n`;
    
    // System Overview
    report += '📊 SYSTEM OVERVIEW\n';
    report += `Total Students: ${diagnostic.totalStudents}\n`;
    report += `Grade 9 Students: ${diagnostic.grade9Students.length}\n`;
    report += `Grade 10 Students: ${diagnostic.grade10Students.length}\n`;
    report += `System Backup: ${diagnostic.backupStatus.hasSystemBackup ? '✅ Available' : '❌ Missing'}\n`;
    report += `Students with Backups: ${diagnostic.backupStatus.studentsWithBackups}/${diagnostic.totalStudents}\n\n`;
    
    // Critical Issues
    if (diagnostic.criticalIssues.length > 0) {
      report += '🚨 CRITICAL ISSUES\n';
      diagnostic.criticalIssues.forEach((issue, i) => {
        report += `${i + 1}. ${issue}\n`;
      });
      report += '\n';
    }
    
    // Grade 9 Students Detail
    report += '🎓 GRADE 9 STUDENTS\n';
    diagnostic.grade9Students.forEach(student => {
      report += `\n${student.userName} (${student.userId}):\n`;
      report += `  Quizzes Completed: ${student.quizData.totalQuizzes}\n`;
      report += `  Average Score: ${student.quizData.averageScore.toFixed(1)}%\n`;
      report += `  Data Integrity: ${student.dataIntegrity.hasUserData ? '✅' : '❌'} User | ${student.dataIntegrity.hasProgressData ? '✅' : '❌'} Progress | ${student.dataIntegrity.hasBackup ? '✅' : '❌'} Backup\n`;
      
      if (student.issues.length > 0) {
        report += `  Issues: ${student.issues.join(', ')}\n`;
      }
    });
    
    // Grade 10 Students Detail
    report += '\n\n🎓 GRADE 10 STUDENTS\n';
    diagnostic.grade10Students.forEach(student => {
      report += `\n${student.userName} (${student.userId}):\n`;
      report += `  Quizzes Completed: ${student.quizData.totalQuizzes}\n`;
      report += `  Average Score: ${student.quizData.averageScore.toFixed(1)}%\n`;
      report += `  Data Integrity: ${student.dataIntegrity.hasUserData ? '✅' : '❌'} User | ${student.dataIntegrity.hasProgressData ? '✅' : '❌'} Progress | ${student.dataIntegrity.hasBackup ? '✅' : '❌'} Backup\n`;
      
      if (student.issues.length > 0) {
        report += `  Issues: ${student.issues.join(', ')}\n`;
      }
    });
    
    // Recommendations
    report += '\n\n💡 RECOMMENDATIONS\n';
    diagnostic.recommendations.forEach((rec, i) => {
      report += `${i + 1}. ${rec}\n`;
    });
    
    // Quick Fix Commands
    report += '\n\n🔧 QUICK FIX COMMANDS\n';
    report += 'Run these in browser console:\n';
    report += '1. Fix zero grades: gradeDataDiagnostic.fixZeroGradeIssue()\n';
    report += '2. Create backups: gradeDataDiagnostic.createAllStudentBackups()\n';
    report += '3. Initialize missing data: gradeDataDiagnostic.reinitializeMissingProgressData()\n';
    report += '4. Full diagnostic: gradeDataDiagnostic.performSystemDiagnostic()\n';
    
    return report;
  }
}

// Export singleton instance
export const gradeDataDiagnostic = new GradeDataDiagnostic();

// Make available globally for console access
if (typeof window !== 'undefined') {
  (window as any).gradeDataDiagnostic = gradeDataDiagnostic;
}