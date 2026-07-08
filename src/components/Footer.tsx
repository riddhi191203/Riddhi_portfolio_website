import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { resumeData } from "../data/resumeData";

interface FooterProps {
  isDark: boolean;
  showScrollTop: boolean;
}

export default function Footer({ isDark, showScrollTop }: FooterProps) {
  const { basics } = resumeData;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(basics.email)}`;

  return (
    <>
      <footer
        id="portfolio-footer"
        className={`border-t px-4 py-16 sm:px-6 lg:px-8 ${
          isDark ? "border-white/10 bg-slate-950/80" : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.24)] backdrop-blur-2xl sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  Let us build
                </div>
                <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                  Available for freelance projects, full-time roles, and software development work.
                </h2>
              </div>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-950 transition-transform hover:-translate-y-1"
              >
                <Send className="h-4 w-4" />
                Contact Riddhi
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-3">
            <div className="space-y-4">
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-200">
                <Sparkles className="h-4 w-4" /> Profile
              </span>
              <p className="max-w-sm font-sans leading-relaxed text-slate-400">
                Full-stack developer specializing in React.js, Node.js, PostgreSQL, secure APIs, AI integrations, and cloud-deployed SaaS products.
              </p>
              <div className="flex gap-3 pt-1 text-slate-400">
                <a href={`https://${basics.links.linkedin}`} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-cyan-300/25 hover:text-cyan-200" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={`https://${basics.links.github}`} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-cyan-300/25 hover:text-white" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <span className="block border-b border-white/10 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-200">
                Direct Inquiries
              </span>
              <ul className="space-y-3 font-sans text-slate-400">
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
                  <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="break-all transition-colors hover:text-cyan-200">
                    {basics.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{basics.phone}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{basics.location}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div>
                <span className="block border-b border-white/10 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-200">
                  Portfolio Core
                </span>
                <p className="mt-4 font-mono text-xs leading-relaxed text-slate-500">
                  Built with TypeScript, React 19, Vite, Tailwind CSS, Motion, Lucide React, and a canvas-backed animated background.
                </p>
              </div>
              <div className="font-mono text-[10px] text-slate-600">
                &copy; {new Date().getFullYear()} Riddhi Jain. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300 text-sm text-slate-950 shadow-xl transition-all hover:-translate-y-1 active:scale-95"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
