import React, { useEffect, useState } from 'react';
import { Button, Drawer, IconButton } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenInterview: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterview }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#060911]/88 backdrop-blur-xl border-b border-white/[0.08]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-tight text-[#F8FAFC] hover:text-[#F5A623] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A623]"
          >
            {PERSONAL_INFO.brandMark}
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:origin-left after:bg-[#F5A623] after:transition-transform after:duration-200 ${
                    isActive
                      ? 'text-[#F8FAFC] after:scale-x-100'
                      : 'text-slate-300 hover:text-[#F8FAFC] after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:block">
              <Button
                variant="contained"
                color="primary"
                onClick={onOpenInterview}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                }}
              >
                Schedule Interview
              </Button>
            </div>

            <div className="md:hidden">
              <IconButton
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                sx={{
                  width: 44,
                  height: 44,
                  color: '#F8FAFC',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                }}
              >
                <Menu className="w-5 h-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </header>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 'min(310px, 85vw)',
              backgroundColor: '#090E1A',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
          },
        }}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <span className="font-display text-base font-bold text-[#F8FAFC] whitespace-nowrap">
              {PERSONAL_INFO.brandMark}
            </span>
            <IconButton
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              sx={{ color: '#94A3B8', width: 40, height: 40 }}
            >
              <X className="w-5 h-5" />
            </IconButton>
          </div>

          <nav aria-label="Mobile navigation" className="mt-6 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-base font-medium text-slate-200 hover:text-[#F5A623] border-b border-white/[0.06] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="py-3.5 text-base font-medium text-slate-200 hover:text-[#F5A623] border-b border-white/[0.06] transition-colors whitespace-nowrap"
            >
              Services
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col gap-3">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              setMobileOpen(false);
              onOpenInterview();
            }}
            sx={{ py: 1.4, borderRadius: '9999px', fontWeight: 600 }}
          >
            Schedule Interview
          </Button>
          <a
            href={PERSONAL_INFO.resumePdfUrl}
            download="Nandha_Kumar_B_Resume_2026.pdf"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center py-2.5 px-4 text-sm font-medium text-slate-300 hover:text-white border border-white/15 rounded-full transition-colors whitespace-nowrap"
          >
            Download Resume (PDF)
          </a>
        </div>
      </Drawer>
    </>
  );
};
