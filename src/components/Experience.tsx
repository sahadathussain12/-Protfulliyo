import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Lead Frontend Architect",
      company: "NEURAL_DYNAMICS INC.",
      period: "2022 — PRESENT",
      description: "Pioneering next-generation user interfaces for AI-driven logistics. Managed a team of 12 developers, reducing interface latency by 45% through custom WebGL optimizations.",
      color: "primary"
    },
    {
      role: "Senior Product Engineer",
      company: "VOID_SYSTEMS",
      period: "2019 — 2022",
      description: "Developed the core UI framework for a luxury fintech ecosystem. Implemented complex data visualization layers using D3.js and Three.js for global transactions.",
      color: "secondary"
    }
  ];

  return (
    <section className="py-gap-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative" id="experience">
      <h2 className="font-display-lg text-headline-xl mb-gap-xl">System History</h2>
      <div className="absolute left-margin-mobile md:left-margin-desktop top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent ml-4"></div>
      <div className="space-y-gap-md relative">
        {experiences.map((exp, index) => (
          <div key={index} className="ml-12 relative group">
            <div className={`absolute -left-[37px] top-6 w-4 h-4 rounded-full bg-${exp.color} glow-${exp.color === 'primary' ? 'purple' : 'blue'} border-4 border-background z-10 group-hover:scale-125 transition-transform`}></div>
            <div className={`glass-panel p-8 rounded-3xl border-white/5 group-hover:border-${exp.color}/30 transition-all`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <h3 className={`text-headline-lg font-display-lg text-${exp.color}`}>{exp.role}</h3>
                <span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-4 py-1 rounded-full border border-white/5">{exp.period}</span>
              </div>
              <h4 className="text-body-lg font-bold mb-4">{exp.company}</h4>
              <p className="text-on-surface-variant leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
