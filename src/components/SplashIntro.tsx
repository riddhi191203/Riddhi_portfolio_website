import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashIntroProps {
  onComplete: () => void;
}

export default function SplashIntro({ onComplete }: SplashIntroProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 150);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="splash-container"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            id="splash-logo"
            className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-950/20 shadow-2xl backdrop-blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-x-0 h-full w-full animate-ping rounded-2xl bg-indigo-500/5 duration-1000" />
            <span className="font-sans text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
              RJ
            </span>
            <span className="absolute top-1 left-1 block h-1 w-1 bg-indigo-400" />
            <span className="absolute bottom-1 right-1 block h-1 w-1 bg-emerald-400" />
          </motion.div>

          <motion.div
            id="splash-text-group"
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="font-mono text-sm tracking-[0.3em] font-medium text-slate-400 uppercase">
              Riddhi Jain
            </h1>
            <p className="mt-1 font-mono text-[9px] tracking-[0.15em] text-slate-500 uppercase">
              AI & Full-Stack Core
            </p>
          </motion.div>

          <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-slate-900">
            <motion.div
              id="splash-progress-bar"
              className="h-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <motion.span 
            id="splash-percentage"
            className="mt-2 font-mono text-[10px] text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.floor(Math.min(progress, 100))}%
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
