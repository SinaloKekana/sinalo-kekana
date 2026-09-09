import React from 'react';
import {
  Mail,
  MapPin,
  FileText,
  ChevronUp,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { StarSparkle } from './EditorialDecorations';

interface FooterProps {
  onOpenCVModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCVModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12100E] text-[#A69B91] py-12 border-t border-[#26211D] no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#26211D]">
          
          {/* Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[#D7CEC5] text-[#171412] font-bold flex items-center justify-center text-sm shadow-sm">
                <StarSparkle size={16} className="text-[#171412]" />
              </div>
              <span className="font-serif-title font-bold text-lg text-[#D7CEC5] tracking-wider">
                {contactInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A69B91] leading-relaxed max-w-sm">
              Business Management Graduate (N6 Completed &bull; College of Cape Town). Available for administrative, operational, and customer service roles.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cape Town 7455 &bull; Immediate Start Available</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D7CEC5] font-serif-title">
              Presentation Slides
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#overview" className="hover:text-[#D7CEC5] transition-colors">
                  01. Cover Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D7CEC5] transition-colors">
                  02. Introduction
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#D7CEC5] transition-colors">
                  03. Education
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-[#D7CEC5] transition-colors">
                  04. Credentials &amp; Certifications
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#D7CEC5] transition-colors">
                  05. Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#D7CEC5] transition-colors">
                  06. Skills &amp; Proficiencies
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D7CEC5] transition-colors">
                  07. Work &amp; Experience
                </a>
              </li>
              <li>
                <a href="#strengths" className="hover:text-[#D7CEC5] transition-colors">
                  08. Strengths &amp; Languages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D7CEC5] transition-colors">
                  09. Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Links (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D7CEC5] font-serif-title">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D7CEC5]" />
                <span>Cape Town 7455, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D7CEC5]" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[#D7CEC5] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.linkedin && (
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D7CEC5] transition-colors flex items-center gap-1"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              )}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenCVModal}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#24201D] text-[#D7CEC5] text-xs font-semibold hover:bg-[#342E29] border border-[#3A332E] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Full Curriculum Vitae</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#847970]">
            &copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved. Professional Portfolio &amp; Curriculum Vitae.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D7CEC5] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
