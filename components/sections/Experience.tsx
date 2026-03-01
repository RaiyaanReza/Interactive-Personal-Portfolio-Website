"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-muted/30">
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
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            My Journey
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#dc2626] to-[#e11d48] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Academic experience, hackathon achievements, and competitive
            programming journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
