"use client";

import Image from "next/image";
import my from "../../public/my.png";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  MousePointer2,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "React Specialist",
    "Next.js Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-transparent flex items-center"
    >
      {/* ব্যাকগ্রাউন্ডের সব কালার, গ্রিড এবং গ্লো ইফেক্ট কেটে দেওয়া হয়েছে */}

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-200">
              Premium Developer Portfolio
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-5">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-xl md:text-2xl"
            >
              Hello, I&apos;m
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.9]"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                SAHADAT
              </span>
              <br />
              <span className="text-white">
                HUSSAIN
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="h-[40px]"
            >
              <p className="text-2xl md:text-3xl font-semibold text-purple-300">
                {roles[roleIndex]}
              </p>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-xl text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I build premium modern websites with smooth animations,
            interactive experiences, and visually stunning user
            interfaces using React, Next.js, Tailwind CSS,
            and modern frontend technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-5 pt-2"
          >
            {/* Projects */}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(168,85,247,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center gap-3 cursor-pointer"
            >
              See Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="/cv.pdf"
              download="Sahadat_Hussain_CV.pdf"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-all"
            >
              Download CV
              <Download size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Rotating Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[430px] h-[430px] rounded-full border border-purple-500/20 border-dashed"
          />

          {/* Image Container */}
          <motion.div
            whileHover={{
              scale: 1.04,
              rotate: 1,
            }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(168,85,247,0.35)]"
          >
            <Image
              src={my}
              alt="Sahadat Hussain"
              fill
              priority
              className="object-cover scale-110 hover:scale-125 transition-transform duration-700"
            />
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 -left-5 px-5 py-3 rounded-2xl border border-purple-500/20 bg-zinc-900/80 backdrop-blur-xl shadow-xl"
          >
            <div className="flex items-center gap-2">
              <MousePointer2 className="text-purple-300 w-4 h-4" />
              <p className="text-purple-200 text-sm">
                Smooth Animation
              </p>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 -right-6 px-5 py-3 rounded-2xl border border-cyan-500/20 bg-zinc-900/80 backdrop-blur-xl shadow-xl"
          >
            <p className="text-cyan-300 text-sm">
              Next.js Developer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;