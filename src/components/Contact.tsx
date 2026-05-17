"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_q8hg0bz",
        "template_op9b9ng",
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
      className="py-section-gap px-margin-mobile md:px-gutter relative overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-[#00F5FF]/10 blur-[120px] top-10 left-10 rounded-full" />
        <div className="absolute w-[300px] h-[300px] bg-[#FF00FF]/10 blur-[120px] bottom-10 right-10 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-container-max mx-auto glass-card p-1 md:p-12 rounded-[3rem] overflow-hidden relative z-10"
      >
        <div className="bg-surface rounded-[2.8rem] p-8 md:p-16 flex flex-col md:flex-row gap-12">

          {/* LEFT */}
          <div className="md:w-1/2">
            <h2 className="text-[40px] font-bold text-white mb-6">
              LET’S_CONNECT
            </h2>

            <p className="text-[18px] text-on-surface-variant mb-10">
              Frontend Developer | React | Next.js | Node.js
            </p>

            <div className="space-y-4 text-sm">
              {/* email */}

              <div className="flex items-center gap-3 text-[#00F5FF] group">
                <FaEnvelope className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="text-base break-all">
                 sahadathussain872856@gmail.comnp
                </span>
              </div>

              {/* location  */}
              <div className="flex items-center gap-3 text-[#FF00FF] group">
                <FaMapMarkerAlt className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1" />
                <span className="text-base">
                  Rangpur, Bangladesh
                </span>
              </div>

              {/* phone number */}
              <div className="flex items-center gap-3 text-[#FF8A00] group">
                <FaPhoneAlt className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12" />

                <span className="text-base font-semibold tracking-wide">
                  +880 1328654064
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="md:w-1/2">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <input
                name="name"
                type="text"
                placeholder="YOUR NAME"
                required
                className="w-full bg-surface-container border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#00F5FF]"
              />

              <input
                name="email"
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full bg-surface-container border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#FF00FF]"
              />

              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                rows={4}
                required
                className="w-full bg-surface-container border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#FF8A00]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full cyber-acid-gradient text-white font-bold py-4 rounded-xl uppercase tracking-widest"
              >
                {loading ? "SENDING..." : "TRANSMIT MESSAGE"}
              </button>

            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}