import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full pt-gap-xl pb-gap-md border-t border-secondary/30 bg-surface dark:bg-surface-container-lowest flex flex-col gap-xl items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-gap-md">
        <div className="font-display-lg text-headline-xl text-primary">AETHER_OS</div>
        <div className="flex gap-gap-md">
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-500 font-body-md text-body-md" href="#">Documentation</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-500 font-body-md text-body-md" href="#">Architecture</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-500 font-body-md text-body-md" href="#">Changelog</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-500 font-body-md text-body-md" href="#">Security</a>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      <div className="text-secondary font-body-md text-body-md opacity-60">
        © 2024 AETHER_OS. ENGINEERED FOR THE VOID.
      </div>
    </footer>
  );
};

export default Footer;
