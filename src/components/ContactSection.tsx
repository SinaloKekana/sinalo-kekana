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
  Linkedin,
  ExternalLink,
  Loader2,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form states
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [opportunityTitle, setOpportunityTitle] = useState('');
  const [message, setMessage] = useState('');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getSubject = () => {
    return opportunityTitle
      ? `Opportunity: ${opportunityTitle} (${companyName || 'Recruitment'})`
      : `Business Management Inquiry / Opportunity for Sinalo Kekana`;
  };

  const getFormattedBody = () => {
    return `Hi Sinalo,

My name is ${senderName || '[Name]'}${companyName ? ` from ${companyName}` : ''}.
Email: ${senderEmail || '[Email Address]'}
${senderPhone ? `Phone: ${senderPhone}\n` : ''}
Regarding: ${opportunityTitle || 'Business Management In-Service / Opportunity'}

Message:
${message || 'Please let us know your availability for an interview or discussion.'}

Best regards,
${senderName || 'Hiring Team'}`;
  };

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactInfo.email
  )}&su=${encodeURIComponent(getSubject())}&body=${encodeURIComponent(getFormattedBody())}`;

  const outlookWebUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    contactInfo.email
  )}&subject=${encodeURIComponent(getSubject())}&body=${encodeURIComponent(getFormattedBody())}`;

  const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    getSubject()
  )}&body=${encodeURIComponent(getFormattedBody())}`;

  // Direct Form Submit via FormSubmit AJAX service
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          phone: senderPhone || 'Not provided',
          company: companyName || 'Not provided',
          role_subject: opportunityTitle || 'Opportunity Inquiry',
          message: message,
          _subject: `New Portfolio Message from ${senderName}: ${opportunityTitle || 'Opportunity'}`,
          _replyto: senderEmail,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setStatus('success');
        setStatusMessage(
          `Your message was successfully sent to ${contactInfo.email}! Sinalo will respond directly to ${senderEmail}.`
        );
      } else {
        // In case service requires confirmation or blocked
        setStatus('error');
        setStatusMessage(
          'Direct transmission was delayed. You can instantly send through Gmail or your email app below!'
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        'Direct connection was blocked or offline. Use one of our 1-click webmail launchers below!'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setStatus('idle');
    setStatusMessage('');
  };

  const handleCopyDraft = () => {
    const fullDraft = `To: ${contactInfo.email}\nSubject: ${getSubject()}\n\n${getFormattedBody()}`;
    handleCopy(fullDraft, 'fullDraft');
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5F564F] mb-1 font-serif-title">
            <StarSparkle size={13} className="text-[#171412]" />
            <span>Direct Communication &amp; Recruitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title text-[#171412] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4038] mt-1.5 max-w-2xl">
            Open to in-service training, administration, and entry-level business operations opportunities in Cape Town. Send a message directly or connect via LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details & Quick Launchers (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Address Card */}
            <div className="p-5 rounded-2xl bg-[#CFC5BA]/60 border border-[#2E2824]/25 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-[#171412]">
                  <div className="w-8 h-8 rounded-xl bg-[#2E2824]/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#171412]" />
                  </div>
                  <div>
                    <h3 className="font-serif-title font-bold text-sm uppercase tracking-wider">
                      Direct Email
                    </h3>
                    <span className="text-[11px] text-[#5F564F]">Primary contact channel</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/20 text-xs sm:text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-bold text-[#171412] hover:underline truncate mr-2"
                >
                  {contactInfo.email}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-1.5 rounded-lg hover:bg-[#2E2824]/10 text-[#3D3631] cursor-pointer shrink-0 transition-colors"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-800 font-semibold">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Direct email launch buttons */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=Business%20Management%20Opportunity%20-%20Sinalo%20Kekana`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#171412] text-[#D7CEC5] text-xs font-semibold hover:bg-[#2E2824] transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D7CEC5]" />
                  <span>Compose in Gmail (Web)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={`mailto:${contactInfo.email}?subject=Business%20Management%20Opportunity%20-%20Sinalo%20Kekana`}
                  className="w-full inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#2E2824]/10 hover:bg-[#2E2824]/20 text-[#171412] text-xs font-semibold border border-[#2E2824]/25 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Mail App (Outlook / Apple Mail)</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            {contactInfo.linkedin && (
              <div className="p-5 rounded-2xl bg-[#CFC5BA]/60 border border-[#2E2824]/25 space-y-3">
                <div className="flex items-center gap-2.5 text-[#171412]">
                  <div className="w-8 h-8 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-title font-bold text-sm uppercase tracking-wider">
                      LinkedIn Network
                    </h3>
                    <span className="text-[11px] text-[#5F564F]">Professional profile &amp; messaging</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/20 text-xs sm:text-sm">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#171412] hover:text-[#0A66C2] hover:underline truncate mr-2"
                  >
                    linkedin.com/in/sinalo-kekana-b97116249
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg hover:bg-[#2E2824]/10 text-[#0A66C2] cursor-pointer shrink-0"
                    title="Open LinkedIn profile in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Location & Availability Card */}
            <div className="p-5 rounded-2xl bg-[#CFC5BA]/40 border border-[#2E2824]/20 space-y-3 text-xs text-[#3D3631]">
              <div className="flex items-center gap-2 font-medium text-[#171412]">
                <MapPin className="w-4 h-4 text-[#171412] shrink-0" />
                <span>Cape Town 7455, Western Cape, South Africa</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Immediate Availability (In-Service Training &bull; Employment)</span>
              </div>
              <div className="pt-2 border-t border-[#2E2824]/15 text-[11px] leading-relaxed text-[#5F564F]">
                Active daily email monitoring for internship opportunities, administrative positions, and interview invitations.
              </div>
            </div>
          </div>

          {/* Right Column: Direct Opportunity Message Form (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#CFC5BA]/50 border border-[#2E2824]/25 relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif-title font-bold text-base sm:text-lg text-[#171412]">
                Send an Opportunity Message
              </h3>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#2E2824]/10 text-[#171412] font-semibold">
                Delivers to sinalokekana04@gmail.com
              </span>
            </div>
            <p className="text-xs text-[#4A4038] mb-5">
              Fill in your contact info and message. It will be sent directly to Sinalo&apos;s inbox so she can reply directly to you.
            </p>

            {/* Success State Banner */}
            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-emerald-50/90 border border-emerald-300 text-emerald-950 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif-title font-bold text-base text-emerald-900">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs mt-1 leading-relaxed text-emerald-800">
                      {statusMessage}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Inquiry</span>
                  </button>

                  <a
                    href={gmailWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    <span>Also open in Gmail</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4 text-xs sm:text-sm">
                {/* Status Notice if previous submit failed */}
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 flex items-start gap-2.5 text-xs">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-900">{statusMessage}</p>
                      <p className="mt-1 text-[11px] text-amber-800">
                        You can still send instantly using the <strong>Gmail Web</strong> button below.
                      </p>
                    </div>
                  </div>
                )}

                {/* Sender Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                      Your Name <span className="text-rose-700">*</span>
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
                      Your Email Address <span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. s.dlamini@company.co.za"
                      className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                      Phone / WhatsApp <span className="text-[10px] text-[#5F564F] normal-case">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="e.g. +27 82 123 4567"
                      className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                      Company / Organization <span className="text-[10px] text-[#5F564F] normal-case">(Optional)</span>
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

                {/* Subject / Position */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                    Subject / Position Title
                  </label>
                  <input
                    type="text"
                    value={opportunityTitle}
                    onChange={(e) => setOpportunityTitle(e.target.value)}
                    placeholder="e.g. Junior Administrative Officer / In-Service Training"
                    className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                  />
                </div>

                {/* Message text */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171412] font-serif-title mb-1">
                    Message Details <span className="text-rose-700">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding the role, location, requirements, or proposed interview schedule..."
                    className="w-full p-2.5 rounded-xl bg-[#D7CEC5] border border-[#2E2824]/30 text-[#171412] placeholder-[#5F564F]/70 focus:outline-hidden focus:border-[#171412]"
                  />
                </div>

                {/* Primary Submit Button */}
                <div className="space-y-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#171412] text-[#D7CEC5] font-semibold text-xs sm:text-sm hover:bg-[#2E2824] transition-colors cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                  {/* Alternative Instant Email Launchers */}
                  <div className="pt-3 border-t border-[#2E2824]/20">
                    <p className="text-[11px] font-semibold text-[#5F564F] mb-2">
                      Or launch directly with your message pre-filled:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <a
                        href={gmailWebUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#2E2824]/10 hover:bg-[#2E2824]/20 text-[#171412] text-xs font-medium border border-[#2E2824]/20 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-rose-700" />
                        <span>Gmail (Web)</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>

                      <a
                        href={outlookWebUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#2E2824]/10 hover:bg-[#2E2824]/20 text-[#171412] text-xs font-medium border border-[#2E2824]/20 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-700" />
                        <span>Outlook (Web)</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        className="inline-flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#2E2824]/10 hover:bg-[#2E2824]/20 text-[#171412] text-xs font-medium border border-[#2E2824]/20 transition-colors cursor-pointer"
                      >
                        {copiedField === 'fullDraft' ? (
                          <span className="flex items-center gap-1 text-emerald-800 font-bold">
                            <Check className="w-3 h-3" /> Copied!
                          </span>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Full Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
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
