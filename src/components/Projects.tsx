import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { resumeData } from "../data/resumeData";

const projectThemes = [
  {
    accent: "from-cyan-300 to-blue-500",
    icon: <Sparkles className="h-5 w-5" />,
    label: "AI workspace",
  },
  {
    accent: "from-indigo-300 to-fuchsia-500",
    icon: <Zap className="h-5 w-5" />,
    label: "Developer platform",
  },
  {
    accent: "from-emerald-300 to-cyan-500",
    icon: <ShieldCheck className="h-5 w-5" />,
    label: "Career intelligence",
  },
];

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-200">
            <Rocket className="h-3.5 w-3.5" />
            Projects
          </div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            SaaS projects built from idea to cloud.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          Zenith AI, CodeMind AI, and ATSync AI showcase full-stack architecture, authentication, AI integrations, REST APIs, and cloud deployment.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project, index) => {
          const theme = projectThemes[index % projectThemes.length];

          return (
            <motion.article
              id={`project-card-${index}`}
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/25 sm:p-6 lg:p-8"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.accent}`} />
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className={`inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r ${theme.accent} px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950`}>
                        {theme.icon}
                        {theme.label}
                      </div>
                      <span className="font-mono text-sm font-black text-slate-500">0{index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                      {project.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 4).map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-[11px] font-semibold text-slate-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-950 transition-transform hover:-translate-y-0.5"
                    >
                      Live Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:border-white/25"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <ul className="grid gap-3">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm font-light leading-7 text-slate-300">
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${theme.accent}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="mb-3 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      <Layers3 className="h-4 w-4 text-cyan-300" />
                      Technology stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-[11px] text-slate-300 transition-colors group-hover:border-cyan-300/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
