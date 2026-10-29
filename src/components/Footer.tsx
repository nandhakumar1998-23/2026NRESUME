import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060911] border-t border-white/[0.08] py-12">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/[0.06]">
          <div>
            <a
              href="#hero"
              className="font-display text-lg font-bold tracking-tight text-[#F8FAFC] hover:text-[#F5A623] transition-colors"
            >
              {PERSONAL_INFO.brandMark}
            </a>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-[#F5A623] transition-colors whitespace-nowrap">
              About
            </a>
            <a href="#skills" className="hover:text-[#F5A623] transition-colors whitespace-nowrap">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#F5A623] transition-colors whitespace-nowrap">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#F5A623] transition-colors whitespace-nowrap">
              Projects
            </a>
            <a href="#services" className="hover:text-[#F5A623] transition-colors whitespace-nowrap">
              Services
            </a>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Nandha_Kumar_B_Resume_2026.pdf"
              className="hover:text-[#F5A623] transition-colors whitespace-nowrap"
            >
              Resume PDF
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} Nandha Kumar B. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap"
            >
              Email
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
