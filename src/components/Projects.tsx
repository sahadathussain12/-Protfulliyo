"use client";

import Images from "../../public/image.png";
import bpl from "../../public/bpl.png";
import ai from "../../public/aii.png";
import book from "../../public/book.png";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { MouseEvent } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "dagitools-Platfrom",
    description: "Modern real estate platform with premium UI and smooth animations.",
    image: Images,
    live: "https://digitools-platfrom-a.netlify.app",
    repo: "https://github.com/sahadathussain12/DigiTools-Platform",
    tech: ["React", "Tailwind"],
  },
  {
    title: "book vibe",
    description: "A modern book discovery platform where users can explore, search, and save their favorite books with a clean and responsive UI.",
    image: book,
    live: "https://book-vibe-project-1.netlify.app",
    repo: "https://github.com/sahadathussain12/book-vibe",
    tech: ["React", "Chart.js"],
  },
  {
    title: "Ai-Modele",
    description: "Creative developer Ai model aesthetic.",
    image: ai,
    live: "https://peppy-bonbon-1fa566.netlify.app",
    repo: "https://github.com/sahadathussain12/Ai-Model",
    tech: ["React", "Tailwind"],
  },
  {
    title: "bpl-dream-11",
    description: "Full-stack shopping platform with secure checkout.",
    image: bpl,
    live: "https://bpl-11-dream-1.netlify.app",
    repo: "https://github.com/sahadathussain12/bpl-dream-11",
    tech: ["React", "Stripe"],
  },
  {
    title: "AI Chat Tool",
    description: "Smart AI assistant integrated with OpenAI API.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
    live: "#",
    repo: "#",
    tech: ["React", "OpenAI"],
  },
  {
    title: "Travel Guide",
    description: "Modern travel agency website with destination guides.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1400&auto=format&fit=crop",
    live: "#",
    repo: "#",
    tech: ["Next.js", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-background text-on-background">
      
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
            MY PROJECTS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-on-background">
            Featured Work
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

{/* Individual Project Card with Interactive Spotlight */}
function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col rounded-[32px] border border-outline-variant bg-surface/80 backdrop-blur-xl overflow-hidden shadow-xl transition-colors duration-300 hover:border-primary/50"
    >
      {/* Mouse Follower Glow Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
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

      {/* Image Area */}
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow relative z-10">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[11px] uppercase tracking-wider text-primary font-bold px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-on-background mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-2">
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-container text-white font-semibold text-sm shadow-[0_0_20px_rgba(139,92,246,0.2)] transition duration-300"
          >
            Live Demo <FiArrowUpRight size={18} />
          </motion.a>

          <motion.a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-outline-variant bg-surface text-on-background hover:text-primary hover:border-primary/40 transition duration-300"
            aria-label="GitHub Repository"
          >
            <FaGithub size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;