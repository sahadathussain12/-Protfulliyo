"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  Code2,
  Sparkles,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { useRef } from "react";

const features = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Modern scalable applications using React, Next.js & TypeScript.",
  },
  {
    icon: Sparkles,
    title: "Creative Animations",
    desc: "Smooth interactions and premium UI motion experiences.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    desc: "Fast, SEO optimized and accessible web experiences.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -50]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -30]
  );

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side */}
        <motion.div
          style={{ y: leftY }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-purple-300" />

            <span className="text-sm font-medium text-purple-200 tracking-wide">
              ABOUT ME
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl md:text-7xl font-black leading-[0.95] tracking-[-3px] text-white">
            Crafting Digital
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-relaxed text-gray-300 max-w-xl">
            I’m a frontend developer passionate about creating
            modern, interactive, and visually stunning websites
            with clean code and smooth user experiences.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              ["2+", "Years"],
              ["20+", "Projects"],
              ["100%", "Passion"],
            ].map(([num, label], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
              >
                <h3 className="text-3xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {num}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold shadow-lg shadow-purple-500/30"
          >
            Explore Projects

            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          style={{ y: rightY }}
          className="space-y-7"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

                <div className="relative z-10 flex gap-6 items-start">
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-purple-300" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[32px] border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;