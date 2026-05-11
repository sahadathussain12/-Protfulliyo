import React from 'react';

const About = () => {
  return (
    <section className="py-gap-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="about">
      <div className="text-center mb-gap-xl">
        <h2 className="font-display-lg text-headline-xl mb-4">The Architect Behind the Code</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gap-xl items-center">
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          I believe that code is more than logic; it is a medium for artistic expression. With over 6 years of experience in the digital void, I bridge the gap between complex engineering and breathtaking aesthetics. Every pixel is intentional, every interaction is a narrative.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-panel p-6 rounded-2xl text-center glow-blue hover:scale-105 transition-transform">
            <div className="text-display-lg font-display-lg text-secondary mb-2">06+</div>
            <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center glow-purple hover:scale-105 transition-transform">
            <div className="text-display-lg font-display-lg text-primary mb-2">120</div>
            <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest">Projects Shipped</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
