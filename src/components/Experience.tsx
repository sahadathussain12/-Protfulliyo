"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { MouseEvent } from "react";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Full-Stack Solutions",
    period: "2026 — Present",
    type: "Full-Time",
    description:
      "Designing and architecting end-to-end web applications with MongoDB, Express.js, React, and Node.js. Focused on API integration, authentication, and database optimization.",
    highlights: [
      "Built scalable RESTful APIs & database architectures",
      "Integrated secure auth & payment gateways",
      "Optimized full-stack app performance",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Next.js"],
    badgeColor: "from-purple-500/20 to-pink-500/20",
  },
  {
    role: "Frontend Developer",
    company: "Digital Product Lab",
    period: "2025 — 2026",
    type: "Contract / Project",
    description:
      "Crafted interactive, high-performance UI components and responsive web applications using React, Next.js, Framer Motion, and Tailwind CSS.",
    highlights: [
      "Developed pixel-perfect responsive user interfaces",
      "Implemented smooth micro-interactions & animations",
      "Improved site load speeds and accessibility",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    badgeColor: "from-indigo-500/20 to-purple-500/20",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-background text-on-background overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold tracking-[4px] uppercase mb-4 text-sm">
            CAREER JOURNEY
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-on-background">
            Work Experience
          </h2>
        </motion.div>

        {/* Modern Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

{/* Modern Interactive Card Component */}
function ExperienceCard({
  exp,
  index,
}: {
  exp: typeof experiences[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[32px] border border-outline-variant bg-surface/80 backdrop-blur-xl p-8 md:p-10 shadow-xl transition-all duration-300 hover:border-primary/50 flex flex-col justify-between"
    >
      {/* Mouse Follower Glow Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20">
        {/* Top Meta info */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <Calendar size={14} />
            {exp.period}
          </div>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider px-3 py-1 rounded-md bg-surface border border-outline-variant">
            {exp.type}
          </span>
        </div>

        {/* Role & Company Header */}
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-black text-on-background group-hover:text-primary transition-colors duration-300">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 text-on-surface-variant font-medium mt-2 text-sm sm:text-base">
            <Building2 size={16} className="text-primary" />
            {exp.company}
          </div>
        </div>

        {/* Description */}
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
          {exp.description}
        </p>

        {/* Key Accomplishments / Highlights */}
        <div className="space-y-2.5 mb-8">
          {exp.highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
              <span className="text-xs sm:text-sm text-on-background/80 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="relative z-20 pt-6 border-t border-outline-variant/60 flex flex-wrap gap-2">
        {exp.tech.map((t, i) => (
          <span
            key={i}
            className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}