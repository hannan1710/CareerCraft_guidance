import { CareerRecommendation } from '../types';
import { careerDatabase } from '../data/careers';

export function calculateCareerMatches(answers: Record<string, any>): CareerRecommendation[] {
  const recommendations: CareerRecommendation[] = [];

  for (const career of careerDatabase) {
    let matchScore = 0;
    let totalWeight = 0;

    // Technical Skills Match (30% weight)
    const userTechSkills = Array.isArray(answers.technical_skills) ? answers.technical_skills : [];
    const techSkillMatch = calculateSkillMatch(userTechSkills, career.requiredSkills);
    matchScore += techSkillMatch * 30;
    totalWeight += 30;

    // Career Interests Match (25% weight)
    const userInterests = Array.isArray(answers.career_interests) ? answers.career_interests : [];
    const interestMatch = calculateInterestMatch(userInterests, career.industries, career.title);
    matchScore += interestMatch * 25;
    totalWeight += 25;

    // Work Environment Match (15% weight)
    const workEnvMatch = career.workEnvironment.includes(answers.work_environment || '') ? 1 : 0.5;
    matchScore += workEnvMatch * 15;
    totalWeight += 15;

    // Experience Level Match (15% weight)
    const experienceMatch = calculateExperienceMatch(
      answers.experience_years || 0
    );
    matchScore += experienceMatch * 15;
    totalWeight += 15;

    // Values Alignment (15% weight)
    const valuesMatch = calculateValuesMatch(answers, career);
    matchScore += valuesMatch * 15;
    totalWeight += 15;

    const finalScore = Math.round((matchScore / totalWeight) * 100);

    // Identify skill gaps
    const userSkills = [...userTechSkills, ...(Array.isArray(answers.soft_skills) ? answers.soft_skills : [])];
    const skillGaps = career.requiredSkills.filter(
      skill => !userSkills.some(userSkill => 
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    );

    recommendations.push({
      ...career,
      matchScore: finalScore,
      userSkills: userSkills.filter(skill =>
        career.requiredSkills.some(reqSkill =>
          skill.toLowerCase().includes(reqSkill.toLowerCase()) ||
          reqSkill.toLowerCase().includes(skill.toLowerCase())
        )
      ),
      skillGaps
    });
  }

  // Sort by match score and return top matches
  return recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 6);
}

function calculateSkillMatch(userSkills: string[], requiredSkills: string[]): number {
  if (userSkills.length === 0) return 0.3;
  
  let matchCount = 0;
  for (const reqSkill of requiredSkills) {
    if (userSkills.some(userSkill => 
      userSkill.toLowerCase().includes(reqSkill.toLowerCase()) ||
      reqSkill.toLowerCase().includes(userSkill.toLowerCase())
    )) {
      matchCount++;
    }
  }
  
  return matchCount / requiredSkills.length;
}

function calculateInterestMatch(userInterests: string[], industries: string[], careerTitle: string): number {
  if (userInterests.length === 0) return 0.5;
  
  let matchScore = 0;
  
  // Check if interests align with industries
  for (const interest of userInterests) {
    if (industries.some(industry => 
      interest.toLowerCase().includes(industry.toLowerCase()) ||
      industry.toLowerCase().includes(interest.toLowerCase())
    )) {
      matchScore += 0.3;
    }
    
    // Check if interests align with career title
    if (careerTitle.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(careerTitle.toLowerCase())) {
      matchScore += 0.4;
    }
  }
  
  return Math.min(matchScore, 1);
}

function calculateExperienceMatch(years: number): number {
  // Entry level careers
  if (years < 2) return 0.8;
  
  // Mid-level
  if (years >= 2 && years < 5) return 0.9;
  
  // Senior level
  if (years >= 5) return 1.0;
  
  return 0.7;
}

function calculateValuesMatch(answers: Record<string, any>, career: any): number {
  let valuesScore = 0;
  let count = 0;

  // Salary importance vs career salary (1-10 scale)
  if (answers.salary_importance) {
    const salaryMatch = answers.salary_importance <= 5 ? 0.8 : 
                       (career.averageSalary.max > 100000 ? 1.0 : 0.6);
    valuesScore += salaryMatch;
    count++;
  }

  // Growth opportunities vs career growth rate (1-10 scale)
  if (answers.growth_opportunities) {
    const growthMatch = career.growthRate > 15 ? 1.0 : 0.7;
    valuesScore += growthMatch * (answers.growth_opportunities / 10);
    count++;
  }

  // Work-life balance (1-10 scale)
  if (answers.work_life_balance) {
    const wlbMatch = career.workEnvironment.includes('Remote') || 
                     career.workEnvironment.includes('Hybrid') ? 1.0 : 0.7;
    valuesScore += wlbMatch * (answers.work_life_balance / 10);
    count++;
  }

  return count > 0 ? valuesScore / count : 0.7;
}

export function generatePersonalizedInsights(
  answers: Record<string, any>,
  recommendations: CareerRecommendation[]
): string[] {
  const insights: string[] = [];

  // Experience insights
  const experience = answers.experience_years || 0;
  if (experience < 2) {
    insights.push('As an early-career professional, focus on building foundational skills and gaining diverse experience.');
  } else if (experience >= 5) {
    insights.push('With your experience, consider leadership roles or specialized positions that leverage your expertise.');
  }

  // Skills insights
  const techSkills = Array.isArray(answers.technical_skills) ? answers.technical_skills : [];
  if (techSkills.length > 5) {
    insights.push('Your diverse skill set opens doors to multiple career paths. Consider specializing in 2-3 core areas.');
  } else if (techSkills.length < 3) {
    insights.push('Expanding your technical skills will significantly increase your career opportunities.');
  }

  // Values insights
  if (answers.work_life_balance >= 4) {
    insights.push('Prioritize companies with strong work-life balance policies and flexible work arrangements.');
  }

  if (answers.growth_opportunities >= 4) {
    insights.push('Look for organizations with clear career progression paths and learning & development programs.');
  }

  // Top match insight
  if (recommendations.length > 0) {
    const topMatch = recommendations[0];
    insights.push(`Your top match (${topMatch.title}) has a ${topMatch.growthRate}% projected growth rate over the next decade.`);
  }

  return insights;
}
