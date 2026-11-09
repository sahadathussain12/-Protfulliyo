
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const particles = Array.from({ length: 18 });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background text-on-background flex items-center pt-28 pb-16"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* ANIMATED PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-secondary text-sm"
          >
            <Sparkles size={16} className="text-primary" />
            Welcome to my portfolio
          </motion.div>

          {/* NAME */}
          <div>
            <p className="text-on-surface-variant text-xl mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-on-background leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="block"
              >
                Sahadat
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="block bg-gradient-to-r from-primary via-secondary to-violet-300 bg-clip-text text-transparent"
              >
                Hussain.
              </motion.span>
            </h1>
          </div>

          {/* ROLE */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl font-semibold text-on-surface-variant"
          >
            Frontend Developer
            <span className="text-primary"> & </span>
            Web Developer
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-on-surface-variant text-base sm:text-lg leading-8 max-w-xl"
          >
            I build modern, responsive and user-friendly web applications
            using React, Next.js, JavaScript and Tailwind CSS.
            I love creating beautiful digital experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-xl flex items-center gap-3 bg-primary hover:bg-primary-container text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.25)] transition"
            >
              View Projects
              <ArrowRight size={19} />
            </motion.a>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-xl flex items-center gap-3 border border-outline-variant text-on-background hover:bg-primary/10 transition"
            >
              Download CV
              <Download size={19} />
            </motion.a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-5 pt-2"
          >
            <span className="text-on-surface-variant text-sm">
              Follow me:
            </span>

            <motion.a
              href="https://github.com/sahadathussain12"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="text-on-surface-variant hover:text-primary transition"
              aria-label="GitHub"
            >
              <FaGithub size={23} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sahadat-hussain12/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="text-on-surface-variant hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={23} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="relative flex justify-center items-center"
        >
          {/* OUTER GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full bg-primary/20 blur-[70px]"
          />

          {/* ROTATING GRADIENT RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[310px] h-[310px] md:w-[440px] md:h-[440px] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, #8b5cf6, #c4b5fd, transparent, #8b5cf6)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            }}
          />

          {/* PROFILE IMAGE */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-br from-primary/30 to-secondary/30 shadow-[0_0_60px_rgba(139,92,246,0.2)]"
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-outline-variant bg-surface">
              <img
                src="https://i.postimg.cc/pV3VPCb0/download.jpg"
                alt="Sahadat Hussain"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* FLOATING BADGE */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-10 -left-2 md:left-0 z-20 px-4 py-3 rounded-xl border border-outline-variant bg-surface/90 backdrop-blur-xl shadow-xl"
          >
            <p className="text-on-background font-semibold text-sm">
              <span className="text-green-500">●</span> Available for Work
            </p>
            <p className="text-on-surface-variant text-xs mt-1">
              Open to Remote Opportunities
            </p>
          </motion.div>

          {/* FLOATING TECH BADGE */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute top-10 -right-1 md:right-0 z-20 px-4 py-3 rounded-xl border border-primary/20 bg-surface/90 backdrop-blur-xl shadow-xl"
          >
            <p className="text-primary font-bold text-sm">
              React.js
            </p>
            <p className="text-on-surface-variant text-xs mt-1">
              Frontend Development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
