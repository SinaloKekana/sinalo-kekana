export interface ContactInfo {
  name: string;
  title: string;
  qualification: string;
  institution: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phones?: string[];
  email: string;
  whatsappNumber?: string;
  availability: string;
  willingness: string;
}

export type SkillCategory = 'all' | 'software' | 'operations' | 'interpersonal';

export interface SkillItem {
  name: string;
  category: 'software' | 'operations' | 'interpersonal';
  proficiencyLabel: string;
  description: string;
  highlightPoints: string[];
  icon: string;
}

export interface ExperienceItem {
  role: string;
  organizationType: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  transferableCompetencies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  level: string;
  year: string;
  status: 'Completed' | 'In Progress';
  highlights: string[];
}

export interface StrengthItem {
  title: string;
  summary: string;
  workplaceImpact: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  type: string;
  description: string;
  usageContext: string;
}

export interface ReferenceItem {
  name: string;
  phone: string;
  formattedPhone: string;
  relationship: string;
  availabilityNote: string;
}

export interface AchievementCourse {
  title: string;
  description?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  partner?: string;
  issueDate: string;
  status: string;
  credentialType: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeType: 'capaciti' | 'google-ai';
  summary: string;
  skillsGained: string[];
  courses?: AchievementCourse[];
  signatory?: {
    name: string;
    title: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: string;
  url: string;
  period: string;
  organization: string;
  summary: string;
  researchFocus: string[];
  designFocus: string[];
  keyFeatures: string[];
  toolsAndMethods: string[];
}
