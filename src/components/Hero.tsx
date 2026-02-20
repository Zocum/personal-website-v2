import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {ready && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              color: { value: "#02aab0" },
              links: {
                color: "#02aab0",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                outModes: { default: "bounce" },
              },
              number: {
                density: { enable: true },
                value: 60,
              },
              opacity: { value: 0.4 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                resize: { enable: true },
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.6 } },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Hi, my name is{" "}
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
            Hector Jimenez Cruz
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-400 sm:text-2xl">
          I'm the developer you need.
        </p>
        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-8 py-3 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-white"
        >
          Who am I? <ChevronDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
