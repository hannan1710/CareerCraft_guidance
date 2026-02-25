import { useState, useEffect } from 'react';
import { AssessmentPage } from './components/AssessmentPage';
import { RecommendationsPage } from './components/RecommendationsPage';
import { LandingPage } from './components/LandingPage';
import { Navbar } from './components/Navbar';
import { CareerRecommendation } from './types';

type Page = 'landing' | 'assessment' | 'recommendations';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('careercraft-theme');
    return saved === 'dark';
  });

  const handleStartAssessment = () => {
    setCurrentPage('assessment');
  };

  const handleAssessmentComplete = (answers: Record<string, any>, recs: CareerRecommendation[]) => {
    setUserAnswers(answers);
    setRecommendations(recs);
    setCurrentPage('recommendations');
  };

  const handleRetakeAssessment = () => {
    setUserAnswers({});
    setRecommendations([]);
    setCurrentPage('assessment');
  };

  const handleGoHome = () => {
    setCurrentPage('landing');
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('careercraft-theme', newValue ? 'dark' : 'light');
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newValue;
    });
  };

  // Apply theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <Navbar 
        onTakeAssessment={handleStartAssessment} 
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onGoHome={handleGoHome}
      />
      {currentPage === 'landing' && (
        <LandingPage onStartAssessment={handleStartAssessment} />
      )}
      {currentPage === 'assessment' && (
        <AssessmentPage onComplete={handleAssessmentComplete} />
      )}
      {currentPage === 'recommendations' && (
        <RecommendationsPage
          recommendations={recommendations}
          userAnswers={userAnswers}
          onRetake={handleRetakeAssessment}
        />
      )}
    </div>
  );
};

export default App;
