"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#071022] relative">
  <div className="max-w-4xl mx-auto px-6">
    <div className="wanted p-10 rounded-xl bg-[#fdf5e6]/90 shadow-[0_0_25px_rgba(0,0,0,0.6)] border-4 border-[#5b3d1b]/70">
      <motion.h2
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="h-pirate text-4xl text-[#5b3d1b] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]"
      >
        About this Sailor
      </motion.h2>

      <motion.p
        className="mt-6 text-lg leading-relaxed text-[#2c1b0c] font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’m Suryansh — a developer and product thinker who treats every
        project like a treasure map. I build full-stack products, ship
        reliable systems and steer teams to meaningful outcomes.
      </motion.p>
    </div>
  </div>
</section>

  );
}