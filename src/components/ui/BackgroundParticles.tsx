"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 12;

interface Particle {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  blur: number;
  duration: number;
  delay: number;
  xRange: number;
  yRange: number;
  opacity: number;
}

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 18 + 8,
      color: i % 2 === 0 ? "rgba(6,182,212,0.28)" : "rgba(99,102,241,0.28)",
      blur: Math.random() * 8 + 2,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 6,
      xRange: Math.random() * 40 + 10,
      yRange: Math.random() * 40 + 10,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    requestAnimationFrame(() => setParticles(generated));
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            filter: `blur(${p.blur}px)`,
            opacity: p.opacity,
          }}
          animate={{
            x: [0, p.xRange, -p.xRange, 0],
            y: [0, -p.yRange, p.yRange, 0],
            opacity: [p.opacity, p.opacity + 0.15, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
