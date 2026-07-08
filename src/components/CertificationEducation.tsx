import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, Sparkles, Trophy } from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function CertificationEducation() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        
        <motion.div
          id="education-sub-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_70px_rgba(2,6,23,0.2)] backdrop-blur-2xl sm:p-8 lg:col-span-7"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-200">
                Academic Pedigree
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Education
            </h2>
          </div>

          <div className="relative ml-3 mt-8 space-y-7 border-l border-white/10 pl-6">
            {education.map((edu, idx) => (
              <motion.div
                id={`edu-item-${idx}`}
                key={edu.institution} 
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative group space-y-2.5"
              >
                <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-300 bg-slate-950 transition-transform duration-300 group-hover:scale-125">
                  <span className="h-1 w-1 rounded-full bg-cyan-200" />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-mono text-xs font-bold text-cyan-200">
                      {edu.period}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono font-light">
                      <MapPin className="h-3 w-3" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-100">
                    {edu.institution}
                  </h4>
                  <p className="text-white/70 font-semibold text-sm flex items-center gap-2 font-sans">
                    {edu.degree}
                    {edu.branch && (
                      <span className="text-white/40 text-xs font-light font-sans">
                        ({edu.branch})
                      </span>
                    )}
                  </p>
                </div>

                <div id={`edu-grade-${idx}`} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 font-mono text-xs text-cyan-200">
                  <Trophy className="h-3 w-3 text-cyan-400" />
                  <span>{edu.cgpaOrYear}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="certifications-sub-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_70px_rgba(2,6,23,0.2)] backdrop-blur-2xl sm:p-8 lg:col-span-5"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-200">
                Credentials Validations
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Certifications
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {certifications.map((cert, idx) => (
              <motion.div
                id={`cert-card-${cert.issuer}`}
                key={cert.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-md transition-colors duration-300 hover:border-cyan-300/25"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] transition-colors group-hover:border-cyan-300/25">
                    <Award className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold leading-snug text-white transition-colors group-hover:text-cyan-100">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-white/50 font-light">
                      Issuer: {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1.5 pt-1.5 text-[10px] font-mono text-white/30">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
