import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-gap-xl" id="home">
      <div className="w-full md:w-1/2 flex flex-col gap-gap-md">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">Frontend Web Developer</span>
        </div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight text-on-surface">
          I Build <span className="text-gradient">Modern & Interactive</span> Web Experiences
        </h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg">
          Specializing in high-performance digital interfaces where luxury aesthetics meet technical precision. Engineered for the modern void.
        </p>
        <div className="flex gap-4 mt-4">
          <a className="p-3 glass-panel rounded-full hover:bg-primary/20 transition-colors" href="#">
            <span className="material-symbols-outlined text-primary">terminal</span>
          </a>
          <a className="p-3 glass-panel rounded-full hover:bg-primary/20 transition-colors" href="#">
            <span className="material-symbols-outlined text-primary">deployed_code</span>
          </a>
          <a className="p-3 glass-panel rounded-full hover:bg-primary/20 transition-colors" href="#">
            <span className="material-symbols-outlined text-primary">hub</span>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-12 md:mt-0 relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative glass-panel rounded-3xl p-8 border-primary/20 glow-purple rotate-3 group-hover:rotate-0 transition-transform duration-700">
          <div className="flex justify-between items-start mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
              <Image 
                className="w-full h-full object-cover rounded-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAboXXm6C8pmwSqgHcWE_tV3SD12VWujqC2gU4XDWAtc5hXJ_aMcu1bpQnB6cp3rERLOIXZdm3S2ul0aSYz6LcnuCvErcd0bt7RhzHKYK6qb9APScIGY9CeeYhbi4KMm51BHzDL7eVtRaNwRJa83HyGs1FVUosTVW7EJ2lHeCy8av2z1wIsoDAVaBzEkaavS-vWt6zPryh3Wa_uPuz9H3S2YfxMVL6G3aY7k6lJ2jNkGdqKEl2NNubx1HwWqbN3zj5Lu4X11Rl5lvKC" 
                alt="Professional headshot" 
                width={80} 
                height={80}
              />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-label-sm font-label-sm text-primary">STATUS</span>
              <span className="text-headline-lg font-display-lg text-secondary">ACTIVE</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-on-surface-variant">EXPERTISE</span>
              <span className="font-bold text-primary">UX/UI ARCHITECT</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="bg-surface-container px-3 py-1 rounded-full text-label-sm border border-white/5">REACT</span>
              <span className="bg-surface-container px-3 py-1 rounded-full text-label-sm border border-white/5">NEXT.JS</span>
              <span className="bg-surface-container px-3 py-1 rounded-full text-label-sm border border-white/5">THREE.JS</span>
              <span className="bg-surface-container px-3 py-1 rounded-full text-label-sm border border-white/5">TAILWIND</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
