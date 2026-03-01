"use client";

import { useMemo } from "react";
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

function generateEmbers(count: number) {
  const embers = [];
  for (let i = 0; i < count; i++) {
    embers.push({
      left: 10 + Math.random() * 80,
      opacity: 0.2 + Math.random() * 0.3,
      duration: 6 + Math.random() * 6,
    });
  }
  return embers;
}

const EMBERS = generateEmbers(15);

export function Hero() {
  const embers = useMemo(() => EMBERS, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Extra hero glow effects */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-primary/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-accent/4 rounded-full blur-[80px] animate-pulse" />
      </div>

      {/* Green ember particles */}
      {embers.map((ember, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute w-1 h-1 rounded-full hidden sm:block"
          style={{
            left: `${ember.left}%`,
            bottom: "-5%",
            background: `rgba(16, 185, 129, ${ember.opacity})`,
          }}
          animate={{
            y: ["-0vh", "-100vh"],
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: ember.duration,
            delay: i * 0.6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating tech icons */}
      {floatingIcons.map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl sm:text-3xl opacity-15 hidden sm:block select-none"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text animate-text-glow">Raiyan</span>
        </motion.h1>

        {/* Animated role text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          I build intelligent systems with AI/ML, craft modern web experiences,
          and turn research into real-world solutions. Currently exploring
          agentic AI workflows and computer vision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            size="lg"
            asChild
            className="bg-linear-to-r from-[#10b981] to-[#0d9488] hover:from-[#059669] hover:to-[#0f766e] text-white border-0 px-8 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="px-8 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: socialLinks.github, icon: Github, label: "GitHub" },
            { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: socialLinks.email, icon: Mail, label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-lg bg-card/50 border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 backdrop-blur-sm"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
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
