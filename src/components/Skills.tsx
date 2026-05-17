"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    level: "95%",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "90%",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "96%",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "92%",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "85%",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    level: "88%",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "80%",
  },
  {
    name: "Figma",
    icon: SiFigma,
    level: "89%",
  },
];

const Skills = () => {
  return (
    <section  id="skills" className="relative py-28 overflow-hidden">
      
      {/* Section Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 font-semibold tracking-[4px] uppercase mb-4">
            My Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Technologies I Use
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            I build modern and interactive web applications with
            beautiful UI and smooth user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
              >
                
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 flex items-center justify-center mb-8"
                >
                  <Icon className="text-4xl text-purple-300" />
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {skill.name}
                </h3>

                {/* Level */}
                <p className="text-gray-400 mb-6">
                  Professional Experience
                </p>

                {/* Progress */}
                {/* <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div> */}

                <div className="mt-3 flex justify-end">
                  <span className="text-sm font-semibold text-purple-300">
                    {skill.level}
                  </span>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;