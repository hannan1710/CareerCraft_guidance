import { Question } from '../types';

export const assessmentQuestions: Question[] = [
  // Personal Information
  {
    id: 'edu_level',
    category: 'aptitude',
    text: 'What is your highest level of education?',
    type: 'select',
    options: [
      'High School',
      'Associate Degree',
      'Bachelor\'s Degree',
      'Master\'s Degree',
      'Doctorate',
      'Professional Certification'
    ],
    required: true
  },
  {
    id: 'experience_years',
    category: 'aptitude',
    text: 'How many years of professional experience do you have?',
    type: 'slider',
    min: 0,
    max: 30,
    required: true
  },

  // Skills Assessment
  {
    id: 'technical_skills',
    category: 'skills',
    text: 'Select your technical skills (choose all that apply)',
    type: 'multiselect',
    options: [
      'Programming (Python, Java, JavaScript)',
      'Data Analysis',
      'Machine Learning / AI',
      'Web Development',
      'Mobile Development',
      'Cloud Computing (AWS, Azure, GCP)',
      'Database Management',
      'Cybersecurity',
      'DevOps',
      'UI/UX Design',
      'Project Management',
      'Digital Marketing',
      'Content Creation',
      'Financial Analysis',
      'None of the above'
    ],
    required: true
  },
  {
    id: 'soft_skills',
    category: 'skills',
    text: 'Select your top 5 soft skills',
    type: 'multiselect',
    options: [
      'Leadership',
      'Communication',
      'Problem Solving',
      'Teamwork',
      'Adaptability',
      'Critical Thinking',
      'Time Management',
      'Creativity',
      'Emotional Intelligence',
      'Negotiation'
    ],
    required: true
  },

  // Interests & Preferences
  {
    id: 'work_environment',
    category: 'interests',
    text: 'What is your preferred work environment?',
    type: 'select',
    options: [
      'Fully Remote',
      'Hybrid (2-3 days office)',
      'Primarily Office-based',
      'Flexible / No Preference'
    ],
    required: true
  },
  {
    id: 'career_interests',
    category: 'interests',
    text: 'What areas interest you most? (select up to 3)',
    type: 'multiselect',
    options: [
      'Technology & Innovation',
      'Healthcare & Medicine',
      'Education & Training',
      'Business & Entrepreneurship',
      'Creative Arts & Design',
      'Finance & Investment',
      'Marketing & Sales',
      'Engineering & Manufacturing',
      'Social Impact & Non-profit',
      'Research & Development'
    ],
    required: true
  },

  // Values & Priorities (1-10 scale)
  {
    id: 'work_life_balance',
    category: 'values',
    text: 'How important is work-life balance to you? (1 = Not Important, 10 = Very Important)',
    type: 'rating',
    min: 1,
    max: 10,
    required: true
  },
  {
    id: 'salary_importance',
    category: 'values',
    text: 'How important is high salary potential? (1 = Not Important, 10 = Very Important)',
    type: 'rating',
    min: 1,
    max: 10,
    required: true
  },
  {
    id: 'growth_opportunities',
    category: 'values',
    text: 'How important are career growth opportunities? (1 = Not Important, 10 = Very Important)',
    type: 'rating',
    min: 1,
    max: 10,
    required: true
  },

  // Problem Solving & Goals
  {
    id: 'problem_solving',
    category: 'aptitude',
    text: 'Rate your analytical and problem-solving abilities (1 = Beginner, 10 = Expert)',
    type: 'rating',
    min: 1,
    max: 10,
    required: true
  }
];
