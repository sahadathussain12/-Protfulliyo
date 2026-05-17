"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import my from "../../public/my.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <p className="text-purple-300 tracking-widest text-sm">
            Frontend Developer
          </p>

          {/* NAME ANIMATION ONLY */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Hi, I’m{" "}

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Sahadat
            </motion.span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            I build modern web applications using React, Next.js and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-purple-600 text-white flex items-center gap-2 hover:scale-105 transition"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="/cv.pdf"
              className="px-6 py-3 rounded-xl border border-white/20 text-white flex items-center gap-2 hover:bg-white/10 transition"
            >
              Download CV <Download size={18} />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border border-white/10"
          >
            <Image
              src={my}
              alt="profile"
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}