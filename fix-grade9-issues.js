// Emergency Fix Script for Grade 9 Student Quiz Grading Issues
// Run this script in the browser console on any page of the IGCSE Music Study Hub

console.log('🚨 IGCSE Music Study Hub - Grade 9 Emergency Fix Script');
console.log('================================================');

// Grade 9 student IDs
const GRADE_9_STUDENTS = [
  'student-emily-chan-001',
  'student-christina-wang-001', 
  'student-steven-zhang-001'
];

// Grade 10 student IDs (for comparison)
const GRADE_10_STUDENTS = [
  'student-ziyao-dong-001',
  'student-yixin-huang-001',
  'student-yibo-liu-001',
  'student-shengchen-ma-001',
  'student-yucan-wang-001',
  'student-junhao-xu-001'
];

/**
 * Diagnostic function to check current state
 */
function diagnoseGradeIssues() {
  console.log('\n🔍 DIAGNOSTIC REPORT');
  console.log('===================');
  
  const allStudents = [...GRADE_9_STUDENTS, ...GRADE_10_STUDENTS];
  const issues = [];
  
  allStudents.forEach(studentId => {
    const progressData = localStorage.getItem(`igcse-progress-${studentId}`);
    
    if (!progressData) {
      issues.push(`❌ ${studentId}: No progress data found`);
      return;
    }
    
    try {
      const progress = JSON.parse(progressData);
      const grade = studentId.includes('emily') ? 'G9' : 
                   studentId.includes('christina') ? 'G9' : 
                   studentId.includes('steven') ? 'G9' : 'G10';
      
      console.log(`${grade} ${studentId}:`);
      console.log(`  📊 Quizzes: ${progress.totalQuizzesCompleted}`);
      console.log(`  📈 Average: ${progress.averageQuizScore.toFixed(1)}%`);
      console.log(`  📝 Results: ${progress.quizResults.length} entries`);
      
      // Check for zero-grade issue
      if (progress.totalQuizzesCompleted > 0 && progress.averageQuizScore === 0) {
        issues.push(`🚨 ${studentId}: Has ${progress.totalQuizzesCompleted} quizzes but 0% average`);
        
        // Check if quiz results have valid scores
        const validScores = progress.quizResults.filter(q => q.percentage > 0);
        if (validScores.length > 0) {
          issues.push(`  💡 Found ${validScores.length} quiz results with valid scores - calculation error detected`);
        }
      }
      
      // Check data integrity
      if (progress.quizResults.length !== progress.totalQuizzesCompleted) {
        issues.push(`⚠️  ${studentId}: Quiz count mismatch (${progress.quizResults.length} results vs ${progress.totalQuizzesCompleted} count)`);
      }
      
    } catch (error) {
      issues.push(`💥 ${studentId}: Corrupted progress data - ${error.message}`);
    }
  });
  
  console.log('\n🚨 ISSUES FOUND:');
  if (issues.length === 0) {
    console.log('✅ No issues detected!');
  } else {
    issues.forEach(issue => console.log(issue));
  }
  
  return issues;
}

/**
 * Fix zero grade calculation issues
 */
