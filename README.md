# CareerCraft - AI-Powered Career Guidance Platform

![CareerCraft Logo](public/logo.png)

CareerCraft is an intelligent career guidance system that provides personalized career recommendations based on your skills, interests, values, and experience. Built for SIH 2024 - Problem Statement 1781.

## 🚀 Features

- **Smart Assessment**: 10 comprehensive questions covering skills, interests, and career goals
- **AI-Powered Matching**: Multi-factor algorithm analyzing your profile
- **Personalized Recommendations**: Get matched with careers that fit your profile
- **Skill Gap Analysis**: Identify skills you need to develop
- **Learning Resources**: Access curated courses and certifications
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop, tablet, and mobile

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/careercraft.git
cd careercraft
```

### 2. Install Dependencies

```bash
npm install
```

Or if you use yarn:

```bash
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will start at **http://localhost:5173**

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
careercraft/
├── public/
│   └── logo.png              # Application logo
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── AssessmentPage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Navbar.tsx
│   │   └── RecommendationsPage.tsx
│   ├── data/
│   │   ├── careers.ts        # Career database
│   │   └── questions.ts      # Assessment questions
│   ├── utils/
│   │   └── careerMatcher.ts  # Matching algorithm
│   ├── types/
│   │   └── index.ts          # TypeScript types
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎯 How to Use

1. **Start Assessment**: Click "Take Assessment" button
2. **Answer Questions**: Complete 10 questions about your profile
3. **View Results**: Get personalized career recommendations
4. **Explore Careers**: View detailed information, salary ranges, and learning resources
5. **Plan Learning**: Access curated courses to bridge skill gaps

## 🔧 Configuration

### Environment Variables

No environment variables are required for the frontend. The application works standalone.

### Customization

- **Add More Careers**: Edit `src/data/careers.ts`
- **Modify Questions**: Edit `src/data/questions.ts`
- **Adjust Algorithm**: Edit `src/utils/careerMatcher.ts`
- **Change Theme**: Edit `tailwind.config.js`

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages

```bash
npm run build
# Upload the dist/ folder to GitHub Pages
```

## 🧪 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Recharts** - Charts (optional)

## 📊 Assessment Categories

1. **Education & Experience**
2. **Technical Skills**
3. **Soft Skills**
4. **Work Preferences**
5. **Career Interests**
6. **Values & Priorities**
7. **Problem-Solving Aptitude**

## 🎨 Features in Detail

### Career Matching Algorithm

The system uses a weighted scoring algorithm:
- Technical Skills Match: 30%
- Career Interests: 25%
- Work Environment: 15%
- Experience Level: 15%
- Values Alignment: 15%

### Career Database

8 comprehensive career paths:
- Software Engineer
- Data Scientist
- Product Manager
- UX/UI Designer
- Digital Marketing Manager
- Cybersecurity Analyst
- Financial Analyst
- Healthcare Administrator

Each includes:
- Detailed description
- Salary ranges
- Growth rates
- Required skills
- Education requirements
- Learning resources

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will automatically use the next available port (5174, 5175, etc.)

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Dark Mode Not Working

Clear your browser cache and localStorage:
```javascript
localStorage.clear()
```

## 📝 License

This project is created for SIH 2024 - Problem Statement 1781.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For issues and questions, please open an issue on GitHub.

## 🙏 Acknowledgments

- Ministry of Skill Development and Entrepreneurship (MSDE)
- National Council for Vocational Education and Training (NCVET)
- SIH 2024 Organizers

---

**Built with ❤️ for SIH 2024**

© 2026 CareerCraft. All rights reserved.
