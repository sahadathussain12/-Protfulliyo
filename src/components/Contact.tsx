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
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW (kept but clean) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] top-10 left-10 rounded-full" />
        <div className="absolute w-[300px] h-[300px] bg-pink-500/10 blur-[120px] bottom-10 right-10 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
      >
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h2 className="text-4xl font-bold text-white">
              Let’s Connect
            </h2>

            <p className="text-gray-400">
              Frontend Developer | React | Next.js | UI Designer
            </p>

            {/* EMAIL */}
            <div className="flex items-center gap-3 text-cyan-400">
              <FaEnvelope />
              <span className="break-all">
                sahadathussain872856@gmail.com
              </span>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-3 text-pink-400">
              <FaMapMarkerAlt />
              <span>Rangpur, Bangladesh</span>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 text-orange-400">
              <FaPhoneAlt />
              <span>+880 1328654064</span>
            </div>

          </div>

          {/* RIGHT FORM */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-pink-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-orange-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </motion.div>
    </section>
  );
}