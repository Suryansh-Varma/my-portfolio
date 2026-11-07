"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCompass } from "react-icons/fa";

interface RepoLink {
  label: string;
  url: string;
}

interface ProjectItem {
  id: string;
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
    id: "MISSION 01",
    title: "SheetFlow",
    subtitle: "Real-Time Collaborative Spreadsheet",
    desc: "A real-time collaborative spreadsheet engine supporting live multi-user editing with cursor presence indicators and <100ms cell sync latency.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    bullets: [
      "Built a real-time collaborative spreadsheet supporting live multi-user editing with presence indicators and <100ms cell sync latency using Supabase Realtime channels.",
      "Engineered an in-memory formula parser supporting dynamic arithmetic evaluations, cell references, and multi-user undo/redo states."
    ],
    demo: "https://sheetflow-kappa.vercel.app/", 
    repo: "https://github.com/Suryansh-Varma/sheetflow",
    bounty: "850,000,000"
  },
  { 
    id: "MISSION 02",
    title: "Neighborhood Carpool",
    subtitle: "AWS Serverless Matching Service",
    desc: "A full-stack carpool platform deploying matching logic on AWS Lambda and containerized microservices using Amazon ECR.",
    tech: ["React", "Python (FastAPI)", "AWS Lambda", "Amazon ECR", "GitHub"],
    bullets: [
      "Built a full-stack carpool coordination platform in a 4-person team, enabling users to create, join, and manage carpool groups by location and destination.",
      "Architected serverless dispatch functions on AWS Lambda with containerized microservices managed via Amazon ECR for rapid scaling."
    ],
    demo: "http://35.153.45.221/",
    repos: [
      { label: "Frontend", url: "https://github.com/Rama-Krishna-Pidugu/community-carpool-connect" },
      { label: "Backend", url: "https://github.com/Rama-Krishna-Pidugu/carpooling-backend" }
    ],
    bounty: "950,000,000"
  },
  { 
    id: "MISSION 03",
    title: "Smart Commerce (TechHeaven)",
    subtitle: "Enterprise E-Commerce Architecture",
    desc: "A production-style full-stack e-commerce platform featuring JWT authentication, role-based authorization, and Swagger documentation.",
    tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Next.js", "Docker"],
    bullets: [
      "Engineered an enterprise e-commerce platform featuring JWT authentication, role-based authorization, shopping cart, and order processing using Spring Boot and PostgreSQL.",
      "Integrated automated API documentation via OpenAPI/Swagger and packaged backend services inside Docker containers for reproducible environments."
    ],
    demo: "https://techheaven.vercel.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/Suryansh-Varma/tech-heaven-frontend" },
      { label: "Backend", url: "https://github.com/Suryansh-Varma/tech-heaven-backend" }
    ],
    bounty: "750,000,000"
  },
  { 
    id: "MISSION 04",
    title: "NiftySignal",
    subtitle: "NSE Market Predictor & Dashboard",
    desc: "An ML-driven financial forecasting dashboard predicting short-term market trends using LSTM and ensemble models on NSE historical data.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "FastAPI"],
    bullets: [
      "Built an ML-driven financial forecasting tool on NSE historical data using LSTM and ensemble models to predict short-term market trends with ~72% directional accuracy.",
      "Built an automated inference API and interactive charting dashboard for technical indicators and trade signal evaluations."
    ],
    demo: "https://niftysignal.onrender.com/docs", 
    repo: "https://github.com/Suryansh-Varma/niftysignal",
    bounty: "650,000,000"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[var(--background-secondary)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 cinema-header-reveal">
          <h2 className="cinema-title">Treasure Missions</h2>
          <p className="cinema-subtitle mt-2">
            Featured Engineering Projects & Technical Architecture
          </p>
        </div>

        {/* 2-Column Movie Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative rounded-lg p-7 sm:p-8 bg-[#040d20] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] flex flex-col justify-between shadow-xl transition-colors duration-200 group cinema-fade-up"
            >
              <div>
                {/* Header: Mission Tag & Bounty */}
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-5">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a] group-hover:text-[var(--gold-light)] transition-colors">
                    {p.id}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#9a8f7a]">
                      Bounty:
                    </span>
                    <span className="h-pirate text-base text-[var(--gold-light)] font-bold tracking-wider">
                      ฿ {p.bounty}-
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3
                  className="text-2xl font-bold text-[#f0ead6] group-hover:text-[var(--gold-light)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {p.title}
                </h3>
                <h4 className="text-xs font-mono font-medium text-[var(--gold-primary)] uppercase tracking-wider mt-1 mb-4">
                  {p.subtitle}
                </h4>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#010510] border border-[var(--border-subtle)] text-[#d0c6b0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="text-xs sm:text-[13px] text-[#9a8f7a] leading-relaxed space-y-2.5 mb-6 text-left">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--gold-primary)] mt-0.5 text-xs">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row gap-2.5">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-[#010510] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FaExternalLinkAlt size={10} /> Live Deployment
                  </a>
                )}

                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[#010510] hover:bg-[#081738] text-[#f0ead6] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FaGithub size={12} /> Source Code
                  </a>
                )}

                {p.repos && p.repos.map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[#010510] hover:bg-[#081738] text-[#f0ead6] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FaGithub size={12} /> {r.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
