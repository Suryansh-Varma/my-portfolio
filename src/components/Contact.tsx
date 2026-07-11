"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      <div className="max-w-xl mx-auto px-6 text-center z-10 relative">
        <h2 className="h-pirate text-5xl text-yellow-300 mb-4 tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Message in a Bottle
        </h2>
        <p className="text-[#e6ddc8] mb-10 text-sm font-semibold tracking-wide" style={{ fontFamily: "var(--font-cinzel), serif" }}>
          Drop your message and I’ll set sail to respond.
        </p>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 text-left bg-[#081229]/40 backdrop-blur-md p-8 rounded-xl border border-[#c77b00]/20 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            className="w-full py-3 bg-[#c77b00] hover:bg-[#c77b00]/80 text-white rounded-md font-bold shadow-lg hover:scale-[1.02] transition active:scale-95 disabled:bg-slate-700 disabled:cursor-not-allowed select-none text-sm tracking-wide uppercase"
          >
            {loading ? "Sailing your bottle... ⚓" : "Cast Bottle To Sea"}
          </button>
        </motion.form>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-8">
          <motion.a
            href="https://github.com/Suryansh-Varma"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-[#e6ddc8] text-3xl hover:text-white transition"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-[#e6ddc8] text-3xl hover:text-[#0a66c2] transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_suryansh_varma_17/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-[#e6ddc8] text-3xl hover:text-pink-500 transition"
            title="Instagram"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
