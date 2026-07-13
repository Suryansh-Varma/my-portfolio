"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background with CSS filters to mask low-res artifacts */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(1.5px) contrast(1.15) brightness(0.75)" }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/devilfruits/bg1.mp4" type="video/mp4" />
      </video>

      {/* Styled Grid / Scanline Noise Overlay to cover low-resolution quality */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.08]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%),
            linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))
          `,
          backgroundSize: "100% 4px, 6px 100%"
        }}
      />

      {/* Dark overlay with dynamic marine gradient for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/35 to-[#020617] mix-blend-multiply z-10" />

      {/* Visually spectacular glowing light ray / marine caustic overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-10 mix-blend-color-dodge bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.2)_0%,transparent_60%)]" />

      {/* Decorative ship */}
      <img
        src="/devilfruits/ship.png"
        alt="ship"
        className="absolute left-4 md:left-8 top-24 w-16 md:w-28 opacity-90 rounded-full float-anim z-20 pointer-events-none hidden sm:block"
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20 md:pt-0">
        {/* Name */}
        <motion.h1
          initial={{ y: -40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-pirate text-3xl sm:text-5xl md:text-7xl text-yellow-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] leading-tight"
        >
          SURYANSH K VARMA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg md:text-xl text-[#e6ddc8] max-w-2xl font-medium tracking-wide"
        >
          Ahoy! A CS & Business Systems cadet sailing the seas of full-stack
          development and product strategy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#c77b00] hover:bg-[#c77b00]/80 text-white rounded-md font-semibold shadow-[0_0_15px_rgba(199,123,0,0.4)] hover:shadow-[0_0_25px_rgba(199,123,0,0.8)] hover:scale-105 transition flex items-center justify-center gap-2"
          >
            View Missions
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded-md font-bold shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.8)] hover:scale-105 transition flex items-center justify-center gap-2"
          >
            <FaFilePdf /> View Resume
          </a>
          <a
            href="#contact"
            className="text-white px-6 py-3 border border-[#c77b00]/50 hover:bg-[#c77b00]/20 rounded-md font-semibold shadow-[0_0_10px_rgba(199,123,0,0.1)] hover:shadow-[0_0_20px_rgba(199,123,0,0.5)] hover:scale-105 transition flex items-center justify-center gap-2"
          >
            Send Message in Bottle
          </a>
        </motion.div>

        {/* Social Icons in Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex gap-6 text-3xl"
        >
          <a
            href="https://github.com/Suryansh-Varma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e6ddc8] hover:text-yellow-400 transition hover:scale-115"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e6ddc8] hover:text-[#0a66c2] transition hover:scale-115"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_suryansh_varma_17/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e6ddc8] hover:text-pink-500 transition hover:scale-115"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Quote */}
        <h2
          className="mt-12 text-2xl md:text-3xl text-yellow-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)] tracking-widest max-w-3xl leading-relaxed"
          style={{ fontFamily: "'Rampart One', cursive" }}
        >
          "If you don’t take risks, you can’t create a future!"
        </h2>
      </div>
    </section>
  );
}
