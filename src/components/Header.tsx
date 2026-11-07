"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import DenDenMushi from "@/components/DenDenMushi";

const navItems = [
  { name: "About Cadet", href: "#about" },
  { name: "Devil Fruits", href: "#skills" },
  { name: "Treasure Missions", href: "#projects" },
  { name: "Cadet Training", href: "#education" },
  { name: "Credentials", href: "#certifications" },
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
      setScrolled(window.scrollY > 30);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Determine active section
      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Precision 2px Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[var(--gold-primary)] z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#010510]/85 backdrop-blur-xl border-b border-[var(--border-subtle)] py-3.5 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="h-pirate text-2xl text-[var(--gold-light)] tracking-[0.14em] hover:text-[#f0ead6] transition-colors"
          >
            SURYANSH
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-xs tracking-wider uppercase font-medium transition-colors duration-200 py-1 ${
                    isActive ? "text-[var(--gold-light)] font-semibold" : "text-[#9a8f7a] hover:text-[#f0ead6]"
                  }`}
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[var(--gold-primary)]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Tools & Socials */}
          <div className="hidden md:flex items-center gap-4 text-[#9a8f7a]">
            <a
              href="https://github.com/Suryansh-Varma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f0ead6] transition-colors"
              title="GitHub"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f0ead6] transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={17} />
            </a>

            <div className="w-[1px] h-4 bg-[var(--border-subtle)] mx-1" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded hover:text-[#f0ead6] transition-colors cursor-pointer"
              title={theme === "yami" ? "Switch to Mera Mera theme" : "Switch to Yami Yami theme"}
            >
              {theme === "yami" ? (
                <FaMoon size={15} className="text-[#a88242]" />
              ) : (
                <FaSun size={15} className="text-[#e05a2b]" />
              )}
            </button>

            <DenDenMushi />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#9a8f7a] hover:text-[#f0ead6] focus:outline-none p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[56px] z-40 md:hidden bg-[#010510]/95 backdrop-blur-2xl border-b border-[var(--border-subtle)] py-6 px-6 flex flex-col gap-4 shadow-xl"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-wider uppercase font-medium py-1.5 ${
                    activeSection === item.href
                      ? "text-[var(--gold-light)] font-bold"
                      : "text-[#9a8f7a] hover:text-[#f0ead6]"
                  }`}
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="h-[1px] bg-[var(--border-subtle)] my-2" />

            <div className="flex items-center justify-between text-[#9a8f7a]">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Suryansh-Varma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f0ead6]"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kakarlapudi-suryansh-varma-7941652b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f0ead6]"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={toggleTheme} className="p-1 cursor-pointer">
                  {theme === "yami" ? (
                    <FaMoon size={16} className="text-[#a88242]" />
                  ) : (
                    <FaSun size={16} className="text-[#e05a2b]" />
                  )}
                </button>
                <DenDenMushi />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
