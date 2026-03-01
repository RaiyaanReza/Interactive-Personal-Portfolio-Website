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
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Milestones & Recognition
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#dc2626] to-[#e11d48] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full text-center card-shine">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  <span className="inline-block text-xs font-medium text-primary">
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
