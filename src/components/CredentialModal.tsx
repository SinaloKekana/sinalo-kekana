import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Award,
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  Building,
  User,
  Sparkles,
} from 'lucide-react';
import { AchievementItem } from '../types';
import { GoogleAICertificateGraphic } from './GoogleAICertificateGraphic';
import { CapacitiBadgeGraphic } from './CapacitiBadgeGraphic';

interface CredentialModalProps {
  achievement: AchievementItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({
  achievement,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !achievement) return null;

  const handleCopyLink = () => {
    if (achievement.verificationUrl) {
      navigator.clipboard.writeText(achievement.verificationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-print">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F0D0B]/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#1C1815] text-[#D7CEC5] rounded-3xl border border-[#3D3631] shadow-2xl overflow-hidden my-auto z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2E2824] bg-[#241F1C]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D7CEC5]/10 border border-[#D7CEC5]/20 flex items-center justify-center text-[#D7CEC5]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold font-serif-title text-[#F5EDE4]">
                  {achievement.title}
                </h3>
                <p className="text-xs text-[#A89F95]">
                  {achievement.issuer} &bull; {achievement.issueDate}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#A89F95] hover:text-[#F5EDE4] hover:bg-[#2E2824] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Visual Display */}
            {achievement.badgeType === 'google-ai' ? (
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 p-2 sm:p-3">
                  <GoogleAICertificateGraphic interactive={false} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl bg-[#151210] border border-[#2E2824]">
                <CapacitiBadgeGraphic size={260} />
                <p className="mt-4 text-xs font-semibold text-[#A89F95] tracking-wide uppercase">
                  Official Completion Badge &bull; CAPACITI
                </p>
              </div>
            )}

            {/* Credential Metadata Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#241F1C] border border-[#332C27]">
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8077] block">
                    Credential Name
                  </span>
                  <p className="text-sm font-bold text-[#F5EDE4]">
                    {achievement.title}
                  </p>
                  <p className="text-xs text-[#A89F95]">{achievement.subtitle}</p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8077] block">
                    Issued By
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#D7CEC5] font-medium mt-0.5">
                    <Building className="w-3.5 h-3.5 text-[#A89F95]" />
                    <span>{achievement.issuer}</span>
                    {achievement.partner && (
                      <span className="text-[#8A8077]">({achievement.partner})</span>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8077] block">
                    Recipient
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#D7CEC5] font-medium mt-0.5">
                    <User className="w-3.5 h-3.5 text-[#A89F95]" />
                    <span>Sinalo Kekana</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8077] block">
                    Date &amp; Status
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#D7CEC5] font-medium mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#A89F95]" />
                    <span>{achievement.issueDate}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 text-[10px] font-bold">
                      {achievement.status}
                    </span>
                  </div>
                </div>

                {achievement.credentialId && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8077] block">
                      Credential ID
                    </span>
                    <p className="font-mono text-xs text-[#D7CEC5] mt-0.5">
                      {achievement.credentialId}
                    </p>
                  </div>
                )}

                {achievement.signatory && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8077] block">
                      Signatory
                    </span>
                    <p className="text-xs text-[#D7CEC5] font-medium mt-0.5">
                      {achievement.signatory.name} &bull;{' '}
                      <span className="text-[#8A8077]">
                        {achievement.signatory.title}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Courses list if present */}
            {achievement.courses && achievement.courses.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D7CEC5] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Specialization Curriculum (5 Courses)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {achievement.courses.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3 rounded-xl bg-[#241F1C] border border-[#332C27] flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-600/40 flex items-center justify-center text-emerald-400 text-[10px] font-bold shrink-0 mt-0.5">
                        {cIdx + 1}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#F5EDE4]">
                          {course.title}
                        </p>
                        {course.description && (
                          <p className="text-[11px] text-[#A89F95] mt-0.5 leading-relaxed">
                            {course.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Acquired */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8077] block">
                Key Competencies Validated
              </span>
              <div className="flex flex-wrap gap-1.5">
                {achievement.skillsGained.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#2E2824] text-xs text-[#D7CEC5] border border-[#3D3631]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-[#2E2824] bg-[#241F1C] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-[#8A8077]">
              Accredited credential for career portfolio
            </div>

            <div className="flex items-center gap-2.5">
              {achievement.verificationUrl && (
                <>
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2E2824] hover:bg-[#3D3631] text-[#D7CEC5] text-xs font-semibold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Verify URL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={achievement.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0056D2] hover:bg-[#0048B5] text-white text-xs font-bold transition-colors shadow-md"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verify Live on Coursera</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#2E2824] hover:bg-[#3D3631] text-[#D7CEC5] text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
