import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface GoogleAICertificateGraphicProps {
  className?: string;
  interactive?: boolean;
}

export const GoogleAICertificateGraphic: React.FC<GoogleAICertificateGraphicProps> = ({
  className = '',
  interactive = true,
}) => {
  const verifyUrl = 'https://coursera.org/verify/specialization/K177YOS62II9';

  return (
    <div
      className={`relative w-full bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-xl overflow-hidden font-sans select-none ${className}`}
      style={{ aspectRatio: '1.414 / 1' }}
    >
      {/* Background Guilloché / Decorative Security Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
        viewBox="0 0 800 565"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="700" cy="480" r="180" stroke="#0056D2" strokeWidth="1" />
        <circle cx="700" cy="480" r="150" stroke="#0056D2" strokeWidth="1" />
        <circle cx="700" cy="480" r="120" stroke="#0056D2" strokeWidth="1" />
        <circle cx="700" cy="480" r="90" stroke="#0056D2" strokeWidth="1" />
        <circle cx="700" cy="480" r="60" stroke="#0056D2" strokeWidth="1" />
        <circle cx="700" cy="480" r="30" stroke="#0056D2" strokeWidth="1" />
        <path
          d="M 600 565 C 650 480 750 480 800 565"
          stroke="#4285F4"
          strokeWidth="1.5"
        />
        <path
          d="M 550 565 C 620 450 780 450 800 520"
          stroke="#34A853"
          strokeWidth="1"
        />
      </svg>

      {/* Outer Certificate Border */}
      <div className="absolute inset-2.5 sm:inset-3.5 border border-slate-200 pointer-events-none rounded-xl" />

      {/* Main Certificate Content Grid */}
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-7 md:p-8 lg:p-10">
        
        {/* Top Section: Seal + Google Logo + Signature */}
        <div className="flex items-start justify-between gap-4">
          
          {/* Left: Coursera Specialization Seal & Ribbon */}
          <div className="flex flex-col items-center">
            {/* Circular Seal */}
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-slate-400 bg-white flex flex-col items-center justify-center p-1 shadow-xs">
              <div className="w-full h-full rounded-full border border-dashed border-slate-400 flex flex-col items-center justify-center text-center">
                <span className="text-[6px] sm:text-[8px] font-bold tracking-tighter text-slate-500 uppercase leading-none">
                  Specialization
                </span>
                <span className="text-[8px] sm:text-[11px] font-extrabold text-[#0056D2] tracking-tight my-0.5">
                  coursera
                </span>
                <span className="text-[5px] sm:text-[7px] font-semibold text-slate-400 uppercase leading-none">
                  Certificate
                </span>
              </div>
            </div>

            {/* 5 Courses Ribbon */}
            <div className="-mt-1.5 sm:-mt-2 px-2.5 py-0.5 rounded-xs bg-[#1E293B] text-white text-[7px] sm:text-[9px] font-bold tracking-wide shadow-xs uppercase">
              5 Courses
            </div>
          </div>

          {/* Center: Google 4-Color Logo */}
          <div className="flex flex-col items-center">
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
          </div>

          {/* Right: Signature & Signatory */}
          <div className="text-right flex flex-col items-end">
            <div className="font-serif italic text-sm sm:text-base md:text-lg text-slate-800 tracking-wider">
              Amanda Brophy
            </div>
            <div className="h-[1px] w-28 sm:w-36 bg-slate-300 my-0.5 sm:my-1" />
            <div className="text-[8px] sm:text-[10px] font-bold text-slate-900 leading-tight">
              Amanda Brophy
            </div>
            <div className="text-[7px] sm:text-[9px] text-slate-600 leading-tight max-w-[140px]">
              Global Director of Google Career Certificates
            </div>
          </div>
        </div>

        {/* Middle Section: Recipient & Qualification */}
        <div className="grid grid-cols-12 gap-3 sm:gap-6 my-auto pt-2 sm:pt-4">
          
          {/* Left Sub-column: 5 Courses List */}
          <div className="col-span-4 border-r border-slate-200 pr-2 sm:pr-4 flex flex-col justify-center">
            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Curriculum (5 Courses)
            </span>
            <ul className="space-y-0.5 sm:space-y-1 text-[7px] sm:text-[9px] text-slate-700 font-medium">
              <li className="flex items-center gap-1 truncate">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#34A853] shrink-0" />
                <span>Introduction to AI</span>
              </li>
              <li className="flex items-center gap-1 truncate">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#34A853] shrink-0" />
                <span>Maximize Productivity With AI Tools</span>
              </li>
              <li className="flex items-center gap-1 truncate">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#34A853] shrink-0" />
                <span>Discover the Art of Prompting</span>
              </li>
              <li className="flex items-center gap-1 truncate">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#34A853] shrink-0" />
                <span>Use AI Responsibly</span>
              </li>
              <li className="flex items-center gap-1 truncate">
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#34A853] shrink-0" />
                <span>Stay Ahead of the AI Curve</span>
              </li>
            </ul>
          </div>

          {/* Right Sub-column: Recipient Details */}
          <div className="col-span-8 pl-1 sm:pl-3 flex flex-col justify-center">
            <div className="text-[8px] sm:text-[10px] text-slate-500 font-medium">
              Jun 23, 2026
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight mt-0.5">
              Sinalo Kekana
            </h3>
            <p className="text-[8px] sm:text-[10px] text-slate-600 mt-0.5 font-medium">
              has successfully completed the online Specialization
            </p>
            <h4 className="text-sm sm:text-lg md:text-xl font-extrabold text-[#1E293B] tracking-tight mt-1 sm:mt-1.5 text-blue-950">
              Google AI Essentials
            </h4>
            <p className="text-[6.5px] sm:text-[8.5px] md:text-[9.5px] text-slate-600 leading-relaxed mt-1 sm:mt-2 max-w-lg">
              Those who earn the Google AI Essentials Certificate have completed five courses, developed by Google, featuring hands-on practice designed to build AI skills. They are competent in using AI tools responsibly and improving productivity across their workflow.
            </p>
          </div>
        </div>

        {/* Bottom Section: Formal Accreditation & Verification */}
        <div className="pt-2 border-t border-slate-200 flex items-end justify-between gap-3 text-[6px] sm:text-[8px] text-slate-500">
          <div className="max-w-md leading-tight">
            This certificate attests to the learner&apos;s completion of an online program delivered via Coursera.
          </div>

          <div className="text-right shrink-0 flex flex-col items-end">
            <div className="flex items-center gap-1 text-[7px] sm:text-[9px] font-semibold text-slate-700">
              <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#0056D2]" />
              <span>Verify certificate:</span>
            </div>
            {interactive ? (
              <a
                href={verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0056D2] hover:underline font-mono text-[7px] sm:text-[8.5px] inline-flex items-center gap-0.5 font-bold"
              >
                <span>coursera.org/verify/...K177YOS62II9</span>
                <ExternalLink className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              </a>
            ) : (
              <span className="text-[#0056D2] font-mono text-[7px] sm:text-[8.5px]">
                coursera.org/verify/...K177YOS62II9
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
