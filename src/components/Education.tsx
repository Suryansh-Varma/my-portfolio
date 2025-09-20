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
    degree: "PUC + IT Foundation",
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
    <section id="education" className="py-20 bg-[#071022]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="h-pirate text-4xl text-yellow-300 text-center mb-8">Cadet Training</h2>

        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="wanted p-6 rounded-md"
            >
              <h3 className="text-2xl font-bold text-[#6b451a]">{e.school}</h3>
              <p className="text-sm italic">{e.degree} • {e.years}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}