import { motion } from "motion/react";
import {
  Activity,
  ArrowDown,
  DownloadCloud,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { resumeData } from "../data/resumeData";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenResumePDF: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({ onScrollToSection, onOpenResumePDF }: HeroProps) {
  const { basics } = resumeData;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(basics.email)}`;

  return (
    <section
      id="hero-section"
      className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:linear-gradient(to_bottom,#000_0%,#000_62%,transparent_100%)]" />

      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { delayChildren: 0.12, staggerChildren: 0.12 } },
        }}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Azure AI-102 Certified
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-indigo-200/70"
        >
          Full-stack AI product builder
        </motion.p>

        <motion.h1
          id="hero-name"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
        >
          {basics.name}
        </motion.h1>

        <motion.h2
          id="hero-title"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-2xl font-extrabold leading-tight text-transparent sm:text-3xl"
        >
          {basics.title}
        </motion.h2>

        <motion.p
          id="hero-summary"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl text-sm font-light leading-7 text-slate-300 sm:text-base"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <button
            id="primary-cta-btn"
            onClick={() => onScrollToSection("projects")}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-[0_20px_55px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 active:scale-[0.98]"
          >
            View Work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
          <button
            id="secondary-cta-btn"
            onClick={onOpenResumePDF}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_20px_55px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.1] active:scale-[0.98]"
          >
            <DownloadCloud className="h-4 w-4 text-cyan-200" />
            Resume
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {[
            ["3", "Live AI SaaS platforms"],
            ["9.78", "CGPA in CSE (AI)"],
            ["<1.5s", "LLM response latency"],
          ].map(([metric, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
              <div className="text-2xl font-black text-white">{metric}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 40, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-[500px] lg:mr-0"
      >
        <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-300/40 via-indigo-400/20 to-fuchsia-400/30 opacity-70 blur-sm" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200/80">Current focus</p>
              <h3 className="mt-1 text-xl font-black text-white">AI SaaS Systems</h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold text-emerald-200">
              <Activity className="h-3.5 w-3.5 animate-pulse" />
              Available
            </span>
          </div>

          <div className="grid gap-3 py-5">
            {[
              ["Frontend", "React 19, Vite, Tailwind, Motion"],
              ["Backend", "Node.js, Express, REST, JWT"],
              ["AI Layer", "Groq, Gemini, ClipDrop, PDF Parse"],
              ["Cloud", "Vercel, Render, GitHub Actions"],
            ].map(([label, value], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-200/60">{label}</div>
                <div className="mt-1 text-sm font-semibold text-white">{value}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-4">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={`https://${basics.links.github}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white transition-colors hover:border-white/25"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`https://${basics.links.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white transition-colors hover:border-white/25"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
