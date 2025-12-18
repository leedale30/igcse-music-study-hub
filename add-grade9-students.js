// Script to add Grade 9 students to the IGCSE Music Study Hub
// Run this in the browser console on the login page

function addGrade9Students() {
  // Get existing users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');

  // Define the Grade 9 students
  const grade9Students = [
    {
      id: 'student-emily-chan-001',
      email: 'emily.chan@school.com',
      password: 'emily123',
      name: 'Emily Chan',
      firstName: 'Emily',
      lastName: 'Chan',
      nickname: 'EMILY',
      role: 'student',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-christina-wang-001',
      email: 'christina.wang@school.com',
      password: 'christina123',
      name: 'Christina Wang',
      firstName: 'Jue',
      lastName: 'Wang',
      nickname: 'CHRISTINA',
      role: 'student',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-steven-zhang-001',
      email: 'steven.zhang@school.com',
      password: 'steven123',
      name: 'Steven Zhang',
      firstName: 'Jiaxin',
      lastName: 'Zhang',
      nickname: 'STEVEN',
      role: 'student',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-vengie-guan-001',
      email: 'vengie.guan@school.com',
      password: 'vengie123',
      name: 'Vengie Guan',
      firstName: 'Vengie',
      lastName: 'Guan',
      nickname: 'VENGIE',
      role: 'student',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    }
  ];

  // Check if students already exist and add only new ones
  const newStudents = grade9Students.filter(student =>
    !existingUsers.some(user => user.email === student.email)
  );

  if (newStudents.length === 0) {
    console.log('All Grade 9 students already exist in the system.');
    return;
  }

  // Add new students to existing users
  const updatedUsers = [...existingUsers, ...newStudents];

  // Save updated users to localStorage
  localStorage.setItem('igcse-music-users', JSON.stringify(updatedUsers));

  // Create initial progress data for each new student
  newStudents.forEach(student => {
    const initialProgress = {
      userId: student.id,
      totalQuizzesCompleted: 0,
      totalPagesVisited: 0,
      averageQuizScore: 0,
      totalStudyTime: 0,
      quizResults: [],
      pageProgress: [],
      badges: [],
      lastUpdated: new Date()
    };

    localStorage.setItem(`igcse-progress-${student.id}`, JSON.stringify(initialProgress));
  });

  console.log(`Successfully added ${newStudents.length} Grade 9 students:`);
  newStudents.forEach(student => {
    console.log(`- ${student.name} (${student.nickname}): ${student.email} / ${student.password}`);
  });

  return newStudents;
}

// Run the function
addGrade9Students();

// Display login credentials for easy reference
console.log('\n=== GRADE 9 STUDENT LOGIN CREDENTIALS ===');
console.log('1. CHAN, EMILY (EMILY)');
console.log('   Email: emily.chan@school.com');
console.log('   Password: emily123');
console.log('');
console.log('2. WANG, JUE (CHRISTINA)');
console.log('   Email: christina.wang@school.com');
console.log('   Password: christina123');
console.log('');
console.log('3. ZHANG, JIAXIN (STEVEN)');
console.log('   Email: steven.zhang@school.com');
console.log('   Password: steven123');
console.log('');
console.log('4. GUAN, VENGIE (VENGIE)');
console.log('   Email: vengie.guan@school.com');
console.log('   Password: vengie123');
console.log('\nStudents can now log in with these credentials!');