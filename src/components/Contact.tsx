"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
      setError("Please fill in all fields before launching the bottle.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Your message in a bottle has reached the shore safely!");
        setFormData({ name: "", email: "", message: "" });
        setShowSuccessAnimation(true); // Open the animation overlay
      } else {
        setError(data.error || "A sudden sea storm swept your bottle away. Try again!");
      }
    } catch (err) {
      setError("A network Kraken intercepted your message. Check your connection!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 text-center mb-4 tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Message in a Bottle
        </h2>
        <p className="text-[#e6ddc8] text-center mb-16 text-sm font-semibold tracking-wide" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Drop your message or call the ship to connect.
        </p>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Column 1: Contact Coordinates (2/5 span) */}
          <motion.div
            className="md:col-span-2 space-y-6 bg-[#081229]/40 backdrop-blur-md p-8 rounded-xl border border-[#c77b00]/20 shadow-2xl h-full flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="h-pirate text-2xl text-yellow-300 mb-6 tracking-wider border-b border-[#c77b00]/20 pb-3">
                Logbook Coordinates
              </h3>

              <div className="space-y-6 text-left">
                {/* Email Address */}
                <div className="flex gap-4 items-start">
                  <div className="text-yellow-400 mt-1 text-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-[#e6ddc8] text-xs font-bold tracking-widest uppercase mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:suryansh.varma17@gmail.com"
                      className="text-sm font-semibold text-slate-300 hover:text-yellow-300 transition-colors break-all"
                    >
                      suryansh.varma17@gmail.com
                    </a>
                  </div>
                </div>

                {/* Mobile/Phone Number */}
                <div className="flex gap-4 items-start">
                  <div className="text-yellow-400 mt-1 text-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-[#e6ddc8] text-xs font-bold tracking-widest uppercase mb-1">
                      Call Transceiver (Mobile)
                    </h4>
                    <a 
                      href="tel:+919959172369" 
                      className="text-sm font-semibold text-slate-300 hover:text-yellow-300 transition-colors"
                      title="Click to Call"
                    >
                      +91 99591 72369
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="text-yellow-400 mt-1 text-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-[#e6ddc8] text-xs font-bold tracking-widest uppercase mb-1">
                      Home Port (Location)
                    </h4>
                    <p className="text-sm font-semibold text-slate-300">
                      Visakhapatnam, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links embedded inside card */}
            <div className="pt-8 border-t border-[#c77b00]/10 flex gap-6 justify-start mt-8">
              <motion.a
                href="https://github.com/Suryansh-Varma"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-[#e6ddc8] text-2xl hover:text-white transition"
                title="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-[#e6ddc8] text-2xl hover:text-[#0a66c2] transition"
                title="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_suryansh_varma_17/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-[#e6ddc8] text-2xl hover:text-pink-500 transition"
                title="Instagram"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Message Form (3/5 span) */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5 text-left bg-[#081229]/40 backdrop-blur-md p-8 rounded-xl border border-[#c77b00]/20 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="block text-[#e6ddc8] text-xs font-bold tracking-widest uppercase mb-2">
                Sailor Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                className="w-full p-3 rounded-md bg-[#020617] border border-[#c77b00]/20 focus:border-[#c77b00] text-white placeholder-slate-500 outline-none text-sm transition"
                placeholder="E.g. Monkey D. Luffy"
                required
              />
            </div>

            <div>
              <label className="block text-[#e6ddc8] text-xs font-bold tracking-widest uppercase mb-2">
                Return Den Den Mushi (Email)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className="w-full p-3 rounded-md bg-[#020617] border border-[#c77b00]/20 focus:border-[#c77b00] text-white placeholder-slate-500 outline-none text-sm transition"
                placeholder="luffy@strawhats.org"
                required
              />
            </div>

          <div>
            <label className="block text-[#e6ddc8] text-xs font-bold tracking-widest uppercase mb-2">
              Message content
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              className="w-full p-3 rounded-md bg-[#020617] border border-[#c77b00]/20 focus:border-[#c77b00] text-white placeholder-slate-500 outline-none text-sm transition"
              rows={4}
              placeholder="Type your message..."
              required
            />
          </div>

          {/* Feedback messages */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-400 text-xs font-semibold"
              >
                ⚠️ {error}
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-green-400 text-xs font-semibold"
              >
                ⚓ {success}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#c77b00] hover:bg-[#c77b00]/80 text-white rounded-md font-bold shadow-lg hover:scale-[1.02] transition active:scale-95 disabled:bg-slate-700 disabled:cursor-not-allowed select-none text-sm tracking-wide uppercase cursor-pointer"
          >
            {loading ? "Sailing your bottle... ⚓" : "Cast Bottle To Sea"}
          </button>
        </motion.form>
      </div>

      {/* Success Animation Overlay */}
      <AnimatePresence>
        {showSuccessAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setShowSuccessAnimation(false)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: 90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateY: -90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm p-8 rounded-xl bg-gradient-to-b from-[#091530] to-[#020617] border-4 border-yellow-500 shadow-2xl text-center overflow-hidden"
            >
              {/* Sparkle caustics background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.4)_0%,transparent_70%)] pointer-events-none" />

              {/* Sailing Bottle Animation */}
              <div className="relative h-28 flex items-center justify-center mb-6 overflow-hidden">
                <motion.div
                  initial={{ x: -200, y: 10, rotate: -20 }}
                  animate={{ 
                    x: [ -200, 0, 200 ], 
                    y: [ 10, -10, 10 ],
                    rotate: [ -20, 10, 20 ]
                  }}
                  transition={{ 
                    duration: 3, 
                    times: [0, 0.5, 1],
                    ease: "easeInOut"
                  }}
                  className="absolute opacity-80"
                >
                  <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16">
                    <path d="M40 20 L60 20 L60 30 L65 35 L65 80 C65 85 35 85 35 80 L35 35 L40 30 Z" stroke="#38bdf8" strokeWidth="3" fill="rgba(56,189,248,0.15)" />
                    <path d="M43 12 L57 12 L57 20 L43 20 Z" fill="#b85a00" />
                    <rect x="42" y="45" width="16" height="25" rx="2" fill="#ecdcb9" stroke="#5b3d1b" strokeWidth="1" transform="rotate(15 50 55)" />
                    <path d="M35 70 C40 68 45 72 50 70 C55 68 60 72 65 70 L65 80 C65 82 35 82 35 80 Z" fill="rgba(56,189,248,0.3)" />
                  </svg>
                </motion.div>

                {/* Golden Coin Pop */}
                <motion.div
                  initial={{ scale: 0, rotateY: 180, opacity: 0 }}
                  animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 300, damping: 15 }}
                  className="w-20 h-20 bg-yellow-500 rounded-full border-4 border-yellow-300 shadow-[0_0_20px_rgba(234,179,8,0.6)] flex items-center justify-center relative"
                >
                  <svg viewBox="0 0 100 100" className="w-12 h-12 fill-[#78350f]">
                    <path d="M10 70 C20 62 80 62 90 70 C95 72 95 76 90 76 C80 76 20 76 10 76 C5 76 5 72 10 70 Z" />
                    <path d="M28 69 C28 35 72 35 72 69 Z" />
                  </svg>
                </motion.div>
              </div>

              {/* Title & text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 }}
              >
                <h3 className="h-pirate text-3xl text-yellow-300 tracking-wider mb-2">
                  Message Cast!
                </h3>
                <p className="text-[#e6ddc8] text-xs font-semibold uppercase tracking-widest mb-4">
                  Destination: The Grand Line
                </p>
                <p 
                  className="text-slate-300 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  "Your bottle has been cast into the sea, riding the ocean tides safely to the captain's desk. Prepare for a response!"
                </p>
                
                <button
                  onClick={() => setShowSuccessAnimation(false)}
                  className="px-6 py-2 bg-[#c77b00] hover:bg-[#c77b00]/80 text-white font-bold rounded shadow transition-all duration-200 text-xs tracking-widest uppercase hover:scale-105 cursor-pointer"
                >
                  Acknowledge Log
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}
