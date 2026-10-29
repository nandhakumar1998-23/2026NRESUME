import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Check, GraduationCap, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ABOUT_CAPABILITIES, EDUCATION_HISTORY, PERSONAL_INFO } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentCapability = ABOUT_CAPABILITIES[activeTab];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#060911]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-mono text-[#F5A623] tracking-wider mb-3">01. About &amp; Background</p>
          <h2
            className="font-display font-bold tracking-tight text-[#F8FAFC]"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
          >
            Engineering products end to end with clarity, speed, and measurable search reach.
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-slate-300/90 leading-[1.7]">
            Software Engineer and Full-Stack Developer based in Coimbatore with 3+ years of hands-on production
            experience across React.js, Next.js, TypeScript, Material UI, Node.js, Django REST Framework, and AWS
            Amplify — leading cross-functional teams from interface design to cloud deployment.
          </p>
        </motion.div>

        {/* Main Split: Interactive Capabilities + Studio Portrait & Education */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left 7 Columns: Interactive Capability Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B111E] p-6 sm:p-9"
          >
            <div>
              {/* Interactive MUI Tabs */}
              <div className="border-b border-white/[0.08]">
                <Tabs
                  value={activeTab}
                  onChange={(_, val: number) => setActiveTab(val)}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="Core engineering disciplines"
                  sx={{
                    minHeight: 44,
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#F5A623',
                      height: 2,
                    },
                    '& .MuiTab-root': {
                      minHeight: 44,
                      px: 2,
                      py: 1.25,
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#94A3B8',
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                      '&.Mui-selected': {
                        color: '#F8FAFC',
                      },
                    },
                  }}
                >
                  {ABOUT_CAPABILITIES.map((cap) => (
                    <Tab key={cap.key} label={cap.label} disableRipple />
                  ))}
                </Tabs>
              </div>

              {/* Animated Capability Content */}
              <div className="mt-7 min-h-[290px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCapability.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                  >
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F8FAFC] leading-snug">
                      {currentCapability.headline}
                    </h3>
                    <p className="mt-3 text-[15px] text-slate-300/90 leading-[1.7]">
                      {currentCapability.blurb}
                    </p>

                    <ul className="mt-6 space-y-3.5">
                      {currentCapability.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-200">
                          <Check className="w-4 h-4 text-[#F5A623] mt-1 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </motion.div>

          {/* Right 5 Columns: Portrait + Academic Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Studio Cutout Portrait Card */}
            <div className="relative h-[300px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-[#111B2E] via-[#0B111E] to-[#060911]">
              <ResilientImage
                src="/assets/Itsme.png"
                alt="Nandha Kumar B — Studio Portrait"
                fallbackTitle={PERSONAL_INFO.name}
                loading="lazy"
                className="h-full w-full object-cover scale-125"
                style={{ objectPosition: 'center 22%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/25 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <p className="font-display text-base font-semibold text-[#F8FAFC]">
                  Team Lead &amp; Full-Stack Engineer
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  React · Next.js · Material UI · AWS Amplify · SEO
                </p>
              </div>
            </div>

            {/* Verified Education Block from Resume */}
            <div className="flex-1 rounded-2xl border border-white/[0.08] bg-[#0B111E] p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-5">
                <GraduationCap className="w-4 h-4 text-[#F5A623]" />
                <h3 className="font-display text-base font-semibold text-[#F8FAFC]">
                  Academic Credentials
                </h3>
              </div>

              <div className="space-y-5">
                {EDUCATION_HISTORY.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className={index > 0 ? 'pt-4 border-t border-white/[0.06]' : ''}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-display text-sm sm:text-[15px] font-semibold text-slate-100">
                        {edu.degree}
                      </h4>
                      <span className="font-mono tabular-nums text-xs text-[#F5A623] whitespace-nowrap shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs sm:text-[13px] text-slate-400">
                      {edu.institution} · {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
