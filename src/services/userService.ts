import { supabase } from '../lib/supabase'
import { User } from '../../types' // Adjust path to types.ts

export class UserService {
  // Get user profile
  static async getUserProfile(userId: string): Promise<User> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) {
      console.error('Error fetching user profile:', error)
      throw error
    }

    // Map DB columns to User type
    return {
      id: data.id,
      email: data.email,
      name: data.name,
      firstName: data.first_name,
      lastName: data.last_name,
      nickname: data.nickname,
      role: data.role,
      group: data.group_name,
      profileCompleted: data.profile_completed,
      createdAt: new Date(data.created_at),
      lastLoginAt: new Date(data.last_login_at)
    } as User
  }

  // Create or update user profile
  // Note: mostly handled by triggers or specific updates now
  static async updateProfile(
    userId: string,
    updates: Partial<User>
  ): Promise<User> {
    const updateData: any = {}
    if (updates.name) updateData.name = updates.name
    if (updates.firstName) updateData.first_name = updates.firstName
    if (updates.lastName) updateData.last_name = updates.lastName
    if (updates.nickname) updateData.nickname = updates.nickname
    if (updates.group) updateData.group_name = updates.group
    if (updates.profileCompleted !== undefined) updateData.profile_completed = updates.profileCompleted

    const { data, error } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', userId)
      .select()
      .single()

    if (error) {
      console.error('Error updating user profile:', error)
      throw error
    }

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      firstName: data.first_name,
      lastName: data.last_name,
      nickname: data.nickname,
      role: data.role,
      group: data.group_name,
      profileCompleted: data.profile_completed,
      createdAt: new Date(data.created_at),
      lastLoginAt: new Date(data.last_login_at)
    } as User
  }
}