// Script to add Grade 10 students to the IGCSE Music Study Hub
// Run this in the browser console on the login page

function addGrade10Students() {
  // Get existing users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
  
  // Define the Grade 10 students
  const grade10Students = [
    {
      id: 'student-ziyao-dong-001',
      email: 'ziyao.dong@school.com',
      password: 'ella123',
      name: 'Ziyao Dong',
      firstName: 'Ziyao',
      lastName: 'Dong',
      nickname: 'ELLA',
      role: 'student',
      group: 'Grade 10',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-yixin-huang-001',
      email: 'yixin.huang@school.com',
      password: 'azrael123',
      name: 'Yixin Huang',
      firstName: 'Yixin',
      lastName: 'Huang',
      nickname: 'AZRAEL',
      role: 'student',
      group: 'Grade 10',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-yibo-liu-001',
      email: 'yibo.liu@school.com',
      password: 'jackson123',
      name: 'Yibo Liu',
      firstName: 'Yibo',
      lastName: 'Liu',
      nickname: 'JACKSON',
      role: 'student',
      group: 'Grade 10',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-shengchen-ma-001',
      email: 'shengchen.ma@school.com',
      password: 'mark123',
      name: 'Shengchen Ma',
      firstName: 'Shengchen',
      lastName: 'Ma',
      nickname: 'MARK',
      role: 'student',
      group: 'Grade 10',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-yucan-wang-001',
      email: 'yucan.wang@school.com',
      password: 'justin123',
      name: 'Yucan Wang',
      firstName: 'Yucan',
      lastName: 'Wang',
      nickname: 'JUSTIN',
      role: 'student',
      group: 'Grade 10',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    },
    {
      id: 'student-junhao-xu-001',
      email: 'junhao.xu@school.com',
      password: 'simon123',
      name: 'Junhao Xu',
      firstName: 'Junhao',
      lastName: 'Xu',
      nickname: 'SIMON',
      role: 'student',
      group: 'Grade 10',
      profileCompleted: true,
      createdAt: new Date(),
      lastLoginAt: new Date()
    }
  ];
  
  // Check if students already exist and add only new ones
  const newStudents = grade10Students.filter(student => 
    !existingUsers.some(user => user.email === student.email)
  );
  
  if (newStudents.length === 0) {
    console.log('All Grade 10 students already exist in the system.');
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
  
  console.log(`Successfully added ${newStudents.length} Grade 10 students:`);
  newStudents.forEach(student => {
    console.log(`- ${student.name} (${student.nickname}): ${student.email} / ${student.password}`);
  });
  
  return newStudents;
}

// Run the function
addGrade10Students();

// Display login credentials for easy reference
console.log('\n=== GRADE 10 STUDENT LOGIN CREDENTIALS ===');
console.log('1. DONG, ZIYAO (ELLA)');
console.log('   Email: ziyao.dong@school.com');
console.log('   Password: ella123');
console.log('');
console.log('2. HUANG, YIXIN (AZRAEL)');
console.log('   Email: yixin.huang@school.com');
console.log('   Password: azrael123');
console.log('');
console.log('3. LIU, YIBO (JACKSON)');
console.log('   Email: yibo.liu@school.com');
console.log('   Password: jackson123');
console.log('');
console.log('4. MA, SHENGCHEN (MARK)');
console.log('   Email: shengchen.ma@school.com');
console.log('   Password: mark123');
console.log('');
console.log('5. WANG, YUCAN (JUSTIN)');
console.log('   Email: yucan.wang@school.com');
console.log('   Password: justin123');
console.log('');
console.log('6. XU, JUNHAO (SIMON)');
console.log('   Email: junhao.xu@school.com');
console.log('   Password: simon123');
console.log('\nStudents can now log in with these credentials!');