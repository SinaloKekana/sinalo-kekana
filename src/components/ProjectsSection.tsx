import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Globe,
  Layout,
  Users,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  ArrowUpRight,
  Palette,
  Lightbulb,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { StarSparkle } from './EditorialDecorations';

export const ProjectsSection: React.FC = () => {
  const project = projectsData[0];
  const [activeTab, setActiveTab] = useState<'overview' | 'research' | 'uiux'>('overview');

  return (
    <section
      id="projects"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#2E2824]/20 shadow-2xl overflow-hidden"
      >
        {/* Top-Right Decorative Accents */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-start gap-1 pointer-events-none">
          <StarSparkle size={22} className="text-[#171412]/80 mt-1" />
          <StarSparkle size={14} className="text-[#171412]/60" />
          <StarSparkle size={10} className="text-[#171412]/40 mt-3" />
        </div>

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 pb-4 border-b border-[#2E2824]/20">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full bg-[#171412] text-[#D7CEC5] text-[11px] font-bold uppercase tracking-wider">
              Applied Project
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#2E2824]/15 text-[#171412] text-[11px] font-bold border border-[#2E2824]/25">
              CAPACITI Ecosystem
            </span>
            <span className="text-xs text-[#5F564F] font-semibold">
              Live Web Application
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight text-[#171412]">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5F564F] mt-1 font-medium">
                {project.subtitle} &bull; {project.organization}
              </p>
            </div>

            {/* Live Link Button */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#171412] text-[#D7CEC5] text-xs sm:text-sm font-bold shadow-md hover:bg-[#2E2824] hover:scale-[1.02] transition-all shrink-0 self-start md:self-auto"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Launch Live Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Highlighted Role Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#171412] text-[#D7CEC5] shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#2E2824] border border-[#D7CEC5]/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#D7CEC5]/70 font-semibold">
                Designated Project Role
              </div>
              <div className="text-base sm:text-lg font-serif font-bold text-[#D7CEC5]">
                {project.role}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#2E2824] text-[#D7CEC5] border border-[#D7CEC5]/20 font-medium">
              User Research &amp; Needs Discovery
            </span>
            <span className="px-3 py-1 rounded-full bg-[#2E2824] text-[#D7CEC5] border border-[#D7CEC5]/20 font-medium">
              Human-Centered UI/UX Design
            </span>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-[#171412] text-[#D7CEC5] shadow-sm'
                : 'bg-[#2E2824]/10 text-[#171412] hover:bg-[#2E2824]/20'
            }`}
          >
            Overview &amp; Live Preview
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'research'
                ? 'bg-[#171412] text-[#D7CEC5] shadow-sm'
                : 'bg-[#2E2824]/10 text-[#171412] hover:bg-[#2E2824]/20'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>My Role: Researcher</span>
          </button>
          <button
            onClick={() => setActiveTab('uiux')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'uiux'
                ? 'bg-[#171412] text-[#D7CEC5] shadow-sm'
                : 'bg-[#2E2824]/10 text-[#171412] hover:bg-[#2E2824]/20'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>My Role: UI/UX Designer</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Summary and Context */}
              <div className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#2E2824]/15">
                <h3 className="font-serif font-bold text-lg text-[#171412] mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  Project Purpose &amp; Context
                </h3>
                <p className="text-xs sm:text-sm text-[#3E3630] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Interactive Mock Browser Frame */}
              <div className="rounded-2xl border-2 border-[#171412] bg-[#171412] overflow-hidden shadow-xl">
                {/* Browser Top Bar */}
                <div className="px-4 py-2.5 bg-[#241F1C] border-b border-[#3E3630] flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex-1 max-w-md mx-auto bg-[#171412] px-3 py-1 rounded-md border border-[#3E3630] text-[11px] text-[#A89F96] font-mono flex items-center justify-center gap-2 truncate">
                    <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{project.url}</span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#D7CEC5] hover:text-white flex items-center gap-1 shrink-0"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Mock UI Canvas */}
                <div className="p-5 sm:p-7 bg-[#FAF7F2] text-[#171412]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2E2824]/15">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live Web Deployment &bull; Google AI Studio
                      </div>
                      <h4 className="font-serif font-black text-xl text-[#171412] mt-0.5">
                        CAPACITI Service Hub
                      </h4>
                      <p className="text-xs text-[#5F564F]">
                        Candidate Services &bull; Support Requests &bull; Administrative Operations
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#171412] text-[#D7CEC5] text-[11px] font-semibold">
                        Role: Researcher &amp; UI/UX Designer
                      </span>
                    </div>
                  </div>

                  {/* Mock Interactive Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                    <div className="p-3.5 rounded-xl bg-white border border-[#2E2824]/10 shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-2">
                        <Search className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-[#171412]">
                        Service Directory
                      </div>
                      <div className="text-[11px] text-[#5F564F] mt-0.5">
                        Categorized candidate support options with instant search navigation.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#2E2824]/10 shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-[#171412]">
                        Inquiry Management
                      </div>
                      <div className="text-[11px] text-[#5F564F] mt-0.5">
                        Structured submission flows for queries, assistance, and follow-ups.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#2E2824]/10 shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-[#171412]">
                        Status Feedback
                      </div>
                      <div className="text-[11px] text-[#5F564F] mt-0.5">
                        Real-time tracking of request resolution and coordinator responses.
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Link in frame */}
                  <div className="mt-5 pt-4 border-t border-[#2E2824]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs text-[#5F564F]">
                      Built and validated during the CAPACITI Artificial Intelligence &amp; Digital program.
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#171412] text-[#D7CEC5] text-xs font-bold hover:bg-[#2E2824] transition-colors self-start sm:self-auto"
                    >
                      <span>Explore Live Hub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Core Features & Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#2E2824]/15 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#171412]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'research' && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#2E2824]/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-900 text-xs font-bold">
                    Primary Responsibility
                  </span>
                  <span className="text-xs text-[#5F564F] font-semibold">
                    Discovery &amp; Problem Definition
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#171412]">
                  Researcher Contribution
                </h3>
                <p className="text-xs sm:text-sm text-[#3E3630] mt-1 leading-relaxed">
                  As Researcher, my objective was to understand the operational friction points candidates and coordinators experience when interacting with CAPACITI service streams, turning qualitative observations into actionable design requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.researchFocus.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#2E2824]/15 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-[#171412] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#2E2824]/10 border border-[#2E2824]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-[#171412]">
                  Research Outcomes Delivered:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#171412] font-medium border border-[#2E2824]/15">
                    Candidate User Journey Maps
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#171412] font-medium border border-[#2E2824]/15">
                    Service Desk Friction Analysis
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#171412] font-medium border border-[#2E2824]/15">
                    Categorized Support Taxonomy
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'uiux' && (
            <motion.div
              key="uiux"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#2E2824]/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-900 text-xs font-bold">
                    Primary Responsibility
                  </span>
                  <span className="text-xs text-[#5F564F] font-semibold">
                    Interface Architecture &amp; User Experience
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#171412]">
                  UI/UX Designer Contribution
                </h3>
                <p className="text-xs sm:text-sm text-[#3E3630] mt-1 leading-relaxed">
                  As UI/UX Designer, I translated the research findings into a seamless, accessible visual interface. I focused on clean typography, intuitive request flows, rapid visual feedback, and cross-device responsiveness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.designFocus.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#2E2824]/15 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-[#171412] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#2E2824]/10 border border-[#2E2824]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-[#171412]">
                  Design System Principles Applied:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#171412] font-medium border border-[#2E2824]/15">
                    Accessible Color Contrast &amp; Hierarchy
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#171412] font-medium border border-[#2E2824]/15">
                    Frictionless Multi-Step Forms
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#171412] font-medium border border-[#2E2824]/15">
                    Mobile-First Responsive Layouts
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tools & Methods Pill Bar */}
        <div className="mt-8 pt-5 border-t border-[#2E2824]/20">
          <div className="text-xs font-bold text-[#5F564F] uppercase tracking-wider mb-2.5">
            Methods, Competencies &amp; Applied Tools
          </div>
          <div className="flex flex-wrap gap-2">
            {project.toolsAndMethods.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#FAF7F2] text-[#171412] text-xs font-semibold border border-[#2E2824]/20 shadow-2xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Slide Footer */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 05 / 09 &bull; Applied Practical Project</span>
          <a
            href="#skills"
            className="hover:text-[#171412] transition-colors font-medium"
          >
            Next: Skills &amp; Proficiencies &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};
