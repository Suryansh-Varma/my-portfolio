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
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulseSpeed: number;
      pulseVal: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedY: -(Math.random() * 0.4 + 0.1),
          speedX: (Math.random() * 0.2 - 0.1),
          opacity: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulseVal: Math.random() * Math.PI,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseRef.current.targetX = (clientX - window.innerWidth / 2) * 0.08;
      mouseRef.current.targetY = (clientY - window.innerHeight / 2) * 0.08;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lerp mouse movement for smooth parallax
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      particles.forEach((p) => {
        // Apply vertical drift
        p.y += p.speedY;
        p.x += p.speedX;

        // Reset if goes off screen top or sides
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }

        // Apply mouse sway parallax
        const px = p.x + mouse.x * (p.size * 0.5);
        const py = p.y + mouse.y * (p.size * 0.5);

        // Sinusoidal opacity pulsing (glowing effect)
        p.pulseVal += p.pulseSpeed;
        const currentOpacity = p.opacity * (0.6 + Math.sin(p.pulseVal) * 0.4);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        // Golden / amber glow color matching the One Piece theme (belly gold / sunlight gold)
        ctx.fillStyle = `rgba(234, 179, 8, ${currentOpacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(234, 179, 8, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
