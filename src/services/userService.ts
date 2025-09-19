import { supabase } from '../lib/supabase'

export interface UserProfile {
  id: string
  email?: string
  full_name: string
  nickname?: string
  role: 'student' | 'teacher' | 'admin'
  grade?: string
  profile_image?: string
  created_at?: string
  updated_at?: string
}

export class UserService {
  // Get user profile
  static async getUserProfile(userId: string): Promise<UserProfile> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) {
      console.error('Error fetching user profile:', error)
      throw error
    }
    
    return data as UserProfile
  }
  
  // Create or update user profile
  static async upsertProfile(profile: UserProfile): Promise<UserProfile> {
    const { data, error } = await supabase
      .from('users')
      .upsert(profile, { onConflict: 'id' })
      .select()
    
    if (error) {
      console.error('Error updating user profile:', error)
      throw error
    }
    
    return data[0] as UserProfile
  }
  
  // Update specific profile fields
  static async updateProfile(
    userId: string,
    updates: Partial<Omit<UserProfile, 'id'>>
  ): Promise<UserProfile> {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
    
    if (error) {
      console.error('Error updating user profile:', error)
      throw error
    }
    
    return data[0] as UserProfile
  }
}