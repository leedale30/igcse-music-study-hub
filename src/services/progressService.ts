import { supabase } from '../lib/supabase'

export interface Progress {
  id?: string
  user_id: string
  section: string
  quiz_id: string
  score: number
  total_questions: number
  percentage: number
  time_taken?: number
  completed_at: string
  answers?: any
}

export class ProgressService {
  // Save quiz progress
  static async saveQuizProgress(
    userId: string,
    section: string,
    quizId: string,
    score: number,
    totalQuestions: number,
    timeTaken?: number,
    answers?: any
  ): Promise<boolean> {
    const percentage = Math.round((score / totalQuestions) * 100)
    
    try {
      const { error } = await supabase
        .from('progress')
        .upsert({
          user_id: userId,
          section,
          quiz_id: quizId,
          score,
          total_questions: totalQuestions,
          percentage,
          time_taken: timeTaken,
          answers,
          completed_at: new Date().toISOString()
        })
      
      if (error) {
        console.error('Error saving progress:', error)
        return false
      }
      
      return true
    } catch (error) {
      console.error('Progress save error:', error)
      return false
    }
  }
  
  // Get user progress
  static async getUserProgress(userId: string): Promise<Progress[]> {
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching progress:', error)
      return []
    }
    
    return data || []
  }
  
  // Get section progress
  static async getSectionProgress(userId: string, section: string): Promise<Progress[]> {
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', userId)
      .eq('section', section)
      .order('completed_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching section progress:', error)
      return []
    }
    
    return data || []
  }
}