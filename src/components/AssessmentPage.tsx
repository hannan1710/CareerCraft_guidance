import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { assessmentQuestions } from '../data/questions';
import { CareerRecommendation } from '../types';
import { calculateCareerMatches } from '../utils/careerMatcher';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface AssessmentPageProps {
  onComplete: (answers: Record<string, any>, recommendations: CareerRecommendation[]) => void;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100;
  const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
  const hasAnswer = answers[currentQuestion.id] !== undefined;

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleMultiSelectToggle = (option: string) => {
    const current = answers[currentQuestion.id] || [];
    const newSelection = current.includes(option)
      ? current.filter((item: string) => item !== option)
      : [...current, option];
    
    handleAnswer(newSelection);
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      setIsProcessing(true);
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      const recommendations = calculateCareerMatches(answers);
      onComplete(answers, recommendations);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const renderQuestionInput = () => {
    const currentAnswer = answers[currentQuestion.id];

    switch (currentQuestion.type) {
      case 'text':
        return (
          <Input
            type="text"
            value={currentAnswer || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="text-lg p-4"
          />
        );

      case 'select':
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  currentAnswer === option
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    currentAnswer === option ? 'border-blue-600' : 'border-gray-300'
                  }`}>
                    {currentAnswer === option && (
                      <div className="w-3 h-3 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <span className="text-base">{option}</span>
                </div>
              </button>
            ))}
          </div>
        );

      case 'multiselect':
        const maxSelections = currentQuestion.id === 'career_interests' ? 3 : 
                             currentQuestion.id === 'career_goals' ? 3 :
                             currentQuestion.id === 'soft_skills' ? 5 : 999;
        const currentSelections = currentAnswer || [];
        
        return (
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {maxSelections < 999 ? `Select up to ${maxSelections} options` : 'Select all that apply'}
              {currentSelections.length > 0 && ` (${currentSelections.length} selected)`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentQuestion.options?.map((option) => {
                const isSelected = currentSelections.includes(option);
                const canSelect = isSelected || currentSelections.length < maxSelections;
                
                return (
                  <button
                    key={option}
                    onClick={() => canSelect && handleMultiSelectToggle(option)}
                    disabled={!canSelect}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
                        : canSelect
                        ? 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                        isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'slider':
      case 'rating':
        const maxValue = currentQuestion.max || 10;
        const hasInteracted = currentAnswer !== undefined;
        
        return (
          <div className="space-y-6">
            <Slider
              defaultValue={[currentAnswer || Math.ceil(maxValue / 2)]}
              max={maxValue}
              step={1}
              onValueChange={([value]) => handleAnswer(value)}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{currentQuestion.type === 'rating' ? '1 - Low' : 'Low'}</span>
              <span>{currentQuestion.type === 'rating' ? `${Math.ceil(maxValue / 2)} - Medium` : 'Medium'}</span>
              <span>{currentQuestion.type === 'rating' ? `${maxValue} - High` : 'High'}</span>
            </div>
            {!hasInteracted && (
              <p className="text-sm text-orange-600 dark:text-orange-400 text-center">
                Please move the slider to select your rating
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 dark:bg-gray-800">
          <CardContent className="p-12 text-center">
            <Loader2 className="h-16 w-16 text-blue-600 dark:text-blue-400 animate-spin mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Analyzing Your Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI is processing your responses and matching you with the best career opportunities...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Career Assessment</h1>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {assessmentQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-4xl mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-start">
              <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {currentQuestionIndex + 1}
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  {currentQuestion.category}
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {currentQuestion.text}
                </h2>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            {renderQuestionInput()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!hasAnswer && currentQuestion.required}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLastQuestion ? 'Get Results' : 'Next'}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
