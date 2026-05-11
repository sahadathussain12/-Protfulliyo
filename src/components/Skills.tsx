import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      icon: "developer_board",
      color: "primary",
      skills: [
        { name: "React / Next.js", level: "95%" },
        { name: "TypeScript", level: "90%" }
      ]
    },
    {
      title: "Creative",
      icon: "view_in_ar",
      color: "secondary",
      skills: [
        { name: "Three.js / GLSL", level: "85%" },
        { name: "GSAP / Motion", level: "92%" }
      ]
    },
    {
      title: "Backend",
      icon: "database",
      color: "primary",
      skills: [
        { name: "Node.js / Go", level: "80%" },
        { name: "GraphQL / SQL", level: "88%" }
      ]
    },
    {
      title: "Design",
      icon: "architecture",
      color: "secondary",
      skills: [
        { name: "Figma / Spline", level: "98%" },
        { name: "Brand Identity", level: "90%" }
      ]
    }
  ];

  return (
    <section className="py-gap-xl bg-surface-container-low/50" id="skills">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-display-lg text-headline-xl mb-gap-xl text-center">Engineered Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gap-md">
          {skillsData.map((category, index) => (
            <div key={index} className={`glass-panel p-8 rounded-3xl border-${category.color}/10 hover:border-${category.color}/40 transition-all duration-500 group`}>
              <div className="flex items-center gap-4 mb-6">
                <span className={`material-symbols-outlined text-4xl text-${category.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                  {category.icon}
                </span>
                <h3 className="font-display-lg text-headline-lg">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex}>
                    <div className="flex justify-between mb-2 font-label-sm text-on-surface-variant">
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${category.color} shadow-[0_0_10px_${category.color === 'primary' ? '#7c3aed' : '#7bd0ff'}]`} 
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
