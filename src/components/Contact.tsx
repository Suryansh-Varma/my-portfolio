"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#071022]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="h-pirate text-4xl text-yellow-300 mb-6">Message in a Bottle</h2>
        <p className="text-gray-300 mb-6">Drop your message and I’ll set sail to respond.</p>

        <motion.form className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <input className="w-full p-3 rounded-md bg-[#0b1220] border border-[#2f2b2b]" placeholder="Your name" />
          <input className="w-full p-3 rounded-md bg-[#0b1220] border border-[#2f2b2b]" placeholder="Your email" />
          <textarea className="w-full p-3 rounded-md bg-[#0b1220] border border-[#2f2b2b]" rows={5} placeholder="Message" />
          <button className="px-6 py-3 bg-[#c77b00] rounded-md font-semibold">Send Bottle</button>
        </motion.form>
      </div>
    </section>
  );
}