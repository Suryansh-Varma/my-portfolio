"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Freshsense IoT", desc: "Smart fridge: expiry detection & recipes" },
  { title: "TravelWise", desc: "A smart Travel Planner" },
  { title: "E-commerce Next App", desc: "Fullstack Next.js shop with MERN stack" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#071022] relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="h-pirate text-4xl text-yellow-300 text-center mb-12 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
          Treasure Missions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative rounded-xl p-6 bg-[#fdf5e6]/90 border-4 border-[#5b3d1b]/70 shadow-[0_0_25px_rgba(0,0,0,0.6)]"
            >
              {/* Treasure map overlay effect */}
              <div className="absolute inset-0 pointer-events-none bg-[url('/textures/parchment.png')] opacity-20 mix-blend-multiply rounded-xl" />

              <h3 className="relative text-2xl font-bold text-[#5b3d1b] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.4)]">
                {p.title}
              </h3>
              <p className="relative mt-3 text-[#2c1b0c] leading-relaxed">
                {p.desc}
              </p>

              <div className="relative mt-6 flex gap-3">
                <a className="px-4 py-2 bg-[#c77b00] text-white rounded-md font-medium shadow hover:scale-105 transition">
                  Demo
                </a>
                <a className="px-4 py-2 border-2 border-[#c77b00] text-[#5b3d1b] bg-[#fff4e0]/60 rounded-md font-medium hover:bg-[#c77b00]/20 transition">
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
