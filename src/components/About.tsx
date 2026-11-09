"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Code2, Sparkles, Rocket, ArrowRight } from "lucide-react";
import { useRef, MouseEvent } from "react";

const features = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Modern scalable applications using React, Next.js & TypeScript.",
    glowColor: "from-purple-500/20 to-indigo-500/20",
  },
  {
    icon: Sparkles,
    title: "Creative Animations",
    desc: "Smooth interactions and premium UI motion experiences.",
    glowColor: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: Rocket,
    title: "Performance First",
    desc: "Fast, SEO optimized and accessible web experiences.",
    glowColor: "from-fuchsia-500/20 to-pink-500/20",
  },
];

const stats = [
  { num: "2+", label: "Years Experience" },
  { num: "20+", label: "Projects Completed" },
  { num: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-background text-on-background flex items-center"
    >
      {/* BACKGROUND GLOW (Hero sectioner sathe matched) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: leftY }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-secondary text-sm"
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="font-semibold tracking-wider uppercase text-xs">About Me</span>
          </motion.div>

          {/* HEADING */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-on-background leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="block"
              >
                Crafting Digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="block bg-gradient-to-r from-primary via-secondary to-violet-300 bg-clip-text text-transparent"
              >
                Experiences.
              </motion.span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-on-surface-variant text-base sm:text-lg leading-8 max-w-xl"
          >
            I’m a frontend developer passionate about creating modern, interactive, and visually stunning websites with clean code and smooth user experiences.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className="rounded-2xl border border-outline-variant bg-surface/50 backdrop-blur-xl p-5 text-center shadow-lg"
              >
                <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.num}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-on-surface-variant font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-xl inline-flex items-center gap-3 bg-primary hover:bg-primary-container text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.25)] transition"
            >
              Explore Projects
              <ArrowRight size={19} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FEATURE CARDS (With Mouse Spotlight & Scroll Parallax) */}
        <motion.div
          style={{ y: rightY }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          {features.map((item, index) => (
            <SpotlightFeatureCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

{/* Interactive Spotlight Card */}
function SpotlightFeatureCard({
  item,
  index,
}: {
  item: typeof features[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -6, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-3xl border border-outline-variant bg-surface/80 backdrop-blur-2xl p-8 transition-all duration-300 hover:border-primary/50 shadow-xl"
    >
      {/* Mouse Follower Glow Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex gap-6 items-start">
        {/* Animated Icon Box */}
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.glowColor} border border-outline-variant flex items-center justify-center shrink-0 shadow-inner`}
        >
          <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
        </motion.div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-bold text-on-background group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>
          <p className="mt-3 text-on-surface-variant leading-relaxed group-hover:text-on-background transition-colors duration-300 text-sm sm:text-base">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}