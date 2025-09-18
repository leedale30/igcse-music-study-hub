// Test script for GitHub backup functionality
// Run this in the browser console to test your backup setup

console.log('🧪 GITHUB BACKUP TEST SCRIPT');
console.log('==============================');

// Test GitHub backup functionality
const testGitHubBackup = async () => {
  console.log('🚀 Starting GitHub backup test...');
  
  // Check environment variables
  const token = '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'; // Your token from .env.local
  const repo = 'leedale30/igcse-music-backups';
  
  if (!token || !repo) {
    console.error('❌ Missing configuration!');
    console.log('Token exists:', !!token);
    console.log('Repo exists:', !!repo);
    return false;
  }
  
  console.log('✅ Configuration found');
  console.log('📁 Repository:', repo);
  console.log('🔑 Token:', token.substring(0, 10) + '...');
  
  // Get current student data from localStorage
  const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
  const students = users.filter(u => u.role === 'student');
  
  // Gather progress data
  const progressData = {};
  students.forEach(student => {
    const progress = localStorage.getItem(`igcse-progress-${student.id}`);
    if (progress) {
      progressData[student.id] = JSON.parse(progress);
    }
  });
  
  // Create test backup data
  const backupData = {
    timestamp: new Date().toISOString(),
    triggerEvent: 'manual-test',
    studentCount: students.length,
    totalUsers: users.length,
    data: {
      users: users,
      progressData: progressData,
      metadata: {
        backupVersion: '1.0.0',
        source: 'test-script'
      }
    }
  };
  
  console.log(`📊 Data Summary:`);
  console.log(`  - Total users: ${users.length}`);
  console.log(`  - Students: ${students.length}`);
  console.log(`  - Progress records: ${Object.keys(progressData).length}`);
  console.log(`  - Backup size: ${Math.round(JSON.stringify(backupData).length / 1024)} KB`);
  
  try {
    // Create filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `test-backup-${timestamp}.json`;
    
    console.log('📤 Uploading to GitHub...');
    
    // Upload to GitHub
    const response = await fetch(`https://api.github.com/repos/${repo}/contents/${filename}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Test backup from IGCSE Music Hub - ${new Date().toLocaleString()}`,
        content: btoa(JSON.stringify(backupData, null, 2))
      })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ BACKUP SUCCESSFUL!');
      console.log('📁 File created:', result.content.name);
      console.log('🔗 View at:', result.content.html_url);
      console.log('📊 File size:', result.content.size, 'bytes');
      
      // Test if we can access the file
      console.log('\n🔍 Verifying backup...');
      const verifyResponse = await fetch(`https://api.github.com/repos/${repo}/contents/${filename}`, {
        headers: {
          'Authorization': `token ${token}`
        }
      });
      
      if (verifyResponse.ok) {
        console.log('✅ Backup verification successful!');
        console.log('🎉 Your GitHub backup system is working perfectly!');
        return true;
      } else {
        console.warn('⚠️ Backup created but verification failed');
        return true;
      }
    } else {
      const errorText = await response.text();
      console.error('❌ BACKUP FAILED!');
      console.error('Status:', response.status, response.statusText);
      console.error('Error:', errorText);
      
      // Common error explanations
      if (response.status === 401) {
        console.log('💡 This usually means:');
        console.log('  - Invalid GitHub token');
        console.log('  - Token doesn\'t have \'repo\' permissions');
      } else if (response.status === 404) {
        console.log('💡 This usually means:');
        console.log('  - Repository doesn\'t exist');
        console.log('  - Repository name is incorrect');
        console.log('  - Token doesn\'t have access to the repository');
      }
      
      return false;
    }
  } catch (error) {
    console.error('❌ NETWORK ERROR!');
    console.error('Error:', error.message);
    console.log('💡 This usually means:');
    console.log('  - No internet connection');
    console.log('  - GitHub API is down');
    console.log('  - CORS or network restrictions');
    return false;
  }
};

// Test repository access
const testRepositoryAccess = async () => {
  console.log('\n🔍 Testing repository access...');
  
  const token = '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';
  const repo = 'leedale30/igcse-music-backups';
  
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        'Authorization': `token ${token}`
      }
    });
    
    if (response.ok) {
      const repoData = await response.json();
      console.log('✅ Repository access successful!');
      console.log('📁 Repository:', repoData.full_name);
      console.log('🔒 Private:', repoData.private);
      console.log('📊 Size:', repoData.size, 'KB');
      return true;
    } else {
      console.error('❌ Repository access failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Repository test error:', error.message);
    return false;
  }
};

// Run all tests
const runAllTests = async () => {
  console.log('🧪 Running comprehensive backup tests...\n');
  
  // Test 1: Repository access
  const repoTest = await testRepositoryAccess();
  
  // Test 2: Backup functionality
  if (repoTest) {
    const backupTest = await testGitHubBackup();
    
    console.log('\n📋 TEST RESULTS:');
    console.log('================');
    console.log('Repository Access:', repoTest ? '✅ PASS' : '❌ FAIL');
    console.log('Backup Upload:', backupTest ? '✅ PASS' : '❌ FAIL');
    
    if (repoTest && backupTest) {
      console.log('\n🎉 ALL TESTS PASSED!');
      console.log('Your GitHub backup system is ready to use.');
      console.log('\n📅 Next steps:');
      console.log('1. Backups will run automatically every 24 hours');
      console.log('2. Backups will run when you close the browser');
      console.log('3. Backups will run after quiz completions');
      console.log('4. Check your repository: https://github.com/leedale30/igcse-music-backups');
    } else {
      console.log('\n❌ SOME TESTS FAILED');
      console.log('Please check the error messages above and fix the issues.');
    }
  }
};

// Auto-run tests
console.log('Starting tests in 2 seconds...');
setTimeout(runAllTests, 2000);

// Make functions available for manual testing
window.testGitHubBackup = testGitHubBackup;
window.testRepositoryAccess = testRepositoryAccess;
window.runAllTests = runAllTests;

console.log('\n🛠️ Manual test functions available:');
console.log('- testGitHubBackup()');
console.log('- testRepositoryAccess()');
console.log('- runAllTests()');