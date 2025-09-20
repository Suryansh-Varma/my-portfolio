"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#071022]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="wanted p-8 rounded-lg">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="h-pirate text-4xl text-[#5b3d1b]"
          >
            Ahoy! — About this Sailor
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-800"
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