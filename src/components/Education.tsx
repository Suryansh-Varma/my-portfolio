"use client";
import { motion } from "framer-motion";

const education = [
  {
    school: "VIT AP University",
    degree: "B.Tech CSE (Business Systems)",
    years: "2023 - 2027",
  },
  {
    school: "RGUKT R.K. Valley",
    degree: "PUC (MPC)",
    years: "2021 - 2023",
  },
  {
    school: "Sri Chaitanya EM High School",
    degree: "High School",
    years: "2009 - 2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 text-center mb-16 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-widest">
          Cadet Training
        </h2>

        <div className="space-y-8">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-xl bg-[#fdf5e6] border-4 border-[#5b3d1b] shadow-2xl transition duration-300"
            >
              {/* Parchment Overlay */}
              <div className="absolute inset-0 bg-[url('/textures/parchment.png')] opacity-15 mix-blend-multiply rounded-lg pointer-events-none" />

              <h3 
                className="relative text-2xl font-bold text-[#5b3d1b] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]" 
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                {e.school}
              </h3>
              <p className="relative mt-2 text-[#402b18] font-bold text-sm italic">
                {e.degree} • <span className="text-[#b85a00]">{e.years}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
