"use client";
import { useState, useRef, MouseEvent, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaCompass, FaCode, FaTerminal, FaExpandAlt, FaDownload, FaTimes } from "react-icons/fa";

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
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
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = -((mouseY - rect.height / 2) / rect.height) * 16;
    const rY = ((mouseX - rect.width / 2) / rect.width) * 16;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (mouseX / rect.width) * 100,
      y: (mouseY / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => !isMobile && setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="py-28 bg-[var(--background-secondary)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        {/* Section Heading */}
        <div className="text-center mb-16 cinema-header-reveal">
          <h2 className="cinema-title">About the Sailor</h2>
          <p className="cinema-subtitle mt-2">Cadet Dossier & Official Bounty Poster</p>
        </div>

        {/* 2-Column Split: Authentic Wanted Poster + Structured Technical Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 3D Interactive Wanted Poster (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center [perspective:1200px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsLightboxOpen(true)}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                transition: isHovered ? "none" : "transform 0.4s ease-out",
              }}
              className="wanted relative w-full max-w-[320px] sm:max-w-[360px] aspect-[2/3] rounded-lg shadow-2xl cursor-pointer overflow-hidden border border-[#5b3d1b]/40 group select-none"
            >
              {/* Authentic Wanted Poster Image */}
              <Image
                src="/wanted-poster.jpg"
                alt="Suryansh K Varma Official Wanted Poster"
                fill
                sizes="(max-width: 640px) 320px, 360px"
                priority
                className="object-cover object-center rounded-lg"
              />

              {/* Dynamic Sheen / Glare Overlay on Mouse Hover */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-lg"
                style={{
                  opacity: isHovered ? 0.35 : 0,
                  background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`,
                }}
              />

              {/* Enlarge Hint Badge */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#010510]/80 backdrop-blur-sm border border-[var(--border-subtle)] text-[#f0ead6] text-[10px] font-mono tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <FaExpandAlt size={9} className="text-[var(--gold-primary)]" />
                <span>Enlarge</span>
              </div>
            </div>

            {/* Poster Subtitle */}
            <p className="mt-3 text-[11px] font-mono tracking-widest uppercase text-[#9a8f7a] text-center">
              (Click poster to inspect high-resolution artifact)
            </p>
          </div>

          {/* Right Column: Clean Dark Dossier Specifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6 cinema-fade-up">
            <div className="p-7 rounded-lg bg-[#040d20] border border-[var(--border-subtle)] space-y-6">
              
              {/* Dossier Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--gold-primary)]" />
                  <span className="cinema-subtitle text-xs text-[var(--gold-light)]">
                    Cadet Identification Record
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#9a8f7a] font-mono">
                  REF: SV-2027-GRNDLN
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="p-3.5 rounded bg-[#010510]/60 border border-[var(--border-subtle)]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a8f7a] block mb-1 font-mono">
                    Official Title
                  </span>
                  <p className="text-sm font-semibold text-[#f0ead6] flex items-center gap-2">
                    <FaCode className="text-[var(--gold-primary)] text-xs" />
                    Full-Stack Software Engineer
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#010510]/60 border border-[var(--border-subtle)]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a8f7a] block mb-1 font-mono">
                    Cadet Fleet
                  </span>
                  <p className="text-sm font-semibold text-[#f0ead6] flex items-center gap-2">
                    <FaCompass className="text-[var(--gold-primary)] text-xs" />
                    VIT-AP University (CSBS)
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#010510]/60 border border-[var(--border-subtle)]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a8f7a] block mb-1 font-mono">
                    Primary Specialization
                  </span>
                  <p className="text-sm font-semibold text-[#f0ead6] flex items-center gap-2">
                    <FaTerminal className="text-[var(--gold-primary)] text-xs" />
                    Distributed Systems & Cloud
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#010510]/60 border border-[var(--border-subtle)]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9a8f7a] block mb-1 font-mono">
                    Status
                  </span>
                  <p className="text-sm font-semibold text-[#f0ead6] flex items-center gap-2">
                    <FaShieldAlt className="text-emerald-400 text-xs" />
                    Active Duty & Open to Missions
                  </p>
                </div>
              </div>

              {/* Narrative Bio */}
              <div className="pt-2 text-left">
                <h4 className="text-xs uppercase tracking-widest text-[var(--gold-light)] font-bold mb-2.5 font-mono">
                  Tactical Summary
                </h4>
                <p className="text-xs sm:text-sm text-[#d0c6b0] leading-relaxed">
                  Specialized in modern JavaScript ecosystems (Next.js, React, Node.js), Java Spring enterprise architecture, and serverless cloud systems on AWS. Passionate about marrying engineering rigor with intuitive user experiences—treating every technical challenge like an uncharted island waiting to be conquered.
                </p>
              </div>

              {/* Key Competencies Badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-left">
                {["Next.js", "TypeScript", "Spring Boot", "AWS Lambda", "PostgreSQL", "Docker", "Machine Learning"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-[11px] font-medium bg-[#010510] border border-[var(--border-subtle)] text-[#d0c6b0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* High-Resolution Poster Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-[#010510]/90 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-11 right-0 sm:-right-2 p-2 rounded-full text-[#9a8f7a] hover:text-[#f0ead6] transition-colors cursor-pointer"
                aria-label="Close poster view"
              >
                <FaTimes size={18} />
              </button>

              {/* Full Scale Poster Container */}
              <div className="relative w-full aspect-[2/3] max-h-[80vh] rounded-lg shadow-2xl overflow-hidden border border-[#5b3d1b]/60">
                <Image
                  src="/wanted-poster.jpg"
                  alt="Suryansh K Varma Wanted Poster Full"
                  fill
                  sizes="(max-width: 768px) 90vw, 520px"
                  priority
                  className="object-contain"
                />
              </div>

              {/* Action Toolbar */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="/wanted-poster.jpg"
                  download="Suryansh-Varma-Wanted-Poster.jpg"
                  className="px-5 py-2 rounded bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-[#010510] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <FaDownload size={11} /> Download Bounty Poster
                </a>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-4 py-2 rounded border border-[var(--border-subtle)] bg-[#040d20] hover:bg-[#081738] text-[#f0ead6] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
