#!/bin/bash

# AWS SAP Quiz Game - Development Server Startup Script

echo "🚀 AWS SAP Quiz Game - Development Server"
echo "========================================"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "🌐 Starting server on http://localhost:8000"
    echo "📱 PWA features available"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python 2 found"
    echo "🌐 Starting server on http://localhost:8000"
    echo "📱 PWA features available"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000
elif command -v php &> /dev/null; then
    echo "✅ PHP found"
    echo "🌐 Starting server on http://localhost:8000"
    echo "📱 PWA features available"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    php -S localhost:8000
else
    echo "❌ No suitable server found"
    echo "Please install Python, PHP, or Node.js to run the development server"
    echo ""
    echo "Installation options:"
    echo "- Python: https://www.python.org/downloads/"
    echo "- PHP: https://www.php.net/downloads"
    echo "- Node.js: https://nodejs.org/en/download/"
    exit 1
fi
