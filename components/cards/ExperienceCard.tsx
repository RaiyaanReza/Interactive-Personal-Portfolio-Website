"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const typeIcons = {
  work: Briefcase,
  hackathon: Trophy,
  competition: Code2,
};

const typeColors = {
  work: "from-[#10b981] to-[#059669]",
  hackathon: "from-[#0d9488] to-[#0f766e]",
  competition: "from-[#14b8a6] to-[#0d9488]",
};

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const Icon = typeIcons[experience.type];
  const colorClass = typeColors[experience.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-2.75 top-8 bottom-0 w-px bg-border last:hidden" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-5.5 h-5.5 rounded-full bg-linear-to-br ${colorClass} flex items-center justify-center ring-4 ring-background`}
      >
        <Icon className="h-3 w-3 text-white" />
      </div>

      {/* Content */}
      <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="font-semibold text-base">{experience.title}</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {experience.period}
          </span>
        </div>

        <p className="text-sm font-medium text-primary mb-2">
          {experience.organization}
        </p>

        <p className="text-sm text-muted-foreground mb-3">
          {experience.description}
        </p>

        {experience.tags && (
          <div className="flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
