import { motion } from "motion/react";
import { BriefcaseBusiness, Rocket } from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
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
            Experience
          </div>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            Professional experience
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          Hands-on full-stack work across React, Node, Express, PostgreSQL, REST APIs, and JWT authentication.
        </p>
      </motion.div>

      <div className="grid gap-5">
        {experience.map((item, index) => (
          <motion.article
            id={`professional-experience-${index}`}
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-emerald-300/[0.055] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.24)] backdrop-blur-2xl sm:p-6 lg:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-500" />
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-start">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-2xl bg-emerald-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950">
                  <BriefcaseBusiness className="h-5 w-5" />
                  Vayon Cloud
                </div>
                <h3 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-lg font-bold text-cyan-100">{item.company}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-[11px] font-semibold text-slate-300">
                    {item.period}
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-[11px] font-semibold text-slate-300">
                    {item.mode}
                  </span>
                </div>
              </div>

              <div className="space-y-5">
                <ul className="grid gap-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm font-light leading-7 text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-1.5 font-mono text-[11px] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
