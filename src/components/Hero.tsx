"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/devilfruits/bg1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Decorative ship/hat */}
      <img
        src="/devilfruits/ship.png"
        alt="ship"
        height={40}
        width={56}
        className="rounded-full absolute left-8 top-12 w-28 opacity-90 float-anim"
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ y: -40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-pirate text-6xl md:text-6xl text-yellow-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
        > 
          SURYANSH VARMA K
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg md:text-xl text-[#e6ddc8] max-w-2xl"
        >
          Ahoy! A CS & Business Systems cadet sailing the seas of full-stack
          development and product strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#c77b00] rounded-md font-semibold shadow-lg hover:scale-105 transition"
          >
            View Missions
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#c77b00] rounded-md font-semibold hover:bg-[#c77b00]/80 transition"
          >
            Send Message in Bottle
          </a>
        </motion.div>
      </div>
    </section>
  );
}