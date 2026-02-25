import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { CareerRecommendation } from '../types';
import { generatePersonalizedInsights } from '../utils/careerMatcher';
import {
  TrendingUp,
  DollarSign,
  BookOpen,
  Briefcase,
  MapPin,
  Award,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface RecommendationsPageProps {
  recommendations: CareerRecommendation[];
  userAnswers: Record<string, any>;
  onRetake: () => void;
}

export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({
  recommendations,
  userAnswers,
  onRetake
}) => {
  const [expandedCareer, setExpandedCareer] = useState<string | null>(null);
  const insights = generatePersonalizedInsights(userAnswers, recommendations);

  const toggleExpanded = (careerId: string) => {
    setExpandedCareer(expandedCareer === careerId ? null : careerId);
  };

  const getMatchColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800';
    if (score >= 60) return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800';
    return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800';
  };

  const getMatchLabel = (score: number) => {
    if (score >= 80) return 'Excellent Match';
    if (score >= 60) return 'Good Match';
    return 'Potential Match';
  };

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Your Career Recommendations
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Based on your assessment, here are your personalized career matches
              </p>
            </div>
            <Button
              onClick={onRetake}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 px-6 py-3 rounded-lg"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <Award className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Personalized Insights
            </h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Career Recommendations */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-6">
          {recommendations.map((career, index) => {
            const isExpanded = expandedCareer === career.id;
            const matchColor = getMatchColor(career.matchScore);

            return (
              <Card key={career.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{career.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 ml-11">{career.description}</p>
                    </div>
                    <div className={`ml-4 px-4 py-2 rounded-lg border-2 ${matchColor} font-semibold text-sm whitespace-nowrap`}>
                      {career.matchScore}% {getMatchLabel(career.matchScore)}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Salary Range</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ${(career.averageSalary.min / 1000).toFixed(0)}k - ${(career.averageSalary.max / 1000).toFixed(0)}k
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Growth Rate</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{career.growthRate}%</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Industries</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{career.industries.length}+</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Work Style</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{career.workEnvironment[0]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Match */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      Your Matching Skills ({career.userSkills.length})
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {career.userSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skill Gaps */}
                  {career.skillGaps.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                        Skills to Develop ({career.skillGaps.length})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skillGaps.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expand/Collapse Button */}
                  <Button
                    onClick={() => toggleExpanded(career.id)}
                    className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="mr-2 h-5 w-5" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-5 w-5" />
                        View Details & Learning Resources
                      </>
                    )}
                  </Button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t space-y-6">
                      {/* Education Requirements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Education Requirements</h4>
                        <ul className="space-y-2">
                          {career.educationRequired.map((edu) => (
                            <li key={edu} className="flex items-center text-gray-700 dark:text-gray-300">
                              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3" />
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Industries */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Industries</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.industries.map((industry) => (
                            <span
                              key={industry}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Work Environment */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Work Environment Options</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.workEnvironment.map((env) => (
                            <span
                              key={env}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm"
                            >
                              {env}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Learning Resources */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                          Recommended Learning Resources
                        </h4>
                        <div className="space-y-4">
                          {career.learningResources.map((resource, idx) => (
                            <div
                              key={idx}
                              className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-300 dark:hover:border-blue-600 transition-colors bg-white dark:bg-gray-800"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {resource.title}
                                  </h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {resource.provider} • {resource.type}
                                  </p>
                                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                    <span>⏱️ {resource.duration}</span>
                                    <span>💰 {resource.cost}</span>
                                  </div>
                                </div>
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                                >
                                  <ExternalLink className="h-5 w-5" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Choose a career path and begin with the recommended learning resources
          </p>
          <Button
            onClick={onRetake}
            className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Take Assessment Again
          </Button>
        </div>
      </div>
    </div>
  );
};
