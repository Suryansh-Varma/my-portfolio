"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all coordinates before dispatching.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Your dispatch has reached the captain's desk safely!");
        setFormData({ name: "", email: "", message: "" });
        setShowSuccessAnimation(true);
      } else {
        setError(data.error || "A sea tempest disrupted transmission. Please retry.");
      }
    } catch {
      setError("Network Kraken intercepted connection. Check connectivity.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16 cinema-header-reveal">
          <h2 className="cinema-title">Message in a Bottle</h2>
          <p className="cinema-subtitle mt-2">
            Communication Channel & Coordination Port
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Column 1: Logbook Coordinates (2/5) */}
          <div className="md:col-span-2 p-7 rounded-lg bg-[#040d20] border border-[var(--border-subtle)] flex flex-col justify-between text-left cinema-fade-up">
            <div>
              <h3
                className="text-lg font-bold text-[#f0ead6] border-b border-[var(--border-subtle)] pb-3 mb-6"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                Logbook Coordinates
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-3.5 items-start">
                  <div className="text-[var(--gold-primary)] mt-1">
                    <FaEnvelope size={15} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a] mb-0.5">
                      Direct Email
                    </h4>
                    <a
                      href="mailto:suryansh.varma17@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-[#f0ead6] hover:text-[var(--gold-light)] transition-colors break-all"
                    >
                      suryansh.varma17@gmail.com
                    </a>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex gap-3.5 items-start">
                  <div className="text-[var(--gold-primary)] mt-1">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a] mb-0.5">
                      Call Transceiver
                    </h4>
                    <a
                      href="tel:+919959172369"
                      className="text-xs sm:text-sm font-semibold text-[#f0ead6] hover:text-[var(--gold-light)] transition-colors"
                    >
                      +91 99591 72369
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-3.5 items-start">
                  <div className="text-[var(--gold-primary)] mt-1">
                    <FaMapMarkerAlt size={15} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a] mb-0.5">
                      Home Port
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#f0ead6]">
                      Visakhapatnam, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center gap-5 mt-8 text-[#9a8f7a]">
              <a
                href="https://github.com/Suryansh-Varma"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f0ead6] transition-colors"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f0ead6] transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/_suryansh_varma_17/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f0ead6] transition-colors"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Dispatch Form (3/5) */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 p-7 sm:p-8 rounded-lg bg-[#040d20] border border-[var(--border-subtle)] space-y-5 text-left cinema-fade-up"
          >
            <div>
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a] mb-2">
                Cadet / Recruiter Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-2.5 rounded bg-[#010510] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] text-[#f0ead6] placeholder-[#9a8f7a]/50 outline-none text-xs sm:text-sm transition-colors"
                placeholder="E.g. Portgas D. Ace"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a] mb-2">
                Return Frequency (Email Address)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-2.5 rounded bg-[#010510] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] text-[#f0ead6] placeholder-[#9a8f7a]/50 outline-none text-xs sm:text-sm transition-colors"
                placeholder="commander@grandline.org"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[#9a8f7a] mb-2">
                Dispatch Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-2.5 rounded bg-[#010510] border border-[var(--border-subtle)] focus:border-[var(--border-strong)] text-[#f0ead6] placeholder-[#9a8f7a]/50 outline-none text-xs sm:text-sm transition-colors resize-none"
                rows={4}
                placeholder="Outline your mission coordinates or project inquiry..."
                required
              />
            </div>

            {/* Error / Success Notifications */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-rose-400 text-xs font-mono"
                >
                  ⚠ {error}
                </motion.div>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-emerald-400 text-xs font-mono"
                >
                  ✓ {success}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-[#010510] text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaPaperPlane size={11} />
              {loading ? "Dispatching..." : "Cast Bottle to Sea"}
            </button>
          </form>

        </div>
      </div>

      {/* Success Dialog */}
      <AnimatePresence>
        {showSuccessAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#010510]/85 backdrop-blur-md"
            onClick={() => setShowSuccessAnimation(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm p-7 rounded-lg bg-[#040d20] border border-[var(--border-strong)] shadow-2xl text-center"
            >
              <h3 className="h-pirate text-3xl text-[var(--gold-light)] mb-2">
                Dispatch Disembarked!
              </h3>
              <p
                className="text-xs text-[#d0c6b0] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                Your message in a bottle is navigating the tides toward the captain's desk. Expect an anchor communication shortly.
              </p>
              <button
                onClick={() => setShowSuccessAnimation(false)}
                className="px-6 py-2 rounded bg-[var(--gold-primary)] hover:bg-[var(--gold-light)] text-[#010510] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Acknowledge Log
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
