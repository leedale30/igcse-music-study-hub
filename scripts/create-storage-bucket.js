// IGCSE Music Study Hub - Storage Bucket Creation Script
// This script creates the 'test-files' bucket required for Storage Service tests

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  console.error('Required variables:')
  console.error('- VITE_SUPABASE_URL')
  console.error('- VITE_SUPABASE_ANON_KEY (or SUPABASE_SERVICE_ROLE_KEY)')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createStorageBucket() {
  console.log('🚀 Creating Supabase storage infrastructure...')
  
  try {
    // Check if bucket already exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets()
    
    if (listError) {
      console.error('❌ Error listing buckets:', listError.message)
      return false
    }
    
    const existingBucket = buckets?.find(bucket => bucket.name === 'test-files')
    
    if (existingBucket) {
      console.log('✅ Bucket "test-files" already exists')
      return true
    }
    
    // Create the test-files bucket
    const { data, error } = await supabase.storage.createBucket('test-files', {
      public: true,
      allowedMimeTypes: ['image/*', 'audio/*', 'text/*', 'application/*'],
      fileSizeLimit: 10485760 // 10MB limit
    })
    
    if (error) {
      console.error('❌ Error creating bucket:', error.message)
      return false
    }
    
    console.log('✅ Successfully created "test-files" bucket')
    console.log('📁 Bucket details:', data)
    
    // Test bucket access by uploading a small test file
    const testContent = 'This is a test file for the IGCSE Music Study Hub storage service.'
    const testFile = new File([testContent], 'test.txt', { type: 'text/plain' })
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('test-files')
      .upload('test/test.txt', testFile)
    
    if (uploadError) {
      console.warn('⚠️  Bucket created but test upload failed:', uploadError.message)
    } else {
      console.log('✅ Test file uploaded successfully')
      
      // Clean up test file
      await supabase.storage.from('test-files').remove(['test/test.txt'])
      console.log('🧹 Test file cleaned up')
    }
    
    return true
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
    return false
  }
}

async function setupStorageInfrastructure() {
  console.log('🏗️  Setting up Supabase storage infrastructure...')
  console.log('📍 Supabase URL:', supabaseUrl)
  
  const success = await createStorageBucket()
  
  if (success) {
    console.log('\n🎉 Storage infrastructure setup complete!')
    console.log('✅ The Storage Service tests should now pass')
    console.log('\n📋 Next steps:')
    console.log('1. Run your tests: npm run dev')
    console.log('2. Navigate to the Supabase Test Page')
    console.log('3. Click "Run All Tests" to verify everything works')
  } else {
    console.log('\n❌ Storage infrastructure setup failed')
    console.log('📋 Manual setup required:')
    console.log('1. Go to your Supabase dashboard')
    console.log('2. Navigate to Storage')
    console.log('3. Click "Create a new bucket"')
    console.log('4. Name: test-files')
    console.log('5. Make it public: YES')
    console.log('6. Click "Create bucket"')
  }
}

// Run the setup
setupStorageInfrastructure().catch(console.error)