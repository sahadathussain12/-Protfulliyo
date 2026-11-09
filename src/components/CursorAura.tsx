
"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const particles = Array.from({ length: 8 }, (_, i) => i);

function TrailParticle({
  index,
  mouseX,
  mouseY,
}: {
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const x = useSpring(mouseX, {
    stiffness: 220 - index * 18,
    damping: 24,
    mass: 0.5 + index * 0.1,
  });

  const y = useSpring(mouseY, {
    stiffness: 220 - index * 18,
    damping: 24,
    mass: 0.5 + index * 0.1,
  });

  const size = 12 - index * 0.8;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full"
      style={{
        x,
        y,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        opacity: 0.9 - index * 0.08,
        background:
          "radial-gradient(circle, #ffffff 0%, #c4b5fd 35%, #8b5cf6 75%, transparent 100%)",
        boxShadow:
          "0 0 12px rgba(139,92,246,0.8), 0 0 25px rgba(167,139,250,0.5)",
      }}
    />
  );
}

export default function CursorAura() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const auraX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const auraY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!media.matches) return;

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleLeave = () => {
      mouseX.set(-500);
      mouseY.set(-500);
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none">
      {/* Main Atmospheric Aura */}
      <motion.div
        className="fixed left-0 top-0 z-[9997] h-[320px] w-[320px] rounded-full"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0.10) 35%, rgba(139,92,246,0.03) 65%, transparent 75%)",
          filter: "blur(12px)",
        }}
      />

      {/* Inner Glow */}
      <motion.div
        className="fixed left-0 top-0 z-[9998] h-[90px] w-[90px] rounded-full"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(196,181,253,0.22), transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Following Particles */}
      {particles.map((index) => (
        <TrailParticle
          key={index}
          index={index}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
}
