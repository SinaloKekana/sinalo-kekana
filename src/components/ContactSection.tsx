import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  Building,
  Clock,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form states for quick inquiry composer
  const [senderName, setSenderName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [opportunityTitle, setOpportunityTitle] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      opportunityTitle
        ? `Opportunity: ${opportunityTitle} (${companyName || 'Recruitment'})`
        : `Business Management In-Service / Opportunity for Sinalo Kekana`
    );

    const bodyText = `Hi Sinalo,

My name is ${senderName || '[Your Name]'} from ${companyName || '[Company / Organization]'}.

We reviewed your Business Management portfolio and would like to connect regarding ${
      opportunityTitle || 'an administrative / operational role'
    }.

Message:
${message || 'Please let us know your availability for an interview or discussion.'}

Best regards,
${senderName || 'Hiring Team'}`;

    const mailtoUrl = `mailto:${contactInfo.email}?subject=${subject}&body=${encodeURIComponent(
      bodyText
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card (Contact) */}
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
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4038] mt-1.5">
            Open to in-service training, administration, and entry-level business operations opportunities in Cape Town.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details & Information (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Address Card */}
            <div className="p-5 rounded-2xl bg-[#CFC5BA]/60 border border-[#2E2824]/25 space-y-3">
              <div className="flex items-center gap-2.5 text-[#171412]">
                <div className="w-8 h-8 rounded-xl bg-[#2E2824]/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#171412]" />
                </div>
                <h3 className="font-serif-title font-bold text-sm uppercase tracking-wider">
                  Email Inquiries
                </h3>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/20 text-xs sm:text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-bold text-[#171412] hover:underline truncate mr-2"
                >
                  {contactInfo.email}
                </a>
                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-1.5 rounded-lg hover:bg-[#2E2824]/10 text-[#3D3631] cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-800" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="p-5 rounded-2xl bg-[#CFC5BA]/40 border border-[#2E2824]/20 space-y-3 text-xs text-[#3D3631]">
              <div className="flex items-center gap-2 font-medium text-[#171412]">
                <MapPin className="w-4 h-4 text-[#171412]" />
                <span>Cape Town 7455, Western Cape, South Africa</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Immediate Start Available (In-Service Training / Employment)</span>
              </div>
              <div className="pt-2 border-t border-[#2E2824]/15 text-[11px] leading-relaxed text-[#5F564F]">
                Active email monitoring for internship opportunities, administrative positions, and interview scheduling.
              </div>
            </div>

            {/* Direct Email Action CTA */}
            <a
              href={`mailto:${contactInfo.email}?subject=Business%20Management%20Opportunity%20-%20Sinalo%20Kekana`}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#171412] text-[#D7CEC5] text-xs sm:text-sm font-semibold hover:bg-[#2E2824] transition-colors shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>
          </div>

          {/* Right Column: Direct Opportunity Message Composer (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#CFC5BA]/50 border border-[#2E2824]/25">
            <h3 className="font-serif-title font-bold text-base sm:text-lg text-[#171412] mb-1">
              Send an Opportunity Message
            </h3>
            <p className="text-xs text-[#4A4038] mb-5">
              Draft an interview invitation or inquiry directly to Sinalo&apos;s email.
            </p>

            <form onSubmit={handleComposeEmail} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Dlamini"
                    className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Cape Logistics Ltd"
                    className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                  Position / Role Subject
                </label>
                <input
                  type="text"
                  value={opportunityTitle}
                  onChange={(e) => setOpportunityTitle(e.target.value)}
                  placeholder="e.g. Junior Administrative Officer / In-Service Training"
                  className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide any details regarding the role, requirements, or next steps..."
                  className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#171412] text-[#D7CEC5] font-semibold text-xs sm:text-sm hover:bg-[#2E2824] transition-colors cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email Client</span>
              </button>

              {formSent && (
                <p className="text-center text-xs text-emerald-900 font-medium">
                  Prepared in your email client. Thank you for connecting!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer info for Slide 9 */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 09 / 09</span>
          <a
            href="#overview"
            className="hover:text-[#171412] transition-colors"
          >
            &uarr; Return to Top
          </a>
        </div>
      </motion.div>
    </section>
  );
};
