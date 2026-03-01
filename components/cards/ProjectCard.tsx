"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryGradients: Record<string, string> = {
  AI: "from-emerald-900/40 via-teal-800/30 to-green-900/20",
  Web: "from-teal-900/40 via-emerald-800/30 to-cyan-900/20",
  ML: "from-green-900/40 via-emerald-800/30 to-teal-900/20",
  Mobile: "from-cyan-900/40 via-teal-800/30 to-emerald-900/20",
};

const categoryIcons: Record<string, string> = {
  AI: "🤖",
  Web: "🌐",
  ML: "📊",
  Mobile: "📱",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = categoryGradients[project.category] || categoryGradients.AI;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col card-shine">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-linear-to-r from-[#10b981] to-[#0d9488] text-white border-0 gap-1 shadow-lg shadow-emerald-500/30">
              <Star className="h-3 w-3 fill-current" /> Featured
            </Badge>
          </div>
        )}

        {/* Image area with project visualization */}
        <div className={`relative h-48 bg-linear-to-br ${gradient} overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(13, 148, 136, 0.3) 0%, transparent 50%)`,
            }} />
          </div>
          
          {/* Project image or styled placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-5xl drop-shadow-lg">
                {categoryIcons[project.category] || "💻"}
              </span>
            </motion.div>
          </div>

          {/* Tech grid overlay */}
          <div className="absolute bottom-2 left-2 right-2 flex gap-1 opacity-30">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-sm text-white/80">
                {tag}
              </span>
            ))}
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tags */}
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
  );
}
