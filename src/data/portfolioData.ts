import {
  AchievementItem,
  ContactInfo,
  EducationItem,
  ExperienceItem,
  LanguageItem,
  ProjectItem,
  SkillItem,
  StrengthItem,
} from '../types';

export const contactInfo: ContactInfo = {
  name: 'Sinalo Kekana',
  title: 'Business Management Graduate (N6)',
  qualification: 'Business Management N6 Diploma',
  institution: 'College of Cape Town',
  address: '3 Mafunga Crescent, Langa',
  city: 'Cape Town',
  postalCode: '7455',
  country: 'South Africa',
  email: 'sinalokekana04@gmail.com',
  availability: 'Immediately Available for In-Service Training / Employment',
  willingness: 'Eager to learn, adapt quickly, and contribute to business operations.',
};

export const professionalSummary = {
  primary:
    'Motivated and detail-oriented Business Management student recently completed N6 at the College of Cape Town. Passionate about administration, customer service, teamwork, and business operations.',
  attributes:
    'Strong communication and problem-solving skills with a willingness to learn and adapt quickly in professional environments.',
  objective:
    'Seeking an opportunity to gain practical experience, undergo workplace experiential learning / in-service training, and contribute positively to a growing organisation.',
  pillars: [
    {
      title: 'Administration',
      description: 'Systematic record-keeping, office coordination, documentation, and routine operational support.',
      icon: 'FileText',
    },
    {
      title: 'Customer Service',
      description: 'Courteous interpersonal engagement, client inquiry resolution, and positive relationship handling.',
      icon: 'Users',
    },
    {
      title: 'Teamwork',
      description: 'Cooperative spirit, reliable peer assistance, and active contribution to group deliverables.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Business Operations',
      description: 'Understanding workflow efficiency, scheduling, resource management, and organizational goals.',
      icon: 'Briefcase',
    },
  ],
};

