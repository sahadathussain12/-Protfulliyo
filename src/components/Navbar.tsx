"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50
      w-[92%] max-w-7xl
      px-6 py-4 rounded-2xl
      border border-white/10
      bg-black/20 backdrop-blur-2xl
      shadow-[0_8px_40px_rgba(0,0,0,0.35)]
      flex items-center justify-between"
    >
      {/* LOGO */}
      <a
        href="#home"
        className="flex items-center gap-3 group"
      >
        <div
          className="w-11 h-11 rounded-xl
          bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400
          flex items-center justify-center
          text-white font-black text-xl"
        >
          S
        </div>

        <div>
          <h1 className="text-white font-bold text-lg">
            Sahadat
          </h1>

          <p className="text-white/50 text-xs tracking-[3px] uppercase">
            Portfolio
          </p>
        </div>
      </a>

      {/* NAV */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="text-white/70 hover:text-white
            transition duration-300 relative group"
          >
            {item.name}

            <span
              className="absolute left-0 -bottom-2
              h-[2px] w-0 bg-cyan-400
              transition-all duration-300
              group-hover:w-full"
            />
          </a>
        ))}
      </nav>

      {/* BUTTON */}
      <button
        className="hidden md:block
        px-6 py-2.5 rounded-xl
        bg-gradient-to-r from-purple-600 to-cyan-500
        text-white font-semibold"
      >
        Hire Me
      </button>

      {/* MOBILE */}
      <button
        className="md:hidden text-white"
      >
        <Menu />
      </button>
    </motion.header>
  );
};

export default Navbar;