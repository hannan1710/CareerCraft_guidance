export interface UserProfile {
  id: string;
  name: string;
  email: string;
  education: string;
  experience: number;
  currentRole?: string;
  skills: string[];
  interests: string[];
}

export interface AssessmentAnswer {
  questionId: string;
  answer: string | number | string[];
}

export interface Question {
  id: string;
  category: 'aptitude' | 'personality' | 'skills' | 'interests' | 'values';
  text: string;
  type: 'select' | 'multiselect' | 'slider' | 'text' | 'rating';
  options?: string[];
  min?: number;
  max?: number;
  required: boolean;
}

export interface CareerRecommendation {
  id: string;
  title: string;
  matchScore: number;
  description: string;
  requiredSkills: string[];
  userSkills: string[];
  skillGaps: string[];
  averageSalary: {
    min: number;
    max: number;
    currency: string;
  };
  growthRate: number;
  educationRequired: string[];
  industries: string[];
  workEnvironment: string[];
  learningResources: LearningResource[];
}

export interface LearningResource {
  title: string;
  provider: string;
  type: 'course' | 'certification' | 'book' | 'bootcamp';
  duration: string;
  url: string;
  cost: string;
}

export interface SkillAssessment {
  skill: string;
  currentLevel: number;
  requiredLevel: number;
  priority: 'high' | 'medium' | 'low';
}
