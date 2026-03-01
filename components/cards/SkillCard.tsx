"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/lib/types";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full card-shine">
        {/* Category header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-lg bg-linear-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
            <span className="text-2xl">{category.skills[0]?.icon || "💻"}</span>
          </div>
          <h3 className="font-semibold text-lg">{category.category}</h3>
        </div>

        {/* Skills list */}
        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium flex items-center gap-2">
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15 + i * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-linear-to-r from-[#dc2626] to-[#e11d48]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
