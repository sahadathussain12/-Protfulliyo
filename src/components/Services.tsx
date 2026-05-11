import React from 'react';

const Services = () => {
  const services = [
    {
      title: "UI Architecture",
      icon: "architecture",
      description: "Building robust, scalable frontend infrastructures with atomic design principles and modern frameworks.",
      color: "primary"
    },
    {
      title: "Interactive Motion",
      icon: "motion_mode",
      description: "Creating cinematic user journeys through high-performance animations and tactile interaction states.",
      color: "secondary"
    },
    {
      title: "Digital Identity",
      icon: "security",
      description: "Crafting elite brand presence for tech-driven companies seeking a unique, premium market position.",
      color: "primary"
    }
  ];

  return (
    <section className="py-gap-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-display-lg text-headline-xl mb-gap-xl text-center">Core Operations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gap-md">
        {services.map((service, index) => (
          <div key={index} className="glass-panel p-10 rounded-[40px] border-white/5 hover:bg-white/5 transition-all duration-500 group text-center">
            <div className={`w-20 h-20 bg-${service.color}/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform`}>
              <span className={`material-symbols-outlined text-${service.color} text-4xl`}>{service.icon}</span>
            </div>
            <h3 className="font-display-lg text-headline-lg mb-4">{service.title}</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