export const skillsList: SkillItem[] = [
  {
    name: 'Artificial Intelligence & Modern Workplace Productivity',
    category: 'software',
    proficiencyLabel: 'Google & CAPACITI Certified',
    description: 'Practical application of generative AI tools, prompt engineering, and digital workflows to accelerate business operations and administrative efficiency.',
    highlightPoints: [
      'Google AI Essentials certified (5-Course Specialization by Google & Coursera)',
      'CAPACITI Artificial Intelligence Bootcamp (AI) completion',
      'Art of Prompting for high-precision business letters, reports, and administrative tasks',
      'Responsible AI practices, ethical data handling, and productivity acceleration',
    ],
    icon: 'Sparkles',
  },
  {
    name: 'Microsoft Office Suite & Google Workspace',
    category: 'software',
    proficiencyLabel: 'Proficient & Practical',
    description: 'Core digital office tools for documentation, spreadsheets, correspondence, and collaborative cloud workflows.',
    highlightPoints: [
      'MS Word & Google Docs for professional reports, business letters, and memos',
      'MS Excel & Google Sheets for basic data entry, records tracking, and tabulation',
      'MS PowerPoint & Google Slides for structured presentations',
      'Outlook & Gmail for professional email correspondence and calendar scheduling',
    ],
    icon: 'Laptop',
  },
  {
    name: 'Communication Skills',
    category: 'interpersonal',
    proficiencyLabel: 'High Proficiency',
    description: 'Articulate verbal and written communication, active listening, and empathetic stakeholder liaison.',
    highlightPoints: [
      'Clear, professional business correspondence and telephone etiquette',
      'Active listening to understand requirements and customer inquiries',
      'Effective cross-cultural communication in multilingual environments',
    ],
    icon: 'MessageSquare',
  },
  {
    name: 'Team Collaboration',
    category: 'interpersonal',
    proficiencyLabel: 'Core Strength',
    description: 'Working harmoniously across diverse teams to accomplish shared operational and event objectives.',
    highlightPoints: [
      'Reliable contributor to team initiatives and special programs',
      'Supportive peer mindset, open to constructive feedback',
      'Fostering a respectful, cooperative work atmosphere',
    ],
    icon: 'Users',
  },
  {
    name: 'Problem Solving',
    category: 'operations',
    proficiencyLabel: 'Analytical & Practical',
    description: 'Identifying challenges promptly, analyzing practical solutions, and taking constructive action.',
    highlightPoints: [
      'Resolving on-the-ground bottlenecks during event setups',
      'Thinking critically before escalating queries',
      'Proactive approach to organizing physical and digital workspaces',
    ],
    icon: 'Lightbulb',
  },
  {
    name: 'Time Management',
    category: 'operations',
    proficiencyLabel: 'Structured & Disciplined',
    description: 'Prioritizing duties, managing daily schedules, and ensuring tasks are delivered promptly without compromise.',
    highlightPoints: [
      'Balancing multiple deadlines and project schedules',
      'Punctual attendance and dependable task follow-through',
      'Structured planning for event coordination and daily checklists',
    ],
    icon: 'Clock',
  },
  {
    name: 'Ability to Work Under Pressure & Adaptability',
    category: 'operations',
    proficiencyLabel: 'Resilient & Flexible',
    description: 'Staying calm and focused during high-volume periods, unexpected schedule shifts, or tight turnaround times.',
    highlightPoints: [
      'Composed temperament during fast-moving events and operations',
      'Readily adjusting to new instructions, software, or workflows',
      'Graceful response to changing organizational priorities',
    ],
    icon: 'ShieldCheck',
  },
  {
    name: 'Organisational Skills',
    category: 'operations',
    proficiencyLabel: 'Methodical & Meticulous',
    description: 'Maintaining orderly physical spaces, streamlined document archives, and disciplined workflows.',
    highlightPoints: [
      'Maintaining clean, well-managed, and organized facilities',
      'Systematic file indexing, filing, and retrieval',
      'Detailed attention to inventory, supplies, and event materials',
    ],
    icon: 'Layers',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Volunteer',
    organizationType: 'Community & Event Programs',
    period: 'Practical Experience & Community Engagement',
    location: 'Cape Town, Western Cape',
    summary:
      'Contributed hands-on operational and organizational support for special events, community initiatives, and facility coordination.',
    responsibilities: [
      'Assisted with special events and community programs, ensuring smooth scheduling and logistical flow.',
      'Maintained clean, well-ordered, and functional facilities for participants, attendees, and staff.',
      'Supported smooth event coordination and forward planning across varying program stages.',
      'Used interpersonal communication skills to convey key information clearly and courteously to diverse groups.',
    ],
    transferableCompetencies: [
      'Facilities & Workplace Organization',
      'Frontline Guest & Participant Liaison',
      'On-site Schedule Execution & Logistics',
      'Team Synchronization Under Live Event Conditions',
    ],
  },
];

export const educationHistory: EducationItem[] = [
  {
    id: 'n6-cct',
    institution: 'College of Cape Town',
    qualification: 'Business Management N6',
    level: 'National N-Diploma Level (N6 Completed)',
    year: '2026',
    status: 'Completed',
    highlights: [
      'Completed comprehensive N6 Business Management curriculum',
      'Advanced modules in Management Practice, Office Administration, Entrepreneurship, and Financial Management principles',
      'Prepared for formal workplace experiential learning / management support roles',
    ],
  },
  {
    id: 'n4-n5-cct',
    institution: 'College of Cape Town',
    qualification: 'Business Management N4 – N5',
    level: 'National Certificate Level (N4 & N5 Completed)',
    year: '2025',
    status: 'Completed',
    highlights: [
      'Built strong fundamentals in Business Communication, Sales Management, and Computer Practice',
      'Mastered office protocols, commercial correspondence, and business organization frameworks',
    ],
  },
  {
    id: 'matric-stamore',
    institution: 'Stamore Secondary School',
    qualification: 'National Senior Certificate (Matric)',
    level: 'Secondary Education (Grade 12)',
    year: '2018',
    status: 'Completed',
    highlights: [
      'Achieved National Senior Certificate qualification',
      'Established academic discipline, language proficiency, and foundational literacy & numeracy',
    ],
  },
];

