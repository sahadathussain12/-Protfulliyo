import React from 'react';

const Contact = () => {
  return (
    <section className="py-gap-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="contact">
      <div className="glass-panel rounded-[48px] overflow-hidden border-white/10 glow-purple">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Terminal Section */}
          <div className="p-10 md:p-16 bg-black/40 border-r border-white/5">
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="font-mono text-primary space-y-4 text-sm md:text-base">
              <p className="animate-pulse">&gt;<span className="text-on-surface"> SELECT * FROM CONTACT_METHOD</span></p>
              <div className="pl-4 space-y-2 text-on-surface-variant">
                <p>// INITIALIZING_HANDSHAKE...</p>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  <span>ORACLE@AETHER_OS.DEV</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <span>NEO_TOKYO_HQ</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">encrypted</span>
                  <span>PGP_PUBLIC_KEY: 0x82...FA2</span>
                </div>
              </div>
              <p className="pt-8">&gt;<span className="text-on-surface"> AWAITING_INPUT...</span></p>
            </div>
          </div>
          {/* Form Section */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <form className="space-y-6">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Subject_ID</label>
                <input 
                  className="w-full bg-black/20 border-0 border-b-2 border-white/10 focus:ring-0 focus:border-secondary transition-colors py-3 text-body-md font-body-md placeholder:text-white/20" 
                  placeholder="Your Name" 
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Return_Address</label>
                <input 
                  className="w-full bg-black/20 border-0 border-b-2 border-white/10 focus:ring-0 focus:border-primary transition-colors py-3 text-body-md font-body-md placeholder:text-white/20" 
                  placeholder="email@example.com" 
                  type="email"
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Packet_Message</label>
                <textarea 
                  className="w-full bg-black/20 border-0 border-b-2 border-white/10 focus:ring-0 focus:border-secondary transition-colors py-3 text-body-md font-body-md placeholder:text-white/20 resize-none" 
                  placeholder="Initialize your inquiry..." 
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary font-bold py-4 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                <span>TRANSMIT_MESSAGE</span>
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
