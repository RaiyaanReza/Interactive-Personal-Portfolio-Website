"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/cards/SkillCard";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-muted/30">
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
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            My Tech Arsenal
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#dc2626] to-[#e11d48] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build intelligent, modern
            applications.
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
