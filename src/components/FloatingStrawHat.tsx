"use client";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export default function FloatingStrawHat() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hatPos, setHatPos] = useState({ x: 100, y: 100 });
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Position, target, velocity state refs for animation loop
  const physicsRef = useRef({
    x: 100,
    y: 100,
    targetX: 300,
    targetY: 300,
    angle: 0,
    targetAngle: 0,
    lastTrailTime: 0,
  });

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
    let particles: Particle[] = [];

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const physics = physicsRef.current;
    physics.x = window.innerWidth / 2;
    physics.y = window.innerHeight / 2;
    physics.targetX = Math.random() * (window.innerWidth - 300) + 150;
    physics.targetY = Math.random() * (window.innerHeight - 300) + 150;

    const colors = [
      "rgba(253, 224, 71, 0.75)",  // yellow stars
      "rgba(251, 191, 36, 0.75)",  // amber stars
      "rgba(254, 240, 138, 0.75)", // light yellow
      "rgba(255, 255, 255, 0.85)", // bright white moonlight
    ];

    const animationLoop = (time: number) => {
      // 1. Particle Trail Physics & Drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add trail sparkles (gently, to avoid irritation)
      if (time - physics.lastTrailTime > 80) {
        physics.lastTrailTime = time;
        particles.push({
          x: physics.x,
          y: physics.y + 12, // place trail near the base of the crown
          vx: (Math.random() - 0.5) * 0.4,
          vy: Math.random() * 0.4 + 0.1, // very slow drift downward
          alpha: 1.0,
          maxLife: Math.random() * 50 + 40,
          life: 0,
          size: Math.random() * 3.5 + 2.0, // slightly larger, soft glowing sparkles
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Update and draw particles
      particles = particles.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1.0 - (p.life / p.maxLife);

        if (p.life >= p.maxLife) return false;

        ctx.save();
        ctx.beginPath();
        
        const size = p.size * (1 - p.life / p.maxLife);
        ctx.translate(p.x, p.y);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = size * 4;
        ctx.shadowColor = p.color;
        
        // Render diamond/cross sparkle shape
        ctx.moveTo(0, -size * 2.2);
        ctx.quadraticCurveTo(0, 0, size * 2.2, 0);
        ctx.quadraticCurveTo(0, 0, 0, size * 2.2);
        ctx.quadraticCurveTo(0, 0, -size * 2.2, 0);
        ctx.quadraticCurveTo(0, 0, 0, -size * 2.2);
        
        ctx.fill();
        ctx.restore();

        return true;
      });

      // 2. Slow, Float-like Wandering Easing Math
      const dx = physics.targetX - physics.x;
      const dy = physics.targetY - physics.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // If close to target waypoint, choose a new one far away
      if (dist < 100) {
        physics.targetX = Math.random() * (window.innerWidth - 300) + 150;
        physics.targetY = Math.random() * (window.innerHeight - 300) + 150;
      }

      // Slow interpolation for ultra-smooth movement (lerp)
      const lerpFactor = 0.007; // Very slow speed to avoid jittering
      physics.x += dx * lerpFactor;
      physics.y += dy * lerpFactor;

      // Add gentle sinusoidal wave offset to give a true floating/drifting feeling
      const waveX = Math.sin(time * 0.0008) * 1.2;
      const waveY = Math.cos(time * 0.0006) * 1.2;
      physics.x += waveX;
      physics.y += waveY;

      // Calculate tilt angle based on heading velocity
      const angleMultiplier = 4;
      const targetAngle = Math.max(-15, Math.min(15, (dx / dist) * angleMultiplier));
      
      // Interpolate rotation for smooth transitions
      physics.angle += (targetAngle - physics.angle) * 0.05;
      setRotation(physics.angle);

      // Organic bobbing up and down
      const bobbing = Math.sin(time * 0.002) * 8;
      setHatPos({ x: physics.x, y: physics.y + bobbing });

      animFrameId = requestAnimationFrame(animationLoop);
    };

    animFrameId = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-30 select-none">
      {/* Canvas for trails */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating Straw Hat element (Upscaled to w-24 h-24 for visibility) */}
      <div
        className="absolute w-24 h-24 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${hatPos.x - 48}px, ${hatPos.y - 48}px, 0) rotate(${rotation}deg)`,
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
          {/* Hat rim */}
          <path d="M10 70 C20 62 80 62 90 70 C98 72 98 78 90 78 C80 78 20 78 10 78 C2 78 2 72 10 70 Z" fill="#facc15" stroke="#78350f" strokeWidth="4" />
          {/* Hat crown */}
          <path d="M28 69 C28 32 72 32 72 69 Z" fill="#facc15" stroke="#78350f" strokeWidth="4" />
          {/* Red ribbon */}
          <path d="M27.5 61 C37.5 63.5 62.5 63.5 72.5 61 C72.5 69 27.5 69 27.5 61 Z" fill="#ef4444" stroke="#78350f" strokeWidth="1.8" />
        </svg>
      </div>
    </div>
  );
}
