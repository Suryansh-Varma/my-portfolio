"use client";
import { motion } from "framer-motion";
import { FaAws, FaJava, FaAward, FaCheckCircle } from "react-icons/fa";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  desc: string;
  skills: string[];
}

const certifications: CertificationItem[] = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Jul 2026",
    icon: <FaAws className="text-[#ff9900] text-3xl" />,
    desc: "Validates technical proficiency in architecting and deploying secure, resilient, and scalable enterprise cloud solutions across AWS services.",
    skills: ["VPC", "IAM", "EC2", "S3", "Lambda", "ECR", "CloudWatch"],
  },
  {
    title: "Certified Java Developer",
    issuer: "IBM",
    date: "Jul 2025",
    icon: <FaJava className="text-[#e41f23] text-3xl" />,
    desc: "Certifies deep technical mastery in enterprise Java engineering, multi-threading, OOP paradigms, database connectivity, and REST architectures.",
    skills: ["Java SE/EE", "OOP", "Concurrency", "JDBC", "Secure APIs"],
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "Jun 2025",
    icon: <FaAward className="text-[var(--gold-primary)] text-3xl" />,
    desc: "Comprehensive software development curriculum spanning modern JavaScript (ES6+), React, Node.js runtime, relational schemas, and secure deployment pipelines.",
    skills: ["HTML5 & CSS3", "JavaScript", "Node.js", "Express", "REST APIs", "SQL"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-[var(--background-secondary)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 cinema-header-reveal">
          <h2 className="cinema-title">Grand Line Credentials</h2>
          <p className="cinema-subtitle mt-2">
            Verified Certifications & Technical Accreditations
          </p>
        </div>

        {/* 3-Column Dark Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-lg p-7 bg-[#040d20] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] flex flex-col justify-between shadow-xl transition-colors duration-200 group text-left cinema-fade-up"
            >
              <div>
                {/* Icon & Issuer Header */}
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#010510] border border-[var(--border-subtle)] flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a]">
                    {c.date}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-[#f0ead6] group-hover:text-[var(--gold-light)] transition-colors mb-1"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {c.title}
                </h3>

                <p className="text-xs font-mono font-medium text-[var(--gold-primary)] uppercase tracking-wider mb-4">
                  {c.issuer}
                </p>

                <p className="text-xs text-[#9a8f7a] leading-relaxed mb-6">
                  {c.desc}
                </p>
              </div>

              {/* Skills Tags & Verified Badge */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#010510] border border-[var(--border-subtle)] text-[#d0c6b0]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-emerald-400">
                  <FaCheckCircle size={10} />
                  <span>Credential Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
