import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { ExternalLink, FileText, Github, Video } from "lucide-react";
import type { LinkKind, Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
}

const icons: Record<LinkKind, typeof Video> = {
  live: ExternalLink,
  source: Github,
  video: Video,
  guide: FileText,
};

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
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.status && (
              <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-amber-400">
                {project.status}
              </span>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-gray-800/80 px-3 py-1 text-[11px] font-medium text-gray-400"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map(({ kind, label, url }) => {
              const Icon = icons[kind];
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    kind === "live"
                      ? "inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--color-primary-light)]"
                      : "inline-flex items-center gap-1.5 rounded-full border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  }
                >
                  <Icon size={14} /> {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
