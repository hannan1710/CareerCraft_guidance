# CareerCraft - Complete Setup Guide

This guide will help you set up and run CareerCraft on any computer.

## 📦 What You Need

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Verify installation: `node --version`

2. **Git** (for cloning the repository)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

## 🚀 Quick Start (5 Minutes)

### Step 1: Clone the Repository

Open your terminal/command prompt and run:

```bash
git clone https://github.com/YOUR_USERNAME/careercraft.git
cd careercraft
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages. It may take 2-3 minutes.

### Step 3: Run the Application

```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### Step 4: Open in Browser

Open your browser and go to: **http://localhost:5173**

That's it! The application is now running.

## 🔧 Detailed Setup Instructions

### For Windows Users

1. **Install Node.js**
   - Download the Windows installer from nodejs.org
   - Run the installer
   - Accept all defaults
   - Restart your computer

2. **Install Git**
   - Download Git for Windows from git-scm.com
   - Run the installer
   - Accept all defaults

3. **Open Command Prompt or PowerShell**
   - Press `Win + R`
   - Type `cmd` or `powershell`
   - Press Enter

4. **Follow Quick Start steps above**

### For Mac Users

1. **Install Node.js**
   - Download the macOS installer from nodejs.org
   - Run the .pkg file
   - Follow the installation wizard

2. **Install Git** (if not already installed)
   - Open Terminal
   - Run: `git --version`
   - If not installed, it will prompt you to install

3. **Open Terminal**
   - Press `Cmd + Space`
   - Type "Terminal"
   - Press Enter

4. **Follow Quick Start steps above**

### For Linux Users

1. **Install Node.js**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nodejs npm
   
   # Fedora
   sudo dnf install nodejs npm
   ```

2. **Install Git**
   ```bash
   # Ubuntu/Debian
   sudo apt install git
   
   # Fedora
   sudo dnf install git
   ```

3. **Follow Quick Start steps above**

## 📝 Available Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Troubleshooting Commands

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version

# Check npm version
npm --version
```

## 🌐 Accessing from Other Devices

To access the app from other devices on your network:

1. Start the dev server with host flag:
   ```bash
   npm run dev -- --host
   ```

2. Look for the "Network" URL in the output:
   ```
   ➜  Network: http://192.168.x.x:5173/
   ```

3. Open that URL on any device on the same network

## 🏗️ Building for Production

### Build the Application

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Test the Production Build

```bash
npm run preview
```

### Deploy the `dist/` Folder

You can deploy the `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🔍 Common Issues & Solutions

### Issue: "npm: command not found"

**Solution**: Node.js is not installed or not in PATH
- Reinstall Node.js
- Restart your terminal/computer

### Issue: "Port 5173 is already in use"

**Solution**: Another app is using that port
- Vite will automatically use port 5174, 5175, etc.
- Or stop the other application using port 5173

### Issue: "Cannot find module"

**Solution**: Dependencies not installed
```bash
rm -rf node_modules
npm install
```

### Issue: White screen in browser

**Solution**: 
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Check browser console for errors (F12)

### Issue: Dark mode not working

**Solution**: Clear localStorage
1. Open browser console (F12)
2. Run: `localStorage.clear()`
3. Refresh the page

## 📱 Mobile Testing

To test on mobile devices:

1. Make sure your computer and phone are on the same WiFi
2. Run: `npm run dev -- --host`
3. Note the Network URL (e.g., http://192.168.1.5:5173)
4. Open that URL on your phone's browser

## 🎓 For Developers

### Project Structure

```
src/
├── components/       # React components
├── data/            # Static data (careers, questions)
├── utils/           # Helper functions
├── types/           # TypeScript types
└── App.tsx          # Main app
```

### Adding New Features

1. **Add a new career**:
   - Edit `src/data/careers.ts`
   - Add career object with all required fields

2. **Add new questions**:
   - Edit `src/data/questions.ts`
   - Follow existing question format

3. **Modify matching algorithm**:
   - Edit `src/utils/careerMatcher.ts`
   - Adjust weights and scoring logic

### Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- React functional components with hooks
- ESLint for code quality

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 💡 Tips

1. **Keep dependencies updated**:
   ```bash
   npm update
   ```

2. **Check for security issues**:
   ```bash
   npm audit
   npm audit fix
   ```

3. **Use VS Code** for best development experience
   - Install extensions: ESLint, Prettier, Tailwind CSS IntelliSense

## 🆘 Getting Help

If you encounter issues:

1. Check this guide first
2. Search existing GitHub issues
3. Create a new issue with:
   - Your operating system
   - Node.js version (`node --version`)
   - Error message
   - Steps to reproduce

## ✅ Verification Checklist

Before pushing to GitHub, verify:

- [ ] `npm install` works without errors
- [ ] `npm run dev` starts the server
- [ ] Application loads in browser
- [ ] All features work (assessment, recommendations, dark mode)
- [ ] `npm run build` completes successfully
- [ ] No console errors in browser

---

**Need more help?** Open an issue on GitHub or contact the development team.

© 2026 CareerCraft
