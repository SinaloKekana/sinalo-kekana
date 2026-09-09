import React from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Zap,
  Sparkles,
  CheckCircle2,
  FolderTree,
  TrendingUp,
  Globe,
} from 'lucide-react';
import { developedStrengths, languagesData } from '../data/portfolioData';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';

export const StrengthsAndLanguages: React.FC = () => {
  const strengthIcons: Record<string, React.ReactNode> = {
    MessageCircle: <MessageCircle className="w-5 h-5 text-[#171412]" />,
    Zap: <Zap className="w-5 h-5 text-[#171412]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#171412]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#171412]" />,
    FolderTree: <FolderTree className="w-5 h-5 text-[#171412]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#171412]" />,
  };

  return (
    <section
      id="strengths"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card (Strengths & Languages) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#2E2824]/20 shadow-2xl overflow-hidden"
      >
        {/* Crosshair star top right */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 pointer-events-none">
          <ThinCrosshair className="text-[#2E2824]/70" />
        </div>

        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-[#2E2824]/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-[#171412] tracking-tight">
            Strengths &amp; Languages
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4038] mt-1.5">
            Key professional attributes and multilingual capability for South African business environments.
          </p>
        </div>

        {/* 6 Developed Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {developedStrengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-[#2E2824]/25 bg-[#CFC5BA]/50 p-5 flex flex-col justify-between hover:bg-[#CFC5BA]/80 transition-all shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#2E2824]/10 flex items-center justify-center mb-3 border border-[#2E2824]/20">
                  {strengthIcons[item.icon] || <Sparkles className="w-5 h-5 text-[#171412]" />}
                </div>
                <h3 className="font-serif-title font-bold text-base text-[#171412] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#3D3631] leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2E2824]/15 text-[11px] text-[#4A4038] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                <span>{item.workplaceImpact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Showcase */}
        <div className="mt-8 pt-6 border-t border-[#2E2824]/20">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-[#171412]" />
            <h3 className="text-sm font-bold font-serif-title uppercase tracking-wider text-[#171412]">
              Trilingual Communication Fluency
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languagesData.map((lang, lIdx) => (
              <div
                key={lang.name}
                className="p-4 rounded-2xl bg-[#CFC5BA]/70 border border-[#2E2824]/25"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-title font-bold text-base text-[#171412]">
                    {lang.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#171412] text-[#D7CEC5]">
                    {lang.proficiency}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[#4A4038]">
                  {lang.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info for Slide 8 */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 08 / 09</span>
          <a
            href="#contact"
            className="hover:text-[#171412] transition-colors"
          >
            Next: Contact &amp; Inquiries &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};
