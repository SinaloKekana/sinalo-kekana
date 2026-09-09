import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  Copy,
  Check,
  ArrowDown,
  FileText,
  Upload,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';
import { StarSparkle, ThinCrosshair } from './EditorialDecorations';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    photoUrl,
    updatePhotoFromFile,
  } = usePhoto();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleFrameDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await updatePhotoFromFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await updatePhotoFromFile(e.target.files[0]);
    }
  };

  return (
    <section
      id="overview"
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Presentation Slide Card (Cover) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-[#2E2824]/20 shadow-2xl overflow-hidden"
      >
        {/* Top-Right Decorative Crosshair Star matching the reference */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 pointer-events-none">
          <ThinCrosshair className="text-[#2E2824]/70" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Stately Serif Title & Editorial Details */}
          <div className="lg:col-span-7 space-y-6 relative">
            {/* L-shaped thin framing line with 4-point star accent */}
            <div className="relative pl-6 sm:pl-8">
              {/* Vertical line running down */}
              <div className="absolute left-0 top-0 bottom-6 w-[1.5px] bg-[#2E2824]/40" />
              {/* Corner 4-pointed star */}
              <div className="absolute -left-[7px] bottom-4">
                <StarSparkle size={15} className="text-[#2E2824]" />
              </div>
              {/* Horizontal line extending outward */}
              <div className="absolute left-0 bottom-6 w-16 h-[1.5px] bg-[#2E2824]/40" />

              {/* Massive All-Caps Serif Name matching "CHINENYE NNENNA AGBO" */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#171412] font-serif-title leading-[0.92]">
                  SINALO
                  <br />
                  KEKANA
                </h1>
              </div>

              {/* Sub-headline & Academic Accreditation */}
              <div className="mt-4 pt-3 border-t border-[#2E2824]/25 max-w-md">
                <p className="text-xs sm:text-sm text-[#5F564F]">
                  College of Cape Town &bull; Cape Town, South Africa
                </p>
              </div>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-2 pl-6 sm:pl-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171412] text-[#D7CEC5] text-xs sm:text-sm font-semibold hover:bg-[#2E2824] transition-colors cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E2824]/10 text-[#171412] text-xs sm:text-sm font-semibold border border-[#2E2824]/30 hover:bg-[#2E2824]/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Information Chips */}
            <div className="pt-3 pl-6 sm:pl-8 flex flex-wrap gap-2 text-xs text-[#3D3631]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E2824]/10 border border-[#2E2824]/20">
                <MapPin className="w-3.5 h-3.5 text-[#2E2824]" />
                <span>Cape Town 7455</span>
              </span>

              <button
                onClick={() => handleCopy(contactInfo.email)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E2824]/10 border border-[#2E2824]/20 hover:bg-[#2E2824]/20 transition-colors cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#2E2824]" />
                <span>{contactInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-700" />
                ) : (
                  <Copy className="w-3 h-3 text-[#2E2824]/70" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Framed Studio Portrait (Uncropped as it is) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[320px] sm:max-w-[360px] group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* Outer frame displaying portrait cleanly as it is */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleFrameDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative rounded-2xl overflow-hidden border-2 border-[#171412] bg-[#0c1424] shadow-2xl transition-all cursor-pointer ${
                  isDragging
                    ? 'ring-4 ring-[#171412] scale-[0.99] border-dashed'
                    : 'hover:border-[#3D3631]'
                }`}
                title="Click or drop your photo file to update directly"
              >
                <img
                  src={photoUrl}
                  alt="Sinalo Kekana"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />

                {/* Drag-over overlay */}
                {isDragging && (
                  <div className="absolute inset-0 bg-[#171412]/85 backdrop-blur-xs flex flex-col items-center justify-center text-[#D7CEC5] p-4 text-center z-30">
                    <Upload className="w-8 h-8 mb-2 animate-bounce" />
                    <p className="text-xs font-bold font-serif-title uppercase tracking-wider">
                      Drop picture to set as photo
                    </p>
                  </div>
                )}
              </div>

              {/* Action bar below portrait */}
              <div className="mt-3 flex items-center justify-between w-full text-xs text-[#5F564F]">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2E2824]/10 hover:bg-[#2E2824]/20 text-[#171412] font-semibold transition-colors cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload / Replace Photo</span>
                </button>
                <span className="text-[11px] text-[#5F564F]">Original &bull; Uncropped</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue indicator */}
        <div className="mt-8 pt-4 border-t border-[#2E2824]/20 flex items-center justify-between text-xs text-[#5F564F]">
          <span>Portfolio Slide 01 / 07</span>
          <a
            href="#about"
            className="flex items-center gap-1.5 hover:text-[#171412] transition-colors"
          >
            <span>Continue to Introduction</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
