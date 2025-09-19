import { supabase } from '../lib/supabase'

export class StorageService {
  // Upload a file to storage
  static async uploadFile(
    bucket: string,
    path: string,
    file: File
  ) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file)
    
    if (error) {
      console.error('Error uploading file:', error)
      throw error
    }
    
    return data
  }

  // Upload profile image
  static async uploadProfileImage(userId: string, file: File) {
    return this.uploadFile('profile-images', `${userId}/avatar.png`, file)
  }

  // Get a public URL for a file
  static getPublicUrl(bucket: string, path: string) {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path)
    
    return data.publicUrl
  }

  // Get profile image URL
  static getProfileImageUrl(userId: string) {
    return this.getPublicUrl('profile-images', `${userId}/avatar.png`)
  }

  // Delete a file
  static async deleteFile(bucket: string, path: string) {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path])
    
    if (error) {
      console.error('Error deleting file:', error)
      throw error
    }
    
    return true
  }
}