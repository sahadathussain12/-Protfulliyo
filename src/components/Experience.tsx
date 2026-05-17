"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Neural Dynamics Inc.",
    period: "2026 — Present",
    description:
      "Building scalable UI systems and high-performance web applications with modern React architecture.",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    role: "UI Developer",
    company: "Void Systems",
 
    description:
      "Designed interactive dashboards and improved user experience for fintech and SaaS platforms.",
    tech: ["React", "Framer Motion", "D3.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 max-w-5xl mx-auto text-white">
      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative"
      >
        <p className="text-purple-400 tracking-[6px] text-xs uppercase">
          Career Path
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Experience Timeline
        </h2>
      </motion.div>

      {/* Timeline line */}
      <div className="absolute left-1/2 top-40 bottom-10 w-[2px] bg-white/10 hidden md:block" />

      {/* Items */}
      <div className="space-y-20 relative">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative md:w-1/2 ${
                isLeft ? "md:ml-0" : "md:ml-auto"
              }`}
            >
              {/* Dot */}
              <div className="absolute top-6 left-1/2 md:left-auto md:-translate-x-0 -translate-x-1/2 md:right-[-10px] w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/30" />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all hover:scale-[1.02]">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}