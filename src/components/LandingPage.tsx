import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { ChevronRight, Target, TrendingUp, BookOpen, Award } from 'lucide-react';

interface LandingPageProps {
  onStartAssessment: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartAssessment }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Discover Your Ideal Career Path
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Take our comprehensive AI-powered assessment to receive personalized career recommendations
            based on your skills, interests, values, and aspirations.
          </p>
          <Button
            onClick={onStartAssessment}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center"
          >
            Start Free Assessment
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-2 hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-800">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Aptitude Assessment</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Identify your natural strengths and abilities through comprehensive evaluation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-800">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Growth Insights</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Discover high-growth careers with strong future prospects and opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-800">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Learning Roadmap</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Get personalized learning resources and courses to bridge your skill gaps.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-400 transition-colors bg-white dark:bg-gray-800">
            <CardHeader>
              <Award className="h-12 w-12 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Expert Matching</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                AI-powered algorithm matches you with careers that align with your profile.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2 dark:text-white">Complete Assessment</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Answer 10 quick questions about your skills, interests, and career goals (takes 3-5 minutes).
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2 dark:text-white">Get Recommendations</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Receive personalized career matches with detailed insights and salary information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2 dark:text-white">Start Learning</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Access curated learning resources and create your personalized development plan.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10</div>
            <div className="text-gray-600 dark:text-gray-300">Quick Assessment Questions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">8+</div>
            <div className="text-gray-600 dark:text-gray-300">Career Paths</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Free & Personalized</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Career?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have discovered their ideal career path
          </p>
          <Button
            onClick={onStartAssessment}
            className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center"
          >
            Start Your Journey Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            ©2026 CareerCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
