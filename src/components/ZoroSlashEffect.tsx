"use client";
import { useEffect, useRef, useState } from "react";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface Slash {
  id: number;
  x: number;
  y: number;
  life: number;
  maxLife: number;
  angles: number[];
  isMera: boolean;
}

export default function ZoroSlashEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let slashes: Slash[] = [];
    let sparks: Spark[] = [];
    let nextSlashId = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Standard green colors for Yami Darkness theme
    const greenColors = [
      "rgba(52, 211, 153, 0.95)", // Emerald green
      "rgba(16, 185, 129, 0.95)", // Medium green
      "rgba(255, 255, 255, 1.0)",  // White flash core
      "rgba(5, 150, 105, 0.9)",   // Darker green aura
    ];

    // Fiery red/orange colors for Mera Mera fire theme
    const fireColors = [
      "rgba(251, 146, 60, 0.95)", // Orange flame
      "rgba(244, 63, 94, 0.95)",  // Rose red
      "rgba(255, 255, 255, 1.0)",  // White flash core
      "rgba(249, 115, 22, 0.9)",  // Bright orange
    ];

    const triggerSlash = (x: number, y: number) => {
      const id = nextSlashId++;
      const isMera = document.documentElement.classList.contains("mera");
      const activeColors = isMera ? fireColors : greenColors;

      // Santoryu (Three sword style) slashes
      slashes.push({
        id,
        x,
        y,
        life: 0,
        maxLife: 20, // 20 frames duration
        angles: [
          -Math.PI / 6,               // Slash 1: Diagonal \
          Math.PI / 6,                // Slash 2: Diagonal /
          Math.PI / 2 + Math.random() // Slash 3: Vertical or custom cut
        ],
        isMera
      });

      // Generate sparks from slash point
      const numSparks = 24;
      for (let i = 0; i < numSparks; i++) {
        const speed = Math.random() * 5 + 3;
        const angle = Math.random() * Math.PI * 2;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: Math.random() * 25 + 15,
          size: Math.random() * 2.5 + 1.2,
          color: activeColors[Math.floor(Math.random() * (activeColors.length - 1))],
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Ignore click on interactive items
      const target = e.target as HTMLElement;
      if (
        target.closest("a") || 
        target.closest("button") || 
        target.closest("input") || 
        target.closest("textarea")
      ) {
        return;
      }
      triggerSlash(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);

    const drawLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Sword Slashes
      slashes = slashes.filter((s) => {
        s.life++;
        const progress = s.life / s.maxLife;
        const alpha = 1.0 - progress;

        const mainColor = s.isMera ? `rgba(249, 115, 22, ${alpha * 0.45})` : `rgba(16, 185, 129, ${alpha * 0.4})`;
        const auraGlow = s.isMera ? "rgba(249, 115, 22, 0.8)" : "rgba(16, 185, 129, 0.8)";

        // Draw each sword line
        s.angles.forEach((angle) => {
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(angle);

          const length = 180 * (0.4 + progress * 0.6); // Slash expands
          const width = 10 * (1.0 - progress);

          // Emerald / Crimson aura path
          ctx.beginPath();
          ctx.ellipse(0, 0, length, width, 0, 0, Math.PI * 2);
          ctx.fillStyle = mainColor;
          ctx.shadowBlur = 20;
          ctx.shadowColor = auraGlow;
          ctx.fill();

          // Bright white-hot cutting core
          ctx.beginPath();
          ctx.ellipse(0, 0, length * 0.9, width * 0.35, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
          ctx.shadowBlur = 5;
          ctx.shadowColor = "rgba(255, 255, 255, 1.0)";
          ctx.fill();

          ctx.restore();
        });

        return s.life < s.maxLife;
      });

      // 2. Draw Sparks
      sparks = sparks.filter((sp) => {
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.95; // drag
        sp.vy *= 0.95;
        sp.life++;
        const alpha = 1.0 - (sp.life / sp.maxLife);

        if (sp.life >= sp.maxLife) return false;

        ctx.save();
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = sp.color;
        ctx.fill();
        ctx.restore();

        return true;
      });

      animFrameId = requestAnimationFrame(drawLoop);
    };

    animFrameId = requestAnimationFrame(drawLoop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-40"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
