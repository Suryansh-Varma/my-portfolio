"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";

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
    fruitName: "Gomu Gomu no Mi",
    type: "Paramecia",
    img: "/devilfruits/D6.jpg",
    lore: "Grants structural elasticity to the user, allowing visual components and DOM elements to stretch, adapt, and render responsively across all viewports without breaking."
  },
  { 
    name: "Next.js & Node.js", 
    fruitName: "Gura Gura no Mi",
    type: "Paramecia",
    img: "/devilfruits/D5.jpg",
    lore: "Shatters static web barriers, generating server-side page vibrations that propagate real-time dynamic states across distributed databases with near-instant latency."
  },
  { 
    name: "C", 
    fruitName: "Goro Goro no Mi",
    type: "Logia",
    img: "/devilfruits/D9.jpg",
    lore: "Empowers the cadet to process low-level computation at lightning speed, piercing through compiler abstractions to manipulate memory addresses directly."
  },
  { 
    name: "C++", 
    fruitName: "Mera Mera no Mi",
    type: "Logia",
    img: "/devilfruits/D10.jpg",
    lore: "Ignites raw performance streams, accelerating CPU algorithms to thermal velocity and providing absolute hardware control for compute-intensive pipelines."
  },
  { 
    name: "Java", 
    fruitName: "Hito Hito no Mi, Model: Daibutsu",
    type: "Mythical Zoan",
    img: "/devilfruits/D1.jpg",
    lore: "Transforms code into an impenetrable golden class architecture, granting robust type safety, enterprise runtime resilience, and rock-solid OOP design."
  },
  { 
    name: "PHP", 
    fruitName: "Suna Suna no Mi",
    type: "Logia",
    img: "/devilfruits/D8.jpg",
    lore: "Dehydrates complex template fragments and commands file-system structures, joining server-side scripts into cohesive, dynamically rendered web streams."
  },
  { 
    name: "Databases", 
    fruitName: "Ishi Ishi no Mi",
    type: "Paramecia",
    img: "/devilfruits/D7.jpg",
    lore: "Allows the architect to fuse with tables, B-tree indices, and relations, structuring raw records into ACID-compliant query fortifications."
  },
  { 
    name: "Python", 
    fruitName: "Ope Ope no Mi",
    type: "Paramecia",
    img: "/devilfruits/D3.jpg",
    lore: "Deploys a surgical execution ROOM over data structures, granting mastery over machine learning arrays, predictive pipelines, and automation scripts."
  },
];

export default function Skills() {
  const [selectedFruit, setSelectedFruit] = useState<FruitSkill | null>(null);

  return (
    <section id="skills" className="relative py-28 bg-[var(--background)] text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">
        
        {/* Section Title */}
        <div className="mb-16 cinema-header-reveal">
          <h2 className="cinema-title">Devil Fruits of My Powers</h2>
          <p className="cinema-subtitle mt-2">Technical Proficiencies & Software Capabilities</p>
          <p className="text-xs text-[#9a8f7a] mt-2 italic font-medium">
            (Select an artifact to examine technical affinities and combat lore)
          </p>
        </div>

        {/* Studio-Quality Fruit Artifact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setSelectedFruit(skill)}
              className="relative flex flex-col items-center group cursor-pointer cinema-fade-up"
            >
              {/* Outer Precision Ring */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border border-[var(--border-subtle)] group-hover:border-[var(--gold-primary)] transition-all duration-300 bg-[#040d20] shadow-lg group-hover:shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full scale-100 group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Skill Name & Type */}
              <p
                className="mt-4 text-sm sm:text-base font-semibold text-[#f0ead6] group-hover:text-[var(--gold-light)] tracking-wider transition-colors duration-200"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                {skill.name}
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#9a8f7a] font-mono mt-0.5">
                {skill.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal with Studio Restraint */}
      <AnimatePresence>
        {selectedFruit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#010510]/85 backdrop-blur-md"
            onClick={() => setSelectedFruit(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md p-8 rounded-lg bg-[#040d20] border border-[var(--border-strong)] shadow-2xl text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFruit(null)}
                className="absolute top-4 right-4 p-1.5 text-[#9a8f7a] hover:text-[#f0ead6] transition-colors rounded-full"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col items-center">
                {/* Thumb */}
                <div className="w-20 h-20 rounded-full overflow-hidden border border-[var(--gold-primary)] mb-5 shadow-md">
                  <Image
                    src={selectedFruit.img}
                    alt={selectedFruit.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[var(--border-subtle)] bg-[#010510] text-[10px] font-mono tracking-widest text-[var(--gold-light)] uppercase mb-2">
                  <Sparkles size={11} /> {selectedFruit.type} Class
                </div>

                <h3 className="h-pirate text-3xl text-[#f0ead6] tracking-wider mb-1">
                  {selectedFruit.fruitName}
                </h3>

                <h4 className="text-xs font-mono font-medium text-[#9a8f7a] uppercase tracking-widest mb-4">
                  Tech Link: <span className="text-[var(--gold-primary)] font-bold">{selectedFruit.name}</span>
                </h4>

                <div className="w-full h-[1px] bg-[var(--border-subtle)] mb-5" />

                <p
                  className="text-xs sm:text-sm text-[#d0c6b0] leading-relaxed mb-6 font-normal px-2 text-center"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  &ldquo;{selectedFruit.lore}&rdquo;
                </p>

                <button
                  onClick={() => setSelectedFruit(null)}
                  className="px-6 py-2 rounded bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-[#010510] font-semibold text-xs tracking-widest uppercase transition-colors"
                >
                  Close Record
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
