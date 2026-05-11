import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-3 bg-surface/10 backdrop-blur-[40px] rounded-full mt-6 mx-auto w-[90%] max-w-container-max border border-outline-variant/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(114,46,228,0.1)]">
      <div className="font-display-lg text-headline-lg tracking-tighter text-primary">
        AETHER_OS
      </div>
      <nav className="hidden md:flex gap-gap-md items-center">
        <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#home">Home</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 font-body-md text-body-md" href="#about">About</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 font-body-md text-body-md" href="#skills">Skills</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 font-body-md text-body-md" href="#projects">Projects</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 font-body-md text-body-md" href="#experience">Experience</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 font-body-md text-body-md" href="#contact">Contact</a>
      </nav>
      <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300 active:scale-95 shadow-glow-purple">
        Hire Me
      </button>
    </header>
  );
};

export default Navbar;
