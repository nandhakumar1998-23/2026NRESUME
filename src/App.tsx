import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MotionConfig, motion, useScroll, useSpring } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CursorGlow } from './components/CursorGlow';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InterviewModal } from './components/InterviewModal';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { helixMuiTheme } from './theme/muiTheme';

export default function App() {
  const [interviewOpen, setInterviewOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider theme={helixMuiTheme}>
      <CssBaseline />
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen bg-[#060911] text-[#F8FAFC] overflow-x-hidden">
          {/* Compositor-Only Top Scroll Progress Hairline */}
          <motion.div
            aria-hidden="true"
            style={{ scaleX: smoothScroll }}
            className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#F5A623] via-[#FBBF24] to-[#38BDF8] pointer-events-none"
          />

          <CursorGlow />

          <Navbar onOpenInterview={() => setInterviewOpen(true)} />

          <main>
            <HeroSection />
            <MarqueeRibbon />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ServicesSection />
            <ContactSection onOpenInterview={() => setInterviewOpen(true)} />
          </main>

          <Footer />

          <InterviewModal open={interviewOpen} onClose={() => setInterviewOpen(false)} />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
