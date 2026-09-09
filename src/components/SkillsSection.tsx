import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Laptop,
  MessageSquare,
  Users,
  Lightbulb,
  Clock,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5" />,
    Laptop: <Laptop className="w-5 h-5" />,
    MessageSquare: <MessageSquare className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Lightbulb: <Lightbulb className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
  };

  const filteredSkills =
    activeCategory === 'all'
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory);

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: `All Skills (${skillsList.length})` },
    { id: 'software', label: 'Software & Tools' },
    { id: 'operations', label: 'Operations & Management' },
    { id: 'interpersonal', label: 'Communication & People' },
  ];

  return (
    <section
      id="skills"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card (Skills) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#2E2824]/20 shadow-2xl overflow-hidden"
      >
        {/* Decorative crosshair star top-right */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 pointer-events-none">
          <ThinCrosshair className="text-[#2E2824]/70" />
        </div>

        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2E2824]/20">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-[#171412] tracking-tight">
                Skills &amp; Proficiencies
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A4038] mt-1.5 max-w-xl">
              Core capabilities gained through N6 Business Management studies at College of Cape Town and practical coordination.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#CFC5BA]/80 rounded-2xl border border-[#2E2824]/20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'text-[#D7CEC5] font-bold'
                    : 'text-[#3D3631] hover:text-[#171412]'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeSkillTabEditorial"
                    className="absolute inset-0 bg-[#171412] rounded-xl shadow-xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -3 }}
                className="bg-[#CFC5BA]/50 rounded-2xl border border-[#2E2824]/25 p-5 flex flex-col justify-between hover:bg-[#CFC5BA]/80 hover:border-[#2E2824]/50 transition-all shadow-xs group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2E2824]/10 text-[#171412] flex items-center justify-center border border-[#2E2824]/20 group-hover:bg-[#171412] group-hover:text-[#D7CEC5] transition-colors">
                      {iconMap[skill.icon] || <CheckCircle2 className="w-5 h-5" />}
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2E2824]/10 text-[#2E2824] border border-[#2E2824]/20">
                      {skill.proficiencyLabel}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-serif-title font-bold text-base text-[#171412] leading-snug">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#3D3631] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Practical Workplace Application Note */}
                <div className="mt-4 pt-3 border-t border-[#2E2824]/15 text-[11px] text-[#4A4038] flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#171412]">Application:</strong> {skill.highlightPoints[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer info for Slide 6 */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 06 / 09</span>
          <a
            href="#experience"
            className="hover:text-[#171412] transition-colors"
          >
            Next: Work &amp; Experience &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};
