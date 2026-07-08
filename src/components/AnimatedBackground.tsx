import { useEffect, useRef, useState } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    let particles: Particle[] = [];
    
    const isMobile = width < 768;
    const particleCount = isMobile ? 30 : 75;

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          color: "rgba(100, 116, 139, 0.4)",
        });
      }
    };

    createParticles();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#020204";
      ctx.fillRect(0, 0, width, height);

      const rGrad1 = ctx.createRadialGradient(
        width * 0.2, height * 0.3, 0,
        width * 0.2, height * 0.3, Math.max(width, height) * 0.65
      );
      rGrad1.addColorStop(0, "rgba(26, 31, 53, 0.85)");
      rGrad1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = rGrad1;
      ctx.fillRect(0, 0, width, height);

      const rGrad2 = ctx.createRadialGradient(
        width * 0.8, height * 0.7, 0,
        width * 0.8, height * 0.7, Math.max(width, height) * 0.7
      );
      rGrad2.addColorStop(0, "rgba(15, 23, 42, 0.8)");
      rGrad2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = rGrad2;
      ctx.fillRect(0, 0, width, height);

      const ambientGlow1 = ctx.createRadialGradient(
        0, height, 0,
        0, height, 400
      );
      ambientGlow1.addColorStop(0, "rgba(37, 99, 235, 0.08)");
      ambientGlow1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = ambientGlow1;
      ctx.fillRect(0, 0, width, height);

      const ambientGlow2 = ctx.createRadialGradient(
        width, 0, 0,
        width, 0, 300
      );
      ambientGlow2.addColorStop(0, "rgba(79, 70, 229, 0.08)");
      ambientGlow2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = ambientGlow2;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = isMobile ? 100 : 150;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(165, 180, 252, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div 
        id="animated-bg-static"
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" 
      />
    );
  }

  return (
    <canvas
      id="animated-bg-canvas"
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 block h-full w-full"
    />
  );
}
