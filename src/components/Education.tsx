"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    school: "VIT-AP University",
    degree: "B.Tech in Computer Science & Engineering (Business Systems)",
    years: "2023 - 2027",
    details: "Focusing on enterprise software engineering, business process management, data structures, and cloud computing architectures.",
    status: "Active Cadet (Undergraduate)",
  },
  {
    school: "RGUKT R.K. Valley",
    degree: "Pre-University Course (MPC)",
    years: "2021 - 2023",
    details: "Foundational coursework in advanced mathematics, physics, computing principles, and competitive analytical problem-solving.",
    status: "Completed with Distinction",
  },
  {
    school: "Sri Chaitanya EM High School",
    degree: "Secondary School Certificate",
    years: "2009 - 2021",
    details: "Strong academic foundation in science and mathematics with early induction into programming concepts.",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 cinema-header-reveal">
          <h2 className="cinema-title">Cadet Training</h2>
          <p className="cinema-subtitle mt-2">
            Academic Background & Theoretical Foundations
          </p>
        </div>

        {/* Studio-Grade Clean Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[var(--border-subtle)] space-y-10">
          {education.map((e) => (
            <div key={e.school} className="relative group cinema-fade-up">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#010510] border-2 border-[var(--gold-primary)] group-hover:scale-125 transition-transform duration-200" />

              {/* Academic Card */}
              <div className="p-6 sm:p-7 rounded-lg bg-[#040d20] border border-[var(--border-subtle)] group-hover:border-[var(--border-strong)] shadow-md transition-colors duration-200 text-left">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-[var(--gold-primary)] text-base" />
                    <h3
                      className="text-xl font-bold text-[#f0ead6]"
                      style={{ fontFamily: "var(--font-cinzel), serif" }}
                    >
                      {e.school}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-[var(--gold-light)] uppercase">
                    {e.years}
                  </span>
                </div>

                <p className="text-sm font-semibold text-[#d0c6b0] mb-2">
                  {e.degree}
                </p>

                <p className="text-xs sm:text-[13px] text-[#9a8f7a] leading-relaxed mb-3">
                  {e.details}
                </p>

                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#9a8f7a] border border-[var(--border-subtle)] px-2.5 py-0.5 rounded bg-[#010510]">
                  {e.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
