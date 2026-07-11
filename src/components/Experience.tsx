"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern - Web Developer",
    org: "PragnyaElectric",
    years: "2025",
    details: "Designed and engineered responsive full-stack features utilizing Next.js, Node.js, and MongoDB. Streamlined API route handlers and improved frontend rendering performance.",
  },
  {
    role: "Founder - Freshsense",
    org: "Voltedge",
    years: "2024 - Present",
    details: "Leading product engineering for a smart refrigerator automation system. Integrating hardware IoT sensor networks with Machine Learning models for predictive food preservation.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c77b00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 text-center mb-16 drop-shadow-md tracking-widest">
          Battlefield Experience
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-[#c77b00]/30">
          {experiences.map((ex, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={ex.role}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c77b00] border-4 border-[#020617] z-10 shadow-[0_0_10px_rgba(199,123,0,0.8)]" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="rounded-xl p-6 bg-gradient-to-br from-[#08202b]/60 to-[#071022]/80 border border-[#c77b00]/25 hover:border-[#c77b00]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300"
                  >
                    <span className="text-[#c77b00] text-xs font-bold tracking-widest uppercase block mb-1">
                      {ex.years}
                    </span>
                    <h3 className="text-2xl font-bold text-yellow-100" style={{ fontFamily: "var(--font-cinzel), serif" }}>
                      {ex.role}
                    </h3>
                    <h4 className="text-[#e6ddc8] font-semibold text-sm mt-0.5 mb-3">
                      {ex.org}
                    </h4>
                    <p className="text-[#b1b9c9] text-sm leading-relaxed">
                      {ex.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}