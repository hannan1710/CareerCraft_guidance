import { CareerRecommendation } from '../types';

export const careerDatabase: Omit<CareerRecommendation, 'matchScore' | 'userSkills' | 'skillGaps'>[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Design, develop, and maintain software applications and systems. Work with various programming languages and frameworks to solve complex technical problems.',
    requiredSkills: [
      'Programming (Python, Java, JavaScript)',
      'Problem Solving',
      'Data Structures & Algorithms',
      'Version Control (Git)',
      'Software Design Patterns'
    ],
    averageSalary: { min: 80000, max: 180000, currency: 'USD' },
    growthRate: 22,
    educationRequired: ['Bachelor\'s Degree in Computer Science', 'Coding Bootcamp', 'Self-taught with portfolio'],
    industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce'],
    workEnvironment: ['Remote', 'Hybrid', 'Office'],
    learningResources: [
      {
        title: 'CS50: Introduction to Computer Science',
        provider: 'Harvard University (edX)',
        type: 'course',
        duration: '12 weeks',
        url: 'https://www.edx.org/cs50',
        cost: 'Free (Certificate: $90)'
      },
      {
        title: 'The Complete Web Developer Bootcamp',
        provider: 'Udemy',
        type: 'course',
        duration: '60 hours',
        url: 'https://www.udemy.com',
        cost: '$15-50'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze complex data sets to extract insights and build predictive models. Use statistical methods, machine learning, and data visualization to drive business decisions.',
    requiredSkills: [
      'Python/R Programming',
      'Statistics & Mathematics',
      'Machine Learning',
      'Data Visualization',
      'SQL & Database Management'
    ],
    averageSalary: { min: 95000, max: 200000, currency: 'USD' },
    growthRate: 36,
    educationRequired: ['Bachelor\'s in Statistics/Math/CS', 'Master\'s preferred', 'Data Science Bootcamp'],
    industries: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Consulting'],
    workEnvironment: ['Remote', 'Hybrid', 'Office'],
    learningResources: [
      {
        title: 'IBM Data Science Professional Certificate',
        provider: 'IBM (Coursera)',
        type: 'certification',
        duration: '6 months',
        url: 'https://www.coursera.org/ibm-data-science',
        cost: '$39/month'
      },
      {
        title: 'Python for Data Science and Machine Learning',
        provider: 'Udemy',
        type: 'course',
        duration: '25 hours',
        url: 'https://www.udemy.com',
        cost: '$15-50'
      }
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Lead product strategy and development from conception to launch. Work cross-functionally with engineering, design, and business teams to deliver successful products.',
    requiredSkills: [
      'Product Strategy',
      'User Research',
      'Data Analysis',
      'Communication',
      'Project Management',
      'Technical Understanding'
    ],
    averageSalary: { min: 90000, max: 190000, currency: 'USD' },
    growthRate: 19,
    educationRequired: ['Bachelor\'s Degree', 'MBA preferred', 'Product Management Certification'],
    industries: ['Technology', 'E-commerce', 'Finance', 'Healthcare'],
    workEnvironment: ['Hybrid', 'Office', 'Remote'],
    learningResources: [
      {
        title: 'Product Management Specialization',
        provider: 'University of Virginia (Coursera)',
        type: 'certification',
        duration: '4 months',
        url: 'https://www.coursera.org/product-management',
        cost: '$49/month'
      },
      {
        title: 'Inspired: How to Create Products Customers Love',
        provider: 'Marty Cagan',
        type: 'book',
        duration: 'Self-paced',
        url: 'https://www.amazon.com',
        cost: '$20-30'
      }
    ]
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    description: 'Create intuitive and engaging user experiences for digital products. Conduct user research, design interfaces, and prototype solutions that meet user needs.',
    requiredSkills: [
      'UI/UX Design',
      'User Research',
      'Prototyping (Figma, Sketch)',
      'Visual Design',
      'Interaction Design',
      'Usability Testing'
    ],
    averageSalary: { min: 70000, max: 150000, currency: 'USD' },
    growthRate: 16,
    educationRequired: ['Bachelor\'s in Design/HCI', 'Design Bootcamp', 'Portfolio-based'],
    industries: ['Technology', 'E-commerce', 'Media', 'Finance'],
    workEnvironment: ['Remote', 'Hybrid', 'Office'],
    learningResources: [
      {
        title: 'Google UX Design Professional Certificate',
        provider: 'Google (Coursera)',
        type: 'certification',
        duration: '6 months',
        url: 'https://www.coursera.org/google-ux-design',
        cost: '$39/month'
      },
      {
        title: 'Interaction Design Foundation',
        provider: 'IDF',
        type: 'course',
        duration: 'Ongoing',
        url: 'https://www.interaction-design.org',
        cost: '$16/month'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Manager',
    description: 'Develop and execute digital marketing strategies across multiple channels. Analyze campaign performance and optimize for ROI using data-driven insights.',
    requiredSkills: [
      'Digital Marketing',
      'SEO/SEM',
      'Content Strategy',
      'Analytics (Google Analytics)',
      'Social Media Marketing',
      'Email Marketing'
    ],
    averageSalary: { min: 60000, max: 130000, currency: 'USD' },
    growthRate: 10,
    educationRequired: ['Bachelor\'s in Marketing/Business', 'Digital Marketing Certification', 'Self-taught with experience'],
    industries: ['Marketing Agencies', 'E-commerce', 'Technology', 'Retail'],
    workEnvironment: ['Remote', 'Hybrid', 'Office'],
    learningResources: [
      {
        title: 'Google Digital Marketing & E-commerce Certificate',
        provider: 'Google (Coursera)',
        type: 'certification',
        duration: '6 months',
        url: 'https://www.coursera.org/google-digital-marketing',
        cost: '$39/month'
      },
      {
        title: 'HubSpot Content Marketing Certification',
        provider: 'HubSpot Academy',
        type: 'certification',
        duration: '4 hours',
        url: 'https://academy.hubspot.com',
        cost: 'Free'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst',
    description: 'Protect organizations from cyber threats by monitoring systems, identifying vulnerabilities, and implementing security measures.',
    requiredSkills: [
      'Network Security',
      'Threat Analysis',
      'Security Tools (SIEM)',
      'Incident Response',
      'Risk Assessment',
      'Compliance Standards'
    ],
    averageSalary: { min: 75000, max: 160000, currency: 'USD' },
    growthRate: 33,
    educationRequired: ['Bachelor\'s in Cybersecurity/IT', 'Security Certifications (CISSP, CEH)', 'Military/Government experience'],
    industries: ['Technology', 'Finance', 'Government', 'Healthcare'],
    workEnvironment: ['Hybrid', 'Office', 'Remote'],
    learningResources: [
      {
        title: 'CompTIA Security+ Certification',
        provider: 'CompTIA',
        type: 'certification',
        duration: '3-6 months',
        url: 'https://www.comptia.org/certifications/security',
        cost: '$370 exam fee'
      },
      {
        title: 'Cybersecurity Specialization',
        provider: 'University of Maryland (Coursera)',
        type: 'certification',
        duration: '6 months',
        url: 'https://www.coursera.org/cybersecurity',
        cost: '$49/month'
      }
    ]
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    description: 'Analyze financial data, create forecasts, and provide insights to guide business decisions. Work with budgets, investments, and financial planning.',
    requiredSkills: [
      'Financial Modeling',
      'Excel & Data Analysis',
      'Accounting Principles',
      'Financial Reporting',
      'Business Intelligence',
      'Communication'
    ],
    averageSalary: { min: 65000, max: 140000, currency: 'USD' },
    growthRate: 6,
    educationRequired: ['Bachelor\'s in Finance/Accounting', 'CFA Certification', 'MBA preferred'],
    industries: ['Finance', 'Banking', 'Consulting', 'Corporate'],
    workEnvironment: ['Office', 'Hybrid'],
    learningResources: [
      {
        title: 'Financial Analysis Specialization',
        provider: 'University of Pennsylvania (Coursera)',
        type: 'certification',
        duration: '4 months',
        url: 'https://www.coursera.org/financial-analysis',
        cost: '$49/month'
      },
      {
        title: 'CFA Level 1 Preparation',
        provider: 'CFA Institute',
        type: 'certification',
        duration: '300+ hours',
        url: 'https://www.cfainstitute.org',
        cost: '$1,000+'
      }
    ]
  },
  {
    id: 'healthcare-admin',
    title: 'Healthcare Administrator',
    description: 'Manage healthcare facilities and departments, overseeing operations, budgets, and staff to ensure quality patient care and regulatory compliance.',
    requiredSkills: [
      'Healthcare Management',
      'Leadership',
      'Regulatory Compliance',
      'Budgeting',
      'Communication',
      'Policy Development'
    ],
    averageSalary: { min: 70000, max: 150000, currency: 'USD' },
    growthRate: 28,
    educationRequired: ['Bachelor\'s in Healthcare Admin', 'Master\'s in Healthcare Management', 'MHA/MBA'],
    industries: ['Healthcare', 'Hospitals', 'Insurance', 'Government'],
    workEnvironment: ['Office', 'Hybrid'],
    learningResources: [
      {
        title: 'Healthcare Management Specialization',
        provider: 'University of Minnesota (Coursera)',
        type: 'certification',
        duration: '5 months',
        url: 'https://www.coursera.org/healthcare-management',
        cost: '$49/month'
      }
    ]
  }
];
