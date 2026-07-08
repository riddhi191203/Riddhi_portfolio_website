import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Trophy, Cpu, Zap, Shield, GraduationCap, Server } from "lucide-react";
import { resumeData } from "../data/resumeData";

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 1200, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * end;
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const { achievements } = resumeData;

  const getIcon = (category: string) => {
    switch (category) {
      case "shipping":
        return <Server className="h-6 w-6 text-blue-400" />;
      case "academic":
        return <GraduationCap className="h-6 w-6 text-cyan-400" />;
      case "performance":
        return <Zap className="h-6 w-6 text-indigo-400" />;
      case "security":
        return <Shield className="h-6 w-6 text-blue-300" />;
      case "user-impact":
        return <Cpu className="h-6 w-6 text-cyan-500" />;
      default:
        return <Trophy className="h-6 w-6 text-yellow-400" />;
    }
  };

  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 max-w-3xl text-left"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5">
          <Trophy className="h-4 w-4 animate-pulse text-cyan-300" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-200">
            Milestones & Quantitative Wins
          </span>
        </div>
        <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
          Impact in numbers
        </h2>
        <p className="mt-4 max-w-xl text-sm font-light leading-7 text-slate-400">
          Quantifiable milestones extracted verbatim from Riddhi's profile, highlighting specialized training, elite academic stance, and core software production capacities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((ach, index) => {
          let counterComponent = null;

          if (ach.metric.includes("3")) {
            counterComponent = <AnimatedCounter end={3} suffix=" Production-Grade" />;
          } else if (ach.metric.includes("9.78")) {
            counterComponent = <AnimatedCounter end={9.78} decimals={2} suffix=" / 10.00" />;
          } else if (ach.metric.includes("1.5s")) {
            counterComponent = <AnimatedCounter end={1.5} decimals={1} suffix="s Latency Limit" />;
          } else if (ach.metric.includes("40%")) {
            counterComponent = <AnimatedCounter end={40} suffix="% Debugging Span" />;
          } else if (ach.metric.includes("100+")) {
            counterComponent = <AnimatedCounter end={100} suffix="+ Media Loads" />;
          } else if (ach.metric.includes("8")) {
            counterComponent = <AnimatedCounter end={8} suffix=" Secured Endpoints" />;
          } else {
            counterComponent = <span>{ach.metric}</span>;
          }

          return (
            <motion.div
              id={`achievement-card-${ach.metric.replace(/[^a-zA-Z0-9]/g, "")}`}
              key={ach.metric}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_20px_70px_rgba(2,6,23,0.2)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/25 sm:p-7"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300/80 via-indigo-400/80 to-fuchsia-400/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-inner transition-colors group-hover:border-cyan-300/25">
                {getIcon(ach.category)}
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  {counterComponent}
                </h3>
                <span className="inline-block rounded-full border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-200">
                  {ach.category} Win
                </span>
                <p className="pt-2 text-sm font-light leading-7 text-slate-300">
                  {ach.context}
                </p>
              </div>

              <div className="absolute right-3 bottom-3 opacity-5 group-hover:opacity-15 transition-opacity">
                <Trophy className="h-10 w-10 text-white" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
