"use client";
import { motion } from "framer-motion";
import { FaAws, FaJava, FaAward } from "react-icons/fa";

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
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2026",
    icon: <FaAws className="text-[#ff9900] text-4xl" />,
    desc: "Validates technical expertise in designing and deploying secure, robust, and scalable applications on AWS technologies.",
    skills: ["VPC", "IAM", "EC2", "S3", "Lambda", "ECR", "CloudWatch"],
  },
  {
    title: "Certified Java Developer",
    issuer: "IBM",
    date: "Jul 2025",
    icon: <FaJava className="text-[#e41f23] text-4xl" />,
    desc: "Certifies deep knowledge of Java enterprise development, object-oriented concepts, multi-threading, database connectivity, and backend security.",
    skills: ["Java SE/EE", "OOP", "Concurrency", "JDBC", "Secure APIs"],
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "Jun 2025",
    icon: <FaAward className="text-[#a435f0] text-4xl" />,
    desc: "Comprehensive full-stack developer training spanning HTML5, CSS3, modern JavaScript (ES6), Node.js, databases, and secure web deployment architectures.",
    skills: ["HTML & CSS", "JavaScript", "Node.js", "Express", "REST APIs", "SQL/NoSQL"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 text-center mb-2 tracking-widest drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Grand Line Credentials
        </h2>
        <p className="text-center text-sm text-yellow-100/70 mb-16 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Professional Certifications & Tech Credentials
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.15)"
              }}
              className="relative rounded-xl p-6 bg-[#fdf5e6] border-4 border-[#5b3d1b] flex flex-col justify-between min-h-[380px] overflow-hidden group shadow-xl"
            >
              {/* Parchment Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[url('/textures/parchment.png')] opacity-15 mix-blend-multiply rounded-lg" />

              <div>
                {/* Header Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#5b3d1b]/5 border-2 border-dashed border-[#5b3d1b]/40 flex items-center justify-center relative shadow-inner">
                    {c.icon}
                  </div>
                </div>

                <h3 
                  className="text-xl font-bold text-[#5b3d1b] text-center mb-2 leading-tight" 
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {c.title}
                </h3>
                
                <p className="text-xs text-[#b85a00] font-extrabold text-center uppercase tracking-wider mb-4">
                  {c.issuer} • {c.date}
                </p>

                <p className="text-xs text-[#3c2a18] font-medium leading-relaxed text-center mb-6 px-2">
                  {c.desc}
                </p>
              </div>

              {/* Skills and Verified Wax Seal Stamp */}
              <div>
                <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                  {c.skills.map((s) => (
                    <span 
                      key={s} 
                      className="px-2 py-0.5 bg-[#5b3d1b]/10 border border-[#5b3d1b]/25 rounded text-[10px] font-bold text-[#5b3d1b]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Wax Seal / Stamp */}
                <div className="border-t border-dashed border-[#5b3d1b]/30 pt-3 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    {/* Red Wax Seal Design */}
                    <div className="w-6 h-6 rounded-full bg-[#991b1b] flex items-center justify-center shadow-md relative overflow-hidden border border-[#7f1d1d]">
                      <span className="text-[8px] text-yellow-300 font-black tracking-tighter">SV</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#7f1d1b]">
                      Verified Credential
                    </span>
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
