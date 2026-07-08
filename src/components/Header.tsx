import { AnimatePresence, motion } from "motion/react";
import { FileText, Menu, X } from "lucide-react";
import type { SectionId } from "../App";

interface HeaderProps {
  activeSection: SectionId;
  mobileMenuOpen: boolean;
  onOpenResume: () => void;
  onScrollToSection: (sectionId: string) => void;
  onToggleMenu: () => void;
}

const navItems: Array<{ name: string; id: SectionId }> = [
  { name: "Home", id: "hero" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Achievements", id: "achievements" },
  { name: "Education", id: "education" },
];

export default function Header({
  activeSection,
  mobileMenuOpen,
  onOpenResume,
  onScrollToSection,
  onToggleMenu,
}: HeaderProps) {
  return (
    <>
      <header
        id="navigation-header"
        className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 shadow-[0_18px_60px_rgba(2,6,23,0.38)] backdrop-blur-2xl transition-all duration-300"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <button
            id="header-logo-initials"
            onClick={() => onScrollToSection("hero")}
            className="group flex items-center gap-2.5"
            aria-label="Go to home section"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 shadow-[0_10px_30px_rgba(34,211,238,0.16)]">
              <span className="bg-gradient-to-r from-cyan-200 via-white to-indigo-300 bg-clip-text font-sans text-sm font-black tracking-wide text-transparent">
                RJ
              </span>
            </span>
            <span className="hidden text-left sm:block">
              <span className="block font-sans text-xs font-black leading-tight tracking-wider text-white">
                RIDDHI JAIN
              </span>
              <span className="block font-mono text-[9px] leading-none tracking-widest text-cyan-200/60">
                AI & SOFTWARE
              </span>
            </span>
          </button>

          <nav
            id="desktop-routing-links"
            className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1 font-mono text-xs font-medium uppercase tracking-widest md:flex"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  id={`nav-${item.id}`}
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className={`relative rounded-xl px-3 py-2 transition-colors duration-200 hover:text-white lg:px-3.5 ${
                    isActive ? "font-bold text-white" : "text-slate-400"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      id={`nav-active-pill-${item.id}`}
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.span
                      id={`nav-active-bar-${item.id}`}
                      layoutId="activeIndicator"
                      className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-cyan-300"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div id="header-controls" className="hidden items-center gap-3 md:flex">
            <button
              id="header-resume-cta"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-100 transition-all hover:-translate-y-0.5 hover:bg-cyan-300/15"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              id="mobile-nav-trigger"
              onClick={onToggleMenu}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 text-slate-300 transition-colors hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 space-y-4 border-b border-white/10 bg-slate-950/95 px-4 py-6 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-left font-mono text-sm uppercase tracking-wider text-slate-300 hover:text-white"
                >
                  {item.name}
                </button>
              ))}
              <button
                id="mobile-resume-viewer-trigger"
                onClick={onOpenResume}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 py-3 font-sans text-xs font-black uppercase tracking-wider text-slate-950"
              >
                <FileText className="h-4 w-4" />
                <span>Open Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
