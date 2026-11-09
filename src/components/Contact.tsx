"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { Sparkles } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // Mouse Spotlight Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_q8hg0bz",
        "template_ci67spo", 
        formRef.current!,
        "ppwJNWL0h3gBLoPi-"
      );

      alert("Message sent successfully ✅");
      formRef.current?.reset();
    } catch (error) {
      console.log("EMAIL ERROR:", error);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-background text-on-background"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-secondary text-sm mb-4">
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="font-semibold tracking-wider uppercase text-xs">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-on-background">
            Let’s Build Something Together
          </h2>
        </motion.div>

        {/* MAIN CARD WITH SPOTLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          className="group relative overflow-hidden rounded-[32px] border border-outline-variant bg-surface/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl transition-all duration-300 hover:border-primary/50"
        >
          {/* Mouse Follower Glow Spotlight Layer */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  450px circle at ${mouseX}px ${mouseY}px,
                  rgba(139, 92, 246, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          <div className="grid md:grid-cols-2 gap-12 relative z-20 items-center">

            {/* LEFT SIDE INFO */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-on-background mb-3">
                  Let’s Connect
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  Frontend Developer | MERN Stack Developer | UI/UX Designer. Open for freelance projects and remote opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {/* EMAIL */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-outline-variant/60 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium">Email Me</p>
                    <span className="text-sm sm:text-base font-semibold text-on-background break-all">
                      sahadathussain872856@gmail.com
                    </span>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-outline-variant/60 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium">Location</p>
                    <span className="text-sm sm:text-base font-semibold text-on-background">
                      Rangpur, Bangladesh
                    </span>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-outline-variant/60 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium">Phone / WhatsApp</p>
                    <span className="text-sm sm:text-base font-semibold text-on-background">
                      +880 1328654064
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">
                  Your Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl bg-surface border border-outline-variant text-on-background placeholder:text-on-surface-variant/50 outline-none focus:border-primary transition duration-300 shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">
                  Your Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl bg-surface border border-outline-variant text-on-background placeholder:text-on-surface-variant/50 outline-none focus:border-primary transition duration-300 shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 rounded-2xl bg-surface border border-outline-variant text-on-background placeholder:text-on-surface-variant/50 outline-none focus:border-primary transition duration-300 shadow-inner resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl bg-primary hover:bg-primary-container text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.3)] transition duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FaPaperPlane size={14} />
                  </>
                )}
              </motion.button>

            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}