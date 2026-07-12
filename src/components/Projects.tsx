"use client";
import { motion } from "framer-motion";
import { FaCompass, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface RepoLink {
  label: string;
  url: string;
}

interface ProjectItem {
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  bullets: string[];
  demo?: string;
  repo?: string;
  repos?: RepoLink[];
  bounty: string;
}

const projects: ProjectItem[] = [
  { 
    title: "SheetFlow",
    subtitle: "Real-time Collaborative Spreadsheet",
    desc: "A real-time collaborative spreadsheet supporting live multi-user editing with presence indicators and <100ms cell sync latency.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    bullets: [
      "Built a real-time collaborative spreadsheet supporting live multi-user editing with presence indicators and <100ms cell sync latency using Supabase Realtime channels."
    ],
    demo: "https://sheetflow-kappa.vercel.app/", 
    repo: "https://github.com/Suryansh-Varma/sheetflow",
    bounty: "850,000,000"
  },
  { 
    title: "Neighborhood Carpool coordination",
    subtitle: "AWS Serverless Matching Service",
    desc: "A full-stack carpool platform deploying matching logic on AWS Lambda and containerized services using Amazon ECR.",
    tech: ["React", "Python (FastAPI)", "AWS Lambda", "Amazon ECR", "GitHub"],
    bullets: [
      "Built a full-stack carpool coordination platform in a 4-person team, enabling users to create, join, and manage carpool groups by location and destination, using a React frontend and FastAPI backend."
    ],
    demo: "http://35.153.45.221/",
    repos: [
      { label: "Frontend", url: "https://github.com/Rama-Krishna-Pidugu/community-carpool-connect" },
      { label: "Backend", url: "https://github.com/Rama-Krishna-Pidugu/carpooling-backend" }
    ],
    bounty: "950,000,000"
  },
  { 
    title: "Smart Commerce(TechHeaven)",
    subtitle: "Full-Stack Enterprise E-Commerce Platform",
    desc: "A production-style full-stack e-commerce platform featuring JWT authentication, role-based authorization, and Swagger docs.",
    tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Next.js", "React", "TypeScript", "Docker", "Swagger"],
    bullets: [
      "Engineered a production-style full-stack e-commerce platform featuring JWT authentication, role-based authorization, product management, shopping cart, checkout, and order processing using Spring Boot and PostgreSQL."
    ],
    demo: "https://techheaven.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/Suryansh-Varma/tech-heaven-frontend" },
      { label: "Backend", url: "https://github.com/Suryansh-Varma/tech-heaven-backend" }
    ],
    bounty: "750,000,000"
  },
  { 
    title: "NiftySignal",
    subtitle: "NSE Market Predictor & Dashboard",
    desc: "An ML-driven financial forecasting tool predicting short-term market trends using LSTM and ensemble models on NSE historical data.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "NSE API"],
    bullets: [
      "Built an ML-driven financial forecasting tool on NSE historical data using LSTM and ensemble models to predict short-term market trends with ~72% directional accuracy on test data.",],
    demo: "https://niftysignal.onrender.com/docs", 
    repo: "https://github.com/Suryansh-Varma/niftysignal",
    bounty: "650,000,000"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 text-center mb-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-widest">
          Treasure Missions
        </h2>
        <p className="text-center text-sm text-yellow-100/70 mb-16 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Featured Engineering Projects & Technical Architecture
        </p>

        <div className="grid md:grid-cols-2 gap-8">
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
              className="relative rounded-xl p-8 bg-[#fdf5e6] border-4 border-[#5b3d1b] flex flex-col justify-between min-h-[480px] overflow-hidden group shadow-xl"
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
                <h4 className="text-xs font-bold text-[#b85a00] uppercase tracking-wider mt-1 mb-3">
                  {p.subtitle}
                </h4>

                {/* Tech Stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 bg-[#5b3d1b]/10 border border-[#5b3d1b]/25 rounded text-[10px] font-bold text-[#5b3d1b]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Bullet points */}
                <ul className="mt-3 text-xs text-[#3c2a18] font-semibold leading-relaxed space-y-2 list-disc list-outside pl-4">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="marker:text-[#c77b00]">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Bounty at the bottom of card */}
                <div className="mt-6 pt-3 border-t border-dashed border-[#5b3d1b]/40 flex flex-col items-center select-none">
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