function fixZeroGradeIssues() {
  console.log('\n🔧 FIXING ZERO GRADE ISSUES');
  console.log('============================');
  
  const allStudents = [...GRADE_9_STUDENTS, ...GRADE_10_STUDENTS];
  let fixedCount = 0;
  const errors = [];
  
  allStudents.forEach(studentId => {
    try {
      const progressData = localStorage.getItem(`igcse-progress-${studentId}`);
      if (!progressData) {
        console.log(`⏭️  Skipping ${studentId} - no data`);
        return;
      }
      
      const progress = JSON.parse(progressData);
      
      // Only fix if there are quiz results but average is 0
      if (progress.quizResults.length > 0 && progress.averageQuizScore === 0) {
        console.log(`🔧 Fixing ${studentId}...`);
        
        // Recalculate average score using only the latest attempt for each quiz
        const latestQuizResults = new Map();
        
        progress.quizResults.forEach(quiz => {
          const existing = latestQuizResults.get(quiz.quizId);
          const quizDate = new Date(quiz.completedAt);
          const existingDate = existing ? new Date(existing.completedAt) : null;
          
          if (!existing || quizDate > existingDate) {
            latestQuizResults.set(quiz.quizId, quiz);
          }
        });
        
        const latestResults = Array.from(latestQuizResults.values());
        const totalScore = latestResults.reduce((sum, quiz) => sum + (quiz.percentage || 0), 0);
        const newAverageScore = latestResults.length > 0 ? totalScore / latestResults.length : 0;
        
        // Update progress with corrected average
        const oldAverage = progress.averageQuizScore;
        progress.averageQuizScore = newAverageScore;
        progress.lastUpdated = new Date();
        
        // Ensure quiz count matches results
        progress.totalQuizzesCompleted = latestResults.length;
        
        // Save corrected data
        localStorage.setItem(`igcse-progress-${studentId}`, JSON.stringify(progress));
        
        console.log(`  ✅ ${studentId}: ${oldAverage.toFixed(1)}% → ${newAverageScore.toFixed(1)}%`);
        console.log(`  📊 Based on ${latestResults.length} unique quizzes`);
        
        fixedCount++;
      } else if (progress.averageQuizScore > 0) {
        console.log(`  ✅ ${studentId}: Already has valid average (${progress.averageQuizScore.toFixed(1)}%)`);
      } else {
        console.log(`  ⏭️  ${studentId}: No quizzes completed yet`);
      }
      
    } catch (error) {
      const errorMsg = `Error fixing ${studentId}: ${error.message}`;
      errors.push(errorMsg);
      console.error(`❌ ${errorMsg}`);
    }
  });
  
  console.log(`\n📊 SUMMARY: Fixed ${fixedCount} students`);
  if (errors.length > 0) {
    console.log('❌ ERRORS:');
    errors.forEach(error => console.log(`  ${error}`));
  }
  
  return { fixed: fixedCount, errors };
}

/**
 * Create comprehensive backups
 */
function createEmergencyBackups() {
  console.log('\n💾 CREATING EMERGENCY BACKUPS');
  console.log('==============================');
  
  const allStudents = [...GRADE_9_STUDENTS, ...GRADE_10_STUDENTS];
  const backups = {};
  let successCount = 0;
  
  // Get all users
  const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
  
  allStudents.forEach(studentId => {
    try {
      const user = users.find(u => u.id === studentId);
      const progressData = localStorage.getItem(`igcse-progress-${studentId}`);
      const assessmentsData = localStorage.getItem(`igcse-assessments-${studentId}`);
      const badgesData = localStorage.getItem(`enhanced-badges-${studentId}`);
      
      if (user && progressData) {
        const backup = {
          user,
          progress: JSON.parse(progressData),
          assessments: assessmentsData ? JSON.parse(assessmentsData) : [],
          badges: badgesData ? JSON.parse(badgesData) : [],
          backupTimestamp: new Date(),
          backupVersion: '1.0.0'
        };
        
        // Store individual backup
        localStorage.setItem(`igcse-backup-${studentId}`, JSON.stringify(backup));
        backups[studentId] = backup;
        successCount++;
        
        console.log(`✅ Backup created for ${user.name || studentId}`);
      } else {
        console.log(`⚠️  Incomplete data for ${studentId}`);
      }
    } catch (error) {
      console.error(`❌ Backup failed for ${studentId}: ${error.message}`);
    }
  });
  
  // Create system backup
  try {
    const systemBackup = {
      users,
      allProgressData: {},
      allAssessments: {},
      allBadges: {},
      backupTimestamp: new Date(),
      backupVersion: '1.0.0',
      totalStudents: allStudents.length
    };
    
    allStudents.forEach(studentId => {
      const progressData = localStorage.getItem(`igcse-progress-${studentId}`);
      const assessmentsData = localStorage.getItem(`igcse-assessments-${studentId}`);
      const badgesData = localStorage.getItem(`enhanced-badges-${studentId}`);
      
      if (progressData) systemBackup.allProgressData[studentId] = JSON.parse(progressData);
      if (assessmentsData) systemBackup.allAssessments[studentId] = JSON.parse(assessmentsData);
      if (badgesData) systemBackup.allBadges[studentId] = JSON.parse(badgesData);
    });
    
    localStorage.setItem('igcse-system-backup', JSON.stringify(systemBackup));
    console.log('✅ System backup created');
  } catch (error) {
    console.error(`❌ System backup failed: ${error.message}`);
  }
  
  console.log(`\n📊 BACKUP SUMMARY: ${successCount}/${allStudents.length} students backed up`);
  return backups;
}

