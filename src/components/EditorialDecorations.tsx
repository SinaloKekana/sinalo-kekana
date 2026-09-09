import React from 'react';

export const StarSparkle: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = 'text-[#2E2824]', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path d="M12 0L14.2 9.6L24 12L14.2 14.4L12 24L9.8 14.4L0 12L9.8 9.6L12 0Z" />
  </svg>
);

export const ThinCrosshair: React.FC<{
  className?: string;
}> = ({ className = 'text-[#2E2824]/60' }) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <line x1="14" y1="0" x2="14" y2="28" />
    <line x1="0" y1="14" x2="28" y2="14" />
    <path d="M14 6L15.5 12.5L22 14L15.5 15.5L14 22L12.5 15.5L6 14L12.5 12.5L14 6Z" fill="currentColor" />
  </svg>
);

export const CornerFrameLine: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="absolute left-0 top-0 w-16 h-[1px] bg-[#2E2824]/40" />
    <div className="absolute left-0 top-0 w-[1px] h-16 bg-[#2E2824]/40" />
    <div className="absolute -left-1.5 -top-1.5">
      <StarSparkle size={12} className="text-[#2E2824]" />
    </div>
  </div>
);
