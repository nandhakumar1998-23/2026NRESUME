import React from 'react';
import { motion } from 'motion/react';
import { FRONTIER_TECH, SKILL_GROUPS, SOFT_SKILLS } from '../data/portfolioData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#090E1A] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-mono text-[#F5A623] tracking-wider mb-3">02. Technical Architecture</p>
          <h2
            className="font-display font-bold tracking-tight text-[#F8FAFC]"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
          >
            Skills, cloud stack, and frontier AI automation.
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-slate-300/90 leading-[1.7]">
            A production-tested stack spanning modern TypeScript frontends, serverless AWS Amplify &amp; relational
            databases, technical search optimization, and intelligent workflow orchestration.
          </p>
        </motion.div>

        {/* 4 Core Skill Architecture Domains */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.07, ease: EASE_OUT_EXPO }}
              className="rounded-2xl border border-white/[0.08] bg-[#0B111E] p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.16] transition-colors duration-200"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono tabular-nums text-xs text-[#F5A623]">
                    {group.index}. Domain Focus
                  </span>
                  <span className="font-mono tabular-nums text-xs text-slate-400">
                    {group.proficiency}% Depth
                  </span>
                </div>

                <h3 className="mt-2.5 font-display text-xl font-semibold text-[#F8FAFC]">
                  {group.category}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{group.summary}</p>

                {/* Compositor-only scaleX animated indicator */}
                <div className="mt-5 h-[2px] w-full bg-white/[0.07] overflow-hidden rounded-full">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: group.proficiency / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 + idx * 0.08, ease: EASE_OUT_EXPO }}
                    className="h-full w-full origin-left bg-gradient-to-r from-[#F5A623] to-[#38BDF8]"
                  />
                </div>
              </div>

              {/* Zero-Pill Unboxed Metadata List with Typographic Separators */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-y-2 text-[13px] sm:text-sm text-slate-200 leading-relaxed">
                {group.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    <span className="font-medium hover:text-[#F5A623] transition-colors duration-150">
                      {skill}
                    </span>
                    {sIdx < group.skills.length - 1 && (
                      <span aria-hidden="true" className="mx-2.5 text-slate-600">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frontier AI & Automation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
          className="mt-12 pt-12 border-t border-white/[0.08]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F8FAFC]">
                AI &amp; Workflow Automation
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 max-w-xl">
                Bridging production web and mobile engineering with LLM APIs, n8n visual automation pipelines, and
                Model Context Protocol (MCP) tooling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRONTIER_TECH.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                className="rounded-xl border border-white/[0.07] bg-[#060911]/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-[11px] text-[#F5A623] mb-2">{item.status}</p>
                  <h4 className="font-display text-base font-semibold text-[#F8FAFC]">{item.title}</h4>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Leadership & Soft Skills */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="font-display text-sm font-semibold text-slate-200 shrink-0">
            Leadership &amp; Collaboration
          </span>
          <div className="flex flex-wrap items-center gap-y-1.5 text-xs sm:text-[13px] text-slate-400">
            {SOFT_SKILLS.map((soft, idx) => (
              <React.Fragment key={soft}>
                <span>{soft}</span>
                {idx < SOFT_SKILLS.length - 1 && (
                  <span aria-hidden="true" className="mx-2.5 text-slate-600">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
