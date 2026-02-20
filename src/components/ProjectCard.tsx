import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { ExternalLink, Github, Video } from "lucide-react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (!node) return;
    VanillaTilt.init(node, {
      max: 6,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
    });
    return () => (node as unknown as { vanillaTilt: { destroy: () => void } }).vanillaTilt?.destroy();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div
        ref={tiltRef}
        className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm transition-shadow hover:shadow-xl hover:shadow-[var(--color-primary)]/10"
      >
        <div className="aspect-video overflow-hidden bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--color-primary-light)]"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <Github size={14} /> Source
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <Video size={14} /> Video
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
