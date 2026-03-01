"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Briefcase, Trophy, Code2, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import type { Experience as ExperienceType } from "@/lib/types";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

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

// Collect all experience images for the gallery
const experienceImages = [
  {
    src: "/images/experience pic/work_in_dhp_ta_ship.jpg",
    caption: "Teaching Assistant @ North South University",
    type: "work" as const,
  },
  {
    src: "/images/experience pic/solvio_ai_hackathon.jpg",
    caption: "Solvio AI Hackathon 2025 — Top 10 Finalist",
    type: "hackathon" as const,
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) {
  const Icon = typeIcons[experience.type];
  const colorClass = typeColors[experience.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-3.25 top-10 bottom-0 w-px bg-linear-to-b from-primary/30 to-transparent" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.15, type: "spring" }}
        viewport={{ once: true }}
        className={`absolute left-0 top-1 w-7 h-7 rounded-full bg-linear-to-br ${colorClass} flex items-center justify-center ring-4 ring-background shadow-lg shadow-primary/20`}
      >
        <Icon className="h-3.5 w-3.5 text-white" />
      </motion.div>

      {/* Content card */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="font-semibold text-base">{experience.title}</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10">
            {experience.period}
          </span>
        </div>

        <p className="text-sm font-medium text-primary mb-2">
          {experience.organization}
        </p>

        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
          {experience.description}
        </p>

        {experience.tags && (
          <div className="flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal bg-primary/5 border-primary/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent" />

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
            Experience
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#10b981] to-[#0d9488] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Academic experience, hackathon achievements, and competitive
            programming journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="order-2 lg:order-1">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-2 mb-6">
              <Camera className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Moments & Milestones</h3>
            </div>

            <div className="max-w-sm mx-auto lg:mx-0">
              <Swiper
                modules={[EffectCards, Pagination, Autoplay]}
                effect="cards"
                grabCursor={true}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                className="pb-12!"
              >
                {experienceImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-primary/10 shadow-2xl shadow-primary/5">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, 400px"
                      />
                      {/* Caption overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full bg-linear-to-r ${typeColors[img.type]}`}
                          />
                          <p className="text-white text-sm font-medium drop-shadow-lg">
                            {img.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
