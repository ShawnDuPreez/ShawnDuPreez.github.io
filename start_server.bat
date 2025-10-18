@echo off
cd /d "C:\Users\v6dri\OneDrive\Documents\Portfolio"
echo Starting server in Portfolio directory...
echo Server will run at http://localhost:8000
echo Press Ctrl+C to stop the server
python -m http.server 8000

