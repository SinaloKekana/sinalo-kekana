import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers,
  ChevronRight,
  Eye,
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { AchievementItem } from '../types';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';
import { GoogleAICertificateGraphic } from './GoogleAICertificateGraphic';
import { CapacitiBadgeGraphic } from './CapacitiBadgeGraphic';
import { CredentialModal } from './CredentialModal';

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCredential = (achievement: AchievementItem) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  return (
    <section
      id="achievements"
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
        <div className="mb-8 sm:mb-12 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full bg-[#171412] text-[#D7CEC5] text-[11px] font-bold uppercase tracking-wider">
              Accredited Credentials
            </span>
            <span className="text-xs text-[#5F564F] font-semibold">
              Industry Recognized
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-[#171412] tracking-tight">
            Achievements &amp; Certifications
          </h2>
          <div className="h-[1.5px] w-24 bg-[#2E2824]/30 mt-3" />

          <p className="text-sm sm:text-base text-[#4A4038] mt-3 max-w-2xl leading-relaxed">
            Demonstrated mastery in generative artificial intelligence, modern digital workplace productivity tools, and applied business automation alongside formal Business Management qualifications.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Google AI Essentials Specialization */}
          {achievementsData.find((a) => a.id === 'google-ai-essentials') && (() => {
            const googleItem = achievementsData.find(
              (a) => a.id === 'google-ai-essentials'
            )!;
            return (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between rounded-2xl bg-[#E2DAD1] border-2 border-[#171412]/20 hover:border-[#171412] p-5 sm:p-7 shadow-lg transition-all group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#171412] text-[#D7CEC5] text-[10px] font-bold uppercase tracking-wider">
                        Google &bull; Coursera
                      </span>
                      <span className="text-xs font-semibold text-[#5F564F]">
                        {googleItem.issueDate}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-700/15 px-2 py-0.5 rounded-full border border-emerald-700/30">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Credential</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-2xl font-bold font-serif-title text-[#171412]">
                    {googleItem.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4A4038] mt-0.5">
                    {googleItem.subtitle} &bull; {googleItem.issuer}
                  </p>

                  {/* Interactive Certificate Preview Graphic */}
                  <div
                    onClick={() => handleOpenCredential(googleItem)}
                    className="mt-4 relative rounded-xl overflow-hidden shadow-md cursor-pointer border border-slate-300 hover:shadow-xl transition-all group-hover:scale-[1.01]"
                    title="Click to view full verifiable certificate"
                  >
                    <GoogleAICertificateGraphic interactive={false} />
                    <div className="absolute inset-0 bg-[#171412]/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-semibold text-xs">
                      <Eye className="w-4 h-4" />
                      <span>Click to Inspect Full Certificate</span>
                    </div>
                  </div>

                  {/* 5 Courses Included */}
                  <div className="mt-4 pt-3 border-t border-[#2E2824]/15">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F564F] block mb-2">
                      5 Specialization Courses Completed
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#2E2824]">
                      {googleItem.courses?.map((c, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 p-1.5 rounded-lg bg-[#D7CEC5]/70 border border-[#2E2824]/10 text-[11px] font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                          <span className="truncate">{c.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Competency Highlights */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {googleItem.skillsGained.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-[#171412]/10 text-[#171412] text-[11px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-[#2E2824]/15 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => handleOpenCredential(googleItem)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#171412] hover:bg-[#2E2824] text-[#D7CEC5] text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={googleItem.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0056D2] hover:underline"
                  >
                    <span>Verify on Coursera</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })()}

          {/* Card 2: CAPACITI Artificial Intelligence Bootcamp (AI) */}
          {achievementsData.find((a) => a.id === 'capaciti-ai-bootcamp') && (() => {
            const capacitiItem = achievementsData.find(
              (a) => a.id === 'capaciti-ai-bootcamp'
            )!;
            return (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col justify-between rounded-2xl bg-[#E2DAD1] border-2 border-[#171412]/20 hover:border-[#171412] p-5 sm:p-7 shadow-lg transition-all group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#141E34] text-white text-[10px] font-bold uppercase tracking-wider">
                        CAPACITI
                      </span>
                      <span className="text-xs font-semibold text-[#5F564F]">
                        {capacitiItem.issueDate}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-900 bg-blue-700/15 px-2 py-0.5 rounded-full border border-blue-700/30">
                      <Sparkles className="w-3 h-3 text-[#0056D2]" />
                      <span>Bootcamp Badge</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-2xl font-bold font-serif-title text-[#171412]">
                    {capacitiItem.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4A4038] mt-0.5">
                    {capacitiItem.subtitle} &bull; {capacitiItem.partner}
                  </p>

                  {/* Badge Display */}
                  <div
                    onClick={() => handleOpenCredential(capacitiItem)}
                    className="mt-4 flex flex-col items-center justify-center p-5 rounded-xl bg-white/70 border border-slate-300 shadow-sm cursor-pointer hover:bg-white hover:shadow-md transition-all group-hover:scale-[1.01]"
                    title="Click to view badge details"
                  >
                    <CapacitiBadgeGraphic size={170} />
                    <span className="mt-2 text-[11px] font-bold text-[#141E34] uppercase tracking-wider">
                      Verified AI Bootcamp Completion
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-xs sm:text-[13px] text-[#3A332C] leading-relaxed">
                    {capacitiItem.summary}
                  </p>

                  {/* Competency Highlights */}
                  <div className="mt-4 pt-3 border-t border-[#2E2824]/15">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F564F] block mb-2">
                      Core Applied Skills
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {capacitiItem.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#D7CEC5] text-[#171412] text-xs font-medium border border-[#2E2824]/15"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-[#2E2824]/15 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenCredential(capacitiItem)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#171412] hover:bg-[#2E2824] text-[#D7CEC5] text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>View Badge Details</span>
                  </button>

                  <span className="text-xs text-[#5F564F] font-semibold">
                    Digital Accelerator Program
                  </span>
                </div>
              </motion.div>
            );
          })()}

        </div>

        {/* Slide Footer */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 04 / 09 &bull; Verified Credentials</span>
          <a
            href="#projects"
            className="hover:text-[#171412] transition-colors"
          >
            Next: Featured Projects &rarr;
          </a>
        </div>
      </motion.div>

      {/* Credential Detailed Modal */}
      <CredentialModal
        achievement={selectedAchievement}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedAchievement(null);
        }}
      />
    </section>
  );
};
