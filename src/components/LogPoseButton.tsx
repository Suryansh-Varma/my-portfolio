"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCompass } from "react-icons/fa";

export default function LogPoseButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      setRotation(window.scrollY * 0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#040d20] hover:bg-[#081738] text-[var(--gold-light)] border border-[var(--border-strong)] shadow-xl cursor-pointer transition-colors duration-200"
          title="Return to Port (Top)"
          aria-label="Return to Port (Top)"
        >
          <motion.div
            style={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <FaCompass size={24} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
