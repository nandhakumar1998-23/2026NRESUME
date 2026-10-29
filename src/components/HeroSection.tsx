import React, { useCallback, useEffect, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { ArrowDownRight, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_METRICS, HERO_PHOTOS, PERSONAL_INFO } from '../data/portfolioData';
import { HelixCanvas } from './HelixCanvas';
import { ResilientImage } from './ResilientImage';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HeroSection: React.FC = () => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const nextPhoto = useCallback(() => {
    setPhotoIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
  }, []);

  const prevPhoto = useCallback(() => {
    setPhotoIndex((prev) => (prev - 1 + HERO_PHOTOS.length) % HERO_PHOTOS.length);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const timer = window.setInterval(nextPhoto, 5500);
    return () => window.clearInterval(timer);
  }, [nextPhoto]);

  const currentPhoto = HERO_PHOTOS[photoIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden"
    >
      {/* 3D Scrolltide Helix Backdrop */}
      <HelixCanvas />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 flex-1 flex flex-col justify-center">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
              className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide mb-5"
            >
              <span>Software Engineer</span>
              <span aria-hidden="true" className="mx-2.5 text-[#F5A623]">
                ·
              </span>
              <span>Full-Stack &amp; Next.js Specialist</span>
              <span aria-hidden="true" className="mx-2.5 text-slate-600">
                ·
              </span>
              <span>Coimbatore, India</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="font-display font-bold tracking-tight text-[#F8FAFC] leading-[1.06] max-w-2xl"
              style={{ fontSize: 'clamp(2.35rem, 4.3vw, 3.85rem)' }}
            >
              Nandha Kumar B<span className="text-[#F5A623]">.</span>
              <span className="block mt-2 text-slate-200 font-semibold" style={{ fontSize: 'clamp(1.45rem, 2.5vw, 2.25rem)' }}>
                Architecting fast, scalable web, mobile, and search-first products.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="mt-6 text-[15px] sm:text-base text-slate-300/90 leading-[1.7] max-w-[60ch]"
            >
              {PERSONAL_INFO.heroIntro}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE_OUT_EXPO }}
              className="mt-4 text-xs sm:text-[13px] font-mono text-slate-400"
            >
              {PERSONAL_INFO.specialistLine}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease: EASE_OUT_EXPO }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <Button
                component="a"
                href="#projects"
                variant="contained"
                color="primary"
                endIcon={<ArrowDownRight className="w-4 h-4" />}
                sx={{
                  px: 3.25,
                  py: 1.45,
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                }}
              >
                Explore Selected Work
              </Button>

              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Nandha_Kumar_B_Resume_2026.pdf"
                className="group inline-flex items-center gap-2 py-2.5 px-2 text-sm font-semibold text-[#F8FAFC] hover:text-[#F5A623] transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <ChevronRight className="w-4 h-4 text-[#F5A623] transition-transform duration-150 group-hover:translate-x-0.5" />
                <span>Download Resume</span>
                <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F5A623] transition-colors" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 py-2.5 px-2 text-sm font-medium text-slate-300 hover:text-[#F8FAFC] transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <ChevronRight className="w-4 h-4 text-[#F5A623] transition-transform duration-150 group-hover:translate-x-0.5" />
                <span>Hire / Connect</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.18, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[390px] lg:max-w-[410px] h-[420px] sm:h-[460px] lg:h-full lg:min-h-[450px] rounded-2xl overflow-hidden border border-white/10 bg-[#0B111E]">
              {HERO_PHOTOS.map((photo, idx) => {
                const active = idx === photoIndex;
                return (
                  <div
                    key={photo.src}
                    aria-hidden={!active}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      active ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
                    }`}
                  >
                    <ResilientImage
                      src={photo.src}
                      alt={photo.alt}
                      fallbackTitle={PERSONAL_INFO.name}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: photo.objectPosition }}
                    />
                  </div>
                );
              })}

              {/* Measured Contrast Scrim for WCAG AA Legibility */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#060911]/92 via-[#060911]/30 to-transparent" />

              {/* Bottom Caption & Photo Switcher */}
              <div className="absolute inset-x-0 bottom-0 z-30 p-5 sm:p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-base font-semibold text-[#F8FAFC]">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">{currentPhoto.caption}</p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <IconButton
                    onClick={prevPhoto}
                    aria-label="Previous portrait photo"
                    size="small"
                    sx={{
                      width: 36,
                      height: 36,
                      color: '#F8FAFC',
                      backgroundColor: 'rgba(6, 9, 17, 0.65)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      '&:hover': {
                        backgroundColor: 'rgba(245, 166, 35, 0.2)',
                        borderColor: '#F5A623',
                      },
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </IconButton>
                  <IconButton
                    onClick={nextPhoto}
                    aria-label="Next portrait photo"
                    size="small"
                    sx={{
                      width: 36,
                      height: 36,
                      color: '#F8FAFC',
                      backgroundColor: 'rgba(6, 9, 17, 0.65)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      '&:hover': {
                        backgroundColor: 'rgba(245, 166, 35, 0.2)',
                        borderColor: '#F5A623',
                      },
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </IconButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Row Below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: EASE_OUT_EXPO }}
          className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="font-mono tabular-nums text-2xl sm:text-3xl font-medium text-[#F8FAFC] tracking-tight">
                {metric.value}
              </span>
              <span className="mt-1.5 text-sm font-semibold text-slate-200">{metric.label}</span>
              <span className="mt-1 text-xs text-slate-400 leading-relaxed">{metric.context}</span>
            </div>
          ))}
        </motion.div>

        {/* Subtle Helix-inspired Centered Scroll Cue */}
        <div className="hidden md:flex flex-col items-center mt-10 select-none">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-[11px] font-mono tracking-[0.22em] text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>Scroll</span>
            <span className="h-7 w-px bg-gradient-to-b from-[#F5A623]/70 to-transparent transition-transform duration-300 group-hover:scale-y-125 origin-top" />
          </a>
        </div>
      </div>
    </section>
  );
};
