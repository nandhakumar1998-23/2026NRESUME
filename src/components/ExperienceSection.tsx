import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ExperienceSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 65%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#060911] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-mono text-[#F5A623] tracking-wider mb-3">03. Career Trajectory</p>
          <h2
            className="font-display font-bold tracking-tight text-[#F8FAFC]"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
          >
            From startup foundations to leading full-stack engineering teams.
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-slate-300/90 leading-[1.7]">
            Over 3+ years delivering production software, enterprise ERPs, hospitality booking suites, and cloud-native
            platforms across Coimbatore and UK client engagements.
          </p>
        </motion.div>

        {/* Scroll-Driven Vertical Timeline */}
        <div ref={timelineRef} className="relative mt-16 pl-6 sm:pl-10">
          {/* Background Spine */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 bottom-2 w-px bg-white/[0.09]"
          />
          {/* Animated Scroll Progress Spine */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY: smoothProgress }}
            className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[#F5A623] via-[#F5A623] to-[#38BDF8]"
          />

          <div className="space-y-12">
            {WORK_EXPERIENCE.map((job, idx) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                className="relative rounded-2xl border border-white/[0.08] bg-[#0B111E] p-6 sm:p-9 hover:border-white/[0.16] transition-colors duration-200"
              >
                {/* Clean Geometric Timeline Node */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[29px] sm:-left-[45px] top-8 h-2.5 w-2.5 rounded-full border-2 ${
                    job.current
                      ? 'bg-[#F5A623] border-[#F5A623]'
                      : 'bg-[#060911] border-slate-400'
                  }`}
                />

                {/* Top Metadata Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-white/[0.07]">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-slate-400 mb-1.5">
                      <span className="text-[#F5A623]">{job.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.company}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.location}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F8FAFC]">
                      {job.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-slate-300 shrink-0">
                    <span>{job.period}</span>
                    {job.current && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">
                          ·
                        </span>
                        <span className="text-[#F5A623] font-medium">Current Role</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Summary & Bullet Responsibilities */}
                <p className="mt-5 text-[15px] text-slate-300 leading-[1.7]">{job.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-slate-300/90 leading-relaxed"
                    >
                      <span aria-hidden="true" className="text-[#F5A623] font-mono mt-0.5 shrink-0">
                        —
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Unboxed Technology Stack */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-y-1.5 text-xs font-mono text-slate-400">
                  {job.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-300">{tech}</span>
                      {tIdx < job.technologies.length - 1 && (
                        <span aria-hidden="true" className="mx-2 text-slate-600">
                          /
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
