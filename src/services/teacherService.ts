import { supabase } from '../lib/supabase'
import { UserService, UserProfile } from './userService'

export class TeacherService {
  // Get all student progress (only accessible by teachers and admins)
  static async getAllStudentProgress() {
    // First check if the current user is a teacher or admin
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('Not authenticated')
    }
    
    try {
      const profile = await UserService.getUserProfile(user.id)
      
      if (profile.role !== 'teacher' && profile.role !== 'admin') {
        throw new Error('Only teachers and admins can access student progress')
      }
      
      const { data, error } = await supabase
        .from('progress')
        .select(`
          *,
          users:user_id (full_name, nickname, grade)
        `)
        .order('completed_at', { ascending: false })
      
      if (error) {
        console.error('Error fetching student progress:', error)
        throw error
      }
      
      return data
    } catch (error) {
      console.error('Error in getAllStudentProgress:', error)
      throw error
    }
  }

  // Get progress for a specific student
  static async getStudentProgress(studentId: string) {
    // First check if the current user is a teacher or admin
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('Not authenticated')
    }
    
    try {
      const profile = await UserService.getUserProfile(user.id)
      
      if (profile.role !== 'teacher' && profile.role !== 'admin') {
        throw new Error('Only teachers and admins can access student progress')
      }
      
      const { data, error } = await supabase
        .from('progress')
        .select(`
          *,
          users:user_id (full_name, nickname, grade)
        `)
        .eq('user_id', studentId)
        .order('completed_at', { ascending: false })
      
      if (error) {
        console.error(`Error fetching progress for student ${studentId}:`, error)
        throw error
      }
      
      return data
    } catch (error) {
      console.error('Error in getStudentProgress:', error)
      throw error
    }
  }

  // Get all students
  static async getAllStudents() {
    // First check if the current user is a teacher or admin
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('Not authenticated')
    }
    
    try {
      const profile = await UserService.getUserProfile(user.id)
      
      if (profile.role !== 'teacher' && profile.role !== 'admin') {
        throw new Error('Only teachers and admins can access student list')
      }
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('role', 'student')
        .order('full_name', { ascending: true })
      
      if (error) {
        console.error('Error fetching students:', error)
        throw error
      }
      
      return data as UserProfile[]
    } catch (error) {
      console.error('Error in getAllStudents:', error)
      throw error
    }
  }
}