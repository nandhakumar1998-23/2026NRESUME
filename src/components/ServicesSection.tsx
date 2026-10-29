import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#060911] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-mono text-[#F5A623] tracking-wider mb-3">
            05. Design &amp; Search Expertise
          </p>
          <h2
            className="font-display font-bold tracking-tight text-[#F8FAFC]"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
          >
            From high-converting interfaces to technical search dominance.
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-slate-300/90 leading-[1.7]">
            Combining UI engineering craft with Screaming Frog technical SEO audits, Search Console diagnostics, and
            analytics attribution so products both perform and get discovered.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] rounded-2xl overflow-hidden border border-white/[0.08]">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
              className="bg-[#0B111E] p-7 sm:p-9 flex flex-col justify-between hover:bg-[#0F1728] transition-colors duration-200"
            >
              <div>
                <span className="font-mono tabular-nums text-xs text-[#F5A623]">
                  {service.index}
                </span>
                <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-[#F8FAFC]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300/90 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <p className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                {service.scope}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
