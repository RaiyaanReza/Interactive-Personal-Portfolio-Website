"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/lib/types";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCard({ category, index }: SkillCardProps) {
  const circumference = 2 * Math.PI * 18;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
        {/* Hover glow overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        {/* Category header */}
        <div className="relative flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/15 to-secondary/10 flex items-center justify-center group-hover:from-primary/25 group-hover:to-secondary/20 transition-all duration-500">
              <span className="text-2xl">{category.skills[0]?.icon || "💻"}</span>
            </div>
            <div className="absolute -inset-1 rounded-xl bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{category.category}</h3>
            <p className="text-xs text-muted-foreground">
              {category.skills.length} skills
            </p>
          </div>
        </div>

        {/* Skills grid with circular progress rings */}
        <div className="relative grid grid-cols-2 gap-3">
          {category.skills.map((skill, i) => {
            const offset =
              circumference - (skill.level / 100) * circumference;
            const gradientId = `grad-${index}-${i}`;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + i * 0.06,
                }}
                viewport={{ once: true }}
                className="relative flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/60 border border-transparent hover:border-primary/20 transition-all duration-300 cursor-default"
              >
                {/* Circular progress ring */}
                <div className="relative shrink-0">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="transform -rotate-90"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-muted-foreground/15"
                    />
                    <motion.circle
                      cx="22"
                      cy="22"
                      r="18"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      stroke={`url(#${gradientId})`}
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: offset }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1 + i * 0.08,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                    <defs>
                      <linearGradient
                        id={gradientId}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-base">
                    {skill.icon}
                  </span>
                </div>

                {/* Skill info */}
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{skill.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {skill.level}%
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
