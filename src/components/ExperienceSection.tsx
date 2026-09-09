import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Users,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card (Experience) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#2E2824]/20 shadow-2xl overflow-hidden"
      >
        {/* Star sparkle accent */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 pointer-events-none">
          <StarSparkle size={20} className="text-[#171412]/80" />
        </div>

        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-[#2E2824]/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-[#171412] tracking-tight">
            Work &amp; Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4038] mt-1.5">
            Practical volunteer and community-based organizational experience in Cape Town.
          </p>
        </div>

        {/* Experience Item Card */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#2E2824]/25 bg-[#CFC5BA]/50 p-6 sm:p-8 space-y-6"
            >
              {/* Header: Role, location, period */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-[#2E2824]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2E2824]/10 text-[#171412] flex items-center justify-center font-bold shrink-0 border border-[#2E2824]/20">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif-title text-[#171412]">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#3D3631] mt-0.5">
                      {exp.organizationType}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5F564F] mt-1.5">
                      <span className="flex items-center gap-1 font-medium text-[#2C2520]">
                        <MapPin className="w-3.5 h-3.5 text-[#2E2824]" />
                        {exp.location}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#5F564F]" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#2E2824]/10 text-[#171412] border border-[#2E2824]/20 self-start">
                  Hands-on Practice
                </span>
              </div>

              {/* Responsibilities list */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-3">
                  Core Responsibilities &amp; Contributions
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-[13.5px] text-[#2C2520]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#D7CEC5]/80 border border-[#2E2824]/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transferable Competencies */}
              <div className="pt-4 border-t border-[#2E2824]/15 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#4A4038] mr-2">
                  Applied Competencies:
                </span>
                {exp.transferableCompetencies.map((comp, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#2E2824]/10 text-[#171412] border border-[#2E2824]/20"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info for Slide 7 */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 07 / 09</span>
          <a
            href="#strengths"
            className="hover:text-[#171412] transition-colors"
          >
            Next: Strengths &amp; Languages &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};
