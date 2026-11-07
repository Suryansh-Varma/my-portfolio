"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf, FaCompass } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const shipRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Initial state setup
      if (textRef.current) {
        gsap.set(textRef.current, {
          strokeDasharray: 2000,
          strokeDashoffset: 2000,
          fillOpacity: 0,
          stroke: "#e8b84b",
          strokeWidth: 1.5,
        });
      }

      // 2. Ink-stroke calligraphy draw animation
      tl.to(textRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.2,
      })
      .to(
        textRef.current,
        {
          fillOpacity: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.3"
      )
      // 3. Elements fade up with confident precision
      .fromTo(
        taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.2"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        socialsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        quoteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.2"
      )
      .fromTo(
        shipRef.current,
        { opacity: 0, x: -30 },
        { opacity: 0.95, x: 0, duration: 1.2, ease: "power2.out" },
        0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Background Video with Clean Studio Grade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.55) contrast(1.15) saturate(0.9)" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/devilfruits/bg1.mp4" type="video/mp4" />
        </video>
        {/* Subtle, non-cloudy vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010510]/80 via-[#010510]/40 to-[#010510]" />
      </div>

      {/* Decorative Thousand Sunny / Ship */}
      <img
        ref={shipRef}
        src="/devilfruits/ship.png"
        alt="Ship of the Strawhats"
        className="absolute left-6 md:left-12 top-28 w-16 md:w-28 opacity-0 float-anim z-10 pointer-events-none hidden sm:block select-none"
      />

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center mx-auto">
        {/* Top Arc Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--border-subtle)] bg-[#040d20]/70 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8b84b]" />
          <span className="cinema-subtitle text-[10px] md:text-xs text-[#e8b84b] tracking-[0.25em]">
            Grand Line Engineering Portfolio
          </span>
        </div>

        {/* Ink-Stroke Animated Name (SVG for infinite 16K vector precision) */}
        <div className="w-full max-w-4xl h-24 sm:h-32 md:h-44 flex items-center justify-center">
          <svg
            viewBox="0 0 1000 160"
            className="w-full h-full overflow-visible"
            aria-label="Suryansh K Varma"
          >
            <text
              ref={textRef}
              x="50%"
              y="68%"
              textAnchor="middle"
              className="h-pirate"
              style={{
                fontFamily: "var(--font-pirata-one), cursive",
                fontSize: "115px",
                letterSpacing: "0.06em",
                fill: "#f0ead6",
              }}
            >
              SURYANSH K VARMA
            </text>
          </svg>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-2 text-base sm:text-lg md:text-xl text-[#d0c6b0] max-w-2xl font-normal leading-relaxed opacity-0"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Computer Science & Business Systems cadet architecting resilient
          full-stack applications, scalable cloud microservices, and product strategy.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center opacity-0 w-full max-w-md"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-[#010510] font-semibold text-sm tracking-wider uppercase transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            <FaCompass className="text-base" /> View Missions
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 rounded border border-[var(--border-strong)] bg-[#040d20]/80 hover:bg-[#081738] text-[#f0ead6] font-semibold text-sm tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <FaFilePdf className="text-sm text-[#e8b84b]" /> Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded text-xs tracking-wider uppercase text-[#c8922a] hover:text-[#e8b84b] hover:bg-[#040d20]/60 transition-colors flex items-center justify-center"
          >
            Contact Shore
          </a>
        </div>

        {/* Social Links */}
        <div
          ref={socialsRef}
          className="mt-8 flex items-center gap-6 text-xl text-[#9a8f7a] opacity-0"
        >
          <a
            href="https://github.com/Suryansh-Varma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f0ead6] transition-colors"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a66c2] transition-colors"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_suryansh_varma_17/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e1306c] transition-colors"
            title="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </div>

        {/* One Piece Luffy Quote */}
        <h2
          ref={quoteRef}
          className="mt-14 text-sm sm:text-base md:text-lg text-[#9a8f7a] tracking-[0.2em] uppercase font-medium opacity-0"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          &ldquo;If you don't take risks, you can't create a future!&rdquo;
        </h2>
      </div>
    </section>
  );
}
