#!/bin/bash

# Simple deployment script for Vercel
echo "Starting deployment process..."

# Build the project locally
echo "Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "Please manually upload the dist folder to Vercel dashboard:"
    echo "1. Go to your Vercel project dashboard"
    echo "2. Click 'Create Deployment'"
    echo "3. Upload the 'dist' folder"
    echo "4. Deploy to production"
    echo ""
    echo "Alternatively, try: npx vercel --prod --archive=tgz"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi