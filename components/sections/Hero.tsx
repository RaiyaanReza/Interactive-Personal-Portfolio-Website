"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/shared/AnimatedText";
import { socialLinks } from "@/lib/constants";

const floatingIcons = [
  { emoji: "🤖", x: "10%", y: "20%", delay: 0 },
  { emoji: "🧠", x: "85%", y: "15%", delay: 1 },
  { emoji: "⚛️", x: "75%", y: "75%", delay: 2 },
  { emoji: "🐍", x: "15%", y: "70%", delay: 0.5 },
  { emoji: "📊", x: "90%", y: "45%", delay: 1.5 },
  { emoji: "💻", x: "5%", y: "45%", delay: 2.5 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Ember particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/30 hidden sm:block"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: "-5%",
          }}
          animate={{
            y: ["-0vh", "-100vh"],
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating tech icons */}
      {floatingIcons.map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl sm:text-3xl opacity-20 hidden sm:block select-none"
          style={{ left: icon.x, top: icon.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {icon.emoji}
        </motion.span>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Raiyan</span>
        </motion.h1>

        {/* Animated role text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
        >
          <AnimatedText
            texts={[
              "AI & Deep Learning Engineer",
              "Full-Stack Web Developer",
              "Computer Vision Researcher",
              "CS Graduate from NSU",
            ]}
            className="justify-center"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          I build intelligent systems with AI/ML, craft modern web experiences,
          and turn research into real-world solutions. Currently exploring
          agentic AI workflows and computer vision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            size="lg"
            asChild
            className="bg-linear-to-r from-[#dc2626] to-[#e11d48] hover:from-[#b91c1c] hover:to-[#be123c] text-white border-0 px-8 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-shadow"
          >
            <a href="#projects">
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="px-8">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.email}
            className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
