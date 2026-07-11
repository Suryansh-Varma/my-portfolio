"use client";
import { motion } from "framer-motion";
import { FaCompass, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface RepoLink {
  label: string;
  url: string;
}

interface ProjectItem {
  title: string;
  desc: string;
  demo?: string;
  repo?: string;
  repos?: RepoLink[];
  bounty: string;
}

const projects: ProjectItem[] = [
  { 
    title: "TravelWise", 
    desc: "A smart AI-driven travel planner designed to map out routes and optimize budgets.", 
    demo: "https://travelwise-app-a4qi.vercel.app/", 
    repo: "https://github.com/Suryansh-Varma/travelwise-app",
    bounty: "800,000,000"
  },
  { 
    title: "E-commerce Next App", 
    desc: "A full-stack, feature-rich Next.js shop powered by the MERN stack with secure payments.",
    demo: "https://techheaven.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/Suryansh-Varma/tech-heaven-frontend" },
      { label: "Backend", url: "https://github.com/Suryansh-Varma/tech-heaven-backend" }
    ],
    bounty: "650,000,000"
  },
  { 
    title: "Sheetflow", 
    desc: "An advanced spreadsheet automation tool for database and workflow management.", 
    demo: "https://sheetflow-kappa.vercel.app/", 
    repo: "https://github.com/Suryansh-Varma/sheetflow",
    bounty: "550,000,000"
  },
  { 
    title: "NiftySignal", 
    desc: "A stock market prediction and signaling tool built using machine learning classifiers.", 
    demo: "https://niftysignal.vercel.app/", 
    repo: "https://github.com/Suryansh-Varma/niftysignal",
    bounty: "450,000,000"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 text-center mb-16 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-widest">
          Treasure Missions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.2)"
              }}
              className="relative rounded-xl p-6 bg-[#fdf5e6] border-4 border-[#5b3d1b] flex flex-col justify-between min-h-[380px] overflow-hidden group shadow-xl"
            >
              {/* Parchment Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[url('/textures/parchment.png')] opacity-15 mix-blend-multiply rounded-lg" />

              <div>
                {/* Header with spinning compass on hover */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#5b3d1b] text-xs font-bold tracking-[0.2em] uppercase select-none">
                    Mission {i + 1}
                  </span>
                  <motion.div 
                    className="text-[#c77b00] text-xl"
                    variants={{
                      hover: { rotate: 360 }
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <FaCompass className="group-hover:rotate-180 transition duration-700" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-[#5b3d1b] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]" style={{ fontFamily: "var(--font-cinzel), serif" }}>
                  {p.title}
                </h3>
                
                <p className="mt-3 text-sm text-[#3c2a18] font-medium leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div>
                {/* Bounty at the bottom of card */}
                <div className="mt-5 pt-3 border-t border-dashed border-[#5b3d1b]/40 flex flex-col items-center select-none">
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#5b3d1b]/60">Bounty</span>
                  <span className="h-pirate text-lg text-[#b85a00] font-bold tracking-wider mt-0.5">
                    ฿ {p.bounty}-
                  </span>
                </div>

                {/* Stacked Button Layout */}
                <div className="mt-4 flex flex-col gap-2 z-10 relative">
                  {/* Demo Button */}
                  {p.demo ? (
                    <a 
                      className="w-full py-2 px-3 bg-[#c77b00] hover:bg-[#c77b00]/80 text-white rounded-md text-xs font-bold text-center shadow flex items-center justify-center gap-1.5 transition-colors duration-200" 
                      href={p.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={10} /> Live Demo
                    </a>
                  ) : (
                    <span className="w-full py-2 px-3 bg-slate-200 text-slate-500 rounded-md text-xs font-bold text-center cursor-not-allowed select-none block">
                      No Live Demo
                    </span>
                  )}

                  {/* Code Button Row */}
                  <div className="flex gap-2">
                    {p.repo && (
                      <a 
                        className="flex-1 py-2 px-3 border-2 border-[#5b3d1b] text-[#5b3d1b] hover:bg-[#5b3d1b]/10 rounded-md text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors duration-200" 
                        href={p.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={12} /> Source Code
                      </a>
                    )}

                    {p.repos && p.repos.map((r) => (
                      <a 
                        key={r.label}
                        className="flex-1 py-2 px-1 border-2 border-[#5b3d1b] text-[#5b3d1b] hover:bg-[#5b3d1b]/10 rounded-md text-[10px] font-bold text-center flex items-center justify-center gap-1 transition-colors duration-200" 
                        href={r.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={`${r.label} Repository`}
                      >
                        <FaGithub size={10} /> {r.label}
                      </a>
                    ))}

                    {!p.repo && !p.repos && (
                      <span className="flex-1 py-2 px-3 border-2 border-slate-200 text-slate-400 rounded-md text-xs font-bold text-center cursor-not-allowed select-none">
                        Private Code
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
