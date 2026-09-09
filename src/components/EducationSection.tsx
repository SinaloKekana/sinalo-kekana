import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { educationHistory } from '../data/portfolioData';
import educationArchImg from '../assets/images/education_books_arch_1787904741217.jpg';
import { StarSparkle } from './EditorialDecorations';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card (Education matching Slide 3) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#2E2824]/20 shadow-2xl overflow-hidden"
      >
        {/* Top-Right Decorative Star Sparkles Cluster matching slide 3 */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-start gap-1 pointer-events-none">
          <StarSparkle size={22} className="text-[#171412]/80 mt-1" />
          <StarSparkle size={14} className="text-[#171412]/60" />
          <StarSparkle size={10} className="text-[#171412]/40 mt-3" />
        </div>

        {/* Section Title */}
        <div className="mb-8 pb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-[#171412] tracking-tight">
            Education
          </h2>
          <div className="h-[1.5px] w-24 bg-[#2E2824]/30 mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Education Qualifications Timeline (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            {educationHistory.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative pl-8 border-l-2 border-[#2E2824]/30 pb-2 group"
              >
                {/* Graduation cap icon on the timeline */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#D7CEC5] border-2 border-[#2E2824] flex items-center justify-center text-[#171412]">
                  <GraduationCap className="w-4 h-4" />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold font-serif-title text-[#171412]">
                      {edu.institution}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#2E2824]/10 text-[#2E2824] border border-[#2E2824]/20">
                      {edu.year}
                    </span>
                    {idx === 0 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-800/15 text-emerald-950 border border-emerald-800/30">
                        Highest Qualification Completed
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-[#2C2520]">
                    {edu.qualification}
                  </p>

                  <p className="text-xs sm:text-[13px] text-[#4A4038] leading-relaxed pt-0.5">
                    {edu.highlights.join(' • ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Architectural Arch & Stacked Books Composition matching Slide 3 (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-2 sm:p-4">
              {/* Star sparkle accent */}
              <div className="absolute -top-2 right-4 z-20">
                <StarSparkle size={16} className="text-[#171412]" />
              </div>

              {/* Arch frame with books matching the reference slide */}
              <div className="relative w-[230px] sm:w-[270px] h-[310px] sm:h-[350px] rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#171412] bg-[#CFC5BA] shadow-xl">
                <img
                  src={educationArchImg}
                  alt="Education and Academic Studies"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-[#2E2824]/10 pointer-events-none" />

                {/* Subtle caption */}
                <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-[#D7CEC5]/90 backdrop-blur-xs border border-[#2E2824]/20 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#171412] font-serif-title">
                    College of Cape Town
                  </p>
                  <p className="text-[10px] text-[#4A4038]">
                    Business Studies &bull; N6 Accredited
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info for Slide 3 */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 03 / 09</span>
          <a
            href="#achievements"
            className="hover:text-[#171412] font-semibold transition-colors"
          >
            Next: Achievements &amp; Certifications &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};
