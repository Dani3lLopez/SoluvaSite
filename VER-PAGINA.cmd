@echo off
cd /d "%~dp0web"
if not exist node_modules (
  call npm install
  if errorlevel 1 exit /b 1
)
start "" "http://localhost:4321"
call npm run dev

