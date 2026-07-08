import { useState } from "react";
import { motion } from "motion/react";
import { Search, Cpu, Terminal, Database, Code, Globe, Settings, Network } from "lucide-react";
import { resumeData } from "../data/resumeData";

export default function Skills() {
  const { skills } = resumeData;
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Code className="h-4 w-4 text-blue-400" />;
      case "frontend":
        return <Globe className="h-4 w-4 text-cyan-400" />;
      case "backend":
        return <Terminal className="h-4 w-4 text-indigo-400" />;
      case "databases":
        return <Database className="h-4 w-4 text-cyan-400" />;
      case "ai / ml technologies":
        return <Cpu className="h-4 w-4 text-purple-400" />;
      case "developer tools":
        return <Settings className="h-4 w-4 text-blue-300" />;
      case "cloud & devops":
        return <Network className="h-4 w-4 text-indigo-300" />;
      default:
        return <Cpu className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-200">
              Technical Stack & Specializations
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
            Skills that ship products
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Search the stack or scan by category. Every item supports the live AI products in this portfolio.
          </p>
        </div>

        <div id="skills-search" className="relative w-full max-w-xs">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-white/30" />
          </div>
          <input
            id="skills-search-input"
            type="text"
            placeholder="Query stack (e.g., JWT, C++)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.055] py-3 pl-10 pr-4 text-sm text-white shadow-[0_18px_50px_rgba(2,6,23,0.18)] backdrop-blur-xl transition-all placeholder:text-white/30 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((group, index) => {
          const filteredItems = group.skills.filter((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          );

          const isCategoryMatch = group.category.toLowerCase().includes(searchQuery.toLowerCase());
          const displaySkills = isCategoryMatch ? group.skills : filteredItems;

          if (displaySkills.length === 0) return null;

          return (
            <motion.div
              id={`skills-card-${group.category.replace(/[^a-zA-Z0-9]/g, "")}`}
              key={group.category}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group min-h-[210px] rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_70px_rgba(2,6,23,0.2)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/25 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-inner transition-colors group-hover:border-cyan-300/25">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-sm font-black text-white">
                  {group.category}
                </h3>
              </div>

              <div id={`skills-list-${group.category.replace(/[^a-zA-Z0-9]/g, "")}`} className="flex flex-wrap gap-2">
                {displaySkills.map((skill) => {
                  const isHighlighted = searchQuery !== "" && skill.toLowerCase().includes(searchQuery.toLowerCase());
                  return (
                    <span
                      key={skill}
                      className={`font-mono text-[11px] rounded px-2.5 py-1 border transition-all ${
                        isHighlighted
                          ? "border-cyan-300 bg-cyan-300/20 font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                          : "border-white/10 bg-slate-950/45 text-white/70 hover:border-cyan-300/25 hover:text-white"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
