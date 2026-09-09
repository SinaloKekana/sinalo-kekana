import React from 'react';

interface CapacitiBadgeGraphicProps {
  className?: string;
  size?: number | string;
}

export const CapacitiBadgeGraphic: React.FC<CapacitiBadgeGraphicProps> = ({
  className = '',
  size = 280,
}) => {
  // Generate a mathematically smooth 28-crest scalloped circular path
  const numScallops = 28;
  const cx = 200;
  const cy = 200;
  const rBase = 186;
  const rAmp = 7.5;

  let scallopPath = '';
  const totalPoints = numScallops * 2;
  for (let i = 0; i <= totalPoints; i++) {
    const angle = (i * Math.PI) / numScallops - Math.PI / 2;
    const r = i % 2 === 0 ? rBase + rAmp : rBase - rAmp;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) {
      scallopPath += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
    } else {
      // Use cubic bezier for gentle rounded waves
      const prevAngle = ((i - 1) * Math.PI) / numScallops - Math.PI / 2;
      const prevR = (i - 1) % 2 === 0 ? rBase + rAmp : rBase - rAmp;
      const midAngle = (prevAngle + angle) / 2;
      const midR = (prevR + r) / 2;
      const cpX = cx + midR * Math.cos(midAngle);
      const cpY = cy + midR * Math.sin(midAngle);
      scallopPath += ` Q ${cpX.toFixed(2)} ${cpY.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
  }
  scallopPath += ' Z';

  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={`select-none drop-shadow-lg ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CAPACITI Artificial Intelligence Bootcamp (AI) Completion Badge powered by Coursera"
    >
      <defs>
        {/* Soft shadow filter */}
        <filter id="badge-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0A2540" floodOpacity="0.18" />
        </filter>

        {/* Clip path for the bottom blue curved banner */}
        <clipPath id="inner-circle-clip">
          <circle cx="200" cy="200" r="172" />
        </clipPath>
      </defs>

      {/* Scalloped outer border */}
      <path
        d={scallopPath}
        fill="#FFFFFF"
        stroke="#0056D2"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner concentric wavy accent ring */}
      <circle
        cx="200"
        cy="200"
        r="174"
        fill="#FFFFFF"
        stroke="#0056D2"
        strokeWidth="1.75"
        strokeOpacity="0.85"
      />

      {/* Main white inner badge background */}
      <circle cx="200" cy="200" r="170" fill="#FFFFFF" />

      {/* CAPACITI BRAND HEADER */}
      <g transform="translate(75, 76)">
        {/* Capaciti Woven Logo Icon */}
        <g transform="translate(0, 2) scale(0.64)">
          {/* Background diamond */}
          <rect x="0" y="0" width="50" height="50" rx="8" fill="#141E34" />
          
          {/* Interlaced ribbons */}
          <path
            d="M 12 12 L 25 25 L 12 38 M 20 12 L 33 25 L 20 38"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 38 12 L 25 25 L 38 38 M 30 12 L 17 25 L 30 38"
            fill="none"
            stroke="#FF4F40"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="25" r="4" fill="#FFFFFF" />
        </g>

        {/* CAPACITI Wordmark */}
        <text
          x="44"
          y="26"
          fill="#141E34"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="26"
          fontWeight="800"
          letterSpacing="4.5"
        >
          CAPACITI
        </text>
      </g>

      {/* BADGE TITLE */}
      <g textAnchor="middle">
        <text
          x="200"
          y="198"
          fill="#171412"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="24"
          fontWeight="800"
          letterSpacing="-0.3"
        >
          Artificial Intelligence
        </text>

        <text
          x="200"
          y="238"
          fill="#171412"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="26"
          fontWeight="800"
          letterSpacing="-0.3"
        >
          Bootcamp (AI)
        </text>
      </g>

      {/* BOTTOM BLUE WAVE: "powered by coursera" */}
      <g clipPath="url(#inner-circle-clip)">
        {/* Curved blue section */}
        <path
          d="M 10 295 Q 120 280 200 288 Q 280 296 390 282 L 390 400 L 10 400 Z"
          fill="#0056D2"
        />

        {/* Highlight wave accent */}
        <path
          d="M 10 295 Q 120 280 200 288 Q 280 296 390 282"
          fill="none"
          stroke="#3884FF"
          strokeWidth="2.5"
          opacity="0.4"
        />

        {/* "powered by" label */}
        <text
          x="200"
          y="322"
          fill="#FFFFFF"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="14"
          fontWeight="600"
          letterSpacing="0.2"
        >
          powered by
        </text>

        {/* "coursera" wordmark */}
        <g transform="translate(136, 332)">
          <text
            x="64"
            y="22"
            fill="#FFFFFF"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="25"
            fontWeight="800"
            letterSpacing="-0.5"
          >
            coursera
          </text>
        </g>
      </g>
    </svg>
  );
};
