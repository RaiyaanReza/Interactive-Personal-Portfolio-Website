"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// Pre-generate particle data to avoid Math.random() during render
function generateParticles(count: number) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      size: 1 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.3,
      left: Math.random() * 100,
      top: Math.random() * 100,
      yOffset: -30 - Math.random() * 50,
      xOffset: Math.random() * 30 - 15,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    });
  }
  return particles;
}

const PARTICLES = generateParticles(30);

export function AnimatedBackground() {
  const particles = useMemo(() => PARTICLES, []);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - adapts to theme */}
      <div
        className={
          isDark
            ? "absolute inset-0 bg-linear-to-br from-[#020a06] via-[#031a0e] to-[#020a06]"
            : "absolute inset-0 bg-linear-to-br from-[#ecfdf5] via-[#f0fdf8] to-[#ecfdf5]"
        }
      />

      {/* Aurora gradient overlay */}
      <div
        className={`absolute inset-0 animate-aurora ${isDark ? "opacity-30" : "opacity-20"}`}
        style={{
          background: isDark
            ? "linear-gradient(45deg, rgba(16,185,129,0.08) 0%, transparent 30%, rgba(13,148,136,0.06) 50%, transparent 70%, rgba(20,184,166,0.08) 100%)"
            : "linear-gradient(45deg, rgba(5,150,105,0.06) 0%, transparent 30%, rgba(13,148,136,0.05) 50%, transparent 70%, rgba(20,184,166,0.06) 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Mesh gradient blobs */}
      <motion.div
        className={`absolute w-150 h-150 rounded-full ${isDark ? "opacity-[0.04]" : "opacity-[0.12]"}`}
        style={{
          background: isDark
            ? "radial-gradient(circle, #10b981 0%, transparent 70%)"
            : "radial-gradient(circle, #059669 0%, transparent 70%)",
          top: "10%",
          left: "20%",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`absolute w-125 h-125 rounded-full ${isDark ? "opacity-[0.03]" : "opacity-[0.08]"}`}
        style={{
          background: isDark
            ? "radial-gradient(circle, #0d9488 0%, transparent 70%)"
            : "radial-gradient(circle, #0d9488 0%, transparent 70%)",
          bottom: "10%",
          right: "15%",
        }}
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`absolute w-100 h-100 rounded-full ${isDark ? "opacity-[0.025]" : "opacity-[0.07]"}`}
        style={{
          background: "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: isDark
              ? `rgba(16, 185, 129, ${p.opacity})`
              : `rgba(5, 150, 105, ${p.opacity * 0.6})`,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, p.yOffset, 0],
            x: [0, p.xOffset, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className={`absolute inset-0 animated-grid-bg ${isDark ? "" : "opacity-60"}`}
      />
    </div>
  );
}
