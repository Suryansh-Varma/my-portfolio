"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#071022]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="h-pirate text-4xl text-yellow-300 mb-6">
          Message in a Bottle
        </h2>
        <p className="text-gray-300 mb-6">
          Drop your message and I’ll set sail to respond.
        </p>

        {/* Contact form */}
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <input
            className="w-full p-3 rounded-md bg-[#0b1220] border border-[#2f2b2b] text-white placeholder-gray-400"
            placeholder="Your name"
          />
          <input
            className="w-full p-3 rounded-md bg-[#0b1220] border border-[#2f2b2b] text-white placeholder-gray-400"
            placeholder="Your email"
          />
          <textarea
            className="w-full p-3 rounded-md bg-[#0b1220] border border-[#2f2b2b] text-white placeholder-gray-400"
            rows={5}
            placeholder="Message"
          />
          <button className="px-6 py-3 bg-[#c77b00] text-white rounded-md font-semibold shadow-lg hover:scale-105 transition">
            Send Bottle
          </button>
        </motion.form>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-6">
          <motion.a
            href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-yellow-300 text-3xl hover:text-[#0a66c2] transition"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_suryansh_varma_17/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-yellow-300 text-3xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
