"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern - Web Developer",
    org: "PragnyaElectric",
    years: "2025",
    details: "Built responsive features, Next.js & MongoDB integrations.",
  },
  {
    role: "Founder - Freshsense",
    org: "Voltedge",
    years: "2024 - Present",
    details: "Smart refrigerator product, IoT + ML features.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#081229]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="h-pirate text-4xl text-yellow-300 text-center mb-8">Battlefield Experience</h2>

        <div className="space-y-6">
          {experiences.map((ex, i) => (
            <motion.div
              key={ex.role}
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-xl p-6 bg-gradient-to-r from-[#08202b] to-[#071022] border border-[#2f2b2b] shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#f1c97d]">{ex.role}</h3>
              <p className="text-sm italic">{ex.org} • {ex.years}</p>
              <p className="mt-2">{ex.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}