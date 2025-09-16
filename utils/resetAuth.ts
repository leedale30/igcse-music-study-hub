// Utility to reset authentication data and ensure teacher account exists

export const resetAuthData = () => {
  try {
    // Clear existing data
    localStorage.removeItem('igcse-music-users');
    localStorage.removeItem('igcse-music-user');
    
    // Create fresh user accounts
    const users = [
      // Demo student account
      {
        id: 'demo-user-001',
        email: 'demo@student.com',
        password: 'demo123',
        name: 'Demo Student',
        role: 'student' as const,
        createdAt: new Date('2024-01-01'),
        lastLoginAt: new Date(),
        profileCompleted: true
      },
      // Teacher account
      {
        id: 'teacher-001',
        email: 'teacher@school.com',
        password: 'teacher123',
        name: 'Music Teacher',
        role: 'teacher' as const,
        createdAt: new Date('2024-01-01'),
        lastLoginAt: new Date(),
        profileCompleted: true
      },
      // Grade 9 students
      {
        id: 'student-emily-chan-001',
        email: 'emily.chan@school.com',
        password: 'emily123',
        name: 'Emily Chan',
        firstName: 'Emily',
        lastName: 'Chan',
        nickname: 'EMILY',
        role: 'student' as const,
        group: 'Grade 9',
        profileCompleted: true,
        createdAt: new Date('2024-01-01'),
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
        role: 'student' as const,
        group: 'Grade 9',
        profileCompleted: true,
        createdAt: new Date('2024-01-01'),
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
        role: 'student' as const,
        group: 'Grade 9',
        profileCompleted: true,
        createdAt: new Date('2024-01-01'),
        lastLoginAt: new Date()
      }
    ];
    
    // Save users to localStorage
    localStorage.setItem('igcse-music-users', JSON.stringify(users));
    
    console.log('✅ Authentication data reset successfully!');
    console.log('📧 Teacher login: teacher@school.com / teacher123');
    console.log('👨‍🎓 Demo student: demo@student.com / demo123');
    
    return true;
  } catch (error) {
    console.error('❌ Error resetting auth data:', error);
    return false;
  }
};

export const checkAuthData = () => {
  try {
    const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
    const teacher = users.find((u: any) => u.email === 'teacher@school.com');
    
    console.log('📊 Current auth status:');
    console.log(`Total users: ${users.length}`);
    console.log(`Teacher account exists: ${teacher ? '✅ Yes' : '❌ No'}`);
    
    if (teacher) {
      console.log('👨‍🏫 Teacher details:', {
        id: teacher.id,
        email: teacher.email,
        name: teacher.name,
        role: teacher.role
      });
    }
    
    return { users, teacher };
  } catch (error) {
    console.error('❌ Error checking auth data:', error);
    return { users: [], teacher: null };
  }
};

// Make functions available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).resetAuthData = resetAuthData;
  (window as any).checkAuthData = checkAuthData;
}