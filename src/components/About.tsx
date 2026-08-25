import { motion } from "framer-motion";
import profileImg from "../assets/newprofilepic.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold sm:text-4xl"
        >
          About me
        </motion.h2>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-48 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-[var(--color-primary)]/20 md:w-64"
          >
            <img
              src={profileImg}
              alt="Hector Jimenez Cruz"
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 text-gray-300 leading-relaxed"
          >
            <p>
              I'm an engineer from the volcanic island of La Palma, Canary
              Islands, based in Germany. I am a professional software developer
              with a focus on frontend technologies. However, I don't see 
              myself as only one kind of
              developer &mdash; I think of myself as the person you hand a
              problem to. Sometimes that problem is a design system and a WCAG
              audit; sometimes it's an inverter that keeps blowing its switches
              at 600 volts. The work is the same: understand the system, find
              where it actually breaks, fix it, prove it.
            </p>
            <p>
              Professionally, I have been shipping production software as a
              frontend developer for almost 4 years &mdash; TypeScript, React/Next.js and modern
              CSS, building accessible interfaces in Agile teams with design
              systems, code reviews and sprint planning. That's the part with a
              paper trail, and I'm good at it.
            </p>
            <p>
              The rest I taught myself because I wanted to know how it worked. I
              design and build high-power induction furnaces end to end: circuit
              and magnetics design, power electronics, embedded firmware in
              C/C++ on ESP32 and STM32, thermal and safety engineering, and the
              3D-printed hardware around it. I document those builds on YouTube
              and write up the guides so other people can follow them.
            </p>
            <p>
              I use AI-assisted tooling heavily and pragmatically &mdash; it
              makes me faster, it doesn't make the engineering judgment. I speak
              Spanish, German and English fluently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
