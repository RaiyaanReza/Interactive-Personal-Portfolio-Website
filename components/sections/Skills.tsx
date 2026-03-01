"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/cards/SkillCard";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Skills & Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#10b981] to-[#0d9488] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {totalSkills} technologies and tools I work with to build
            intelligent, modern applications.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
