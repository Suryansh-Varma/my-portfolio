"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", img: "/devilfruits/D6.jpg" },
  { name: "Next.js & Node.js", img: "/devilfruits/D5.jpg" },
  { name: "C", img: "/devilfruits/D9.jpg" },
  { name: "C++", img: "/devilfruits/D10.jpg" },
  { name: "Java", img: "/devilfruits/D1.jpg" },
  { name: "PHP", img: "/devilfruits/D8.jpg" },
  { name: "Databases", img: "/devilfruits/D7.jpg" },
  { name: "Python", img: "/devilfruits/D3.jpg" },
];

export default function Skills() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0b132b] via-[#1c2541] to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-12 drop-shadow-lg">
          Devil Fruits of My Powers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center"
            >
              {/* Glow effect behind fruit */}
              <motion.div
                className="absolute w-28 h-28 rounded-full blur-2xl bg-yellow-500/30"
                animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Devil Fruit Image */}
              <div className="relative z-10 w-28 h-28">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={112}
                  height={112}
                  className="rounded-full object-cover border-4 border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.8)]"
                />
              </div>

              {/* Skill Name */}
              <p className="mt-4 text-xl font-bold text-yellow-400 z-10">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}