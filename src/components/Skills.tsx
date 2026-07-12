"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ShieldAlert } from "lucide-react";

interface FruitSkill {
  name: string;
  fruitName: string;
  type: "Paramecia" | "Logia" | "Zoan" | "Mythical Zoan";
  img: string;
  lore: string;
}

const skills: FruitSkill[] = [
  { 
    name: "React", 
    fruitName: "Gomu Gomu no Mi (Gum-Gum Fruit)",
    type: "Paramecia",
    img: "/devilfruits/D6.jpg",
    lore: "Grants structural elasticity to the user, allowing visual components and DOM elements to stretch, squash, and adapt dynamically across all viewports without breaking."
  },
  { 
    name: "Next.js & Node.js", 
    fruitName: "Gura Gura no Mi (Tremor-Tremor Fruit)",
    type: "Paramecia",
    img: "/devilfruits/D5.jpg",
    lore: "Shatters static web barriers, generating massive server-side page rendering vibrations that propagate real-time dynamic changes across the database oceans."
  },
  { 
    name: "C", 
    fruitName: "Goro Goro no Mi (Rumble-Rumble Fruit)",
    type: "Logia",
    img: "/devilfruits/D9.jpg",
    lore: "Allows the user to process calculations at the speed of raw electricity, slicing through compiler abstraction layers to touch memory addresses directly."
  },
  { 
    name: "C++", 
    fruitName: "Mera Mera no Mi (Flame-Flame Fruit)",
    type: "Logia",
    img: "/devilfruits/D10.jpg",
    lore: "Transforms code strings into high-speed fire streams, accelerating CPU processes to thermal velocity and providing absolute hardware execution performance."
  },
  { 
    name: "Java", 
    fruitName: "Hito Hito no Mi, Model: Daibutsu (Buddha Fruit)",
    type: "Mythical Zoan",
    img: "/devilfruits/D1.jpg",
    lore: "Transforms the programmer into a giant golden class structure, granting massive static typing armor, runtime shields, and impenetrable object-oriented architecture."
  },
  { 
    name: "PHP", 
    fruitName: "Suna Suna no Mi (Sand-Sand Fruit)",
    type: "Logia",
    img: "/devilfruits/D8.jpg",
    lore: "Dehydrates template fragments and controls file system sandstorms, merging separate server-side scripts into cohesive, dynamically rendered server oceans."
  },
  { 
    name: "Databases", 
    fruitName: "Ishi Ishi no Mi (Stone-Stone Fruit)",
    type: "Paramecia",
    img: "/devilfruits/D7.jpg",
    lore: "Permits the database administrator to merge with tables, keys, and index nodes, configuring raw records into query-optimized stone fortifications."
  },
  { 
    name: "Python", 
    fruitName: "Ope Ope no Mi (Op-Op Fruit)",
    type: "Paramecia",
    img: "/devilfruits/D3.jpg",
    lore: "Creates a vast execution space or 'ROOM', granting surgical precision over data frames, machine learning slices, automation pipelines, and array manipulations."
  },
];

export default function Skills() {
  const [selectedFruit, setSelectedFruit] = useState<FruitSkill | null>(null);

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-bg-secondary via-background to-background text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 mb-2 tracking-widest">
          Devil Fruits of My Powers
        </h2>
        <p className="text-yellow-100/70 mb-2 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Technical Skills & Software Expertise
        </p>
        <p className="text-[#e6ddc8]/80 mb-16 text-xs italic font-medium tracking-wide">
          (Click a Devil Fruit below to inspect its combat lore and tech affinity)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={() => setSelectedFruit(skill)}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              {/* Glow effect behind fruit */}
              <motion.div
                className="absolute w-28 h-28 rounded-full blur-2xl bg-yellow-500/20 group-hover:bg-yellow-500/40 transition duration-300"
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
              />

              {/* Devil Fruit Image */}
              <div className="relative z-10 w-28 h-28 overflow-hidden rounded-full border-4 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] group-hover:border-yellow-400 transition-all duration-300">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={112}
                  height={112}
                  className="rounded-full object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Skill Name */}
              <p 
                className="mt-6 text-lg font-bold text-[#e6ddc8] group-hover:text-yellow-300 z-10 tracking-wider transition-colors duration-250"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedFruit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedFruit(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md p-8 rounded-xl bg-[#fdf5e6] border-8 border-[#5b3d1b] shadow-2xl overflow-hidden text-center"
            >
              {/* Parchment Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[url('/textures/parchment.png')] opacity-15 mix-blend-multiply rounded-lg" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedFruit(null)}
                className="absolute top-4 right-4 p-1.5 text-[#5b3d1b] hover:bg-[#5b3d1b]/10 rounded-full transition-colors z-30"
              >
                <X size={20} />
              </button>

              {/* Fruit details */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Large glow */}
                <div className="absolute w-24 h-24 rounded-full blur-xl bg-yellow-500/25 -z-10" />

                {/* Fruit Round Thumb */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#5b3d1b] shadow-lg mb-6">
                  <Image 
                    src={selectedFruit.img} 
                    alt={selectedFruit.name} 
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-[10px] font-bold text-[#b85a00] uppercase tracking-[0.25em] mb-1 select-none">
                  {selectedFruit.type} Type
                </span>

                <h3 className="h-pirate text-3xl text-[#5b3d1b] tracking-wider mb-2">
                  {selectedFruit.fruitName}
                </h3>

                <h4 className="text-sm font-extrabold text-[#5b3d1b] uppercase tracking-widest border-b border-[#5b3d1b]/30 pb-3 w-full mb-4">
                  Tech Link: <span className="text-[#c77b00]">{selectedFruit.name}</span>
                </h4>

                <p 
                  className="text-[#2c1b0c] text-sm leading-relaxed font-semibold px-2 mb-6" 
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  "{selectedFruit.lore}"
                </p>

                <button 
                  onClick={() => setSelectedFruit(null)}
                  className="px-6 py-2 bg-[#5b3d1b] hover:bg-[#432d14] text-[#fdf5e6] rounded font-bold shadow transition-colors text-xs tracking-widest uppercase"
                >
                  Close Log Book
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}