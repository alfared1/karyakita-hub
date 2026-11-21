@echo off
title KaryaKita Hub - Web Dashboard Internal
echo ================================================================
echo    MEMULAI KARYAKITA HUB (Internal Venture Studio OS)
echo    7 Mahasiswa Sistem Informasi STMIK Tazkia
echo ================================================================
echo.

cd /d "%~dp0"

echo Memeriksa instalasi Node.js...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js belum terdeteksi di sistem.
    echo Silakan buka file index.html langsung di browser Anda.
    pause
    start "" "%~dp0index.html"
    exit /b
)

echo Memulai Server Lokal di http://localhost:3000 ...
start "" http://localhost:3000
node server.js

pause
