"use client";
import { useState, useRef, MouseEvent, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation: maximum 25 degrees for strong 3D effect
    const rX = -(mouseY / height) * 25;
    const rY = (mouseX / width) * 25;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="py-24 bg-bg-secondary relative flex items-center justify-center overflow-hidden [perspective:1200px]">
      <div className="max-w-4xl mx-auto px-6 z-10 w-full flex justify-center">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
            transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className="wanted w-full max-w-sm p-8 rounded-xl bg-[#fdf5e6] shadow-[0_30px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_0_55px_rgba(234,179,8,0.45)] border-[10px] border-[#5b3d1b] flex flex-col items-center text-center relative cursor-pointer select-none"
        >
          {/* Card texture overlay with vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(91,61,27,0.15)_100%)] rounded-lg z-20" />

          {/* WANTED Title */}
          <h1 
            className="h-pirate text-5xl md:text-6xl text-[#5b3d1b] tracking-widest mb-1 select-none font-bold"
            style={{ transform: "translateZ(50px)" }}
          >
            WANTED
          </h1>
          <p 
            className="text-[10px] font-bold text-[#5b3d1b] tracking-[0.45em] uppercase border-b-2 border-[#5b3d1b] pb-2 w-full mb-6 select-none"
            style={{ transform: "translateZ(40px)" }}
          >
            Dead or Alive
          </p>

          {/* Sketchy Image Box */}
          <div 
            className="relative w-56 h-56 bg-[#ecdcb9] border-4 border-[#5b3d1b] mb-6 overflow-hidden flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
            style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(91,61,27,0.3)_100%)] pointer-events-none" />
            
            {/* Strawhat Luffy silhouette */}
            <svg 
              className="w-40 h-40 text-[#5b3d1b]/20 absolute"
              viewBox="0 0 100 100" 
              fill="currentColor"
              style={{ transform: "translateZ(20px)" }}
            >
              <path d="M15,65 C25,60 75,60 85,65 C95,67 95,73 85,73 C75,73 25,73 15,73 C5,73 5,67 15,65 Z" />
              <path d="M30,64 C30,40 70,40 70,64 Z" fill="currentColor" />
              <path d="M30,58 C35,59 65,59 70,58 C70,64 30,64 30,58 Z" fill="#991b1b" opacity="0.8" />
            </svg>
            
            <span className="h-pirate text-6xl text-[#5b3d1b]/30 select-none font-bold tracking-wider relative z-10" style={{ transform: "translateZ(30px)" }}>SV</span>
          </div>

          {/* Name */}
          <h2 
            className="h-pirate text-3xl md:text-4xl text-[#5b3d1b] tracking-wide select-none font-bold mb-2"
            style={{ transform: "translateZ(45px)" }}
          >
            SURYANSH K VARMA
          </h2>

          {/* Description */}
          <p 
            className="text-xs md:text-sm leading-relaxed text-[#2c1b0c] font-bold max-w-[280px] px-2 mb-4"
            style={{ transform: "translateZ(35px)", fontFamily: "var(--font-cinzel), serif" }}
          >
            A full-stack product engineer sailing the seas of web dev. He treats every project like a treasure map, building systems and steering crews to victory!
          </p>

          {/* Bounty Info */}
          <div 
            className="border-t border-dashed border-[#5b3d1b]/50 pt-4 w-full flex flex-col items-center select-none"
            style={{ transform: "translateZ(40px)" }}
          >
            <span className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-[#5b3d1b]/60">Bounty</span>
            <span className="h-pirate text-3xl md:text-4xl text-[#b85a00] font-bold tracking-widest mt-1">
              ฿ 3,000,000,000-
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}