export const languagesData: LanguageItem[] = [
  {
    name: 'IsiXhosa',
    proficiency: 'Native / Mother Tongue',
    type: 'Home Language',
    description: 'Complete verbal fluency, nuanced cultural rapport, and natural conversational mastery.',
    usageContext: 'Ideal for local community liaison, customer relations, and inclusive workplace interactions in the Western and Eastern Cape.',
  },
  {
    name: 'IsiZulu',
    proficiency: 'Fluent / Full Working Proficiency',
    type: 'First Additional / Working Language',
    description: 'High verbal proficiency, professional comprehension, and seamless conversational engagement.',
    usageContext: 'Broadens organizational reach across national South African markets and diverse client bases.',
  },
  {
    name: 'English',
    proficiency: 'Professional & Business Fluent',
    type: 'Instruction & Business Medium',
    description: 'Professional business communication, articulate written correspondence, and confident verbal presentation.',
    usageContext: 'Corporate administration, formal correspondence, email communications, and customer service standards.',
  },
];

export const developedStrengths: StrengthItem[] = [
  {
    title: 'Strong Interpersonal & Communication Skills',
    summary: 'Engages with clients, colleagues, and stakeholders with warmth, respect, and clear messaging.',
    workplaceImpact: 'Builds positive team camaraderie and ensures customers feel valued and heard.',
    icon: 'MessageCircle',
  },
  {
    title: 'Ability to Work in Fast-Paced Environments',
    summary: 'Remains poised, organized, and focused during urgent task deadlines and sudden operational shifts.',
    workplaceImpact: 'Prevents operational bottlenecks and handles peak service rushes efficiently.',
    icon: 'Zap',
  },
  {
    title: 'Quick Learner with a Positive Attitude',
    summary: 'Greets every new responsibility as a learning opportunity; absorbs systems and workflows rapidly.',
    workplaceImpact: 'Minimizes training overhead and transitions quickly into productive day-to-day contributions.',
    icon: 'Sparkles',
  },
  {
    title: 'Self-Motivated & Dependable',
    summary: 'Takes accountability for delegated tasks with minimal supervision, demonstrating reliable follow-through.',
    workplaceImpact: 'Managers can trust that assignments and records will be completed accurately and on schedule.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Highly Adaptable & Organised',
    summary: 'Structured in document management and physical arrangement, while remaining versatile to change.',
    workplaceImpact: 'Keeps files, workspaces, and administrative schedules pristine and easily accessible.',
    icon: 'FolderTree',
  },
  {
    title: 'Creative Thinking & Initiative',
    summary: 'Looks for practical, innovative ways to improve routine workflows and resolve everyday obstacles.',
    workplaceImpact: 'Contributes fresh perspectives and proactive problem-solving to business operations.',
    icon: 'TrendingUp',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'google-ai-essentials',
    title: 'Google AI Essentials',
    subtitle: '5-Course Online Specialization Certificate',
    issuer: 'Google Career Certificates',
    partner: 'Coursera',
    issueDate: 'June 23, 2026',
    status: 'Completed & Verified',
    credentialType: 'Online Specialization Certificate',
    credentialId: 'K177YOS62II9',
    verificationUrl: 'https://coursera.org/verify/specialization/K177YOS62II9',
    badgeType: 'google-ai',
    summary:
      'Completed five courses developed by Google featuring hands-on practice designed to build practical AI skills. Competent in using AI tools responsibly and improving productivity across workplace workflows and administrative operations.',
    skillsGained: [
      'Generative AI Foundations & Terminology',
      'Prompt Engineering & The Art of Prompting',
      'Workplace Productivity Acceleration via AI',
      'Responsible AI, Ethics & Bias Mitigation',
      'Staying Ahead of the AI Curve in Business',
    ],
    courses: [
      {
        title: 'Introduction to AI',
        description: 'Core concepts, machine learning fundamentals, and practical AI ecosystem literacy.',
      },
      {
        title: 'Maximize Productivity With AI Tools',
        description: 'Hands-on techniques to streamline office duties, drafting, data analysis, and task execution.',
      },
      {
        title: 'Discover the Art of Prompting',
        description: 'Crafting clear, contextual, multi-turn prompts to elicit high-quality business outputs.',
      },
      {
        title: 'Use AI Responsibly',
        description: 'Understanding ethical principles, mitigating bias, data privacy, and safe workplace application.',
      },
      {
        title: 'Stay Ahead of the AI Curve',
        description: 'Navigating evolving AI innovations and integrating continuous digital learning into organizational workflows.',
      },
    ],
    signatory: {
      name: 'Amanda Brophy',
      title: 'Global Director of Google Career Certificates',
    },
  },
  {
    id: 'capaciti-ai-bootcamp',
    title: 'Artificial Intelligence Bootcamp (AI)',
    subtitle: 'Specialized Digital Bootcamp Completion Badge',
    issuer: 'CAPACITI',
    partner: 'Powered by Coursera',
    issueDate: '2026',
    status: 'Completed & Certified',
    credentialType: 'Bootcamp Completion Credential',
    badgeType: 'capaciti',
    summary:
      'Completed intensive practical AI training under CAPACITI powered by Coursera. Built hands-on competence in applying artificial intelligence to streamline operational tasks, boost day-to-day administrative efficiency, and solve workplace problems.',
    skillsGained: [
      'Applied AI for Business & Administration',
      'Workflow Automation & Task Turnaround',
      'Digital Workplace Productivity Tools',
      'Analytical Problem Solving with AI',
      'Digital Enterprise & Operational Readiness',
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'capaciti-service-hub',
    title: 'CAPACITI Service Hub',
    subtitle: 'Centralized Digital Services & Candidate Support Portal',
    role: 'Researcher and UI/UX Designer',
    category: 'Applied Digital & UX Project',
    url: 'https://capaciti-service-hub-1569.ai.studio',
    period: '2026',
    organization: 'CAPACITI (Cape Innovation & Technology Initiative)',
    summary:
      'A streamlined digital service hub and workflow management platform designed to centralize support requests, candidate resources, service navigation, and administrative coordination for CAPACITI. Developed and deployed live on Google AI Studio, with dedicated focus on user research, user journey mapping, and clean human-centered UI/UX design.',
    researchFocus: [
      'Investigated user pain points and communication friction across candidate inquiries, service requests, and administrative handoffs.',
      'Conducted stakeholder and peer needs assessments to identify high-frequency service workflows and core support categories.',
      'Mapped intuitive user journeys and personas for candidates, administrators, and partner liaisons to eliminate service bottlenecks.',
      'Benchmarked service desk patterns and digital self-service paradigms to optimize user satisfaction and resolution times.',
    ],
    designFocus: [
      'Designed end-to-end interface wireframes and high-fidelity mockups emphasizing clarity, minimal cognitive load, and accessibility.',
      'Crafted a cohesive, modern visual design system with clear typographical hierarchy, intuitive action buttons, and responsive grid layouts.',
      'Designed interactive inquiry submission forms, status indicators, and clear categorized service cards for frictionless self-service.',
      'Optimized responsive layouts across desktop and mobile viewports, ensuring seamless navigation for all users regardless of device.',
    ],
    keyFeatures: [
      'Centralized Service Catalog & Fast Categorized Navigation',
      'Self-Service Support Inquiry & Request Submission Flow',
      'Clear Visual Status Tracking & Prompt Feedback Cues',
      'Mobile-Responsive & Accessible UI with Clear Typography',
      'Integrated AI-assisted search and automated guidance cues',
    ],
    toolsAndMethods: [
      'User Research & Needs Analysis',
      'UI/UX Wireframing & Prototyping',
      'User Journey Mapping & Personas',
      'Information Architecture (IA)',
      'Responsive Interaction Design',
      'Accessibility & Usability Testing',
      'Google AI Studio Web Deployment',
    ],
  },
];
