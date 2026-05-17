"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-400 border-t border-white/10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-[#00F5FF]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[320px] h-[320px] bg-[#FF00FF]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* LOGO */}
        <div className="flex justify-center items-center gap-3 group">

<div className="flex justify-center items-center gap-3 group">

  {/* LOGO WITH FLOAT + GLOW */}
 




<motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{
    opacity: 1,
    y: [0, -10, 0],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  }}
  className="
    font-display
  text-2xl md:text-3xl font-semibold
    text-transparent
    bg-clip-text
    bg-gradient-to-t
    from-[#00F5FF]
    via-[#8B5CF6]
    to-[#FF00FF]
  "
>
 MD.SAHADAT HUSSAIN 
</motion.h1>


</div>

</div>

        {/* NAVIGATION */}
    <div className="flex justify-center items-center flex-wrap gap-10 mt-10 text-sm md:text-base text-white/80">

  <Link
    to="home"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="about"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    About Us
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Contact Us
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="projects"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Projects
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    to="services"
    smooth={true}
    duration={500}
    className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 group"
  >
    Services
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00F5FF] to-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
  </Link>

</div>

        {/* SOCIAL ICONS */}
     <div className="flex justify-center items-center gap-4 mt-10">

  <a
    href="https://www.facebook.com/share/1HNh3dA2k9/"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/sahadat12_3?igsh=NjQ3MmFraW1lenZk"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-[#E4405F] hover:shadow-[0_0_15px_rgba(228,64,95,0.4)]"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/sahadat-hussain12"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/sahadathussain12"
    target="_blank"
    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-white/70
    transition-all duration-300 hover:scale-110 hover:-translate-y-1
    hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
  >
    <FaGithub />
  </a>

</div>

      </div>
    </footer>
  );
}