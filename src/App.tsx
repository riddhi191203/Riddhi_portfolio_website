import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import AnimatedBackground from "./components/AnimatedBackground";
import CertificationEducation from "./components/CertificationEducation";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResumeViewer from "./components/ResumeViewer";
import Skills from "./components/Skills";
import SplashIntro from "./components/SplashIntro";

const sectionMap = {
  hero: "hero-section",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  achievements: "achievements",
  education: "education",
} as const;

export type SectionId = keyof typeof sectionMap;

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = "Riddhi Jain | Full-Stack Developer & AI Specialist";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      for (const [section, elementId] of Object.entries(sectionMap)) {
        const element = document.getElementById(elementId);
        const rect = element?.getBoundingClientRect();

        if (rect && rect.top <= 200 && rect.bottom >= 150) {
          setActiveSection(section as SectionId);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(sectionMap[id as SectionId] ?? id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-100 transition-colors duration-500 selection:bg-cyan-300/20 selection:text-cyan-100">
      <AnimatePresence>{showSplash && <SplashIntro onComplete={() => setShowSplash(false)} />}</AnimatePresence>

      {!showSplash && (
        <div className="relative z-10">
          <AnimatedBackground />
          <Header
            activeSection={activeSection}
            mobileMenuOpen={mobileMenuOpen}
            onOpenResume={() => setShowResume(true)}
            onScrollToSection={scrollToSection}
            onToggleMenu={() => setMobileMenuOpen((open) => !open)}
          />

          <main className="pb-12">
            <Hero onScrollToSection={scrollToSection} onOpenResumePDF={() => setShowResume(true)} />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <CertificationEducation />
          </main>

          <AnimatePresence>{showResume && <ResumeViewer onClose={() => setShowResume(false)} />}</AnimatePresence>
          <Footer isDark={true} showScrollTop={showScrollTop} />
        </div>
      )}
    </div>
  );
}
