import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileText,
  Mail,
  GraduationCap,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { StarSparkle } from './EditorialDecorations';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cover', href: '#overview' },
    { label: 'Introduction', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Strengths', href: '#strengths' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-[#161412]/95 backdrop-blur-md text-[#D7CEC5] shadow-2xl border-b border-[#2E2824]'
          : 'bg-[#161412] text-[#D7CEC5] border-b border-[#2E2824]/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Editorial Brand */}
          <a
            href="#overview"
            id="nav-logo"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#D7CEC5] border border-[#D7CEC5] flex items-center justify-center text-[#171412] font-bold text-base shadow-sm group-hover:scale-105 transition-all">
              <StarSparkle size={18} className="text-[#171412]" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold font-serif-title uppercase tracking-widest text-[#D7CEC5] block leading-none">
                SINALO KEKANA
              </span>
              <span className="text-[10px] text-[#A69B91] uppercase tracking-wider block mt-1">
                Business Management &bull; Cape Town
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#24201D] border border-[#3A332E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#C5BBAF] hover:text-[#FFFFFF] hover:bg-[#342E29] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D7CEC5] text-[#171412] text-xs font-semibold hover:bg-white transition-colors cursor-pointer shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>

            <a
              href={`mailto:${contactInfo.email}`}
              className="p-2.5 rounded-full bg-[#24201D] text-[#D7CEC5] hover:text-white border border-[#3A332E] hover:bg-[#342E29] transition-colors"
              title="Email Sinalo Kekana"
            >
              <Mail className="w-4 h-4 text-[#D7CEC5]" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCVModal}
              className="px-3 py-1.5 rounded-full bg-[#D7CEC5] text-[#171412] text-xs font-semibold"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#D7CEC5] hover:bg-[#24201D] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-b border-[#2E2824] bg-[#161412] px-4 pt-2 pb-6 space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#D7CEC5] hover:bg-[#24201D]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#2E2824] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full py-2.5 rounded-xl bg-[#D7CEC5] text-[#171412] text-xs font-semibold text-center"
              >
                View Curriculum Vitae (Print/PDF)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
