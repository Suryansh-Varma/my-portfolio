"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/devilfruits/bg1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Decorative ship */}
      <img
        src="/devilfruits/ship.png"
        alt="ship"
        className="absolute left-8 top-12 w-28 opacity-90 rounded-full float-anim"
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Name */}
        <motion.h1
          initial={{ y: -40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-pirate text-6xl md:text-6xl text-yellow-300 drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
        >
          SURYANSH D VARMA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg md:text-xl text-[#e6ddc8] max-w-2xl"
        >
          Ahoy! A CS & Business Systems cadet sailing the seas of full-stack
          development and product strategy.
        </motion.p>

        {/* Buttons */}
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
            className="text-white px-6 py-3 border border-[#c77b00] rounded-md font-semibold hover:bg-[#c77b00]/80 transition"
          >
            Send Message in Bottle
          </a>
        </motion.div>

        {/* Quote */}
        <h2
          className="mt-12 text-2xl md:text-3xl text-yellow-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)] tracking-widest max-w-3xl"
          style={{ fontFamily: "'Rampart One', cursive" }}
        >
          "If you don’t take risks, you can’t create a future!"
        </h2>
      </div>
    </section>
  );
}
