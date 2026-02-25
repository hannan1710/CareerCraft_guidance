import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onTakeAssessment: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onGoHome?: () => void;
}

export const Navbar = ({ onTakeAssessment, isDarkMode, onToggleTheme, onGoHome }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={onGoHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              src="/logo.png" 
              alt="CareerCraft Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-blue-600 dark:text-blue-400">Career</span>
                <span className="text-orange-500 dark:text-orange-400">Craft</span>
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                AI-Powered Career Guidance
              </p>
            </div>
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg transition-colors"
              aria-label="Toggle theme"
              type="button"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <Button
              onClick={onTakeAssessment}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Take Assessment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
