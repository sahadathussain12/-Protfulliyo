"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const fullName = "Sahadat Hussain";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < fullName.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, [index, fullName]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05040B] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-[#0A061F] to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7e22ce_0%,transparent_45%)] opacity-30" />

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[140px]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-200 font-medium">
              Creative Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-[82px] font-black leading-[0.95] tracking-[-3px] text-white">
            Hey <br />

            <span className="text-white">I&apos;m </span>

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse text-white">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-lg md:text-xl text-gray-300 leading-relaxed">
            I create premium modern websites with smooth animations,
            interactive UI, and powerful user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center gap-3 shadow-lg shadow-purple-500/30"
            >
              See My Work

              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white font-semibold flex items-center gap-3"
            >
              Download CV
              <Download />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* Glow Border */}
            <div className="absolute -inset-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[40px] blur-2xl opacity-30 animate-pulse" />

            {/* Image Card */}
            <div className="relative w-[340px] md:w-[420px] overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="Sahadat Hussain"
                width={600}
                height={750}
                priority
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between bg-black/40 backdrop-blur-xl">
                
                <div>
                  <p className="text-white font-semibold text-lg">
                    Sahadat Hussain
                  </p>

                  <p className="text-sm text-purple-300">
                    Frontend Developer
                  </p>
                </div>

                <div>
                  <p className="text-emerald-400 text-sm font-medium">
                    ● Available
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-6 -left-6 px-5 py-3 rounded-2xl border border-purple-500/20 bg-zinc-900/80 backdrop-blur-xl shadow-xl"
            >
              <p className="text-purple-300 font-medium">
                React / Next.js
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 -right-6 px-5 py-3 rounded-2xl border border-pink-500/20 bg-zinc-900/80 backdrop-blur-xl shadow-xl"
            >
              <p className="text-pink-300 font-medium">
                UI/UX Design
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;