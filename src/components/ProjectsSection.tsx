import React, { useMemo, useState } from 'react';
import { Button, Dialog, IconButton } from '@mui/material';
import { ArrowUpRight, Expand, X } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CATEGORIES: ProjectCategory[] = [
  ProjectCategory.ALL,
  ProjectCategory.WEB,
  ProjectCategory.MOBILE_AI,
  ProjectCategory.ENTERPRISE,
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === ProjectCategory.ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const displayedProjects = useMemo(() => {
    if (showAll || selectedCategory !== ProjectCategory.ALL) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 7);
  }, [filteredProjects, showAll, selectedCategory]);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#090E1A] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="max-w-2xl"
          >
            <p className="text-xs font-mono text-[#F5A623] tracking-wider mb-3">
              04. Selected Works &amp; Case Studies
            </p>
            <h2
              className="font-display font-bold tracking-tight text-[#F8FAFC]"
              style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
            >
              17 shipped platforms across web, mobile, billing ERP, and AI automation.
            </h2>
            <p className="mt-3 text-[15px] text-slate-300/90 leading-[1.7]">
              Select any project tile to inspect high-resolution screenshots, technical architecture, and live
              production deployments.
            </p>
          </motion.div>

          {/* Interactive Segmented Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-[#060911] border border-white/[0.08] self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              const count =
                category === ProjectCategory.ALL
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#F5A623] text-[#060911]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {category}{' '}
                  <span className={`font-mono tabular-nums ${active ? 'text-[#060911]/80' : 'text-slate-500'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento & Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedProjects.map((project, idx) => {
            const isHeroSpan = selectedCategory === ProjectCategory.ALL && idx === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: Math.min(idx * 0.05, 0.25), ease: EASE_OUT_EXPO }}
                className={`group rounded-2xl border border-white/[0.08] bg-[#0B111E] overflow-hidden flex flex-col hover:border-white/[0.2] transition-colors duration-200 ${
                  isHeroSpan ? 'md:col-span-2' : ''
                }`}
              >
                {/* Project Screenshot Container with Subtle Scale Reveal */}
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  aria-label={`Inspect ${project.title} case study`}
                  className={`relative w-full overflow-hidden bg-[#060911] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5A623] ${
                    isHeroSpan ? 'h-60 sm:h-72' : 'h-52'
                  }`}
                >
                  <ResilientImage
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fallbackTitle={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-black/20 opacity-80" />

                  <span className="absolute top-3.5 right-3.5 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#060911]/75 backdrop-blur-md border border-white/15 text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Expand className="w-4 h-4" />
                  </span>
                </button>

                {/* Card Copy — Clean Unboxed Metadata */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Quiet 1-line kicker */}
                    <div className="flex items-center justify-between gap-3 text-xs font-mono tabular-nums text-slate-400">
                      <div>
                        <span className="text-[#F5A623]">{project.year}</span>
                        <span aria-hidden="true" className="mx-2 text-slate-600">
                          ·
                        </span>
                        <span>{project.category}</span>
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#F5A623] hover:text-[#FBBF24] transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h3 className="mt-2.5 font-display text-lg sm:text-xl font-semibold text-[#F8FAFC] group-hover:text-[#F5A623] transition-colors duration-150">
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="text-left cursor-pointer focus:outline-none"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-300/90 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Unboxed Tech Stack Row */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-y-1 text-xs font-mono text-slate-400">
                      {project.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="mx-2 text-slate-600">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-slate-300 hover:text-[#F5A623] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Expand / Collapse All 17 Projects Button */}
        {selectedCategory === ProjectCategory.ALL && PROJECTS.length > 7 && (
          <div className="mt-12 flex flex-col items-center">
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
              sx={{
                px: 3.5,
                py: 1.35,
                borderRadius: '9999px',
                borderColor: 'rgba(255,255,255,0.18)',
                color: '#F8FAFC',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#F5A623',
                  backgroundColor: 'rgba(245, 166, 35, 0.08)',
                },
              }}
            >
              {showAll ? 'Show Featured Highlights' : `View All ${PROJECTS.length} Shipped Projects`}
            </Button>
            {!showAll && (
              <p className="mt-2.5 text-xs font-mono tabular-nums text-slate-500">
                Showing 7 of {PROJECTS.length} verified client &amp; engineering projects
              </p>
            )}
          </div>
        )}
      </div>

      {/* Fullscreen High-Resolution Case Study Lightbox Modal */}
      <Dialog
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        maxWidth="md"
        fullWidth
        aria-labelledby="project-lightbox-title"
      >
        {activeProject && (
          <div className="bg-[#0B111E] text-[#F8FAFC] overflow-hidden">
            <div className="relative h-64 sm:h-96 w-full bg-[#060911] border-b border-white/[0.08]">
              <ResilientImage
                src={activeProject.image}
                alt={`${activeProject.title} preview`}
                fallbackTitle={activeProject.title}
                className="h-full w-full object-cover object-top"
              />
              <IconButton
                onClick={() => setActiveProject(null)}
                aria-label="Close project preview"
                sx={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  width: 40,
                  height: 40,
                  backgroundColor: 'rgba(6, 9, 17, 0.82)',
                  color: '#F8FAFC',
                  border: '1px solid rgba(255,255,255,0.18)',
                  '&:hover': {
                    backgroundColor: 'rgba(245, 166, 35, 0.25)',
                    borderColor: '#F5A623',
                  },
                }}
              >
                <X className="w-4 h-4" />
              </IconButton>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono tabular-nums text-slate-400">
                <span className="text-[#F5A623]">{activeProject.year}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.category}</span>
              </div>

              <h3
                id="project-lightbox-title"
                className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]"
              >
                {activeProject.title}
              </h3>

              <p className="mt-4 text-[15px] sm:text-base text-slate-300 leading-[1.75]">
                {activeProject.description}
              </p>

              <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-1.5">Stack &amp; Tooling</p>
                  <div className="flex flex-wrap items-center gap-y-1 text-sm font-mono text-slate-200">
                    {activeProject.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {idx < activeProject.technologies.length - 1 && (
                          <span aria-hidden="true" className="mx-2 text-slate-600">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {activeProject.liveUrl && (
                    <Button
                      component="a"
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowUpRight className="w-4 h-4" />}
                      sx={{ borderRadius: '9999px', px: 3 }}
                    >
                      Visit Live Site
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    onClick={() => setActiveProject(null)}
                    sx={{
                      borderRadius: '9999px',
                      borderColor: 'rgba(255,255,255,0.16)',
                      color: '#CBD5E1',
                    }}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};
