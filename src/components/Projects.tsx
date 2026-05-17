"use client";
import Images from '../../public/image.png'
import bpl from '../../public/bpl.png'
import ai from '../../public/aii.png'
import book from '../../public/book.png'
import Image from "next/image";
import { motion } from "framer-motion";
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
    description: "Creative developer Ai model  aesthetic.",
    image: ai,
    live: "https://peppy-bonbon-1fa566.netlify.app",
    repo: "https://github.com/sahadathussain12/Ai-Model",
    tech: ["React", "tailwind"],
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
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Glow - Agertai Rakha Hoyeche */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 font-semibold tracking-[4px] uppercase mb-4 text-sm">
            MY PROJECTS
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Featured Work
          </h2>
        </motion.div>

        {/* Grid Layout (3 Columns on Large Screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-purple-500/50 transition-colors"
            >
              {/* Image Area */}
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-purple-600 hover:text-white transition-all"
                  >
                    Live <FiArrowUpRight />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;