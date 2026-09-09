import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Copy,
  Check,
  Mail,
  MapPin,
  FileText,
} from 'lucide-react';
import {
  achievementsData,
  contactInfo,
  professionalSummary,
  projectsData,
  skillsList,
  experienceData,
  educationHistory,
  languagesData,
  developedStrengths,
} from '../data/portfolioData';

interface PrintableCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableCVModal: React.FC<PrintableCVModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const getPlainTextCV = () => {
    return `CURRICULUM VITAE
==============================================
SINALO KEKANA
Business Management Student / Graduate
Location: Cape Town 7455
Email: sinalokekana04@gmail.com

PROFESSIONAL SUMMARY
----------------------------------------------
Motivated and detail-oriented Business Management student recently completed N6 at the College of Cape Town. Passionate about administration, customer service, teamwork, and business operations. Strong communication and problem-solving skills with a willingness to learn and adapt quickly in professional environments. Seeking an opportunity to gain practical experience and contribute positively to a growing organisation.

EDUCATION
----------------------------------------------
* College of Cape Town (2026)
  Business Management N6 – Completed

* College of Cape Town (2025)
  Business Management N4 – N5 – Completed

* Stamore Secondary School (2018)
  National Senior Certificate (Matric) – Completed

ACHIEVEMENTS & CERTIFICATIONS
----------------------------------------------
• Google AI Essentials Specialization (Jun 2026)
  Google Career Certificates | Coursera (5-Course Specialization)
  Verification: https://coursera.org/verify/specialization/K177YOS62II9
  Courses: Introduction to AI, Maximize Productivity With AI Tools, Discover the Art of Prompting, Use AI Responsibly, Stay Ahead of the AI Curve

• Artificial Intelligence Bootcamp (AI) (2026)
  CAPACITI (Powered by Coursera)
  Hands-on practical AI training, workplace workflow automation, and digital enterprise efficiency

FEATURED PRACTICAL PROJECTS
----------------------------------------------
• CAPACITI Service Hub (2026)
  Role: Researcher and UI/UX Designer
  Organization: CAPACITI (Cape Innovation & Technology Initiative)
  Live Link: https://capaciti-service-hub-1569.ai.studio
  - Conducted user research, stakeholder needs assessments, and candidate journey mapping to eliminate service bottlenecks.
  - Designed end-to-end user interfaces, navigation architecture, and frictionless inquiry workflows for web and mobile.
  - Deployed live on Google AI Studio as an accessible digital service and candidate support portal.

CORE SKILLS
----------------------------------------------
• Microsoft Office Suite & Google Workspace
• Communication Skills
• Team Collaboration
• Problem Solving
• Time Management
• Ability to Work Under Pressure & Adaptability
• Organisational Skills

WORK EXPERIENCE
----------------------------------------------
Volunteer (Special Events & Program Coordination)
• Assisted with special events and programs.
• Maintained clean and organised facilities.
• Supported smooth event coordination and planning.
• Used interpersonal communication skills to convey information effectively.

LANGUAGES
----------------------------------------------
• IsiXhosa (Native / Home Language)
• IsiZulu (Fluent / Working Proficiency)
• English (Professional & Business Fluent)

DEVELOPED STRENGTHS
----------------------------------------------
• Strong interpersonal and communication skills
• Ability to work in fast-paced environments
• Quick learner with a positive attitude
• Self-motivated and dependable
• Highly adaptable and organised
• Creative thinking and initiative
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getPlainTextCV());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            id="cv-modal-card"
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="bg-white text-slate-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-zinc-700"
          >
            {/* Modal Top Control Bar (Hidden in physical print) */}
            <div className="no-print bg-[#18181b] text-white px-6 py-4 flex items-center justify-between border-b border-zinc-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    Formal Curriculum Vitae &bull; Sinalo Kekana
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Ready for South African HR &amp; Recruitment submission
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
                  title="Copy plain text CV to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all cursor-pointer shadow-sm"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
                  aria-label="Close CV Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Body (A4 Paper Printable Layout) */}
            <div
              id="printable-cv-content"
              className="overflow-y-auto p-6 sm:p-12 space-y-6 text-slate-900 bg-white font-sans selection:bg-amber-100"
            >
              {/* CV Header */}
              <div className="border-b-2 border-slate-900 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-heading">
                    SINALO KEKANA
                  </h1>
                  <span className="text-sm font-bold text-slate-700">
                    Business Management Graduate
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>Cape Town 7455</span>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span>sinalokekana04@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  Motivated and detail-oriented Business Management student recently completed N6 at the College of Cape Town. Passionate about administration, customer service, teamwork, and business operations. Strong communication and problem-solving skills with a willingness to learn and adapt quickly in professional environments. Seeking an opportunity to gain practical experience and contribute positively to a growing organisation.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Education
                </h2>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
                    <div>
                      <h3 className="font-bold text-slate-900">College of Cape Town</h3>
                      <p className="text-slate-700 font-medium">Business Management N6</p>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 sm:text-right mt-1 sm:mt-0">
                      <span>2026</span> &bull; <span className="text-emerald-700 font-bold">Completed</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
                    <div>
                      <h3 className="font-bold text-slate-900">College of Cape Town</h3>
                      <p className="text-slate-700 font-medium">Business Management N4 – N5</p>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 sm:text-right mt-1 sm:mt-0">
                      <span>2025</span> &bull; <span className="text-emerald-700 font-bold">Completed</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm">
                    <div>
                      <h3 className="font-bold text-slate-900">Stamore Secondary School</h3>
                      <p className="text-slate-700 font-medium">National Senior Certificate (Matric)</p>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 sm:text-right mt-1 sm:mt-0">
                      <span>2018</span> &bull; <span className="text-emerald-700 font-bold">Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Achievements &amp; Certifications
                </h2>
                <div className="space-y-3">
                  {achievementsData.map((item) => (
                    <div key={item.id} className="text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <div className="text-xs font-semibold text-slate-700 sm:text-right mt-0.5 sm:mt-0">
                          <span>{item.issueDate}</span> &bull;{' '}
                          <span className="text-emerald-700 font-bold">{item.status}</span>
                        </div>
                      </div>
                      <p className="text-slate-700 font-medium text-xs">
                        {item.issuer} {item.partner ? `(${item.partner})` : ''} &bull; {item.subtitle}
                      </p>
                      {item.verificationUrl && (
                        <p className="text-[11px] text-blue-700 font-mono mt-0.5">
                          Verify: {item.verificationUrl}
                        </p>
                      )}
                      {item.courses && (
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          Curriculum: {item.courses.map((c) => c.title).join(' • ')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Featured Projects
                </h2>
                <div className="space-y-3">
                  {projectsData.map((proj) => (
                    <div key={proj.id} className="text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div className="font-bold text-slate-900">
                          {proj.title} &bull; <span className="font-semibold text-slate-700">Role: {proj.role}</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-600 sm:text-right mt-0.5 sm:mt-0">
                          <span>{proj.period}</span>
                        </div>
                      </div>
                      <p className="text-slate-700 font-medium text-xs">
                        {proj.organization} &bull; <span className="text-blue-700 font-mono text-[11px]">{proj.url}</span>
                      </p>
                      <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                        {proj.summary}
                      </p>
                      <ul className="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-slate-700">
                        <li><strong>User Research:</strong> {proj.researchFocus[0]}</li>
                        <li><strong>UI/UX Design:</strong> {proj.designFocus[0]}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skills */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Microsoft Office Suite &amp; Google Workspace</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Communication Skills</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Team Collaboration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Problem Solving</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Time Management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Ability to Work Under Pressure &amp; Adaptability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Organisational Skills</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Experience
                </h2>
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm mb-1">
                    <h3 className="font-bold text-slate-900">Volunteer</h3>
                    <span className="text-xs font-semibold text-slate-600">Event &amp; Facilities Support</span>
                  </div>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-800 space-y-1 mt-1.5">
                    <li>Assisted with special events and programs.</li>
                    <li>Maintained clean and organised facilities.</li>
                    <li>Supported smooth event coordination and planning.</li>
                    <li>Used interpersonal communication skills to convey information effectively.</li>
                  </ul>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Languages
                </h2>
                <p className="text-xs sm:text-sm text-slate-800 font-medium">
                  IsiXhosa (Native) &bull; IsiZulu (Fluent) &bull; English (Fluent / Business)
                </p>
              </div>

              {/* Developed Strengths */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                  Developed Strengths
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Strong interpersonal and communication skills</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Ability to work in fast-paced environments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Quick learner with a positive attitude</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Self-motivated and dependable</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Highly adaptable and organised</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">&bull;</span>
                    <span>Creative thinking and initiative</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="no-print bg-slate-100 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
              <span>Format: Standard South African Curriculum Vitae</span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Document
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
