import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Omnia OS Dashboard",
      type: "CYBERNETIC_PLATFORM",
      description: "A real-time data visualization platform for global neural networks, featuring complex 3D shader backgrounds.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGPqmdMvhIqQtH5iYHFnSltUbFnYzbyW01DZqgKcXHUkcuoziTFsveQhT9FgQS8WVyvvMSEXsJ3Vwcx1C97-b75C6TH8Zqh6v6mp0Tl2LtyqnaZHDnN2qsyuxVTre69h59RBGAvdDbNjVKfhZdNHLEhAcKoRLvGOBx8re9O7bWOExuU8HChgc4fO22hvXKFqKc9J-8pidZqDISGuHIuCeVxd14eNzQnqa2R3wc0Ixqr50ZT882C2Fltf8Tmev5RX75IetyzWWKn5jU",
      size: "large",
      color: "primary",
      btn1: "VIEW_CODE",
      btn2: "LAUNCH_LIVE"
    },
    {
      title: "Void Messenger",
      type: "MOBILE_APP",
      description: "Encrypted communication layer.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpCFOtI3AKL0W77yjsJKWEuJdaoZq2lpPEGKh40i6fHfhnNSB2J8wzgAO2e-PcT9IvGjLEK0ZPQKNhmsp9PQ81zYucZDBj4LN4eiyiZiPjENMUiJe6VgRnptAIQLk00bPdas8xI7eqZyFA48Q3LXGpdHzXQEZoVyRVxMe-avKfO-eGSnW-MvViu4Q7OVwSMcQQcS6yKMlqnmdSINx8xi8grz85fvw2Eh1t-E-mdMIJrF1TuZHPug3Tm6v9Pu87ZRl5Ybg_uf09v9bw",
      size: "small",
      color: "secondary",
      btn1: "EXPLORE_SYSTEM"
    },
    {
      title: "Ether Wallet",
      type: "WEB_3.0",
      description: "Ultra-secure crypto gateway.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCde5lltdkGLt-_S5pMtYxFzAYWEu2RZM-mxqTDggpp8qs_HpkAk8-B972TI8B7mkGSr38oMbtMUX-ocLzdVydMxH40VZDJgcpfdabTNLe8JKot1yuWwAEl5AfBRHY4xubvmqQ-6KwYApPkayb9Hz5MhUBz3w-JptspJUE_itxPEME9Kj2DTfzeRdRKKEm9rYsHBfg1e51zaR7p5DIs-mrtXH5OwRNZS-NdKK-JW62CqQ-W4qKBcw2V2XWd1ExxQPpm_AplsJ2VnyES",
      size: "small",
      color: "primary",
      btn1: "DECRYPT_FILES"
    },
    {
      title: "Luxe Real Estate",
      type: "E-COMMERCE",
      description: "A cinematic property browsing experience for high-net-worth investors.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH4jD7F0WPbOUUyObKTBcGDV4PLBuWledyIQ5fObxnAYijHZJNefDfCkY8ltKugJIzpux79A2UxsriLKturYS4tVV_Z4tGzJ144Gxe89rLW_LJpKEtOFF8oZSS4Kt9mO787tYqcp3r6boKUSmB99WuFasWVsG-EL87DUvvarBDs29wSIuzWXUVhA6U80h96LigsZXOYEYvLRzVPClnDx2aI7xmyhuToaywUQuHnyVGjTsWz_0oWCDfYGFj-fcm90pqJzWM0jYiHLHk",
      size: "large",
      color: "secondary",
      btn1: "ACCESS_DATABASE",
      btn2: "TOUR_PROPERTY"
    }
  ];

  return (
    <section className="py-gap-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="projects">
      <h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl mb-gap-xl">Featured Deployments</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gap-md">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`${project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden rounded-3xl glass-panel border-white/5 aspect-video md:aspect-auto ${project.size === 'small' ? 'aspect-square' : ''}`}
          >
            <Image 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              width={project.size === 'large' ? 800 : 400}
              height={project.size === 'large' ? 450 : 400}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/${project.size === 'large' ? '40' : '60'} to-transparent flex flex-col justify-end p-8 ${project.size === 'large' ? 'opacity-90' : ''}`}>
              <span className={`bg-${project.color}/20 text-${project.color} px-3 py-1 rounded-full text-label-sm font-label-sm w-fit mb-4`}>
                {project.type}
              </span>
              <h3 className={`${project.size === 'large' ? 'text-headline-xl' : 'text-headline-lg'} font-display-lg mb-2`}>
                {project.title}
              </h3>
              <p className={`text-on-surface-variant mb-6 ${project.size === 'large' ? 'max-w-lg' : 'text-body-md'}`}>
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.btn1 && (
                  <button className={`bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full backdrop-blur-md transition-all ${project.size === 'small' ? 'w-full' : ''}`}>
                    {project.btn1}
                  </button>
                )}
                {project.btn2 && (
                  <button className={`${project.color === 'primary' ? 'bg-primary-container' : 'bg-secondary-container text-on-secondary-container'} px-6 py-2 rounded-full hover:glow-${project.color} transition-all`}>
                    {project.btn2}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
