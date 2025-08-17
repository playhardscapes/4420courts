#!/bin/bash

# 4420 Courts Upload Tool Startup Script

echo "🏀 Starting 4420 Courts Upload Tool..."
echo "📍 Location: /home/info4420/github/4420courts/upload-app"
echo ""

# Change to the app directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🚀 Starting server..."
echo "📱 The upload tool will be available at: http://localhost:3001"
echo "🔧 Press Ctrl+C to stop the server"
echo ""

# Start the server
npm start