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
    <section id="education" className="py-20 bg-[#071022] relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="h-pirate text-4xl text-yellow-300 text-center mb-12 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
          Cadet Training
        </h2>

        <div className="space-y-8">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative p-6 rounded-xl bg-[#fdf5e6]/90 border-4 border-[#5b3d1b]/70 shadow-[0_0_25px_rgba(0,0,0,0.6)]"
            >
              {/* optional parchment texture overlay */}
              <div className="absolute inset-0 bg-[url('/textures/parchment.png')] opacity-20 mix-blend-multiply rounded-xl pointer-events-none" />

              <h3 className="relative text-2xl font-bold text-[#5b3d1b] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
                {e.school}
              </h3>
              <p className="relative mt-2 text-[#2c1b0c] italic">
                {e.degree} • {e.years}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
