import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Users,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { usePhoto } from '../context/PhotoContext';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';

export const AboutSection: React.FC = () => {
  const { photoUrl } = usePhoto();
  return (
    <section
      id="about"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card (Introduction matching Slide 2) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#2E2824]/20 shadow-2xl overflow-hidden"
      >
        {/* Top-left corner decorative line with star intersection matching slide 2 */}
        <div className="relative mb-8 pb-4">
          <div className="flex items-start gap-4">
            {/* L-shaped decorative box lines */}
            <div className="relative pt-1 pl-4">
              <div className="absolute left-0 top-0 w-12 h-[1.5px] bg-[#2E2824]/50" />
              <div className="absolute left-0 top-0 h-12 w-[1.5px] bg-[#2E2824]/50" />
              <div className="absolute -left-[7px] top-10">
                <StarSparkle size={14} className="text-[#2E2824]" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-[#171412] tracking-tight">
                Introduction
              </h2>
              <div className="h-[1.5px] w-24 bg-[#2E2824]/30 mt-2" />
            </div>
          </div>

          {/* Top-right subtle star sparkle */}
          <div className="absolute top-0 right-0 pointer-events-none hidden sm:block">
            <StarSparkle size={18} className="text-[#2E2824]/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: "About me" & "Personal projects / Practical experience" (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* "About me" section */}
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-serif-title text-[#171412]">
                About me
              </h3>
              <p className="text-xs sm:text-sm md:text-[14.5px] text-[#2C2520] leading-relaxed font-normal">
                My name is <strong className="text-[#171412] font-semibold">SINALO KEKANA</strong>, a proactive and detail-oriented Business Management graduate with proven academic excellence (N6 Completed at the College of Cape Town) and practical administrative competence. Skilled in office administration, scheduling, customer communications, and facilities coordination. Adept at managing high-level tasks, streamlining workflows, and handling official documentation with professionalism. Proficient in MS Office Suite, Google Workspace, and leveraging digital tools to optimize daily business operations.
              </p>
            </div>

            {/* "Personal projects / Practical experience" section matching the reference */}
            <div className="space-y-2 pt-2 border-t border-[#2E2824]/20">
              <h3 className="text-base sm:text-lg font-bold font-serif-title text-[#171412]">
                Practical Experience &amp; Competencies
              </h3>
              <p className="text-xs sm:text-sm md:text-[14.5px] text-[#2C2520] leading-relaxed font-normal">
                Completed extensive academic training in Business Management alongside community-based event and facility coordination in Cape Town. Highlights include providing end-to-end administrative support, schedule coordination, visitor assistance, and managing logistics for special programs. These experiences reflect my ability to blend dependable administrative execution with courteous customer service, helping teams stay organized while delivering smooth, efficient results.
              </p>
            </div>

            {/* Core Capability Badges */}
            <div className="pt-3 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2E2824]/10 border border-[#2E2824]/25 text-[#171412] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                <span>N6 Business Management Completed</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2E2824]/10 border border-[#2E2824]/25 text-[#171412] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#2E2824]" />
                <span>Cape Town 7455</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2E2824]/10 border border-[#2E2824]/25 text-[#171412] font-medium">
                <Clock className="w-3.5 h-3.5 text-[#2E2824]" />
                <span>Available Immediately</span>
              </span>
            </div>

          </div>

          {/* Right Column: Portrait in Elegant Frame with 4 Diamond Stars (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-6 sm:p-8">
              
              {/* Star Sparkle: Top Center */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <StarSparkle size={18} className="text-[#171412]" />
              </div>

              {/* Star Sparkle: Bottom Center */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                <StarSparkle size={18} className="text-[#171412]" />
              </div>

              {/* Star Sparkle: Left Center */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <StarSparkle size={18} className="text-[#171412]" />
              </div>

              {/* Star Sparkle: Right Center */}
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20">
                <StarSparkle size={18} className="text-[#171412]" />
              </div>

              {/* Natural Portrait Frame displaying picture as it is */}
              <div
                className="relative w-[230px] sm:w-[270px] rounded-2xl overflow-hidden border-2 border-[#171412] bg-[#0c1424] shadow-xl"
              >
                <img
                  src={photoUrl}
                  alt="Sinalo Kekana"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer info for Slide 2 */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 02 / 09</span>
          <a
            href="#education"
            className="hover:text-[#171412] transition-colors"
          >
            Next: Education &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};