/**
 * Verify dashboard synchronization
 */
function verifyDashboardSync() {
  console.log('\n🔄 VERIFYING DASHBOARD SYNCHRONIZATION');
  console.log('=====================================');
  
  // Check if we're on a page with dashboard access
  if (typeof window !== 'undefined' && window.location) {
    console.log(`Current page: ${window.location.pathname}`);
    
    // Try to trigger a dashboard refresh if possible
    const event = new CustomEvent('refreshDashboard', { detail: { source: 'gradefix' } });
    window.dispatchEvent(event);
    
    console.log('✅ Dashboard refresh event dispatched');
    console.log('💡 Navigate to /dashboard or /admin to see updated grades');
  }
  
  // Verify localStorage data is consistent
  GRADE_9_STUDENTS.forEach(studentId => {
    const progressData = localStorage.getItem(`igcse-progress-${studentId}`);
    if (progressData) {
      const progress = JSON.parse(progressData);
      console.log(`📊 ${studentId}: ${progress.averageQuizScore.toFixed(1)}% (${progress.totalQuizzesCompleted} quizzes)`);
    }
  });
}

/**
 * Main execution function
 */
function runEmergencyFix() {
  console.log('\n🚀 STARTING EMERGENCY FIX PROCEDURE');
  console.log('===================================');
  
  // Step 1: Diagnose issues
  const issues = diagnoseGradeIssues();
  
  // Step 2: Fix zero grade issues
  const fixResults = fixZeroGradeIssues();
  
  // Step 3: Create backups
  const backups = createEmergencyBackups();
  
  // Step 4: Verify synchronization
  verifyDashboardSync();
  
  // Final summary
  console.log('\n🎉 EMERGENCY FIX COMPLETED');
  console.log('==========================');
  console.log(`✅ Fixed ${fixResults.fixed} students with grade calculation issues`);
  console.log(`💾 Created backups for ${Object.keys(backups).length} students`);
  console.log(`🔍 Found ${issues.length} total issues`);
  
  if (fixResults.errors.length > 0) {
    console.log(`❌ ${fixResults.errors.length} errors occurred`);
    fixResults.errors.forEach(error => console.log(`  ${error}`));
  }
  
  console.log('\n💡 NEXT STEPS:');
  console.log('1. Navigate to /admin to verify Grade 9 students now show correct grades');
  console.log('2. Check individual student dashboards for updated scores');
  console.log('3. Consider implementing the backend security recommendations');
  console.log('4. Set up automated daily backups');
  
  return {
    issuesFound: issues.length,
    studentsFixed: fixResults.fixed,
    backupsCreated: Object.keys(backups).length,
    errors: fixResults.errors
  };
}

// Auto-run the fix
console.log('\n⚡ Auto-executing emergency fix in 3 seconds...');
console.log('   (Press Ctrl+C or close console to cancel)');

setTimeout(() => {
  try {
    const results = runEmergencyFix();
    
    // Store results for reference
    localStorage.setItem('igcse-emergency-fix-results', JSON.stringify({
      timestamp: new Date(),
      results
    }));
    
    console.log('\n✅ Emergency fix completed successfully!');
    console.log('📊 Results saved to localStorage as "igcse-emergency-fix-results"');
    
  } catch (error) {
    console.error('💥 Emergency fix failed:', error);
    console.log('\n🆘 MANUAL RECOVERY:');
    console.log('1. Try running: diagnoseGradeIssues()');
    console.log('2. Then run: fixZeroGradeIssues()');
    console.log('3. Finally run: createEmergencyBackups()');
  }
}, 3000);

// Make functions available for manual execution
window.diagnoseGradeIssues = diagnoseGradeIssues;
window.fixZeroGradeIssues = fixZeroGradeIssues;
window.createEmergencyBackups = createEmergencyBackups;
window.verifyDashboardSync = verifyDashboardSync;
window.runEmergencyFix = runEmergencyFix;

console.log('\n🛠️  MANUAL FUNCTIONS AVAILABLE:');
console.log('- diagnoseGradeIssues()');
console.log('- fixZeroGradeIssues()');
console.log('- createEmergencyBackups()');
console.log('- verifyDashboardSync()');
console.log('- runEmergencyFix()');