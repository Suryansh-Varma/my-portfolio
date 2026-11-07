"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = 1;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      baseOpacity: number;
    }

    let particles: Particle[] = [];

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles(width, height);
    };

    const initParticles = (width: number, height: number) => {
      particles = [];
      // Intentional, sparse count (22 particles max) for clean precision
      const count = Math.min(24, Math.max(12, Math.floor(width / 75)));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 1.0,
          speedY: -(Math.random() * 0.25 + 0.08),
          speedX: (Math.random() * 0.15 - 0.075),
          baseOpacity: Math.random() * 0.35 + 0.25,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - window.innerWidth / 2) * 0.03;
      mouseRef.current.targetY = (e.clientY - window.innerHeight / 2) * 0.03;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    resizeCanvas();

    let step = 0;

    const render = () => {
      step += 0.005;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Mouse lerp
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw subtle oceanic ink wash curves (depth layer)
      ctx.save();
      const grad = ctx.createRadialGradient(
        width * 0.5 + Math.sin(step) * 50,
        height * 0.35 + Math.cos(step) * 40,
        width * 0.1,
        width * 0.5,
        height * 0.4,
        width * 0.75
      );
      grad.addColorStop(0, "rgba(4, 18, 48, 0.22)");
      grad.addColorStop(0.6, "rgba(2, 10, 28, 0.10)");
      grad.addColorStop(1, "rgba(1, 5, 16, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // Render crisp, clean, non-bloated embers
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const px = p.x + mouse.x * (p.size * 0.4);
        const py = p.y + mouse.y * (p.size * 0.4);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        // Studio-grade crisp gold tone, no artificial blur or halo
        ctx.fillStyle = `rgba(200, 146, 42, ${p.baseOpacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
