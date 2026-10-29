import React from 'react';
import { MARQUEE_TECH } from '../data/portfolioData';

export const MarqueeRibbon: React.FC = () => {
  const repeated = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div
      aria-label="Core technology stack"
      className="relative border-y border-white/[0.08] bg-[#080D18]/80 py-4 overflow-hidden select-none"
    >
      <div className="animate-helix-marquee flex items-center gap-10 whitespace-nowrap">
        {repeated.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="inline-flex items-center gap-10 text-xs sm:text-sm font-medium tracking-wide text-slate-300"
          >
            <span>{tech}</span>
            <span aria-hidden="true" className="text-[#F5A623]/70">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
