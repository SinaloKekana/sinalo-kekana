import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StrengthsAndLanguages } from './components/StrengthsAndLanguages';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintableCVModal } from './components/PrintableCVModal';
import { PhotoProvider } from './context/PhotoContext';
import {
  achievementsData,
  contactInfo,
  educationHistory,
  experienceData,
  languagesData,
  projectsData,
  skillsList,
  developedStrengths,
} from './data/portfolioData';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <PhotoProvider>
      <div className="min-h-screen flex flex-col bg-[#161412] text-[#D7CEC5] selection:bg-[#D7CEC5] selection:text-[#161412]">
        {/* =========================================================================
            DIGITAL PORTFOLIO WEB VIEW (Hidden during physical print)
            ========================================================================= */}
        <div className="no-print flex-1 flex flex-col">
          <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />
          <main className="flex-1">
            <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
            <AboutSection />
            <EducationSection />
            <AchievementsSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <StrengthsAndLanguages />
            <ContactSection />
          </main>
          <Footer onOpenCVModal={() => setIsCVModalOpen(true)} />
        </div>

        {/* CV Modal for interactive preview and export */}
        <PrintableCVModal
          isOpen={isCVModalOpen}
          onClose={() => setIsCVModalOpen(false)}
        />

        {/* =========================================================================
          DEDICATED PRINT-ONLY LAYOUT
          Automatically activates when user triggers browser print (Ctrl+P / Print)
          Presents a clean, standard South African Curriculum Vitae
          ========================================================================= */}
      <div className="print-only p-8 text-slate-900 bg-white font-sans text-[11pt] leading-normal">
        {/* Header */}
        <div className="border-b-2 border-slate-900 pb-4 mb-4">
          <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-950">
            {contactInfo.name}
          </h1>
          <p className="text-sm font-semibold text-slate-700 mt-0.5">
            Business Management Graduate (N6 Completed) &bull; Cape Town, South Africa
          </p>
          <div className="mt-2 text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1">
            <span>
              <strong>Location:</strong> Cape Town 7455
            </span>
            <span>
              <strong>Email:</strong> {contactInfo.email}
            </span>
            {contactInfo.linkedin && (
              <span>
                <strong>LinkedIn:</strong> linkedin.com/in/sinalo-kekana-b97116249
              </span>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Professional Summary
          </h2>
          <div className="text-xs text-slate-800 leading-relaxed space-y-1.5">
            <p>
              My name is <strong>SINALO KEKANA</strong>, a proactive and detail-oriented Business Management graduate with proven academic excellence (<strong>N6 completed at the College of Cape Town</strong>) and practical administrative competence. Skilled in office administration, scheduling, customer communication, facilities coordination, and official documentation. Adept at managing high-level tasks, streamlining workflows, and using digital tools to improve daily business operations. Proficient in <strong>Microsoft Office Suite, Google Workspace, and other digital productivity tools</strong>.
            </p>
            <p>
              I have a strong and growing <strong>interest in technology and the role it plays in modern business operations</strong>. I am particularly interested in <strong>artificial intelligence, digital transformation, business technology, IT support, and technology-driven solutions</strong> that improve efficiency and customer experiences.
            </p>
            <p>
              My combination of <strong>business management knowledge, administrative skills, digital proficiency, and interest in technology</strong> allows me to adapt to changing work environments and explore opportunities at the intersection of <strong>business and technology</strong>. Eager to continue learning, develop practical technical skills, and contribute to organisations that use technology and innovation to improve the way they work.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Education
          </h2>
          <div className="space-y-2 text-xs">
            {educationHistory.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <strong className="text-slate-900">{edu.institution}</strong>
                  <span className="text-slate-700 block">{edu.qualification}</span>
                </div>
                <div className="text-right text-slate-700 font-medium shrink-0">
                  <span>{edu.year} &bull; Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Achievements &amp; Certifications
          </h2>
          <div className="space-y-2.5 text-xs">
            {achievementsData.map((ach) => (
              <div key={ach.id} className="text-xs">
                <div className="flex justify-between items-start font-bold text-slate-900">
                  <span>{ach.title}</span>
                  <span className="font-normal text-slate-600 shrink-0">{ach.issueDate}</span>
                </div>
                <div className="text-slate-700 text-[11px] font-medium">
                  {ach.issuer} {ach.partner ? `(${ach.partner})` : ''} &bull; {ach.subtitle}
                </div>
                {ach.verificationUrl && (
                  <div className="text-[10px] text-slate-500 font-mono">
                    Verify: {ach.verificationUrl}
                  </div>
                )}
                {ach.courses && (
                  <div className="text-[10px] text-slate-600 mt-0.5">
                    Curriculum: {ach.courses.map((c) => c.title).join(' • ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Practical Projects */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Featured Practical Projects
          </h2>
          <div className="space-y-2 text-xs">
            {projectsData.map((proj) => (
              <div key={proj.id} className="text-xs">
                <div className="flex justify-between items-start font-bold text-slate-900">
                  <span>{proj.title} &bull; <span className="font-semibold text-slate-700">Role: {proj.role}</span></span>
                  <span className="font-normal text-slate-600 shrink-0">{proj.period}</span>
                </div>
                <div className="text-slate-700 text-[11px] font-medium">
                  {proj.organization} &bull; Live URL: {proj.url}
                </div>
                <p className="text-[11px] text-slate-800 mt-0.5 leading-relaxed">
                  {proj.summary}
                </p>
                <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-[10px] text-slate-700">
                  <li><strong>Research:</strong> {proj.researchFocus[0]}</li>
                  <li><strong>UI/UX Design:</strong> {proj.designFocus[0]}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Skills &amp; Proficiencies
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-800">
            {skillsList.map((skill) => (
              <div key={skill.name}>&bull; {skill.name}</div>
            ))}
          </div>
        </div>

        {/* Work / Volunteer Experience */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Experience
          </h2>
          {experienceData.map((exp, idx) => (
            <div key={idx} className="text-xs">
              <div className="flex justify-between items-center font-bold text-slate-900">
                <span>{exp.role} (Special Events &amp; Facility Coordination)</span>
                <span className="font-normal text-slate-600">Cape Town</span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-800">
                {exp.responsibilities.map((r, rIdx) => (
                  <li key={rIdx}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Languages
          </h2>
          <p className="text-xs text-slate-800">
            {languagesData.map((l) => `${l.name} (${l.proficiency})`).join(' &bull; ')}
          </p>
        </div>

        {/* Developed Strengths */}
        <div className="mb-4 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
            Developed Strengths
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-800">
            {developedStrengths.map((str, sIdx) => (
              <div key={sIdx}>&bull; {str.title}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </PhotoProvider>
);
}
