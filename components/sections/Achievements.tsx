"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  GraduationCap,
  BookOpen,
  Code2,
  Github,
} from "lucide-react";
import { achievements } from "@/data/achievements";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Award,
  GraduationCap,
  BookOpen,
  Code2,
  Github,
};

export function Achievements() {
  return (
    <section className="py-20 sm:py-28 relative">
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
            Achievements
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#10b981] to-[#0d9488] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full text-center card-shine">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 mx-auto mb-4 rounded-full bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-base mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  <span className="inline-block text-xs font-medium text-primary px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10">
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
