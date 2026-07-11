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
      // Rotate the compass based on scroll position!
      setRotation(window.scrollY * 0.15);
    };

    window.addEventListener("scroll", handleScroll);
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
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#fdf5e6] hover:bg-[#fffcf5] text-[#5b3d1b] border-4 border-[#5b3d1b] rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] cursor-pointer transition-all duration-300"
          title="Return to Port (Top)"
        >
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 bg-[url('/textures/parchment.png')] opacity-20 mix-blend-multiply rounded-full pointer-events-none" />
          
          <motion.div
            style={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <FaCompass size={28} className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
