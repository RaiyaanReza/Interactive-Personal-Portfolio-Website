"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Download,
  GraduationCap,
  MapPin,
  Briefcase,
  FolderGit2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Projects", value: "47+", icon: FolderGit2 },
  { label: "Semesters as TA", value: "3", icon: Briefcase },
  { label: "CGPA", value: "3.69", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-wider px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Get to <span className="gradient-text">Know Me</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#10b981] to-[#0d9488] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#10b981] via-[#0d9488] to-[#14b8a6] p-1 animate-gradient">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <div className="relative w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full overflow-hidden">
                    <Image
                      src="/images/profile_1.jpg"
                      alt="Khan Raiyan Ibne Reza"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Pulsating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-ring" />
              <div
                className="absolute -inset-2 rounded-full border border-primary/10 animate-pulse-ring"
                style={{ animationDelay: "1s" }}
              />

              {/* Floating accent badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-card border border-border shadow-lg shadow-primary/5 text-sm font-medium backdrop-blur-sm"
              >
                🤖 AI/ML
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-card border border-border shadow-lg shadow-primary/5 text-sm font-medium backdrop-blur-sm"
              >
                🌐 Web Dev
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Khan Raiyan Ibne Reza</h3>

            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm">
                BSc in Computer Science & Engineering — North South University
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Dhaka, Bangladesh</span>
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              I&apos;m a Computer Science & Engineering graduate from North South
              University with a CGPA of{" "}
              <strong className="text-foreground">3.69/4.00</strong>. My passion
              lies at the intersection of{" "}
              <strong className="text-foreground">Artificial Intelligence</strong>,{" "}
              <strong className="text-foreground">Deep Learning</strong>, and{" "}
              <strong className="text-foreground">Web Development</strong>.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in building intelligent systems using LLMs, LangChain,
              Computer Vision, and agentic AI frameworks. I&apos;ve served as a
              Teaching Assistant for 3 semesters and been a finalist at multiple
              national hackathons including Solvio AI 2025 (Top 10).
            </p>

            <Button
              asChild
              className="bg-linear-to-r from-[#10b981] to-[#0d9488] hover:from-[#059669] hover:to-[#0f766e] text-white border-0 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="text-center p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
