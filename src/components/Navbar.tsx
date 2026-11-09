"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // THEME INITIALIZATION
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.classList.toggle(
      "light",
      savedTheme === "light"
    );

    setMounted(true);
  }, []);

  // THEME TOGGLE
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "light",
      newTheme === "light"
    );
  };

  // SCROLL AND ACTIVE SECTION
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = navItems
      .map((item) => document.querySelector(item.link))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    // Fixed TypeScript null check error here
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // NAVIGATION CLICK
  const handleNavClick = (link: string) => {
    setActiveItem(link);
    setIsMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50
      w-[92%] max-w-7xl
      px-5 md:px-7 py-3.5
      rounded-2xl border
      flex items-center justify-between
      transition-all duration-500
      ${
        theme === "dark"
          ? isScrolled
            ? "bg-[#08080f]/90 border-purple-500/30 shadow-[0_10px_50px_rgba(139,92,246,0.12)]"
            : "bg-black/30 border-white/10"
          : isScrolled
            ? "bg-white/95 border-purple-300 shadow-xl"
            : "bg-white/80 border-gray-200"
      }
      backdrop-blur-2xl`}
    >
      {/* LOGO */}
      <a
        href="#home"
        onClick={() => handleNavClick("#home")}
        className="flex items-center gap-3 group"
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="w-10 h-10 rounded-xl
          bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400
          flex items-center justify-center
          text-white font-black text-xl
          shadow-[0_0_25px_rgba(139,92,246,0.35)]"
        >
          S
        </motion.div>

        <div>
          <h1
            className={`font-bold text-lg tracking-wide ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Sahadat<span className="text-purple-500">.</span>
          </h1>

          <p
            className={`text-[10px] tracking-[3px] uppercase ${
              theme === "dark" ? "text-white/40" : "text-gray-500"
            }`}
          >
            Developer
          </p>
        </div>
      </a>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-7">
        {navItems.map((item, i) => (
          <motion.a
            key={item.name}
            href={item.link}
            onClick={() => handleNavClick(item.link)}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + i * 0.08,
              duration: 0.5,
            }}
            className={`relative py-2 text-[13px] font-medium
            transition-colors duration-300
            ${
              activeItem === item.link
                ? theme === "dark"
                  ? "text-white"
                  : "text-gray-950"
                : theme === "dark"
                  ? "text-white/50 hover:text-white"
                  : "text-gray-500 hover:text-gray-950"
            }`}
          >
            {item.name}

            {activeItem === item.link && (
              <motion.span
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 w-full h-[2px]
                rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      {/* RIGHT SIDE ACTIONS */}
      <div className="flex items-center gap-3">

        {/* THEME TOGGLE */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.12, rotate: 12 }}
          whileTap={{ scale: 0.85 }}
          className={`w-10 h-10 rounded-xl
          border flex items-center justify-center
          transition-colors duration-300
          ${
            theme === "dark"
              ? "border-white/10 bg-white/5 text-yellow-300 hover:border-purple-500/50"
              : "border-gray-200 bg-gray-100 text-purple-600 hover:border-purple-400"
          }`}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              {theme === "dark" ? (
                <FiSun size={20} />
              ) : (
                <FiMoon size={20} />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* HIRE ME */}
        <motion.a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(139,92,246,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center gap-2
          px-5 py-2.5 rounded-xl
          bg-gradient-to-r from-purple-600 to-cyan-500
          text-white text-sm font-semibold"
        >
          Hire Me
          <FiArrowUpRight size={17} />
        </motion.a>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden w-10 h-10
          flex items-center justify-center
          rounded-xl border
          ${
            theme === "dark"
              ? "border-white/10 bg-white/5 text-white"
              : "border-gray-200 bg-gray-100 text-gray-900"
          }`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-[calc(100%+12px)] left-0
            w-full p-5 rounded-2xl
            border backdrop-blur-2xl shadow-2xl
            lg:hidden
            ${
              theme === "dark"
                ? "border-white/10 bg-[#090910]/95"
                : "border-gray-200 bg-white/95"
            }`}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.link)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-300
                  ${
                    activeItem === item.link
                      ? "bg-purple-500/15 text-purple-500 border border-purple-500/20"
                      : theme === "dark"
                        ? "text-white/60 hover:bg-white/5 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              whileTap={{ scale: 0.96 }}
              className="mt-4 flex items-center justify-center gap-2
              w-full py-3 rounded-xl
              bg-gradient-to-r from-purple-600 to-cyan-500
              text-white text-sm font-semibold"
            >
              Hire Me
              <FiArrowUpRight size={17} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;