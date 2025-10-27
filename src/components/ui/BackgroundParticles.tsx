// Enable client-side rendering for this component
"use client";

// Import React hooks and framer-motion for animation
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Number of animated particles to display
const PARTICLE_COUNT = 12;

// Particle interface for animation properties
interface Particle {
  id: number; // Unique identifier
  top: string; // Top position (percentage)
  left: string; // Left position (percentage)
  size: number; // Diameter in px
  color: string; // Background color
  blur: number; // Blur effect in px
  duration: number; // Animation duration in seconds
  delay: number; // Animation delay in seconds
  xRange: number; // Horizontal movement range
  yRange: number; // Vertical movement range
  opacity: number; // Initial opacity
}

// BackgroundParticles component for animated background effect
export default function BackgroundParticles() {
  // State to hold generated particles
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate random particles on mount
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: PARTICLE_COUNT }).map(
      (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`, // Random top position
        left: `${Math.random() * 100}%`, // Random left position
        size: Math.random() * 18 + 8, // Random size between 8 and 26px
        color: i % 2 === 0 ? "rgba(6,182,212,0.28)" : "rgba(99,102,241,0.28)", // Alternate colors
        blur: Math.random() * 8 + 2, // Random blur between 2 and 10px
        duration: Math.random() * 10 + 8, // Random animation duration
        delay: Math.random() * 6, // Random animation delay
        xRange: Math.random() * 40 + 10, // Horizontal movement range
        yRange: Math.random() * 40 + 10, // Vertical movement range
        opacity: Math.random() * 0.5 + 0.3, // Random opacity between 0.3 and 0.8
      })
    );

    // Use requestAnimationFrame for smoother initial render
    requestAnimationFrame(() => setParticles(generated));
  }, []);

  return (
    // Container for all animated particles
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        // Render each particle as an animated div
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
            x: [0, p.xRange, -p.xRange, 0], // Animate horizontally
            y: [0, -p.yRange, p.yRange, 0], // Animate vertically
            opacity: [p.opacity, p.opacity + 0.15, p.opacity], // Animate opacity
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
