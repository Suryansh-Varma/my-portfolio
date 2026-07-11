"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaFilePdf, FaSun, FaMoon } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import DenDenMushi from "@/components/DenDenMushi";

const navItems = [
  { name: "About Sailor", href: "#about" },
  { name: "Devil Fruits", href: "#skills" },
  { name: "Treasure Missions", href: "#projects" },
  { name: "Cadet Training", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState("yami");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "yami";
    setTheme(storedTheme);
    document.documentElement.className = `scroll-smooth ${storedTheme}`;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "yami" ? "mera" : "yami";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = `scroll-smooth ${newTheme}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Determine active section for highlight using absolute global coordinates
      const scrollPosition = window.scrollY + 120; // 120px offset to trigger highlight early
      for (const item of navItems) {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-yellow-450 via-[#c77b00] to-yellow-250 z-50 transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }}
      />
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-md border-b border-[#c77b00]/30 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="h-pirate text-2xl text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-widest hover:scale-105 transition"
          >
            SURYANSH
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-semibold text-sm tracking-wide transition duration-300 hover:text-yellow-300 ${
                  activeSection === item.href ? "text-yellow-400 font-bold" : "text-[#e6ddc8]"
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Socials & Resume (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Suryansh-Varma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e6ddc8] hover:text-yellow-300 text-xl transition hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e6ddc8] hover:text-yellow-300 text-xl transition hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 bg-[#c77b00] hover:bg-[#c77b00]/80 text-white font-semibold rounded-full text-xs shadow-md transition hover:scale-105"
            >
              <FaFilePdf /> View Resume
            </a>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-[#e6ddc8] hover:text-yellow-300 text-xl transition hover:scale-110 p-1.5 rounded-full hover:bg-slate-800/30 cursor-pointer"
              title={theme === "yami" ? "Activate Mera Mera (Flame Theme)" : "Activate Yami Yami (Darkness Theme)"}
            >
              {theme === "yami" ? (
                <FaMoon className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              ) : (
                <FaSun className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)] animate-[spin_10s_linear_infinite]" />
              )}
            </button>
            <DenDenMushi />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#e6ddc8] hover:text-yellow-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-[#020617]/95 backdrop-blur-lg border-b border-[#c77b00]/30 py-6 px-6 flex flex-col gap-5 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition ${
                    activeSection === item.href ? "text-yellow-400 font-bold" : "text-[#e6ddc8]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="h-px bg-slate-800 w-full" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Suryansh-Varma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6ddc8] hover:text-yellow-300 text-2xl transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6ddc8] hover:text-yellow-300 text-2xl transition"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="flex items-center gap-3">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="text-[#e6ddc8] hover:text-yellow-300 text-xl transition hover:scale-110 p-1.5 rounded-full hover:bg-slate-800/30 cursor-pointer"
                  title={theme === "yami" ? "Activate Mera Mera (Flame Theme)" : "Activate Yami Yami (Darkness Theme)"}
                >
                  {theme === "yami" ? (
                    <FaMoon className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  ) : (
                    <FaSun className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)] animate-[spin_10s_linear_infinite]" />
                  )}
                </button>
                <DenDenMushi />
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#c77b00] hover:bg-[#c77b00]/80 text-white font-semibold rounded-md text-sm shadow-md transition"
                >
                  <FaFilePdf /> View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
