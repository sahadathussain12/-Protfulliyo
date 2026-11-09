"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { MouseEvent } from "react";
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
    glowColor: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "90%",
    glowColor: "from-neutral-500/20 to-stone-500/20",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "96%",
    glowColor: "from-teal-500/20 to-sky-500/20",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "92%",
    glowColor: "from-yellow-500/20 to-amber-500/20",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "85%",
    glowColor: "from-blue-500/20 to-indigo-500/20",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    level: "88%",
    glowColor: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "80%",
    glowColor: "from-emerald-500/20 to-green-500/20",
  },
  {
    name: "Figma",
    icon: SiFigma,
    level: "89%",
    glowColor: "from-pink-500/20 to-purple-500/20",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-background text-on-background">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold tracking-[4px] uppercase mb-4 text-sm">
            My Skills
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-on-background">
            Technologies I Use
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-on-surface-variant text-base sm:text-lg">
            I build modern and interactive web applications with
            beautiful UI and smooth user experiences.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

{/* Individual Skill Card with Mouse Spotlight Effect */}
function SkillCard({
  skill,
  index,
}: {
  skill: typeof skills[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-3xl border border-outline-variant bg-surface/80 backdrop-blur-xl p-8 shadow-xl transition-colors duration-300 hover:border-primary/50"
    >
      {/* Mouse Follower Glow Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Icon Box */}
          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.glowColor} border border-outline-variant flex items-center justify-center mb-8 shadow-inner`}
          >
            <Icon className="text-4xl text-primary group-hover:text-white transition-colors duration-300" />
          </motion.div>

          {/* Skill Name */}
          <h3 className="text-2xl font-bold text-on-background group-hover:text-primary transition-colors duration-300 mb-2">
            {skill.name}
          </h3>

          {/* Level / Subtitle */}
          <p className="text-on-surface-variant text-sm mb-6">
            Professional Experience
          </p>
        </div>

        {/* Percentage Indicator */}
        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/50">
          <span className="text-xs text-on-surface-variant uppercase tracking-wider font-medium">
            Proficiency
          </span>
          <span className="text-sm font-bold text-primary">
            {skill.level}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;