"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Freshsense IoT", desc: "Smart fridge: expiry detection & recipes" },
  { title: "TravelWise", desc: "A smart Travel Planner" },
  { title: "E-commerce Next App", desc: "Fullstack Next.js shop with MERN stack" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#071022]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="h-pirate text-4xl text-yellow-300 text-center mb-8">Treasure Missions</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative rounded-lg p-6 bg-[#081229] border border-[#2b2b2b] shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="treasure-shimmer" />
              </div>

              <h3 className="text-2xl font-bold text-[#f6d57a]">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.desc}</p>

              <div className="mt-4 flex gap-3">
                <a className="px-4 py-2 bg-[#c77b00] rounded-md text-sm">Demo</a>
                <a className="px-4 py-2 border border-[#c77b00] rounded-md text-sm">Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}