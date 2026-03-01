"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { ExternalLink, Github, Star, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Projects that have actual images uploaded
const projectsWithImages = [1, 2, 4, 6, 9, 11, 14];
const featuredProjects = projects.filter((p) => projectsWithImages.includes(p.id));
const remainingProjects = projects.filter((p) => !projectsWithImages.includes(p.id));

const categoryIcons: Record<string, string> = {
  AI: "🤖",
  Web: "🌐",
  ML: "📊",
  Mobile: "📱",
};

export function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
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
            Projects
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#10b981] to-[#0d9488] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects spanning AI, computer vision, web
            development, and machine learning.
          </p>
        </motion.div>

        {/* Featured Projects Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="pb-14!"
          >
            {featuredProjects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="w-[90%]! sm:w-[75%]! md:w-[65%]! lg:w-[55%]!"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 65vw, 55vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent opacity-80" />

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-linear-to-r from-[#10b981] to-[#0d9488] text-white border-0 gap-1 shadow-lg shadow-emerald-500/30">
                          <Star className="h-3 w-3 fill-current" /> Featured
                        </Badge>
                      </div>
                    )}

                    {/* Hover links overlay */}
                    <div className="absolute inset-0 bg-card/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-primary/20 border border-primary/30 hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-full bg-primary/20 border border-primary/30 hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal bg-primary/5 border-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 5 && (
                        <Badge variant="outline" className="text-xs font-normal">
                          +{project.tags.length - 5}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View More Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            size="lg"
            className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 gap-2"
          >
            {showMore ? (
              <>
                Show Less <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                View More Projects <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>

        {/* Remaining Projects Grid */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {remainingProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col card-shine">
                      {/* Image area */}
                      <div className="relative h-44 bg-linear-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.span
                            className="text-5xl drop-shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {categoryIcons[project.category] || "💻"}
                          </motion.span>
                        </div>

                        {/* Tech overlay */}
                        <div className="absolute bottom-2 left-2 right-2 flex gap-1 opacity-30">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-sm text-white/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-card/90 via-card/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {project.tags.slice(0, 4).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 4 && (
                            <Badge variant="outline" className="text-xs font-normal">
                              +{project.tags.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
