"use client";

import React, { MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Code2, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    title: "UI Architecture",
    description:
      "Building robust, scalable frontend infrastructures with atomic design principles, dynamic components, and modern frameworks.",
    icon: Code2,
    glowColor: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Interactive Motion",
    description:
      "Creating cinematic user journeys through high-performance Framer Motion animations and fluid interaction states.",
    icon: Sparkles,
    glowColor: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "Digital Identity",
    description:
      "Crafting elite brand presence for tech-driven companies seeking a unique, responsive, and premium market position.",
    icon: ShieldCheck,
    glowColor: "from-fuchsia-500/20 to-pink-500/20",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden bg-background text-on-background">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold tracking-[4px] uppercase mb-4 text-sm">
            WHAT I DO
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-on-background">
            Core Operations
          </h2>
        </motion.div>

        {/* Grid Layout (3 Columns matching Projects/Skills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

{/* Individual Service Card Component */}
function ServiceCard({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between rounded-[32px] border border-outline-variant bg-surface/80 backdrop-blur-xl p-8 sm:p-10 shadow-xl transition-all duration-300 hover:border-primary/50 overflow-hidden"
    >
      {/* Mouse Follower Glow Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
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

      {/* Content Area */}
      <div className="relative z-20">
        {/* Animated Icon Box */}
        <motion.div
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.glowColor} border border-outline-variant flex items-center justify-center mb-8 shadow-inner`}
        >
          <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-on-background mb-4 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8">
          {service.description}
        </p>
      </div>

      {/* Bottom Link Action */}
      <div className="relative z-20 pt-4 border-t border-outline-variant/60 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider font-bold text-primary">
          Learn More
        </span>
        <div className="w-9 h-9 rounded-xl border border-outline-variant bg-surface flex items-center justify-center text-on-background group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default Services;